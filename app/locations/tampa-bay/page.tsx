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
  title: "Greater Tampa Bay",
  description:
    "The Modern Trades Mentor serves contractor and field-service businesses across Greater Tampa Bay — St. Petersburg, Tampa, Clearwater, and surrounding communities.",
  alternates: { canonical: "/locations/tampa-bay" },
};

const locations = [
  {
    name: "St. Petersburg",
    href: "/locations/st-petersburg",
    note: "Home base — PO Box 66093, St. Petersburg, FL 33767",
  },
  {
    name: "Tampa",
    href: "/locations/tampa",
    note: "Commercial and residential contractors across Hillsborough County",
  },
  {
    name: "Clearwater",
    href: "/locations/clearwater",
    note: "Tourism, hospitality, and year-round residential demand",
  },
  {
    name: "Largo",
    href: "/locations/largo",
    note: "Central Pinellas — where many county contractors are based",
  },
  {
    name: "Pinellas Park",
    href: "/locations/pinellas-park",
    note: "The county's industrial and warehouse hub",
  },
  {
    name: "Brandon",
    href: "/locations/brandon",
    note: "Eastern Hillsborough's commercial anchor — county-governed",
  },
];

const services = [
  "Technology & AI Readiness Audit",
  "Software selection and stack design",
  "AI adoption and staff training guidance",
  "Workflow and process improvement",
  "Implementation planning and vendor-neutral recommendations",
];

export default function TampaBayPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title="Greater Tampa Bay Contractors"
        description="We serve owner-led contractor and field-service businesses across the Tampa Bay region — with the same advisory services, whether you're in St. Petersburg, Tampa, Clearwater, or the surrounding communities."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <p className="bp-label mb-8">Local Service Areas</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.href}
              href={loc.href}
              className="group bp-frame bp-panel-light p-6 hover:border-cyan/60 transition-colors block"
            >
              <h2 className="font-display text-lg font-semibold text-navy group-hover:text-cyan transition-colors">
                {loc.name}, FL
              </h2>
              <p className="mt-2 text-sm text-navy/70">{loc.note}</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-wider text-cyan-dim group-hover:text-cyan">
                View area →
              </p>
            </Link>
          ))}
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="bp-label mb-4">What we offer locally</p>
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">
              Same services, local focus
            </h2>
            <p className="mt-4 text-silver-light/85 leading-relaxed">
              Strategy calls and advisory engagements are available to Tampa Bay contractors
              regardless of city. We understand the local market — seasonal demand, commercial
              versus residential mix, and the software pressures common to small trades businesses
              in Florida.
            </p>
          </div>
          <InfoCard title="Services available" dark>
            <BulletList items={services} dark />
          </InfoCard>
        </div>
      </ContentSection>

      <CtaBand
        headline="Ready to modernize your Tampa Bay contracting business?"
        body="Start with a strategy call or explore the Technology & AI Readiness Audit."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Explore the Audit", href: "/services/technology-audit" }}
      />
    </>
  );
}
