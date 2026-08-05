import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "St. Petersburg, FL",
  description:
    "Contractor technology and AI advisory based in St. Petersburg, Florida — serving Pinellas County trades and field-service businesses with vendor-neutral guidance.",
};

const localFocus = [
  "Home base for The Modern Trades Mentor LLC — PO Box 66093, St. Petersburg, FL 33767",
  "HVAC, plumbing, electrical, handyman, landscaping, painting, cleaning, and solar contractors in Pinellas County",
  "Owner-led businesses with 0–15 employees evaluating CRM, dispatch, invoicing, and AI tools",
  "Strategy calls, audits, and implementation guidance — practical and vendor-neutral",
];

const nearbyAreas = [
  { label: "Greater Tampa Bay", href: "/locations/tampa-bay" },
  { label: "Clearwater", href: "/locations/clearwater" },
  { label: "Tampa", href: "/locations/tampa" },
];

export default function StPetersburgPage() {
  return (
    <>
      <PageHero
        eyebrow="St. Petersburg, FL"
        title="Contractor Technology Advisory in St. Petersburg"
        description="Based in St. Petersburg and serving Pinellas County contractors who need honest software, AI, and workflow guidance — without a vendor agenda."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call" }}
        secondaryCta={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="text-lg text-navy/80 leading-relaxed">
            St. Petersburg and greater Pinellas County are home to thousands of small contractor and
            field-service businesses — many running on disconnected tools, manual follow-up, and
            pressure to &ldquo;do something with AI&rdquo; without a clear plan. We help those
            businesses get clarity before the next technology purchase.
          </p>
          <div className="mt-8">
            <BulletList items={localFocus} />
          </div>
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="grid lg:grid-cols-2 gap-8">
          <InfoCard title="Contact" dark>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+17276003425" className="text-cyan hover:text-white">727-600-3425</a>
              </li>
              <li>
                <a href="mailto:Info@TheModernTradesMentorllc.com" className="text-cyan hover:text-white">
                  Info@TheModernTradesMentorllc.com
                </a>
              </li>
              <li className="text-silver-light/75">PO Box 66093, St. Petersburg, FL 33767</li>
            </ul>
          </InfoCard>
          <InfoCard title="Nearby service areas" dark>
            <ul className="space-y-2">
              {nearbyAreas.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="text-sm text-silver-light/85 hover:text-cyan transition-colors">
                    {area.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </ContentSection>

      <CtaBand
        headline="St. Pete contractor ready for a practical plan?"
        body="Start with a Technology & AI Readiness Audit or book a strategy call."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call" }}
        secondary={{ label: "Explore the Audit", href: "/services/technology-audit" }}
      />
    </>
  );
}
