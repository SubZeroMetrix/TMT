import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";
import { PrimaryCTA } from "@/components/CTAButton";
import SignatureName from "@/components/SignatureName";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Schedule a practical strategy call with Richard Fritzke — no software pitch, no obligation. Discuss your contractor business systems, workflows, and technology goals.",
};

const callTopics = [
  "Your trades, team size, and how the business is structured today",
  "Current software stack — CRM, dispatch, invoicing, communication tools",
  "Biggest operational pain points — scheduling, follow-up, documentation, adoption",
  "Where you suspect revenue is leaking — missed calls, unsold estimates, lapsed agreements",
  "AI curiosity or pressure — what you have tried, what confused you, what you want to explore",
  "Timeline and budget expectations for technology changes",
  "Whether an audit, software selection, training, or recovery engagement fits best",
];

const prepareItems = [
  "A rough list of software tools you currently use (even if it is spreadsheets and group texts)",
  "Your team size — office staff, dispatchers, technicians, and owners wearing multiple hats",
  "The top 2–3 problems you want solved — in your own words, not vendor language",
  "Any recent estimates, invoices, or reports that show where things break down (optional but helpful)",
  "Questions you have been afraid to ask a software rep because you did not want a sales call",
];

export default function BookStrategyCallPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title="Book a Strategy Call"
        description="A practical conversation about your contractor business — your systems, your team, and where technology or AI can create real value. No software demo. No platform pitch. No obligation."
      />

      <ContentSection>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="font-display text-2xl text-navy mb-2">
            Talk with <SignatureName className="text-3xl mx-1">Richard Fritzke</SignatureName>
          </p>
          <p className="text-navy/70 leading-relaxed">
            Founder of The Modern Trades Mentor. 24+ years in HVAC, facilities, and contractor
            operations. Vendor-neutral advisory for owner-led teams with 0–15 employees.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
              What to Expect
            </p>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-6">
              A Real Conversation — Not a Sales Call
            </h2>
            <p className="text-navy/70 leading-relaxed mb-6">
              This is a 30–45 minute call to understand your business and recommend the right
              starting point. Richard will ask direct questions about how your operation runs, listen
              to what is not working, and give honest guidance — even if that guidance is
              &ldquo;you do not need new software yet.&rdquo;
            </p>
            <BulletList items={callTopics} />
          </div>
          <InfoCard title="What to Prepare">
            <p className="mb-4">
              You do not need a formal presentation or a technology audit before calling. Come
              ready to talk about your business in plain language.
            </p>
            <BulletList items={prepareItems} />
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">How to Book</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-6">
          Reach Out Directly
        </h2>
        <p className="text-silver-light/85 max-w-2xl mb-10 leading-relaxed">
          There is no automated calendar widget on this site — because a strategy call deserves a
          real conversation, not a slot machine. Call or email and Richard will schedule a time
          that works for both of you.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          <a
            href={contact.phone.href}
            className="bp-frame bp-panel p-6 block hover:border-cyan/50 transition-colors group"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-cyan mb-2">Phone</p>
            <p className="font-display text-2xl font-bold text-white group-hover:text-cyan transition-colors">
              {contact.phone.label}
            </p>
            <p className="mt-2 text-sm text-silver-light/70">Tap to call — fastest way to connect</p>
          </a>
          <a
            href={contact.email.href}
            className="bp-frame bp-panel p-6 block hover:border-cyan/50 transition-colors group"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-cyan mb-2">Email</p>
            <p className="font-display text-lg font-bold text-white group-hover:text-cyan transition-colors break-all">
              {contact.email.label}
            </p>
            <p className="mt-2 text-sm text-silver-light/70">Include your name, business, and best time to call</p>
          </a>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <PrimaryCTA href={contact.phone.href}>Call {contact.phone.label}</PrimaryCTA>
          <a
            href={contact.email.href}
            className="inline-flex items-center justify-center border border-cyan/50 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cyan hover:bg-cyan/10 transition-colors"
          >
            Send an Email
          </a>
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4">
          What Happens After the Call
        </h2>
        <p className="text-navy/70 max-w-2xl mb-8 leading-relaxed">
          If there is a fit, Richard will recommend a next step — typically the Technology &amp; AI
          Readiness Audit, a focused software selection engagement, or a training session. If there
          is not a fit, you will know that too. No follow-up spam. No drip campaigns. No pressure.
        </p>
        <BulletList
          items={[
            "Clear recommendation on what service fits — or honest feedback that you are not ready yet",
            "Scope and timeline discussion if you want to move forward",
            "Written proposal for paid engagements — pricing discussed on the call, not hidden behind a form",
            "You decide the pace — there is no artificial urgency",
          ]}
        />
      </ContentSection>

      <CtaBand
        headline="No Pressure. No Software Pitch. No Obligation."
        body="Call or email to schedule your strategy call."
        primary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
        secondary={{ label: "Email Richard", href: "mailto:Info@TheModernTradesMentorllc.com" }}
      />
    </>
  );
}
