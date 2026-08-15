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
  title: "Product Development",
  description:
    "Richard Fritzke builds contractor software and AI tools for his own businesses — experience that informs vendor-neutral advisory, not a product storefront.",
  alternates: { canonical: "/product-development" },
};

const buildCategories = [
  "Contractor CRM and customer communication workflows",
  "Field-service scheduling and dispatch integrations",
  "AI-assisted documentation, follow-up, and knowledge search",
  "Marketing automation and lead-handling systems",
  "Internal operations dashboards and reporting",
  "Custom workflow tools tied to specific business processes",
];

const advisoryBenefits = [
  "Firsthand understanding of what it takes to build, deploy, and maintain contractor software",
  "Honest assessment of when off-the-shelf tools are sufficient versus when custom work makes sense",
  "Practical guidance on integration, data ownership, and long-term maintenance costs",
  "No incentive to oversell a platform — we do not sell licenses or receive vendor commissions",
  "Operator perspective on adoption, training, and what field and office staff will actually use",
];

export default function ProductDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Development"
        title="Built in the Field, Not Sold From a Shelf"
        description="Richard builds modern contractor software, AI tools, CRM, and marketing systems for his own businesses. That hands-on work informs every advisory engagement — this is not a product storefront."
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="text-lg text-navy/80 leading-relaxed">
            The Modern Trades Mentor is an advisory practice, not a software company.{" "}
            <SignatureName className="text-xl mr-1 align-baseline">Richard</SignatureName>
            Fritzke develops and operates technology for his own contractor and field-service
            businesses — which means he understands implementation from both sides: the vendor
            pitch and the daily reality of running a trades operation.
          </p>
          <p className="mt-5 text-navy/75 leading-relaxed">
            That experience shapes how we evaluate tools for clients. We can tell when a feature
            is genuinely useful, when it is marketing noise, and when a contractor would be better
            served fixing a workflow before adding another platform.
          </p>
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="max-w-3xl">
          <p className="bp-label mb-4">What Richard builds</p>
          <h2 className="font-display text-2xl font-bold text-white tracking-tight">
            Categories of work — not a product catalog
          </h2>
          <p className="mt-4 text-silver-light/85 leading-relaxed">
            Product development interest spans practical categories that support contractor
            operations. These are areas of active learning and experimentation, not named products
            for sale:
          </p>
          <div className="mt-6">
            <BulletList items={buildCategories} dark />
          </div>
          <p className="mt-6 text-sm text-silver/60 leading-relaxed">
            We do not list proprietary product names or promise future releases. When custom
            development is relevant to a client engagement, scope, ownership, and maintenance are
            discussed openly as part of the advisory relationship.
          </p>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl">
          <InfoCard title="How this informs advisory">
            <BulletList items={advisoryBenefits} />
          </InfoCard>
          <InfoCard title="What we are honest about">
            <p className="mb-4">
              Building software is hard. Maintaining it is harder. Most contractors do not need
              custom development — they need better use of existing tools, cleaner workflows, and
              staff training.
            </p>
            <p>
              When we recommend a platform or approach, it is because it fits the business — not
              because we have something to sell. We do not sell software licenses and do not receive
              vendor commissions or referral compensation.
            </p>
          </InfoCard>
        </div>
      </ContentSection>

      <CtaBand
        headline="Need help choosing the right approach?"
        body="Whether you need vendor-neutral software guidance or want to discuss whether custom work makes sense for your operation, start with a conversation."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
