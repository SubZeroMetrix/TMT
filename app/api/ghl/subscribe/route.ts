import { NextRequest, NextResponse } from "next/server";
import {
  isGhlConfigured,
  getGhlMissingConfig,
  upsertSubscriber,
  normalizeEmail,
  GhlNotConfiguredError,
  type Publication,
} from "@/lib/ghl/adapter";

export const runtime = "nodejs";

/**
 * Single subscribe endpoint for every newsletter/CRM-interest surface that
 * writes to GHL (contract-driven, see lib/ghl/field-registry.ts). Publishes
 * from Field Notes, the Growth & Systems Brief, or both. GHL is the
 * permanent source of truth -- this route does not touch Supabase or any
 * other subscriber store.
 *
 * FAIL CLOSED: if the GHL adapter isn't confirmed production-ready (see
 * lib/ghl/adapter.ts for exactly why), this returns an honest 503 naming
 * the missing config, never a fake success.
 */

const VALID_GEOGRAPHIES = [
  "st-petersburg",
  "clearwater",
  "largo",
  "palm-harbor",
  "other-pinellas",
  "tampa-hillsborough",
];
const VALID_PUBLICATIONS: Publication[] = ["field-notes", "growth-systems-brief"];
const MAX_LEN = 200;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, number[]>();
const idempotencyStore = new Map<string, { at: number; result: unknown }>();
const IDEMPOTENCY_TTL_MS = 5 * 60_000;

function clamp(v: unknown): string {
  if (typeof v !== "string") return "";
  return v.replace(/[<>]/g, "").trim().slice(0, MAX_LEN);
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= MAX_LEN;
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateLimitStore.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  rateLimitStore.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

function pruneIdempotency() {
  const now = Date.now();
  for (const [key, entry] of idempotencyStore) {
    if (now - entry.at > IDEMPOTENCY_TTL_MS) idempotencyStore.delete(key);
  }
}

export async function GET() {
  return NextResponse.json({ configured: isGhlConfigured() });
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  if (!isGhlConfigured()) {
    const missing = getGhlMissingConfig();
    console.error("[ghl/subscribe] not configured, refusing to fake success", { missing });
    return NextResponse.json(
      {
        success: false,
        error:
          "Subscriptions are temporarily unavailable while the CRM connection is being finalized. Please try again later.",
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

  // Honeypot: a real user never fills this hidden field.
  if (clamp(body.website_url) !== "") {
    return NextResponse.json({ success: true }); // silently accept, do nothing
  }

  const email = clamp(body.email);
  if (!isValidEmail(email)) {
    return NextResponse.json({ success: false, error: "A valid email address is required." }, { status: 400 });
  }

  const publications = Array.isArray(body.publications)
    ? body.publications.filter((p): p is Publication => VALID_PUBLICATIONS.includes(p as Publication))
    : [];
  if (publications.length === 0) {
    return NextResponse.json(
      { success: false, error: "Select at least one publication." },
      { status: 400 },
    );
  }

  const geography = clamp(body.geography);
  if (geography && !VALID_GEOGRAPHIES.includes(geography)) {
    return NextResponse.json({ success: false, error: "Unrecognized geography value." }, { status: 400 });
  }

  if (body.emailConsent !== true) {
    return NextResponse.json(
      { success: false, error: "Email consent is required to subscribe." },
      { status: 400 },
    );
  }

  const idempotencyKey = req.headers.get("idempotency-key");
  if (idempotencyKey) {
    pruneIdempotency();
    const cached = idempotencyStore.get(idempotencyKey);
    if (cached) return NextResponse.json(cached.result);
  }

  try {
    const result = await upsertSubscriber({
      email: normalizeEmail(email),
      firstName: clamp(body.firstName) || undefined,
      lastName: clamp(body.lastName) || undefined,
      phone: clamp(body.phone) || undefined,
      trade: clamp(body.trade) || undefined,
      geography: geography || undefined,
      publications,
      emailConsent: true,
      smsConsent: body.smsConsent === true,
      consentSource: clamp(body.originalLandingPage) || clamp(body.originalDomain) || "unknown",
      originalDomain: clamp(body.originalDomain) || "unknown",
      originalLandingPage: clamp(body.originalLandingPage) || undefined,
      sourceTool: clamp(body.sourceTool) || undefined,
      utmSource: clamp(body.utmSource) || undefined,
      utmMedium: clamp(body.utmMedium) || undefined,
      utmCampaign: clamp(body.utmCampaign) || undefined,
      utmContent: clamp(body.utmContent) || undefined,
      utmTerm: clamp(body.utmTerm) || undefined,
      subscriptionInterests: Array.isArray(body.interests)
        ? body.interests.filter((i): i is string => typeof i === "string").map((i) => clamp(i)).slice(0, 20)
        : undefined,
    });

    const responseBody = { success: true, created: result.created };
    if (idempotencyKey) idempotencyStore.set(idempotencyKey, { at: Date.now(), result: responseBody });
    return NextResponse.json(responseBody);
  } catch (err) {
    if (err instanceof GhlNotConfiguredError) {
      return NextResponse.json(
        { success: false, error: "Subscriptions are temporarily unavailable. Please try again later." },
        { status: 503 },
      );
    }
    console.error("[ghl/subscribe] upsert failed", { message: err instanceof Error ? err.message : String(err) });
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }
}
