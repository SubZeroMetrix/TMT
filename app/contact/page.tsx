import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";
import { PrimaryCTA } from "@/components/CTAButton";
import SignatureName from "@/components/SignatureName";
import CaptureFormEmbed from "@/components/CaptureFormEmbed";
import { contact } from "@/lib/content";

/**
 * Lead-capture form for visitors not ready to call or book a full shop
 * visit. Built and owned inside GoHighLevel (Sites > Forms) — same pattern
 * as the booking calendar in app/book-a-strategy-call/page.tsx. Rendering
 * is conditional so the page never ships a broken/empty embed before the
 * form exists: set NEXT_PUBLIC_CAPTURE_FORM_URL once it's built.
 */
const CAPTURE_FORM_URL = process.env.NEXT_PUBLIC_CAPTURE_FORM_URL;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Modern Trades Mentor — phone, email, and mailing address. Serving Tampa Bay contractor and field-service businesses.",
  alternates: { canonical: "/contact" },
};

const serviceAreas = [
  "St. Petersburg",
  "Tampa",
  "Clearwater",
  "Largo",
  "Pinellas County",
  "Hillsborough County",
  "Pasco County",
  "Greater Tampa Bay area",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Reach The Modern Trades Mentor by phone, email, or mail. Based in St. Petersburg, FL — serving Tampa Bay contractors and field-service businesses with in-person and remote advisory."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
              Direct Contact
            </p>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-8">
              {contact.company}
            </h2>

            <div className="space-y-6">
              <div className="border-l-2 border-cyan pl-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-dim mb-1">
                  Phone
                </p>
                <a
                  href={contact.phone.href}
                  className="font-display text-2xl font-bold text-navy hover:text-cyan transition-colors"
                >
                  {contact.phone.label}
                </a>
              </div>

              <div className="border-l-2 border-cyan pl-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-dim mb-1">
                  Email
                </p>
                <a
                  href={contact.email.href}
                  className="font-display text-lg font-bold text-navy hover:text-cyan transition-colors break-all"
                >
                  {contact.email.label}
                </a>
              </div>

              <div className="border-l-2 border-cyan pl-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-dim mb-1">
                  Mailing Address
                </p>
                <p className="text-navy/75 leading-relaxed">{contact.address}</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <PrimaryCTA href={contact.phone.href}>Call Now</PrimaryCTA>
              <a
                href={contact.email.href}
                className="inline-flex items-center justify-center border border-cyan/50 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cyan hover:bg-cyan/10 transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>

          <InfoCard title="Service Area">
            <p className="mb-4">
              Primary service area is the Tampa Bay region — with remote advisory available for
              contractor businesses outside the local area.
            </p>
            <BulletList items={serviceAreas} />
            <p className="mt-4 text-xs text-navy/50">
              In-person meetings available throughout Pinellas, Hillsborough, and Pasco counties.
              Virtual sessions available nationwide.
            </p>
          </InfoCard>
        </div>
      </ContentSection>

      {CAPTURE_FORM_URL && (
        <ContentSection>
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
              Not Ready to Call or Book Yet?
            </p>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4">
              Get the Operational AI Readiness Checklist
            </h2>
            <p className="text-navy/70 leading-relaxed mb-10">
              A short, practical checklist — not a sales sequence. Leave your email and it lands in
              your inbox once. No autoresponder chain, no drip campaign after it.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <CaptureFormEmbed url={CAPTURE_FORM_URL} />
          </div>
        </ContentSection>
      )}

      <ContentSection dark>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <p className="bp-label mb-3">Who to Contact</p>
            <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-4">
              <SignatureName className="text-3xl mr-2">Richard Fritzke</SignatureName>
              — Founder
            </h2>
            <p className="text-silver-light/85 leading-relaxed mb-6">
              Richard personally handles strategy calls and client engagements. When you call or
              email, you are reaching the person who will do the work — not a sales team or an
              automated booking system.
            </p>
            <BulletList
              dark
              items={[
                "Strategy calls and discovery conversations",
                "Technology & AI Readiness Audits",
                "Software selection and stack design",
                "AI adoption and staff training",
                "Workflow development and implementation planning",
                "Revenue loss recovery assessments",
              ]}
            />
          </div>
          <InfoCard title="Best Way to Reach Us" dark>
            <p className="mb-4">
              <strong className="text-white">Phone</strong> is fastest for scheduling a strategy
              call. Leave a message with your name, business, and best time to return the call if
              you reach voicemail.
            </p>
            <p className="mb-4">
              <strong className="text-white">Email</strong> works well for initial inquiries, sharing
              context about your business, or asking questions before committing to a call.
            </p>
            <p>
              Response time is typically within one business day. No autoresponder chains. No
              marketing drip sequences.
            </p>
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4">
          What to Expect When You Reach Out
        </h2>
        <p className="text-navy/70 max-w-2xl mb-8 leading-relaxed">
          Whether you call, email, or eventually meet in person, the approach is the same: a
          practical conversation about your contractor business — not a software sales pitch.
        </p>
        <BulletList
          items={[
            "A direct response from Richard — not a chatbot or junior sales rep",
            "Honest assessment of whether advisory services are a good fit",
            "Clear next steps if you want to move forward — audit, selection, training, or recovery",
            "No obligation to purchase anything",
            "No referral to a software vendor unless you ask for a specific recommendation",
          ]}
        />
      </ContentSection>

      <CtaBand
        headline="Ready to Start the Conversation?"
        body="Book a Strategy Call or reach out directly — whichever you prefer."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
