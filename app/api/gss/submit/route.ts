import { NextResponse } from "next/server";
import { computeGSSResult, validateScores, type BusinessStage, type DomainScores } from "@/lib/gss/scoring";
import { DOMAIN_LABELS, DOMAINS } from "@/lib/gss/scoring";

/**
 * GSS submission intake.
 *
 * Scoring happens here (server-side), not in HighLevel — this is the
 * canonical GSS scoring engine per GSS_EVENT_CONTRACT.md. The result is
 * always returned to the caller so the diagnostic is never a dead end,
 * even when the CRM write below is unconfigured.
 *
 * CRM write is gated behind GHL_PRIVATE_INTEGRATION_TOKEN + GHL_LOCATION_ID
 * (server-only env vars, never exposed client-side — same pattern as
 * GMAIL_APP_PASSWORD in app/api/feedback/route.ts). Both are live in
 * production as of 2026-08-26; if either is ever unset, this route still
 * computes and returns the result honestly but logs that no CRM write
 * occurred, exactly like the feedback route's unconfigured-delivery path.
 *
 * Field mapping written to HighLevel (contact custom fields — all match
 * keys already created in the TMT location this session):
 *   growth_systems_score__demand / conversion / revenue_capture /
 *     operations / systems__measurement / growth__scale   <- raw 1-5 scores
 *   growth_systems_score__overall                          <- computed
 *   growth_systems_score__strongest_domain / weakest_domain <- computed
 *   growth_systems_score__primary_systems_gap               <- computed, INFERRED
 *   growth_systems_score__recommended_next_action           <- computed
 *   growth_systems_score__business_stage                    <- as submitted
 *   growth_systems_score__completion_date                   <- server timestamp
 *   lead_source / lead_source_detail                        <- from attribution payload
 * Tags applied: "diagnostic-completed" (+ "diagnostic-started" removed if present).
 */

const MAX_LEN = 500;

function isNonEmptyString(v: unknown, max = MAX_LEN): v is string {
  return typeof v === "string" && v.trim().length > 0 && v.length <= max;
}

function isValidEmail(v: unknown): v is string {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 254;
}

const VALID_STAGES: BusinessStage[] = ["pre_revenue", "early", "core_icp", "larger", "unknown"];

type SubmitBody = {
  scores: Partial<DomainScores>;
  businessStage: unknown;
  contact: {
    firstName?: unknown;
    lastName?: unknown;
    email?: unknown;
    phone?: unknown;
    company?: unknown;
  };
  attribution?: {
    utm_source?: unknown;
    utm_medium?: unknown;
    utm_campaign?: unknown;
    landing_page?: unknown;
  };
  // Honeypot — a real visitor never fills this.
  website?: unknown;
};

const RESULT_COPY: Record<"weak" | "developing" | "strong", string> = {
  strong:
    "Your shop is running tighter than most in your trade. The biggest opportunity now is protecting what's working and closing the one or two remaining gaps before they cost you a job.",
  developing:
    "You've got real strengths, but at least one part of the business is quietly costing you jobs or hours every week.",
  weak:
    "Based on what you told us, there are several gaps working against you at once. That's fixable, but it usually isn't a one-thing fix.",
};

function bandFor(overall: number): "weak" | "developing" | "strong" {
  if (overall >= 4.0) return "strong";
  if (overall >= 2.5) return "developing";
  return "weak";
}

