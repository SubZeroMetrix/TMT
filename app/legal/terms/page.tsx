import type { Metadata } from "next";
import { PageHero, ContentSection, CtaBand } from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for The Modern Trades Mentor website and advisory guidance — limitations, acceptable use, and disclaimers.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="Last updated: August 2026. By using this website, you agree to these terms."
      />

      <ContentSection>
        <div className="max-w-3xl space-y-8 text-navy/75 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Agreement</h2>
            <p>
              These Terms of Use govern your access to and use of the website operated by The Modern
              Trades Mentor LLC (&ldquo;TMT,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) at themoderntradesmentor.com and related pages. By using this site,
              you agree to these terms. If you do not agree, please do not use the site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Nature of content</h2>
            <p>
              Content on this website — including articles, service descriptions, and general
              guidance — is provided for informational purposes. It does not constitute a binding
              offer, guarantee of results, or substitute for a formal advisory engagement agreement.
              Specific services, scope, fees, and deliverables are defined in separate written
              agreements when you engage TMT.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Advisory guidance only</h2>
            <p>
              TMT provides technology and operations guidance for contractors. We do not provide
              legal, tax, accounting, or licensed professional-engineering services. You are
              responsible for consulting appropriate licensed professionals for matters outside our
              scope. See also our{" "}
              <a href="/legal/ai-disclaimer" className="text-cyan-dim hover:text-cyan">
                AI &amp; Professional Guidance Disclaimer
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Vendor neutrality</h2>
            <p>
              TMT does not sell software licenses. Recommendations are intended to be vendor-neutral.
              We do not receive commissions or referral compensation that would influence guidance,
              unless a future commercial relationship exists and is disclosed to you in writing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Acceptable use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use the site for unlawful purposes or to transmit harmful or unauthorized content</li>
              <li>Attempt to gain unauthorized access to our systems or data</li>
              <li>Scrape, copy, or republish site content for commercial use without written permission</li>
              <li>Misrepresent your affiliation with TMT or Richard Fritzke</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Intellectual property</h2>
            <p>
              Site content, branding, logos, and original materials are owned by The Modern Trades
              Mentor LLC or used with permission. You may view and print content for personal,
              non-commercial reference. Reproduction or distribution requires prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Disclaimer of warranties</h2>
            <p>
              This website and its content are provided &ldquo;as is&rdquo; without warranties of any
              kind, express or implied. We do not warrant that the site will be uninterrupted,
              error-free, or that content is complete or current at all times.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, TMT and its principals shall not be liable for
              any indirect, incidental, special, or consequential damages arising from your use of
              this website or reliance on general content published here. Liability for paid advisory
              services is governed by the applicable service agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Governing law</h2>
            <p>
              These terms are governed by the laws of the State of Florida, without regard to
              conflict-of-law principles. Disputes shall be resolved in courts located in Pinellas
              County, Florida, unless otherwise required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a href="mailto:Info@TheModernTradesMentorllc.com" className="text-cyan-dim hover:text-cyan">
                Info@TheModernTradesMentorllc.com
              </a>{" "}
              · PO Box 66093, St. Petersburg, FL 33767 ·{" "}
              <a href="tel:+17276003425" className="text-cyan-dim hover:text-cyan">727-600-3425</a>
            </p>
          </section>
        </div>
      </ContentSection>

      <CtaBand
        headline="Ready to discuss advisory services?"
        body="Website terms are separate from formal engagement agreements. Book a call to learn more."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
