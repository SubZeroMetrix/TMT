/**
 * TMT Review Proof Engine — canonical review record.
 *
 * One record per real review. Source of truth for review content is GHL's
 * Reputation → Reviews module, which is fed by the connected Google Business
 * Profile (confirmed live match, 2026-08-20: GHL shows 5.0/5, 2 reviews;
 * public Google local pack shows the same "5.0(2)" — no sync gap found).
 *
 * Never add an entry here without verifying it live in GHL or on the public
 * GBP listing first. Never invent, paraphrase, or edit review text — copy it
 * verbatim. `reuseApproved` gates any use beyond the /reviews page; it is set
 * to `true` only when the owner has explicitly said so. Publishing to an
 * external channel (LinkedIn, Facebook, etc.) is a SEPARATE action from
 * approval — approval alone never triggers a post. TMT never sends/posts
 * autonomously; drafts wait for the owner.
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
  id: string; // dedup key: source + reviewer (normalized) + date + rating
  reviewSource: "Google";
  reviewerName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  reviewText: string;
  reviewDate: string; // ISO date, GHL-displayed timestamp truncated to date
  originalUrl: string | "UNKNOWN"; // GBP does not expose a per-review deep link via the UI checked
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
  /**
   * AI-assisted draft proof assets. Verbatim review text only, reformatted
   * for the destination — never new claims, never invented detail. Draft
   * only; never auto-published. Present only for PROOF_CANDIDATE and later
   * statuses where a draft has actually been prepared.
   */
  drafts?: {
    website?: string;
    linkedin?: string;
  };
};

export const REVIEWS: Review[] = [
  {
    id: "google-brandon-harvey-2026-08-19-5",
    reviewSource: "Google",
    reviewerName: "Brandon Harvey",
    rating: 5,
    reviewText:
      "Been in the HVAC industry for 25 years. Trades mentor LLC has helped me to transpire my business separate from the trade itself. Thank you so much.",
    reviewDate: "2026-08-19",
    originalUrl: "UNKNOWN",
    tmtResponse:
      "Brandon, thank you for the kind words and for sharing your experience. We're honored Trades Mentor LLC helped you separate your business from the trade after 25 years in HVAC. It's been a pleasure supporting your growth, and we look forward to continuing to help as your business evolves. Wishing you continued success.",
    status: "PUBLISHED_USED",
    // Website use predates this engine (published on /reviews earlier this session).
    // No record of the owner approving any other channel for this review, so
    // this is INFERRED website-only approval, not asserted for LinkedIn/FB/IG.
    reuseApproved: true,
    approvalDate: null,
    usedOn: {
      website: true,
      linkedin: false,
      facebook: false,
      instagram: false,
      salesCollateral: false,
    },
    caseStudyCandidate: false,
    lastUsedDate: "2026-08-19",
    notes:
      "Website use predates this engine; treated as approved for website only. Not approved for LinkedIn/Facebook/sales collateral — owner has not been asked.",
  },
  {
    id: "google-kim-gordon-2026-08-20-5",
    reviewSource: "Google",
    reviewerName: "Kim Gordon",
    rating: 5,
    reviewText:
      "Richard helped me setup my CRM and automate my business and it is helping me run my business more efficiently and easier to communicate daily when I'm in the field. Also my phone is ringing more. I cannot recommend him enough.",
    reviewDate: "2026-08-20",
    originalUrl: "UNKNOWN",
    tmtResponse:
      "Thank you so much for the wonderful review, Kim. We're thrilled Richard's CRM setup and automation are making your field communication easier and bringing in more calls. We appreciate your recommendation and are here if you need any additional support.",
    status: "PROOF_CANDIDATE",
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
    notes:
      "Real review captured 2026-08-20 from GHL Reputation/Reviews, GBP-sourced. Draft assets prepared below. Awaiting owner's REUSE APPROVED decision before any channel use, including the website.",
    drafts: {
      website:
        "Richard helped me setup my CRM and automate my business and it is helping me run my business more efficiently and easier to communicate daily when I'm in the field. Also my phone is ringing more. I cannot recommend him enough. — Kim Gordon, 5-star Google review, August 20, 2026",
      linkedin:
        "A new review came in this week:\n\n\"Richard helped me setup my CRM and automate my business and it is helping me run my business more efficiently and easier to communicate daily when I'm in the field. Also my phone is ringing more. I cannot recommend him enough.\"\n— Kim Gordon\n\n5-star review, verified on Google.",
    },
  },
];

export function reviewsApprovedForWebsite(): Review[] {
  return REVIEWS.filter((r) => r.reuseApproved && r.usedOn.website);
}
