# TMT Production Build Status — Terminal 1

Last updated: 2026-08-26 (Terminal 1 session, this turn)

## Connection state — VERIFIED LIVE

- `leadconnector` MCP: re-authenticated this session via OAuth (agency-wide/multi-location grant, sub-account view selected). Requires explicit `locationId` on every call — **not** a dedicated single-location credential. This is a gap vs. "dedicated TMT production integration" and should be flagged before Terminal 2 treats it as production-hardened.
- `list_locations` returns exactly 3: `01-CORE-DEV` (`Sw8SbpTlzn8aBcnxZnrf`), `Arbor Addicts Tree Service, Inc.` (`1WCWXIcYT4jsioM3U9NA`), `The Modern Trades Mentor LLC` (`WUDohU0gxddDrFhrOsQG`).
- `get-location` for `WUDohU0gxddDrFhrOsQG` — VERIFIED LIVE: name "The Modern Trades Mentor LLC", owner Richard Fritzke, richard@themoderntradesmentor.com, Saint Petersburg FL, website themoderntradesmentor.com. Confirms this is TMT production, not 01-CORE-DEV or Arbor.
- `TMT_WEBSITE_INTEGRATION_CONTRACT.json` / `.md` do **not exist yet** anywhere under `C:\Users\HP` (confirmed by filesystem search). These are deliverables to be created, not existing files to reconcile against. The location ID `WUDohU0gxddDrFhrOsQG` does appear consistently across 9 other existing TMT docs, which cross-checks clean.

## Section 1 — Production inventory (partial, VERIFIED LIVE where stated)

### Pipelines — VERIFIED LIVE (`get-pipelines`)
| Pipeline | ID | Stages |
|---|---|---|
| Marketing Pipeline | gZV4avNmIwcdybbqcJfv | 6 |
| Client Delivery & Outcomes | uMjhFk516XL00CsE3V5P | 11 |
| TMT Sales | i3nh59UqVvbw60mpELg9 | 12 |
| Modern Trades CRM Sales | WpCwXf3mQ01xCPsKtKEM | 13 |
| TMT Consulting Sales | yjHqFVsBdew2rauJrktL | 12 |

All 5 pipelines and stage counts match prior checkpoint claims exactly. Full stage ID lists captured in this session's tool output (not yet transcribed into a dedicated `TMT_PIPELINE_REGISTRY.md` — TODO).

### Workflows — VERIFIED LIVE (`get-workflow`) — 21 total
19 published, 2 draft ("New Workflow : 1787277833360", "New Workflow : 1787622271947" — unnamed drafts, need classification). Matches prior checkpoint's "21 existing workflows" claim. Full list with IDs/versions captured in this session's tool output — not yet classified into TRADEFIT/CONSULTING/DELIVERY/etc. buckets (TODO, section 3 of the assignment).

### Custom fields — VERIFIED LIVE AND RECONCILED, CORRECTION TO PRIOR CLAIM
Full reconciliation by object/model, all VERIFIED LIVE this session:
- `contact` model: 84 custom fields
- `opportunity` model: 15 custom fields
- `business` (Company) object: 10 fields returned by `get-custom-fields-by-object-key`, all `"standard": true` — these are built-in system fields, not custom fields. **0 custom fields on Company.**
- Custom objects: **0 exist**. `get-object-by-location-id` returns exactly 3 objects, all `type: "SYSTEM_DEFINED"` — Contact, Opportunity, Company. No custom-object schemas to inventory.

**Reconciled total: 99 custom fields location-wide (84 + 15 + 0).** This is final, not partial — every model the API exposes custom fields for has been checked (contact, opportunity, business/company), and there are no custom objects to check further.

**Discrepancy vs. the inherited "137" figure is real and unresolved as to source.** Possible explanations (all UNKNOWN/unverified — do not treat any as fact): the 137 count may have included standard/system fields alongside custom ones (e.g. counting the 10 business standard fields, or contact/opportunity standard fields, would move the number but not close a 38-field gap on its own), may have counted custom values (a separate GHL entity from custom fields) or tags, may reflect fields since deleted, or may simply have been a stale/incorrect prior count. No archived/hidden custom-field endpoint was found to check separately — the `get-custom-fields` and `get-custom-fields-by-object-key` operations used are documented as the full read surface for this data. Source of the 137 figure could not be located in this session's file search of `C:\Users\HP\tmt`.

### Not yet inventoried this session (UNKNOWN / PENDING)
- 9 TradeFit opportunities + vendor names (in TMT Sales, Qualified stage per prior claim — not re-verified this session)
- Custom objects & native associations
- Tags and custom values
- Forms and surveys
- Calendars and staff assignments
- Email/newsletter templates
- Conversations and phone capabilities
- Private integrations and scopes
- Dashboards
- Business profile / company settings beyond what `get-location` returned
- Website integrations

## What's blocked / needs a decision

