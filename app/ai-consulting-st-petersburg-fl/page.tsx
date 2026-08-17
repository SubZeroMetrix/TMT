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
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { AI_CONSULTING_STPETE_FAQS } from "@/lib/seo/faqs";

export const metadata: Metadata = {
  title: "AI Consultant & IT Consultancy St. Petersburg, FL",
  description:
    "AI consulting and IT consultancy in St. Petersburg, FL for contractors — a St. Petersburg IT consultant who has run HVAC and facilities operations for 26 years, not a generic technology firm. Where AI earns its keep, where it does not, and what to fix first before buying anything.",
  alternates: { canonical: "/ai-consulting-st-petersburg-fl" },
};

const whereItWorks = [
  "Answering and routing calls after hours, so a job does not go to whoever picked up first",
  "Drafting follow-up on estimates that would otherwise sit for three weeks",
  "Summarizing long job notes into something the office can actually bill from",
  "Pulling the questions a customer asks most often into a written answer your team can reuse",
  "Reading through invoices and tickets to find work that was performed but never billed",
];

const whereItDoesNot = [
  "Anything that reaches a customer without a human reading it first",
  "Pricing — a wrong number is worse than a slow one",
  "Safety judgments, code interpretation, or anything a licensed tech signs their name to",
  "Diagnosing equipment it cannot see, touch, or gauge",
  "Replacing the person who knows why the last three callbacks happened",
];

const process = [
  {
    title: "1. The shop visit",
    body:
      "Free, no obligation, and it happens in your shop rather than over video. Most of what matters is only visible in how the office actually runs on a Tuesday.",
  },
  {
    title: "2. The readiness audit",
    body:
      "Where the business is losing money and time before a single tool is chosen. Dispatch, close-out, pricing, missed calls, and estimate follow-up.",
  },
  {
    title: "3. The recommendation",
    body:
      "What to fix by hand, what to buy, what to skip, and the order to do it in. Written down, with a reason attached to each line.",
  },
  {
    title: "4. Training",
    body:
      "The part everyone skips. Office staff and techs, on the workflows they will actually touch, until it holds without you standing over it.",
  },
];

export default function AiConsultingStPetersburgPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "AI Consulting",
          description:
            "AI consulting and business technology guidance for contractors and small service businesses in St. Petersburg, Florida.",
          slug: "/ai-consulting-st-petersburg-fl",
          city: "St. Petersburg",
        })}
      />
      <JsonLd data={faqSchema(AI_CONSULTING_STPETE_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "AI Consulting St. Petersburg",
            path: "/ai-consulting-st-petersburg-fl",
          },
        ])}
      />

      <PageHero
        eyebrow="St. Petersburg, FL"
        title="AI Consulting in St. Petersburg, Florida"
        description="AI consulting, workflow automation, CRM guidance, and business technology planning for small businesses in St. Petersburg and the Tampa Bay area."
        primaryCta={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <p className="text-lg text-navy/85 leading-relaxed">
            The Modern Trades Mentor provides AI consulting, workflow
            automation, CRM guidance, and business technology planning for small
            businesses in St. Petersburg and the Tampa Bay area. We help
            businesses identify where technology can reduce manual work, improve
            follow-up, and make day-to-day operations easier to manage.
          </p>

          <h2 className="mt-12 font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
            Practical experience, not generic technology advice
          </h2>
          <p className="mt-5 text-navy/75 leading-relaxed">
            Most AI advice is aimed at companies that look nothing like yours. A
            shop with four trucks and one person answering the phone does not
            have the same problems as a software company, and it should not be
            buying the same things.
          </p>
          <p className="mt-4 text-navy/75 leading-relaxed">
            Richard Fritzke spent 26 years in HVAC and facilities before doing
            this work — 20+ technicians supervised, 40+ facilities managed, EPA
            Universal certified. That background is why the recommendations are
            about dispatch, quoting, follow-up and office-to-field handoffs
            rather than abstract technology strategy.
          </p>
          <p className="mt-4 text-navy/75 leading-relaxed">
            No software licenses are sold here and no custom systems are built.
            The work is deciding what fits, then helping your people use it.
          </p>
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display font-bold text-2xl text-white tracking-tight">
              Where AI actually earns its keep
            </h2>
            <p className="mt-4 mb-6 text-silver-light/80 text-sm leading-relaxed">
              Narrow jobs, clear payback, low risk if it gets one wrong.
            </p>
            <BulletList items={whereItWorks} dark />
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-white tracking-tight">
              Where it does not belong
            </h2>
            <p className="mt-4 mb-6 text-silver-light/80 text-sm leading-relaxed">
              This list matters more than the first one. Getting it wrong here
              costs a customer, not a subscription fee.
            </p>
            <BulletList items={whereItDoesNot} dark />
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
          How the work goes
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {process.map((step) => (
            <InfoCard key={step.title} title={step.title}>
              {step.body}
            </InfoCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="max-w-3xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            Serving St. Petersburg and all of Pinellas County
          </h2>
          <p className="mt-5 text-silver-light/85 leading-relaxed">
            St. Petersburg is home base. The work happens on site across
            Clearwater, Largo, Pinellas Park, Dunedin, Palm Harbor, Seminole,
            Gulfport, Tarpon Springs, Safety Harbor, Oldsmar, and the beach
            communities — and across the bay in{" "}
            <Link href="/locations/tampa" className="text-blue-light hover:underline">
              Tampa
            </Link>{" "}
            and Hillsborough County.
          </p>
          <p className="mt-4 text-silver-light/85 leading-relaxed">
            Local matters here for a specific reason. Drive time in a county
            this narrow decides how many calls a truck turns in a day, and the
            summer peak decides whether you keep the ones you booked. Both are
            dispatch problems before they are software problems.
          </p>
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
          Common questions
        </h2>
        <div className="mt-8 max-w-3xl space-y-7">
          {AI_CONSULTING_STPETE_FAQS.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-display font-semibold text-lg text-navy">
                {faq.question}
              </h3>
              <p className="mt-2.5 text-navy/70 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <CtaBand
        headline="Start with a shop visit"
        body="No pitch, no obligation. An hour in your shop and you will get a straight answer on whether any of this is worth your money right now."
        primary={{ label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
