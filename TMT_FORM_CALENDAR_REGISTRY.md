# TMT Form & Calendar Registry

VERIFIED LIVE 2026-08-27 against `WUDohU0gxddDrFhrOsQG`.

## Forms — 2 exist, VERIFIED LIVE
| Name | ID | Notes |
|---|---|---|
| TMTM Shop Visit Qualification | `7eoRC4HYMUcyQ4QuZhm3` | Linked to the "Contractor Technology & AI Shop Visit" calendar's `formId`. In active use. |
| Form 1 | `g4mx9QgruEkTfcAJxul9` | Unnamed/generic name — looks like a leftover/draft form. Not linked to any calendar found. Flag for owner review: DO NOT USE until purpose confirmed, do not delete without confirming zero dependents. |

## Forms required per the build spec — ALL COMPLETE, VERIFIED LIVE 2026-08-27

Built via the native GHL form builder (browser UI — no create-form API exists, confirmed by API search). Each wired to its correct live custom-field key from `TMT_FIELD_REGISTRY.md`.

| Form | Status | Key field(s) added |
|---|---|---|
| General TMT Contact | BUILT, VERIFIED LIVE | Trade/Type of Business (`contact.trade__type_of_business`) |
| Global Unsubscribe | BUILT, VERIFIED LIVE | name/phone/email capture only |
| Newsletter Preference Update | BUILT, VERIFIED LIVE | both newsletter preference checkboxes |
| Growth & Systems Blueprint Inquiry | BUILT, VERIFIED LIVE | Primary Operational or Technology Problem |
| Modern Trades CRM Start Setup | BUILT, VERIFIED LIVE | CRM Plan Interest |
| Modern Trades CRM Demo Request | BUILT, VERIFIED LIVE | default contact fields (demo request doesn't need extra qualification fields) |
| Pinellas Contractor Field Notes Signup | BUILT, VERIFIED LIVE | Newsletter — Local Interest (Field Notes) |
| Growth & Systems Brief Signup | BUILT, VERIFIED LIVE | Newsletter — CRM Interest (Growth & Systems Brief) |
| Shop Visit Request | REUSED — "TMTM Shop Visit Qualification" already covers this, no duplicate created | n/a |

Known cosmetic issue: on "General TMT Contact," the Trade field landed below the Submit button rather than above it (drag-to-reorder via coordinates didn't take). Functionally correct — submits to the right field — but worth a quick manual reorder in the UI later.

Pipeline routing (which pipeline/stage a form submission creates an opportunity in) is not a form-level setting in GHL — it's controlled by a workflow triggered on form submission. That's part of the missing-workflows gap below, not a forms gap.

## Calendars — 1 exists, VERIFIED LIVE
| Name | ID | Duration | Type | Status |
|---|---|---|---|---|
| Contractor Technology & AI Shop Visit | `p3Eg9CU6B1CzBII5W6jq` | 60 min | service_booking | Active, live, `autoConfirm: true`, assigned to staff `qhmSJm3teofPIZAx2ynG` |

## Calendars required per the build spec
| Required calendar | Status |
|---|---|
| Modern Trades CRM Information/Demo — 30 min | **BUILT AS INACTIVE DRAFT** — id `iBM0mJMHWmocvO2BmNmf`, staff qhmSJm3teofPIZAx2ynG, `isActive: false`, no public booking link exposed |
| TMT Consultation — 60 min | **BUILT AS INACTIVE DRAFT** — id `5yWhQKqGiGYziNN8MRib`, same staff/pattern |
| Growth & Systems Blueprint Review — 60 min | **BUILT AS INACTIVE DRAFT** — id `2IPtXc34e7BauNfKeWuR`, same staff/pattern |
| Shop Visit | VERIFIED LIVE as "Contractor Technology & AI Shop Visit" — already matches the spec, reused, no duplicate created |

All 3 new calendars: round-robin, staff `qhmSJm3teofPIZAx2ynG`, 30/15min buffer, auto-confirm, reschedule/cancel allowed, `openHours: {}` (unset), `isActive: false`. **BLOCKED — activation only**: cannot go live/bookable until the owner provides actual business hours. No form (`formId`) attached to any of the 3 yet — pending the corresponding new forms below.

Staff ID resolved: `qhmSJm3teofPIZAx2ynG` = Richard Fritzke (richard@themoderntradesmentor.com), agency admin/owner, VERIFIED LIVE via `search-users`. Same user assigned to the existing Shop Visit calendar — confirmed correct target for the 3 new calendars, not a placeholder.

Business hours/availability for the new calendars: UNKNOWN — the existing calendar's `openHours` field returned empty (`{}}`), meaning it currently has no explicit hours configured. This could be an intentional always-open config or an unconfirmed gap on that calendar too; either way, replicating it onto 3 new customer-facing booking pages isn't safe to do unilaterally. **BLOCKED — do not create the 3 new calendars until the owner confirms actual business hours.** These are public booking surfaces; wrong/missing hours risks real customers booking at times nobody can honor. Staff ID is resolved and ready; hours are the only blocker.

## Status
Read-only inventory complete. Creating the 3 missing calendars and 8 missing forms is write work not yet started — deferred pending staff-ID confirmation (calendars) and field-registry availability for form field mappings (forms depend on the reconciled custom fields, which are now live per `TMT_FIELD_REGISTRY.md`).
