/**
 * GHL field keys sourced from GHL_WEBSITE_INTEGRATION_CONTRACT.md §4
 * (Terminal 1-maintained), re-verified live against `get-custom-fields`
 * 2026-08-30. Do NOT invent a key/id that isn't verified live -- if a field
 * this adapter needs isn't listed there, treat it as PENDING, not guessable.
 *
 * IMPORTANT: GHL's `/contacts/upsert` customFields entries require the
 * field's `id` -- `key` alone is silently ignored (confirmed 2026-08-30: a
 * live test submission with key-only customFields created the contact but
 * every custom field came back empty). CONTACT_FIELD_IDS below is what the
 * adapter must actually send; CONTACT_FIELD_KEYS is kept for readability/
 * cross-referencing against the contract doc and read-path lookups
 * (`customFieldValue` matches on key, which the API does still return).
 */

export const CONTACT_FIELD_KEYS = {
  originalLeadSource: "contact.original_lead_source",
  originalCampaign: "contact.original_campaign",
  latestCampaign: "contact.latest_campaign_website_adapter",
  originalDomain: "contact.original_domain",
  originalLandingPage: "contact.original_landing_page",
  sourceTool: "contact.source_tool",
  trade: "contact.trade__type_of_business",
  county: "contact.county",
  geographicPriority: "contact.geographic_priority",
  utmSource: "contact.utm_source",
  utmMedium: "contact.utm_medium",
  utmCampaign: "contact.utm_campaign",
  utmContent: "contact.utm_content",
  utmTerm: "contact.utm_term",
  subscriptionInterests: "contact.subscription_interests",
  newsletterLocalInterest: "contact.newsletter__local_interest_field_notes",
  newsletterCrmInterest: "contact.newsletter__crm_interest_growth__systems_brief",
  unsubscribeStatus: "contact.unsubscribe_status",
  crmPlanInterest: "contact.crm_plan_interest",
  smsConsentStatus: "contact.sms_consent_status",
  smsConsentSource: "contact.sms_consent_source",
  smsConsentTimestamp: "contact.sms_consent_timestamp",
  emailConsentStatus: "contact.email_consent_status",
  emailConsentSource: "contact.email_consent_source",
  emailConsentTimestamp: "contact.email_consent_timestamp",
} as const;

/** Field IDs for the same fields, keyed identically to CONTACT_FIELD_KEYS. Required by /contacts/upsert. */
export const CONTACT_FIELD_IDS: Record<keyof typeof CONTACT_FIELD_KEYS, string> = {
  originalLeadSource: "AVVx7qmvpRQmxvDnzdDK",
  originalCampaign: "DUGHcewKYUrmR7zyFtmX",
  latestCampaign: "vY8TgbtciPIz02pmPfgl",
  originalDomain: "B4Za6m562vitFBQQTCxY",
  originalLandingPage: "EyqrEXq02SWwQly4cukQ",
  sourceTool: "3LbM8ZOQUsP7Z7sWcCyo",
  trade: "ZlVtVCVUk1tNAzUfftxg",
  county: "kInh1ajxjQiviyG2Dq3x",
  geographicPriority: "XYkD18mnOhEdywuBhleP",
  utmSource: "mmr1CUyxRmUNmfsQ19lN",
  utmMedium: "tQPKWGYxknsdBRiZR0rO",
  utmCampaign: "51VWr2Zw4hoTxXMLEJy4",
  utmContent: "eEGdVmitNQ6I8KliyjCF",
  utmTerm: "UIzavL6LExdWWbpCy0el",
  subscriptionInterests: "iKoGoU3bA7wYIoLC20FX",
  newsletterLocalInterest: "6RPDNjS4OQiYd6K8HYAO",
  newsletterCrmInterest: "AMBGclucIiTTI5tkDzLM",
  unsubscribeStatus: "dVkYQ0Z3PoLCKYKjlInI",
  crmPlanInterest: "XmPi59mZZ3b4SnjWsOV5",
  smsConsentStatus: "JojqsFHOpLxHGvoymD6A",
  smsConsentSource: "okMzQWt5PqUP9eWzkNxy",
  smsConsentTimestamp: "6xn024OqTjBMKqkivxCO",
  emailConsentStatus: "5p5ENGT0UcFatqRexShG",
  emailConsentSource: "NQWt85i2pZ1ccRKtZTRy",
  emailConsentTimestamp: "wtC3QMfBjrymC8fiAlH6",
};

/** contact.unsubscribe_status has no standardized picklist yet (contract §6) -- treat as free text, not a working suppression mechanism on its own. */
export const UNSUBSCRIBE_VALUE = "Unsubscribed";

export const CONSENT_STATUS = {
  granted: "Opted In",
  denied: "Opted Out",
} as const;

/** contract §9 -- source-domain values, not guessed. */
export const SOURCE_DOMAINS = {
  subzerometrix: "subzerometrix.com",
  metrixScore: "themetrixscore.com",
  metrixAudit: "metrixaudit.com",
  moderntradesIo: "moderntrades.io",
  moderntradescrm: "moderntradescrm.com",
  themoderntradesmentor: "themoderntradesmentor.com",
} as const;

/** contract §8 -- Revenue Pipeline / New Lead is the only stage this adapter is authorized to write to for a CRM-interest submission. */
export const PIPELINE = {
  name: "Revenue Pipeline",
  newLeadStage: "New Lead",
} as const;
