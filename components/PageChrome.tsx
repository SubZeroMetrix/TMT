import Link from "next/link";
import { PrimaryCTA, SecondaryCTA } from "@/components/CTAButton";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-navy-deep">
      <div
        className="absolute inset-0 bg-grid-blueprint bg-grid opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 400px at 15% 20%, rgba(37,99,235,0.10), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {eyebrow && <p className="bp-label mb-4">{eyebrow}</p>}
        <h1
          className="font-display font-bold text-white tracking-tight max-w-3xl leading-[1.08]"
          style={{ fontSize: "clamp(1.85rem, 3.5vw + 0.6rem, 3.25rem)" }}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-silver-light/85 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {primaryCta && <PrimaryCTA href={primaryCta.href}>{primaryCta.label}</PrimaryCTA>}
            {secondaryCta && (
              <SecondaryCTA href={secondaryCta.href}>{secondaryCta.label}</SecondaryCTA>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export function ContentSection({
  children,
  dark = false,
  className = "",
  id,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative ${dark ? "bg-navy text-silver-light" : "bg-silver-pale text-navy"} ${className}`}
    >
      {dark && (
        <div
          className="absolute inset-0 bg-grid-blueprint bg-grid opacity-30 pointer-events-none"
          aria-hidden="true"
        />
      )}
      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {children}
      </div>
    </section>
  );
}

export function InfoCard({
  title,
  children,
  dark = false,
}: {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={`bp-frame p-6 ${dark ? "bp-panel" : "bp-panel-light"}`}>
      <h3 className={`font-display font-semibold text-lg mb-3 ${dark ? "text-white" : "text-navy"}`}>
        {title}
      </h3>
      <div className={`text-sm leading-relaxed ${dark ? "text-silver-light/85" : "text-navy/70"}`}>
        {children}
      </div>
    </div>
  );
}

export function BulletList({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-3 text-sm ${dark ? "text-silver-light/90" : "text-navy/75"}`}
        >
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-blue" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function NewsletterCta({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`bp-frame bp-panel-light p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 ${className}`}>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-wider text-cyan mb-2">
          Field Notes
        </p>
        <h3 className="font-display font-semibold text-navy text-lg">
          Not ready to talk yet? Keep reading.
        </h3>
        <p className="mt-1.5 text-sm text-navy/70 max-w-md">
          One practical systems lesson at a time, straight to your inbox. No pitch, no hype.
        </p>
      </div>
      <Link
        href="/field-notes"
        className="shrink-0 inline-flex items-center justify-center rounded-md bg-blue px-6 py-3 text-sm font-semibold tracking-wide text-white hover:bg-blue-hover transition-colors"
      >
        Join Field Notes
      </Link>
    </div>
  );
}

export function CtaBand({
  headline,
  body,
  primary,
  secondary,
}: {
  headline: string;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative bg-navy-deep border-t border-white/10 overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-blueprint bg-grid opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto">
          {headline}
        </h2>
        {body && <p className="mt-4 max-w-xl mx-auto" style={{ color: "#CBD5E1" }}>{body}</p>}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryCTA href={primary.href}>{primary.label}</PrimaryCTA>
          {secondary &&
            (secondary.href.startsWith("tel:") ? (
              <a
                href={secondary.href}
                className="inline-flex items-center justify-center rounded-md border border-slate-muted px-7 py-3.5 text-sm font-semibold tracking-wide text-white hover:bg-white/10 hover:border-blue-light transition-colors"
              >
                {secondary.label}
              </a>
            ) : (
              <SecondaryCTA href={secondary.href}>{secondary.label}</SecondaryCTA>
            ))}
        </div>
        <p className="mt-6">
          <Link href="/" className="text-xs uppercase tracking-wider hover:text-blue-light transition-colors" style={{ color: "#94A3B8" }}>
            ← Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
