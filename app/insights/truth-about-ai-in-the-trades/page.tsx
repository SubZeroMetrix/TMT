import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";
import SignatureName from "@/components/SignatureName";

export const metadata: Metadata = {
  title: "The Truth About AI in the Trades",
  description:
    "Contractors do not need more AI hype. They need a plan that works in the real business — with sourced research on adoption, readiness gaps, and responsible implementation.",
  alternates: { canonical: "/insights/truth-about-ai-in-the-trades" },
};

const readinessChecklist = [
  "What business problem needs to be solved — not what tool is trending?",
  "What does the current workflow actually look like, step by step?",
  "Where does information enter, move, stall, or get lost?",
  "Which existing systems should be retained, integrated, or replaced?",
  "Is the underlying data usable, consistent, and owned by the business?",
  "Will staff understand and adopt the change — and who owns training?",
  "What access will the AI or automation receive to customer and operational data?",
  "How will performance, risk, and return be measured after implementation?",
  "Who remains accountable when the system makes a mistake or produces a bad output?",
];

const stuckPoints = [
  "Disconnected systems that duplicate information across CRM, dispatch, accounting, and field tools",
  "Manual handoffs between calls, scheduling, dispatch, estimating, invoicing, and follow-up",
  "Tools purchased without a defined business problem or success metric",
  "Weak staff training and inconsistent adoption across office and field teams",
  "Unclear ownership of customer and operational data",
  "Automations that fail silently without anyone noticing",
  "AI features added to already-broken workflows",
  "Security and privacy risks created by excessive access or unreviewed integrations",
  "No agreed method for measuring whether the investment actually worked",
];

const responsibleApplications = [
  "After-hours call handling and lead qualification support",
  "Call summaries and follow-up drafting",
  "Estimating assistance with human review of final numbers",
  "Scheduling support and capacity planning",
  "Internal knowledge search across SOPs, manuals, and job history",
  "Standard-operating-procedure development and updates",
  "Technician documentation and field notes",
  "Customer communication drafts with staff approval",
  "Invoice and collections workflow assistance",
  "Management reporting and trend identification",
  "Staff education and role-specific assistance",
];

const auditItems = [
  "Current operations and workflows",
  "Software inventory and utilization",
  "Scheduling, dispatch, and follow-up processes",
  "System integration and data readiness",
  "Staff adoption and AI literacy",
  "Security, permissions, and data-handling risks",
  "Practical AI and automation opportunities",
  "Implementation dependencies",
  "Measurement and governance requirements",
];

const auditOutputs = [
  "What to fix first — and what to leave alone",
  "Which existing tools can be used better before buying new ones",
  "Where integration makes sense and where it adds complexity",
  "Where AI creates real value versus where automation would add risk",
  "What staff training is needed for sustainable adoption",
  "A realistic implementation sequence tied to business priorities",
];

export default function TruthAboutAIInTheTradesPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights · AI & Operations"
        title="The Truth About AI in the Trades"
        description="Contractors do not need more AI hype. They need a plan that works in the real business."
      />

      <ContentSection>
        <article className="max-w-3xl">
          <p className="text-lg text-navy/80 leading-relaxed">
            Artificial intelligence is moving quickly into estimating, scheduling, communications,
            reporting, customer service, and field-service software. But buying an AI-enabled tool
            is not the same as improving a company.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy tracking-tight">
            The gap between AI adoption and business results
          </h2>
          <p className="mt-4 text-navy/75 leading-relaxed">
            Preliminary 2025 research from MIT Project NANDA reported that roughly 95% of the
            enterprise generative-AI initiatives it examined had not produced measurable
            profit-and-loss impact. Only a small minority of integrated pilots showed substantial
            business results. The report&apos;s central lesson was not that AI is worthless — it
            was that organizations struggle when tools do not fit their workflows, learn from their
            operating context, or move beyond experimentation. (Fortune, MIT Project NANDA)
          </p>
          <p className="mt-4 text-navy/75 leading-relaxed">
            That distinction matters for contractors. The question is not whether AI exists. It is
            whether it fits your operation, your people, and the problems you actually need to
            solve.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy tracking-tight">
            AI adoption is growing. Operational readiness is not keeping pace.
          </h2>
          <p className="mt-4 text-navy/75 leading-relaxed">
            The construction sector remains early in its AI transition. In a global RICS survey,
            approximately 45% of respondents reported no AI implementation, while another 34% were
            still in pilot phases. Just under 12% reported regular use in specific processes, and
            less than 1% described AI as fully embedded across the organization. Skills,
            integration, data quality, and implementation cost were among the major barriers. (RICS)
          </p>
          <p className="mt-4 text-navy/75 leading-relaxed">
            The small-business market shows a similar divide. A 2026 SAS/IDC survey found that 70%
            of small and midsize businesses remained in early maturity stages, while only 9% had
            fully embedded AI into strategy, operations, and decision-making. Forty-five percent
            reported that their data remained scattered across systems, and 46% said their AI tools
            operated in isolation rather than as connected workflows. (SAS/IDC)
          </p>
          <p className="mt-4 text-navy/75 leading-relaxed">
            The opportunity is real. The implementation gap is also real.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy tracking-tight">
            Contractors are already experimenting
          </h2>
          <p className="mt-4 text-navy/75 leading-relaxed">
            In a BuildOps survey of more than 600 commercial contractors, 78% reported using AI.
            The most frequently reported applications included estimating, jobsite search and chat,
            and compliance tracking. Training — not simply access to technology — was identified as
            a leading barrier. (ACHR News, BuildOps)
          </p>
          <p className="mt-4 text-navy/75 leading-relaxed">
            Across small businesses more broadly, reported AI use is also increasing. The U.S.
            Chamber of Commerce found that 58% of surveyed small businesses used generative AI in
            2025, up from 40% in 2024 and 23% in 2023. (U.S. Chamber of Commerce)
          </p>
          <p className="mt-4 text-navy/75 leading-relaxed">
            But adoption statistics do not answer the question that matters: is the technology
            producing a measurable improvement in the business?
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy tracking-tight">
            Where contractors get stuck
          </h2>
          <p className="mt-4 text-navy/75 leading-relaxed">
            The most common breakdown is not a lack of software. It is a lack of alignment between
            the software, the operation, and the people expected to use it.
          </p>
          <div className="mt-6">
            <BulletList items={stuckPoints} />
          </div>
          <p className="mt-6 text-navy/75 leading-relaxed">
            Adding technology to a weak process usually makes the weak process faster, more
            complicated, or harder to see.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy tracking-tight">
            What responsible AI adoption looks like
          </h2>
          <p className="mt-4 text-navy/75 leading-relaxed">
            AI can create practical value when it is connected to a specific operational need.
          </p>
          <div className="mt-6">
            <BulletList items={responsibleApplications} />
          </div>
          <div className="mt-8 bp-frame bp-panel-light p-6">
            <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-dim mb-3">
              Human judgment still required
            </p>
            <p className="text-sm text-navy/75 leading-relaxed">
              Not every process should be automated. Sensitive decisions require human judgment.
              Customer and employee data require controlled access. Recommendations need
              verification. Staff need to understand when the tool is useful, when it is unreliable,
              and when a person must remain responsible for the final decision.
            </p>
          </div>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy tracking-tight">
            The strongest companies start with readiness
          </h2>
          <p className="mt-4 text-navy/75 leading-relaxed">
            Before adding another tool, a contractor should be able to answer these questions
            honestly:
          </p>
          <div className="mt-6">
            <BulletList items={readinessChecklist} />
          </div>
          <p className="mt-6 text-navy/75 leading-relaxed">
            The goal is not to become &ldquo;AI-powered.&rdquo; The goal is to build a stronger
            contracting business and use AI where it contributes to that outcome.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy tracking-tight">
            Why this matters now
          </h2>
          <p className="mt-4 text-navy/75 leading-relaxed">
            Gartner projects that 40% of enterprise applications will include task-specific AI
            agents by the end of 2026, up from less than 5% in 2025. Gartner also warns that many
            agentic-AI projects will be cancelled because of escalating costs, unclear value, and
            inadequate risk controls. (Gartner)
          </p>
          <p className="mt-4 text-navy/75 leading-relaxed">
            Contractors will encounter more AI whether they actively pursue it or simply continue
            using existing CRM, accounting, estimating, and field-service platforms. The choice is
            not merely whether to &ldquo;use AI&rdquo; — it&apos;s whether to adopt it deliberately,
            securely, and with a defined operational purpose.
          </p>
        </article>
      </ContentSection>

      <ContentSection dark>
        <div className="max-w-3xl">
          <p className="bp-label mb-4">The Modern Trades Mentor Approach</p>
          <h2 className="font-display text-2xl font-bold text-white tracking-tight">
            Operator-led. Contractor-focused. Business before technology.
          </h2>
          <p className="mt-5 text-silver-light/85 leading-relaxed">
            The Modern Trades Mentor LLC helps small contractor and field-service businesses
            evaluate their operations, software, workforce readiness, and practical opportunities
            for AI. The initial focus is owner-led service businesses that
            need clarity before making another technology investment.
          </p>
          <p className="mt-5 text-silver-light/85 leading-relaxed">
            <SignatureName className="text-2xl mr-1 align-baseline">Richard</SignatureName>
            Fritzke brings more than 26 years of experience across HVAC/R, facilities, mechanical
            systems, service operations, technician leadership, controls, optimization, and
            commercial and mission-critical environments — including supervising more than 20
            HVAC/R technicians and managing maintenance operations across more than 40 restaurant
            and commercial facilities.
          </p>
          <p className="mt-5 text-xs text-silver/50 leading-relaxed">
            Experience references are provided for professional background only and do not imply
            endorsement by any current or former employer or government entity.
          </p>
          <p className="mt-5 text-sm text-silver-light/75 leading-relaxed">
            We do not sell software licenses. Recommendations are vendor-neutral, and we do not
            receive commissions or referral compensation that would influence guidance. Any future
            commercial relationships will be disclosed.
          </p>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-3xl">
          <p className="bp-label mb-4">Technology &amp; AI Readiness Audit</p>
          <h2 className="font-display text-2xl font-bold text-navy tracking-tight">
            Start with clarity before the next purchase
          </h2>
          <p className="mt-4 text-navy/75 leading-relaxed">
            A structured review of your systems, workflows, staff readiness, security exposure, and
            modernization priorities — designed to produce a prioritized roadmap, not another
            software pitch.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <InfoCard title="What the audit evaluates">
              <BulletList items={auditItems} />
            </InfoCard>
            <InfoCard title="What the audit produces">
              <BulletList items={auditOutputs} />
            </InfoCard>
          </div>
        </div>
      </ContentSection>

      <ContentSection dark className="border-t border-cyan/15">
        <div className="max-w-3xl">
          <p className="bp-label mb-4">Sources</p>
          <p className="text-sm text-silver-light/75 leading-relaxed">
            Statistics and claims in this article are drawn from the following published sources:
            MIT Project NANDA preliminary research (via Fortune); RICS AI in Construction Report
            2025; SAS/IDC AI Readiness Report for SMBs 2026; BuildOps contractor survey (via ACHR
            News); U.S. Chamber of Commerce small business generative AI research; Gartner press
            release on task-specific AI agents (August 2025).
          </p>
          <p className="mt-6">
            <Link
              href="/insights"
              className="font-mono text-xs text-cyan hover:text-white uppercase tracking-wider"
            >
              ← Back to Insights
            </Link>
          </p>
        </div>
      </ContentSection>

      <CtaBand
        headline="Stop buying technology without a plan. Start with clarity."
        body="Book a Technology & AI Readiness Audit or schedule a strategy call to discuss your current systems, team, and priorities."
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Explore the Audit", href: "/services/technology-audit" }}
      />
    </>
  );
}
