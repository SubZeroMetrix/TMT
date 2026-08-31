# TMT GHL Registry — API-Reconciled

Pulled directly from the live GHL API (`leadconnector` MCP) against `WUDohU0gxddDrFhrOsQG` on
2026-08-30. This supersedes prior workflow-count claims in `TMT_WORKFLOW_REGISTRY.md`,
`TMT_LAUNCH_CHECKLIST.md`, and `TMT_FUNCTION_MATRIX.md` wherever they conflict with the counts
below — those documents were written from browser observation during active building and drifted.

## Workflows — 35 total (API `get-workflow`, OBSERVED)

**33 published, 2 draft.**

### New/engagement-built workflows — 14, not 13 (correction)

Every workflow below was created between 2026-08-27T01:16 and 2026-08-28T15:05 — a single
contiguous build window. This includes **"General TMT Contact - Route to Pipeline"**
(`6ff0fb4a-ff3b-478f-b1e6-cda15da5ff77`, created 2026-08-27T01:16:56), which prior docs
(`TMT_FUNCTION_MATRIX.md` §1, `TMT_LAUNCH_CHECKLIST.md`) classified as **REUSED / pre-existing**.
That classification is wrong — its creation timestamp places it in the same build window as
every other new-tagged workflow. Correcting to BUILT AND PUBLISHED, same as the rest.

| Name | id | status | version | created |
|---|---|---|---|---|
| General TMT Contact - Route to Pipeline | `6ff0fb4a-ff3b-478f-b1e6-cda15da5ff77` | published | 3 | 2026-08-27T01:16:56Z |
| [MTCRM] Start Setup - Route to Pipeline | `aec430bb-9d69-4cd1-a7e5-207acd036338` | published | 4 | 2026-08-27T02:15:42Z |
| [MTCRM] Demo Request - Route to Pipeline | `dbee5431-468a-4526-b01b-7b02bb384bbb` | published | 3 | 2026-08-27T02:28:07Z |
| [TMT] Growth & Systems Blueprint Inquiry - Route to Pipeline | `8e627bbf-4def-447c-b97d-403130158f4c` | published | 3 | 2026-08-27T02:30:58Z |
| [NEWSLETTER] Growth & Systems Brief - Subscriber Welcome | `e23b6683-32af-4f23-9cca-5f433fe7c303` | published | 3 | 2026-08-27T02:35:01Z |
| [SHARED] Global Unsubscribe - Suppress Contact | `32736a67-d787-4408-947f-555d6d0f4240` | published | 3 | 2026-08-27T02:38:45Z |
| [NEWSLETTER] Preference Update - Tag Contact | `b6268d9d-ba9b-49d2-96bb-fbd50e2e968f` | published | 3 | 2026-08-27T02:43:08Z |
| [TMT] Lost - Capture Reason Task | `17bc0826-26f3-44dd-9a9e-4cdc4c0a9227` | published | 4 | 2026-08-27T07:28:39Z |
| [MTCRM] Lost - Capture Reason Task | `b2ff2c54-79fa-44b9-be52-dc8e1c753382` | published | 4 | 2026-08-27T07:39:06Z |
| [TMT] Blueprint Proposed - Follow-Up Task | `2aaf1ecf-a9d4-480a-a3e1-1f19d2824dd3` | published | 4 | 2026-08-27T07:44:19Z |
| [TMT] New Inquiry - Response Time Task | `d5269113-3b7d-462f-83a8-8ade25c3679c` | published | 4 | 2026-08-27T08:28:58Z |
| [MTCRM] New Setup Request - Response Time Task | `d2681847-6a76-4c2d-959d-3917bd12cde5` | published | 4 | 2026-08-27T08:35:05Z |
| [TMT] Qualified - Next Steps Task | `9c841266-6412-477e-a473-f3b3844c0563` | published | 3 | 2026-08-27T13:03:33Z |
| [TMT] Won - Sold Handoff Task | `97ee7bf0-1b37-4c7a-90ea-e84b8595b461` | published | 5 | 2026-08-27T17:25:47Z |

### Inherited workflows — 19 (pre-existing, untouched or lightly touched)

Agreement Signed — Route to Payment Due · Blueprint Payment Confirmed — Credit Eligibility ·
Core Reply Handoff · Estimate Accepted — Route to Agreement · Estimate Declined — Review ·
Estimate Sent — Follow-Up · Estimate Viewed — Notify · Evidence-Led Cold — Pre-Reply Cadence ·
Field Notes — Subscriber Welcome (bug-fixed, wrong form corrected) · Field Outreach - Visit
Follow-Up · Implementation Handoff · Long-Term Nurture Entry · Long-Term Nurture — Engagement
Upsert · Reactivation - Outreach Started · Referral - Received · Scope Change Needed — Decision
Task · Strategy Call Booking · Warm Inbound — Instant Acknowledgment · Warm Relationship - Task
and Reminder Support