- **Credential architecture**: current connection is agency-wide (3 locations visible), not a dedicated least-privilege TMT-only integration. Terminal 2's adapter-activation checklist ("credential is documented as a dedicated TMT production integration") is not satisfiable as-is without either (a) accepting the multi-location connection with locationId always pinned, or (b) provisioning a separate private integration scoped to TMT only. Flagging rather than deciding unilaterally.
- Sections 2–10 of the full assignment (field reconciliation, workflow classification/build, forms, calendars, newsletter foundation, dashboards, phone/SMS/AI audit, controlled testing, final documentation) have not been started this session.

## CRITICAL FINDING — adapter field-registry.ts has zero overlap with live GHL schema

Cross-referenced `lib/ghl/field-registry.ts` (`CONTACT_FIELD_KEYS`, 26 field keys the adapter reads/writes) against the live 84-field contact custom-field inventory (VERIFIED LIVE, this session). **Result: 0 of 26 keys exist in the live location.** This is not a partial mismatch — none of the following field keys the adapter code depends on are present in GHL:

`original_lead_source, latest_lead_source, original_campaign, latest_campaign, original_domain, original_landing_page, source_tool, trade, county, geographic_priority, utm_source, utm_medium, utm_campaign, utm_content, utm_term, subscription_interests, newsletter_local_interest, newsletter_crm_interest, unsubscribe_status, crm_plan_interest, sms_consent_status, sms_consent_source, sms_consent_timestamp, email_consent_status, email_consent_source, email_consent_timestamp`

The live schema does have semantically-related fields under different keys (e.g. `contact.lead_source`, `contact.lead_source_detail`, `contact.newsletter_consent`, `contact.trade__type_of_business`) but none match the adapter's expected keys exactly, and several adapter concepts (UTM parameters, original- vs latest-touch attribution, SMS/email consent with source+timestamp, unsubscribe status, CRM plan interest) have **no live field at all**, under any key.

**Practical consequence**: even with a fully verified, correctly-scoped, correctly-targeted credential, the adapter as currently written would either silently fail to write these custom fields (GHL commonly ignores unknown custom-field keys rather than erroring) or error outright — either way, none of the attribution/consent/newsletter data it's designed to capture would land in the CRM. This is independent of and more fundamental than the credential-identity blocker already reported.

**REUSE/EXTEND/CREATE decision for all 26 adapter-dependent keys: CREATE.** None qualify for REUSE (no matching key exists) or EXTEND (no near-equivalent live field is close enough in shape — e.g. `newsletter_consent` is a single checkbox with one option, not the two separate local/CRM-interest booleans the adapter expects).

This should go to the website/adapter session (hp-6f) and the user before any further adapter work — building out the field-by-field table for the other ~73 live fields not touched by this adapter is lower priority than resolving this.

## CONSOLIDATED STATUS — 2026-08-27, end of CRM Production session

### Complete and VERIFIED LIVE
- Credential: dedicated "TMT Website Production Adapter" private integration created, scoped, verified with its own token, wired into Vercel production, deployed. See credential section below.
- Field reconciliation: 26/26 adapter keys resolved (2 REUSE, 24 CREATE — all 24 created live with final IDs). See `TMT_FIELD_REGISTRY.md`. Total location-wide custom fields: 123.
- Forms/calendars inventory: `TMT_FORM_CALENDAR_REGISTRY.md`. 2 forms exist (1 flagged unnamed/unused), 4 calendars exist (1 pre-existing live + 3 newly built as inactive drafts this session, staff resolved to Richard Fritzke).
- Workflow inventory/classification: all 21 existing workflows classified by function in `TMT_WORKFLOW_REGISTRY.md`. No obsolete candidates found.
- Tags: 73 tags enumerated live (includes several test/debug tags — `internal-test`, `internal-test-delete`, `test-do-not-contact`, `audit-booking-probe`, `audit-isolation-probe` — flagged for owner cleanup, not deleted).
- Custom values: 5 exist live (Growth Systems Score result-copy templates + scoring formula documentation).
- Custom objects: confirmed 0 exist (only 3 SYSTEM_DEFINED objects: contact/opportunity/business).
- Phone/SMS/AI readiness: `TMT_PHONE_SMS_AI_READINESS.md`. 0 active phone numbers, no A2P, nothing paid activated — consistent with "no purchases/upgrades" instruction.

### BLOCKED — genuine platform limitations (verified via API search, not skipped)
- **All 8 missing forms**: GHL has no public API to create its native Forms — confirmed by searching the full write-operation surface. UI-only. SPECIFICATION ONLY.
- **All missing workflows** (inquiry dedup, first/later-touch routing, local/national routing, owner assignment, consent/suppression automation, Modern Trades CRM lifecycle, newsletter lifecycle, lost-reason, reactivation/review/referral): GHL has no public API to create workflow trigger/action logic — confirmed same way. UI-only. SPECIFICATION ONLY.
- **3 new calendars' activation** (not creation — the shells exist): cannot go live/bookable without owner-supplied business hours. Everything else about them is built.
- **Dashboards**: GHL dashboards are also a UI-only construct with no creation API found in this surface — same category as forms/workflows. Not attempted for the same verified reason.
- **A2P/phone/paid AI**: correctly not started — requires purchase/owner decision, out of session scope by explicit instruction.

