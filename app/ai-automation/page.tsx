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
import { serviceSchema, faqSchema, breadcrumbSchema, NAP } from "@/lib/seo/schema";
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

      <ContentSection>
        <div className="max-w-3xl">
          <p className="bp-label mb-3">TMT Internal Case Study</p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
            How TMT Built AI Into Its Own Operating System
          </h2>
          <p className="mt-5 leading-relaxed text-navy/80">
            Before recommending AI or automation to a contractor, The Modern Trades Mentor applies
            the same principles to its own business first — including the real GoHighLevel
            workflow that routes a signed engagement into the right delivery path instead of
            treating every sale the same way.
          </p>
        </div>
        <div className="mt-8 max-w-4xl">
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
        </div>
        <div className="mt-6">
          <Link
            href="/insights/inside-the-system/ai-operating-system"
            className="font-mono text-sm uppercase tracking-wider text-blue hover:underline"
          >
            Read the full case study →
          </Link>
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
