import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  ContentSection,
  InfoCard,
  CtaBand,
} from "@/components/PageChrome";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, NAP } from "@/lib/seo/schema";
import { HILLSBOROUGH_COUNTY_FAQS } from "@/lib/seo/faqs";
import {
  HILLSBOROUGH_CITIES,
  HILLSBOROUGH_UNINCORPORATED,
} from "@/lib/seo/geo";

export const metadata: Metadata = {
  title: "AI Consulting in Hillsborough County, FL",
  description:
    "AI consulting, automation, CRM and workflow guidance for contractors and small service businesses across Hillsborough County, FL — Tampa, Brandon, Riverview, Valrico, Temple Terrace, Plant City and the surrounding communities.",
  alternates: { canonical: "/locations/hillsborough-county-fl" },
};

/** Only places with a real page of their own get linked. */
const CITY_PAGES: Record<string, string> = {
  Tampa: "/locations/tampa",
};

export default function HillsboroughCountyPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "AI Consulting and Business Technology Consulting",
          description:
            "AI consulting, AI automation, CRM consulting and workflow improvement for contractors and small service businesses throughout Hillsborough County, Florida.",
          slug: "/locations/hillsborough-county-fl",
        })}
      />
      <JsonLd data={faqSchema(HILLSBOROUGH_COUNTY_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/tampa-bay" },
          {
            name: "Hillsborough County",
            path: "/locations/hillsborough-county-fl",
          },
        ])}
      />

      <PageHero
        eyebrow="Hillsborough County, FL"
        title="AI Consulting in Hillsborough County, FL"
        description="AI consulting, automation, CRM and workflow guidance for contractors and small service businesses across Tampa and Hillsborough County. Based in St. Petersburg, on site across the bay."
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "Call (727) 600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
            A bigger county breaks scheduling sooner
          </h2>
          <p className="mt-5 leading-relaxed text-navy/75">
            Hillsborough is several times the size of Pinellas, and only three
            of its communities are incorporated — Tampa, Temple Terrace and
            Plant City. Most of the county, and most of its contractors, sit in
            unincorporated areas like Brandon, Riverview, Valrico, Lutz and
            Citrus Park.
          </p>
          <p className="mt-4 leading-relaxed text-navy/75">
            That geography changes the operating problem. Crews cover longer
            distances between calls, so a scheduling approach that works fine
            for a tight Pinellas route falls apart here. Shops in Hillsborough
            tend to add trucks and office staff earlier, which means dispatch
            and job close-out become real problems at a smaller headcount than
            most owners expect.
          </p>
          <p className="mt-4 leading-relaxed text-navy/75">
            Permitting differs from Pinellas as well, and the incorporated
            cities add their own. A shop working both sides of the bay is
            carrying two sets of process — worth sorting out before choosing
            software that assumes one.
          </p>
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="max-w-4xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            Where we work in Hillsborough County
          </h2>

          <h3 className="mt-8 font-display font-semibold text-lg text-white">
            Cities
          </h3>
          <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3 text-silver-light/85">
            {HILLSBOROUGH_CITIES.map((place) => (
              <li key={place.name} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-blue" />
                {CITY_PAGES[place.name] ? (
                  <Link
                    href={CITY_PAGES[place.name]}
                    className="text-blue-light hover:underline"
                  >
                    {place.name}
                  </Link>
                ) : (
                  place.name
                )}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-display font-semibold text-lg text-white">
            Communities and unincorporated areas
          </h3>
          <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3 text-silver-light/85">
            {HILLSBOROUGH_UNINCORPORATED.map((place) => (
              <li key={place.name} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-blue" />
                {place.name}
              </li>
            ))}
          </ul>
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
          How the work goes
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="1. Shop visit">
            Free, no obligation, at your place. Richard travels to you.
          </InfoCard>
          <InfoCard title="2. Readiness audit">
            Where the business is losing money and time, before any tool is named.
          </InfoCard>
          <InfoCard title="3. Recommendation">
            What to fix by hand, what to buy, what to skip, and in what order.
          </InfoCard>
          <InfoCard title="4. Training">
            Office and field, on the workflows they will actually touch.
          </InfoCard>
        </div>
        <p className="mt-8 max-w-3xl text-navy/75 leading-relaxed">
          No software licenses are sold here and no commission is taken from any
          vendor. The recommendation is whatever fits your shop.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/locations/tampa" className="text-blue hover:underline">
            Tampa
          </Link>
          <Link href="/locations/pinellas-county-fl" className="text-blue hover:underline">
            Pinellas County
          </Link>
          <Link href="/ai-automation" className="text-blue hover:underline">
            AI Automation
          </Link>
          <Link href="/crm-workflow-consulting" className="text-blue hover:underline">
            CRM &amp; Workflow Consulting
          </Link>
        </div>
      </ContentSection>

      <ContentSection dark>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
          Common questions
        </h2>
        <div className="mt-8 max-w-3xl space-y-7">
          {HILLSBOROUGH_COUNTY_FAQS.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-display font-semibold text-lg text-white">
                {faq.question}
              </h3>
              <p className="mt-2.5 leading-relaxed text-silver-light/85">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-silver-light/75">
          Call or text {NAP.phoneDisplay} ·{" "}
          <a href={`mailto:${NAP.email}`} className="text-blue-light hover:underline">
            {NAP.email}
          </a>
        </p>
      </ContentSection>

      <CtaBand
        headline="Book a shop visit anywhere in Hillsborough County"
        body="Free, no obligation, at your place. Call or text (727) 600-3425."
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call (727) 600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
