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
  title: "Brandon, FL",
  description:
    "Contractor technology and AI advisory for Brandon, Florida, the commercial anchor of eastern Hillsborough County. Vendor-neutral guidance for HVAC and field-service firms.",
  alternates: { canonical: "/locations/brandon" },
};

const localFocus = [
  "Brandon is unincorporated — roughly 115,000 residents with real commercial identity but no separate city government",
  "The commercial and residential anchor of eastern Hillsborough County, with thousands of businesses along the SR 60 corridor",
  "Zoning, permitting, and public services run through Hillsborough County directly, not a city hall",
  "HVAC, plumbing, electrical, roofing, and general contracting businesses serving Brandon and the surrounding unincorporated communities",
];

const operatingRealities = [
  {
    title: "County process, city-scale business",
    body: "Brandon functions like a commercial center — real density, real competition, real volume — without a municipal government of its own. Every permit, inspection, and license runs through Hillsborough County directly. A business that assumes 'the city' handles it, the way it might in Tampa proper, plans on the wrong timeline.",
  },
  {
    title: "One of the largest unincorporated markets in Florida",
    body: "Brandon is not a small town that happens to lack a city charter — it is one of the larger unincorporated commercial districts in the state. That scale means real opportunity, and real competitive density, for contractor businesses working the SR 60 corridor and surrounding neighborhoods.",
  },
  {
    title: "Territory, not just a town",
    body: "Brandon sits inside a much larger unincorporated ring that covers most of Hillsborough County geographically — Riverview, Valrico, and beyond. A Brandon-based crew is usually covering that wider unincorporated territory, not one town, which puts real weight on how the dispatch board accounts for distance.",
  },
];

const nearbyAreas = [
  { label: "Greater Tampa Bay", href: "/locations/tampa-bay" },
  { label: "Tampa", href: "/locations/tampa" },
  { label: "Hillsborough County", href: "/locations/hillsborough-county-fl" },
];

export default function BrandonPage() {
  const faqs = LOCATION_FAQS["brandon"];
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/tampa-bay" },
          { name: "Brandon", path: "/locations/brandon" },
        ])}
      />

      <PageHero
        eyebrow="Brandon, FL"
        title="Contractor Technology Advisory in Brandon"
        description="Eastern Hillsborough County's commercial anchor — a real business district running on county process rather than a city hall. Vendor-neutral technology, workflow, and AI guidance built for that reality."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
            The Brandon Market
          </p>
          <p className="text-lg text-navy/80 leading-relaxed">
            Brandon is unincorporated — a census-designated place of roughly 115,000 residents with
            a real commercial identity but no city government of its own. It has become the
            commercial and residential anchor of eastern Hillsborough County, with thousands of
            businesses concentrated along the SR 60 corridor. For zoning, permitting, and most
            public services, Hillsborough County is directly in charge — there is no city hall
            handling that layer the way there is in Tampa proper.
          </p>
          <p className="mt-5 text-lg text-navy/80 leading-relaxed">
            That combination — real commercial scale without a separate municipal bureaucracy — is
            not a footnote for a contractor business operating here. It is a real, planable fact:
            permitting timelines, inspection scheduling, and licensing all run on the county&rsquo;s
            process, and a business that assumes otherwise finds out mid-project.
          </p>
          <div className="mt-8">
            <BulletList items={localFocus} />
          </div>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">What This Means for the Businesses Here</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-8 max-w-2xl">
          Operating in a County-Governed Commercial Anchor
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
          <InfoCard title="Who we work with in Brandon">
            HVAC, plumbing, electrical, roofing, and general contracting businesses serving Brandon
            and the surrounding unincorporated Hillsborough communities — including businesses
            navigating county-level permitting and licensing for the first time after growing past
            a single-truck operation.
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
        headline="Brandon contractor ready for a practical plan?"
        body="Start with a Contractor Operations Audit or Book a Strategy Call."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Explore the Audit", href: "/services/technology-audit" }}
      />
    </>
  );
}
