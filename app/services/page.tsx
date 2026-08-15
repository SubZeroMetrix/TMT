import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  ContentSection,
  InfoCard,
  CtaBand,
} from "@/components/PageChrome";
import { SecondaryCTA } from "@/components/CTAButton";
import { SPRINTS } from "@/lib/content/sprints";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Vendor-neutral contractor technology advisory: audits, software selection, AI training, workflow development, implementation planning, and revenue recovery.",
  alternates: { canonical: "/services" },
};

/**
 * The first five must stay identical, in name and order, to the services
 * listed on the Google Business Profile. A visitor arriving from GBP should
 * see exactly what they clicked. The remainder are supporting engagements
 * that keep their existing pages rather than being orphaned.
 */
const services = [
  {
    href: "/services/technology-audit",
    title: "Growth & Systems Blueprint",
    description:
      "The paid entry point. $1,500 founding-client price, delivered in five business days: an on-site workflow review, your top three operating leaks, documented findings, and a 30/60/90-day action plan. Credited toward an approved implementation engagement.",
    featured: true,
  },
  {
    href: "/ai-automation",
    title: "AI Automation Consulting",
    description:
      "Narrow, reliable automation of the admin work that eats the week — after-hours calls, estimate follow-up, job notes, and billing gaps. And a clear list of what should not be automated.",
  },
  {
    href: "/crm-workflow-consulting",
    title: "CRM & Workflow Consulting",
    description:
      "How customer and job information should move from first call to paid invoice — and which system actually fits that, rather than the one with the best demo.",
  },
  {
    href: "/services/software-selection",
    title: "Software Selection & Implementation Planning",
    description:
      "Choosing CRM, FSM, dispatch and accounting tools without commissions or vendor pressure, then sequencing the rollout so the team actually adopts it.",
  },
  {
    href: "/ai-consulting-st-petersburg-fl",
    title: "Contractor Technology Consulting",
    description:
      "Ongoing vendor-neutral guidance on technology decisions for owner-led service businesses across Pinellas and Hillsborough counties.",
  },
  {
    href: "/services/ai-adoption-training",
    title: "AI Adoption & Staff Training",
    description:
      "Practical AI training for owners, office staff, and technicians — what to use, what to avoid, and how to keep humans in control of decisions.",
  },
  {
    href: "/services/custom-workflow",
    title: "Custom Workflow & Program Development",
    description:
      "Purpose-built workflows and operational programs for contractor businesses — from estimate follow-up to maintenance agreement renewal.",
  },
  {
    href: "/services/implementation-planning",
    title: "Implementation Planning",
    description:
      "Sequenced rollout plans, adoption strategy, and change management so new tools actually get used instead of sitting on the shelf.",
  },
  {
    href: "/services/revenue-loss-recovery",
    title: "Revenue Loss Recovery",
    description:
      "Find and fix revenue leaks: missed calls, unsold estimates, lapsed maintenance agreements, and follow-up gaps that cost more than any software subscription.",
  },
  // Outcome Sprints appended after the GBP-matched five above — never
  // reordered ahead of them (see the file-level comment on `services`).
  // Sourced from lib/content/sprints.ts rather than duplicated by hand.
  ...SPRINTS.map((sprint) => ({
    href: `/services/${sprint.slug}`,
    title: sprint.name,
    description: sprint.heroDescription,
  })),
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services Built for Owner-Led Contractor Teams"
        description="Every engagement starts with your business — not a software demo. We help HVAC, plumbing, electrical, roofing, and field-service companies choose the right tools, fix the process, train the team, and use AI where it earns its keep."
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "How It Works", href: "/how-it-works" }}
      />

      <ContentSection>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
          How We Help
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight max-w-2xl mb-4">
          Practical Advisory — Not a Software Sales Pitch
        </h2>
        <p className="text-navy/70 max-w-2xl mb-12 leading-relaxed">
          The Modern Trades Mentor does not sell software licenses or earn commissions on
          platform referrals. Recommendations are vendor-neutral and based on what fits your
          operations, your team size, and your budget — typically owner-led service companies
          employees.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              key={service.href}
              href={service.href}
              className="group block"
            >
              <div
                className={`bp-frame h-full p-6 transition-colors ${
                  service.featured
                    ? "bp-panel border-cyan/40 bg-navy text-silver-light"
                    : "bp-panel-light hover:border-cyan/30"
                }`}
              >
                <span
                  className={`font-mono text-[10px] ${service.featured ? "text-cyan" : "text-cyan-dim"}`}
                >
                  0{i + 1}
                </span>
                {service.featured && (
                  <span className="ml-2 font-mono text-[9px] uppercase tracking-wider text-cyan/70 border border-cyan/30 px-2 py-0.5">
                    Flagship
                  </span>
                )}
                <h3
                  className={`mt-2 font-display font-semibold text-lg group-hover:text-cyan transition-colors ${
                    service.featured ? "text-white" : "text-navy"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    service.featured ? "text-silver-light/80" : "text-navy/65"
                  }`}
                >
                  {service.description}
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-cyan group-hover:underline">
                  Learn more →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="bp-label mb-3">Where to Start</p>
            <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-4">
              Most Contractors Begin With the Audit
            </h2>
            <p className="text-silver-light/85 leading-relaxed max-w-xl">
              If you are not sure which service fits, the Technology &amp; AI Readiness Audit gives
              you a clear picture of where you stand and a prioritized roadmap for what to fix
              first. Everything else — software selection, training, implementation — flows from
              that clarity.
            </p>
            <div className="mt-8">
              <SecondaryCTA href="/services/technology-audit">
                Explore the Technology Audit
              </SecondaryCTA>
            </div>
          </div>
          <InfoCard title="Not Sure What You Need?" dark>
            <p className="mb-4">
              Book a Shop Visit. We will talk through your current systems, pain points, and
              goals — and recommend the right starting point. No obligation, no software demo, no
              pressure to buy a platform.
            </p>
            <p className="font-mono text-[10px] text-cyan/70 uppercase tracking-wider">
              Tampa Bay &amp; remote advisory available
            </p>
          </InfoCard>
        </div>
      </ContentSection>

      <CtaBand
        headline="Ready to Modernize Without Losing Control?"
        body="Start with a practical conversation about your business — not a vendor pitch."
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
