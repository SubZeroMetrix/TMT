/**
 * Seed reviews — the two real reviews captured before the automatic
 * ingestion pipeline (webhook + Blob store) existed. Kept as permanent seed
 * data so nothing is lost; new reviews from 2026-08-20 onward arrive via
 * app/api/reviews/webhook and live in the Blob store, not here.
 *
 * Never add a new review to this file. Add it through the real ingestion
 * path (a live GHL "Review Received" workflow event) so the record carries
 * genuine provenance. This file is frozen history.
 */
import type { Review } from "./reviews-types";

export const SEED_REVIEWS: Review[] = [
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
    status: "APPROVED_FOR_REUSE",
    reuseApproved: true,
    approvalDate: "2026-08-20",
    usedOn: {
      website: true,
      linkedin: false,
      facebook: false,
      instagram: false,
      salesCollateral: false,
    },
    caseStudyCandidate: false,
    lastUsedDate: "2026-08-20",
    notes:
      'Real review captured 2026-08-20 from GHL Reputation/Reviews, GBP-sourced. Owner approved reuse 2026-08-20 ("APPROVE GET IT LISTED EVERYWHERE"). Website: live. LinkedIn: draft ready in `drafts.linkedin` but NOT posted — TMT never posts autonomously. Facebook/Instagram/sales collateral: no draft prepared yet.',
    drafts: {
      website:
        "Richard helped me setup my CRM and automate my business and it is helping me run my business more efficiently and easier to communicate daily when I'm in the field. Also my phone is ringing more. I cannot recommend him enough. — Kim Gordon, 5-star Google review, August 20, 2026",
      linkedin:
        "A new review came in this week:\n\n\"Richard helped me setup my CRM and automate my business and it is helping me run my business more efficiently and easier to communicate daily when I'm in the field. Also my phone is ringing more. I cannot recommend him enough.\"\n— Kim Gordon\n\n5-star review, verified on Google.",
    },
  },
];
