import { NextRequest, NextResponse } from "next/server";
import { isGhlConfigured, getGhlMissingConfig, unsubscribe, normalizeEmail, GhlNotConfiguredError } from "@/lib/ghl/adapter";

export const runtime = "nodejs";

/** Global unsubscribe/suppression against the GHL contact record. Same fail-closed contract as /api/ghl/subscribe. */

function isValidEmail(v: string): boolean {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 200;
}

export async function POST(req: NextRequest) {
  if (!isGhlConfigured()) {
    console.error("[ghl/unsubscribe] not configured", { missing: getGhlMissingConfig() });
    return NextResponse.json(
      { success: false, error: "This is temporarily unavailable. Please contact us directly to unsubscribe." },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!isValidEmail(email)) {
    return NextResponse.json({ success: false, error: "A valid email address is required." }, { status: 400 });
  }

  try {
    const result = await unsubscribe(normalizeEmail(email), "unsubscribe-form");
    // Always return success even if not found -- never reveal whether an email exists in the system.
    void result;
    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof GhlNotConfiguredError) {
      return NextResponse.json(
        { success: false, error: "This is temporarily unavailable. Please contact us directly to unsubscribe." },
        { status: 503 },
      );
    }
    console.error("[ghl/unsubscribe] failed", { message: err instanceof Error ? err.message : String(err) });
    return NextResponse.json({ success: false, error: "Something went wrong. Please try again." }, { status: 502 });
  }
}
