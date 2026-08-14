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
  title: "How It Works",
  description:
    "A clear, practical process for contractor technology advisory — from discovery call to audit, roadmap, implementation support, and training.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    summary: "A practical conversation about your business — not a software demo.",
    details: [
      "You share your trades, team size, current tools, and biggest pain points",
      "We ask about scheduling, follow-up, invoicing, and where things break down",
      "No pressure, no obligation, no platform pitch",
      "We recommend the right starting point — audit, selection, training, or recovery",
    ],
    duration: "30–45 minutes",
  },
  {
    number: "02",
    title: "Audit & Assessment",
    summary: "A structured review of your systems, workflows, and readiness.",
    details: [
      "Software and tool inventory across CRM, FSM, accounting, and communication",
      "Workflow and bottleneck analysis — office, dispatch, and field",
      "Staff adoption and training readiness assessment",
      "AI opportunity and risk evaluation",
      "Security and data-handling review",
      "Revenue leakage indicators",
    ],
    duration: "Varies by scope",
  },
  {
    number: "03",
    title: "Roadmap Delivery",
    summary: "A prioritized plan you can act on — not a binder that collects dust.",
    details: [
      "Written assessment with gap analysis and prioritized findings",
      "Vendor-neutral recommendations for software, process, and AI",
      "Sequenced implementation roadmap — what to fix first, second, third",
      "Walkthrough session to answer questions and clarify priorities",
      "Executive summary for owner review and team discussion",
    ],
    duration: "Delivered with walkthrough",
  },
  {
    number: "04",
    title: "Implementation Support",
    summary: "Help rolling out changes so they actually stick.",
    details: [
      "Phased rollout planning with migration and integration sequencing",
      "Go-live checklists and adoption checkpoints at 30, 60, and 90 days",
      "Software selection support if platform changes are recommended",
      "Custom workflow and program development for operational gaps",
      "Change management planning for office and field staff",
    ],
    duration: "Ongoing as needed",
  },
  {
    number: "05",
    title: "Training",
    summary: "Your team learns the tools — and the process behind them.",
    details: [
      "Role-specific training for owners, office staff, and technicians",
      "AI adoption training — practical uses and cautions",
      "Documentation and SOPs your team can reference after sessions",
      "Follow-up support to address adoption questions as they arise",
    ],
    duration: "Tailored to team size",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="How It Works"
        description="A straightforward path from first conversation to a modernized contractor operation — with clarity at every step and no software sales pressure."
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />

      <ContentSection>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
          Five Steps
        </p>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4 max-w-2xl">
          From Conversation to Modernized Operations
        </h2>
        <p className="text-navy/70 max-w-2xl mb-12 leading-relaxed">
          Not every engagement runs through all five steps. Some contractors need only an audit.
          Others need selection, implementation, and training.{" "}
          <SignatureName className="text-lg mx-0.5">Richard</SignatureName> recommends what fits —
          not a packaged upsell.
        </p>

        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bp-frame bp-panel-light p-6 sm:p-8 grid sm:grid-cols-[auto,1fr] gap-6"
            >
              <div className="font-mono text-3xl font-bold text-cyan/30 leading-none">
                {step.number}
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className="font-display text-xl font-semibold text-navy">{step.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-dim">
                    {step.duration}
                  </span>
                </div>
                <p className="text-navy/70 mb-4">{step.summary}</p>
                <BulletList items={step.details} />
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="grid lg:grid-cols-2 gap-10">
          <InfoCard title="What Makes This Different" dark>
            <BulletList
              dark
              items={[
                "Operator-led — built by someone who has run contractor and facilities operations",
                "Vendor-neutral — no software commissions driving recommendations",
                "Business before AI — process fixes come before automation",
                "Practical scope — engagements sized for owner-led teams, not enterprise rollouts",
                "You set the pace and the priorities",
              ]}
            />
          </InfoCard>
          <InfoCard title="Most Clients Start Here" dark>
            <p className="mb-4">
              The Technology &amp; AI Readiness Audit is the flagship starting point. It gives you
              a complete picture of where you stand and a roadmap for everything else.
            </p>
            <p className="font-mono text-[10px] text-cyan/70 uppercase tracking-wider">
              Discovery call → Audit → Roadmap → Implementation → Training
            </p>
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4">
          What It Is Not
        </h2>
        <p className="text-navy/70 max-w-2xl mb-6 leading-relaxed">
          This is not a software reseller relationship. You will not get a demo, a quote, or
          pressure to sign a platform contract. The goal is to help you make better decisions about
          technology, process, and AI — with someone who has done the work in the field.
        </p>
        <BulletList
          items={[
            "No software licenses sold",
            "No referral commissions from vendors",
            "No calendar widget pretending to be instant booking",
            "No obligation to purchase anything after the strategy call",
          ]}
        />
      </ContentSection>

      <CtaBand
        headline="Ready to Start With a Conversation?"
        body="Book a Shop Visit — 30 to 45 minutes, no pitch, no pressure."
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
