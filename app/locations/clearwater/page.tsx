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
  title: "Clearwater, FL",
  description:
    "Contractor technology and AI advisory for Clearwater, Florida — vendor-neutral software selection and workflow guidance for Pinellas County trades businesses.",
};

const localFocus = [
  "Service and construction contractors across Clearwater and Pinellas County",
  "CRM, scheduling, dispatch, and customer follow-up improvements for owner-led teams",
  "Practical AI adoption guidance — what helps, what to avoid, and how to measure results",
  "Technology & AI Readiness Audits and strategy calls for businesses with 0–15 employees",
];

const nearbyAreas = [
  { label: "Greater Tampa Bay", href: "/locations/tampa-bay" },
  { label: "St. Petersburg", href: "/locations/st-petersburg" },
  { label: "Tampa", href: "/locations/tampa" },
];

export default function ClearwaterPage() {
  return (
    <>
      <PageHero
        eyebrow="Clearwater, FL"
        title="Contractor Technology Advisory in Clearwater"
        description="Vendor-neutral technology and AI guidance for Clearwater-area contractor and field-service businesses — same services as our full Tampa Bay coverage."
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call" }}
        secondaryCta={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="text-lg text-navy/80 leading-relaxed">
            Clearwater contractors face the same technology pressures as the rest of Tampa Bay:
            disconnected systems, missed follow-ups, low software adoption, and AI features added
            without a workflow plan. We help owner-led trades businesses sort through the noise and
            build a modernization path that fits how they actually operate.
          </p>
          <div className="mt-8">
            <BulletList items={localFocus} />
          </div>
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="grid lg:grid-cols-2 gap-8">
          <InfoCard title="Industries we serve" dark>
            <p className="mb-4">
              HVAC, plumbing, electrical, roofing, general contracting, handyman, landscaping,
              painting, cleaning, and solar — across Clearwater and Pinellas County.
            </p>
            <Link href="/industries" className="text-cyan hover:text-white text-sm font-mono uppercase tracking-wider">
              View all industries →
            </Link>
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
        headline="Clearwater contractor need a technology roadmap?"
        body="Book a Shop Visit or explore the Technology & AI Readiness Audit."
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call" }}
        secondary={{ label: "Explore the Audit", href: "/services/technology-audit" }}
      />
    </>
  );
}
