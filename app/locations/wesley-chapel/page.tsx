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
  title: "Automation Consultant Wesley Chapel, FL",
  description:
    "Automation consultant and workflow advisory for Wesley Chapel, Florida contractors and field-service businesses — one of the fastest-growing communities in Pasco County. Vendor-neutral guidance for HVAC, plumbing, electrical, roofing and general contracting shops.",
  alternates: { canonical: "/locations/wesley-chapel" },
};

const localFocus = [
  "Wesley Chapel is one of the fastest-growing communities in Pasco County and the greater Tampa Bay area",
  "New residential and commercial construction is adding call volume and competition for trucks faster than most Tampa Bay markets",
  "Close to the Hillsborough County line — many Wesley Chapel businesses already work both counties",
  "HVAC, plumbing, electrical, roofing, and general contracting businesses serving Wesley Chapel and the surrounding Pasco communities",
];

const operatingRealities = [
  {
    title: "Growth outruns process",
    body: "Wesley Chapel has added residential rooftops and commercial space faster than almost anywhere else in the region. Shops here often add trucks and office staff sooner than they planned, which means dispatch and follow-up start breaking at a smaller headcount than the owner expects — usually before anyone has time to notice.",
  },
  {
    title: "Two counties, two sets of process",
    body: "Wesley Chapel sits close enough to the Hillsborough County line that many contractor businesses based there already work both counties. Pasco and Hillsborough run separate permitting processes, so a shop working both sides is effectively carrying two sets of rules — worth accounting for before choosing software that assumes one.",
  },
  {
    title: "Competition for the same trucks",
    body: "Fast growth means more homes and businesses calling for service, and more contractors competing to answer. The shops that keep the calls they already earned — through fast answer, real follow-up, and a dispatch board built around actual drive time — win more of that growth than the ones simply hoping for more leads.",
  },
];

const nearbyAreas = [
  { label: "Tampa", href: "/locations/tampa" },
  { label: "Hillsborough County", href: "/locations/hillsborough-county-fl" },
  { label: "Greater Tampa Bay", href: "/locations/tampa-bay" },
];

export default function WesleyChapelPage() {
  const faqs = LOCATION_FAQS["wesley-chapel"];
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/tampa-bay" },
          { name: "Wesley Chapel", path: "/locations/wesley-chapel" },
        ])}
      />

      <PageHero
        eyebrow="Wesley Chapel, FL"
        title="Automation Consultant for Wesley Chapel Contractors"
        description="One of the fastest-growing communities in Pasco County — more calls, more competition, and dispatch problems that show up earlier than owners expect. Vendor-neutral workflow, technology, and AI guidance built for that pace of growth."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
            The Wesley Chapel Market
          </p>
          <p className="text-lg text-navy/80 leading-relaxed">
            Wesley Chapel has grown faster than nearly any other community in the Tampa Bay area
            over the past decade — new subdivisions, new commercial corridors, and a steady stream
            of homeowners and businesses who need a contractor. That growth is an opportunity, and
            it is also the reason dispatch boards, call handling, and estimate follow-up break down
            sooner here than they would in a slower-growing market.
          </p>
          <p className="mt-5 text-lg text-navy/80 leading-relaxed">
            A shop that scaled its process for a smaller service area often does not notice the
            strain until calls start going unanswered or estimates start sitting unfollowed — and
            in a market growing this fast, a competitor is usually answering the ones you miss.
          </p>
          <div className="mt-8">
            <BulletList items={localFocus} />
          </div>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">What This Means for the Businesses Here</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-8 max-w-2xl">
          Operating in Pasco County&rsquo;s Fastest-Growing Market
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
          <InfoCard title="Who we work with in Wesley Chapel">
            HVAC, plumbing, electrical, roofing, and general contracting businesses serving Wesley
            Chapel and the surrounding Pasco communities — including shops that have grown past a
            single-truck operation faster than their office processes kept up.
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
        headline="Wesley Chapel contractor ready for a practical plan?"
        body="Start with the Growth & Systems Blueprint or Book a Strategy Call."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Explore the Blueprint", href: "/services/technology-audit" }}
      />
    </>
  );
}
