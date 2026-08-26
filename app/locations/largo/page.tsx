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
  title: "Largo, FL",
  description:
    "Contractor technology and AI advisory for Largo, Florida, the central-Pinellas hub. Vendor-neutral guidance for HVAC, plumbing, electrical, and field-service firms.",
  alternates: { canonical: "/locations/largo" },
};

const localFocus = [
  "Largo's central position in Pinellas County makes it a common base for businesses dispatching both north (Clearwater) and south (St. Petersburg)",
  "One of the stronger industrial and office real estate markets in the county, anchored by major employers including TD Synnex",
  "Active redevelopment along the West Bay Drive and Clearwater-Largo Road corridors",
  "HVAC, plumbing, electrical, roofing, and field-service businesses headquartered in or dispatching through Largo",
];

const operatingRealities = [
  {
    title: "Central dispatch, both directions",
    body: "A Largo-based crew running jobs toward Clearwater in the morning and St. Petersburg in the afternoon is a genuinely different scheduling problem than a business anchored at one end of the county. The board has to be built around drive time in both directions, not just job order.",
  },
  {
    title: "Real estate that supports a physical operation",
    body: "Unlike much of built-out Pinellas, Largo has actual industrial and flex-space inventory — the kind a contractor business needs for trucks, tools, and material storage. That is a practical reason many county contractors base their office and yard here even while servicing the whole county.",
  },
  {
    title: "Growth without losing the process underneath it",
    body: "Redevelopment along West Bay Drive and Clearwater-Largo Road means more commercial and mixed-use buildout to bid on — but more volume exposes a workflow that was never designed for it faster than a flat year would.",
  },
];

const nearbyAreas = [
  { label: "Greater Tampa Bay", href: "/locations/tampa-bay" },
  { label: "St. Petersburg", href: "/locations/st-petersburg" },
  { label: "Clearwater", href: "/locations/clearwater" },
  { label: "Pinellas Park", href: "/locations/pinellas-park" },
  { label: "Palm Harbor", href: "/locations/palm-harbor" },
];

export default function LargoPage() {
  const faqs = LOCATION_FAQS["largo"];
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/tampa-bay" },
          { name: "Largo", path: "/locations/largo" },
        ])}
      />

      <PageHero
        eyebrow="Largo, FL"
        title="Contractor Technology Advisory in Largo"
        description="Central Pinellas County's operating hub for contractor and field-service businesses — vendor-neutral technology, workflow, and AI guidance built around how a mid-county dispatch operation actually runs."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
            The Largo Market
          </p>
          <p className="text-lg text-navy/80 leading-relaxed">
            Largo sits almost exactly at the center of Pinellas County, and that position is not
            incidental to who ends up based there. A meaningful share of the county&rsquo;s
            contractor and field-service businesses run their office and yard out of Largo
            specifically because it is close to both ends of the county without the drive-time
            penalty either extreme carries — Clearwater to the north, St. Petersburg to the south,
            both reachable without crossing the whole county twice in a day.
          </p>
          <p className="mt-5 text-lg text-navy/80 leading-relaxed">
            It also has something most of built-out Pinellas does not: real industrial and office
            real estate inventory, anchored by major employers including TD Synnex, with active
            redevelopment along the West Bay Drive and Clearwater-Largo Road corridors. For a
            contractor business, that combination of central geography and available space to
            actually operate from is why Largo functions as a hub rather than just another town on
            the list.
          </p>
          <div className="mt-8">
            <BulletList items={localFocus} />
          </div>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">What This Means for the Businesses Here</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-8 max-w-2xl">
          Operating Realities of a Central-Pinellas Business
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
          <InfoCard title="Who we work with in Largo">
            HVAC, plumbing, electrical, roofing, general contracting, and related field-service
            businesses — whether based in Largo or simply covering it as part of a wider Pinellas
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
        headline="Largo contractor ready for a practical plan?"
        body="Start with a Contractor Operations Audit or Book a Strategy Call."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Explore the Audit", href: "/services/technology-audit" }}
      />
    </>
  );
}
