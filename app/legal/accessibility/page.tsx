import type { Metadata } from "next";
import { PageHero, ContentSection, CtaBand } from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "The Modern Trades Mentor accessibility commitment — our goal to make this website usable for all visitors and how to report accessibility issues.",
  alternates: { canonical: "/legal/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Accessibility Statement"
        description="We are committed to making our website accessible to contractors, partners, and visitors with diverse needs."
      />

      <ContentSection>
        <div className="max-w-3xl space-y-8 text-navy/75 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Our commitment</h2>
            <p>
              The Modern Trades Mentor LLC strives to ensure that themoderntradesmentor.com is
              accessible to people with disabilities. We aim to conform, over time, to widely
              recognized accessibility standards such as the Web Content Accessibility Guidelines
              (WCAG) 2.1 Level AA, where reasonably achievable for a small business website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Measures we take</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Semantic HTML structure and heading hierarchy on primary pages</li>
              <li>Skip-to-content link for keyboard and screen-reader navigation</li>
              <li>Text alternatives for meaningful images where applicable</li>
              <li>Sufficient color contrast for body text and interactive elements in our design system</li>
              <li>Keyboard-accessible navigation and focusable interactive controls</li>
              <li>Responsive layout for mobile, tablet, and desktop viewports</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Known limitations</h2>
            <p>
              Some third-party embedded tools (such as scheduling widgets) may not fully meet
              accessibility standards. We select vendors with care and welcome feedback when embedded
              content creates barriers. We continue to review and improve pages as the site evolves.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Alternative access</h2>
            <p>
              If you need information from this website in an alternative format, or prefer to discuss
              our services by phone or email rather than through the site, contact us directly:
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                Phone:{" "}
                <a href="tel:+17276003425" className="text-cyan-dim hover:text-cyan">727-600-3425</a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:Richard@TheModernTradesMentor.com" className="text-cyan-dim hover:text-cyan">
                  Richard@TheModernTradesMentor.com
                </a>
              </li>
              <li>Mail: PO Box 66093, St. Petersburg, FL 33767</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Report an issue</h2>
            <p>
              If you encounter an accessibility barrier on this website, please tell us the page URL,
              a description of the issue, and your preferred contact method. We will make a good-faith
              effort to address reported problems promptly.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Updates</h2>
            <p>
              This statement was last reviewed in August 2026 and may be updated as we improve the
              site or adopt new accessibility practices.
            </p>
          </section>
        </div>
      </ContentSection>

      <CtaBand
        headline="Need help accessing our content?"
        body="Contact us by phone or email — we're happy to assist."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
