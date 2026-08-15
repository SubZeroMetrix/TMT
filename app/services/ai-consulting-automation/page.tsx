import type { Metadata } from "next";
import { PageHero, ContentSection, InfoCard, BulletList, CtaBand } from "@/components/PageChrome";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AI Consulting & Automation for Contractors",
  description:
    "Find where AI or automation can improve response, reduce repetitive work, strengthen follow-up, or improve visibility for a Tampa Bay contractor business — without buying tools that don't fit.",
  alternates: { canonical: "/services/ai-consulting-automation" },
};

const goodFits = [
  "Call summaries and after-hours call handling",
  "Customer follow-up that would otherwise get skipped",
  "Internal knowledge search — finding an answer instead of asking around",
  "Proposal and documentation drafting, reviewed before it goes out",
  "Scheduling support and reporting",
];

const cautions = [
  "Not every process should be automated",
  "A poor process becomes a poor automated process — fix the process first",
  "Sensitive decisions still require human review",
  "Data access and permissions must be controlled",
  "Staff training matters as much as the tool",
];

export default function AiConsultingAutomationPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "AI Consulting & Automation",
          description:
            "Practical AI and automation guidance for contractor businesses, applied only where it solves a real business problem.",
          slug: "/services/ai-consulting-automation",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "AI Consulting & Automation", path: "/services/ai-consulting-automation" },
        ])}
      />

      <PageHero
        eyebrow="One of three ways to work with TMT"
        title="AI Consulting & Automation"
        description="Find where AI or automation can improve response, reduce repetitive admin work, strengthen follow-up, or improve visibility — without buying tools that don't fit the business. AI is optional, and used only where it solves a verified problem."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "See the Growth & Systems Blueprint", href: "/services/technology-audit" }}
      />

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
              Who It's For
            </p>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-6">
              Owners Who Want Practical AI, Not a Sales Pitch
            </h2>
            <p className="text-navy/70 leading-relaxed">
              You've heard the pitch. You want to know what actually works for a business your
              size, tied to a real problem — not a demo, not a chatbot for its own sake, and not
              a platform that adds a new thing someone has to check.
            </p>
          </div>
          <InfoCard title="Where AI Actually Helps a Contractor">
            <BulletList items={goodFits} />
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">What We Watch For</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-8 max-w-2xl">
          Governed, Not Guessed At
        </h2>
        <BulletList items={cautions} dark />
        <p className="mt-8 text-sm text-silver-light/70 leading-relaxed max-w-2xl">
          Every recommendation is checked against who owns the decision, what data is involved,
          what the baseline is, and what happens when it's wrong or unavailable. If it can't
          survive that check, it doesn't go in the plan.
        </p>
      </ContentSection>

      <CtaBand
        headline="Find Out Where AI Actually Helps Your Business"
        body="Book a Strategy Call to discuss the specific problem — not a generic AI pitch."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
