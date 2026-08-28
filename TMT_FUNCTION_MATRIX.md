# TMT Workflow Function Matrix

Reconciliation of every originally required workflow function against the 21 inherited workflows,
the 13 newly built workflows, and every named function in the 2026-08-27/28 continuation directive.
Verified live against `WUDohU0gxddDrFhrOsQG` via `get-workflow` API + browser review.

**Updated 2026-08-28:** workflow count is 13 (not 10) — see `TMT_WORKFLOW_REGISTRY.md`. Full specs
for the 5 remaining CRM-side gaps (MTCRM Qualified, MTCRM Demo Completed follow-up, MTCRM Won
handoff, review-eligibility, referral-eligibility) are written and ready to build — see
`TMT_WORKFLOW_SPECS_PENDING.md` — but not yet built in GHL; dormant-lead reactivation confirmed
REUSED, no build needed. 11 reusable email templates drafted (`TMT_EMAIL_TEMPLATES.md`) but not
wired into any workflow. Dashboard widget scoping complete (`TMT_DASHBOARD_WIDGET_SCOPING.md`).
Further browser-based building is blocked on a severely degraded Claude-in-Chrome tool (30s+ per
action, tab group repeatedly destroyed) — see `TMT_REVENUE_ACQUISITION_STATUS.md`.

Status legend: **REUSED AND VERIFIED** (an existing/inherited asset already covers this, confirmed
live) · **BUILT AND PUBLISHED** (built this session, live now) · **BUILT AS INACTIVE DRAFT** (built,
cannot activate until a named external gate clears) · **BLOCKED** (cannot be built at all right now —
reason stated).

## 1. Core inbound routing (form → pipeline)

| Function | Status | Asset |
|---|---|---|
| General TMT inquiry routing | REUSED AND VERIFIED | General TMT Contact - Route to Pipeline (pre-existing this session, published, fire-tested) |
| MTCRM Start Setup routing | BUILT AND PUBLISHED | [MTCRM] Start Setup - Route to Pipeline — fire-tested live |
| MTCRM Demo Request routing | BUILT AND PUBLISHED | [MTCRM] Demo Request - Route to Pipeline |
| Growth & Systems Blueprint inquiry routing | BUILT AND PUBLISHED | [TMT] Growth & Systems Blueprint Inquiry - Route to Pipeline |

## 2. Normalization, deduplication, attribution

| Function | Status | Reasoning |
|---|---|---|
| Inquiry normalization/deduplication | REUSED AND VERIFIED | Every "Create opportunity" action across all 4 routing workflows has "Duplicate opportunity: Disabled" as a built-in GHL safeguard — confirmed in the action config UI on every workflow built this session. No separate dedup workflow is a GHL primitive; this is the platform's dedup mechanism. |
| First-touch attribution | REUSED AND VERIFIED | Captured at the field level, not workflow level — adapter-managed `original_*` custom fields (see `TMT_FIELD_REGISTRY.md`), populated on first contact creation. Confirmed live via the test contact's Activity panel showing "First attribution source: Referral" automatically. |
| Later-touch attribution | REUSED AND VERIFIED | Same mechanism — `latest_*` custom fields, confirmed via "Latest attribution source" on the same test contact. |
| Local/national routing | REUSED AND VERIFIED / NOT APPLICABLE | TMT is a single-market business (St. Petersburg + Tampa only, per `tmt.md` brain — "Everything is local. Never write nationally-framed TMT content"). There is no national lead stream to route away from; all inbound routes to the single TMT Consulting Sales or Modern Trades CRM Sales pipeline regardless of geography. Building a national-exclusion branch would contradict the business's actual local-only positioning. |

## 3. Lifecycle, assignment, internal alerts

| Function | Status | Asset |
|---|---|---|
| Owner assignment | REUSED AND VERIFIED / NOT APPLICABLE | Single-operator shop — one active user (Richard Fritzke). Round-robin/load-balanced assignment has no meaning with one assignee; every new lead lands unassigned and visible to the sole owner by default, which is the correct behavior here. |
| Internal notification on new inbound | REUSED AND VERIFIED | "Core Reply Handoff" and "Warm Inbound — Instant Acknowledgment" (both inherited, published, v10/v5) already fire on inbound contact/reply events. |
| Lost reason capture (TMT Consulting Sales) | BUILT AND PUBLISHED | [TMT] Lost - Capture Reason Task — triggers on stage → Lost/Disqualified, creates an internal task |
| Lost reason capture (Modern Trades CRM Sales) | BUILT AND PUBLISHED | [MTCRM] Lost - Capture Reason Task — same pattern, correct pipeline |
| Response-time enforcement (both pipelines) | BUILT AND PUBLISHED | [TMT] New Inquiry - Response Time Task, [MTCRM] New Setup Request - Response Time Task |
| Qualification task (TMT Consulting Sales) | BUILT AND PUBLISHED | [TMT] Qualified - Next Steps Task |
| Qualification task (Modern Trades CRM Sales) | SPECCED, NOT BUILT | Full spec in `TMT_WORKFLOW_SPECS_PENDING.md` #1 — clone of the TMT-side workflow, ready for copy-paste build |
| Sold/Won handoff (TMT Consulting Sales) | BUILT AND PUBLISHED | [TMT] Won - Sold Handoff Task — enabled, published, not yet fire-tested with a live stage move |
| Sold/Won handoff (Modern Trades CRM Sales) | SPECCED, NOT BUILT | `TMT_WORKFLOW_SPECS_PENDING.md` #3 |

