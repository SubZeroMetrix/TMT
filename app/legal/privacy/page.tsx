import type { Metadata } from "next";
import { PageHero, ContentSection, CtaBand } from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for The Modern Trades Mentor LLC — how we collect, use, and protect information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: August 2026. This policy describes how The Modern Trades Mentor LLC handles information collected through this website."
      />

      <ContentSection>
        <div className="max-w-3xl prose-navy space-y-8 text-navy/75 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Who we are</h2>
            <p>
              The Modern Trades Mentor LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              provides contractor technology and AI advisory services. Our mailing address is PO Box
              66093, St. Petersburg, FL 33767. Contact:{" "}
              <a href="mailto:Info@TheModernTradesMentorllc.com" className="text-cyan-dim hover:text-cyan">
                Info@TheModernTradesMentorllc.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Information we collect</h2>
            <p className="mb-3">We may collect information you voluntarily provide, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name, email address, phone number, and company name submitted through contact or booking forms</li>
              <li>Messages and details you share when requesting a strategy call or advisory services</li>
              <li>Basic technical data such as browser type, device information, and pages visited (via standard analytics or server logs, if enabled)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">How we use information</h2>
            <p className="mb-3">We use collected information to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to inquiries and schedule advisory conversations</li>
              <li>Deliver services you request, including audits and consulting engagements</li>
              <li>Improve website content and user experience</li>
              <li>Send service-related communications you have requested or agreed to receive</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">What we do not do</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>We do not sell your personal information to third parties</li>
              <li>We do not share contact details with software vendors for marketing purposes</li>
              <li>We do not use your information for purposes unrelated to our advisory services without your consent</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Cookies and tracking</h2>
            <p>
              This website may use cookies or similar technologies for basic functionality, analytics,
              or embedded third-party tools (such as scheduling widgets). You can control cookies
              through your browser settings. If we add analytics or marketing tools that materially
              change how data is collected, this policy will be updated.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Data retention and security</h2>
            <p>
              We retain contact and engagement information for as long as needed to provide services,
              maintain business records, and comply with applicable legal obligations. We take
              reasonable measures to protect information against unauthorized access, but no method of
              transmission or storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Your choices</h2>
            <p>
              You may request access to, correction of, or deletion of personal information we hold
              about you by contacting us at{" "}
              <a href="mailto:Info@TheModernTradesMentorllc.com" className="text-cyan-dim hover:text-cyan">
                Info@TheModernTradesMentorllc.com
              </a>
              . We will respond within a reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated effective date.
            </p>
          </section>
        </div>
      </ContentSection>

      <CtaBand
        headline="Questions about privacy?"
        body="Contact us and we will respond promptly."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
