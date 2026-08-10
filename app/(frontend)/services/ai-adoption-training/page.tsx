import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";
import SignatureName from "@/components/SignatureName";

export const metadata: Metadata = {
  title: "AI Adoption & Staff Training",
  description:
    "Practical AI training for contractor owners, office staff, and technicians — what to use, what to avoid, and how to keep humans in control.",
};

const practicalUses = [
  "Call summaries and customer communication drafts",
  "Estimate and proposal drafting from job notes",
  "Technician documentation and work order completion",
  "Internal knowledge search — SOPs, manuals, troubleshooting guides",
  "Customer follow-up message drafting and scheduling support",
  "Reporting summaries and operational insights",
  "Training material creation for new hires",
  "Workflow assistance for repetitive office tasks",
];

const cautions = [
  "Not every process should be automated — some need human judgment",
  "Poor processes become worse when you automate them faster",
  "Customer-facing AI output always needs human review before sending",
  "Sensitive financial, legal, and safety decisions require human oversight",
  "Data access and permissions must be controlled — not everyone needs everything",
  "Staff education matters as much as the tool — adoption fails without both",
  "Vendor AI features bundled into software may not be the best option for your use case",
  "Compliance and privacy requirements vary by trade and customer type",
];

const audienceTracks = [
  {
    title: "Owners & Managers",
    items: [
      "Strategic AI opportunity assessment for your business",
      "Vendor evaluation — what AI features are worth paying for",
      "Policy and governance basics for staff AI use",
      "ROI thinking — where AI saves time vs. creates risk",
    ],
  },
  {
    title: "Office & Dispatch Staff",
    items: [
      "Daily workflow AI tools — drafting, summarizing, searching",
      "Customer communication assistance with quality control",
      "Data entry reduction without sacrificing accuracy",
      "Integration with existing CRM and communication tools",
    ],
  },
  {
    title: "Technicians & Field Staff",
    items: [
      "Mobile-friendly documentation assistance",
      "Troubleshooting and knowledge lookup on the job",
      "Work order completion and photo/note organization",
      "What not to put into AI tools — customer data, credentials, proprietary info",
    ],
  },
];

export default function AIAdoptionTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Adoption"
        title="Practical AI Training for Contractor Teams"
        description="AI is part of the future — but it is not the whole strategy. We train owners, office staff, and technicians on what AI actually helps with, what to watch out for, and how to keep humans in control of every important decision."
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call" }}
        secondaryCta={{ label: "See All Services", href: "/services" }}
      />

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
              Where AI Actually Helps
            </p>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-6">
              Real Uses — Not Hype
            </h2>
            <p className="text-navy/70 leading-relaxed mb-6">
              Contractors hear about AI every day. Most of it is noise. These are the areas where
              AI tools consistently save time and reduce friction for contractor operations — when
              the underlying process is already sound.
            </p>
            <BulletList items={practicalUses} />
          </div>
          <InfoCard title="Business Before AI">
            <p className="mb-4">
              <SignatureName className="text-xl mr-1">Richard</SignatureName> does not recommend
              automating broken processes. If your follow-up workflow is inconsistent, AI will
              draft inconsistent follow-ups faster. We fix the process first, then introduce AI
              where it earns its keep.
            </p>
            <p>
              Training is tailored to your team&apos;s current tools, comfort level, and daily
              workflows — not generic ChatGPT demos.
            </p>
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">What We Watch For</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-6 max-w-2xl">
          Cautions Every Contractor Should Know
        </h2>
        <BulletList items={cautions} dark />
      </ContentSection>

      <ContentSection>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
          Training Tracks
        </p>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-10">
          Built for Every Role on Your Team
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {audienceTracks.map((track) => (
            <div key={track.title} className="bp-frame bp-panel-light p-6">
              <h3 className="font-display font-semibold text-navy text-lg mb-4">{track.title}</h3>
              <BulletList items={track.items} />
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-navy/60 max-w-2xl">
          Sessions can be delivered individually or as a team workshop. Content is updated as tools
          and best practices evolve — because the AI landscape changes fast, and contractor
          operations cannot afford outdated guidance.
        </p>
      </ContentSection>

      <CtaBand
        headline="Train Your Team on AI That Actually Works"
        body="Book a Shop Visit to discuss AI training for your owners, office, and field staff."
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
