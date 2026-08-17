import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  PageHero,
  ContentSection,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Why Leads Fall Through the Cracks — Even With a CRM | Inside the System",
  description:
    "A TMT internal case study: a CRM only prevents lost leads when every opportunity has an owner, a next action, and a due date — not because the contact is stored inside it.",
  alternates: {
    canonical: "/insights/inside-the-system/why-leads-fall-through-the-cracks",
  },
};

const opportunityQuestions = [
  "Who owns this opportunity right now?",
  "What is the next action, in plain language?",
  "When is that action due?",
  "What commercial state is it actually in — not what stage it's labeled?",
  "What happens automatically if the date passes with no reply?",
];

export default function WhyLeadsFallThroughTheCracksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: "Inside the System", path: "/insights/inside-the-system" },
          {
            name: "Why Leads Fall Through the Cracks — Even With a CRM",
            path: "/insights/inside-the-system/why-leads-fall-through-the-cracks",
          },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: "Why Leads Fall Through the Cracks — Even With a CRM",
          description:
            "A TMT internal case study on why storing a contact in a CRM isn't the same as tracking a live opportunity, and what actually prevents a lead from going cold.",
          slug: "/insights/inside-the-system/why-leads-fall-through-the-cracks",
          published: "2026-08-17",
          updated: "2026-08-17",
        })}
      />

      <PageHero
        eyebrow="TMT Internal Case Study"
        title="Why Leads Fall Through the Cracks — Even With a CRM"
        description="Most businesses that lose leads already own a CRM. The problem was never that the contact wasn't stored — it's that nobody could say who owned it, or what was supposed to happen next."
      />

      <ContentSection>
        <p className="max-w-3xl text-sm text-navy/55 mb-8">
          <span className="font-semibold text-navy/75">Richard Fritzke</span> — Founder, The
          Modern Trades Mentor. Trades and operations leader with more than 26 years of HVAC,
          facilities, and mechanical-systems experience.
        </p>
        <div className="max-w-3xl space-y-5 text-navy/80 leading-relaxed">
          <p>
            A customer calls, gets a quote, and never hears back. Not because anyone decided to
            ignore them — because the estimate sat in a pipeline with no owner, no next step, and
            no date attached to it, until three weeks had passed and it was too late to matter.
          </p>
          <p>
            A CRM is not valuable because contacts live inside it. It becomes valuable when the
            business knows, for every real opportunity, who owns it, what happens next, and when
            it has to happen — and when a reply from the customer stops the automation and hands
            the conversation back to a person.
          </p>
        </div>

        <div className="mt-8 max-w-3xl grid gap-x-6 gap-y-1 text-xs uppercase tracking-wide text-navy/55 sm:grid-cols-2">
          <p><span className="font-semibold text-navy/70">System:</span> Core Reply Handoff, Next Action / Owner / Date</p>
          <p><span className="font-semibold text-navy/70">Status:</span> Active internal implementation</p>
          <p><span className="font-semibold text-navy/70">Outcome data:</span> Not yet measured</p>
          <p><span className="font-semibold text-navy/70">Purpose:</span> Give every live opportunity an owner, a next action, and a due date</p>
        </div>

        <div className="mt-12 max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-navy tracking-tight">
            Inside the system
          </h2>
          <p className="mt-4 leading-relaxed text-navy/80">
            TMT routes inbound contact by relationship, not by a single generic funnel — a
            first-time cold inquiry, a warm inbound reply, an existing relationship reaching back
            out, and a referral each get handled differently, because a stranger and a past
            client don&apos;t need the same first message.
          </p>
          <p className="mt-4 leading-relaxed text-navy/80">
            The moment a real person replies, automation stops. That&apos;s a deliberate design
            choice: a templated sequence continuing to run after someone has actually responded is
            exactly the kind of automation mistake that makes a business look like nobody&apos;s
            paying attention.
          </p>
        </div>

        <div className="mt-10 max-w-4xl">
          <div className="bp-frame overflow-hidden bp-panel-light">
            <Image
              src="/case-studies/tmt-warm-inbound-instant-acknowledgment-workflow.png"
              alt="The Modern Trades Mentor Warm Inbound workflow: a warm-inbound tag triggers an instant acknowledgment email, creates a task, sets the conversation state to Active, then branches on whether a meeting is already booked."
              width={1326}
              height={846}
              className="w-full h-auto"
              sizes="(min-width: 1024px) 896px, 100vw"
            />
          </div>
          <p className="mt-3 text-sm text-navy/60">
            TMT&apos;s Warm Inbound workflow. A reply gets acknowledged immediately, an owner gets
            a task, and the conversation state changes to Active — so the opportunity has a
            record of ownership before anyone has to remember to check on it.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-navy tracking-tight">
            What goes wrong without this
          </h2>
          <p className="mt-4 leading-relaxed text-navy/80">
            Without an owner and a due date, a lead doesn&apos;t get lost dramatically — it just
            quietly stops moving. Nobody decided to drop it; it simply sat in a stage with no
            deadline attached until the customer had already gone with someone else. The CRM
            still shows the contact. It just can&apos;t show that anything was supposed to happen.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-navy tracking-tight">
            The business lesson
          </h2>
          <p className="mt-4 leading-relaxed text-navy/80">
            Storing a contact is not the same as tracking an opportunity. Automation can route the
            message and log the reply; it should never be trusted to decide the deal is dead or
            keep messaging past the point a real person answered. That judgment call — and the
            follow-through — has to stay with someone accountable.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-navy tracking-tight">
            What this means for your business
          </h2>
          <p className="mt-4 text-navy/80 leading-relaxed">
            TMT&apos;s system requires each open opportunity to carry an answer to every one of
            these. Ask them about your own pipeline right now:
          </p>
          <div className="mt-5">
            <BulletList items={opportunityQuestions} />
          </div>
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
        headline="More from Inside the System"
        body="See the other real TMT systems and the business lessons behind them."
        primary={{ label: "Explore Inside the System", href: "/insights/inside-the-system" }}
        secondary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
      />
    </>
  );
}
