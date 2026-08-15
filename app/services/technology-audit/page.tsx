import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";
import SignatureName from "@/components/SignatureName";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, NAP } from "@/lib/seo/schema";
import { AUDIT_FAQS } from "@/lib/seo/faqs";

/** Founding-client pilot price. First three engagements, then reassessed. */
const AUDIT_PRICE = "$1,500";

export const metadata: Metadata = {
  title: "Growth & Systems Blueprint",
  description:
    "A fixed-fee operational blueprint for Tampa Bay service businesses: workflow map, your top three operating leaks, a measured baseline, and a 30/60/90-day plan. $1,500 founding-client price, delivered in five business days.",
  alternates: { canonical: "/services/technology-audit" },
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
  "A map of how work actually moves through your business today",
  "Your top three operational leaks, named and ranked",
  "A measured baseline — hours, delays, missed follow-up, rework, and revenue exposure",
  "A prioritized action plan scored by impact, effort, cost, and risk",
  "Two to three specific technology or AI use cases worth pursuing",
  "A vendor-neutral implementation recommendation",
  "A 30/60/90-day roadmap",
  "AI-use safeguards and the points where you approve before anything runs",
];

/**
 * NIST AI Risk Management Framework — Govern, Map, Measure, Manage. Every
 * recommendation is run through these four before it reaches the roadmap.
 * This is the part a consultant without operations experience cannot fake.
 */
const riskStandard = [
  {
    title: "Govern",
    body: "Who owns the decision, and who signs off on what the system produces before a customer sees it.",
  },
  {
    title: "Map",
    body: "Exactly which process and which data are involved. No vague 'we will automate follow-up'.",
  },
  {
    title: "Measure",
    body: "The baseline taken before anything changes, and the number that will prove whether it worked.",
  },
  {
    title: "Manage",
    body: "What happens when it is wrong, when it is down, or when it creates a risk you did not have before.",
  },
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
    body: "Written report and roadmap delivered within five business days, with a walkthrough session to answer questions and agree priorities.",
  },
];

export default function TechnologyAuditPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Growth & Systems Blueprint",
          description:
            "A fixed-fee operational audit for owner-led service businesses: workflow map, top three operating leaks, a measured baseline, prioritized action plan, and a 30/60/90-day roadmap.",
          slug: "/services/technology-audit",
        })}
      />
      <JsonLd data={faqSchema(AUDIT_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Growth & Systems Blueprint", path: "/services/technology-audit" },
        ])}
      />

      <PageHero
        eyebrow={`${AUDIT_PRICE} founding-client price · Delivered in 5 business days`}
        title="Growth & Systems Blueprint"
        description="Find the operating problems that waste time, delay follow-up, and make technology investments fail — measured, ranked, and turned into a 30/60/90-day plan. We start with the workflow, not the software."
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
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
              <strong className="text-navy">5–30 employees</strong> — HVAC, plumbing, electrical,
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

      {/* THE OFFER — stated once, in full, on this page only */}
      <ContentSection>
        <div className="bp-frame bp-panel-light max-w-3xl p-7 sm:p-9">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
            The Offer
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-navy">
            Growth &amp; Systems Blueprint — {AUDIT_PRICE} founding-client price
          </h2>
          <p className="mt-5 leading-relaxed text-navy/75">
            Available for the first three completed client engagements. Includes an
            on-site workflow review, documented findings, prioritized
            recommendations, and a practical 30/60/90-day action plan. The fee is
            credited toward an approved implementation engagement.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="/book-a-strategy-call#schedule"
              className="inline-flex items-center justify-center rounded-md bg-blue px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
            >
              Book a Shop Visit
            </a>
            <a
              href={`tel:${NAP.phone}`}
              className="inline-flex items-center justify-center rounded-md border border-navy/20 bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
            >
              Call or text {NAP.phoneDisplay}
            </a>
          </div>
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan mb-3">
            The Standard Behind Every Recommendation
          </p>
          <h2 className="font-display text-3xl font-bold text-white tracking-tight">
            Four questions every recommendation has to survive
          </h2>
          <p className="mt-5 leading-relaxed text-silver-light/85">
            Anyone can suggest automating something. The harder job is deciding
            whether it should be automated at all, and what happens the day it
            gets something wrong. Every recommendation in your roadmap is run
            through the four functions of the{" "}
            <a
              href="https://www.nist.gov/itl/ai-risk-management-framework/nist-ai-rmf-playbook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-light hover:underline"
            >
              NIST AI Risk Management Framework
            </a>
            . If it cannot survive all four, it does not go in the plan.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {riskStandard.map((item) => (
            <InfoCard key={item.title} title={item.title} dark>
              {item.body}
            </InfoCard>
          ))}
        </div>
        <div className="mt-8 max-w-3xl border-l-[3px] border-blue-soft pl-4">
          <p className="text-sm leading-relaxed text-silver-light/85">
            <strong className="text-white">The audit is the diagnosis and the
            decision plan.</strong>{" "}
            Implementation is quoted separately as a fixed-scope project once
            you know what is actually worth doing. That boundary is what stops
            an engagement turning into open-ended troubleshooting nobody can
            price.
          </p>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
            Common questions
          </p>
          <h2 className="font-display text-3xl font-bold text-navy tracking-tight">
            Price, scope, and what happens next
          </h2>
          <div className="mt-8 space-y-7">
            {AUDIT_FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-display text-lg font-semibold text-navy">
                  {faq.question}
                </h3>
                <p className="mt-2.5 leading-relaxed text-navy/70">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-navy/70">
            Call or text {NAP.phoneDisplay} ·{" "}
            <a href={`mailto:${NAP.email}`} className="text-blue hover:underline">
              {NAP.email}
            </a>
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
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
