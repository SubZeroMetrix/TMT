import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Revenue Loss Recovery",
  description:
    "Find and fix revenue leaks in contractor businesses — missed calls, unsold estimates, lapsed maintenance agreements, and follow-up gaps.",
  alternates: { canonical: "/services/revenue-loss-recovery" },
};

const leakCategories = [
  {
    title: "Missed & Unanswered Calls",
    body: "Every unanswered call during business hours is a job someone else booked. We map your call handling — phone system, overflow, after-hours, and callback procedures — and identify where leads are falling through.",
  },
  {
    title: "Unsold Estimates",
    body: "Estimates that go out but never get followed up represent some of the easiest revenue to recover. We review your estimate-to-close workflow, timing, and ownership to find money already on the table.",
  },
  {
    title: "Lapsed Maintenance Agreements",
    body: "Recurring agreement revenue is the most predictable income a service contractor has. We identify agreements that lapsed, were never renewed, or were never enrolled in the first place — and build recovery workflows.",
  },
  {
    title: "Follow-Up Gaps",
    body: "Post-service check-ins, review requests, referral asks, and seasonal re-engagement often get skipped when the office is busy. We find the gaps and design follow-up programs that run without adding headcount.",
  },
];

const recoveryProcess = [
  "Review current call logs, estimate records, and maintenance agreement data",
  "Identify specific leak points with estimated revenue impact",
  "Map existing workflows to find where leads and customers drop off",
  "Design recovery workflows — who does what, when, and with what tools",
  "Recommend technology or process changes to prevent future leaks",
  "Establish tracking metrics so you can measure recovery over time",
];

const impactAreas = [
  "Average ticket value and close rate on estimates",
  "Maintenance agreement enrollment and renewal rates",
  "Call answer rate and callback completion rate",
  "Customer re-engagement and repeat business frequency",
  "Seasonal revenue patterns and capacity utilization",
  "Time from job completion to invoice and payment",
];

export default function RevenueLossRecoveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Revenue Recovery"
        title="Find the Revenue You Are Already Losing"
        description="Missed calls, unsold estimates, lapsed maintenance agreements, and follow-up gaps quietly cost contractor businesses more than any software subscription. We find the leaks and build practical recovery workflows."
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "See All Services", href: "/services" }}
      />

      <ContentSection>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
          Where Revenue Leaks
        </p>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-10 max-w-2xl">
          Four Categories That Cost Contractors the Most
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {leakCategories.map((cat, i) => (
            <div key={cat.title} className="bp-frame bp-panel-light p-6">
              <span className="font-mono text-[10px] text-cyan">0{i + 1}</span>
              <h3 className="mt-2 font-display font-semibold text-navy text-lg">{cat.title}</h3>
              <p className="mt-3 text-sm text-navy/65 leading-relaxed">{cat.body}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="bp-label mb-3">The Approach</p>
            <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-6">
              Diagnose First. Recover Second.
            </h2>
            <p className="text-silver-light/85 leading-relaxed mb-6">
              Revenue recovery is not about buying another marketing tool. It is about finding where
              money already in your pipeline is escaping — and fixing the process, ownership, or
              follow-up that is letting it go.
            </p>
            <BulletList items={recoveryProcess} dark />
          </div>
          <InfoCard title="What We Measure" dark>
            <BulletList items={impactAreas} dark />
            <p className="mt-4 text-xs text-silver/50">
              Metrics vary by business size and trade. We focus on the numbers that matter for your
              operation — not generic industry benchmarks.
            </p>
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4">
          Often the Fastest Return on Investment
        </h2>
        <p className="text-navy/70 max-w-2xl mb-6 leading-relaxed">
          Recovering revenue you are already losing is usually more valuable than adding new
          marketing spend or buying new software. Many contractors find that fixing follow-up gaps
          and lapsed agreement recovery pays for itself within the first quarter — without adding a
          single new lead source.
        </p>
        <p className="text-navy/70 max-w-2xl leading-relaxed">
          This service works standalone or as part of a Technology &amp; AI Readiness Audit, where
          revenue leakage is one of the core evaluation areas.
        </p>
      </ContentSection>

      <CtaBand
        headline="Stop Leaving Money on the Table"
        body="Book a Shop Visit to discuss revenue recovery for your contractor business."
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
