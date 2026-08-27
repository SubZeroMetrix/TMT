# TMT Workflow Registry

## Continuation pass — 2026-08-27 (function-matrix reconciliation)

Full reconciliation against every required function lives in `TMT_FUNCTION_MATRIX.md` — read that
file for the authoritative REUSED/BUILT/DRAFT/BLOCKED status of every named function. This section
only logs the 3 additional workflows built in this pass, on top of the 7 already documented below.

| # | Workflow | Trigger | Action | Status |
|---|---|---|---|---|
| 8 | [TMT] Lost - Capture Reason Task | Opportunity changed: TMT Consulting Sales, stage → Lost/Disqualified | Add task, assigned to no one specific (single-owner shop), due same day | **PUBLISHED, VERIFIED LIVE** (id `17bc0826-26f3-44dd-9a9e-4cdc4c0a9227`) |
| 9 | [MTCRM] Lost - Capture Reason Task | Opportunity changed: Modern Trades CRM Sales, stage → Lost/Disqualified | Add task | **PUBLISHED, VERIFIED LIVE** (id `b2ff2c54-79fa-44b9-be52-dc8e1c753382`) |
| 10 | [TMT] Blueprint Proposed - Follow-Up Task | Opportunity changed: TMT Consulting Sales, stage → Blueprint Proposed | Add task | **PUBLISHED, VERIFIED LIVE** (id `2aaf1ecf-a9d4-480a-a3e1-1f19d2824dd3`) |

Total workflows built this engagement: **10** (7 form-routing/tagging + 3 stage-change internal
tasks). Plus 1 bug fix (Field Notes trigger) and 1 orphaned draft cleanup, both documented below.

**6 of 7 form-routing workflows fire-tested live this pass** (in addition to General TMT Contact,
verified in an earlier session) — see `TMT_TEST_RESULTS.md` Tests 3–6. All passed. One cosmetic
opportunity-naming quirk found and documented (Test 4), zero functional impact.

**Genuinely deferred (not gated, just not built this session):** Shop Visit SMS
reminder/no-show, MTCRM demo/setup follow-up + provisioning task, newsletter re-engagement
sequence, review-request workflow. See `TMT_FUNCTION_MATRIX.md` "Known gaps" section.

**Genuinely blocked (external prerequisite, verified not just assumed):** missed-call recovery and
AI Front Desk — both require a phone number that does not exist on this location (`active-numbers`
= 0), confirmed via API and via checking the AI Agents activation screen.

---


VERIFIED LIVE 2026-08-27. 21 workflows total (19 published, 2 unnamed drafts).

## Platform limitation — VERIFIED, not assumed

Searched the full GHL public API surface (`search_operations`) for workflow-creation and
form-creation endpoints. Confirmed:
- **No API exists to create/edit GHL workflow logic** (triggers, conditions, action steps). The
  only workflow-related write endpoint is `add-contact-to-workflow` (enrollment), not authoring.
- **No API exists to create/edit GHL's native form builder.** The only form-creation endpoints
  found are for Facebook/LinkedIn ad lead-forms — a different product, not GHL's own Forms feature.

Both are UI-only (visual builder) on this platform. This means: **all 8 missing forms and all
"missing workflows" from the build spec are SPECIFICATION ONLY — they cannot be built via API and
require manual construction in the GHL UI.** This is a genuine platform constraint, verified by
API search, not a skipped step.

## Classification of the 21 existing workflows

