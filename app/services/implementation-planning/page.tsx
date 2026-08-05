import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Implementation Planning",
  description:
    "Sequenced implementation plans, adoption strategy, and change management for contractor technology rollouts that actually stick.",
};

const planningElements = [
  "Phased rollout sequence — what to implement first, second, and third",
  "Data migration planning — what moves, what stays, and what gets rebuilt",
  "Staff training schedule aligned to each rollout phase",
  "Go-live checklists and rollback plans for each milestone",
  "Integration setup order — which connections matter most on day one",
  "Communication plan for informing customers and staff during transitions",
  "Success metrics and review checkpoints at 30, 60, and 90 days",
  "Owner and manager accountability assignments for adoption",
];

const adoptionChallenges = [
  {
    title: "Technician Resistance",
    body: "Field staff often resist new tools because past rollouts added work without removing any. We design implementations that reduce technician burden from day one — or we do not recommend the change.",
  },
  {
    title: "Office Overload",
    body: "Implementing new software while running daily operations is how adoption fails. We sequence changes so the office team is never managing two systems and full call volume at the same time.",
  },
  {
    title: "Owner as Bottleneck",
    body: "When only the owner knows how the new system works, everything stops when they are on a job site. Training and documentation are built so the team can operate independently.",
  },
  {
    title: "Partial Adoption",
    body: "Using half a platform is worse than using none — you pay for features nobody touches. We define minimum viable adoption for each role before moving to the next phase.",
  },
];

export default function ImplementationPlanningPage() {
  return (
    <>
      <PageHero
        eyebrow="Implementation Planning"
        title="Roll Out Technology Your Team Will Actually Use"
        description="A recommendation is only useful if the team adopts it. We build sequenced implementation plans with training, change management, and adoption checkpoints — so new tools stick instead of sitting on the shelf."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call" }}
        secondaryCta={{ label: "Start With the Audit", href: "/services/technology-audit" }}
      />

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
              The Problem
            </p>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-6">
              Most Implementations Fail on Adoption — Not Features
            </h2>
            <p className="text-navy/70 leading-relaxed mb-6">
              Contractors buy good software and still struggle because nobody planned how the
              transition would work. Training gets skipped. Data migration gets rushed. The old
              system and the new one run in parallel until everyone gives up and goes back to
              spreadsheets and text messages.
            </p>
            <p className="text-navy/70 leading-relaxed">
              Implementation planning prevents that. We map every phase before you flip a switch —
              who learns what, when data moves, and how you know it is working.
            </p>
          </div>
          <InfoCard title="What the Plan Includes">
            <BulletList items={planningElements} />
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">Change Management</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-8">
          Adoption Challenges We Plan For
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {adoptionChallenges.map((c) => (
            <InfoCard key={c.title} title={c.title} dark>
              <p>{c.body}</p>
            </InfoCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4">
          How It Connects to Other Services
        </h2>
        <p className="text-navy/70 max-w-2xl mb-8 leading-relaxed">
          Implementation planning works best as the next step after a Technology Audit or Software
          Selection engagement. You already know what to do — this is the plan for doing it without
          disrupting the business.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <InfoCard title="After the Audit">
            <p>
              The audit roadmap tells you what to fix. Implementation planning tells you how to fix
              it in the right order.
            </p>
          </InfoCard>
          <InfoCard title="After Software Selection">
            <p>
              Once you have chosen a platform, we build the rollout plan — migration, training,
              go-live, and adoption tracking.
            </p>
          </InfoCard>
          <InfoCard title="With AI Training">
            <p>
              New tools and new AI capabilities roll out together with staff training so nobody is
              left figuring it out alone.
            </p>
          </InfoCard>
        </div>
      </ContentSection>

      <CtaBand
        headline="Plan the Rollout Before You Buy the License"
        body="Book a strategy call to discuss implementation planning for your next technology change."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