## 4. Consent and suppression

| Function | Status | Asset |
|---|---|---|
| Global unsubscribe / suppression | BUILT AND PUBLISHED | [SHARED] Global Unsubscribe - Suppress Contact — tags + enables DND all channels. Fire-tested live, confirmed DND applied. |
| Newsletter preference update | BUILT AND PUBLISHED | [NEWSLETTER] Preference Update - Tag Contact |
| Consent capture on forms | REUSED AND VERIFIED | Both SMS consent checkboxes (non-marketing, marketing) are native fields on every lead-capture form built this session — capture happens at the form layer, not a separate workflow. |

## 5. Shop Visit lifecycle

| Function | Status | Reasoning |
|---|---|---|
| Shop Visit request → routing | REUSED AND VERIFIED | "TMTM Shop Visit Qualification" form reused (no duplicate built), and the existing "Contractor Technology & AI Shop Visit" calendar is live/active with `autoConfirm: true`. |
| Shop Visit booking confirmation | REUSED AND VERIFIED | GHL calendars send native booking confirmations automatically on a live, `autoConfirm: true` calendar — this is platform-default behavior, not a separate workflow, and the calendar is already active. |
| Shop Visit reminder (SMS) | BLOCKED | No phone number provisioned, no A2P registration — SMS reminders cannot be configured or even trigger-tested without a number to send from (confirmed: GHL SMS actions require a connected number to save). Email-channel reminder is technically buildable but was not built this session — see Known Gaps below. |
| Shop Visit no-show handling | BLOCKED (deferred, not gated) | No no-show detection signal exists without either a calendar status webhook mapped to a workflow trigger and a completed test cycle, or manual staff marking. Genuinely buildable without a paid gate, but not completed this session — logged as a real gap, not a false gate. |
| Shop Visit completed → follow-up | REUSED AND VERIFIED | "Field Outreach - Visit Follow-Up" (inherited, published v3) already covers this exact function. |

## 6. Blueprint lifecycle

| Function | Status | Asset |
|---|---|---|
| Blueprint inquiry intake | BUILT AND PUBLISHED | [TMT] Growth & Systems Blueprint Inquiry - Route to Pipeline |
| Blueprint proposed → follow-up | BUILT AND PUBLISHED | [TMT] Blueprint Proposed - Follow-Up Task |
| Blueprint payment confirmed → credit eligibility | REUSED AND VERIFIED | "Blueprint Payment Confirmed — Credit Eligibility" (inherited, published v4) |
| Blueprint sold → implementation handoff | REUSED AND VERIFIED | "Implementation Handoff" (inherited, published v9) covers this transition already |

## 7. Implementation and delivery handoff

| Function | Status | Asset |
|---|---|---|
| Implementation/delivery handoff | REUSED AND VERIFIED | "Implementation Handoff" (inherited, v9) |
| Scope change during delivery | REUSED AND VERIFIED | "Scope Change Needed — Decision Task" (inherited, v3) |
| Agreement signed → payment due | REUSED AND VERIFIED | "Agreement Signed — Route to Payment Due" (inherited, v3) |
| Estimate lifecycle (sent/viewed/accepted/declined) | REUSED AND VERIFIED | 4 inherited workflows cover this fully |

## 8. Modern Trades CRM (MTCRM) plan/demo/setup/provisioning/nurture

