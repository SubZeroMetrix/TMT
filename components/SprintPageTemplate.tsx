import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";
import SignatureName from "@/components/SignatureName";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, NAP } from "@/lib/seo/schema";
import { SPRINT_FAQS, type Faq } from "@/lib/seo/faqs";
import { FOUNDING_SPRINT_PRICE, type Sprint } from "@/lib/content/sprints";

/**
 * Shared page body for every Outcome Sprint. One template, five content
 * objects (lib/content/sprints.ts) — same reasoning as the rest of this
 * codebase reusing PageChrome/schema/FAQ helpers rather than five
 * independently-drifting page files. Each page.tsx still owns its own
 * `metadata` export (a Next.js route-level requirement) and renders this.
 */
export default function SprintPageTemplate({ sprint }: { sprint: Sprint }) {
  const faqs: Faq[] = SPRINT_FAQS[sprint.slug] ?? [];
  const path = `/services/${sprint.slug}`;

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: sprint.name,
          description: sprint.heroDescription,
          slug: path,
        })}
      />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: sprint.name, path },
        ])}
      />

      <PageHero
        eyebrow={`Outcome Sprint · Founding range ${FOUNDING_SPRINT_PRICE} · Scoped by the audit`}
        title={sprint.name}
        description={sprint.heroDescription}
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "See the Operations Audit", href: "/services/technology-audit" }}
      />

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
              The Problem
            </p>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-6">
              What This Sprint Fixes
            </h2>
            <p className="text-navy/70 leading-relaxed mb-6">{sprint.problem}</p>
            <BulletList items={sprint.whatItFixes} />
          </div>
          <InfoCard title="Who This Is For">
            <p className="mb-4">{sprint.whoFor}</p>
            <p className="mb-4">Common signals this is the right sprint:</p>
            <BulletList items={sprint.signals} />
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">Deliverables</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-8 max-w-2xl">
          What You Walk Away With
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {sprint.deliverables.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-cyan" />
              <p className="text-sm text-silver-light/90 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="tech-divider mt-12 mb-8" />
        <div className="bp-frame bp-panel p-6 max-w-2xl">
          <p className="font-mono text-[10px] font-semibold tracking-[0.14em] text-cyan uppercase mb-2">
            Vendor-Neutral. Always.
          </p>
          <p className="text-sm text-silver-light/85 leading-relaxed">
            <SignatureName className="text-lg mr-1">Richard</SignatureName> does not sell
            software licenses or earn commissions on platform referrals. Delivery happens
            directly, or with vetted specialists when a project needs expertise or capacity
            beyond a single operator — never a hand-off to a call center or a junior team.
          </p>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="bp-frame bp-panel-light max-w-3xl p-7 sm:p-9">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
            The Offer
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-navy">
            {sprint.name} — {FOUNDING_SPRINT_PRICE} founding range
          </h2>
          <p className="mt-5 leading-relaxed text-navy/75">{sprint.processNote}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="/book-a-strategy-call#schedule"
              className="inline-flex items-center justify-center rounded-md bg-blue px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
            >
              Book a Shop Visit
            </a>
            <a
              href={`tel:${NAP.phone}`}
              className="inline-flex items-center justify-center rounded-md border border-navy/20 bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
            >
              Call or text {NAP.phoneDisplay}
            </a>
          </div>
        </div>
      </ContentSection>

      {faqs.length > 0 && (
        <ContentSection>
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
              Common questions
            </p>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight">
              Price, scope, and what happens next
            </h2>
            <div className="mt-8 space-y-7">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {faq.question}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-navy/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </ContentSection>
      )}

      <CtaBand
        headline="Find Out If This Is the Right Sprint"
        body="The Operational AI Readiness Audit determines which sprint fits — book a shop visit to start there."
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
