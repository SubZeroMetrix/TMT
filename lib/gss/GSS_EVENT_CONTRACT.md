# GSS Completion Event Contract

Version: `GSS-v1` (see `SCORING_VERSION` in `lib/gss/scoring.ts`)

## Ownership boundary

- **Website owns:** questions, UX, validation, scoring calculation, result
  interpretation copy, attribution capture.
- **CRM (HighLevel / future CORE) owns:** contact ingestion, deduplication,
  suppression/DNC, canonical attribution normalization, workflow routing.
- **TMT-specific CRM layer owns:** qualification, Blueprint routing,
  follow-up.

The website computes the result once. HighLevel workflows must not
recalculate it — they read the fields below and route on them.

## Transport (current implementation)

`POST /api/gss/submit` (this repo) computes the result server-side, then
writes to HighLevel via `POST https://services.leadconnectorhq.com/contacts/upsert`,
gated behind `GHL_PRIVATE_INTEGRATION_TOKEN` + `GHL_LOCATION_ID` (server-only
env vars — unset today, so writes are computed-but-not-delivered until
configured, logged honestly, never faked).

This can be swapped for a HighLevel inbound webhook workflow later without
changing anything upstream of it — the payload shape below is the contract,
not the transport.

## Canonical payload

```
event_type: "gss.completed"
schema_version: 1
scoring_version: "GSS-v1"

identity:
  email            (required)
  phone            (optional)
  first_name       (optional)
  last_name        (optional)
  company          (optional)

diagnostic:
  demand_score               1-5
  conversion_score           1-5
  revenue_capture_score      1-5
  operations_score           1-5
  systems_measurement_score  1-5
  growth_scale_score         1-5
  overall_score               computed, 2 decimals
  strongest_domain            or "Tied / Unclear"
  weakest_domain               or "Tied / Unclear"
  business_stage               not part of the numeric average
  primary_systems_gap          INFERRED — templated from weakest domain
  recommended_next_action
  completed_at                 ISO timestamp

attribution (from lib/attribution.ts, first-touch only currently sent):
  utm_source
  utm_medium
  utm_campaign
  landing_page
```

## Current field mapping (HighLevel contact custom fields, TMT location)

| Payload field | HighLevel field key |
|---|---|
| demand_score | `growth_systems_score__demand` |
| conversion_score | `growth_systems_score__conversion` |
| revenue_capture_score | `growth_systems_score__revenue_capture` |
| operations_score | `growth_systems_score__operations` |
| systems_measurement_score | `growth_systems_score__systems__measurement` |
| growth_scale_score | `growth_systems_score__growth__scale` |
| overall_score | `growth_systems_score__overall` |
| strongest_domain | `growth_systems_score__strongest_domain` |
| weakest_domain | `growth_systems_score__weakest_domain` |
| business_stage | `growth_systems_score__business_stage` |
| primary_systems_gap | `growth_systems_score__primary_systems_gap` |
| recommended_next_action | `growth_systems_score__recommended_next_action` |
| completed_at | `growth_systems_score__completion_date` |
| scoring_version | `growth_systems_score__scoring_version` — **does not exist yet, needs creating** (NUMERICAL/TEXT, same pattern as the other `growth_systems_score__*` fields) |
| utm_source (present) | tag `diagnostic-completed` applied; no dedicated field yet |
| landing_page | `lead_source_detail` (reused, not dedicated) |

Current-touch attribution, referrer, and CTA identifier are captured
client-side (`lib/attribution.ts`) but **not yet mapped to a field** — TMT's
existing custom fields are shaped for first-touch only. Adding
latest-touch fields is a CORE/TMT field-schema decision, not made here.

## What is NOT done yet

- `growth_systems_score__scoring_version` field doesn't exist in HighLevel.
- Lead Priority Tier / Fit / Pain / Intent / Commercial Readiness classification
  is not set by this route — that's TMT qualification-layer logic, belongs in
  the "GSS Diagnostic Processing" workflow (see `TMT_HIGHLEVEL_WORKFLOW_SPECS.md`),
  not the website.
- Opportunity creation/routing is not done by the website — CRM-side only.