That's 19, not the previously-stated 21 — **correction**: 2 of the "21 inherited" were actually
the 2 orphaned drafts below, miscounted as real inherited workflows in earlier passes.

### Orphaned drafts — 2, still live (correction: NOT cleaned up as previously claimed)

| Name | id | status | version | created | updated |
|---|---|---|---|---|---|
| New Workflow : 1787277833360 | `229f3939-24dd-40f5-a5a5-72fa29677ffd` | **draft** | 2 | 2026-08-21T02:03:54Z | 2026-08-21T22:03:58Z |
| New Workflow : 1787622271947 | `b2623ad6-76ca-423c-96cb-684554199f31` | **draft** | 1 | 2026-08-25T01:44:32Z | 2026-08-25T01:44:32Z |

`TMT_LAUNCH_CHECKLIST.md` states "Orphaned empty draft workflow cleaned up (soft-deleted)" —
that claim does not match live API state. Both drafts are still present and not deleted. This
needs correcting; deletion itself requires the GHL UI (browser), so it's BLOCKED on the same
browser-tool outage, but the claim of completion is wrong and is corrected here.

**Total accounted for: 14 new + 19 inherited + 2 orphaned drafts = 35. Matches API total exactly.**

## Pipelines — 5 total, all stage IDs API-verified

| Pipeline | id | stages |
|---|---|---|
| Marketing Pipeline | `gZV4avNmIwcdybbqcJfv` | 6 (pre-existing, untouched) |
| Client Delivery & Outcomes | `uMjhFk516XL00CsE3V5P` | 11 (pre-existing, untouched) |
| TMT Sales | `i3nh59UqVvbw60mpELg9` | 12 (pre-existing, untouched — the legacy TradeFit vendor pipeline) |
| Modern Trades CRM Sales | `WpCwXf3mQ01xCPsKtKEM` | 13 (built this engagement) |
| TMT Consulting Sales | `yjHqFVsBdew2rauJrktL` | 12 (built this engagement) |

All stage IDs referenced in `TMT_WORKFLOW_SPECS_PENDING.md` are confirmed correct against this
live pull, **including the previously-flagged-as-unverified** Client Delivery & Outcomes /
"COMPLETE / NEXT ENGAGEMENT" stage — confirmed `d73bc67a-30e1-4adc-8ebb-c941540001ca`. The
"needs re-verification" caveat in that spec doc is now resolved; no re-check needed before
building the review/referral-eligibility workflow.

## Custom fields — 112 total (API `get-custom-fields`), not 123

All 112 are `model: "contact"`, `standard: false`. No company/opportunity-level custom fields
exist. This corrects the owner directive's assumed count of 123 — 112 is the actual live figure.
Full field list with fieldKeys is in the API response this doc was built from; see
`TMT_FIELD_REGISTRY.md` for the field-by-field build record with placeholder/purpose text.

## Critical bug found and fixed this pass — website adapter custom fields

Live-tested 2026-08-30/31: the website-to-GHL adapter (`lib/ghl/adapter.ts`,
`lib/ghl/field-registry.ts`) has two stacked defects, both now fixed and pushed
(commits `73298cb`, `d096845`):

1. **5 wrong field keys** — `trade`, `newsletterLocalInterest`, `newsletterCrmInterest`,
   `latestCampaign` pointed at keys that don't exist on this location; `latestLeadSource`
   pointed at a key with no live equivalent at all (removed, no field maps to that role).
2. **Deeper root cause, found after fixing #1 and still seeing empty custom fields on a
   live test contact**: GHL's `/contacts/upsert` and `/contacts/{id}` PUT endpoints require
   each `customFields` entry to include the field's `id`, not just its `key` — `key`-only
   entries are silently accepted (200 OK, contact created) but the custom field values never
   attach. Confirmed via a controlled test submission through the live public endpoint
   (`tmt-adapter-test-2026-08-30@example.com`, contact id `l26jQQ76WF5fed8Y2dOH`) followed by
   a `get-contact` API read showing `customFields: []` despite a successful upsert response.

**This means every real website form submission through this adapter, since it went live,
has silently failed to save attribution, consent, trade, and newsletter-interest data** —
the contact record itself was created correctly, but with none of the business-critical
custom field data GHL workflows and reporting depend on. Fixed by adding a
`CONTACT_FIELD_IDS` map (IDs verified live via `get-custom-fields`) and sending both `id`
and `key` on every write. Typechecked and built clean; pushed to `origin/main`, which
auto-deploys to production on this repo (confirmed via `vercel ls` — deployments fire
within ~20s of every push, aliased to `www.themoderntradesmentor.com`).

