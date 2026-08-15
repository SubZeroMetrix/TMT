import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  ContentSection,
  InfoCard,
  BulletList,
  CtaBand,
} from "@/components/PageChrome";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, NAP } from "@/lib/seo/schema";
import { CRM_WORKFLOW_FAQS } from "@/lib/seo/faqs";

export const metadata: Metadata = {
  title: "CRM & Workflow Consulting for Contractors | St. Petersburg & Tampa",
  description:
    "CRM consulting and workflow automation consulting for contractors and small service businesses in St. Petersburg, Tampa and across Pinellas and Hillsborough counties. Vendor-neutral help choosing and setting up field service software.",
  alternates: { canonical: "/crm-workflow-consulting" },
};

const problems = [
  "The same customer information gets typed into three different places",
  "Nobody owns tomorrow's schedule, or two people both think they do",
  "Estimates go out and nobody chases the ones that went quiet",
  "Techs close out jobs on Friday for work done Monday",
  "Pricing lives in someone's head instead of a written pricebook",
  "You pay for software the team quietly works around",
];

const reviewed = [
  "The path from inbound call to booked job to closed ticket to paid invoice",
  "Who builds the dispatch board, when, and what they look at while doing it",
  "How a technician documents work, and whether the office can bill from it",
  "Where quotes and proposals come from, and who follows up on them",
  "Maintenance agreement tracking and renewal follow-up",
  "The office-to-field handoff, in both directions",
  "What reporting the owner actually looks at to make decisions",
];

const engagement = [
  {
    title: "1. Shop visit",
    body: "Free and on site. How the office runs on an ordinary Tuesday is the thing worth seeing, and it does not show up on a video call.",
  },
  {
    title: "2. Workflow mapping",
    body: "The real path information takes through your business — including the steps nobody wrote down and the spreadsheet still running alongside the software.",
  },
  {
    title: "3. Fit assessment",
    body: "Whether your current system can do the job once the process is fixed, or whether it genuinely needs replacing. Often it is the former.",
  },
  {
    title: "4. Selection or setup",
    body: "If a change is warranted, a specific recommendation with the reason it fits your size and budget — then help configuring it and training the people who use it.",
  },
];

export default function CrmWorkflowConsultingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "CRM and Workflow Consulting",
          description:
            "CRM consulting and workflow automation consulting for contractors and small service businesses — mapping how job and customer information moves, then selecting and configuring software that fits.",
          slug: "/crm-workflow-consulting",
        })}
      />
      <JsonLd data={faqSchema(CRM_WORKFLOW_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "CRM & Workflow Consulting", path: "/crm-workflow-consulting" },
        ])}
      />

      <PageHero
        eyebrow="CRM & Workflow Consulting"
        title="CRM and Workflow Consulting for Contractors"
        description="Vendor-neutral help deciding how job and customer information should move through your business — and which system actually fits it. St. Petersburg, Tampa and across Pinellas and Hillsborough counties."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "Call (727) 600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-navy/85">
            CRM and workflow consulting means defining how customer and job
            information should move through your business — from inbound call to
            booked job to closed ticket to paid invoice — and then choosing and
            setting up software that matches it. Picking the product is the
            small part. Defining the path is the work.
          </p>
          <p className="mt-4 leading-relaxed text-navy/75">
            This is for owner-led contracting and service businesses in St. Petersburg, Tampa and the
            surrounding counties. No software licenses are sold here and no
            commission is taken from any vendor — the recommendation is whatever
            fits your shop.
          </p>
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display font-bold text-2xl text-white tracking-tight">
              Problems this fixes
            </h2>
            <div className="mt-6">
              <BulletList items={problems} dark />
            </div>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-white tracking-tight">
              Workflows reviewed
            </h2>
            <div className="mt-6">
              <BulletList items={reviewed} dark />
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
          What the engagement looks like
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {engagement.map((step) => (
            <InfoCard key={step.title} title={step.title}>
              {step.body}
            </InfoCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="max-w-3xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            On field service platforms specifically
          </h2>
          <p className="mt-5 leading-relaxed text-silver-light/85">
            ServiceTitan, Jobber, Housecall Pro, FieldEdge and the rest each
            assume a different amount of process already exists. A shop that
            buys a platform assuming a written pricebook, a dedicated
            dispatcher, and a disciplined close-out habit — when it has none of
            those — will use a fraction of what it pays for, and will blame the
            software for a problem the software was never able to fix.
          </p>
          <p className="mt-4 leading-relaxed text-silver-light/85">
            That is why the process work comes before the product decision, and
            why the honest answer is sometimes that you should keep what you
            have.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/services/software-selection" className="text-blue-light hover:underline">
              Software Selection
            </Link>
            <Link href="/ai-automation" className="text-blue-light hover:underline">
              AI Automation
            </Link>
            <Link href="/services/technology-audit" className="text-blue-light hover:underline">
              Technology &amp; AI Readiness Audit
            </Link>
            <Link href="/locations/pinellas-county-fl" className="text-blue-light hover:underline">
              Pinellas County
            </Link>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
          Common questions
        </h2>
        <div className="mt-8 max-w-3xl space-y-7">
          {CRM_WORKFLOW_FAQS.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-display font-semibold text-lg text-navy">
                {faq.question}
              </h3>
              <p className="mt-2.5 leading-relaxed text-navy/70">{faq.answer}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-navy/70">
          Call or text {NAP.phoneDisplay} ·{" "}
          <a href={`mailto:${NAP.email}`} className="text-blue hover:underline">
            {NAP.email}
          </a>
          . Richard travels to your location across Pinellas and Hillsborough
          counties.
        </p>
      </ContentSection>

      <CtaBand
        headline="Find out whether it is the software or the workflow"
        body="A free shop visit will tell you which one you are actually dealing with — usually before anything gets bought."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call (727) 600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
