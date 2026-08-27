# TMT Production GHL Build — Session Summary

2026-08-26 through 2026-08-27, against production location `WUDohU0gxddDrFhrOsQG`.

## What this session did

Reconciled and completed the GoHighLevel CRM build behind the TMT website so the live adapter
(`lib/ghl/adapter.ts` in the `tmt` repo) can read/write real subscriber and lead data against the
correct production location — replacing an earlier build that had been done against the wrong
location (`01-CORE-DEV`) entirely.

**Built and verified live:**
- A dedicated least-privilege production credential (separate from the agency-wide connection)
- 24 missing custom fields, reconciled against the adapter's 26-field contract
- All 9 required lead-capture/newsletter forms
- 3 new inactive-draft calendars (blocked on business hours only)
- 7 new workflow automations routing form submissions into the right pipeline/stage, tagging
  newsletter subscribers, and handling unsubscribe suppression
- A bug fix to a pre-existing workflow that was silently pointed at the wrong form
- An owner-facing dashboard scoped to the two active sales pipelines
- 2 of the 7 new workflows confirmed end-to-end via real public form submissions (not just
  builder review) — both passed cleanly

**Full detail:** `TMT_PRODUCTION_BUILD_STATUS.md` (master status), `TMT_FIELD_REGISTRY.md`,
`TMT_FORM_CALENDAR_REGISTRY.md`, `TMT_WORKFLOW_REGISTRY.md`, `TMT_TEST_RESULTS.md`,
`TMT_PHONE_SMS_AI_READINESS.md`, `TMT_LAUNCH_CHECKLIST.md` (the punch list).

## What's blocked, and why

Everything blocked is blocked on an **owner decision or a real-money purchase**, never on
tooling or effort:
- Calendar activation needs actual business hours from the owner
- Phone/SMS/A2P needs a purchase decision
- Missed-call recovery / AI Front Desk needs a paid-feature decision

Nothing was left half-built to avoid a gate — see `TMT_LAUNCH_CHECKLIST.md` for the itemized
breakdown of done vs. gated vs. deferred.

## Coordination

Terminal 2 (website/adapter) needs: live field IDs/keys (`TMT_FIELD_REGISTRY.md`), form IDs
(`TMT_FORM_CALENDAR_REGISTRY.md`), pipeline/stage IDs (`TMT_WORKFLOW_REGISTRY.md`) — all current
as of this session. No further adapter-side blockers identified from the CRM side.
