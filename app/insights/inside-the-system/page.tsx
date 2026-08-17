import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  ContentSection,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Inside the System | Real TMT Systems, Explained",
  description:
    "Real Modern Trades Mentor systems, explained in plain language — how TMT applies growth, CRM, workflow, and AI principles inside its own business before recommending them to clients.",
  alternates: { canonical: "/insights/inside-the-system" },
};

const diagnosisQuestions = [
  "What does the customer say they want, in their own words?",
  "What did discovery actually find underneath that request?",
  "Is the real constraint follow-up, CRM, dispatch, pricing, or something else?",
  "Does the request map to an existing qualified path, or a new one?",
  "What happens to the original request if the diagnosis changes it?",
];

const opportunityQuestions = [
  "Who owns this opportunity right now?",
  "What is the next action, in plain language?",
  "When is that action due?",
  "What commercial state is it actually in — not what stage it's labeled?",
  "What happens automatically if the date passes with no reply?",
];

export default function InsideTheSystemPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: "Inside the System", path: "/insights/inside-the-system" },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: "Inside the System — Real TMT Systems, Explained",
          description:
            "Real Modern Trades Mentor systems, explained in plain language for contractors and local service businesses.",
          slug: "/insights/inside-the-system",
          published: "2026-08-17",
          updated: "2026-08-17",
        })}
      />

      <PageHero
        eyebrow="Inside the System"
        title="Real TMT Systems, Explained"
        description="The Modern Trades Mentor applies the same growth, CRM, workflow, automation, and AI principles inside its own business before recommending them to clients. This is how those systems actually work — real implementation, not a sales demo."
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="leading-relaxed text-navy/80">
            Real systems. Real implementation. Measured results are shown only when they exist.
            TMT documents what was built, what is being tested, and what changed once there is
            evidence to show — not before.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Link
            href="/ai-automation#case-study"
            className="group bp-frame bp-panel-light p-7 hover:border-cyan/60 transition-colors block"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-cyan mb-3">
              TMT Internal Case Study
            </p>
            <h2 className="font-display text-lg font-semibold text-navy group-hover:text-cyan transition-colors">
              How TMT Built AI Into Its Own Operating System
            </h2>
            <p className="mt-3 text-sm text-navy/70 leading-relaxed">
              One business event should not always produce one generic automation — how TMT
              routes a signed engagement into the right delivery path.
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-wider text-cyan-dim group-hover:text-cyan">
              See how it works →
            </p>
          </Link>

          <a
            href="#when-ai-isnt-the-problem"
            className="group bp-frame bp-panel-light p-7 hover:border-cyan/60 transition-colors block"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-cyan mb-3">
              TMT Internal Case Study
            </p>
            <h2 className="font-display text-lg font-semibold text-navy group-hover:text-cyan transition-colors">
              When &quot;We Need AI&quot; Isn&apos;t Actually the Problem
            </h2>
            <p className="mt-3 text-sm text-navy/70 leading-relaxed">
              What a customer asks for and what the business actually needs are not always the
              same thing — how TMT separates the two before recommending anything.
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-wider text-cyan-dim group-hover:text-cyan">
              See how it works →
            </p>
          </a>

          <a
            href="#leads-falling-through-cracks"
            className="group bp-frame bp-panel-light p-7 hover:border-cyan/60 transition-colors block"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-cyan mb-3">
              TMT Internal Case Study
            </p>
            <h2 className="font-display text-lg font-semibold text-navy group-hover:text-cyan transition-colors">
              How TMT Prevents Leads From Falling Through the Cracks
            </h2>
            <p className="mt-3 text-sm text-navy/70 leading-relaxed">
              A CRM isn&apos;t useful because contacts live inside it — it&apos;s useful when
              every real opportunity has an owner, a next action, and a due date.
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-wider text-cyan-dim group-hover:text-cyan">
              See how it works →
            </p>
          </a>
        </div>
      </ContentSection>

      {/* CASE STUDY 2 */}
      <ContentSection dark id="when-ai-isnt-the-problem">
        <div className="max-w-3xl">
          <p className="bp-label mb-3">TMT Internal Case Study</p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            When &quot;We Need AI&quot; Isn&apos;t Actually the Problem
          </h2>
          <p className="mt-5 leading-relaxed text-silver-light/85">
            What someone asks for is not necessarily what the business actually needs. TMT&apos;s
            own intake system is built to keep those two things separate on purpose, so the
            original request never quietly disappears — and the eventual recommendation never
            gets shaped by what the customer said, rather than by what discovery actually found.
          </p>
          <div className="mt-5 grid gap-x-6 gap-y-1 text-xs uppercase tracking-wide text-silver-light/60 sm:grid-cols-2">
            <p><span className="font-semibold text-silver-light/85">System:</span> Service Interest vs. Qualified Commercial Path</p>
            <p><span className="font-semibold text-silver-light/85">Status:</span> Active internal implementation</p>
            <p><span className="font-semibold text-silver-light/85">Outcome data:</span> Not yet measured</p>
            <p><span className="font-semibold text-silver-light/85">Purpose:</span> Keep customer intent recorded separately from business diagnosis</p>
          </div>
        </div>

        <div className="mt-10 max-w-3xl space-y-5 text-silver-light/85 leading-relaxed">
          <p>
            Every inbound request gets recorded as a <strong className="text-white">Service
            Interest</strong> — what the person actually said they wanted, in their own words. A
            contractor who says &quot;I need AI&quot; gets that recorded exactly as said. Nothing
            is reinterpreted yet.
          </p>
          <p>
            Discovery then determines the real constraint — missed follow-up, a broken handoff,
            a CRM gap, pricing, capacity. That becomes a separate field: the{" "}
            <strong className="text-white">Qualified Commercial Path</strong> — the engagement
            that actually fits what was found, which is not always the one originally requested.
            The original Service Interest is never overwritten by the diagnosis; both stay on the
            record.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <h3 className="font-display font-semibold text-xl text-white">
            The customer&apos;s request is input. It is not the diagnosis.
          </h3>
          <p className="mt-4 leading-relaxed text-silver-light/85">
            A customer who says &quot;I need AI&quot; may actually need consistent estimate
            follow-up, a CRM that catches missed calls, or clearer scheduling — none of which
            require AI to fix first. Letting the request dictate the solution skips the diagnosis
            that makes the recommendation correct. Business first. Tools second.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <h3 className="font-display font-semibold text-xl text-white">
            Questions this system is built to answer
          </h3>
          <div className="mt-5">
            <BulletList items={diagnosisQuestions} dark />
          </div>
        </div>
      </ContentSection>

      {/* CASE STUDY 3 */}
      <ContentSection id="leads-falling-through-cracks">
        <div className="max-w-3xl">
          <p className="bp-label mb-3">TMT Internal Case Study</p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
            How TMT Prevents Leads From Falling Through the Cracks
          </h2>
          <p className="mt-5 leading-relaxed text-navy/80">
            A CRM is not valuable because contacts live inside it. It becomes valuable when the
            business knows, for every real opportunity, who owns it, what happens next, and when
            it has to happen — and when a reply from the customer stops the automation and hands
            the conversation back to a person.
          </p>
          <div className="mt-5 grid gap-x-6 gap-y-1 text-xs uppercase tracking-wide text-navy/55 sm:grid-cols-2">
            <p><span className="font-semibold text-navy/70">System:</span> Core Reply Handoff, Next Action / Owner / Date</p>
            <p><span className="font-semibold text-navy/70">Status:</span> Active internal implementation</p>
            <p><span className="font-semibold text-navy/70">Outcome data:</span> Not yet measured</p>
            <p><span className="font-semibold text-navy/70">Purpose:</span> Give every live opportunity an owner, a next action, and a due date</p>
          </div>
        </div>

        <div className="mt-10 max-w-3xl space-y-5 text-navy/80 leading-relaxed">
          <p>
            TMT routes inbound contact by relationship, not by a single generic funnel — a
            first-time cold inquiry, a warm inbound reply, an existing relationship reaching back
            out, and a referral each get handled differently, because a stranger and a past client
            don&apos;t need the same first message.
          </p>
          <p>
            The moment a real person replies, automation stops. That&apos;s a deliberate design
            choice: a templated sequence continuing to run after someone has actually responded is
            exactly the kind of automation mistake that makes a business look like nobody&apos;s
            paying attention.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <h3 className="font-display font-semibold text-xl text-navy">
            What a real opportunity needs
          </h3>
          <p className="mt-4 text-navy/80 leading-relaxed">
            Storing a contact is not the same as tracking an opportunity. TMT&apos;s system
            requires each open opportunity to carry:
          </p>
          <div className="mt-5">
            <BulletList items={opportunityQuestions} />
          </div>
          <p className="mt-5 text-navy/80 leading-relaxed">
            Without an owner and a due date, a lead doesn&apos;t get lost dramatically — it just
            quietly stops moving, and nobody notices until the customer has already gone with
            someone else.
          </p>
        </div>

        <div className="mt-12 max-w-3xl">
          <p className="text-navy/80 leading-relaxed">
            If you want to see whether your own follow-up has this kind of ownership and timing
            built in — or is quietly relying on someone remembering — start with a Strategy Call.
          </p>
          <div className="mt-6">
            <Link
              href="/book-a-strategy-call#schedule"
              className="inline-flex items-center justify-center rounded-md bg-blue px-7 py-3.5 text-sm font-semibold tracking-wide text-white hover:bg-blue-light transition-colors"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </ContentSection>

      <CtaBand
        headline="Want to see how this would work in your business?"
        body="Start with a free Strategy Call — no pitch, no pricing, just a straight look at where your own systems stand."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Explore the AI Automation page", href: "/ai-automation" }}
      />
    </>
  );
}