**Not independently re-verified post-deploy**: the `leadconnector` MCP token expired mid-
verification (auth error on every call after the fix deployed), blocking a second
controlled test to confirm field values now attach in production, and blocking cleanup of
the labeled test contact from the first (pre-fix) test run
(`tmt-adapter-test-2026-08-30@example.com`, id `l26jQQ76WF5fed8Y2dOH` — clearly labeled
TMT-TEST/DELETE-ME, safe to leave until MCP access is restored). This needs owner action
(MCP re-auth) before it can be independently confirmed working, though the code fix itself
is typechecked, built, and matches the documented API contract exactly.

## Full adapter verification — 2026-08-31, all three fixes confirmed live

Complete controlled test sequence run against production after the three fixes above:

1. **Custom field writes** — fresh test contact (`vTm54jWIa08akrn3nwkM`,
   tmt-verify-fix-20260831@example.com) submitted through `/api/ghl/subscribe`; all 19
   expected custom fields, including `trade` and `latestCampaign` (the two that were
   silently broken), landed with correct IDs and values.
2. **Duplicate/update behavior** — same email resubmitted with different domain/campaign;
   `created: false` confirmed dedup matching works.
3. **First-touch/later-touch attribution** — found and fixed a **second bug** in the same
   pass: `findContactByEmail`'s `customFieldValue()` matched on `key`, but GHL's read APIs
   return `{id, value}`, never `{key, field_value}` — the match always missed, so "preserve
   original touch" silently never fired. A second submission overwrote `original_domain`/
   `original_campaign`/`original_landing_page` with new values. Fixed (match on `id`) and
   re-verified with a third submission: original-touch fields correctly held their
   second-touch values while `latest_campaign` correctly updated.
4. **Consent, trade, newsletter preferences** — all confirmed correct in the field dump above.
5. **Unsubscribe/suppression** — found and fixed a **third bug**: `PUT /contacts/{id}`
   rejects a `locationId` body property with 422 ("property locationId should not exist"),
   unlike `/contacts/upsert` which requires it. The unsubscribe path was sending it
   unconditionally, so every real unsubscribe request threw and returned a generic 502.
   Fixed and re-verified: `unsubscribeStatus` → "Unsubscribed", `emailConsentStatus` →
   "Opted Out" both landed correctly.
6. **No newsletter-only opportunity** — confirmed structurally, not just by test: neither
   `lib/ghl/adapter.ts` nor the newsletter/subscribe code path contains any opportunity-
   creation call at all. There is no code path by which a newsletter-only contact could
   generate an opportunity.
7. **Independent second bug instance found** — `app/api/gss/submit/route.ts` (Growth
   Systems Score diagnostic) had the identical missing-`id` defect as the original adapter
   bug, plus wrong key prefixes (missing `contact.`) on all 16 custom fields. This is a
   completely separate code path from `lib/ghl/adapter.ts` — every GSS diagnostic
   completion had been silently failing to write scores/attribution to GHL since launch.
   Fixed and verified live: a labeled test submission (same contact) landed all 16 fields
   correctly, including the `diagnostic-completed` tag.

**All GHL-write code paths in this repo are now accounted for and confirmed working**:
`lib/ghl/adapter.ts` (used by subscribe/unsubscribe/field-notes-signup) and
`app/api/gss/submit/route.ts` — no other route in `app/api/` talks to GHL directly.

**Test contact cleanup — BLOCKED, needs owner action.** A `PreToolUse` safety hook
(`~/.claude/hooks/guard.js`, added 2026-08-30 during hardening work) explicitly blocks any
`leadconnector` delete/bulk operation and requires manual execution — this is a deliberate
guardrail, not a bug, and was not bypassed. Two labeled test contacts remain in the TMT
location, both clearly marked and safe to leave short-term:
- `vTm54jWIa08akrn3nwkM` (tmt-verify-fix-20260831@example.com, TMT-VERIFY/GSS-TEST)
- `l26jQQ76WF5fed8Y2dOH` (tmt-adapter-test-2026-08-30@example.com, TMT-TEST/DELETE-ME —
  the one specifically named in the owner's verification request)

Delete both manually in the GHL UI, or run the two `delete-contact` calls directly with
`CLAUDE_GUARD_DISABLE=1` set if the owner wants to authorize it.

## Not yet reconciled this pass (time-boxed out)

Forms, calendars, tags, and custom values were not re-pulled via API this pass — prioritized the
workflow-count conflict (explicitly named in the owner directive) and the pipeline/field counts.
These remain as previously documented in `TMT_FORM_CALENDAR_REGISTRY.md` and
`TMT_FIELD_REGISTRY.md` unless/until independently re-verified.
