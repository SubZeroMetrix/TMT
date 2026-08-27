# TMT Field Registry — Adapter Field Reconciliation

VERIFIED LIVE this session against `WUDohU0gxddDrFhrOsQG`. Applies the locked production rule:
REUSE only on exact semantic match · EXTEND only when it preserves current dependencies ·
CREATE only genuine gaps · native GHL DND enforces suppression, custom fields are audit-only.

| Adapter key | Purpose | Candidate live field | Exact match? | Dependencies | Action | Final key |
|---|---|---|---|---|---|---|
| originalLeadSource | Immutable first-touch source | none (contact.lead_source is single/mutable) | NO | — | CREATE | `contact.original_lead_source` (new) |
| latestLeadSource | Current/latest-touch source | `contact.lead_source` (SINGLE_OPTIONS) | YES — same fact, already the "current known source" | Used by sales/outreach workflows (Evidence-Led Cold, Warm Inbound, etc.) as-is | REUSE | `contact.lead_source` (id `GaseXYpVnSwaNPVHTqzC`) |
| originalCampaign | Immutable first-touch campaign/UTM detail | none | NO | — | CREATE | `contact.original_campaign` (new) |
| latestCampaign | Current campaign/UTM detail | `contact.lead_source_detail` (TEXT) | PARTIAL — same shape (free text campaign/UTM detail) but already carries sales-pipeline meaning ("Campaign, UTM, referring page, or specific detail behind Lead Source") for human-entered leads, not website-submission provenance | Referenced by manual outreach process, not currently field-mapped in any workflow action found in the 21-workflow list | CREATE — repurposing risks colliding two different producers (human-entered vs. adapter-written) of the same field | `contact.latest_campaign` (new) |
| originalDomain | Which property (subzerometrix.com, tmt, etc.) the contact first touched | none | NO | — | CREATE | `contact.original_domain` (new) |
| originalLandingPage | First landing page URL | none | NO | — | CREATE | `contact.original_landing_page` (new) |
| sourceTool | Which on-site tool/form generated the submission | none | NO | — | CREATE | `contact.source_tool` (new) |
| trade | Contractor's trade | `contact.trade__type_of_business` (SINGLE_OPTIONS: Cleaning/Electrical/General Contracting/Handyman/HVAC/Landscaping/Other/Painting/Plumbing/Roofing/Solar) | YES — exact same business fact | Used across TMT Sales / Consulting Sales qualification | REUSE | `contact.trade__type_of_business` (id `ZlVtVCVUk1tNAzUfftxg`) |
| — | (n/a — duplicate found) | `contact.contacttrade__type_of_business_yu5_copy` — identical options, looks like an accidental duplicate field | — | Unknown, none found referencing it | DO NOT USE — flag for owner cleanup, do not delete without confirming zero dependents | id `pmHDRcr1d2NrnHbsMtUy` |
| county | Contact's county | none | NO | — | CREATE | `contact.county` (new) |
| geographicPriority | St. Pete/Tampa priority classification | none | NO | — | CREATE | `contact.geographic_priority` (new) |
| utmSource / utmMedium / utmCampaign / utmContent / utmTerm | Raw UTM parameters | none (all 5) | NO | — | CREATE (5 fields) | `contact.utm_source/medium/campaign/content/term` (new) |
| subscriptionInterests | Free-form list of interests | none | NO | — | CREATE | `contact.subscription_interests` (new) |
| newsletterLocalInterest | Field Notes publication opt-in (preference, not consent) | `contact.newsletter_consent` (CHECKBOX, single option "Yes, send me Field Notes by email.") | NO — rule: publication preference ≠ consent, and existing field conflates the two into one checkbox | Live on the site's newsletter signup form already (dateAdded 2026-08-17) | CREATE new preference field; leave `newsletter_consent` in place as legacy, do not delete (owner decision needed on migrating the existing form) | `contact.newsletter_local_interest` (new) |
| newsletterCrmInterest | Growth & Systems Brief publication opt-in | none | NO | — | CREATE | `contact.newsletter_crm_interest` (new) |
| unsubscribeStatus | Suppression audit trail | none | NO — and per rule, this must never be the enforcement mechanism | — | CREATE (audit metadata only) + adapter must also set native GHL DND on unsubscribe (code requirement, not a field) | `contact.unsubscribe_status` (new, audit-only) |
| crmPlanInterest | Modern Trades CRM plan selection | `contact.proposed_implementation_package` (SINGLE_OPTIONS: Foundation Build $4,500/Full Growth System $7,500/Flagship Founding Partnership $9,500/Growth Ops Advisory/Ongoing Growth Partner $3,500mo/Not yet proposed) | NO — different product. This field is TMT consulting engagement tier; Modern Trades CRM is a separate product/pipeline with its own plan names | — | CREATE | `contact.crm_plan_interest` (new) |
| smsConsentStatus / smsConsentSource / smsConsentTimestamp | SMS consent + auditable provenance | none | NO | — | CREATE (3 fields) | `contact.sms_consent_status/source/timestamp` (new) |
| emailConsentStatus / emailConsentSource / emailConsentTimestamp | Email consent + auditable provenance | none | NO | — | CREATE (3 fields) | `contact.email_consent_status/source/timestamp` (new) |

## Summary
- **REUSE: 2** (`lead_source`, `trade__type_of_business`)
- **CREATE: 24** (genuine gaps — no live field carries the same fact; corrected from an earlier arithmetic slip that said 22)
- **DO NOT USE: 1**, outside the 26-key set (duplicate trade field, flagged not deleted)
- **EXTEND: 0** — no case met the bar (preserves current dependencies + same underlying fact); `lead_source_detail` was the closest candidate but repurposing it risks colliding two different writers of the same field, so it's left alone and a new field created instead.

