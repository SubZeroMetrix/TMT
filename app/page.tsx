import type { Metadata } from "next";
import Image from "next/image";
import { PrimaryCTA, SecondaryCTA } from "@/components/CTAButton";
import SignatureName from "@/components/SignatureName";
import Link from "next/link";
import {
  hero,
  broadServices,
  trustBar,
  trades,
  whoThisIsFor,
  painPoints,
  audit,
  principles,
  founder,
  differentiators,
  philosophy,
  aiPositioning,
  howRichardWorks,
  objections,
  servicePaths,
  pricingSummary,
  finalCta,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Growth & Operating Systems for Contractors",
  description:
    "The Modern Trades Mentor helps St. Petersburg and Tampa contractors build the growth and operating systems they need to scale — business first, tools second.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* HERO — full-bleed AI contractor blueprint */}
      <section className="relative overflow-hidden bg-navy-deep min-h-[640px] lg:min-h-[720px] flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero-blueprint.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-70"
            priority
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(7, 20, 38, 0.97) 0%, rgba(7, 20, 38, 0.90) 42%, rgba(11, 31, 58, 0.72) 70%, rgba(11, 31, 58, 0.52) 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-40"
            style={{ background: "linear-gradient(to top, rgba(7, 20, 38, 0.92), transparent)" }}
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-3xl">
            <p className="bp-label mb-5 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-blue-light" />
              {hero.eyebrow}
            </p>
            <h1
              className="font-display font-bold uppercase text-white tracking-tight leading-[1.02]"
              style={{ fontSize: "clamp(2rem, 4.6vw + 0.8rem, 3.75rem)" }}
            >
              {hero.headlineLine1}
              <br />
              <span className="text-blue-light">{hero.headlineLine2}</span>
            </h1>
            <p
              className="mt-5 font-display text-xl sm:text-2xl uppercase tracking-tight text-blue-light"
            >
              {hero.promise}
            </p>
            <p className="mt-5 text-lg leading-relaxed max-w-xl" style={{ color: "#E2E8F0" }}>
              {hero.description}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <PrimaryCTA href={hero.primaryCta.href}>{hero.primaryCta.label}</PrimaryCTA>
              <SecondaryCTA href={hero.secondaryCta.href}>{hero.secondaryCta.label}</SecondaryCTA>
            </div>

            <p className="mt-5 flex items-center gap-2 text-sm" style={{ color: "#CBD5E1" }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-blue-light shrink-0">
                <path
                  d="M4 3h3l1.5 4L6.5 8.5a9 9 0 006 6L14 12.5l4 1.5v3a2 2 0 01-2 2C8.5 19 1 11.5 1 5a2 2 0 012-2z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <a href={hero.phone.href} className="text-blue-light hover:text-white transition-colors underline-offset-2 hover:underline">
                {hero.phone.label}
              </a>
            </p>

            <p
              className="mt-8 text-sm max-w-lg border-l-[3px] border-blue-soft pl-4 leading-relaxed"
              style={{ color: "#CBD5E1" }}
            >
              {hero.credibilityLine}
            </p>

            <div
              className="mt-8 inline-block max-w-md rounded-md px-5 py-3.5"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(148,163,184,0.35)",
                borderLeft: "3px solid #2563EB",
              }}
            >
              <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-white">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-blue-light shrink-0">
                  <path
                    d="M10 2l6 2v5c0 4-2.5 6.5-6 8-3.5-1.5-6-4-6-8V4l6-2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                {hero.vendorNeutralBadge.title}
              </p>
              <p className="mt-1.5 text-xs leading-snug" style={{ color: "#CBD5E1" }}>
                {hero.vendorNeutralBadge.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BROAD SERVICES — the front door for non-contractor search terms */}
      <section className="bg-silver-pale border-b border-navy/10">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
            {broadServices.heading}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {broadServices.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bp-frame bp-panel-light block p-6 transition-colors hover:bg-white"
              >
                <h3 className="font-display font-semibold text-lg text-navy">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy/70">
                  {item.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE PATHS — the three ways to work with TMT, plus visible pricing */}
      <section className="bg-white border-b border-border-light">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight mb-10">
            {servicePaths.heading}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePaths.items.map((item, i) => (
              <div key={item.title} className="bp-frame bp-panel-light p-6 flex flex-col">
                <span className="font-mono text-[10px] text-blue">0{i + 1}</span>
                <h3 className="mt-2 font-display font-semibold text-navy text-lg">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy/70">{item.body}</p>
                <p className="mt-3 text-xs text-navy/50 leading-relaxed">
                  <span className="font-semibold">Best for:</span> {item.bestFor}
                </p>
                <Link
                  href={item.href}
                  className="mt-4 text-sm font-semibold text-blue hover:underline"
                >
                  {item.linkLabel} →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 bp-frame bp-panel-light p-6 sm:p-7">
            <h3 className="font-display font-semibold text-navy text-lg">
              {servicePaths.notSure.heading}
            </h3>
            <p className="mt-2 text-sm text-navy/70 leading-relaxed max-w-xl">
              {servicePaths.notSure.body}
            </p>
            <div className="mt-5">
              <PrimaryCTA href={servicePaths.notSure.cta.href}>
                {servicePaths.notSure.cta.label}
              </PrimaryCTA>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {pricingSummary.map((p) => (
              <div key={p.title} className="border-t-2 border-blue pt-4">
                <h4 className="font-display font-semibold text-navy text-sm">{p.title}</h4>
                <p className="mt-1.5 font-mono text-[13px] text-blue">{p.price}</p>
                <p className="mt-1.5 text-xs text-navy/60 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR — trade band */}
      <section className="bg-navy-secondary border-b border-white/10">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-7">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-blue-light mb-3">
            {whoThisIsFor.heading}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {trades.map((t) => (
              <span
                key={t}
                className="text-[11px] font-medium uppercase tracking-wider text-[#E2E8F0] border border-white/15 bg-white/[0.07] px-3 py-1.5 rounded-md hover:bg-blue/20 hover:border-blue-light transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm max-w-2xl" style={{ color: "#CBD5E1" }}>
            {whoThisIsFor.support}
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border-light bg-white">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {trustBar.map((s) => (
              <div key={s.label} className="border-l border-steel/40 pl-4">
                <p className="font-display text-3xl sm:text-4xl font-bold text-navy">{s.value}</p>
                <p className="mt-1 text-sm text-slate leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-slate max-w-2xl">
            Figures reflect <SignatureName className="text-sm text-blue mx-0.5" /> Fritzke&rsquo;s
            professional operations experience, including current and prior roles. Experience
            references are provided for professional background only and do not imply endorsement by
            any current or former employer or government entity.
          </p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-surface-light">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-blue mb-3">
            Diagnosis
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight max-w-2xl mb-12">
            We Help Contractors Fix What Is Holding the Business Back
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-light">
            {painPoints.map((p, i) => (
              <div
                key={p.title}
                className="border-b border-r border-border-light bg-white p-7 hover:bg-navy hover:text-white group transition-colors"
              >
                <span className="font-mono text-[10px] text-blue group-hover:text-blue-light">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display font-semibold text-navy group-hover:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate group-hover:text-[#CBD5E1] leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — the process, so the Blueprint below has context */}
      <section className="bg-white border-y border-border-light">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-10">
            {howRichardWorks.heading}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {howRichardWorks.steps.map((s) => (
              <div key={s.title} className="border-t-2 border-blue pt-4">
                <h3 className="font-display font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-navy/60 max-w-2xl leading-relaxed border-l-[3px] border-blue-soft pl-4">
            {howRichardWorks.shopVisitNote}
          </p>
        </div>
      </section>

      {/* FLAGSHIP AUDIT */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-blueprint bg-grid opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="bp-label mb-3">{audit.eyebrow}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {audit.title}
            </h2>
            <p className="mt-5 leading-relaxed max-w-xl" style={{ color: "#E2E8F0" }}>
              {audit.description}
            </p>
            <div className="mt-8">
              <SecondaryCTA href={audit.cta.href}>{audit.cta.label}</SecondaryCTA>
            </div>
          </div>
          <div className="bp-frame bp-panel p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-2 w-2 rounded-sm bg-accent-warning" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-steel-light">
                What the Blueprint covers
              </span>
            </div>
            <ul className="space-y-3">
              {audit.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#E2E8F0" }}>
                  <span className="mt-1 h-1.5 w-1.5 bg-blue-light shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-surface-light">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight max-w-2xl mb-12">
            Contractor-First. Technology-Smart. People-Aware.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <div key={p.title} className="bp-frame bp-panel-light p-5">
                <span className="font-mono text-[10px] text-blue">0{i + 1}</span>
                <h3 className="mt-2 font-display font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-navy-secondary border-y border-white/10">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16">
          <p className="font-display text-2xl sm:text-3xl font-semibold text-white text-center max-w-3xl mx-auto leading-snug">
            &ldquo;{philosophy}&rdquo;
          </p>
        </div>
      </section>

      {/* WHY RICHARD */}
      <section className="relative bg-navy-deep overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/richard-industrial-ops.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(7,20,38,0.75) 0%, rgba(7,20,38,0.92) 50%, rgba(7,20,38,0.97) 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr,1.35fr] items-start">
            <div className="mx-auto lg:mx-0 w-full max-w-sm">
              <div className="relative aspect-[4/5] border border-steel/40 overflow-hidden rounded-md bg-navy-deep">
                <Image
                  src="/richard-portrait.png"
                  alt="Richard Fritzke, founder of The Modern Trades Mentor"
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-5 text-center">
                <SignatureName flourish>Richard Fritzke</SignatureName>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#94A3B8" }}>
                  Founder · The Modern Trades Mentor LLC
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {founder.heading}
              </h2>

              <div className="mt-8 grid sm:grid-cols-3 gap-6">
                {founder.columns.map((col) => (
                  <div key={col.title} className="border-t border-steel/50 pt-4">
                    <p className="font-mono text-[10px] font-semibold tracking-[0.12em] text-blue-light uppercase mb-2">
                      {col.title}
                    </p>
                    <ul className="space-y-1">
                      {col.items.map((item) => (
                        <li key={item} className="text-sm" style={{ color: "#E2E8F0" }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="mt-8 leading-relaxed max-w-2xl" style={{ color: "#E2E8F0" }}>
                <SignatureName className="text-2xl mr-1 align-baseline">Richard</SignatureName>
                {founder.narrative.replace(/^Richard/, "")}
              </p>

              <p className="mt-6 text-xs max-w-xl" style={{ color: "#94A3B8" }}>
                {founder.disclaimer}
              </p>

              <div className="mt-8">
                <SecondaryCTA href={founder.cta.href}>{founder.cta.label}</SecondaryCTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="bg-surface-light">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight max-w-2xl mb-10">
            Why The Modern Trades Mentor Is Different
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl">
            {differentiators.map((d) => (
              <li key={d} className="flex items-start gap-3 text-navy/80">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-blue"
                >
                  <path
                    d="M4 10.5l3.5 3.5L16 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AI POSITIONING */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-blueprint bg-grid opacity-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl mb-12">
            {aiPositioning.heading}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bp-frame bp-panel p-7">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-blue-light mb-4">
                {aiPositioning.usesHeading}
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {aiPositioning.uses.map((u) => (
                  <li key={u} className="text-sm flex items-start gap-2" style={{ color: "#E2E8F0" }}>
                    <span className="mt-1.5 h-1 w-1 bg-blue-light shrink-0" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bp-frame p-7 rounded-md"
              style={{
                background: "rgba(7,20,38,0.7)",
                border: "1px solid rgba(148,163,184,0.35)",
              }}
            >
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-steel-light mb-4">
                {aiPositioning.cautionsHeading}
              </h3>
              <ul className="space-y-2.5">
                {aiPositioning.cautions.map((c) => (
                  <li key={c} className="text-sm flex items-start gap-2" style={{ color: "#E2E8F0" }}>
                    <span className="mt-1.5 h-1 w-1 bg-accent-warning shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIONS — concise, right before the ask */}
      <section className="bg-surface-light border-t border-border-light">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight max-w-2xl mb-10">
            What Owners Ask First
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8 max-w-4xl">
            {objections.map((o) => (
              <div key={o.q}>
                <h3 className="font-display font-semibold text-navy">&ldquo;{o.q}&rdquo;</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-navy-deep overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/richard-industrial-ops.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-navy-deep/80" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="mb-4">
            <SignatureName className="text-4xl sm:text-5xl">Richard Fritzke</SignatureName>
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto">
            {finalCta.headline}
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "#CBD5E1" }}>
            {finalCta.body}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryCTA href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</PrimaryCTA>
            <a
              href={finalCta.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-slate-muted px-7 py-3.5 text-sm font-semibold tracking-wide text-white hover:bg-white/10 hover:border-blue-light transition-colors"
            >
              {finalCta.secondaryCta.label}
            </a>
          </div>
          <p className="mt-6 text-xs" style={{ color: "#94A3B8" }}>
            {finalCta.footnote}
          </p>
        </div>
      </section>
    </>
  );
}
