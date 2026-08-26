import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// ---------------------------------------------------------------------------
// Pinellas Contractor Field Notes signup. Per explicit instruction: reuse the
// existing shared SubZeroMetrix newsletter architecture rather than creating
// a second database or independent subscriber list. This route is a
// server-to-server proxy (Node fetch, not a browser call -- no CORS issue,
// no new credentials) to subzerometrix.com's real /api/newsletter/subscribe
// endpoint, which is the actual owner of the newsletter_subscribers table.
//
// That table is defined in migration 0009_newsletter_subscribers.sql but NOT
// YET APPLIED (no DB connection string in that environment) -- the shared
// API already returns an honest 503 in that case, which this route forwards
// verbatim rather than masking it with a fake success.
// ---------------------------------------------------------------------------

const ALLOWED_FIELDS = [
  "firstName", "lastName", "email", "trade", "geography", "interests",
  "original_domain", "original_landing_page", "utm_source", "utm_medium", "utm_campaign",
  "email_consent", "sms_consent",
] as const;

const VALID_GEOGRAPHIES = ["st-petersburg", "clearwater", "largo", "palm-harbor", "other-pinellas", "tampa-hillsborough"];
const MAX_LEN = 200;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, number[]>();

function clamp(v: unknown): string {
  if (typeof v !== "string") return "";
  return v.replace(/[<>]/g, "").trim().slice(0, MAX_LEN);
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateLimitStore.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  rateLimitStore.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ success: false, error: "Too many requests. Please try again in a minute." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const clean: Record<string, string> = {};
  for (const key of ALLOWED_FIELDS) {
    if (key in body && key !== "interests") clean[key] = clamp(body[key]);
  }

  if (!clean.email || !isValidEmail(clean.email)) {
    return NextResponse.json({ success: false, error: "A valid email address is required." }, { status: 400 });
  }
  if (!clean.firstName) {
    return NextResponse.json({ success: false, error: "First name is required." }, { status: 400 });
  }
  if (clean.geography && !VALID_GEOGRAPHIES.includes(clean.geography)) {
    return NextResponse.json({ success: false, error: "Invalid geography." }, { status: 400 });
  }

  const interests = Array.isArray(body.interests)
    ? body.interests.filter((i): i is string => typeof i === "string").map((i) => i.slice(0, 60)).slice(0, 20)
    : undefined;

  const emailConsent = body.email_consent === true;

  try {
    const res = await fetch("https://www.subzerometrix.com/api/newsletter/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: clean.email,
        publication: "pinellas-field-notes",
        firstName: clean.firstName,
        lastName: clean.lastName || undefined,
        trade: clean.trade || undefined,
        geography: clean.geography || undefined,
        interests,
        emailConsent,
        attribution: {
          original_domain: clean.original_domain || "themoderntradesmentor.com",
          original_landing_page: clean.original_landing_page || "",
          source_tool: "field-notes-signup-form",
          utm_source: clean.utm_source || "",
          utm_medium: clean.utm_medium || "",
          utm_campaign: clean.utm_campaign || "",
        },
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (res.status === 503) {
      // Forward the shared API's honest "migration not applied yet" state
      // verbatim -- never show a fake success.
      return NextResponse.json({ success: false, disabled: true, error: data.error || "Signup is temporarily unavailable. Please try again later." }, { status: 503 });
    }
    if (!res.ok) {
      console.log(`[field-notes-signup] shared API rejected submission, status ${res.status}`);
      return NextResponse.json({ success: false, error: data.error || "Submission could not be processed." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    console.log("[field-notes-signup] unexpected error reaching shared newsletter API");
    return NextResponse.json({ success: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
