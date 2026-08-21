import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { readStoredReviews, writeStoredReviews, dedupeKey } from "@/lib/reviews-store";
import { classifyIncomingReview } from "@/lib/reviews";
import { SEED_REVIEWS } from "@/lib/reviews-seed";
import type { Review } from "@/lib/reviews-types";

/**
 * Receives GHL's "Review Received" workflow trigger (Google/Facebook).
 * Auth: shared-secret query param, since GHL's outbound webhook action does
 * not support HMAC signing — the secret lives in REVIEWS_WEBHOOK_SECRET and
 * is appended to the target URL configured in the GHL workflow, never in
 * source. Every new review lands with reuseApproved:null; rating alone
 * decides PROOF_CANDIDATE vs SERVICE_RECOVERY. No auto-publish, ever.
 */

type IncomingPayload = {
  reviewId?: string;
  source?: string; // "google" | "facebook" (case varies by GHL payload)
  reviewer?: { name?: string } | string;
  reviewerName?: string;
  rating?: number | string;
  reviewText?: string;
  review?: string;
  reviewDate?: string;
  date?: string;
  reviewUrl?: string;
  url?: string;
};

function normalizeSource(raw: string | undefined): Review["reviewSource"] {
  return raw?.toLowerCase().includes("facebook") ? "Facebook" : "Google";
}

function toReview(payload: IncomingPayload): Review | null {
  const reviewerName =
    (typeof payload.reviewer === "object" ? payload.reviewer?.name : payload.reviewer) ||
    payload.reviewerName;
  const reviewText = payload.reviewText || payload.review;
  const ratingNum = Number(payload.rating);

  if (!reviewerName || !reviewText || !Number.isFinite(ratingNum)) return null;
  const rating = Math.min(5, Math.max(1, Math.round(ratingNum))) as Review["rating"];
  const reviewDate = (payload.reviewDate || payload.date || new Date().toISOString()).slice(0, 10);
  const reviewSource = normalizeSource(payload.source);

  const status = classifyIncomingReview(rating);

  return {
    id:
      payload.reviewId ||
      `${reviewSource.toLowerCase()}-${reviewerName.toLowerCase().replace(/\s+/g, "-")}-${reviewDate}-${rating}`,
    reviewSource,
    reviewerName,
    rating,
    reviewText,
    reviewDate,
    originalUrl: payload.reviewUrl || payload.url || "UNKNOWN",
    tmtResponse: null,
    status,
    reuseApproved: null,
    approvalDate: null,
    usedOn: {
      website: false,
      linkedin: false,
      facebook: false,
      instagram: false,
      salesCollateral: false,
    },
    caseStudyCandidate: false,
    lastUsedDate: null,
    notes: `Ingested automatically via GHL Review Received webhook on ${new Date().toISOString().slice(0, 10)}. Awaiting owner's REUSE APPROVED decision.`,
  };
}

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (!process.env.REVIEWS_WEBHOOK_SECRET || secret !== process.env.REVIEWS_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let payload: IncomingPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const incoming = toReview(payload);
  if (!incoming) {
    return NextResponse.json({ error: "missing required review fields" }, { status: 400 });
  }

  const seedKeys = new Set(SEED_REVIEWS.map(dedupeKey));
  const stored = await readStoredReviews();
  const existingKeys = new Set([...seedKeys, ...stored.map(dedupeKey)]);
  const key = dedupeKey(incoming);

  if (existingKeys.has(key) || stored.some((r) => r.id === incoming.id)) {
    return NextResponse.json({ status: "duplicate", id: incoming.id });
  }

  const updated = [...stored, incoming];
  await writeStoredReviews(updated);
  revalidatePath("/reviews");

  return NextResponse.json({ status: "ingested", id: incoming.id, reviewStatus: incoming.status });
}
