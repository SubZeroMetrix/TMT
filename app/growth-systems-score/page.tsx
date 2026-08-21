import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";
import CaptureFormEmbed from "@/components/CaptureFormEmbed";

/**
 * Primary inbound acquisition path — the free Contractor Growth Systems
 * Score diagnostic. Rendering of the actual diagnostic is conditional on
 * NEXT_PUBLIC_GSS_SURVEY_URL so this page never ships a broken/empty embed
 * before the survey exists in GoHighLevel (Sites > Surveys). Same pattern
 * as CAPTURE_FORM_URL in app/contact/page.tsx and BOOKING_URL in
 * app/book-a-strategy-call/page.tsx — set the env var once the survey is
 * built and verified there.
 *
 * This is a directional self-assessment, not a verified audit. Never let
 * copy on this page imply otherwise — that boundary is what keeps the paid
 * Growth & Systems Blueprint the actual diagnostic product.
 */
const GSS_SURVEY_URL = process.env.NEXT_PUBLIC_GSS_SURVEY_URL;

export const metadata: Metadata = {
  title: "Contractor Growth Systems Score",
  description:
    "A free, seven-question self-assessment that points to the systems most likely limiting your contractor business's next stage of growth — demand, conversion, revenue capture, operations, systems & measurement, and growth & scale.",
  alternates: { canonical: "/growth-systems-score" },
};

const domains = [
  {
    name: "Demand",
    detail: "How consistently your business generates enough qualified opportunities.",
  },
  {
    name: "Conversion",
    detail: "How consistently qualified leads turn into paying customers.",
  },
  {
    name: "Revenue Capture",
    detail: "How well you follow up, recover missed opportunities, and collect on estimates already sent.",
  },
  {
    name: "Operations",
    detail: "Whether the business can actually deliver the volume of work you're trying to generate.",
  },
  {
    name: "Systems & Measurement",
    detail: "How connected your systems, workflows, data, and reporting are.",
  },
  {
    name: "Growth & Scale",
    detail: "Whether the business can grow without creating operational or financial instability.",
  },
];

export default function GrowthSystemsScorePage() {
  return (
    <>
      <PageHero
        eyebrow="Free Self-Assessment"
        title="Get Your Contractor Growth Systems Score"
        description="Find the systems most likely to be limiting your next stage of growth. Answer seven quick questions about how your business generates demand, converts opportunities, captures revenue, operates, measures performance, and prepares for growth."
        primaryCta={{ label: "Get the Growth & Systems Blueprint", href: "/services/technology-audit" }}
        secondaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
      />

      <ContentSection>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-navy/70 leading-relaxed">
            Your result is a <strong className="text-navy">directional systems assessment</strong> —
            not a verified audit. It points at where to look next based on your own answers. If you
            want a verified, evidence-based diagnosis with a prioritized action plan, that's what the{" "}
            <a href="/services/technology-audit" className="text-cyan-dim underline">
              Growth &amp; Systems Blueprint
            </a>{" "}
            is for.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {domains.map((d) => (
            <InfoCard key={d.name} title={d.name}>
              <p>{d.detail}</p>
            </InfoCard>
          ))}
        </div>

        {GSS_SURVEY_URL ? (
          <div className="max-w-xl mx-auto">
            <CaptureFormEmbed
              url={GSS_SURVEY_URL}
              title="Contractor Growth Systems Score"
            />
          </div>
        ) : (
          <div className="max-w-xl mx-auto text-center">
            <InfoCard title="Coming Soon">
              <p>
                The diagnostic is being finalized. In the meantime, book a free Shop Visit or call
                727-600-3425 to talk through where your business stands.
              </p>
            </InfoCard>
          </div>
        )}

        <div className="max-w-2xl mx-auto mt-10 text-center">
          <BulletList
            items={[
              "Seven questions, about two minutes",
              "No fake precision — a simple 1-to-5 self-rating per domain, averaged",
              "Your strongest and weakest domain, in plain language",
              "One recommended next step, sized to what you told us",
            ]}
          />
        </div>
      </ContentSection>

      <CtaBand
        headline="Want the Verified Version?"
        body="The Growth & Systems Blueprint is a fixed-fee, evidence-based diagnosis with a prioritized 30/60/90-day action plan — not a self-assessment."
        primary={{ label: "See the Growth & Systems Blueprint", href: "/services/technology-audit" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
