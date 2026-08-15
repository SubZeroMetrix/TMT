import type { Metadata } from "next";
import { PageHero, ContentSection, InfoCard, BulletList, CtaBand } from "@/components/PageChrome";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AI Consulting & Automation for Contractors",
  description:
    "Find where AI or automation can improve response, follow-up, or visibility for a Tampa Bay contractor business — without buying tools that don't fit.",
  alternates: { canonical: "/services/ai-consulting-automation" },
};

const goodFits = [
  "Call summaries and after-hours call handling",
  "Customer follow-up that would otherwise get skipped",
  "Internal knowledge search — finding an answer instead of asking around",
  "Proposal and documentation drafting, reviewed before it goes out",
  "Scheduling support and reporting",
];

/**
 * The actual method, not a restatement of "where AI helps." Most AI
 * consultants sell a tool looking for a problem — a chatbot, a voice
 * agent, an automation platform — and the pitch starts with the
 * technology. This starts with the constraint and only reaches for AI if
 * a plain process fix doesn't close the gap on its own. No invented
 * outcomes — only the order of operations and the checkpoints.
 */
const process = [
  {
    step: "1. Find the repetitive work and handoff failures worth automating",
    body: "Measure the actual admin burden before naming a tool — how many after-hours calls, how many follow-ups actually get skipped, where information drops between the office and the field. A guess doesn't get automated.",
  },
  {
    step: "2. Fix the workflow before introducing AI or automation",
    body: "Often a named owner, a fixed cadence, or a configuration change closes the gap with no new tool at all. AI is considered only when a process fix alone can't do the job — automating a broken process just breaks it faster.",
  },
  {
    step: "3. Connect approved systems and data safely",
    body: "Exactly which systems and data are touched, who approves access, and who signs off before a customer sees the output — mapped and agreed before anything is connected, never assumed.",
  },
  {
    step: "4. Build practical automations for follow-up, routing, reminders, visibility, and admin reduction",
    body: "Narrow and specific — after-hours call handling, estimate follow-up that would otherwise get skipped, job routing, internal reminders, owner visibility into what's happening. One workflow at a time, with a human checkpoint before anything reaches a customer or touches a price.",
  },
  {
    step: "5. Test, document, train, and improve it with the owner's team",
    body: "A baseline taken before anything changes and a real number to check it against, a written record of what the automation does and why, and hands-on training so the team runs it — not TMT running it for them indefinitely.",
  },
];

const cautions = [
  "Not every process should be automated",
  "A poor process becomes a poor automated process — fix the process first",
  "Sensitive decisions still require human review",
  "Data access and permissions must be controlled",
  "Staff training matters as much as the tool",
];

export default function AiConsultingAutomationPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "AI Consulting & Automation",
          description:
            "Practical AI and automation guidance for contractor businesses, applied only where it solves a real business problem.",
          slug: "/services/ai-consulting-automation",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "AI Consulting & Automation", path: "/services/ai-consulting-automation" },
        ])}
      />

      <PageHero
        eyebrow="One of three ways to work with TMT"
        title="AI Consulting & Automation"
        description="Find where AI or automation can improve response, reduce repetitive admin work, strengthen follow-up, or improve visibility — without buying tools that don't fit the business. AI is optional, and used only where it solves a verified problem."
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
              Owners Who Want Practical AI, Not a Sales Pitch
            </h2>
            <p className="text-navy/70 leading-relaxed">
              You've heard the pitch. You want to know what actually works for a business your
              size, tied to a real problem — not a demo, not a chatbot for its own sake, and not
              a platform that adds a new thing someone has to check.
            </p>
          </div>
          <InfoCard title="Where AI Actually Helps a Contractor">
            <BulletList items={goodFits} />
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
          The Process
        </p>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4 max-w-2xl">
          The Problem Comes First, the Tool Comes Last
        </h2>
        <p className="text-navy/70 max-w-2xl mb-12 leading-relaxed">
          Most AI consultants start with the technology and go looking for a place to use it.
          This runs in the opposite order — and most candidates never make it past step two.
        </p>
        <div className="space-y-8">
          {process.map((p) => (
            <div key={p.step} className="border-t border-border-light pt-6">
              <h3 className="font-display font-semibold text-navy text-lg">{p.step}</h3>
              <p className="mt-2 text-sm text-navy/70 leading-relaxed max-w-3xl">{p.body}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">What We Watch For</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-8 max-w-2xl">
          Governed, Not Guessed At
        </h2>
        <BulletList items={cautions} dark />
        <p className="mt-8 text-sm text-silver-light/70 leading-relaxed max-w-2xl">
          Every recommendation is checked against who owns the decision, what data is involved,
          what the baseline is, and what happens when it's wrong or unavailable. If it can't
          survive that check, it doesn't go in the plan.
        </p>
      </ContentSection>

      <CtaBand
        headline="Find Out Where AI Actually Helps Your Business"
        body="Book a Strategy Call to discuss the specific problem — not a generic AI pitch."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
