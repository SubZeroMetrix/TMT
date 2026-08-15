import type { Metadata } from "next";
import { PageHero, ContentSection, InfoCard, BulletList, CtaBand } from "@/components/PageChrome";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Growth & Operations Systems for Contractors",
  description:
    "Fix the broken handoffs, follow-up, workflow, accountability, and visibility issues that make growth harder for owner-led contractor businesses in Tampa Bay.",
  alternates: { canonical: "/services/growth-operations-systems" },
};

const coversAreas = [
  "Demand — how the right customers find and contact the business",
  "Conversion — response, qualification, estimating, sales, follow-up",
  "Revenue capture — missed calls, unsold estimates, unbilled work, repeat business",
  "Operations — handoffs, accountability, workflow, capacity visibility",
  "Systems — CRM, field software, reporting, connected the right way",
  "Measurement — a baseline and a number that shows whether it worked",
];

const notPromised = [
  "Not a marketing agency running your ad spend",
  "Not a CRM reseller pushing one platform",
  "Not a software build — implementation uses what fits, existing tools first",
  "Not unlimited scope — every engagement is fixed and bounded before it starts",
];

export default function GrowthOperationsSystemsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Growth & Operations Systems",
          description:
            "Diagnose and fix the growth and operating constraints in a contractor business — demand, conversion, revenue capture, operations, and systems.",
          slug: "/services/growth-operations-systems",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Growth & Operations Systems", path: "/services/growth-operations-systems" },
        ])}
      />

      <PageHero
        eyebrow="One of three ways to work with TMT"
        title="Growth & Operations Systems"
        description="Fix the broken handoffs, follow-up, workflow, accountability, and visibility issues that make growth harder — before adding more demand on top of a business that can't yet handle it."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "See the Growth & Systems Blueprint", href: "/services/technology-audit" }}
      />

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
              Who It's For
            </p>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-6">
              Owners Who Know Something Is Leaking
            </h2>
            <p className="text-navy/70 leading-relaxed">
              You know the business has operational or revenue leaks — calls that don't get
              returned, estimates that never get chased, work that piles up on the office —
              and you need a focused system fixed, not a vague strategy session.
            </p>
          </div>
          <InfoCard title="What This Covers">
            <BulletList items={coversAreas} />
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">What You Receive</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-8 max-w-2xl">
          A Fixed-Scope System, Not an Open-Ended Engagement
        </h2>
        <p className="text-silver-light/85 leading-relaxed max-w-2xl mb-8">
          Every engagement starts with the Growth &amp; Systems Blueprint, which determines the
          scope. Fixed-scope implementation then starts at $4,500 founding-client price for one
          clearly bounded fix — broader work moves into a larger scope, agreed before it starts,
          never assumed.
        </p>
        <div className="tech-divider mb-8" />
        <BulletList items={notPromised} dark />
      </ContentSection>

      <CtaBand
        headline="Find the Constraint Worth Fixing First"
        body="Book a Strategy Call to discuss what's actually holding the business back."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
