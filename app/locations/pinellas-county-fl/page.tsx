import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  ContentSection,
  InfoCard,
  CtaBand,
} from "@/components/PageChrome";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { PINELLAS_COUNTY_FAQS } from "@/lib/seo/faqs";
import { PINELLAS_CITIES, PINELLAS_UNINCORPORATED } from "@/lib/seo/geo";

export const metadata: Metadata = {
  title: "AI Consulting in Pinellas County, FL",
  description:
    "AI consulting, automation, CRM and workflow guidance for contractors and small service businesses across Pinellas County, FL — St. Petersburg, Clearwater, Largo, Pinellas Park, Seminole, Dunedin, Palm Harbor and every city in the county.",
  alternates: { canonical: "/locations/pinellas-county-fl" },
};

/**
 * Pages that exist for real. Every other place in the county is named on this
 * page and in schema, but does NOT get a thin near-duplicate page of its own.
 */
const CITY_PAGES: Record<string, string> = {
  "St. Petersburg": "/locations/st-petersburg",
  Clearwater: "/locations/clearwater",
};

const northCounty = [
  "Tarpon Springs",
  "Palm Harbor",
  "East Lake",
  "Oldsmar",
  "Safety Harbor",
  "Dunedin",
  "Crystal Beach",
  "Ozona",
  "Highland Lakes",
];

const centralCounty = [
  "Clearwater",
  "Largo",
  "Seminole",
  "Belleair",
  "Harbor Bluffs",
  "Ridgecrest",
  "Greenbriar",
  "High Point",
  "Bardmoor",
];

const southCounty = [
  "St. Petersburg",
  "Pinellas Park",
  "Gulfport",
  "South Pasadena",
  "Kenneth City",
  "Lealman",
  "Feather Sound",
  "Gandy",
  "Bay Pines",
  "Bear Creek",
  "Tierra Verde",
];

export default function PinellasCountyPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "AI Consulting and Business Technology Consulting",
          description:
            "AI consulting, AI automation, CRM consulting and workflow improvement for contractors and small service businesses throughout Pinellas County, Florida.",
          slug: "/locations/pinellas-county-fl",
        })}
      />
      <JsonLd data={faqSchema(PINELLAS_COUNTY_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/tampa-bay" },
          { name: "Pinellas County", path: "/locations/pinellas-county-fl" },
        ])}
      />

      <PageHero
        eyebrow="Pinellas County, FL"
        title="AI Consulting in Pinellas County, FL"
        description="AI consulting, automation, CRM and workflow guidance for contractors and small service businesses across all of Pinellas County. Based in St. Petersburg, on site countywide."
        primaryCta={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondaryCta={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />

      <ContentSection>
        <div className="max-w-3xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
            One county, three very different operating problems
          </h2>
          <p className="mt-5 text-navy/75 leading-relaxed">
            Pinellas is narrow, dense, and
            {" "}<abbr title="approximately">~</abbr>38 miles end to end with a
            handful of ways across. That geography decides more about a service
            business here than any software feature does. How the board is built
            in the morning sets how many calls a truck turns by five.
          </p>
          <p className="mt-4 text-navy/75 leading-relaxed">
            North county runs long drives and older housing stock. Central is
            where most of the commercial and multi-family work sits. South is
            the densest, with the tightest routes and the most walk-in-scale
            residential volume. A shop working all three is really running three
            different dispatch problems, which is why a scheduling tool that
            works for one crew can fall apart for the next.
          </p>
          <p className="mt-4 text-navy/75 leading-relaxed">
            I am based in St. Petersburg and the work happens in your shop, not
            over video — because how the office actually runs on a Tuesday is
            the thing worth seeing.
          </p>
        </div>
      </ContentSection>

      <ContentSection dark>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
          Coverage by area
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <InfoCard dark title="North County">
            {northCounty.join(" · ")}
          </InfoCard>
          <InfoCard dark title="Central County">
            {centralCounty.join(" · ")}
          </InfoCard>
          <InfoCard dark title="South County">
            {southCounty.join(" · ")}
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-4xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
            Every city and town in Pinellas County
          </h2>
          <p className="mt-4 text-navy/70 leading-relaxed">
            All {PINELLAS_CITIES.length} incorporated municipalities in the
            county, and the unincorporated communities alongside them.
          </p>

          <h3 className="mt-8 font-display font-semibold text-lg text-navy">
            Cities and towns
          </h3>
          <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 text-sm text-navy/75">
            {PINELLAS_CITIES.map((place) => (
              <li key={place.name} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-blue" />
                {CITY_PAGES[place.name] ? (
                  <Link
                    href={CITY_PAGES[place.name]}
                    className="text-blue hover:underline"
                  >
                    {place.name}
                  </Link>
                ) : (
                  place.name
                )}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-display font-semibold text-lg text-navy">
            Unincorporated communities
          </h3>
          <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 text-sm text-navy/75">
            {PINELLAS_UNINCORPORATED.map((place) => (
              <li key={place.name} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-blue" />
                {place.name}
              </li>
            ))}
          </ul>
        </div>
      </ContentSection>

      <ContentSection dark>
        <div className="max-w-3xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            What the work looks like here
          </h2>
          <p className="mt-5 text-silver-light/85 leading-relaxed">
            Every engagement starts the same way: a free shop visit, then a
            readiness audit that looks at how the business actually runs before
            any tool gets named. Dispatch, job close-out, where pricing comes
            from, what happens to a call nobody answers, and who chases
            estimates that did not close.
          </p>
          <p className="mt-4 text-silver-light/85 leading-relaxed">
            No software licenses are sold here and no custom systems are built.
            Recommendations are vendor-neutral — the point is what fits your
            shop.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/ai-consulting-st-petersburg-fl" className="text-blue-light hover:underline">
              AI Consulting in St. Petersburg
            </Link>
            <Link href="/locations/tampa" className="text-blue-light hover:underline">
              Tampa &amp; Hillsborough County
            </Link>
            <Link href="/services/technology-audit" className="text-blue-light hover:underline">
              Technology &amp; AI Readiness Audit
            </Link>
            <Link href="/services/software-selection" className="text-blue-light hover:underline">
              Software Selection
            </Link>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
          Common questions
        </h2>
        <div className="mt-8 max-w-3xl space-y-7">
          {PINELLAS_COUNTY_FAQS.map((faq) => (
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
        headline="Book a shop visit anywhere in Pinellas County"
        body="Free, no obligation, and it happens at your place. Call or text 727-600-3425."
        primary={{ label: "Book a Shop Visit", href: "/book-a-strategy-call#schedule" }}
        secondary={{ label: "Call 727-600-3425", href: "tel:+17276003425" }}
      />
    </>
  );
}
