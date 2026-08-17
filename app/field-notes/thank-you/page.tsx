import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, ContentSection } from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "You're In — Field Notes",
  description: "You're subscribed to Field Notes from The Modern Trades Mentor.",
  alternates: { canonical: "/field-notes/thank-you" },
  robots: { index: false, follow: true },
};

export default function FieldNotesThankYouPage() {
  return (
    <>
      <PageHero
        eyebrow="You're In"
        title="Welcome to Field Notes"
        description="First issue lands in your inbox soon. Until then, here's where to look if you want something to read right now."
      />

      <ContentSection>
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl">
          <Link
            href="/insights/inside-the-system"
            className="group bp-frame bp-panel-light p-7 hover:border-cyan/60 transition-colors block"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-cyan mb-3">
              Read Now
            </p>
            <h2 className="font-display text-lg font-semibold text-navy group-hover:text-cyan transition-colors">
              Inside the System
            </h2>
            <p className="mt-3 text-sm text-navy/70 leading-relaxed">
              Real TMT systems, explained — how business, CRM, and AI decisions actually get made.
            </p>
          </Link>

          <Link
            href="/book-a-strategy-call#schedule"
            className="group bp-frame bp-panel-light p-7 hover:border-cyan/60 transition-colors block"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-cyan mb-3">
              When You&apos;re Ready
            </p>
            <h2 className="font-display text-lg font-semibold text-navy group-hover:text-cyan transition-colors">
              Book a Strategy Call
            </h2>
            <p className="mt-3 text-sm text-navy/70 leading-relaxed">
              Free, no obligation. A straight read on what&apos;s actually holding your business
              back.
            </p>
          </Link>
        </div>
      </ContentSection>
    </>
  );
}
