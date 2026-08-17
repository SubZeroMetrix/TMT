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
  title: "How TMT Built AI Into Its Own Operating System | Inside the System",
  description:
    "A TMT internal case study: how The Modern Trades Mentor routes a signed engagement into the right delivery path instead of treating every sale the same way.",
  alternates: { canonical: "/insights/inside-the-system/ai-operating-system" },
};

const agentBuildingBlocks = [
  "Business rules and SOPs — the judgment calls already made, written down",
  "Files, documents, and structured data — pricing, service history, project records",
  "CRM records and customer history — what already happened with this account",
  "Triggers and workflow conditions — what event starts the process, and what branch it takes",
  "Tools the system is authorized to use — what it can touch, and what it can't",
  "Permissions and safeguards — limits on what runs without a person checking it",
  "Human decision points — where judgment stays with a person on purpose",
  "Measurement and feedback — how anyone finds out whether it actually worked",
];

const weakVsStrong = [
  "What actually happened?",
  "What type of engagement or job is this?",
  "What information already exists on this customer?",
  "What can safely happen automatically?",
  "What requires a person to look at it first?",
  "What system should own this next step?",
  "How do we stop duplicate work or a bad handoff?",
  "How do we know afterward whether it worked?",
];

export default function AiOperatingSystemPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: "Inside the System", path: "/insights/inside-the-system" },
          {
            name: "How TMT Built AI Into Its Own Operating System",
            path: "/insights/inside-the-system/ai-operating-system",
          },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: "How TMT Built AI Into Its Own Operating System",
          description:
            "How The Modern Trades Mentor built its own commercial and client-delivery workflow — business event, business context, decision, workflow, system update, accountability.",
          slug: "/insights/inside-the-system/ai-operating-system",
          published: "2026-08-16",
          updated: "2026-08-17",
        })}
      />

      <PageHero
        eyebrow="TMT Internal Case Study"
        title="How TMT Built AI Into Its Own Operating System"
        description="A customer signs. Sales considers the deal won. Someone still has to know exactly what was sold and route it into the right delivery process — automatically, correctly, every time."
      />

      <ContentSection>
        <p className="max-w-3xl text-sm text-navy/55 mb-8">
          <span className="font-semibold text-navy/75">Richard Fritzke</span> — Founder, The
          Modern Trades Mentor. Trades and operations leader with more than 26 years of HVAC,
          facilities, and mechanical-systems experience.
        </p>
        <div className="max-w-3xl space-y-5 text-navy/80 leading-relaxed">
          <p>
            A signed engagement isn&apos;t one thing. A fixed-scope implementation, an advisory
            retainer, and an ongoing growth partnership are three different operating
            relationships with three different delivery paths — but from the CRM&apos;s point of
            view, they can all look like the same event: a deal moved to &quot;won.&quot;
          </p>
          <p>
            Before recommending AI or automation to a contractor in St. Petersburg or Tampa, The
            Modern Trades Mentor applies the same principles to its own business first: understand
            the process, organize the information the work actually needs, define the decision
            points, connect the systems, and automate only the actions that should be automated.
            This is not a client result — it is TMT&apos;s own commercial and client-delivery
            workflow, shown so you can see the reasoning behind it, not just the outcome.
          </p>
        </div>

        <div className="mt-8 max-w-3xl grid gap-x-6 gap-y-1 text-xs uppercase tracking-wide text-navy/55 sm:grid-cols-2">
          <p><span className="font-semibold text-navy/70">System:</span> TMT&apos;s commercial and client-delivery workflow</p>
          <p><span className="font-semibold text-navy/70">Status:</span> Active internal implementation — being hardened for multi-engagement idempotency</p>
          <p><span className="font-semibold text-navy/70">Outcome data:</span> Not yet measured</p>
          <p><span className="font-semibold text-navy/70">Purpose:</span> Show how AI and automation should be built around a real business process</p>
        </div>
        <p className="mt-4 max-w-xl text-sm text-navy/60 leading-relaxed border-l-[3px] border-blue-soft pl-4">
          Current work: the routing shown below is live. TMT is currently hardening it so a
          repeat engagement from the same customer gets its own delivery record — instead of
          being mistaken for a retry of the first one, or silently overwriting it.
        </p>

        <div className="mt-10 max-w-4xl">
          <div className="bp-frame overflow-hidden bp-panel-light">
            <Image
              src="/case-studies/tmt-implementation-handoff-workflow.png"
              alt="The Modern Trades Mentor Implementation Handoff workflow showing fixed-scope implementation, Growth Ops Advisory, and Ongoing Growth Partner automation branches in GoHighLevel."
              width={1320}
              height={840}
              className="w-full h-auto"
              sizes="(min-width: 1024px) 896px, 100vw"
            />
          </div>
          <p className="mt-3 text-sm text-navy/60">
            TMT&apos;s internal Implementation Handoff workflow. The system evaluates the
            engagement type before creating the appropriate delivery path and next actions.
          </p>
        </div>

        <div className="mt-10 max-w-3xl space-y-5 text-navy/80 leading-relaxed">
          <p>
            This workflow begins when an implementation reaches the appropriate commercial stage.
            Instead of treating every engagement the same, the system evaluates what was actually
            sold and routes the work into the correct operating path.
          </p>
          <p>
            A fixed-scope implementation requires a different handoff than Growth Ops Advisory. An
            Ongoing Growth Partner engagement requires a different operating cadence again. The
            automation updates the CRM, creates the appropriate delivery record, assigns
            accountable next actions, and preserves the commercial context behind the decision.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-navy tracking-tight">
            What goes wrong without this
          </h2>
          <p className="mt-4 leading-relaxed text-navy/80">
            Route every signed deal the same way and Advisory clients start getting
            implementation task lists meant for a build they never bought, while a repeat customer
            months later can quietly overwrite their first engagement's delivery history instead
            of starting a genuinely new one. Neither failure looks dramatic in the moment — they
            just mean the wrong people get the wrong tasks, or history disappears.
          </p>
        </div>

        <div className="mt-12 max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-navy tracking-tight">
            What this shows about business AI
          </h2>
          <p className="mt-4 leading-relaxed text-navy/80">
            AI agents are not magic software employees. In a real business system, they are
            usually a combination of instructions, business context, files and data, tools,
            permissions, triggers, workflows, and a model that can reason and act inside those
            boundaries. Files and folders matter because they can hold the operating knowledge an
            agent needs — SOPs, pricing rules, customer history, templates, policies, project
            records. But the agent also needs the workflow logic and tool access that decide when
            it should act, what it is allowed to do, and where the result belongs.
          </p>
          <p className="mt-5 font-display font-semibold text-lg text-navy">
            The agent does not replace the process. It operates inside the process.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-navy tracking-tight">Why the workflow matters</h2>
          <p className="mt-4 text-navy/80 leading-relaxed">
            A weak automation says: <em>&quot;when this happens, do X.&quot;</em> A stronger
            operating system asks a longer list of questions first:
          </p>
          <div className="mt-5">
            <BulletList items={weakVsStrong} />
          </div>
          <p className="mt-5 text-navy/80 leading-relaxed">
            That is the difference between installing automation and designing an operating
            system.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display font-bold text-2xl text-navy tracking-tight">
              What actually makes up an agent
            </h2>
            <p className="mt-4 mb-5 text-sm leading-relaxed text-navy/70">
              The value of AI does not come from adding &quot;an agent.&quot; It comes from
              organizing the information the agent needs and connecting it to the right systems.
            </p>
            <BulletList items={agentBuildingBlocks} />
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-navy tracking-tight">
              Business first. Tools second.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              TMT does not start by asking where to install AI. It starts by asking where a St.
              Petersburg or Tampa Bay business is losing time, where opportunities are missed,
              where handoffs break, where information is trapped, what decisions repeat, what
              work should stay human, and what system should own the truth. Only then does process
              change, a CRM setting, an integration, or AI actually get recommended.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-3xl">
          <p className="text-navy/80 leading-relaxed">
            AI works best when it is connected to a business process that already makes sense. If
            you want to understand where automation or AI could actually help your business — in
            Pinellas or Hillsborough County — start with a Strategy Call.
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