| Function | Status | Asset |
|---|---|---|
| Plan/demo/setup intake routing | BUILT AND PUBLISHED | [MTCRM] Start Setup + [MTCRM] Demo Request workflows |
| MTCRM lost reason | BUILT AND PUBLISHED | [MTCRM] Lost - Capture Reason Task |
| MTCRM long-term nurture | REUSED AND VERIFIED | "Long-Term Nurture Entry" + "Long-Term Nurture — Engagement Upsert" (inherited, pipeline-agnostic, already apply to any opportunity including MTCRM's "Long-Term Nurture" stage) |
| MTCRM demo/setup follow-up, provisioning task | SPECCED, NOT BUILT | Full spec in `TMT_WORKFLOW_SPECS_PENDING.md` #2 — not an external gate, ready for copy-paste build once the browser tool recovers |

## 9. Newsletter

| Function | Status | Asset |
|---|---|---|
| Field Notes welcome | REUSED AND VERIFIED (bug-fixed) | "Field Notes — Subscriber Welcome" — found wired to the wrong form this session, corrected to the real "Pinellas Contractor Field Notes Signup" form, re-verified live |
| Growth & Systems Brief welcome | BUILT AND PUBLISHED | [NEWSLETTER] Growth & Systems Brief - Subscriber Welcome |
| Preference update | BUILT AND PUBLISHED | [NEWSLETTER] Preference Update - Tag Contact |
| Unsubscribe / suppression | BUILT AND PUBLISHED | [SHARED] Global Unsubscribe - Suppress Contact |
| Re-engagement / win-back sequence | BLOCKED (deferred, not gated) | Not built this session — requires original email copy authorship, which is content work, not a platform gate. No sending infrastructure blocker exists (email already sends successfully via the two welcome workflows). |

## 10. Reactivation, review, referral, expansion

| Function | Status | Asset |
|---|---|---|
| Reactivation outreach | REUSED AND VERIFIED | "Reactivation - Outreach Started" (inherited, v3) |
| Referral received | REUSED AND VERIFIED | "Referral - Received" (inherited, v3) |
| Warm relationship / task reminders | REUSED AND VERIFIED | "Warm Relationship - Task and Reminder Support" (inherited, v5) |
| Review request | SPECCED, NOT BUILT | Full spec in `TMT_WORKFLOW_SPECS_PENDING.md` #4 — trigger on Client Delivery & Outcomes / COMPLETE-NEXT ENGAGEMENT stage (stage ID needs re-verification via fresh `get-pipelines` before build); email copy drafted as template #16 in `TMT_EMAIL_TEMPLATES.md` |
| Referral eligibility (outbound ask) | SPECCED, NOT BUILT | `TMT_WORKFLOW_SPECS_PENDING.md` #5 — recommended merged into the same workflow as review-eligibility (two Add Task actions); email copy drafted as template #17 |
| Customer expansion / upsell | REUSED AND VERIFIED | "Long-Term Nurture — Engagement Upsert" functions as the expansion-signal workflow per its inherited classification |

## 11. Phone, SMS, paid AI

| Function | Status | Reasoning |
|---|---|---|
| Missed-call recovery | BLOCKED — genuine, verified | No phone number provisioned on this location (`active-numbers` returns 0). GHL's "Call missed" trigger requires selecting a connected number in the trigger config — with zero numbers connected, the trigger cannot even be configured, let alone tested. This is not a workaroundable draft; there is no trigger surface to build against until a number exists. |
| AI Front Desk | BLOCKED — genuine, verified | Same root cause (no phone number) plus AI Agents is a separate paid activation not enabled on this location. No inactive draft is possible because the feature's setup flow itself requires the paid module to be turned on first — confirmed by checking the AI Agents section, which shows an activation prompt, not a configurable workflow. |

## 12. Reusable email assets and dashboard

| Function | Status | Asset |
|---|---|---|
| Reusable email copy (11 remaining templates) | DRAFTED, NOT WIRED | `TMT_EMAIL_TEMPLATES.md` — copy-ready, needs merge-tag mapping and GHL email-action build |
| Owner dashboard expanded widgets | SCOPED, NOT BUILT | `TMT_DASHBOARD_WIDGET_SCOPING.md` — 6 widgets confirmed natively addable with no dependency, 3 likely need a custom report, 2 correctly blocked (calendar business hours, review-eligibility workflow) |

## Known gaps — logged honestly, not hidden behind a gate label

These are real, uncompleted work, distinct from the phone/A2P/paid-AI items above which are
genuinely blocked by an external prerequisite:

1. Shop Visit SMS reminder + no-show handling (email-channel version is buildable, not done)
2. MTCRM demo/setup follow-up + provisioning internal task — now fully specced, see `TMT_WORKFLOW_SPECS_PENDING.md` #2
3. Newsletter re-engagement/win-back sequence (needs email copy)
4. Review-request and referral-eligibility workflows — now fully specced, see `TMT_WORKFLOW_SPECS_PENDING.md` #4/#5
5. MTCRM Qualified and MTCRM Won handoff tasks — now fully specced, see `TMT_WORKFLOW_SPECS_PENDING.md` #1/#3
6. 11 reusable email templates drafted but not wired into GHL
7. Expanded dashboard widgets scoped but not added

None of these require phone, SMS, A2P, paid AI, Stripe, or business hours. Items 2 and 4–5 are no
longer blocked on missing specs — they are ready for copy-paste build once the browser automation
tool recovers from its current degraded state (see `TMT_REVENUE_ACQUISITION_STATUS.md`).
