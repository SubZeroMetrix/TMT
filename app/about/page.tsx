import type { Metadata } from "next";
import Image from "next/image";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";
import { GhostCTA } from "@/components/CTAButton";
import SignatureName from "@/components/SignatureName";
import {
  founder,
  philosophy,
  principles,
  howRichardWorks,
  insuranceBackground,
} from "@/lib/content";
import { NAP } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "About Richard Fritzke",
  description:
    "Richard Fritzke brings 26+ years of HVAC, facilities, and operations experience to contractor technology advisory — vendor-neutral, field-tested, and business-first.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Richard Fritzke"
        description="Founder of The Modern Trades Mentor — contractor technology and AI advisory built from 26+ years in HVAC, facilities, mechanical systems, and service operations."
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />

      <ContentSection>
        <div className="grid gap-12 lg:grid-cols-[1fr,1.4fr] items-start">
          <div className="mx-auto lg:mx-0 w-full max-w-sm">
            <div className="relative aspect-[4/5] border border-steel/30 overflow-hidden rounded-md bg-navy-deep">
              <Image
                src="/richard-portrait.png"
                alt="Richard Fritzke, founder of The Modern Trades Mentor"
                fill
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-5 text-center">
              <SignatureName flourish>Richard Fritzke</SignatureName>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate">
                Founder · The Modern Trades Mentor LLC
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-6">
              {founder.heading}
            </h2>
            <p className="text-lg text-navy/80 leading-relaxed mb-6">
              {founder.subhead}
            </p>
            <p className="text-navy/70 leading-relaxed mb-4">
              <SignatureName className="text-2xl mr-1 align-baseline">Richard</SignatureName>
              {founder.narrative.replace(/^Richard/, "")}
            </p>
            <p className="text-navy/70 leading-relaxed mb-4">{founder.narrative2}</p>
            <p className="text-navy/70 leading-relaxed mb-6">{founder.narrative3}</p>
            <p className="text-xs text-navy/50 max-w-xl mb-8">{founder.disclaimer}</p>

            <div className="mb-8 border-l-[3px] border-blue-soft pl-4">
              <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-blue mb-2">
                {insuranceBackground.heading}
              </h3>
              <p className="text-sm text-navy/70 leading-relaxed max-w-2xl">
                {insuranceBackground.body}
              </p>
              <p className="mt-3 text-xs text-navy/50 max-w-2xl">
                {insuranceBackground.disclaimer}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {founder.columns.map((col) => (
                <div key={col.title} className="border-t border-blue/40 pt-4">
                  <p className="font-mono text-[10px] font-semibold tracking-[0.12em] text-blue uppercase mb-2">
                    {col.title}
                  </p>
                  <ul className="space-y-1">
                    {col.items.map((item) => (
                      <li key={item} className="text-sm text-navy/75">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection dark>
        <p className="bp-label mb-3">Philosophy</p>
        <blockquote className="font-display text-2xl sm:text-3xl font-semibold text-white max-w-3xl leading-snug mb-10">
          &ldquo;{philosophy}&rdquo;
        </blockquote>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <div key={p.title} className="bp-frame bp-panel p-5">
              <span className="font-mono text-[10px] text-cyan">0{i + 1}</span>
              <h3 className="mt-2 font-display font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-silver-light/80 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-8">
          {howRichardWorks.heading}
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {howRichardWorks.steps.map((step) => (
            <InfoCard key={step.title} title={step.title}>
              {step.body}
            </InfoCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4">
              Why Contractors Work With <SignatureName className="text-2xl mx-1">Richard</SignatureName>
            </h2>
            <BulletList
              items={[
                "26+ years of hands-on HVAC, facilities, and mechanical systems experience",
                "Led teams of 20+ technicians across 40+ commercial facilities",
                "ICC Master Mechanical License · EPA Universal Certified",
                "A.S. in HVAC/R, Redstone College · OSHA 30 and MSHA certified",
                "Currently active in recommissioning and optimization work across commercial, mission-critical, and complex facilities environments",
                "Builds and runs modern software, AI tools, CRM, and marketing systems for his own businesses",
                "Recommendations are vendor-neutral and based on your operational needs",
                "Understands both the field and the office — because he has worked in both",
              ]}
            />
            <p className="mt-6 text-xs text-navy/50 max-w-xl">
              Experience references are provided for professional background only and do not imply
              endorsement by any current or former employer or government entity.
            </p>
          </div>
          <div className="space-y-5">
            <InfoCard title="Who This Is For">
              <p className="mb-4">
                Owner-led service businesses, typically 5–30
                employees — HVAC, plumbing, electrical, roofing, general contracting, and related
                trades, plus service businesses with the same operating shape.
              </p>
              <p>
                Based in the Tampa Bay area with remote advisory available. If you need someone who
                speaks contractor operations — not just software sales — you are in the right place.
              </p>
              <div className="mt-6">
                <GhostCTA href="/services">Explore Services</GhostCTA>
              </div>
            </InfoCard>

            <InfoCard title="Talk to Richard">
              <ul className="space-y-2">
                <li>
                  <a href={`tel:${NAP.phone}`} className="text-blue hover:underline">
                    {NAP.phoneDisplay}
                  </a>{" "}
                  — call or text
                </li>
                <li>
                  <a href={`mailto:${NAP.email}`} className="text-blue hover:underline">
                    {NAP.email}
                  </a>
                </li>
                <li>Serving Pinellas County, Tampa Bay, and Hillsborough County</li>
                <li>On-site shop visits available — Richard travels to you</li>
              </ul>
              <div className="mt-6">
                <GhostCTA href="/book-a-strategy-call">Book a Shop Visit</GhostCTA>
              </div>
            </InfoCard>
          </div>
        </div>
      </ContentSection>

      <CtaBand
        headline="Work With Someone Who Has Been in the Field"
        body="Book a Shop Visit for a practical conversation about your business — no software pitch, no obligation."
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
