import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, articleSchema, NAP } from "@/lib/seo/schema";
import { AI_AUTOMATION_TAMPA_FAQS } from "@/lib/seo/faqs";

export const metadata: Metadata = {
  title: "AI Automation for Small Business | St. Petersburg & Tampa Bay",
  description:
    "AI automation for small businesses in St. Petersburg and Tampa. Cut manual admin work on calls, follow-up, and billing — without buying software you don't need.",
  alternates: { canonical: "/ai-automation" },
};

const firstToAutomate = [
  "Calls that come in after hours, so the job does not go to whoever picked up first",
  "Follow-up on estimates that would otherwise sit for three weeks",
  "Turning long job notes into something the office can bill from without a phone call",
  "Finding work that was completed but never invoiced, or invoiced short",
  "The same customer question answered from scratch fifteen times a week",
  "Reminders for maintenance agreements nobody has time to chase",
];

const notWorthAutomating = [
  "Anything that reaches a customer without a person reading it first",
  "Pricing — a wrong number is more expensive than a slow one",
  "Safety judgments, code interpretation, or anything a licensed tech signs",
  "Work that only happens twice a year",
  "A process nobody can describe out loud yet",
];

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

const receive = [
  {
    title: "A ranked list, not a wish list",
    body: "What to automate first, second, and not at all — ordered by hours returned against effort and risk, with a reason attached to each line.",
  },
  {
    title: "The process fix underneath",
    body: "Most automation fails because it was layered on a process nobody owned. Where that is the case, you get the process change first, which usually costs nothing.",
  },
  {
    title: "Tool recommendations, or none",
    body: "Sometimes the answer is a setting in software you already pay for. When it is not, you get a specific recommendation and the reason it fits your size and budget.",
  },
  {
    title: "Training that holds",
    body: "The step everyone skips. Your office staff and techs, on the workflow they will actually touch, until it runs without you standing over it.",
  },
];