| Name | ID | Status | Classification | Preservation decision |
|---|---|---|---|---|
| Agreement Signed — Route to Payment Due | `7d328cae-fb36-4bf8-81ab-a20763f9841b` | published v3 | CLIENT DELIVERY | REUSE/EXTEND |
| Blueprint Payment Confirmed — Credit Eligibility | `fca2c917-ce7f-4620-a5c6-7f670559f083` | published v4 | TMT CONSULTING | REUSE/EXTEND |
| Core Reply Handoff | `6ebe7f90-6a48-4616-865f-52be2a61cc22` | published v10 | SHARED FOUNDATION | PRESERVE |
| Estimate Accepted — Route to Agreement | `33dcd2ec-b572-46b5-8eac-154e904ef0a7` | published v3 | CLIENT DELIVERY | REUSE/EXTEND |
| Estimate Declined — Review | `d727c232-5727-4ecd-abbf-9a52bd1726bb` | published v3 | CLIENT DELIVERY | REUSE/EXTEND |
| Estimate Sent — Follow-Up | `334edfa2-bf88-473d-8d1c-13a3e64c42bf` | published v3 | CLIENT DELIVERY | REUSE/EXTEND |
| Estimate Viewed — Notify | `8e9045cc-343b-45bf-ba60-42b0a18131fa` | published v3 | CLIENT DELIVERY | REUSE/EXTEND |
| Evidence-Led Cold — Pre-Reply Cadence | `4bc7510d-3f8d-49b8-9734-a624dac371b3` | published v6 | TMT CONSULTING | REUSE/EXTEND |
| Field Notes — Subscriber Welcome | `72e669c8-8c43-434c-8cf6-2f3333bed719` | published v3 | NEWSLETTER | REUSE/EXTEND (only newsletter workflow that exists — Growth & Systems Brief welcome is missing) |
| Field Outreach - Visit Follow-Up | `49d0d62d-395e-43e7-a132-c4a471b6a22e` | published v3 | TMT CONSULTING | REUSE/EXTEND |
| Implementation Handoff | `aa6a84cd-8a5a-4ff9-8c71-cee9b7b28e74` | published v9 | CLIENT DELIVERY | REUSE/EXTEND |
| Long-Term Nurture Entry | `d26c910f-c631-4542-922b-5fc8433744a9` | published v5 | SHARED FOUNDATION | PRESERVE |
| Long-Term Nurture — Engagement Upsert | `ce9e5c83-e2ec-42c4-8e60-d10a269fd4fb` | published v3 | SHARED FOUNDATION | PRESERVE |
| New Workflow : 1787277833360 | `229f3939-24dd-40f5-a5a5-72fa29677ffd` | **draft v2** | UNKNOWN | PRESERVE — unnamed, purpose unconfirmed. Do not delete or repurpose without opening it in the UI. |
| New Workflow : 1787622271947 | `b2623ad6-76ca-423c-96cb-684554199f31` | **draft v1** | UNKNOWN | PRESERVE — same as above |
| Reactivation - Outreach Started | `118b9472-aab5-4e13-ab3e-6dfb6b6497aa` | published v3 | SHARED FOUNDATION | PRESERVE |
| Referral - Received | `d65a852d-90a3-4569-a1ae-accd9e667bd3` | published v3 | SHARED FOUNDATION | PRESERVE |
| Scope Change Needed — Decision Task | `4156a475-c87f-46a6-9ba7-bc9a78fdf57a` | published v3 | CLIENT DELIVERY | REUSE/EXTEND |
| Strategy Call Booking | `8b75b7d0-8475-466a-8bc2-35720f223394` | published v3 | TMT CONSULTING | REUSE/EXTEND |
| Warm Inbound — Instant Acknowledgment | `c749d40a-0a2f-4ec8-9e97-f65cbbc49cf0` | published v5 | SHARED FOUNDATION | PRESERVE |
| Warm Relationship - Task and Reminder Support | `4752a62f-1051-4441-a62c-d86007843e27` | published v5 | SHARED FOUNDATION | PRESERVE |

No workflow in this set is classified TRADEFIT (consistent — TradeFit is tracked via the TMT Sales
pipeline stage/opportunity tags, not a dedicated workflow set) or MODERN TRADES CRM (consistent —
that pipeline was only created 2026-08-26, same day as this session; no workflows exist for it yet).
No OBSOLETE candidates identified — every named workflow maps to an active business function.

## Missing workflows — build in progress via native UI (browser), started 2026-08-27

Confirmed the earlier "no API = can't build" framing was wrong for the *category* — workflows are UI-only to build, but the UI itself works fine once navigated correctly (search-box freeze issue from forms did not recur here). Proof-of-pattern workflow built and PUBLISHED:

| Workflow | Trigger | Action | Status |
|---|---|---|---|
| General TMT Contact - Route to Pipeline | Form submitted = "General TMT Contact" | Create opportunity in TMT Consulting Sales, stage New Inquiry, name `{{contact.name}} - General TMT Contact` | **PUBLISHED, VERIFIED LIVE** |

