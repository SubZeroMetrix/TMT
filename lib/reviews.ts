/**
 * TMT Review Proof Engine — read layer.
 *
 * Source of truth for review content is GHL's Reputation → Reviews module,
 * fed by the connected Google Business Profile. Two paths land records here:
 *
 *  1. lib/reviews-seed.ts — two real reviews captured manually before this
 *     pipeline existed (Brandon Harvey, Kim Gordon). Frozen; never edited.
 *  2. app/api/reviews/webhook — GHL's "Review Received" workflow trigger
 *     posts new Google/Facebook reviews here automatically; they're stored
 *     in Vercel Blob (lib/reviews-store.ts) and merged in at request time.
 *
 * Never invent, paraphrase, or edit review text — copy it verbatim.
 * `reuseApproved` gates any use beyond the /reviews page; it is set to
 * `true` only when the owner has explicitly said so. New reviews arriving
 * automatically NEVER default to approved — see classifyIncomingReview().
 * Publishing to an external channel (LinkedIn, Facebook, etc.) is a
 * SEPARATE action from approval — approval alone never triggers a post.
 * TMT never sends/posts autonomously; drafts wait for the owner.
 */

import { SEED_REVIEWS } from "./reviews-seed";
import { readStoredReviews, dedupeKey } from "./reviews-store";
import type { Review, ReviewStatus } from "./reviews-types";

export type { Review, ReviewStatus } from "./reviews-types";

/** All reviews: frozen seed + everything automatically ingested since. */
export async function getAllReviews(): Promise<Review[]> {
  const stored = await readStoredReviews();
  const seedKeys = new Set(SEED_REVIEWS.map(dedupeKey));
  const additive = stored.filter((r) => !seedKeys.has(dedupeKey(r)));
  return [...SEED_REVIEWS, ...additive];
}

export async function reviewsApprovedForWebsite(): Promise<Review[]> {
  const all = await getAllReviews();
  return all.filter((r) => r.reuseApproved && r.usedOn.website);
}

/**
 * Classification for a freshly-ingested review. Rating alone decides the
 * starting status; reuseApproved always starts null — a human decision,
 * never automatic, regardless of rating.
 */
export function classifyIncomingReview(rating: number): ReviewStatus {
  return rating >= 4 ? "PROOF_CANDIDATE" : "SERVICE_RECOVERY";
}