export default function AiAutomationPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "AI Automation for Small Business",
          description:
            "AI and workflow automation for small service businesses — reducing manual admin work across calls, scheduling, follow-up, job documentation and billing.",
          slug: "/ai-automation",
        })}
      />
      <JsonLd data={faqSchema(AI_AUTOMATION_TAMPA_FAQS)} />
      <JsonLd
        data={articleSchema({
          headline: "Case Study: How TMT Built AI Into Its Own Operating System",
          description:
            "How The Modern Trades Mentor built its own commercial and client-delivery workflow — business event, business context, decision, workflow, system update, accountability.",
          slug: "/ai-automation#case-study",
          published: "2026-08-16",
          updated: "2026-08-16",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "AI Automation", path: "/ai-automation" },
        ])}
      />

      <PageHero
        eyebrow="AI Automation"
        title="AI Automation for Small Businesses"
        description="Cut the manual admin work that eats your week — calls, follow-up, job notes, billing — without buying software you do not need. Serving St. Petersburg, Tampa and all of Pinellas and Hillsborough counties."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "Call (727) 600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="text-lg text-navy/85 leading-relaxed">
            AI automation means handing a narrow, repetitive task to software so
            a person stops doing it by hand. For a small business that usually
            looks like capturing calls after hours, chasing estimates that went
            quiet, and turning field notes into something billable — not
            replacing anyone, and not running the company.
          </p>
          <p className="mt-4 text-navy/75 leading-relaxed">
            The Modern Trades Mentor works with owner-led service businesses
            across St. Petersburg and Tampa Bay. We do
            not sell software licenses and take no commission from any vendor.
            The recommendation is whatever fits your business.
          </p>
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display font-bold text-2xl text-white tracking-tight">
              What to automate first
            </h2>
            <p className="mt-4 mb-6 text-sm leading-relaxed text-silver-light/80">
              Narrow jobs, clear payback, low cost if one gets it wrong.
            </p>
            <BulletList items={firstToAutomate} dark />
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-white tracking-tight">
              What to leave alone
            </h2>
            <p className="mt-4 mb-6 text-sm leading-relaxed text-silver-light/80">
              This list matters more. Getting it wrong here costs a customer,
              not a subscription.
            </p>
            <BulletList items={notWorthAutomating} dark />
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
          What you get
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {receive.map((item) => (
            <InfoCard key={item.title} title={item.title}>
              {item.body}
            </InfoCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="case-study">
        <div className="max-w-3xl">
          <p className="bp-label mb-3">TMT Internal Case Study</p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
            Case Study: How TMT Built AI Into Its Own Operating System
          </h2>
          <p className="mt-5 leading-relaxed text-navy/80">
            Before recommending AI or automation to a contractor in St. Petersburg or Tampa, The
            Modern Trades Mentor applies the same principles to its own business first: understand
            the process, organize the information the work actually needs, define the decision
            points, connect the systems, and automate only the actions that should be automated.
            This is not a client result — it is TMT&apos;s own commercial and client-delivery
            workflow, shown so you can see the reasoning behind it, not just the outcome.
          </p>
          <div className="mt-5 grid gap-x-6 gap-y-1 text-xs uppercase tracking-wide text-navy/55 sm:grid-cols-2">
            <p><span className="font-semibold text-navy/70">System:</span> TMT&apos;s commercial and client-delivery workflow</p>
            <p><span className="font-semibold text-navy/70">Status:</span> Active internal implementation — being hardened for multi-engagement idempotency</p>
            <p><span className="font-semibold text-navy/70">Outcome data:</span> Not yet measured</p>
            <p><span className="font-semibold text-navy/70">Purpose:</span> Show how AI and automation should be built around a real business process</p>
          </div>
          <p className="mt-4 text-sm text-navy/60 leading-relaxed border-l-[3px] border-blue-soft pl-4 max-w-xl">
            Current work: the routing shown below is live. TMT is currently hardening it so a
            repeat engagement from the same customer gets its own delivery record — instead of
            being mistaken for a retry of the first one, or silently overwriting it.
          </p>
        </div>

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

        <div className="mt-12 max-w-3xl">
          <h3 className="font-display font-semibold text-xl text-navy">
            What this shows about business AI
          </h3>
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
          <h3 className="font-display font-semibold text-xl text-navy">Why the workflow matters</h3>
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
            <h3 className="font-display font-semibold text-xl text-navy">
              What actually makes up an agent
            </h3>
            <p className="mt-4 mb-5 text-sm leading-relaxed text-navy/70">
              The value of AI does not come from adding &quot;an agent.&quot; It comes from
              organizing the information the agent needs and connecting it to the right systems.
            </p>
            <BulletList items={agentBuildingBlocks} />
          </div>
          <div>
            <h3 className="font-display font-semibold text-xl text-navy">
              Business first. Tools second.
            </h3>
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

      <ContentSection dark>
        <div className="max-w-3xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            Where we work
          </h2>
          <p className="mt-5 leading-relaxed text-silver-light/85">
            On site across{" "}
            <Link href="/locations/pinellas-county-fl" className="text-blue-light hover:underline">
              Pinellas County
            </Link>{" "}
            and{" "}
            <Link href="/locations/hillsborough-county-fl" className="text-blue-light hover:underline">
              Hillsborough County
            </Link>{" "}
            — St. Petersburg, Clearwater, Largo, Pinellas Park, Seminole,
            Dunedin, Palm Harbor, Tampa, Brandon, Riverview and everywhere in
            between. Richard travels to your location; the first visit happens at
            your shop.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/ai-consulting-st-petersburg-fl" className="text-blue-light hover:underline">
              AI Consulting in St. Petersburg
            </Link>
            <Link href="/crm-workflow-consulting" className="text-blue-light hover:underline">
              CRM &amp; Workflow Consulting
            </Link>
            <Link href="/services/technology-audit" className="text-blue-light hover:underline">
              Technology &amp; AI Readiness Audit
            </Link>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
          Common questions
        </h2>
        <div className="mt-8 max-w-3xl space-y-7">
          {AI_AUTOMATION_TAMPA_FAQS.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-display font-semibold text-lg text-navy">
                {faq.question}
              </h3>
              <p className="mt-2.5 text-navy/70 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-navy/70">
          Call or text {NAP.phoneDisplay} ·{" "}
          <a href={`mailto:${NAP.email}`} className="text-blue hover:underline">
            {NAP.email}
          </a>
        </p>
      </ContentSection>

      <CtaBand
        headline="Start with a shop visit"
        body="Free, no obligation, at your place. You will get a straight answer on what is worth automating and what is not."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call (727) 600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
