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
import { founder, philosophy, principles } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Richard Fritzke",
  description:
    "Richard Fritzke brings 24+ years of HVAC, facilities, and operations experience to contractor technology advisory — vendor-neutral, field-tested, and business-first.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Richard Fritzke"
        description="Founder of The Modern Trades Mentor — contractor technology and AI advisory built from 24+ years in HVAC, facilities, mechanical systems, and service operations."
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
            <p className="text-navy/70 leading-relaxed mb-6">
              <SignatureName className="text-2xl mr-1 align-baseline">Richard</SignatureName>
              {founder.narrative.replace(/^Richard/, "")}
            </p>
            <p className="text-xs text-navy/50 max-w-xl mb-8">{founder.disclaimer}</p>

            <div className="grid sm:grid-cols-3 gap-6">
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
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4">
              Why Contractors Work With <SignatureName className="text-2xl mx-1">Richard</SignatureName>
            </h2>
            <BulletList
              items={[
                "24+ years of hands-on HVAC, facilities, and mechanical systems experience",
                "Led teams of 20+ technicians across 40+ commercial facilities",
                "Currently active in recommissioning and optimization work, including operations supporting MacDill Air Force Base",
                "Builds and runs modern software, AI tools, CRM, and marketing systems for his own businesses",
                "Vendor-neutral — no software commissions or referral fees driving recommendations",
                "Understands both the field and the office — because he has worked in both",
              ]}
            />
            <p className="mt-6 text-xs text-navy/50 max-w-xl">
              Experience references are provided for professional background only and do not imply
              endorsement by any current or former employer or government entity.
            </p>
          </div>
          <InfoCard title="Who This Is For">
            <p className="mb-4">
              Owner-led contractor and field-service businesses with 0–15 employees in HVAC,
              plumbing, electrical, roofing, general contracting, and related trades.
            </p>
            <p>
              Based in the Tampa Bay area with remote advisory available. If you need someone who
              speaks contractor operations — not just software sales — you are in the right place.
            </p>
            <div className="mt-6">
              <GhostCTA href="/services">Explore Services</GhostCTA>
            </div>
          </InfoCard>
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
