import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Client feedback intake — /reviews#share-feedback.
 *
 * Checked for an existing delivery mechanism before writing this: no
 * email provider, database, or webhook was already wired into this repo
 * or configured in Vercel (Production/Preview/Development env vars were
 * inspected by name only — 19 vars exist, all Postgres/Neon/Payload/Blob
 * leftovers from an unrelated earlier scaffold this codebase doesn't use
 * — zero `pg`/`payload` dependencies in package.json).
 *
 * Primary delivery: Gmail / Google Workspace SMTP via nodemailer, gated
 * behind GMAIL_USER + GMAIL_APP_PASSWORD — both server-only env vars,
 * never NEXT_PUBLIC_. GMAIL_APP_PASSWORD is a 16-character Google App
 * Password (Google Account -> Security -> 2-Step Verification -> App
 * Passwords), NOT the regular account password — Google requires
 * 2-Step Verification to be enabled first to generate one.
 *
 * Falls back to Resend's REST API if RESEND_API_KEY is set instead, then
 * to a generic FEEDBACK_WEBHOOK_URL if neither is set. Until one of the
 * three is configured, the API honestly reports itself as unconfigured
 * and the frontend shows a real error instead of a fake "thank you" — it
 * never claims delivery it can't back up.
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

type Submission = {
  name: string;
  company: string;
  email: string;
  service: string;
  feedback: string;
  preferredPublicName: string;
  permissionToPublish: boolean;
  verificationStatus: "unverified";
  approvedForDisplay: false;
  submittedAt: string;
};

function emailBody(s: Submission) {
  return [
    `Name: ${s.name}`,
    `Company: ${s.company}`,
    `Email: ${s.email}`,
    `What TMT helped with: ${s.service || "(not specified)"}`,
    `Preferred public name/company: ${s.preferredPublicName || "(not specified)"}`,
    `Permission to publish: ${s.permissionToPublish ? "YES" : "No"}`,
    "",
    "Feedback:",
    s.feedback,
    "",
    `Submitted: ${s.submittedAt}`,
  ].join("\n");
}

async function deliverViaGmail(submission: Submission, gmailUser: string, gmailAppPassword: string) {
  const toEmail = process.env.FEEDBACK_TO_EMAIL || "themoderntradesmentor@gmail.com";
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });
  await transporter.sendMail({
    from: `TMT Feedback Form <${gmailUser}>`,
    to: toEmail,
    replyTo: submission.email,
    subject: `New client feedback — ${submission.name} (${submission.company})`,
    text: emailBody(submission),
  });
}

async function deliverViaResend(submission: Submission, resendApiKey: string) {
  const toEmail = process.env.FEEDBACK_TO_EMAIL || "themoderntradesmentor@gmail.com";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.FEEDBACK_FROM_EMAIL || "TMT Feedback Form <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: submission.email,
      subject: `New client feedback — ${submission.name} (${submission.company})`,
      text: emailBody(submission),
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}: ${await res.text().catch(() => "")}`);
  }
}

async function deliverViaWebhook(submission: Submission, webhookUrl: string) {
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  });
  if (!res.ok) {
    throw new Error(`Webhook responded ${res.status}: ${await res.text().catch(() => "")}`);
  }
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

  const submission: Submission = {
    name: (name as string).trim(),
    company: (company as string).trim(),
    email: (email as string).trim(),
    service: typeof service === "string" ? service.trim() : "",
    feedback: (feedback as string).trim(),
    preferredPublicName: typeof preferredPublicName === "string" ? preferredPublicName.trim() : "",
    permissionToPublish,
    verificationStatus: "unverified",
    approvedForDisplay: false,
    submittedAt: new Date().toISOString(),
  };

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const resendApiKey = process.env.RESEND_API_KEY;
  const webhookUrl = process.env.FEEDBACK_WEBHOOK_URL;

  if (!gmailUser && !resendApiKey && !webhookUrl) {
    console.error(
      "[feedback] No delivery mechanism configured (GMAIL_USER, RESEND_API_KEY, FEEDBACK_WEBHOOK_URL all unset) — submission was NOT delivered.",
      submission
    );
    return NextResponse.json(
      { error: "Feedback delivery is not configured yet. Please call or text 727-600-3425 instead." },
      { status: 503 }
    );
  }

  try {
    if (gmailUser && gmailAppPassword) {
      await deliverViaGmail(submission, gmailUser, gmailAppPassword);
    } else if (resendApiKey) {
      await deliverViaResend(submission, resendApiKey);
    } else {
      await deliverViaWebhook(submission, webhookUrl as string);
    }
  } catch (err) {
    console.error("[feedback] delivery failed", err);
    return NextResponse.json({ error: "Could not deliver feedback right now. Please try again shortly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
