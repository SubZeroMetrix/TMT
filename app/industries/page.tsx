import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  InfoCard,
  CtaBand,
} from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Vendor-neutral technology and AI guidance for HVAC, plumbing, electrical, roofing, general contracting, handyman, landscaping, painting, cleaning, and solar contractors.",
  alternates: { canonical: "/industries" },
};

const industries = [
  {
    name: "HVAC",
    help: "Dispatch and maintenance-agreement workflows, technician documentation, estimating support, CRM and follow-up gaps, and practical AI for call handling and SOP development — grounded in 26+ years of HVAC/R operations experience.",
  },
  {
    name: "Plumbing",
    help: "Scheduling and emergency-call routing, estimate-to-invoice handoffs, customer communication systems, and software selection that fits how your plumbers actually work in the field.",
  },
  {
    name: "Electrical",
    help: "Job tracking, permit and compliance documentation, crew scheduling, and integration between estimating, dispatch, and billing tools — without forcing a one-size-fits-all platform.",
  },
  {
    name: "Roofing",
    help: "Lead follow-up, proposal workflows, crew coordination, photo and documentation standards, and CRM adoption for sales and production teams that operate on tight seasonal cycles.",
  },
  {
    name: "General Contracting",
    help: "Project communication, subcontractor coordination, change-order tracking, and selecting tools that connect the office, field, and client without creating duplicate data entry.",
  },
  {
    name: "Handyman",
    help: "Lightweight CRM, scheduling, invoicing, and customer follow-up for owner-operators and small teams that need simplicity — not enterprise software they will never fully use.",
  },
  {
    name: "Landscaping",
    help: "Route planning, recurring service scheduling, crew management, seasonal staffing workflows, and customer retention systems that reduce manual coordination.",
  },
  {
    name: "Painting",
    help: "Estimate workflows, color and scope documentation, crew scheduling, and follow-up systems that keep production moving without overloading the office.",
  },
  {
    name: "Cleaning Services",
    help: "Recurring job scheduling, quality-check workflows, staff assignment, client communication, and reporting for residential and commercial cleaning operations.",
  },
  {
    name: "Solar",
    help: "Lead qualification, proposal and permitting workflows, installation scheduling, and CRM integration for a sales cycle that spans weeks — with careful attention to data ownership and compliance.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology Guidance for Trades & Field-Service Businesses"
        description="Owner-led contractor and field-service companies — across the trades that keep buildings, homes, and infrastructure running."
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "Explore the Audit", href: "/services/technology-audit" }}
      />

      <ContentSection>
        <p className="bp-label mb-8">How We Help by Trade</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <InfoCard key={industry.name} title={industry.name}>
              <span className="font-mono text-[10px] text-cyan-dim block mb-2">
                0{String(i + 1).padStart(2, "0")}
              </span>
              <p>{industry.help}</p>
            </InfoCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="max-w-3xl mx-auto text-center">
          <p className="bp-label mb-4">Vendor-neutral across every trade</p>
          <p className="text-silver-light/85 leading-relaxed">
            We do not sell software licenses or receive vendor commissions. Recommendations are
            based on your operation, your team, and your business problems — not a preferred
            platform or affiliate relationship.
          </p>
        </div>
      </ContentSection>

      <CtaBand
        headline="Not sure where to start?"
        body="The Technology & AI Readiness Audit gives you a structured review of your systems, workflows, and priorities — regardless of trade."
        primary={{ label: "Explore the Audit", href: "/services/technology-audit" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
