import type { Metadata } from "next";
import { PageHero, ContentSection, InfoCard, BulletList, CtaBand } from "@/components/PageChrome";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Ongoing Growth Partner for Contractors",
  description:
    "Ongoing help driving priorities, coordinating systems and vendors, and reviewing results for a Tampa Bay contractor business — without hiring a full-time executive.",
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
