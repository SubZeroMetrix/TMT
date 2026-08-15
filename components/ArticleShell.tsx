import Link from "next/link";

import { PageHero, ContentSection, CtaBand } from "@/components/PageChrome";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, NAP } from "@/lib/seo/schema";
import { getArticle } from "@/lib/articles";

/**
 * Shared chrome for every /insights article: schema, byline, dates, the
 * related-service links and the booking CTA.
 *
 * Articles supply only their body. Anything that must appear on every post —
 * a real named author, a visible updated date, a next step — lives here so it
 * cannot be forgotten on a new one.
 */
export default function ArticleShell({
  slug,
  related,
  children,
}: {
  slug: string;
  /** 2-4 related service or location pages. */
  related: { label: string; href: string }[];
  children: React.ReactNode;
}) {
  const article = getArticle(slug);
  if (!article) throw new Error(`Unknown article slug: ${slug}`);

  const path = `/insights/${slug}`;
  const fmt = (iso: string) =>
    new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: article.title,
          description: article.description,
          slug: path,
          published: article.published,
          updated: article.updated,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: article.title, path },
        ])}
      />

      <PageHero
        eyebrow={article.eyebrow}
        title={article.title}
        description={article.subtitle}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="mb-8 border-b border-navy/10 pb-6 text-sm text-navy/60">
            By{" "}
            <Link href="/about" className="font-semibold text-blue hover:underline">
              Richard B. Fritzke
            </Link>{" "}
            · Published {fmt(article.published)}
            {article.updated !== article.published && (
              <> · Updated {fmt(article.updated)}</>
            )}
          </p>

          <div className="article-body space-y-5 text-navy/75 leading-relaxed">
            {children}
          </div>

          <div className="mt-12 border-t border-navy/10 pt-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-blue mb-3">
              Related
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {related.map((r) => (
                <Link key={r.href} href={r.href} className="text-blue hover:underline">
                  {r.label}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-navy/70">
              Questions about your own setup? Call or text {NAP.phoneDisplay} ·{" "}
              <a href={`mailto:${NAP.email}`} className="text-blue hover:underline">
                {NAP.email}
              </a>
            </p>
          </div>
        </div>
      </ContentSection>

      <CtaBand
        headline="Want this looked at in your shop?"
        body="A shop visit is free and carries no obligation. Richard travels to you across Pinellas and Hillsborough counties."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call (727) 600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