async function writeToHighLevel(input: {
  scores: DomainScores;
  businessStage: BusinessStage;
  result: ReturnType<typeof computeGSSResult>;
  contact: { firstName?: string; lastName?: string; email: string; phone?: string; company?: string };
  attribution?: SubmitBody["attribution"];
}) {
  const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!token || !locationId) {
    console.error(
      `[gss] GHL_PRIVATE_INTEGRATION_TOKEN / GHL_LOCATION_ID not set — GSS result computed but NOT written to HighLevel. email=${input.contact.email} overall=${input.result.overall}`
    );
    return { delivered: false as const };
  }

  const strongestLabel =
    input.result.strongestDomain === "tied" ? "Tied / Unclear" : DOMAIN_LABELS[input.result.strongestDomain];
  const weakestLabel =
    input.result.weakestDomain === "tied" ? "Tied / Unclear" : DOMAIN_LABELS[input.result.weakestDomain];

  const businessStageFieldValue: Record<BusinessStage, string> = {
    pre_revenue: "Pre-Revenue — Disqualify",
    early: "Early (1-4 employees)",
    core_icp: "Core ICP (5-30 employees)",
    larger: "Larger (31+ employees)",
    unknown: "Unknown",
  };

  const nextActionFieldValue: Record<string, string> = {
    book_shop_visit: "Book Free Shop Visit",
    blueprint_recommended: "Blueprint Recommended",
    nurture_not_ready: "Nurture — Not Yet Ready",
    insufficient_evidence: "Insufficient Evidence — Manual Review",
    not_a_fit: "Not A Fit",
  };

  const body = {
    locationId,
    firstName: input.contact.firstName,
    lastName: input.contact.lastName,
    email: input.contact.email,
    phone: input.contact.phone,
    companyName: input.contact.company,
    tags: ["diagnostic-completed"],
    // Field IDs verified live via GHL get-custom-fields 2026-08-31. GHL's /contacts/upsert
    // silently ignores customFields entries that omit `id` -- `key` alone (even with the
    // correct "contact." prefix, which this list was also missing) is not enough. Confirmed
    // as the same defect class fixed in lib/ghl/adapter.ts the same day.
    customFields: [
      { id: "Us97GtmijyWkmwLlN2wR", key: "contact.growth_systems_score__demand", field_value: input.scores.demand },
      { id: "KGPeWIpZ3WZpQukrXpXH", key: "contact.growth_systems_score__conversion", field_value: input.scores.conversion },
      { id: "Yp6j2IK7llpKPchYKUpT", key: "contact.growth_systems_score__revenue_capture", field_value: input.scores.revenue_capture },
      { id: "IfT5OdmtFsm7dKwYWJyz", key: "contact.growth_systems_score__operations", field_value: input.scores.operations },
      { id: "N63QXG9rDpu1xNhhNYb3", key: "contact.growth_systems_score__systems__measurement", field_value: input.scores.systems_measurement },
      { id: "BKOKbQii2DlWF7gaygub", key: "contact.growth_systems_score__growth__scale", field_value: input.scores.growth_scale },
      { id: "OkcUUC8sEYK7cqd1Y8wn", key: "contact.growth_systems_score__overall", field_value: input.result.overall },
      { id: "aZhEpHLMg6HYK6hEYPON", key: "contact.growth_systems_score__strongest_domain", field_value: strongestLabel },
      { id: "5aX7WIgK6fNw7zqWahBu", key: "contact.growth_systems_score__weakest_domain", field_value: weakestLabel },
      { id: "XCbOFL7TgClL5ZYd3jfB", key: "contact.growth_systems_score__primary_systems_gap", field_value: input.result.primarySystemsGap },
      {
        id: "d5tRxZi9MYAmtpjex0Jc",
        key: "contact.growth_systems_score__recommended_next_action",
        field_value: nextActionFieldValue[input.result.recommendedNextAction],
      },
      { id: "Zc2nzgg4OVm9SGk46p3I", key: "contact.growth_systems_score__business_stage", field_value: businessStageFieldValue[input.businessStage] },
      { id: "Huok72ZkgimVjzJElj1t", key: "contact.growth_systems_score__completion_date", field_value: new Date().toISOString() },
      { id: "ycvl0eamIbXZ1ALCmmHG", key: "contact.growth_systems_score__scoring_version", field_value: input.result.scoringVersion },
      ...(input.attribution?.utm_source
        ? [{ id: "GaseXYpVnSwaNPVHTqzC", key: "contact.lead_source", field_value: "WEBSITE" }]
        : []),
      ...(input.attribution?.landing_page
        ? [{ id: "BkU7ugfg4SK1KGl1tX0G", key: "contact.lead_source_detail", field_value: String(input.attribution.landing_page) }]
        : []),
    ],
  };

  // CRM write must never hang the response the visitor is waiting on — the
  // diagnostic result has already been computed above and must ship even if
  // HighLevel is slow or unreachable.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  let res: Response;
  try {
    res = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } catch (err) {
    console.error("[gss] HighLevel upsert request failed or timed out", err instanceof Error ? err.message : err);
    return { delivered: false as const };
  } finally {
    clearTimeout(timeout);
  }

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("[gss] HighLevel upsert failed", res.status, text);
    return { delivered: false as const };
  }

  return { delivered: true as const };
}

export async function POST(request: Request) {
  let body: SubmitBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true }); // honeypot — report fake success, do nothing
  }

  const scoreErr = validateScores(body.scores || {});
  if (scoreErr) {
    return NextResponse.json({ error: scoreErr }, { status: 400 });
  }
  const scores = body.scores as DomainScores;

  const stage = body.businessStage;
  if (typeof stage !== "string" || !VALID_STAGES.includes(stage as BusinessStage)) {
    return NextResponse.json({ error: "Invalid or missing business stage." }, { status: 400 });
  }
  const businessStage = stage as BusinessStage;

  const contact = body.contact || {};
  if (!isValidEmail(contact.email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }
  if (contact.firstName !== undefined && !isNonEmptyString(contact.firstName, 200)) {
    return NextResponse.json({ error: "Invalid first name." }, { status: 400 });
  }
  if (contact.phone !== undefined && contact.phone !== "" && !isNonEmptyString(contact.phone, 40)) {
    return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
  }
  if (contact.company !== undefined && contact.company !== "" && !isNonEmptyString(contact.company, 200)) {
    return NextResponse.json({ error: "Invalid company name." }, { status: 400 });
  }

  let result;
  try {
    result = computeGSSResult(scores, businessStage);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Could not score result." }, { status: 400 });
  }

  let crm: { delivered: boolean } = { delivered: false };
  try {
    crm = await writeToHighLevel({
      scores,
      businessStage,
      result,
      contact: {
        firstName: typeof contact.firstName === "string" ? contact.firstName.trim() : undefined,
        lastName: typeof contact.lastName === "string" ? (contact.lastName as string).trim() : undefined,
        email: (contact.email as string).trim(),
        phone: typeof contact.phone === "string" ? contact.phone.trim() : undefined,
        company: typeof contact.company === "string" ? contact.company.trim() : undefined,
      },
      attribution: body.attribution,
    });
  } catch (err) {
    console.error("[gss] CRM write threw", err);
  }

  return NextResponse.json({
    ok: true,
    result: {
      scoringVersion: result.scoringVersion,
      overall: result.overall,
      band: bandFor(result.overall),
      resultCopy: RESULT_COPY[bandFor(result.overall)],
      strongestDomain:
        result.strongestDomain === "tied" ? "Tied / Unclear" : DOMAIN_LABELS[result.strongestDomain],
      weakestDomain: result.weakestDomain === "tied" ? "Tied / Unclear" : DOMAIN_LABELS[result.weakestDomain],
      primarySystemsGap: result.primarySystemsGap,
      recommendedNextAction: result.recommendedNextAction,
    },
    crmDelivered: crm.delivered,
  });
}

// Guards against DOMAINS ever silently changing shape without this route noticing.
void DOMAINS;
