/**
 * JSON-LD structured data for TMT.
 *
 * This is the machine-readable layer: it is what search engines, answer engines
 * (AI Overviews, Perplexity) and LLM crawlers read to decide whether TMT is a
 * real entity worth citing, and which market it serves.
 *
 * Every claim here must be independently verifiable on the site. Never assert a
 * credential, review, or rating that isn't published and true.
 */

import { ALL_PLACE_NAMES, TIER_1 } from "./geo";

/**
 * Canonical host is www. The site serves at www, so canonicals, sitemap and
 * schema must all agree with it — a mismatch splits ranking signals between
 * two hosts. The apex domain should 301 to www in the Vercel domain settings.
 */
export const SITE_URL = "https://www.themoderntradesmentor.com";

export const NAP = {
  legalName: "The Modern Trades Mentor LLC",
  name: "The Modern Trades Mentor",
  phone: "+1-727-600-3425",
  phoneDisplay: "(727) 600-3425",
  email: "Richard@TheModernTradesMentor.com",
  /**
   * Mailing address only. Deliberately NOT emitted as `streetAddress` in
   * business schema — TMT is a service-area business, and a PO Box cannot
   * verify a Google Business Profile. It stays on the legal pages, which
   * legitimately need a contactable mailing address.
   */
  poBox: "PO Box 66093",
  city: "St. Petersburg",
  region: "FL",
  postalCode: "33767",
  country: "US",
} as const;

export {
  PLACES,
  TIER_1,
  PINELLAS,
  PINELLAS_CITIES,
  PINELLAS_UNINCORPORATED,
  HILLSBOROUGH,
  HILLSBOROUGH_CITIES,
  HILLSBOROUGH_UNINCORPORATED,
  LEAD_MARKETS,
  HILLSBOROUGH_LEAD_MARKETS,
  ALL_PLACE_NAMES,
  PRIMARY_COUNTY,
} from "./geo";

const id = (fragment: string) => `${SITE_URL}/#${fragment}`;

/**
 * Richard as a distinct entity. This is the most important object on the site
 * for answer engines — the differentiator is a person with verifiable trade
 * experience, not a consultancy. `knowsAbout` is what gets him surfaced as an
 * expert on a topic rather than a vendor with a page about it.
 */
export function personSchema() {
  return {
    "@type": "Person",
    "@id": id("richard"),
    name: "Richard Fritzke",
    jobTitle: "Founder & Principal Consultant",
    telephone: NAP.phone,
    email: NAP.email,
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/richard-portrait.png`,
    worksFor: { "@id": id("organization") },
    /**
     * `sameAs` on a Person must list profiles that ARE this person. Google's
     * entity graph already knows Richard from his personal LinkedIn — this is
     * what welds that known entity to this site.
     *
     * Person-level profiles only. Business channels belong on the Organization
     * (see `organizationSchema`), because `sameAs` asserts entity identity and
     * mixing the two levels muddies who Google thinks is who.
     */
    sameAs: ["https://www.linkedin.com/in/richard-fritzke-178b25205"],
    /**
     * Real, verifiable credentials only. These are the strongest trust signal
     * on the site — a named person with licences that can be checked. Never add
     * one here that Richard cannot produce documentation for.
     */
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "ICC Master Mechanical License",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "EPA Universal Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Associate Degree, HVAC/R",
        educationalLevel: "Associate Degree",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Redstone College",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "OSHA 30-Hour Safety Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "MSHA Certification",
      },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Redstone College",
    },
    knowsAbout: [
      "HVAC operations",
      "Facilities management",
      "Field service management software",
      "Contractor technology selection",
      "Artificial intelligence adoption for small businesses",
      "Service business process improvement",
      "Technician training",
    ],
  };
}

/**
 * ProfessionalService rather than plain LocalBusiness: it is the closest type
 * for consulting, and it inherits LocalBusiness so local packs still read it.
 *
 * NOTE: the address is a PO Box. That is correct and verifiable for schema, but
 * a PO Box cannot be used to verify a Google Business Profile — GBP needs a
 * service-area setup with a real address that stays hidden. See the SEO plan.
 */
export function organizationSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": id("organization"),
    name: NAP.name,
    legalName: NAP.legalName,
    url: SITE_URL,
    telephone: NAP.phone,
    logo: `${SITE_URL}/logo-full.png`,
    image: `${SITE_URL}/logo-banner.png`,
    priceRange: "$$",
    founder: { "@id": id("richard") },
    email: NAP.email,
    /**
     * No `address` object at all — deliberate.
     *
     * TMT is a service-area business whose only mailing address is a PO Box,
     * which cannot verify a Google Business Profile. The ZIP is confirmed as
     * 33767 (owner, 2026-08-09) — the omission here is about the PO Box, not
     * about uncertainty.
     *
     * Location is instead expressed through `areaServed`, phone, email, URL and
     * on-page text. The mailing address stays on the legal pages, which need a
     * contactable address. Do not re-add this without resolving the ZIP first.
     */
    areaServed: ALL_PLACE_NAMES.map((name) => ({
      "@type":
        name.endsWith("County") || name === "Tampa Bay"
          ? "AdministrativeArea"
          : "City",
      name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Tampa Bay, Florida",
      },
    })),
    /**
     * TMT's own channels. Porchlight Club is TMT's top-of-funnel YouTube arm
     * (confirmed by the owner 2026-08-09), not a separate brand — so it belongs
     * here and should match what is listed on the Google Business Profile.
     * Keep these two in sync; a mismatch between site schema and GBP is a
     * conflicting signal about who the business is.
     */
    sameAs: [
      "https://www.linkedin.com/company/the-modern-trades-mentor-llc/",
      "https://www.facebook.com/profile.php?id=61592848241796",
      "https://www.youtube.com/@Porchlight_Club",
    ],
    knowsAbout: personSchema().knowsAbout,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": id("website"),
    url: SITE_URL,
    name: NAP.name,
    publisher: { "@id": id("organization") },
    inLanguage: "en-US",
  };
}

/** Sitewide graph. Rendered once in the frontend layout. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), personSchema(), websiteSchema()],
  };
}

type ServiceInput = {
  name: string;
  description: string;
  slug: string;
  /** Optional city name for a market-specific service page. */
  city?: string;
};

export function serviceSchema({ name, description, slug, city }: ServiceInput) {
  const area = city
    ? [{ "@type": "City", name: city }]
    : TIER_1.map((t) => ({ "@type": "City", name: t.name }));

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${slug}#service`,
    name,
    description,
    serviceType: name,
    url: `${SITE_URL}${slug}`,
    provider: { "@id": id("organization") },
    areaServed: area,
    audience: {
      "@type": "BusinessAudience",
      name: "Owner-led contracting and service businesses with 5-30 employees",
    },
  };
}

/**
 * FAQPage is the highest-leverage schema for answer engines: it is the format
 * they lift answers from most readily. Answers must be complete on their own —
 * an answer that only makes sense after reading the page around it will not be
 * quoted.
 */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/**
 * Article schema. Author is always the real named person — that is the whole
 * point of publishing under Richard rather than a faceless brand, and it ties
 * each post back to the Person entity Google already knows.
 */
export function articleSchema({
  headline,
  description,
  slug,
  published,
  updated,
}: {
  headline: string;
  description: string;
  slug: string;
  published: string;
  updated: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}${slug}#article`,
    headline,
    description,
    datePublished: published,
    dateModified: updated,
    author: { "@id": id("richard") },
    publisher: { "@id": id("organization") },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${slug}` },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: step.name,
      item: `${SITE_URL}${step.path}`,
    })),
  };
}
