import type { Metadata } from "next";
import { PageHero, ContentSection, InfoCard, CtaBand } from "@/components/PageChrome";
import SignatureName from "@/components/SignatureName";

export const metadata: Metadata = {
  title: "Reviews & Client Feedback",
  description:
    "The Modern Trades Mentor is in its early stage. We invite honest feedback from clients — no fabricated ratings or testimonials.",
  alternates: { canonical: "/reviews" },
  robots: { index: false, follow: true },
};

const LINKEDIN_URL = "https://www.linkedin.com/company/the-modern-trades-mentor-llc/";

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Honest Feedback From Real Engagements"
        description="We are early in building this practice. We do not publish fake five-star reviews or invented testimonials — and we never will."
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
            We would rather have no reviews page filled with real silence than a page filled with
            marketing fiction. When we have verified client feedback worth sharing, it will appear
            here with integrity.
          </p>
        </div>
      </ContentSection>

      <CtaBand
        headline="Worked with us — or considering it?"
        body="Share feedback, ask questions, or Book a Shop Visit to discuss your contractor technology needs."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call" }}
      />
    </>
  );
}