Pattern for remaining form→pipeline routing workflows: Automation → Create workflow → Start from Scratch → rename → Add trigger → "Form submitted" → filter "Form is" → select form → Save trigger → Add action → "Create opportunity" (not the deprecated Create/Update) → select pipeline → Add field: Opportunity Name (merge tag) + Pipeline Stage (defaults to first stage) → Save action → toggle Publish → Save.

**RESOLVED — transient, not a platform blocker.** The stall attempting workflow #2 was fixed by a hard-reload of the Workflows list page plus a longer hydration wait (4s) before interacting. Every subsequent step (create, trigger config, form-select dropdown, action config, publish, rename via kebab menu, duplicate/clone) worked normally on retry. This confirms the earlier failure was timing/hydration-related, not a permanent tool limitation. One orphaned empty draft remains from the failed first attempt, id `1d7efd6f-645a-4d32-864d-03be47fa383f` — flagged for cleanup, not deleted blind.

**Working pattern, in active use:** Workflows list → search/kebab menu → "Duplicate workflow" → name the copy directly in the dialog → open copy → edit trigger's form filter (remove old chip, add new chip via the "Form is" multiselect — note: clicking a dropdown item once ADDS it as a chip; click the checked item again in the dropdown to remove/uncheck, the small red X on the chip itself does not reliably remove) → Save trigger → edit Create Opportunity action's Pipeline Stage (confirm correct stage from the dropdown, not just the default) and Opportunity Name → Save action → toggle Publish → Save. This clone-and-edit technique is far faster than building from scratch and is now the default approach for remaining workflows.

## Progress — workflows built via native UI, 2026-08-27

