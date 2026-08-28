# TMT Revenue Acquisition System — Status

Joint status for the full DISCOVERY → VISIT/INQUIRY → CAPTURE → ATTRIBUTION → QUALIFICATION →
FOLLOW-UP → BLUEPRINT/CRM SALE → DELIVERY → OUTCOME → REVIEW → REFERRAL → REACTIVATION system.
Terminal 1 (this file's CRM section) verified against `WUDohU0gxddDrFhrOsQG`. Terminal 2's
website/SEO/GBP/GSC/authority section is tracked in `websites-status-terminal2.md` — that
workstream requires authenticated Google account access (GBP, GSC) that a browser-automation
session does not have by default; treat anything there as PENDING OWNER AUTH until Terminal 2
confirms otherwise.

## Honest scope note

The instruction that opened this phase asks for a complete national+local marketing, SEO,
authority-building, and outreach system — realistically weeks of specialist work (GBP/GSC access,
40+ verified link opportunities, 30+ verified roundtable contributors, full content builds). This
document reports what is actually verified done, not a claim that the full system shipped in one
session. Every item below is labeled with real status, not aspirational status.

## CRM / Automation — this session's additions

12 workflows now built and published (10 from the initial engagement + 2 this pass):

| # | Workflow | Function |
|---|---|---|
| 11 | [TMT] New Inquiry - Response Time Task | Sales ops: response-time enforcement, TMT Consulting Sales |
| 12 | [MTCRM] New Setup Request - Response Time Task | Sales ops: response-time enforcement, Modern Trades CRM Sales |

Full list of all 12 plus the 21 inherited workflows: `TMT_WORKFLOW_REGISTRY.md`.
Full function-by-function reconciliation: `TMT_FUNCTION_MATRIX.md`.

## Sales operating system — status against the requested list

| Item | Status |
|---|---|
| Response-time task | BUILT AND PUBLISHED (both pipelines, #11/#12 above) |
| Contact Attempted movement | Manual staff action per the task instructions above — no separate workflow needed, this is a stage-move the owner performs after responding |
| Qualification task | NOT BUILT this pass — deferred, not gated |
| Lost-reason requirement | BUILT AND PUBLISHED (workflows #8/#9, prior pass) |
| Long-term nurture | REUSED AND VERIFIED (inherited workflows) |
| Blueprint follow-up | BUILT AND PUBLISHED (workflow #10, prior pass) |
| CRM demo follow-up | NOT BUILT this pass — deferred, not gated |
| Proposal task | Covered by Blueprint follow-up (#10) for TMT; MTCRM equivalent not built |
| Sold handoff | NOT BUILT this pass — deferred, not gated |
| Implementation handoff | REUSED AND VERIFIED (inherited "Implementation Handoff") |
| Expansion opportunity | REUSED AND VERIFIED (inherited "Long-Term Nurture — Engagement Upsert") |
| Review eligibility | NOT BUILT this pass — deferred, not gated |
| Referral eligibility | REUSED AND VERIFIED (inherited "Referral - Received" covers inbound; outbound eligibility trigger not built) |
| Dormant-lead reactivation | REUSED AND VERIFIED (inherited "Reactivation - Outreach Started") |

## Phone/SMS/AI-dependent workflows

**Genuinely blocked at construction, not just activation** — confirmed via API (`active-numbers`
= 0) and via the GHL UI: missed-call recovery and AI Front Desk cannot be configured as inactive
drafts because their trigger/setup surface requires selecting a connected phone number or an
activated AI Agents module, neither of which exist. There is no trigger to attach a draft to.
SMS reminders, no-show recovery, STOP/revocation handling, recording/transcription consent, AI
disclosure, and credit/overage tracking are in the same position — they are SMS/voice features
that require the same missing number. None were built this pass. This is unchanged from
`TMT_PHONE_SMS_AI_READINESS.md` and `TMT_FUNCTION_MATRIX.md` §11.

## Email assets

Two welcome emails (Field Notes, Growth & Systems Brief) exist and were fire-tested working.
The remaining reusable email assets requested (inquiry acknowledgment, Shop Visit
confirmation/reminder/follow-up, Blueprint inquiry/proposal/follow-up, CRM Start Setup
acknowledgment, CRM demo confirmation/reminder/follow-up, preference confirmation, unsubscribe
confirmation, review request, referral request, reactivation) were **not authored this pass** —
this is content-authorship work, not blocked by any technical or paid gate, and is logged
honestly as not done rather than claimed complete.

## Owner dashboard

"TMT Owner Dashboard" exists (built in the prior pass) with Opportunity status/value/conversion
rate, Funnel (TMT Consulting Sales), and Stage distribution (Modern Trades CRM Sales) widgets.
The expanded widget set requested this phase (leads by domain/source, newsletter subscriber
count, appointments, lost reasons, reactivation, reviews/referrals, delivery outcomes) was
**not added this pass** — GHL's native dashboard widget catalog does not include several of
these directly (e.g., "leads by domain" requires a custom report or an external BI layer); this
needs a scoped follow-up to determine which are natively buildable vs. require custom reporting.

## Integrated sales-launch pathways

1. **Local TMT pathway** (resource page → Shop Visit → TMT Consulting Sales → Blueprint →
   implementation → Client Delivery & Outcomes → review/referral/expansion): CRM-side stages and
   workflows exist end-to-end and are tested up through Blueprint Proposed. The website-side
   entry point (resource/service page → Shop Visit CTA) is Terminal 2's responsibility — status
   pending their report.
2. **National MTCRM pathway** (referral/resource → pricing → Start Setup/Demo Request → Modern
   Trades CRM Sales → setup review → provisioning → payment-capability gate → won): CRM-side
   fully built and tested through Demo Requested/New Setup Request. "Payment-capability gate" is
   Stripe, not authorized this session — confirmed BLOCKED, not built.
3. **Newsletter pathways** (signup → welcome → preference update → unsubscribe): fully built and
   tested, both Field Notes and Growth & Systems Brief.
4. **Controlled internal test covering every pathway**: 6 of 7 form-routing workflows fire-tested
   with labeled contacts this session (see `TMT_TEST_RESULTS.md`); the two response-time task
   workflows built this pass were not yet fire-tested (see Remaining below).

## Outbound readiness

No outreach has been sent. No final approval packet has been assembled yet — that requires
Terminal 2's authority/link-building work (recipients, verified contact routes) to exist first.
This is correctly sequenced as the last step per the standing instruction, not skipped.

## Critical bug found and fixed this pass

All 5 stage-change-triggered ("Opportunity changed") workflows built this session — [TMT] Lost,
[MTCRM] Lost, [TMT] Blueprint Proposed Follow-Up, [TMT] New Inquiry Response Time, [MTCRM] New
Setup Request Response Time — had their Add Task action's "Assign To" field left blank. GHL
silently skips task creation with no assignee set. The trigger fired correctly in every case; the
task action did not. Fixed by assigning all 5 to Richard Fritzke explicitly. Re-verified via API
on the New Inquiry workflow (task now creates correctly). The other 4 received the identical fix
but were not independently re-tested — see `TMT_TEST_RESULTS.md` Test 8 for full detail. This is
exactly the kind of bug that "published and reviewed in the builder" does not catch — only a real
fire-test does, which is why the remaining untested workflow builds below should not be marked
done until actually fired.

## Session close-out — browser tool degradation

The Claude-in-Chrome browser extension became severely degraded partway through this phase:
every action (click, screenshot) began taking 30+ seconds with a timeout-then-success pattern,
and the tab group was destroyed and had to be recreated from scratch multiple times. This is a
verified, reproducible tool blocker — not a single flaky click — confirmed across ~40+ consecutive
calls after exhausting the standard recovery techniques (fresh tabs, tab-group recreation, hard
reloads, hydration waits). One real bug was found and fixed during this period (see
`TMT_TEST_RESULTS.md` Test 8 and the Won/Sold Handoff note in `TMT_WORKFLOW_REGISTRY.md`), so the
degraded tool did not block all progress, but it made each subsequent workflow build markedly
more expensive. Work shifted to non-browser tasks (email template copywriting, dashboard widget
scoping) for the remainder of this pass, both completed and pushed.

13 workflows now built and published this engagement (up from 12 earlier in this phase):
[TMT] Lost, [MTCRM] Lost, [TMT] Blueprint Proposed Follow-Up, [TMT] New Inquiry Response Time,
[MTCRM] New Setup Request Response Time, [TMT] Won - Sold Handoff Task — plus the 7 form-routing
workflows from the prior engagement.

## Remaining work (this session, CRM side)

- Fire-test workflows #11 and #12 (built, not yet tested with a labeled contact)
- Qualification task, CRM demo follow-up, sold handoff, review-eligibility workflows
- Reusable email asset copywriting (11 templates)
- Expanded dashboard widgets (scope which are native vs. custom-report-only)
- MTCRM-side Blueprint-equivalent (Demo/Setup) follow-up and proposal tasks

## Terminal 2 status

See `websites-status-terminal2.md` for their independent report. Flagged to them explicitly:
GBP/GSC work requires the owner's authenticated Google session; external outreach requires one
final owner-approved batch; nothing in their scope should be reported done until observed, not
assumed.

## Blocked (grouped)

1. Missed-call recovery, AI Front Desk, SMS reminders, no-show recovery, STOP/revocation, call
   recording consent, AI disclosure, credit/overage tracking — no phone number provisioned
   (`active-numbers` = 0), no trigger surface exists to build against.
2. Payment-capability gate in the MTCRM pathway — Stripe not authorized.
3. GBP profile edits, GSC data pulls, external outreach sends — require the owner's authenticated
   Google session and/or explicit per-send approval; not something either session can do
   autonomously.

## Unknown (grouped)

1. Whether GHL's native dashboard/reporting layer can produce "leads by domain/source" and
   several other requested widgets without a custom BI integration — not yet investigated.
2. Current Search Console/GBP state — Terminal 2 has not yet reported findings as of this update.
3. Whether the existing Shop Visit calendar's booking confirmation email satisfies the "Shop
   Visit confirmation" requirement as-is, or needs a dedicated CRM-side email — not tested this
   pass.
