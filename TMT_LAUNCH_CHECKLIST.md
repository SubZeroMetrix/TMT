# TMT Production Launch Checklist

Against `WUDohU0gxddDrFhrOsQG`, verified 2026-08-27. See `TMT_PRODUCTION_BUILD_STATUS.md`,
`TMT_FIELD_REGISTRY.md`, `TMT_FORM_CALENDAR_REGISTRY.md`, `TMT_WORKFLOW_REGISTRY.md`,
`TMT_TEST_RESULTS.md`, `TMT_PHONE_SMS_AI_READINESS.md` for full detail behind each line.

## DONE — no gate, live now

- [x] Dedicated production credential created, verified, wired into Vercel (`GHL_LOCATION_ID`, `GHL_PRIVATE_INTEGRATION_TOKEN`, `GHL_PRODUCTION_LOCATION_CONFIRMED`), redeployed
- [x] 26-field adapter reconciliation complete — 24 new fields created, 2 reused, all live IDs recorded in `TMT_FIELD_REGISTRY.md`
- [x] Load-bearing doc error fixed — the shared integration contract pointed at the wrong GHL location (`01-CORE-DEV`); corrected and redirected to production
- [x] All 9 required forms built and verified live, each wired to correct field keys
- [x] 13 new automation workflows built, published, and live (form→pipeline routing ×4, newsletter welcome ×1, unsubscribe suppression ×1, preference-update tagging ×1, stage-change internal tasks ×6: Lost reason ×2 pipelines, Blueprint Proposed follow-up, response-time tasks ×2 pipelines, Won/Sold Handoff)
- [x] 11 reusable email templates drafted (`TMT_EMAIL_TEMPLATES.md`) — copy ready, not yet wired into GHL
- [x] Dashboard widget scoping complete (`TMT_DASHBOARD_WIDGET_SCOPING.md`) — 6 widgets confirmed natively addable, 3 likely need a custom report, 2 correctly blocked on other dependencies
- [x] Full specs written for all remaining CRM-side workflows (`TMT_WORKFLOW_SPECS_PENDING.md`) — trigger/condition/action/assignee/stage-ID detail ready for copy-paste build
- [x] Full function-matrix reconciliation against every required TMT/MTCRM/newsletter/delivery/customer-growth function — see `TMT_FUNCTION_MATRIX.md` for REUSED/BUILT/DRAFT/BLOCKED status of every named function
- [x] Critical bug found and fixed: all 5 stage-change-triggered workflows had no task assignee set, causing GHL to silently skip task creation. Fixed on all 5, re-verified on 1 via API fire-test. See `TMT_TEST_RESULTS.md` Test 8.
- [x] Pre-existing "Field Notes — Subscriber Welcome" workflow bug found and fixed (was wired to the wrong form, meaning real signups never reached it)
- [x] Orphaned empty draft workflow cleaned up (soft-deleted)
- [x] TMT Owner Dashboard built (cloned from default, pipeline filters scoped to TMT Consulting Sales + Modern Trades CRM Sales)
- [x] 6 of 7 form-routing workflows confirmed via live public-form end-to-end test this pass (General TMT Contact was verified in an earlier session) — all passed, one cosmetic naming quirk found (zero functional impact, documented in `TMT_TEST_RESULTS.md`)
- [x] All 21 inherited workflows classified and confirmed untouched/preserved where required (TMT Sales pipeline + 9 TradeFit opportunities, Client Delivery & Outcomes pipeline, SHARED FOUNDATION workflows)

## GATED — built but cannot go fully live without an external decision

| Item | Gate | Owner action needed |
|---|---|---|
| 3 new calendars (Modern Trades CRM Info/Demo, TMT Consultation, Growth & Systems Blueprint Review) | Built as inactive drafts, no business hours set | Confirm actual business hours before activating — these are public booking surfaces |
| Phone number / SMS / A2P | Nothing provisioned | Purchase decision required (real cost) — explicitly out of scope this session |
| Missed-call recovery / AI Front Desk | Not activated | Owner decision, paid feature |
| Stripe / payments | Not touched this session | Not assessed — flag for a dedicated pass if TMT needs online payment collection |
| 1 form-routing workflow | Built and published live, but not individually fire-tested with a real public submission this session | Optional: run the same test-contact-then-delete pattern documented in `TMT_TEST_RESULTS.md` for full confidence |
| [TMT] Won - Sold Handoff Task | Built, published, confirmed enabled after a hard reload — not yet fire-tested with a live stage move | Same test pattern before relying on it in production |
| Browser automation tool | Severely degraded (30s+ per action, tab group repeatedly destroyed) as of this pass, verified reproducible across 40+ calls | No owner action — technical, will retry when tool recovers. See `TMT_REVENUE_ACQUISITION_STATUS.md` |

## NOT BLOCKED, just not done — safe to defer

- Cosmetic: "Trade / Type of Business" field lands below Submit button on "General TMT Contact" form (functionally correct, just visually out of order)
- "Form 1" (unnamed legacy form) still flagged DO NOT USE, zero confirmed dependents now that Field Notes welcome was repointed — safe to delete once owner confirms no other use
- Newsletter welcome emails for Field Notes and Growth & Systems Brief exist; no re-engagement/win-back email sequence built this session (not in the original scope list as a hard requirement)
- 6 remaining CRM-side workflows fully specced but not yet built (`TMT_WORKFLOW_SPECS_PENDING.md`): MTCRM Qualified next-steps, MTCRM Demo Completed follow-up, MTCRM Won handoff, review-eligibility, referral-eligibility. Dormant-lead reactivation confirmed REUSED, no new build needed.
- 11 email templates drafted but not wired into any GHL email action yet

## What was explicitly NOT touched (per standing instructions)

- Arbor Addicts GHL build (separate owner hold, unrelated)
- TMT Sales pipeline and its 9 TradeFit vendor opportunities
- Client Delivery & Outcomes pipeline and its stages
- Any spend-incurring action (no purchases, no A2P submission, no paid AI activation)
