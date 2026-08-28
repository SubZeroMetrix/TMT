import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { LOCATION_FAQS } from "@/lib/seo/faqs";

export const metadata: Metadata = {
  title: "Tampa, FL",
  description:
    "Contractor technology and AI advisory for Tampa, Florida — software selection, workflow improvement, and vendor-neutral guidance for owner-led trades businesses.",
  alternates: { canonical: "/locations/tampa" },
};

const localFocus = [
  "HVAC, plumbing, electrical, roofing, and general contracting operations across Hillsborough County",
  "Commercial and residential service businesses navigating CRM, dispatch, and follow-up gaps",
  "Owner-led service businesses evaluating software and AI without a vendor sales pitch",
  "Strategy calls and Growth & Systems Blueprints — remote or local as appropriate",
];

const nearbyAreas = [
  { label: "Greater Tampa Bay", href: "/locations/tampa-bay" },
  { label: "St. Petersburg", href: "/locations/st-petersburg" },
  { label: "Clearwater", href: "/locations/clearwater" },
];

export default function TampaPage() {
  return (
    <>
      <JsonLd data={faqSchema(LOCATION_FAQS["tampa"])} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/tampa-bay" },
          { name: "Tampa", path: "/locations/tampa" },
        ])}
      />
      <PageHero
        eyebrow="Tampa, FL"
        title="Contractor Technology Advisory in Tampa"
        description="Vendor-neutral guidance on software, AI, workflows, and modernization for Tampa-area contractor and field-service businesses."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="text-lg text-navy/80 leading-relaxed">
            The Modern Trades Mentor serves Tampa contractors who need practical technology
            guidance — not another platform demo. Whether you run HVAC, plumbing, electrical,
            roofing, or general contracting, we help you evaluate systems, fix workflows, and adopt
            AI where it actually earns its keep.
          </p>
          <div className="mt-8">
            <BulletList items={localFocus} />
          </div>
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="grid lg:grid-cols-2 gap-8">
          <InfoCard title="Start here" dark>
            <p>
              The Growth & Systems Blueprint is a structured review of your current software,
              workflows, staff readiness, and modernization priorities — producing a prioritized
              roadmap instead of a sales pitch.
            </p>
            <p className="mt-4">
              <Link href="/services/technology-audit" className="text-cyan hover:text-white text-sm font-mono uppercase tracking-wider">
                Explore the Audit →
              </Link>
            </p>
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

      <ContentSection>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
          Common questions
        </h2>
        <div className="mt-8 max-w-3xl space-y-7">
          {LOCATION_FAQS["tampa"].map((faq) => (
            <div key={faq.question}>
              <h3 className="font-display font-semibold text-lg text-navy">
                {faq.question}
              </h3>
              <p className="mt-2.5 text-navy/70 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <CtaBand
        headline="Tampa contractor looking for clarity?"
        body="Book a Strategy Call to discuss your current systems, team, and technology priorities."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Explore the Audit", href: "/services/technology-audit" }}
      />
    </>
  );
}
