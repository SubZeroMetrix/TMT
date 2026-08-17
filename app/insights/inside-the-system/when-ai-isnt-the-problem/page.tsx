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
  title: "When \"We Need AI\" Isn't Actually the Problem | Inside the System",
  description:
    "A TMT internal case study: how The Modern Trades Mentor separates what a prospect asks for from what discovery actually finds, before recommending any tool.",
  alternates: { canonical: "/insights/inside-the-system/when-ai-isnt-the-problem" },
};

const diagnosisQuestions = [
  "What does the customer say they want, in their own words?",
  "What did discovery actually find underneath that request?",
  "Is the real constraint follow-up, CRM, dispatch, pricing, or something else?",
  "Does the request map to an existing qualified path, or a new one?",
  "What happens to the original request if the diagnosis changes it?",
];

export default function WhenAiIsntTheProblemPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: "Inside the System", path: "/insights/inside-the-system" },
          {
            name: "When \"We Need AI\" Isn't Actually the Problem",
            path: "/insights/inside-the-system/when-ai-isnt-the-problem",
          },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: "When \"We Need AI\" Isn't Actually the Problem",
          description:
            "A TMT internal case study on separating what a customer asks for from what the business actually needs, before recommending a tool.",
          slug: "/insights/inside-the-system/when-ai-isnt-the-problem",
          published: "2026-08-16",
          updated: "2026-08-16",
        })}
      />

      <PageHero
        eyebrow="TMT Internal Case Study"
        title="When &quot;We Need AI&quot; Isn't Actually the Problem"
        description="A contractor asks for AI. The real constraint turns out to be something else entirely. Here's the system TMT built to make sure the request never becomes the diagnosis."
      />

      <ContentSection>
        <p className="max-w-3xl text-sm text-navy/55 mb-1">
          <Link href="/about" className="font-semibold text-navy/75 hover:text-cyan">
            Richard Fritzke
          </Link>{" "}
          — Founder, The Modern Trades Mentor. Trades and operations leader with more than 26
          years of HVAC, facilities, and mechanical-systems experience.
        </p>
        <p className="max-w-3xl text-xs text-navy/45 mb-8">Published August 16, 2026</p>
        <div className="max-w-3xl space-y-5 text-navy/80 leading-relaxed">
          <p>
            A business owner calls and says, &quot;I need AI.&quot; It&apos;s tempting to take
            that at face value — quote an AI project, build it, move on. That&apos;s also how a
            consultant ends up selling the wrong thing to a business that never had an AI
            problem in the first place.
          </p>
          <p>
            What someone asks for is not necessarily what the business actually needs. TMT&apos;s
            own intake system is built to keep those two things separate on purpose, so the
            original request never quietly disappears — and the eventual recommendation never
            gets shaped by what the customer said, instead of by what discovery actually found.
          </p>
        </div>

        <div className="mt-8 max-w-3xl grid gap-x-6 gap-y-1 text-xs uppercase tracking-wide text-navy/55 sm:grid-cols-2">
          <p><span className="font-semibold text-navy/70">System:</span> Service Interest vs. Qualified Commercial Path</p>
          <p><span className="font-semibold text-navy/70">Status:</span> Active internal implementation</p>
          <p><span className="font-semibold text-navy/70">Outcome data:</span> Not yet measured</p>
          <p><span className="font-semibold text-navy/70">Purpose:</span> Keep customer intent recorded separately from business diagnosis</p>
        </div>
        <p className="mt-4 max-w-xl text-sm text-navy/60 leading-relaxed border-l-[3px] border-blue-soft pl-4">
          What this does not prove: this is a system-design case study, not measured client
          ROI. No result is claimed until one has actually been measured.
        </p>

        <div className="mt-12 max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-navy tracking-tight">
            Inside the system
          </h2>
          <p className="mt-4 leading-relaxed text-navy/80">
            Every inbound request gets recorded as a <strong>Service Interest</strong> — what the
            person actually said they wanted, in their own words. A contractor who says &quot;I
            need AI&quot; gets that recorded exactly as said. Nothing is reinterpreted yet.
          </p>
          <p className="mt-4 leading-relaxed text-navy/80">
            Discovery then determines the real constraint — missed follow-up, a broken handoff, a
            CRM gap, pricing, capacity. That becomes a separate field: the{" "}
            <strong>Qualified Commercial Path</strong> — the engagement that actually fits what
            was found, which is not always the one originally requested. The original Service
            Interest is never overwritten by the diagnosis; both stay on the record.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-navy tracking-tight">
            What goes wrong without this
          </h2>
          <p className="mt-4 leading-relaxed text-navy/80">
            Skip this separation and a business ends up selling whatever the customer named
            first. A contractor who says &quot;I need AI&quot; gets an AI project — even if the
            real problem was that estimates sit unanswered for three weeks, which no AI feature
            fixes on its own. The fastest way to lose a client&apos;s trust is to build the thing
            they asked for and watch the business problem stay exactly where it was.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-navy tracking-tight">
            The business lesson
          </h2>
          <p className="mt-4 leading-relaxed text-navy/80">
            The customer&apos;s request is input. It is not the diagnosis. A customer who says
            &quot;I need AI&quot; may actually need consistent estimate follow-up, a CRM that
            catches missed calls, or clearer scheduling — none of which require AI to fix first.
            Letting the request dictate the solution skips the diagnosis that makes the
            recommendation correct. Business first. Tools second.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-navy tracking-tight">
            What this means for your business
          </h2>
          <p className="mt-4 text-navy/80 leading-relaxed">
            Before you buy the tool someone recommended, or the one a competitor mentioned, ask
            what you&apos;d actually be fixing:
          </p>
          <div className="mt-5">
            <BulletList items={diagnosisQuestions} />
          </div>
        </div>

        <div className="mt-12 max-w-3xl">
          <p className="text-navy/80 leading-relaxed">
            If you&apos;re not sure whether the tool you&apos;re considering solves the actual
            constraint in your business, that&apos;s exactly what a Strategy Call is for.
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

        <div className="mt-12 max-w-3xl border-t border-navy/10 pt-6">
          <p className="text-xs uppercase tracking-wide text-navy/45 mb-2">Related</p>
          <Link
            href="/insights/inside-the-system/ai-operating-system"
            className="block text-sm font-semibold text-blue hover:underline"
          >
            How TMT Built AI Into Its Own Operating System →
          </Link>
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
