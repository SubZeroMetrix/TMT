import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, ContentSection, BulletList } from "@/components/PageChrome";
import FormEmbed from "@/components/FormEmbed";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, NAP } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Field Notes — The Modern Trades Mentor Newsletter",
  description:
    "Practical growth, sales, operations, CRM, automation, and AI lessons for contractors and service-business owners. No hype, no generic business advice.",
  alternates: { canonical: "/field-notes" },
};

/**
 * Newsletter signup form. GHL's public API has no form-creation endpoint —
 * confirmed 2026-08-17, same limitation as Workflows/Funnels — so this form
 * has to be built once in the GHL Forms Builder UI and its embed URL dropped
 * in here, same pattern as BOOKING_URL on /book-a-strategy-call. Honest
 * "not yet configured" fallback below until that's done, never a fake form.
 */
const NEWSLETTER_FORM_URL = process.env.NEXT_PUBLIC_NEWSLETTER_FORM_URL || "";

const whatYouGet = [
  "One practical breakdown of a real business system — sales, ops, CRM, or automation",
  "Where AI actually helps a service business, and where it's a liability",
  "A short, usable takeaway you can apply the same week — no fluff, no filler",
];

const notThis = [
  "Not a sales newsletter — most issues have no pitch in them at all",
  "Not generic AI hype — every issue is grounded in a real system or problem",
  "Not daily. Not constant promotional email. Unsubscribe any time, no hard feelings",
];

export default function FieldNotesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Field Notes", path: "/field-notes" },
        ])}
      />

      <PageHero
        eyebrow="The Modern Trades Mentor — Field Notes"
        title="Practical Systems Lessons for Contractors and Service Businesses"
        description="Growth, sales, operations, CRM, automation, and AI — written for owner-led service businesses, not software marketers. No hype, no generic business advice."
      />

      <ContentSection>
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="bp-label mb-3">What you get</p>
            <BulletList items={whatYouGet} />
            <p className="bp-label mt-8 mb-3">What this isn&apos;t</p>
            <BulletList items={notThis} />
            <p className="mt-8 text-sm text-navy/60 leading-relaxed max-w-lg">
              Written by Richard Fritzke, founder of The Modern Trades Mentor — a trades and
              operations leader with more than 26 years of HVAC, facilities, and mechanical-
              systems experience. Not ready to talk yet? This is the low-pressure way to keep
              learning until you are.
            </p>
          </div>

          <div>
            <div className="bp-frame bp-panel-light p-6 sm:p-8">
              <h2 className="font-display font-semibold text-navy text-lg mb-4">
                Join Field Notes
              </h2>
              {NEWSLETTER_FORM_URL ? (
                <FormEmbed url={NEWSLETTER_FORM_URL} title="Field Notes newsletter signup" />
              ) : (
                <div className="text-center py-10">
                  <p className="text-sm text-navy/70 leading-relaxed">
                    Signup form not yet configured. In the meantime, email{" "}
                    <a href={`mailto:${NAP.email}`} className="font-semibold text-blue hover:underline">
                      {NAP.email}
                    </a>{" "}
                    with &quot;Field Notes&quot; in the subject line and you&apos;ll be added by
                    hand.
                  </p>
                </div>
              )}
              <p className="mt-4 text-xs text-navy/50 leading-relaxed">
                By signing up you agree to receive the Field Notes newsletter by email. Unsubscribe
                any time — every issue has a one-click link at the bottom.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="max-w-2xl">
          <h2 className="font-display font-bold text-2xl text-white tracking-tight">
            Prefer to talk it through instead?
          </h2>
          <p className="mt-4 leading-relaxed text-silver-light/85">
            If you already know what you&apos;re dealing with, skip the reading list — start with a
            free Strategy Call.
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
    </>
  );
}
