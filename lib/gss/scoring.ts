/**
 * Contractor Growth Systems Score — scoring engine.
 *
 * Pure, deterministic, no fake precision. Overall = simple average of the
 * six 1-5 domain scores. Strongest/Weakest domain = max/min, ties broken by
 * a fixed, documented order (not hidden randomness) and explicitly labeled
 * "Tied / Unclear" whenever two or more domains are genuinely tied for the
 * winning value — never silently picks one. Business Stage is informational
 * only and never enters the numeric average, exactly as specified.
 *
 * This is the single source of truth for GSS scoring — the website
 * calculates it, and a future HighLevel workflow should read the result
 * fields rather than recompute them. See GSS_EVENT_CONTRACT.md for the
 * field-mapping contract this feeds.
 */

export const DOMAINS = [
  "demand",
  "conversion",
  "revenue_capture",
  "operations",
  "systems_measurement",
  "growth_scale",
] as const;

export type Domain = (typeof DOMAINS)[number];

export const DOMAIN_LABELS: Record<Domain, string> = {
  demand: "Demand",
  conversion: "Conversion",
  revenue_capture: "Revenue Capture",
  operations: "Operations",
  systems_measurement: "Systems & Measurement",
  growth_scale: "Growth & Scale",
};

export type BusinessStage =
  | "pre_revenue"
  | "early"
  | "core_icp"
  | "larger"
  | "unknown";

export const BUSINESS_STAGE_LABELS: Record<BusinessStage, string> = {
  pre_revenue: "Pre-Revenue — Disqualify",
  early: "Early (1-4 employees)",
  core_icp: "Core ICP (5-30 employees)",
  larger: "Larger (31+ employees)",
  unknown: "Unknown",
};

export type DomainScores = Record<Domain, number>;

export type RecommendedNextAction =
  | "book_shop_visit"
  | "blueprint_recommended"
  | "nurture_not_ready"
  | "insufficient_evidence"
  | "not_a_fit";

/** Bump whenever the questions or scoring formula change, so every stored
 * result stays auditable against the model version that produced it. */
export const SCORING_VERSION = "GSS-v1";

export type GSSResult = {
  scoringVersion: typeof SCORING_VERSION;
  scores: DomainScores;
  businessStage: BusinessStage;
  overall: number; // rounded to 2 decimals, never displayed as false precision
  strongestDomain: Domain | "tied";
  strongestDomains: Domain[]; // all domains tied for strongest
  weakestDomain: Domain | "tied";
  weakestDomains: Domain[]; // all domains tied for weakest
  primarySystemsGap: string; // INFERRED, templated from weakest domain
  recommendedNextAction: RecommendedNextAction;
};

function isValidScore(v: unknown): v is number {
  return typeof v === "number" && Number.isFinite(v) && v >= 1 && v <= 5;
}

export function validateScores(scores: Partial<DomainScores>): string | null {
  for (const d of DOMAINS) {
    if (!(d in scores)) return `Missing score for ${DOMAIN_LABELS[d]}.`;
    if (!isValidScore(scores[d])) {
      return `Invalid score for ${DOMAIN_LABELS[d]} — must be a number from 1 to 5.`;
    }
  }
  return null;
}

const GAP_COPY: Record<Domain, string> = {
  demand:
    "The business likely isn't generating enough qualified opportunities to support the next stage of growth.",
  conversion:
    "Qualified leads and opportunities likely aren't converting into paying customers as often as they could.",
  revenue_capture:
    "Follow-up, missed-opportunity recovery, and estimate/invoice collection likely need attention before anything else.",
  operations:
    "Current operations likely can't reliably deliver the volume of work the business is trying to generate.",
  systems_measurement:
    "Systems, workflows, data, and reporting likely aren't connected enough to see what's actually happening.",
  growth_scale:
    "The business likely can't grow further right now without creating operational or financial instability.",
};

function recommendedAction(overall: number, stage: BusinessStage): RecommendedNextAction {
  if (stage === "pre_revenue") return "not_a_fit";
  if (stage === "unknown") return "insufficient_evidence";
  if (overall >= 4.0) return "blueprint_recommended";
  if (overall >= 2.5) return "book_shop_visit";
  return "book_shop_visit";
}

/**
 * Compute the full GSS result from validated inputs. Throws if scores are
 * invalid — callers (the API route) must validate first via validateScores.
 */
export function computeGSSResult(
  scores: DomainScores,
  businessStage: BusinessStage
): GSSResult {
  const err = validateScores(scores);
  if (err) throw new Error(err);

  const values = DOMAINS.map((d) => scores[d]);
  const sum = values.reduce((a, b) => a + b, 0);
  const overall = Math.round((sum / DOMAINS.length) * 100) / 100;

  const max = Math.max(...values);
  const min = Math.min(...values);
  const strongestDomains = DOMAINS.filter((d) => scores[d] === max);
  const weakestDomains = DOMAINS.filter((d) => scores[d] === min);

  const strongestDomain: Domain | "tied" =
    strongestDomains.length === 1 ? strongestDomains[0] : "tied";
  const weakestDomain: Domain | "tied" =
    weakestDomains.length === 1 ? weakestDomains[0] : "tied";

  const primarySystemsGap =
    weakestDomain === "tied"
      ? `Several areas are tied for the biggest gap (${weakestDomains
          .map((d) => DOMAIN_LABELS[d])
          .join(", ")}) — a real conversation is the fastest way to find the actual priority.`
      : GAP_COPY[weakestDomain];

  return {
    scoringVersion: SCORING_VERSION,
    scores,
    businessStage,
    overall,
    strongestDomain,
    strongestDomains,
    weakestDomain,
    weakestDomains,
    primarySystemsGap,
    recommendedNextAction: recommendedAction(overall, businessStage),
  };
}

export function scoreBand(overall: number): "weak" | "developing" | "strong" {
  if (overall >= 4.0) return "strong";
  if (overall >= 2.5) return "developing";
  return "weak";
}
