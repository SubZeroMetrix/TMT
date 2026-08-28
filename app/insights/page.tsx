import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, ContentSection, InfoCard, CtaBand, NewsletterCta } from "@/components/PageChrome";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical articles on contractor technology, AI adoption, software selection, and operational readiness — written for owner-led trades businesses.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical Guidance for Contractor Technology Decisions"
        description="Vendor-neutral articles on AI, software, workflows, and modernization — grounded in real operations experience, not sales decks."
      />

      <ContentSection>
        <p className="bp-label mb-8">Latest Articles</p>
        <div className="grid gap-6 lg:grid-cols-2">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group bp-frame bp-panel-light p-7 hover:border-cyan/60 transition-colors block"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-cyan mb-3">
                {article.eyebrow} · {article.readTime}
              </p>
              <h2 className="font-display text-xl font-semibold text-navy group-hover:text-cyan transition-colors">
                {article.title}
              </h2>
              <p className="mt-3 text-sm text-navy/70 leading-relaxed">{article.subtitle}</p>
              <p className="mt-5 font-mono text-xs uppercase tracking-wider text-cyan-dim group-hover:text-cyan">
                Read article →
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 max-w-2xl">
          <NewsletterCta />
        </div>

        <div className="mt-8 max-w-2xl">
          <InfoCard title="What you'll find here">
            <p>
              Articles focused on what actually matters for small contractor and field-service
              businesses: workflow alignment, software fit, staff adoption, security, and measured
              AI adoption — without invented statistics or vendor pitches.
            </p>
          </InfoCard>
        </div>
      </ContentSection>

      <CtaBand
        headline="Want guidance tailored to your business?"
        body="Start with a Growth & Systems Blueprint or Book a Strategy Call to discuss your current systems and priorities."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Explore the Audit", href: "/services/technology-audit" }}
      />
    </>
  );
}
