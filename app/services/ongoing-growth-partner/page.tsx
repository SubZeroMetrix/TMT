import type { Metadata } from "next";
import { PageHero, ContentSection, InfoCard, BulletList, CtaBand } from "@/components/PageChrome";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Ongoing Growth Partner for Contractors",
  description:
    "Ongoing help driving priorities and coordinating systems for a Tampa Bay contractor business — without hiring a full-time executive.",
  alternates: { canonical: "/services/ongoing-growth-partner" },
};

const advisoryIncludes = [
  "One or two scheduled operating reviews a month",
  "KPI and roadmap review",
  "Priority recommendations",
  "Limited troubleshooting",
];

const partnerIncludes = [
  "Ownership of the prioritized improvement roadmap",
  "Regular growth and operating reviews",
  "KPI and constraint monitoring",
  "Coordination across marketing, sales, CRM, and operations",
  "Vendor and system oversight",
  "AI and automation priorities managed, not just recommended",
  "Limited hands-on configuration and optimization",
];

/**
 * How the Partner engagement actually runs, as a repeating cycle rather
 * than a list of inclusions. Pressure test: a fractional-anything offer
 * that can't say what happens in a cycle and how the next priority gets
 * picked reads as a vague retainer. This names the loop, who's
 * accountable inside it, and what happens when a request falls outside
 * scope — the places retainers usually go soft.
 */
const rhythm = [
  {
    step: "1. Review the current growth and operations priorities",
    body: "Every cycle starts against one list — the Blueprint's baseline and priorities, or a baseline built in week one if there wasn't a prior Blueprint. Not a shared doc nobody opens; the thing every review checks against.",
  },
  {
    step: "2. Set the next constraint worth fixing",
    body: "Picked by measured impact on the constraint the roadmap is built around, scored the same way the Blueprint scores it — not re-argued from scratch every cycle, and not whichever request was loudest.",
  },
  {
    step: "3. Keep implementation moving with the owner and team",
    body: "One name accountable for coordination — chasing a slow vendor, unsticking a handoff between the office and the field, keeping two systems agreeing on the same data. Not three people assuming someone else has it.",
  },
  {
    step: "4. Review performance, friction, and system adoption",
    body: "Did it work, is the team actually using it, and where is it creating friction instead of removing it. AI and automation priorities pass the same governance check every cycle — who owns the decision, what's touched, what the baseline is — because a recurring engagement is exactly where AI scope quietly creeps if nothing enforces this.",
  },
  {
    step: "5. Adjust priorities as the business changes",
    body: "A full roadmap reset on a fixed schedule, because the priority list from month one is rarely still the right one by month four. A request that's really a separate project — a rebuild, a new integration — gets scoped and quoted on its own rather than quietly consuming retainer hours.",
  },
];

const partnerExcludes = [
  "Unlimited availability or unlimited system building",
  "Full-time employee management",
  "Advertising spend and software subscriptions",
  "Large implementations — those stay separately scoped as fixed-price projects",
];

export default function OngoingGrowthPartnerPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Ongoing Growth Partner",
          description:
            "Ongoing advisory and partnership engagements for contractor businesses that need continued help driving priorities and coordinating systems.",
          slug: "/services/ongoing-growth-partner",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Ongoing Growth Partner", path: "/services/ongoing-growth-partner" },
        ])}
      />

      <PageHero
        eyebrow="One of three ways to work with TMT"
        title="Ongoing Growth Partner"
        description="For owners who need more than advice but don't need a full-time executive. Two ways to stay engaged after the Blueprint — pick the level of involvement that fits."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "See the Growth & Systems Blueprint", href: "/services/technology-audit" }}
      />

      <ContentSection>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
          Two Ways to Stay Engaged
        </p>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4 max-w-2xl">
          You Get the Plan, or TMT Runs Point on It
        </h2>
        <p className="text-navy/70 max-w-2xl mb-10 leading-relaxed">
          <strong>Growth Ops Advisory:</strong> you get the plan; your team owns execution.{" "}
          <strong>Ongoing Growth Partner:</strong> TMT runs point with your team to drive the plan
          forward.
        </p>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bp-frame bp-panel-light p-7">
            <h3 className="font-display font-semibold text-navy text-xl">Growth Ops Advisory</h3>
            <p className="mt-2 font-mono text-sm text-cyan-dim">$1,250/month</p>
            <p className="mt-4 text-sm text-navy/70 leading-relaxed">
              Limited advisory — you get the plan, your team executes it.
            </p>
            <div className="mt-5">
              <BulletList items={advisoryIncludes} />
            </div>
            <p className="mt-5 text-xs text-navy/50">
              No major implementation included. Roughly six to eight hours of monthly capacity.
            </p>
          </div>
          <InfoCard title="Ongoing Growth Partner">
            <p className="font-mono text-sm text-cyan-dim mb-4">$3,500/month founding-client price · 3-month initial term</p>
            <p className="mb-4">TMT runs point with your team to drive the plan forward.</p>
            <BulletList items={partnerIncludes} />
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
          The Operating Rhythm
        </p>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4 max-w-2xl">
          How the Partner Engagement Actually Runs
        </h2>
        <p className="text-navy/70 max-w-2xl mb-12 leading-relaxed">
          A retainer that can't say what happens in week one and what the recurring cadence
          actually is isn't a system — it's a vague promise to be available. This is the
          mechanics, not a list of inclusions.
        </p>
        <div className="space-y-8">
          {rhythm.map((r) => (
            <div key={r.step} className="border-t border-border-light pt-6">
              <h3 className="font-display font-semibold text-navy text-lg">{r.step}</h3>
              <p className="mt-2 text-sm text-navy/70 leading-relaxed max-w-3xl">{r.body}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">What's Not Included</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-8 max-w-2xl">
          Bounded on Purpose
        </h2>
        <BulletList items={partnerExcludes} dark />
      </ContentSection>

      <CtaBand
        headline="Figure Out the Right Level of Involvement"
        body="Book a Strategy Call — most businesses start with the Blueprint before deciding which ongoing path fits."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
