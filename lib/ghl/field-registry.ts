/**
 * GHL field keys/ids sourced from GHL_WEBSITE_INTEGRATION_CONTRACT.md §4
 * (Terminal 1-maintained, last verified live 2026-08-25). Do NOT invent a
 * key/id that isn't in that file -- if a field this adapter needs isn't
 * listed there, treat it as PENDING, not guessable.
 */

export const CONTACT_FIELD_KEYS = {
  originalLeadSource: "contact.original_lead_source",
  latestLeadSource: "contact.latest_lead_source",
  originalCampaign: "contact.original_campaign",
  latestCampaign: "contact.latest_campaign",
  originalDomain: "contact.original_domain",
  originalLandingPage: "contact.original_landing_page",
  sourceTool: "contact.source_tool",
  trade: "contact.trade",
  county: "contact.county",
  geographicPriority: "contact.geographic_priority",
  utmSource: "contact.utm_source",
  utmMedium: "contact.utm_medium",
  utmCampaign: "contact.utm_campaign",
  utmContent: "contact.utm_content",
  utmTerm: "contact.utm_term",
  subscriptionInterests: "contact.subscription_interests",
  newsletterLocalInterest: "contact.newsletter_local_interest",
  newsletterCrmInterest: "contact.newsletter_crm_interest",
  unsubscribeStatus: "contact.unsubscribe_status",
  crmPlanInterest: "contact.crm_plan_interest",
  smsConsentStatus: "contact.sms_consent_status",
  smsConsentSource: "contact.sms_consent_source",
  smsConsentTimestamp: "contact.sms_consent_timestamp",
  emailConsentStatus: "contact.email_consent_status",
  emailConsentSource: "contact.email_consent_source",
  emailConsentTimestamp: "contact.email_consent_timestamp",
} as const;

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
