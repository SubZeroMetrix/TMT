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
  title: "Pinellas Park, FL",
  description:
    "Contractor technology and AI advisory for Pinellas Park, Florida — the county's industrial and warehouse hub, and a common home base for HVAC, plumbing, and electrical businesses.",
  alternates: { canonical: "/locations/pinellas-park" },
};

const localFocus = [
  "One of the largest concentrations of industrial and warehouse space in Pinellas County",
  "Industrial vacancy has run near the low single digits countywide — real space here is genuinely scarce",
  "A common base for contractor trucks, equipment, and material storage, dispatching countywide",
  "HVAC, plumbing, electrical, and general contracting businesses physically headquartered here",
];

const operatingRealities = [
  {
    title: "Based here, working everywhere",
    body: "A Pinellas Park address does not mean a Pinellas Park-only business. Most contractor businesses based here dispatch across the whole county — the location is about where the yard and trucks live, not where the jobs are.",
  },
  {
    title: "Fleet and inventory, not just calls",
    body: "A business running out of warehouse or flex space has real equipment, material, and vehicle coordination on top of the usual scheduling and follow-up work. That is a different operational shape than a purely office-based service business, and it changes which parts of a CRM or FSM are worth configuring first.",
  },
  {
    title: "Space is scarce — what you have is worth protecting",
    body: "With industrial vacancy this tight, a contractor business already based in Pinellas Park holds real estate that would be difficult to replace. Getting the operational use of that space right — efficient dispatch out of one hub — matters more here than in a market where relocating is easy.",
  },
];

const nearbyAreas = [
  { label: "Greater Tampa Bay", href: "/locations/tampa-bay" },
  { label: "St. Petersburg", href: "/locations/st-petersburg" },
  { label: "Largo", href: "/locations/largo" },
  { label: "Clearwater", href: "/locations/clearwater" },
];

export default function PinellasParkPage() {
  const faqs = LOCATION_FAQS["pinellas-park"];
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/tampa-bay" },
          { name: "Pinellas Park", path: "/locations/pinellas-park" },
        ])}
      />

      <PageHero
        eyebrow="Pinellas Park, FL"
        title="Contractor Technology Advisory in Pinellas Park"
        description="Pinellas County's industrial and warehouse hub — where a real share of the county's contractor businesses are physically based. Vendor-neutral technology, workflow, and AI guidance built for a fleet-and-dispatch operation, not just an office."
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call" }}
        secondaryCta={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
            The Pinellas Park Market
          </p>
          <p className="text-lg text-navy/80 leading-relaxed">
            Most of Pinellas County is built out residentially, which makes Pinellas Park unusual —
            it carries one of the largest concentrations of industrial and warehouse space left in
            the county, and industrial vacancy in recent market reporting has run near the low
            single digits countywide. That scarcity is exactly why a real share of the county&rsquo;s
            contractor businesses are physically headquartered here: it is one of the few places
            left in Pinellas where a business can actually lease or buy the kind of space a truck
            fleet and material storage require.
          </p>
          <p className="mt-5 text-lg text-navy/80 leading-relaxed">
            A Pinellas Park address rarely means a Pinellas Park-only business. Most of these
            companies dispatch across the entire county — the industrial space is where the yard
            and trucks live, not a boundary on where the jobs happen.
          </p>
          <div className="mt-8">
            <BulletList items={localFocus} />
          </div>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">What This Means for the Businesses Here</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-8 max-w-2xl">
          Operating a Fleet-and-Warehouse Business, Not Just an Office
        </h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {operatingRealities.map((item) => (
            <InfoCard key={item.title} title={item.title} dark>
              {item.body}
            </InfoCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-8">
          <InfoCard title="Who we work with in Pinellas Park">
            HVAC, plumbing, electrical, and general contracting businesses based here or covering
            it as part of a wider Pinellas territory — including businesses with real fleet and
            equipment-storage needs on top of the usual scheduling, dispatch, and follow-up work
            every field-service company deals with.
          </InfoCard>
          <InfoCard title="Nearby service areas">
            <ul className="space-y-2">
              {nearbyAreas.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="text-sm text-navy/75 hover:text-blue transition-colors">
                    {area.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection dark>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
          Common questions
        </h2>
        <div className="mt-8 max-w-3xl space-y-7">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-display font-semibold text-lg text-white">{faq.question}</h3>
              <p className="mt-2.5 text-silver-light/80 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <CtaBand
        headline="Pinellas Park contractor ready for a practical plan?"
        body="Start with a Contractor Operations Audit or Book a Shop Visit."
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call" }}
        secondary={{ label: "Explore the Audit", href: "/services/technology-audit" }}
      />
    </>
  );
}
