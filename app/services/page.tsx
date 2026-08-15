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
    "Fix the connected growth and operating systems behind your contracting business — the Growth & Systems Blueprint, fixed-scope implementation, AI & automation, and Ongoing Growth Partner support.",
  alternates: { canonical: "/services" },
};

/**
 * The four real ways to work with TMT — the front-door decision, distinct
 * from the GBP-locked grid below (which lists individual service pages,
 * not the engagement paths). Blueprint included as a path here even though
 * it's also item 01 in that grid, because a visitor choosing how to work
 * with TMT needs to see it alongside the other three, not buried in a list
 * of nine.
 */
const workPaths = [
  {
    title: "Growth & Systems Blueprint",
    fit: "Start here when you need to identify what is actually holding the business back and what to fix first.",
    href: "/services/technology-audit",
  },
  {
    title: "Growth & Operations Systems",
    fit: "Fix the connected systems behind demand, sales, follow-up, delivery, retention, and visibility.",
    href: "/services/growth-operations-systems",
  },
  {
    title: "AI Consulting & Automation",
    fit: "Reduce repetitive work and improve follow-through where automation or AI genuinely fits.",
    href: "/services/ai-consulting-automation",
  },
  {
    title: "Ongoing Growth Partner",
    fit: "Keep the highest-priority work moving with TMT involved alongside your team.",
    href: "/services/ongoing-growth-partner",
  },
];

const howItWorks = [
  { title: "1. Understand the business", body: "How the operation actually runs today — not how the org chart says it runs." },
  { title: "2. Find the real constraint", body: "The specific thing costing time, money, or growth — named, not guessed at." },
  { title: "3. Prioritize the right fix", body: "Ranked by business need and impact, not by what's easiest to sell." },
  { title: "4. Build the system or implementation plan", body: "Process fixes first, then the systems, automation, or AI support that genuinely fit." },
  { title: "5. Measure, improve, and move to the next priority", body: "A baseline to check against, and a defined next step — not an open-ended engagement." },
];

const whatsDifferent = [
  "TMT looks across growth, sales, operations, customer follow-up, systems, and visibility — not one department in isolation.",
  "TMT is platform-neutral and does not force a software product.",
  "Process and business priorities come before automation or AI.",
  "Work is structured around a defined next step, not an open-ended consulting arrangement.",
];

const decisionGuide = [
  { q: "Not sure what to fix first?", a: "Growth & Systems Blueprint", href: "/services/technology-audit" },
  { q: "Know the bottleneck and need a defined build?", a: "Foundation, Full, or Flagship — determined after the Strategy Call or Blueprint", href: "/services/growth-operations-systems" },
  { q: "Need workflow automation or practical AI support?", a: "AI Consulting & Automation", href: "/services/ai-consulting-automation" },
  { q: "Need an accountable partner to keep priorities and implementation moving?", a: "Ongoing Growth Partner", href: "/services/ongoing-growth-partner" },
];

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
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "How It Works", href: "/how-it-works" }}
      />

      <ContentSection>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
          The Front Door
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight max-w-2xl mb-10">
          Find the Right Way to Work With TMT
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workPaths.map((p, i) => (
            <Link key={p.title} href={p.href} className="group block">
              <div className="bp-frame bp-panel-light h-full p-6 transition-colors hover:border-cyan/30">
                <span className="font-mono text-[10px] text-cyan-dim">0{i + 1}</span>
                <h3 className="mt-2 font-display font-semibold text-navy text-lg group-hover:text-cyan transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm text-navy/65 leading-relaxed">{p.fit}</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-cyan group-hover:underline">
                  Learn more →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">How TMT Works</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-4 max-w-2xl">
          One System, Not One Fixed Sequence
        </h2>
        <p className="text-silver-light/85 max-w-2xl mb-10 leading-relaxed">
          The right path depends on whether the business needs diagnosis, a bounded fix,
          connected system work, automation, or continuing execution support — not a
          one-size-fits-all sequence, and never a software pitch.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {howItWorks.map((s) => (
            <div key={s.title} className="border-t-2 border-cyan pt-4">
              <h3 className="font-display font-semibold text-white text-sm">{s.title}</h3>
              <p className="mt-2 text-sm text-silver-light/75 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-3">
          What Makes This Different
        </p>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-8 max-w-2xl">
          Business First, Tools Second
        </h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl">
          {whatsDifferent.map((d) => (
            <li key={d} className="flex items-start gap-3 text-navy/80">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-blue">
                <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {d}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">Decision Guide</p>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-10 max-w-2xl">
          Which Path Fits Right Now?
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {decisionGuide.map((d) => (
            <Link key={d.q} href={d.href} className="group block">
              <div className="bp-frame bp-panel h-full p-6 transition-colors hover:border-cyan/30">
                <p className="font-display font-semibold text-white leading-snug">&ldquo;{d.q}&rdquo;</p>
                <p className="mt-3 text-sm text-cyan-dim group-hover:text-cyan transition-colors">
                  → {d.a}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </ContentSection>

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
          operations, your team size, and your budget — typically owner-led service businesses
          of 5–30 employees.
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
                    Start Here
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
              Most Contractors Begin With the Blueprint
            </h2>
            <p className="text-silver-light/85 leading-relaxed max-w-xl">
              If you are not sure which service fits, the Growth &amp; Systems Blueprint gives
              you a clear picture of where you stand and a prioritized roadmap for what to fix
              first. Everything else — implementation, software selection, training, ongoing
              support — flows from that clarity.
            </p>
            <div className="mt-8">
              <SecondaryCTA href="/services/technology-audit">
                Explore the Blueprint
              </SecondaryCTA>
            </div>
          </div>
          <InfoCard title="Not Sure What You Need?" dark>
            <p className="mb-4">
              Book a Strategy Call. We will talk through your current systems, pain points, and
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
        headline="Ready to Grow Without Losing Control?"
        body="Start with a practical conversation about your business — not a vendor pitch."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
