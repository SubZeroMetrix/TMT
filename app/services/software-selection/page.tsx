import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Software Selection & Stack Design",
  description:
    "Vendor-neutral help choosing CRM, FSM, dispatch, and accounting software for contractor businesses — no commissions, no preferred platforms.",
};

const selectionCriteria = [
  "How your business actually operates — not how a demo script suggests it should",
  "Team size, roles, and technical comfort level across office and field staff",
  "Integration requirements between CRM, dispatch, invoicing, and accounting",
  "Mobile and offline needs for technicians in the field",
  "Reporting and visibility requirements for the owner",
  "Total cost of ownership — licensing, onboarding, training, and ongoing support",
  "Migration complexity from current systems and data portability",
  "Vendor stability, support quality, and contractor-specific feature depth",
];

const commonPitfalls = [
  "Choosing based on a sales demo instead of daily workflow fit",
  "Buying the platform your competitor uses without matching your operations",
  "Ignoring integration gaps that create double-entry and manual work",
  "Underestimating training time and change management needs",
  "Selecting tools with features you will never use — but still pay for",
  "Switching platforms too frequently instead of fixing adoption on what you have",
  "Letting a rep's commission structure drive the recommendation",
  "Skipping the accounting integration conversation until after purchase",
];

const stackCategories = [
  {
    title: "CRM & Customer Management",
    body: "Lead tracking, customer history, communication logs, and follow-up workflows.",
  },
  {
    title: "FSM & Dispatch",
    body: "Job scheduling, technician routing, work orders, and field documentation.",
  },
  {
    title: "Accounting & Invoicing",
    body: "QuickBooks or similar integration, job costing, payment processing, and financial reporting.",
  },
  {
    title: "Communication & Marketing",
    body: "Phone systems, texting, email automation, review requests, and customer notifications.",
  },
];

export default function SoftwareSelectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Software Selection"
        title="Choose the Right Stack — Without the Sales Pressure"
        description="Help selecting CRM, FSM, dispatch, accounting, and communication tools based on how your contractor business actually runs. No commissions. No preferred vendor. No demo theater."
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call" }}
        secondaryCta={{ label: "Start With the Audit", href: "/services/technology-audit" }}
      />

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
              Selection Criteria
            </p>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-6">
              How We Evaluate Options
            </h2>
            <p className="text-navy/70 leading-relaxed mb-6">
              Software selection for contractors is not about finding the &ldquo;best&rdquo;
              platform — it is about finding the right fit for your team, your workflows, and your
              budget. We evaluate options against operational reality, not feature checklists from a
              sales deck.
            </p>
            <BulletList items={selectionCriteria} />
          </div>
          <div className="space-y-4">
            {stackCategories.map((cat) => (
              <InfoCard key={cat.title} title={cat.title}>
                <p>{cat.body}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">Watch Out For</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-6 max-w-2xl">
          Common Pitfalls in Contractor Software Selection
        </h2>
        <p className="text-silver-light/85 leading-relaxed max-w-2xl mb-8">
          Most bad software decisions are not about picking the wrong product — they are about
          picking the right product for the wrong reasons, or skipping the process and adoption
          work that makes any tool useful.
        </p>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
          {commonPitfalls.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-silver-light/90">
              <span className="mt-1.5 h-1 w-1 shrink-0 bg-code-orange" />
              {item}
            </div>
          ))}
        </div>
        <div className="tech-divider mt-12 mb-8" />
        <InfoCard title="Works Best After an Audit" dark>
          <p>
            If you have not mapped your current systems and workflows yet, the Technology &amp; AI
            Readiness Audit provides the foundation for smarter software decisions. Selection
            without assessment often means repeating the same mistakes with a different logo.
          </p>
        </InfoCard>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4">
          What You Get
        </h2>
        <p className="text-navy/70 max-w-2xl mb-8 leading-relaxed">
          A written comparison of viable options for your business, with clear reasoning for each
          recommendation. We explain trade-offs honestly — no platform is perfect, and the goal is
          the best fit, not the most features.
        </p>
        <BulletList
          items={[
            "Shortlist of 2–3 platforms evaluated against your specific criteria",
            "Integration and migration considerations for each option",
            "Estimated total cost of ownership comparison",
            "Implementation complexity assessment",
            "Recommendation with clear rationale — and what we would not choose and why",
          ]}
        />
      </ContentSection>

      <CtaBand
        headline="Stop Guessing. Start Choosing With Confidence."
        body="Book a Shop Visit to discuss your current stack and what you need next."
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