### UNKNOWN (named, not guessed)
- Source of the original "137 custom fields" figure vs. the verified 99 (now 123 with additions) — never located.
- Whether the 2 unnamed draft workflows are wanted or leftover test artifacts.
- Whether "Form 1" (unnamed) has any live dependency before it could be deleted.
- Whether `qhmSJm3teofPIZAx2ynG`'s current business hours reflect anything real or are simply unconfigured.

## NEXT
Single consolidated owner-input list (all deferred, batched, not asked individually):
1. Business hours for the 3 new calendars (only remaining blocker for calendar go-live).
2. Confirm whether "Form 1" and the 2 unnamed draft workflows are keepers or cleanup candidates.
3. Decision on building the 8 forms + missing workflows manually in the GHL UI (this session cannot do it — no API exists) — either the owner builds them, or a session with browser/UI access attempts manual construction.
4. Phone number purchase + A2P registration, whenever the owner is ready to spend money on this.

## Credential creation — VERIFIED LIVE, complete (2026-08-27, third attempt)

Root cause of prior freezes: typing into the scopes search box triggered a stuck loading state.
Fix: opened the unfiltered scope dropdown and used `find`-by-label + `read_page` to locate/click
exact checkboxes instead of searching.

- Created dedicated private integration **"TMT Website Production Adapter"** inside
  `WUDohU0gxddDrFhrOsQG`, scopes: `locations.readonly`, `contacts.readonly`, `contacts.write`
  (exact least-privilege set the adapter's `ghlFetch` calls require).
- **Verified with the new token itself** (not the agency connection): an authenticated
  `GET /locations/{id}` call using the newly-created token, executed in-page via
  `javascript_tool` reading the token from the OS clipboard, returned `id: WUDohU0gxddDrFhrOsQG`,
  `name: The Modern Trades Mentor LLC`, HTTP 200. The token itself never appeared in any tool
  output, chat text, or file.
- Vercel `tmt` project, Production environment, updated via browser (clipboard-paste for the
  secret token, direct type for the non-secret location ID):
  - `GHL_LOCATION_ID` = `WUDohU0gxddDrFhrOsQG` (updated)
  - `GHL_PRIVATE_INTEGRATION_TOKEN` = new dedicated token (updated; first paste attempt
    accidentally grabbed the variable-name string instead of the token due to a stray clipboard
    overwrite — caught via length/prefix check before saving, redone correctly)
  - `GHL_PRODUCTION_LOCATION_CONFIRMED` = `true` (added, Config type since this flag itself isn't
    sensitive)
- Redeployed Production (`main`, commit `eabca31`, "Build the direct server-side GHL
  newsletter/subscriber adapter"). **Deployment status: Ready**, confirmed live on the
  Deployments list.
- The pre-existing "TMT Website Integration (GSC)" integration was left untouched, not
  rotated/deleted, per instruction.

**Gap not yet closed**: the adapter's `field-registry.ts` still needs the 3 renamed field keys
from `TMT_FIELD_REGISTRY.md` (newsletterLocalInterest, newsletterCrmInterest, latestCampaign) —
already sent to hp-6f. Until that's fixed, the adapter is credential-ready and will write real
contacts, but 3 of the 24 new custom fields won't populate correctly (writes to a key that doesn't
exist are typically silently dropped by GHL, not errored).

## Credential creation — BLOCKED (platform limitation, not asking for another decision) [SUPERSEDED — see above, resolved 2026-08-27]

Attempted twice, in two separate browser tabs, to create a new dedicated private integration
("TMT Website Production Adapter") in GHL Settings → Private Integrations for
`WUDohU0gxddDrFhrOsQG`. Both attempts: Basic Info step (name/description) completes fine and is
verified by zoom-screenshot. Both times, the **Scopes step's "Select scopes" search dropdown gets
permanently stuck on a loading spinner** after typing "contacts" — confirmed via `read_page`
showing only `img "loading"` with no scope list ever rendering, for 10+ seconds with no recovery,
across a fresh tab and a full page reload. This is a reproducible bug in GHL's own private-
integration creation UI for this location, not a credential, permission, or data problem on my
side.

Per standing instruction not to retry the same failing approach a third time: stopping here rather
than continuing to attempt the same UI flow. Options for the user:
- Wait and retry later (transient GHL-side issue) — I can retry once given a signal to.
- Create the integration manually via the GHL UI at a different time/browser and hand me the token to store in Vercel.
- Reuse/rotate the existing "TMT Website Integration (GSC)" integration (already scoped to this location, contacts+opportunities read/write per its description) instead of creating a new one — its exact scope list still hasn't been directly confirmed (the UI only shows a masked token, not a scope list, on that integration's detail page).

Vercel production env vars remain untouched. `GHL_PRODUCTION_LOCATION_CONFIRMED` remains unset.
