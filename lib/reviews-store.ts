import { put, head } from "@vercel/blob";
import type { Review } from "./reviews-types";

const STORE_PATHNAME = "tmt-review-proof-engine/reviews.json";

/**
 * Additively-ingested reviews (arrived via app/api/reviews/webhook), stored
 * as one small JSON array in Vercel Blob. Read at request/build time and
 * merged with the frozen seed in lib/reviews.ts. Never write the seed file
 * from here — this store is strictly the automatic-ingestion path.
 */
export async function readStoredReviews(): Promise<Review[]> {
  try {
    const meta = await head(STORE_PATHNAME).catch(() => null);
    if (!meta) return [];
    const res = await fetch(meta.url, { cache: "no-store" });
    if (!res.ok) return [];
    const data = (await res.json()) as Review[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function writeStoredReviews(reviews: Review[]): Promise<void> {
  await put(STORE_PATHNAME, JSON.stringify(reviews, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export function dedupeKey(r: Pick<Review, "reviewSource" | "reviewerName" | "reviewDate" | "rating" | "reviewText">): string {
  return [
    r.reviewSource.toLowerCase(),
    r.reviewerName.trim().toLowerCase().replace(/\s+/g, " "),
    r.reviewDate,
    r.rating,
    r.reviewText.trim().toLowerCase().slice(0, 80),
  ].join("|");
}
