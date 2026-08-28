# TMT Owner Dashboard — Widget Scoping

Scoping pass against the expanded widget list requested this phase. "TMT Owner Dashboard" already
exists in GHL (see `TMT_WORKFLOW_REGISTRY.md`) with 3 widgets confirmed live: Opportunity
status/value/conversion rate (all pipelines), Funnel (TMT Consulting Sales), Stage distribution
(Modern Trades CRM Sales). This document scopes the rest of the requested list against GHL's
native dashboard widget catalog, based on the widget picker observed when the dashboard was
built. Verification of exact widget names requires reopening the dashboard editor in the browser
(deferred while the browser tool is degraded — see `TMT_REVENUE_ACQUISITION_STATUS.md`).

| Requested widget | Native GHL widget likely available | Status |
|---|---|---|
| Leads by domain/source | Contact source is a filterable field, but "by domain" (referring website) is not a standard native widget — would need a custom report or UTM-based smart list | LIKELY REQUIRES CUSTOM REPORT — not confirmed native |
| Local TMT inquiries | Achievable via a Funnel/Pipeline widget filtered to TMT Consulting Sales (already built) | NATIVELY AVAILABLE — already live |
| CRM setup requests | Pipeline/Opportunity widget filtered to Modern Trades CRM Sales, New Setup Request stage | NATIVELY AVAILABLE — needs a filtered widget added |
| Selected plans | Depends on whether "CRM Plan Interest" custom field has a reportable widget — GHL custom-field reporting is limited outside smart lists | UNKNOWN — needs a smart-list-based check |
| Newsletter subscribers | Tag-based count (`growth-systems-brief-subscriber`, Field Notes equivalent) — achievable via a Contacts-by-tag widget if one exists, otherwise via Smart List contact count | LIKELY AVAILABLE via Smart List, not a native "widget" |
| Appointments | Native Calendar/Appointments widget exists in GHL dashboards | NATIVELY AVAILABLE — not yet added to TMT Owner Dashboard |
| Shop Visits | Filtered Appointments widget scoped to the Shop Visit calendar | NATIVELY AVAILABLE — needs to be added |
| Blueprints | Pipeline widget filtered to Blueprint Proposed/Blueprint Sold stages | NATIVELY AVAILABLE — needs to be added |
| CRM demos | Filtered Appointments widget scoped to the 3 new (inactive) calendars, once live | BLOCKED on calendar activation (business hours gate) |
| Pipeline values | Already covered by the existing Opportunity value widget | NATIVELY AVAILABLE — already live |
| Stage conversions | Already covered by the existing Funnel/Stage distribution widgets | NATIVELY AVAILABLE — already live |
| Response time | No native "time to first response" widget observed in GHL's dashboard catalog | LIKELY REQUIRES CUSTOM REPORT — not confirmed native |
| Lost reasons | Requires the "Lost Reason" field to be populated (currently a manual task per workflows #8/#9) and a native lost-reason breakdown widget, if one exists | UNKNOWN — needs a widget-picker check |
| Reactivation | Tag-based count via the inherited "Reactivation - Outreach Started" workflow's tag | LIKELY AVAILABLE via Smart List, not a native "widget" |
| Reviews/referrals | No review/referral workflow tags exist yet to report on (see `TMT_REVENUE_ACQUISITION_STATUS.md` — review-eligibility workflow not yet built) | BLOCKED on the workflow existing first |
| Delivery outcomes | Would report off the Client Delivery & Outcomes pipeline, untouched this session | NATIVELY AVAILABLE — needs a filtered widget added, pipeline itself is inherited/preserved |

## Recommended build order (once browser tool is stable)

1. Add filtered Pipeline widgets: CRM setup requests, Blueprints, Delivery outcomes — all
   natively available, no new workflow dependency.
2. Add native Appointments widget for Shop Visits (calendar already live).
3. Confirm whether GHL's widget picker has a native "Contacts by tag" or "Smart List" widget type
   for newsletter subscriber counts and reactivation counts — if not, these need a Smart List
   view linked from the dashboard rather than an embedded widget.
4. Defer "leads by domain," "response time," and "lost reasons" breakdown — these likely need
   either a custom report (outside GHL's native dashboard) or accumulated data before they're
   useful (lost-reason task workflows just went live, no historical data yet).
5. CRM demo appointments and reviews/referrals widgets are correctly blocked — first on calendar
   business hours, second on the review-eligibility workflow not yet being built.

## Honesty note

This scoping is based on the widget picker as observed when the dashboard was originally built,
not a fresh audit — several "NATIVELY AVAILABLE" rows above should be re-verified against the
current widget-type list before building, since GHL's dashboard catalog can change.
