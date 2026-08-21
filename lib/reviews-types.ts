/**
 * TMT Review Proof Engine — canonical review record type.
 * Shared by the static seed (lib/reviews-seed.ts), the Blob-persisted store
 * written by app/api/reviews/webhook, and the read layer (lib/reviews.ts).
 */

export type ReviewStatus =
  | "NEW"
  | "RESPONSE_REQUIRED"
  | "SERVICE_RECOVERY"
  | "PROOF_CANDIDATE"
  | "APPROVED_FOR_REUSE"
  | "PUBLISHED_USED"
  | "CASE_STUDY_CANDIDATE"
  | "DO_NOT_REUSE";

export type Review = {
  id: string; // dedup key: source + reviewer (normalized) + date + rating, or the source's own review ID when available
  reviewSource: "Google" | "Facebook";
  reviewerName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  reviewText: string;
  reviewDate: string; // ISO date
  originalUrl: string | "UNKNOWN";
  tmtResponse: string | null;
  status: ReviewStatus;
  reuseApproved: boolean | null; // null = not yet decided by the owner
  approvalDate: string | null;
  usedOn: {
    website: boolean;
    linkedin: boolean;
    facebook: boolean;
    instagram: boolean;
    salesCollateral: boolean;
  };
  caseStudyCandidate: boolean;
  lastUsedDate: string | null;
  notes: string;
  drafts?: {
    website?: string;
    linkedin?: string;
  };
};
