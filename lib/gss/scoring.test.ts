import { computeGSSResult, validateScores, scoreBand, DOMAINS, type DomainScores } from "./scoring";

function scores(overrides: Partial<DomainScores> = {}): DomainScores {
  return {
    demand: 3,
    conversion: 3,
    revenue_capture: 3,
    operations: 3,
    systems_measurement: 3,
    growth_scale: 3,
    ...overrides,
  };
}

let failures = 0;
function assert(cond: boolean, msg: string) {
  if (!cond) {
    failures++;
    console.error("FAIL:", msg);
  } else {
    console.log("pass:", msg);
  }
}

// All-low scores
{
  const r = computeGSSResult(scores({ demand: 1, conversion: 1, revenue_capture: 1, operations: 1, systems_measurement: 1, growth_scale: 1 }), "core_icp");
  assert(r.overall === 1, "all-low overall = 1");
  assert(scoreBand(r.overall) === "weak", "all-low band = weak");
  assert(r.strongestDomain === "tied" && r.weakestDomain === "tied", "all-low: everything tied");
}

// All-high scores
{
  const r = computeGSSResult(scores({ demand: 5, conversion: 5, revenue_capture: 5, operations: 5, systems_measurement: 5, growth_scale: 5 }), "core_icp");
  assert(r.overall === 5, "all-high overall = 5");
  assert(scoreBand(r.overall) === "strong", "all-high band = strong");
  assert(r.recommendedNextAction === "blueprint_recommended", "all-high => blueprint recommended");
}

// Mixed scores, single clear strongest/weakest
{
  const r = computeGSSResult(scores({ demand: 1, conversion: 5, revenue_capture: 3, operations: 3, systems_measurement: 3, growth_scale: 3 }), "core_icp");
  assert(r.overall === 3, "mixed overall = 3");
  assert(r.strongestDomain === "conversion", "mixed strongest = conversion");
  assert(r.weakestDomain === "demand", "mixed weakest = demand");
  assert(r.primarySystemsGap.toLowerCase().includes("qualified opportunities"), "gap copy matches demand");
}

// Tied strongest domains
{
  const r = computeGSSResult(scores({ demand: 5, conversion: 5, revenue_capture: 1 }), "core_icp");
  assert(r.strongestDomain === "tied", "tied strongest reported as tied");
  assert(r.strongestDomains.includes("demand") && r.strongestDomains.includes("conversion"), "tied strongest lists both domains");
}

// Tied weakest domains
{
  const r = computeGSSResult(scores({ operations: 1, systems_measurement: 1, demand: 5 }), "core_icp");
  assert(r.weakestDomain === "tied", "tied weakest reported as tied");
  assert(r.weakestDomains.length === 2, "tied weakest lists exactly 2 domains");
}

// Missing question
{
  const partial: Partial<DomainScores> = scores();
  delete (partial as Record<string, unknown>).operations;
  const err = validateScores(partial);
  assert(err !== null && err.includes("Operations"), "missing question rejected with field name");
}

// Invalid value (out of range, wrong type)
{
  assert(validateScores(scores({ demand: 6 })) !== null, "score of 6 rejected");
  assert(validateScores(scores({ demand: 0 })) !== null, "score of 0 rejected");
  assert(validateScores({ ...scores(), conversion: "3" as unknown as number }) !== null, "string score rejected");
}

// Each business stage
for (const stage of ["pre_revenue", "early", "core_icp", "larger", "unknown"] as const) {
  const r = computeGSSResult(scores(), stage);
  assert(r.businessStage === stage, `business stage preserved: ${stage}`);
  if (stage === "pre_revenue") assert(r.recommendedNextAction === "not_a_fit", "pre_revenue => not_a_fit");
  if (stage === "unknown") assert(r.recommendedNextAction === "insufficient_evidence", "unknown stage => insufficient_evidence");
}

// Business Stage never enters the numeric average — sanity check across all stages with identical scores
{
  const base = scores({ demand: 4, conversion: 4, revenue_capture: 4, operations: 4, systems_measurement: 4, growth_scale: 4 });
  const overalls = (["pre_revenue", "early", "core_icp", "larger", "unknown"] as const).map(
    (s) => computeGSSResult(base, s).overall
  );
  assert(overalls.every((o) => o === 4), "overall identical regardless of business stage");
}

// DOMAINS length sanity (guards against silently adding/removing a domain)
assert(DOMAINS.length === 6, "exactly six scored domains");

console.log(failures === 0 ? "\nALL TESTS PASSED" : `\n${failures} TEST(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
