import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";
import SignatureName from "@/components/SignatureName";

export const metadata: Metadata = {
  title: "Technology & AI Readiness Audit",
  description:
    "A vendor-neutral audit of your contractor business systems, workflows, staff readiness, and AI opportunities — with a prioritized implementation roadmap.",
};

const evaluationAreas = [
  "Current software and tool inventory — what you have, what overlaps, what is missing",
  "Workflow and bottleneck analysis across office, dispatch, and field operations",
  "Scheduling, dispatch, and customer follow-up process review",
  "Staff adoption and training readiness — who uses what, and why they resist",
  "AI opportunity and risk assessment — practical uses vs. hype",
  "Security and data-handling review — permissions, access, and exposure",
  "Integration gaps between CRM, FSM, accounting, and communication tools",
  "Revenue leakage indicators — missed calls, unsold estimates, lapsed agreements",
];

const deliverables = [
  "Written assessment of current technology and operational state",
  "Gap analysis with prioritized findings — critical, important, and optional",
  "Vendor-neutral software and process recommendations",
  "AI readiness summary — where it helps, where it does not, and what to watch for",
  "Prioritized implementation roadmap with suggested sequencing",
  "Executive summary suitable for owner review and team discussion",
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    body: "Initial call to understand your business, team size, trades, current tools, and biggest pain points.",
  },
  {
    step: "02",
    title: "Information Gathering",
    body: "Review of your software stack, workflows, sample reports, and operational documents. Interviews with key staff as needed.",
  },
  {
    step: "03",
    title: "Analysis",
    body: "Structured evaluation across systems, processes, adoption, security, and AI readiness — mapped to contractor operations, not generic IT checklists.",
  },
  {
    step: "04",
    title: "Delivery & Walkthrough",
    body: "Written report and roadmap delivered with a walkthrough session to answer questions and clarify priorities.",
  },
];

export default function TechnologyAuditPage() {
  return (
    <>
      <PageHero
        eyebrow="Flagship Service"
        title="Technology & AI Readiness Audit"
        description="A structured, vendor-neutral review of your systems, workflows, staff readiness, security exposure, and modernization priorities — with a prioritized roadmap you can act on immediately."
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call" }}
        secondaryCta={{ label: "See All Services", href: "/services" }}
      />

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
              What It Evaluates
            </p>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-6">
              A Full Picture of Where Your Business Stands
            </h2>
            <p className="text-navy/70 leading-relaxed mb-6">
              Most contractors do not need another software demo. They need someone to look at the
              whole operation — how calls get answered, how jobs get scheduled, how estimates get
              followed up, how technicians document work, and whether the tools they already own are
              actually being used. This audit does exactly that.
            </p>
            <BulletList items={evaluationAreas} />
          </div>
          <InfoCard title="Who This Is For">
            <p className="mb-4">
              Owner-led contractor and field-service businesses with{" "}
              <strong className="text-navy">0–15 employees</strong> — HVAC, plumbing, electrical,
              roofing, general contracting, and related trades in the Tampa Bay area and beyond.
            </p>
            <p className="mb-4">A strong fit if you are experiencing:</p>
            <BulletList
              items={[
                "Disconnected systems that do not talk to each other",
                "Software bought but not adopted by the team",
                "Pressure to adopt AI with no clear plan",
                "Revenue leaks you suspect but cannot quantify",
                "No coherent roadmap for technology decisions",
              ]}
            />
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">Deliverables</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-8 max-w-2xl">
          What You Walk Away With
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {deliverables.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-cyan" />
              <p className="text-sm text-silver-light/90 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="tech-divider mt-12 mb-8" />
        <div className="bp-frame bp-panel p-6 max-w-2xl">
          <p className="font-mono text-[10px] font-semibold tracking-[0.14em] text-cyan uppercase mb-2">
            Vendor-Neutral. Always.
          </p>
          <p className="text-sm text-silver-light/85 leading-relaxed">
            <SignatureName className="text-lg mr-1">Richard</SignatureName> does not sell software
            licenses or earn commissions on platform referrals. Audit recommendations are based on
            what fits your business — not what pays a referral fee.
          </p>
        </div>
      </ContentSection>

      <ContentSection>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
          Process Overview
        </p>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-10">
          How the Audit Works
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((s) => (
            <div key={s.step} className="bp-frame bp-panel-light p-5">
              <span className="font-mono text-[10px] text-cyan">{s.step}</span>
              <h3 className="mt-2 font-display font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-navy/65 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-navy/60 max-w-2xl">
          Timeline and scope are discussed during the initial strategy call. Every business is
          different — the audit is tailored to your size, trades, and current state.
        </p>
      </ContentSection>

      <CtaBand
        headline="Start With Clarity, Not Another Demo"
        body="Book a Shop Visit to discuss whether the audit is the right starting point for your business."
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
