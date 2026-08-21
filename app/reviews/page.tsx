import type { Metadata } from "next";
import { PageHero, ContentSection, InfoCard, CtaBand } from "@/components/PageChrome";
import SignatureName from "@/components/SignatureName";
import FeedbackForm from "@/components/FeedbackForm";
import { reviewsApprovedForWebsite } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Client Feedback & Reviews",
  description:
    "Verified Google reviews from contractors who have worked with The Modern Trades Mentor. Share honest feedback about working with TMT, or leave a Google review.",
  alternates: { canonical: "/reviews" },
};

const LINKEDIN_URL = "https://www.linkedin.com/company/the-modern-trades-mentor-llc/";

/**
 * Set once a verified Google Business Profile review link exists. Never
 * hardcode or guess this — an unverified or wrong link is worse than no
 * button. Until it's set, the "Leave a Google Review" section doesn't
 * render at all.
 */
const GOOGLE_REVIEW_URL = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL;

export const revalidate = 60;

export default async function ReviewsPage() {
  /**
   * Sourced from lib/reviews.ts, the TMT Review Proof Engine's canonical
   * record (frozen seed + Blob-persisted automatic ingestion). Only reviews
   * with reuseApproved = true AND usedOn.website = true render here —
   * approval is a real gate, not a formality.
   */
  const approved = await reviewsApprovedForWebsite();
  const VERIFIED_REVIEWS = approved.map((r) => ({
    name: r.reviewerName,
    rating: r.rating,
    date: new Date(`${r.reviewDate}T12:00:00Z`).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    quote: r.reviewText,
    source: r.reviewSource,
  }));

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Honest Feedback From Real Engagements"
        description="We are early in building this practice. We do not publish fake five-star reviews or invented testimonials — and we never will. What's below is pulled directly from Google."
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="text-lg text-navy/80 leading-relaxed">
            The Modern Trades Mentor LLC is a newer advisory practice founded by{" "}
            <SignatureName className="text-xl mr-1 align-baseline">Richard</SignatureName>
            Fritzke. As client engagements grow, we will share verified feedback here — with
            permission and in context — rather than manufacturing social proof.
          </p>
          <p className="mt-5 text-navy/75 leading-relaxed">
            If you have worked with us and would like to share your experience, we welcome that
            conversation. Constructive feedback helps us improve how we serve contractor and
            field-service businesses.
          </p>
        </div>

        <div className="mt-10 max-w-3xl space-y-5">
          {VERIFIED_REVIEWS.map((review) => (
            <InfoCard key={review.name + review.date} title={review.name}>
              <p className="text-xs font-mono uppercase tracking-wider text-cyan-dim mb-3">
                {"★".repeat(review.rating)} · {review.date} · via {review.source}
              </p>
              <p className="text-navy/80 leading-relaxed">{review.quote}</p>
            </InfoCard>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl">
          <InfoCard title="What you won't find here">
            <ul className="space-y-2 text-sm text-navy/70">
              <li>· Fabricated star ratings</li>
              <li>· Stock-photo testimonials</li>
              <li>· Anonymous quotes with no verifiable context</li>
              <li>· Reviews tied to software we sell — we sell no licenses</li>
            </ul>
          </InfoCard>
          <InfoCard title="Where to connect">
            <p className="mb-4">
              Follow or connect with The Modern Trades Mentor on LinkedIn for company updates and
              professional context.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-cyan-dim hover:text-cyan transition-colors"
            >
              View on LinkedIn →
            </a>
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="max-w-3xl text-center mx-auto">
          <p className="bp-label mb-4">Early stage, committed to honesty</p>
          <p className="text-silver-light/85 leading-relaxed">
            We would rather have a short, real list than a page filled with marketing fiction. As
            verified client feedback comes in, it will appear here with integrity — nothing more,
            nothing manufactured.
          </p>
        </div>
      </ContentSection>

      <ContentSection>
        <div id="share-feedback" className="scroll-mt-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
            Tell Us What Working With TMT Was Like
          </p>
          <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4">
            Share Your Experience
          </h2>
          <p className="text-navy/70 max-w-2xl mb-10 leading-relaxed">
            Honest feedback helps us improve. Tell us what working with The Modern Trades Mentor
            was like. We may contact you to verify your feedback. Nothing is published without
            your written permission.
          </p>
          <FeedbackForm />
        </div>
      </ContentSection>

      {GOOGLE_REVIEW_URL && (
        <ContentSection dark>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Prefer to leave a Google review?
            </h2>
            <p className="text-silver-light/85 leading-relaxed mb-6">
              Public reviews help other contractors understand what to expect from TMT.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-cta hover:bg-blue-hover transition-colors"
            >
              Leave a Google Review
            </a>
          </div>
        </ContentSection>
      )}

      <CtaBand
        headline="Worked with us — or considering it?"
        body="Share feedback, ask questions, or Book a Strategy Call to discuss your contractor technology needs."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
      />
    </>
  );
}