| # | Workflow | Trigger form | Pipeline / Stage | Status |
|---|---|---|---|---|
| 1 | General TMT Contact - Route to Pipeline | General TMT Contact | TMT Consulting Sales / New Inquiry | **PUBLISHED, VERIFIED LIVE** |
| 2 | [MTCRM] Start Setup - Route to Pipeline | Modern Trades CRM Start Setup | Modern Trades CRM Sales / New Setup Request | **PUBLISHED, VERIFIED LIVE** (id `aec430bb-9d69-4cd1-a7e5-207acd036338`) |
| 3 | [MTCRM] Demo Request - Route to Pipeline | Modern Trades CRM Demo Request | Modern Trades CRM Sales / Demo Requested | **PUBLISHED, VERIFIED LIVE** (id `dbee5431-468a-4526-b01b-7b02bb384bbb`, cloned from #2) |
| 4 | [TMT] Growth & Systems Blueprint Inquiry - Route to Pipeline | Growth & Systems Blueprint Inquiry | TMT Consulting Sales / New Inquiry | **PUBLISHED, VERIFIED LIVE** (id `8e627bbf-4def-447c-b97d-403130158f4c`, cloned from #1) |

Modern Trades CRM Sales pipeline stages confirmed live (from the Pipeline Stage dropdown):
New Setup Request → Contact Attempted → Qualified → Plan Selected → Demo Requested → Demo Booked → Demo Completed.
TMT Consulting Sales pipeline stages confirmed live: New Inquiry → Contact Attempted → Qualified → Shop Visit Requested → Shop Visit Booked → Shop Visit Completed → Blueprint Proposed (+ more beyond, not yet scrolled).

**Bug found and fixed, 2026-08-27:** "Field Notes — Subscriber Welcome" (the one pre-existing newsletter workflow) was triggering off the unnamed/unidentified "Form 1", NOT the new "Pinellas Contractor Field Notes Signup" form built this session — meaning real Field Notes signups were never reaching this workflow. Fixed live: trigger filter now correctly reads "Form is any of 'Pinellas Contractor Field Notes Signup'". Saved and re-published, verified via search. "Form 1" remains flagged DO NOT USE (unclear purpose, zero known dependents now).

| 5 | [NEWSLETTER] Growth & Systems Brief - Subscriber Welcome | Growth & Systems Brief Signup | N/A — tags contact `growth-systems-brief-subscriber`, sends welcome email | **PUBLISHED, VERIFIED LIVE** (id `e23b6683-32af-4f23-9cca-5f433fe7c303`, cloned from the fixed Field Notes workflow; email subject changed to reference the Brief, body copy was already generic/reusable) |

| 6 | [SHARED] Global Unsubscribe - Suppress Contact | Global Unsubscribe | N/A — tags contact `unsubscribed-global`, then "Enable DND for all channels" (outbound) | **PUBLISHED, VERIFIED LIVE** (id `32736a67-d787-4408-947f-555d6d0f4240`, cloned from Field Notes welcome then edited: removed Welcome Email step, added native "Enable/disable DND" action) — confirmed no prior unsubscribe/suppression workflow existed among the 21 inherited workflows |

| 7 | [NEWSLETTER] Preference Update - Tag Contact | Newsletter Preference Update | N/A — tags contact `newsletter-preference-updated` (actual preference values already land in custom fields via the form itself; no workflow branching needed for capture) | **PUBLISHED, VERIFIED LIVE** (id `b6268d9d-ba9b-49d2-96bb-fbd50e2e968f`, cloned from Global Unsubscribe with DND action removed) |

**All 7 form→pipeline/tag routing workflows are now built, published, and verified live.** This covers every form in `TMT_FORM_CALENDAR_REGISTRY.md` except "Shop Visit Request" (reuses the pre-existing "TMTM Shop Visit Qualification" form/flow, no new workflow needed — Shop Visit lifecycle is already covered by existing SHARED FOUNDATION workflows) and the two calendars' booking confirmations (calendars are inactive drafts pending business hours, so no workflow needed yet).

**Cleanup complete:** orphaned draft `1d7efd6f-645a-4d32-864d-03be47fa383f` ("New Workflow : 1787795051351") confirmed empty (no trigger, no actions, 0 enrolled, never published) and soft-deleted 2026-08-27 (30-day recovery window per GHL's delete confirmation).

**Owner dashboard — BUILT, VERIFIED LIVE.** Created "TMT Owner Dashboard" (id in URL `6a8fa5d47c0579b5255e26f4`) via native GHL Dashboards, cloned from the pre-existing "(Default) Dashboard" (left untouched) rather than mutating it. Widgets: Opportunity status/value/conversion rate (All pipelines), Funnel scoped to TMT Consulting Sales, Stage distribution scoped to Modern Trades CRM Sales — the two active sales pipelines. Owner-visible (not set to private), system admins have full access per GHL's default.

**Remaining:** non-form-triggered lifecycle/reactivation additions beyond what's inherited (none identified as missing — the 21 inherited workflows already cover SHARED FOUNDATION reactivation/referral/nurture functions). Final documentation pass across `TMT_PIPELINE_REGISTRY.md`, `TMT_TEST_RESULTS.md`, `TMT_LAUNCH_CHECKLIST.md`, `SUMMARY.md`.

## Controlled end-to-end test — PASSED, 2026-08-27

Submitted the live public "Modern Trades CRM Start Setup" form with a clearly labeled test contact (`TEST-DO-NOT-CONTACT MTCRM Workflow Test`, `tmt-test-mtcrm-workflow@themoderntradesmentor.com`, `(727) 600-9999` — an internal test number, not a real prospect). Verified via the contact's Activity log and the Opportunities board:
1. Contact created (source: Modern Trades CRM Start Setup)
2. Form submission recorded
3. Workflow #2 fired automatically → opportunity "Modern Trades CRM Start Setup" created in **Modern Trades CRM Sales / New Setup Request** — exactly as designed.

This confirms the full chain (public form → trigger filter → Create Opportunity action → correct pipeline/stage) works end-to-end in production, not just in the builder preview. Test contact and its cascade-deleted opportunity were removed afterward (GHL contact delete, 60-day recovery window, confirmed by contact count dropping 35→34).

## Missing workflows — SPECIFICATION ONLY (cannot build via API, see platform limitation above)

- Inquiry normalization and deduplication
- First-touch preservation / later-touch attribution (partially covered by the new `original_*`/`latest_*` custom fields the adapter writes to — but the *workflow* that would branch logic on this data doesn't exist)
- Local/national routing
- Owner assignment
- Consent and global suppression (native DND-based)
- Modern Trades CRM setup, plan selection, demo lifecycle (new pipeline has no workflows yet)
- Delivery handoff and outcome tracking (partially covered by existing Implementation Handoff)
- Newsletter welcome (Growth & Systems Brief side), preferences, unsubscribe, re-engagement
- Lost reasons
- Reactivation, review and referral requests after verified eligibility

Each of these must be built manually in the GHL workflow UI. I can draft the trigger/condition/action
logic as a specification document for whoever builds them, but cannot create the workflow objects
themselves through this session's tools.
