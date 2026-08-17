/**
 * TMT service area — the single source of truth for every geographic claim on
 * the site, in schema, in content, and in outreach.
 *
 * Home base is St. Petersburg. Pinellas County is the core market: all 24
 * incorporated municipalities plus the unincorporated communities, per
 * https://pinellas.gov/municipalities-and-cities/. Hillsborough and Pasco are
 * the expansion ring.
 *
 * PAGE POLICY — read before adding a route:
 *   Thin near-duplicate pages for every town are doorway pages and get
 *   discounted. Build strong pages only for `tier: 1` markets. Every other
 *   place is named on the Pinellas County service-area page and in schema.
 *   Presence in this file is NOT a reason to create a page.
 */

export type Place = {
  name: string;
  /** Only set for tier 1 — a place with its own real page. */
  slug?: string;
  county: "Pinellas" | "Hillsborough" | "Pasco";
  /** 1 = own page. 2 = named in copy and schema only. */
  tier: 1 | 2;
  /** Unincorporated community rather than an incorporated municipality. */
  unincorporated?: true;
};

export const PRIMARY_COUNTY = "Pinellas County";
export const COUNTIES = ["Pinellas", "Hillsborough", "Pasco"] as const;

/**
 * Lead with these in copy, in the Google Business Profile service area, and
 * anywhere a shortened list is needed. Highest-value broad markets first.
 */
export const LEAD_MARKETS = [
  "St. Petersburg",
  "Clearwater",
  "Largo",
  "Pinellas Park",
  "Seminole",
  "Dunedin",
  "Palm Harbor",
  "Safety Harbor",
  "Oldsmar",
  "Tarpon Springs",
  "Gulfport",
] as const;

export const PLACES: Place[] = [
  // --- Pinellas County — 24 incorporated municipalities --------------------
  { name: "St. Petersburg", slug: "st-petersburg", county: "Pinellas", tier: 1 },
  { name: "Clearwater", slug: "clearwater", county: "Pinellas", tier: 1 },
  { name: "Largo", slug: "largo", county: "Pinellas", tier: 1 },
  { name: "Pinellas Park", slug: "pinellas-park", county: "Pinellas", tier: 1 },
  { name: "Seminole", county: "Pinellas", tier: 2 },
  { name: "Dunedin", county: "Pinellas", tier: 2 },
  { name: "Safety Harbor", county: "Pinellas", tier: 2 },
  { name: "Oldsmar", county: "Pinellas", tier: 2 },
  { name: "Tarpon Springs", county: "Pinellas", tier: 2 },
  { name: "Gulfport", county: "Pinellas", tier: 2 },
  { name: "South Pasadena", county: "Pinellas", tier: 2 },
  { name: "Kenneth City", county: "Pinellas", tier: 2 },
  { name: "Belleair", county: "Pinellas", tier: 2 },
  { name: "Belleair Beach", county: "Pinellas", tier: 2 },
  { name: "Belleair Bluffs", county: "Pinellas", tier: 2 },
  { name: "Belleair Shore", county: "Pinellas", tier: 2 },
  { name: "Indian Rocks Beach", county: "Pinellas", tier: 2 },
  { name: "Indian Shores", county: "Pinellas", tier: 2 },
  { name: "Madeira Beach", county: "Pinellas", tier: 2 },
  { name: "North Redington Beach", county: "Pinellas", tier: 2 },
  { name: "Redington Beach", county: "Pinellas", tier: 2 },
  { name: "Redington Shores", county: "Pinellas", tier: 2 },
  { name: "St. Pete Beach", county: "Pinellas", tier: 2 },
  { name: "Treasure Island", county: "Pinellas", tier: 2 },

  // --- Pinellas County — unincorporated communities ------------------------
  { name: "Palm Harbor", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "East Lake", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "Highland Lakes", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "Crystal Beach", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "Ozona", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "Greenbriar", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "Lealman", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "Feather Sound", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "High Point", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "Harbor Bluffs", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "Ridgecrest", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "Bardmoor", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "Gandy", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "Bay Pines", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "Bear Creek", county: "Pinellas", tier: 2, unincorporated: true },
  { name: "Tierra Verde", county: "Pinellas", tier: 2, unincorporated: true },

  // --- Hillsborough County — 3 incorporated municipalities ------------------
  // Hillsborough has only three cities. Everything else below is
  // unincorporated, which is where most of the county's contractors are.
  { name: "Tampa", slug: "tampa", county: "Hillsborough", tier: 1 },
  { name: "Temple Terrace", county: "Hillsborough", tier: 2 },
  { name: "Plant City", county: "Hillsborough", tier: 2 },

  // --- Hillsborough County — unincorporated communities --------------------
  { name: "Brandon", slug: "brandon", county: "Hillsborough", tier: 1, unincorporated: true },
  { name: "Riverview", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Valrico", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Lithia", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "FishHawk", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Bloomingdale", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Seffner", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Dover", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Mango", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Thonotosassa", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Lutz", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Carrollwood", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Northdale", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Cheval", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Citrus Park", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Westchase", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Town N Country", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Egypt Lake-Leto", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Apollo Beach", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Ruskin", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Sun City Center", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Gibsonton", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Wimauma", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Balm", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Palm River-Clair Mel", county: "Hillsborough", tier: 2, unincorporated: true },
  { name: "Progress Village", county: "Hillsborough", tier: 2, unincorporated: true },

  // --- Pasco County — the northern ring ------------------------------------
  { name: "New Port Richey", county: "Pasco", tier: 2 },
  { name: "Trinity", county: "Pasco", tier: 2 },
  // Tier 1 (own page) as of 2026-08-16 — real content built for
  // /locations/wesley-chapel, not a doorway page. See LOCATION_FAQS.
  { name: "Wesley Chapel", slug: "wesley-chapel", county: "Pasco", tier: 1 },
  { name: "Land O Lakes", county: "Pasco", tier: 2 },
];

export const TIER_1 = PLACES.filter((p) => p.tier === 1);

export const PINELLAS = PLACES.filter((p) => p.county === "Pinellas");
export const PINELLAS_CITIES = PINELLAS.filter((p) => !p.unincorporated);
export const PINELLAS_UNINCORPORATED = PINELLAS.filter((p) => p.unincorporated);

export const HILLSBOROUGH = PLACES.filter((p) => p.county === "Hillsborough");
export const HILLSBOROUGH_CITIES = HILLSBOROUGH.filter((p) => !p.unincorporated);
export const HILLSBOROUGH_UNINCORPORATED = HILLSBOROUGH.filter(
  (p) => p.unincorporated,
);

/** Hillsborough equivalent of LEAD_MARKETS. Highest-value first. */
export const HILLSBOROUGH_LEAD_MARKETS = [
  "Tampa",
  "Brandon",
  "Riverview",
  "Valrico",
  "Temple Terrace",
  "Plant City",
  "Lutz",
  "Carrollwood",
  "Westchase",
  "Apollo Beach",
  "Sun City Center",
] as const;

export const placesIn = (county: Place["county"]) =>
  PLACES.filter((p) => p.county === county).map((p) => p.name);

/** Every place name plus the counties — for schema areaServed and llms.txt. */
export const ALL_PLACE_NAMES = [
  ...PLACES.map((p) => p.name),
  "Pinellas County",
  "Hillsborough County",
  "Pasco County",
  "Tampa Bay",
];

/** "St. Petersburg, Clearwater, Largo, Pinellas Park and Seminole" */
export const leadMarketPhrase = (count = 5) => {
  const list = LEAD_MARKETS.slice(0, count);
  return `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}`;
};
