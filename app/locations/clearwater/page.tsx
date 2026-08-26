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
  title: "Clearwater, FL",
  description:
    "Contractor technology and AI advisory for Clearwater, Florida. Vendor-neutral guidance for HVAC, plumbing, electrical, and field-service businesses.",
  alternates: { canonical: "/locations/clearwater" },
};

const localFocus = [
  "Two overlapping demand cycles: year-round residential/commercial work, plus a hospitality and vacation-rental sector tied to the beaches",
  "Major employers including Morton Plant Hospital and a fast-growing tech sector (AnyDesk, KnowBe4, and others)",
  "Strong commercial real estate performance across tourism, healthcare, and technology",
  "HVAC, plumbing, electrical, roofing, and field-service businesses serving Clearwater and the beach communities",
];

const operatingRealities = [
  {
    title: "Fast turnaround changes what 'good' looks like",
    body: "A property management or hospitality-adjacent client needs work turned around between guest stays, not on a standard residential timeline. A dispatch and follow-up system built only for typical service calls tends to break under that pressure — the scheduling problem is genuinely different.",
  },
  {
    title: "Two customer bases, one operation",
    body: "Clearwater carries real year-round residential and commercial demand on top of the tourism-driven work — a business serving both needs a workflow flexible enough for a standard service call and a same-day hospitality turnaround, without running two separate systems to do it.",
  },
  {
    title: "Growth on the commercial side too",
    body: "A rising tech-sector presence means more office and mixed-use commercial buildout to bid on, alongside the tourism and healthcare-driven work already here — more volume from a different direction than most Pinellas contractors are used to.",
  },
];

const nearbyAreas = [
  { label: "Greater Tampa Bay", href: "/locations/tampa-bay" },
  { label: "St. Petersburg", href: "/locations/st-petersburg" },
  { label: "Largo", href: "/locations/largo" },
  { label: "Palm Harbor", href: "/locations/palm-harbor" },
  { label: "Tampa", href: "/locations/tampa" },
];

export default function ClearwaterPage() {
  const faqs = LOCATION_FAQS["clearwater"];
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/tampa-bay" },
          { name: "Clearwater", path: "/locations/clearwater" },
        ])}
      />

      <PageHero
        eyebrow="Clearwater, FL"
        title="Contractor Technology Advisory in Clearwater"
        description="Where a tourism-and-hospitality economy meets year-round residential demand — vendor-neutral technology, workflow, and AI guidance built for a business serving both."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
            The Clearwater Market
          </p>
          <p className="text-lg text-navy/80 leading-relaxed">
            Clearwater runs on two overlapping demand cycles most Pinellas markets do not carry to
            the same degree. There is the year-round residential and commercial work every county
            contractor deals with, and there is a genuine tourism and hospitality economy — Clearwater
            Beach draws real volume, and the vacation-rental and hospitality sector it supports needs
            work turned around between guest stays, not on a standard residential timeline.
          </p>
          <p className="mt-5 text-lg text-navy/80 leading-relaxed">
            The commercial base backing that is real too: major employers including Morton Plant
            Hospital, and a technology sector that has grown fast enough to draw international
            companies — AnyDesk and KnowBe4 among them — into Clearwater offices. For a contractor
            business, that means bidding pressure and opportunity from directions a purely
            residential Pinellas market would not create.
          </p>
          <div className="mt-8">
            <BulletList items={localFocus} />
          </div>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">What This Means for the Businesses Here</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-8 max-w-2xl">
          Serving Two Customer Bases Without Running Two Systems
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
          <InfoCard title="Who we work with in Clearwater">
            HVAC, plumbing, electrical, roofing, and general contracting businesses across
            Clearwater and the beach communities — plus service businesses supporting the
            hospitality and vacation-rental sector, where the fast-turnaround operating shape is
            similar even outside the trades.
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
        headline="Clearwater contractor need a technology roadmap?"
        body="Start with a Contractor Operations Audit or Book a Strategy Call."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Explore the Audit", href: "/services/technology-audit" }}
      />
    </>
  );
}
