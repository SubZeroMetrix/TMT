import { NextRequest, NextResponse } from "next/server";
import { isGhlConfigured, getGhlMissingConfig, upsertSubscriber, normalizeEmail, GhlNotConfiguredError } from "@/lib/ghl/adapter";

export const runtime = "nodejs";

// ---------------------------------------------------------------------------
// Pinellas Contractor Field Notes signup. GHL is the permanent contact/
// subscriber source of truth (2026-08-26 direction) -- this route calls the
// local GHL adapter directly instead of proxying to subzerometrix.com's
// Supabase-backed newsletter table. That Supabase path
// (supabase/migrations/0009_newsletter_subscribers.sql on subzerometrix)
// stays as an inactive fallback only, per instruction not to build a second
// subscriber database; it is not called from here anymore.
//
// FAIL CLOSED: the GHL adapter requires an explicit human-set
// GHL_PRODUCTION_LOCATION_CONFIRMED=true before it will write -- see
// lib/ghl/adapter.ts for exactly why. Until that's set, this returns an
// honest 503, same shape as before, now honest about the real reason.
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

  if (!isGhlConfigured()) {
    console.error("[field-notes-signup] GHL not configured", { missing: getGhlMissingConfig() });
    return NextResponse.json(
      {
        success: false,
        disabled: true,
        error: "Signup is temporarily unavailable while we finish setting up delivery. Please try again later.",
      },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: a real visitor never fills this hidden field.
  if (clamp((body as Record<string, unknown>).website_url) !== "") {
    return NextResponse.json({ success: true });
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
    : [];

  const emailConsent = body.email_consent === true;
  if (!emailConsent) {
    return NextResponse.json({ success: false, error: "Email consent is required to subscribe." }, { status: 400 });
  }

  try {
    const result = await upsertSubscriber({
      email: normalizeEmail(clean.email),
      firstName: clean.firstName,
      lastName: clean.lastName || undefined,
      trade: clean.trade || undefined,
      geography: clean.geography || undefined,
      publications: ["field-notes"],
      emailConsent: true,
      smsConsent: body.sms_consent === true,
      consentSource: clean.original_landing_page || clean.original_domain || "themoderntradesmentor.com",
      originalDomain: clean.original_domain || "themoderntradesmentor.com",
      originalLandingPage: clean.original_landing_page || undefined,
      sourceTool: "field-notes-signup-form",
      utmSource: clean.utm_source || undefined,
      utmMedium: clean.utm_medium || undefined,
      utmCampaign: clean.utm_campaign || undefined,
      subscriptionInterests: interests,
    });

    void result;
    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof GhlNotConfiguredError) {
      return NextResponse.json(
        { success: false, disabled: true, error: "Signup is temporarily unavailable. Please try again later." },
        { status: 503 },
      );
    }
    console.error("[field-notes-signup] GHL upsert failed", { message: err instanceof Error ? err.message : String(err) });
    return NextResponse.json({ success: false, error: "Something went wrong. Please try again." }, { status: 502 });
  }
}
