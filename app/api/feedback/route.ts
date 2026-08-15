import { NextResponse } from "next/server";

/**
 * Client feedback intake — /reviews#share-feedback.
 *
 * There is no email service, database, or CRM webhook already wired into
 * this repo (checked: no app/api routes existed before this one, no
 * nodemailer/resend/postgres/etc. in package.json). Rather than fake a
 * success response, delivery is gated behind FEEDBACK_WEBHOOK_URL — a
 * server-only env var (never NEXT_PUBLIC_, since this endpoint should not
 * be callable directly by a browser). Point it at any inbound webhook
 * (Zapier, Make, a GHL inbound webhook built in GHL itself, a Slack
 * webhook) and this starts working with no code changes. Until it's set,
 * the API honestly reports itself as unconfigured and the frontend shows
 * a real error instead of a fake "thank you."
 *
 * Every field here matches the internal data shape a future durable store
 * should use: name, company, email, service, feedback, preferredPublicName,
 * permissionToPublish, verificationStatus, approvedForDisplay, submittedAt.
 * verificationStatus and approvedForDisplay start unset — nothing here
 * marks a submission as verified or approved for display. That happens
 * only through human review, never automatically.
 */

const MAX_LEN = 5000;

function isNonEmptyString(v: unknown, max = MAX_LEN): v is string {
  return typeof v === "string" && v.trim().length > 0 && v.length <= max;
}

function isValidEmail(v: unknown): v is string {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 254;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: a real visitor never fills this hidden field.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    // Report success to the bot without doing anything — don't tip it off.
    return NextResponse.json({ ok: true });
  }

  const { name, company, email, service, feedback, preferredPublicName, permissionToPublish } = body;

  if (!isNonEmptyString(name, 200)) {
    return NextResponse.json({ error: "Full name is required." }, { status: 400 });
  }
  if (!isNonEmptyString(company, 200)) {
    return NextResponse.json({ error: "Company name is required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }
  if (!isNonEmptyString(feedback, MAX_LEN)) {
    return NextResponse.json({ error: "Feedback is required." }, { status: 400 });
  }
  if (service !== undefined && typeof service !== "string") {
    return NextResponse.json({ error: "Invalid service field." }, { status: 400 });
  }
  if (preferredPublicName !== undefined && typeof preferredPublicName !== "string") {
    return NextResponse.json({ error: "Invalid preferred name field." }, { status: 400 });
  }
  if (typeof permissionToPublish !== "boolean") {
    return NextResponse.json({ error: "Invalid consent field." }, { status: 400 });
  }

  const submission = {
    name: (name as string).trim(),
    company: (company as string).trim(),
    email: (email as string).trim(),
    service: typeof service === "string" ? service.trim() : "",
    feedback: (feedback as string).trim(),
    preferredPublicName: typeof preferredPublicName === "string" ? preferredPublicName.trim() : "",
    permissionToPublish,
    verificationStatus: "unverified" as const,
    approvedForDisplay: false,
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.FEEDBACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error(
      "[feedback] FEEDBACK_WEBHOOK_URL is not configured — submission was NOT delivered.",
      submission
    );
    return NextResponse.json(
      { error: "Feedback delivery is not configured yet. Please call or text 727-600-3425 instead." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
    });
    if (!res.ok) {
      console.error("[feedback] webhook delivery failed", res.status, await res.text().catch(() => ""));
      return NextResponse.json({ error: "Could not deliver feedback right now. Please try again shortly." }, { status: 502 });
    }
  } catch (err) {
    console.error("[feedback] webhook delivery threw", err);
    return NextResponse.json({ error: "Could not deliver feedback right now. Please try again shortly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
