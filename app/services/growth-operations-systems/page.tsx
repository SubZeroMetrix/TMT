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

/**
 * The actual methodology, not a restatement of the category names above.
 * Written to survive a side-by-side comparison with what agencies, CRM
 * resellers, and coaches publish about their own process — none of them
 * cover all five in one fixed-scope engagement, and none of them are
 * platform-neutral about it. No invented numbers about outcomes: only
 * well-established industry mechanics (speed-to-lead, estimate decay,
 * partial CRM adoption) that hold true across contractor businesses.
 */
const process = [
  {
    pillar: "Generate Demand",
    constraint: "Money going to the wrong channel, or no way to tell which channel is working",
    steps: [
      "Map every current demand source — paid search, local SEO and Google Business Profile, referral, repeat business, maintenance agreements, direct mail, partnerships with builders or property managers",
      "Measure cost per booked job by source, not cost per click or cost per lead — a cheap lead that never closes is not cheap",
      "Check whether the highest-margin source (repeat and referral) is being run as a system or left to chance",
      "Align demand volume to actual crew capacity — generating more calls than the business can staff just moves the bottleneck downstream",
      "Build or fix the review and referral ask so it happens at the moment of the win, not months later or never",
    ],
  },
  {
    pillar: "Convert More Opportunities",
    constraint: "Leads that come in and quietly die before they become a booked job",
    steps: [
      "Measure speed-to-lead — the time between a call or form and a real response. Businesses that respond within minutes close meaningfully more often than businesses that respond the next day; this is one of the most consistent patterns in field service sales",
      "Review the qualifying questions asked on the first call — or confirm none exist",
      "Map the estimate process end to end: how fast it goes out, what's in it, how financing is presented, and who owns the follow-up",
      "Set a fixed follow-up cadence for open estimates — most go cold within two weeks with no contact, and that is a process failure, not a customer decision",
      "Assign a named owner for follow-up. 'Whoever has time' is not a system",
    ],
  },
  {
    pillar: "Capture More Revenue",
    constraint: "Revenue the business already earned or already has access to, quietly slipping away",
    steps: [
      "Audit for the five most common leaks: missed calls, unworked estimates, lapsed maintenance agreements, undercharged change orders, and unbilled time or materials",
      "Design or repair the maintenance agreement renewal cycle so it runs on a schedule, not a hope",
      "Build a repeat-customer reactivation pass for anyone who hasn't booked in a defined window",
      "Confirm change orders and add-on work are captured and billed before the crew leaves the job, not reconstructed from memory at invoicing",
    ],
  },
  {
    pillar: "Run the Operation Better",
    constraint: "Growth that adds chaos instead of revenue because the operation can't absorb it",
    steps: [
      "Map the handoff points — call to schedule, schedule to dispatch, field to invoice — and find where information gets re-typed, lost, or delayed",
      "Assign clear ownership for each handoff so a dropped ball has a name attached, not 'the office'",
      "Build capacity visibility — a simple, trusted way to see booked work against available crew hours before promising a date",
      "Fix the highest-cost duplicate data entry first — usually the same job typed into three systems by three people",
    ],
  },
  {
    pillar: "Connect the Systems",
    constraint: "Software the business already pays for, running at a fraction of what it can do",
    steps: [
      "Audit what's actually configured in the CRM or field-service platform versus what's paid for and unused — most contractor software runs well under its real capability",
      "Fix configuration before considering a new platform; replacing a misconfigured tool usually just buys a new misconfigured tool",
      "Connect the systems that should talk to each other — CRM, dispatch, accounting, reporting — so a job's information exists once, not in four places",
      "Add automation or AI only where it removes real admin work and a human still reviews the point where it touches a customer or a price",
    ],
  },
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

      <ContentSection>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
          The Process
        </p>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4 max-w-2xl">
          How Each Constraint Actually Gets Fixed
        </h2>
        <p className="text-navy/70 max-w-2xl mb-12 leading-relaxed">
          Most agencies only touch demand. Most CRM resellers only touch the software. Most
          coaches only touch training. A business can have all three and still be losing money
          in the gaps between them. This is the method behind each of the five areas the
          Blueprint evaluates.
        </p>
        <div className="space-y-10">
          {process.map((p, i) => (
            <div key={p.pillar} className="grid lg:grid-cols-[1fr,1.6fr] gap-6 lg:gap-10 border-t border-border-light pt-8">
              <div>
                <span className="font-mono text-[10px] text-cyan-dim">0{i + 1}</span>
                <h3 className="mt-2 font-display font-semibold text-navy text-xl">{p.pillar}</h3>
                <p className="mt-2 text-sm text-navy/60 leading-relaxed">
                  <span className="font-semibold text-navy/80">The constraint:</span> {p.constraint}
                </p>
              </div>
              <ul className="space-y-2.5">
                {p.steps.map((step) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-navy/75 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-blue" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