## Rule compliance notes
- Immutable first-touch vs. mutable latest-touch: enforced by creating separate `original_*` (write-once, adapter must check-before-write) and reusing/creating `latest_*` fields that update every submission.
- Email/SMS consent kept fully separate (6 new fields total, 3 per channel: status/source/timestamp).
- Publication preference (`newsletter_local_interest`, `newsletter_crm_interest`) kept separate from consent (`email_consent_status`) — no shared field.
- Native GHL DND remains the actual suppression enforcement; `unsubscribe_status` is audit-only. **Code requirement for hp-6f**: the adapter's `unsubscribe()` function must also call the GHL contact DND-update endpoint, not just write the custom field.
- No calculator financial inputs are in this field set — none of the 22 CREATE fields store raw calculator numbers.
- CRM-plan-interest field is newsletter/CRM-agnostic — an adapter subscriber choosing only newsletter publications must not get an opportunity created (existing adapter code already does not create opportunities; confirmed by reading `upsertSubscriber` — it only calls `/contacts/upsert`, never touches `/opportunities`).

## Status — VERIFIED LIVE, all 24 fields created 2026-08-26/27

All 24 CREATE fields now exist live on `WUDohU0gxddDrFhrOsQG`, created via `locations.create-custom-field`. Final live keys/IDs — **3 differ from the adapter's original guessed key** because GHL auto-derives `fieldKey` from the field `name`, and names with parentheticals/em-dashes slugify differently than expected. `field-registry.ts` must be updated to these exact keys, not the original guesses:

| Adapter concept | Final live key | Live ID | Matches adapter's original guess? |
|---|---|---|---|
| originalLeadSource | `contact.original_lead_source` | `AVVx7qmvpRQmxvDnzdDK` | yes |
| originalCampaign | `contact.original_campaign` | `DUGHcewKYUrmR7zyFtmX` | yes |
| originalDomain | `contact.original_domain` | `B4Za6m562vitFBQQTCxY` | yes |
| originalLandingPage | `contact.original_landing_page` | `EyqrEXq02SWwQly4cukQ` | yes |
| sourceTool | `contact.source_tool` | `3LbM8ZOQUsP7Z7sWcCyo` | yes |
| county | `contact.county` | `kInh1ajxjQiviyG2Dq3x` | yes |
| geographicPriority | `contact.geographic_priority` | `XYkD18mnOhEdywuBhleP` | yes |
| utmSource | `contact.utm_source` | `mmr1CUyxRmUNmfsQ19lN` | yes |
| utmMedium | `contact.utm_medium` | `tQPKWGYxknsdBRiZR0rO` | yes |
| utmCampaign | `contact.utm_campaign` | `51VWr2Zw4hoTxXMLEJy4` | yes |
| utmContent | `contact.utm_content` | `eEGdVmitNQ6I8KliyjCF` | yes |
| utmTerm | `contact.utm_term` | `UIzavL6LExdWWbpCy0el` | yes |
| subscriptionInterests | `contact.subscription_interests` | `iKoGoU3bA7wYIoLC20FX` | yes |
| newsletterLocalInterest | **`contact.newsletter__local_interest_field_notes`** | `6RPDNjS4OQiYd6K8HYAO` | **NO — differs, update adapter** |
| newsletterCrmInterest | **`contact.newsletter__crm_interest_growth__systems_brief`** | `AMBGclucIiTTI5tkDzLM` | **NO — differs, update adapter** |
| unsubscribeStatus | `contact.unsubscribe_status` | `dVkYQ0Z3PoLCKYKjlInI` | yes |
| crmPlanInterest | `contact.crm_plan_interest` | `XmPi59mZZ3b4SnjWsOV5` | yes |
| smsConsentStatus | `contact.sms_consent_status` | `JojqsFHOpLxHGvoymD6A` | yes |
| smsConsentSource | `contact.sms_consent_source` | `okMzQWt5PqUP9eWzkNxy` | yes |
| smsConsentTimestamp | `contact.sms_consent_timestamp` | `6xn024OqTjBMKqkivxCO` | yes |
| emailConsentStatus | `contact.email_consent_status` | `5p5ENGT0UcFatqRexShG` | yes |
| emailConsentSource | `contact.email_consent_source` | `NQWt85i2pZ1ccRKtZTRy` | yes |
| emailConsentTimestamp | `contact.email_consent_timestamp` | `wtC3QMfBjrymC8fiAlH6` | yes |
| latestCampaign | **`contact.latest_campaign_website_adapter`** | `vY8TgbtciPIz02pmPfgl` | **NO — differs, update adapter** |

Plus the 2 REUSE fields (no creation needed):
| Adapter concept | Live key | Live ID |
|---|---|---|
| latestLeadSource | `contact.lead_source` | `GaseXYpVnSwaNPVHTqzC` |
| trade | `contact.trade__type_of_business` | `ZlVtVCVUk1tNAzUfftxg` |

**Reconciled location-wide custom field total: 99 + 24 = 123.**

## Action required from hp-6f (website/adapter session)
Update `lib/ghl/field-registry.ts` `CONTACT_FIELD_KEYS` to the 26 final live keys above (23 unchanged from original guess, 3 renamed: newsletterLocalInterest, newsletterCrmInterest, latestCampaign). The adapter's `getConfig()`/write functions still gate on `GHL_PRODUCTION_LOCATION_CONFIRMED` — that remains unset, adapter stays fail-closed on the credential question independent of this schema fix.
