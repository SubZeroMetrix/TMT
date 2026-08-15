import type { Metadata } from "next";
import { PageHero, ContentSection, CtaBand } from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "AI & Professional Guidance Disclaimer",
  description:
    "Disclaimer for AI recommendations and professional guidance from The Modern Trades Mentor — not legal, tax, or PE advice; human judgment required.",
  alternates: { canonical: "/legal/ai-disclaimer" },
};

export default function AiDisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="AI & Professional Guidance Disclaimer"
        description="Important limitations on the guidance, recommendations, and AI-related content provided by The Modern Trades Mentor LLC."
      />

      <ContentSection>
        <div className="max-w-3xl space-y-8 text-navy/75 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Scope of services</h2>
            <p>
              The Modern Trades Mentor LLC (&ldquo;TMT&rdquo;) provides contractor technology and
              operations advisory services — including software evaluation, workflow improvement,
              implementation planning, and practical AI adoption guidance. TMT does not provide legal,
              tax, accounting, or licensed professional-engineering services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Not professional advice</h2>
            <p>
              Content on this website, in articles, and in general advisory conversations is for
              informational and operational guidance purposes only. It is not a substitute for advice
              from qualified attorneys, accountants, tax professionals, licensed engineers, or other
              regulated professionals. You are responsible for obtaining independent professional advice
              for matters outside TMT&apos;s scope.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">AI recommendations require human judgment</h2>
            <p className="mb-3">
              Artificial intelligence tools — whether recommended, configured, or discussed in an
              engagement — can produce incomplete, inaccurate, or contextually inappropriate outputs.
              You acknowledge that:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>AI-generated content must be reviewed by qualified staff before use in customer communications, estimates, contracts, compliance documents, or financial decisions</li>
              <li>Automated workflows can fail silently or amplify errors in underlying processes</li>
              <li>Data access, permissions, and privacy controls must be configured deliberately — not assumed to be safe by default</li>
              <li>Performance, risk, and return on AI investments should be measured with agreed metrics, not assumed from vendor marketing</li>
              <li>Sensitive decisions — pricing, safety, contractual commitments, employment actions — require human accountability</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">No guarantee of outcomes</h2>
            <p>
              Technology and AI adoption outcomes depend on your business context, staff readiness,
              vendor performance, data quality, and implementation discipline. TMT does not guarantee
              specific financial results, productivity gains, or error-free operation of any software
              or AI tool discussed or recommended.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Experience references</h2>
            <p>
              References to Richard Fritzke&apos;s professional background — including HVAC, facilities,
              operations, and related experience — are provided for context only. They do not imply
              endorsement by any current or former employer, client, or government entity.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Vendor neutrality</h2>
            <p>
              TMT does not sell software licenses. Recommendations are intended to be vendor-neutral.
              We do not receive commissions or referral compensation that would influence guidance,
              unless a future commercial relationship exists and is disclosed to you in writing. You
              remain responsible for your own vendor contracts, licensing terms, and data agreements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Third-party tools and links</h2>
            <p>
              References to third-party software, research, or services are for informational purposes.
              TMT does not control third-party products and is not responsible for their performance,
              security, pricing, or terms. Your use of third-party tools is governed by those
              providers&apos; agreements and policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Contact</h2>
            <p>
              Questions about this disclaimer:{" "}
              <a href="mailto:Richard@TheModernTradesMentor.com" className="text-cyan-dim hover:text-cyan">
                Richard@TheModernTradesMentor.com
              </a>{" "}
              ·{" "}
              <a href="tel:+17276003425" className="text-cyan-dim hover:text-cyan">727-600-3425</a>
            </p>
          </section>
        </div>
      </ContentSection>

      <CtaBand
        headline="Questions about our advisory scope?"
        body="We are transparent about what we do and do not provide. Book a call to discuss your needs."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Terms of Use", href: "/legal/terms" }}
      />
    </>
  );
}
