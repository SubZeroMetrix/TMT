import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, ContentSection, CtaBand, NewsletterCta } from "@/components/PageChrome";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Inside the System | Real TMT Systems, Explained",
  description:
    "Real Modern Trades Mentor systems, explained in plain language — how TMT applies growth, CRM, workflow, and AI principles inside its own business before recommending them to clients.",
  alternates: { canonical: "/insights/inside-the-system" },
};

const caseStudies = [
  {
    href: "/insights/inside-the-system/ai-operating-system",
    title: "How TMT Built AI Into Its Own Operating System",
    summary:
      "One business event should not always produce one generic automation — how TMT routes a signed engagement into the right delivery path.",
    status: "Active internal implementation",
  },
  {
    href: "/insights/inside-the-system/when-ai-isnt-the-problem",
    title: "When \"We Need AI\" Isn't Actually the Problem",
    summary:
      "What a customer asks for and what the business actually needs are not always the same thing — how TMT separates the two before recommending anything.",
    status: "Active internal implementation",
  },
  {
    href: "/insights/inside-the-system/why-leads-fall-through-the-cracks",
    title: "Why Leads Fall Through the Cracks — Even With a CRM",
    summary:
      "A CRM isn't useful because contacts live inside it — it's useful when every real opportunity has an owner, a next action, and a due date.",
    status: "Active internal implementation",
  },
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
          <p className="mt-4 text-sm text-navy/55 leading-relaxed border-l-[3px] border-blue-soft pl-4">
            How TMT publishes evidence: real internal systems, screenshots, and documented
            implementation. Internal case studies are labeled separately from client case
            studies, and measured outcomes are published only once they have actually been
            measured.
          </p>
        </div>

        <div className="mt-12">
          <p className="bp-label mb-6">TMT Internal Case Studies</p>
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link
                key={cs.href}
                href={cs.href}
                className="group bp-frame bp-panel-light p-7 hover:border-cyan/60 transition-colors block"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-cyan mb-3">
                  TMT Internal Case Study
                </p>
                <h2 className="font-display text-lg font-semibold text-navy group-hover:text-cyan transition-colors">
                  {cs.title}
                </h2>
                <p className="mt-3 text-sm text-navy/70 leading-relaxed">{cs.summary}</p>
                <p className="mt-4 text-[11px] uppercase tracking-wide text-navy/45">
                  Status: {cs.status}
                </p>
                <p className="mt-5 font-mono text-xs uppercase tracking-wider text-cyan-dim group-hover:text-cyan">
                  See how it works →
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <NewsletterCta />
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
