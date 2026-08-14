import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Custom Workflow & Program Development",
  description:
    "Purpose-built workflows and operational programs for contractor businesses — from estimate follow-up to maintenance agreement renewal.",
  alternates: { canonical: "/services/custom-workflow" },
};

const workflowExamples = [
  "New lead intake and qualification — from first call to scheduled appointment",
  "Estimate creation, presentation, and follow-up sequences",
  "Job completion, invoicing, and payment collection workflows",
  "Maintenance agreement enrollment, renewal, and lapse recovery",
  "Technician dispatch, documentation, and close-out procedures",
  "Customer communication templates and escalation paths",
  "Warranty and callback tracking programs",
  "Seasonal demand planning and capacity management routines",
];

const programTypes = [
  {
    title: "Follow-Up Programs",
    body: "Structured sequences for unsold estimates, post-service check-ins, and lapsed customer re-engagement — with clear ownership and timing.",
  },
  {
    title: "Maintenance Agreement Programs",
    body: "Enrollment workflows, renewal reminders, service scheduling, and revenue tracking for recurring agreement revenue.",
  },
  {
    title: "Office Efficiency Programs",
    body: "Daily, weekly, and monthly routines that reduce manual work and keep the office team aligned on priorities.",
  },
  {
    title: "Field Documentation Standards",
    body: "What technicians capture on every job, how photos and notes are organized, and how data flows back to the office.",
  },
];

export default function CustomWorkflowPage() {
  return (
    <>
      <PageHero
        eyebrow="Workflow Development"
        title="Custom Workflows & Programs for Contractor Operations"
        description="Software only works when the process behind it is clear. We design purpose-built workflows and operational programs tailored to how your contractor business actually runs — not generic templates from a vendor onboarding guide."
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "See All Services", href: "/services" }}
      />

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
              Why Workflows Matter
            </p>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-6">
              Process Before Platform
            </h2>
            <p className="text-navy/70 leading-relaxed mb-6">
              Most contractor technology problems are process problems wearing a software costume.
              Before recommending new tools, we map how work actually moves through your business —
              who does what, when, and where things break down. Then we design workflows that fix
              the gaps.
            </p>
            <p className="text-navy/70 leading-relaxed">
              Every workflow we develop is written for your team to follow — clear steps, defined
              ownership, and measurable outcomes. Not a 40-page binder that nobody reads.
            </p>
          </div>
          <InfoCard title="Common Workflow Gaps">
            <BulletList
              items={[
                "Leads come in but nobody owns follow-up",
                "Estimates go out but close rates are unknown",
                "Jobs finish but invoicing waits days",
                "Maintenance agreements lapse without anyone noticing",
                "Technicians document inconsistently — or not at all",
                "The owner is the only person who knows how things work",
              ]}
            />
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">What We Build</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-8">
          Workflow & Program Examples
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {programTypes.map((p) => (
            <InfoCard key={p.title} title={p.title} dark>
              <p>{p.body}</p>
            </InfoCard>
          ))}
        </div>
        <BulletList items={workflowExamples} dark />
      </ContentSection>

      <ContentSection>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4">
          Deliverables
        </h2>
        <p className="text-navy/70 max-w-2xl mb-8 leading-relaxed">
          Workflow development produces documentation your team can use immediately — and that
          integrates with whatever software you run today or choose tomorrow.
        </p>
        <BulletList
          items={[
            "Documented step-by-step workflows with role assignments",
            "Communication templates and scripts where appropriate",
            "Checklists for daily, weekly, and monthly operational routines",
            "KPIs and tracking points so you know if the workflow is working",
            "Integration notes for mapping workflows into your CRM or FSM platform",
          ]}
        />
      </ContentSection>

      <CtaBand
        headline="Fix the Process. Then Automate It."
        body="Book a Shop Visit to discuss workflow gaps in your contractor operation."
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
