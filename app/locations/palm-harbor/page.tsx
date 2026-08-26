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
  title: "Palm Harbor, FL",
  description:
    "Contractor technology and AI advisory for Palm Harbor, Florida, an unincorporated north-Pinellas community on the US-19 corridor. Vendor-neutral guidance for HVAC, plumbing, electrical, and field-service firms.",
  alternates: { canonical: "/locations/palm-harbor" },
};

const localFocus = [
  "Palm Harbor is unincorporated -- contractor licensing and permitting run through Pinellas County directly, not a separate city department",
  "Sits on the US-19 corridor between Clearwater and Tarpon Springs, with Lake Tarpon waterfront on its eastern side",
  "A mix of established residential neighborhoods and commercial development along US-19",
  "A common base for HVAC, plumbing, electrical, and other residential-service contractors covering north Pinellas County",
];

const operatingRealities = [
  {
    title: "No separate city bureaucracy",
    body: "Because Palm Harbor is unincorporated, there is no city hall or city-level licensing office to navigate -- permitting and contractor licensing go through Pinellas County. That simplifies one thing, but it also means north-county-specific guidance has to come from county-level resources, not a Palm Harbor-specific department that doesn't exist.",
  },
  {
    title: "North-county drive-time planning",
    body: "A business based in Palm Harbor covering Clearwater, Dunedin, and Tarpon Springs in the same day is running a genuinely different route than one anchored further south. The US-19 corridor carries real traffic load at peak hours, and a schedule board built without that in mind loses real hours.",
  },
  {
    title: "Established residential base, real commercial growth",
    body: "Palm Harbor's long-established residential neighborhoods mean a steady base of maintenance and replacement work, while ongoing commercial development along US-19 adds a second, different customer type with its own scheduling and estimate patterns.",
  },
];

const nearbyAreas = [
  { label: "Clearwater", href: "/locations/clearwater" },
  { label: "Largo", href: "/locations/largo" },
  { label: "Pinellas County", href: "/locations/pinellas-county-fl" },
  { label: "Greater Tampa Bay", href: "/locations/tampa-bay" },
];

export default function PalmHarborPage() {
  const faqs = LOCATION_FAQS["palm-harbor"];
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/tampa-bay" },
          { name: "Palm Harbor", path: "/locations/palm-harbor" },
        ])}
      />

      <PageHero
        eyebrow="Palm Harbor, FL"
        title="Contractor Technology Advisory in Palm Harbor"
        description="An unincorporated north-Pinellas community on the US-19 corridor -- vendor-neutral technology, workflow, and AI guidance built around how a north-county dispatch operation actually runs."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
            The Palm Harbor Market
          </p>
          <p className="text-lg text-navy/80 leading-relaxed">
            Palm Harbor is unincorporated -- there is no separate city hall or city-level
            contractor licensing office. Permitting and licensing for work here run through
            Pinellas County directly, the same as any other unincorporated part of the county. That
            matters for a contractor business mainly in knowing where to actually look for the real
            rules, rather than searching for a city department that doesn&rsquo;t exist.
          </p>
          <p className="mt-5 text-lg text-navy/80 leading-relaxed">
            Geographically, Palm Harbor sits on the US-19 corridor between Clearwater and Tarpon
            Springs, with Lake Tarpon waterfront on its eastern side. It combines long-established
            residential neighborhoods with ongoing commercial development along US-19 -- a
            reasonably steady maintenance-and-replacement customer base alongside real commercial
            buildout, each with different scheduling and estimate patterns.
          </p>
          <div className="mt-8">
            <BulletList items={localFocus} />
          </div>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">What This Means for the Businesses Here</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-8 max-w-2xl">
          Operating Realities of a North-Pinellas Business
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
          <InfoCard title="Who we work with in Palm Harbor">
            HVAC, plumbing, electrical, roofing, general contracting, and related field-service
            businesses -- whether based in Palm Harbor or covering it as part of a wider north-Pinellas
            territory. The common thread is a real office-to-field workflow: dispatch, scheduling,
            estimate follow-up, and technician documentation that has to move cleanly between the
            office and a truck.
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
        headline="Palm Harbor contractor ready for a practical plan?"
        body="Start with a Contractor Operations Audit or Book a Strategy Call."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Explore the Audit", href: "/services/technology-audit" }}
      />
    </>
  );
}
