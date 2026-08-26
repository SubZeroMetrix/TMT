import { CONTACT_FIELD_KEYS, CONSENT_STATUS, UNSUBSCRIBE_VALUE } from "./field-registry";

/**
 * Single reusable server-side GHL adapter for every subscriber/CRM-interest
 * surface across the SubZeroMetrix network (Field Notes, Growth & Systems
 * Brief, preference updates, unsubscribe, Modern Trades CRM Start Setup /
 * request-access). GHL is the permanent contact/subscriber source of truth
 * -- callers must not create a second database for this.
 *
 * FAIL-CLOSED BY DESIGN, not just by missing env vars:
 * GHL_LOCATION_ID and GHL_PRIVATE_INTEGRATION_TOKEN exist in this project's
 * Vercel Production env (confirmed present 2026-08-26 via `vercel env ls`),
 * but GHL_WEBSITE_INTEGRATION_CONTRACT.md (Terminal 1, last updated
 * 2026-08-25) documents only one location -- `01-CORE-DEV`
 * (Sw8SbpTlzn8aBcnxZnrf) -- and explicitly states it "must never receive
 * real website traffic or real contacts," and §13 "Do Not" says not to
 * activate any live public submission path until a real production token
 * is provisioned and tested end-to-end. Both env vars are marked Sensitive
 * in Vercel, so their actual value cannot be read back (by design, not a
 * limitation worth working around) to confirm which location they target.
 * Rather than guess, this adapter requires an explicit third env var,
 * GHL_PRODUCTION_LOCATION_CONFIRMED=true, that only a human who has
 * verified GHL_LOCATION_ID against the real authorized production
 * subaccount (not CORE-DEV) should set. Until that flag is set, every
 * write method here throws GhlNotConfiguredError and callers must return
 * an honest 503 -- never a fake success.
 */

export class GhlNotConfiguredError extends Error {
  constructor(public readonly missing: string[]) {
    super(`GHL adapter not configured for production writes: ${missing.join(", ")}`);
    this.name = "GhlNotConfiguredError";
  }
}

function getConfig() {
  const locationId = process.env.GHL_LOCATION_ID;
  const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
  const confirmed = process.env.GHL_PRODUCTION_LOCATION_CONFIRMED === "true";

  const missing: string[] = [];
  if (!locationId) missing.push("GHL_LOCATION_ID");
  if (!token) missing.push("GHL_PRIVATE_INTEGRATION_TOKEN");
  if (!confirmed) {
    missing.push(
      "GHL_PRODUCTION_LOCATION_CONFIRMED (must be set to \"true\" by a human who has verified GHL_LOCATION_ID is the real authorized production subaccount, not 01-CORE-DEV)",
    );
  }
  if (missing.length > 0) throw new GhlNotConfiguredError(missing);

  return { locationId: locationId!, token: token! };
}

/** True if the adapter is ready for live writes -- never throws, use for a health/status check. */
export function isGhlConfigured(): boolean {
  try {
    getConfig();
    return true;
  } catch {
    return false;
  }
}

export function getGhlMissingConfig(): string[] {
  try {
    getConfig();
    return [];
  } catch (e) {
    if (e instanceof GhlNotConfiguredError) return e.missing;
    return ["unknown"];
  }
}

const API_BASE = "https://services.leadconnectorhq.com";
const API_VERSION = "2021-07-28";

async function ghlFetch(path: string, init: RequestInit) {
  const { token } = getConfig();
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      ...init.headers,
      Authorization: `Bearer ${token}`,
      Version: API_VERSION,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return res;
}

export type Publication = "field-notes" | "growth-systems-brief";

export type SubscribeInput = {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  trade?: string;
  geography?: string;
  publications: readonly Publication[];
  emailConsent: boolean;
  smsConsent: boolean;
  consentSource: string;
  originalDomain: string;
  originalLandingPage?: string;
  sourceTool?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  subscriptionInterests?: readonly string[];
};

export type SubscribeResult = {
  contactId: string;
  created: boolean;
};

/**
 * Upsert a newsletter/CRM-interest subscriber. Preserves original-touch
 * attribution on repeat submissions (contract §7 documented defect: a raw
 * upsert without a read-first would overwrite original_lead_source /
 * original_domain with the latest submission's values).
 */
export async function upsertSubscriber(input: SubscribeInput): Promise<SubscribeResult> {
  const { locationId } = getConfig();

  const existing = await findContactByEmail(input.email);

  const nowIso = new Date().toISOString();
  const customField = (key: string, field_value: unknown) => ({ key, field_value });

  const preservedOriginalDomain =
    existing?.customFieldValue(CONTACT_FIELD_KEYS.originalDomain) ?? input.originalDomain;
  const preservedOriginalLandingPage =
    existing?.customFieldValue(CONTACT_FIELD_KEYS.originalLandingPage) ?? input.originalLandingPage ?? "";
  const preservedOriginalCampaign =
    existing?.customFieldValue(CONTACT_FIELD_KEYS.originalCampaign) ?? input.utmCampaign ?? "";

  const customFields = [
    customField(CONTACT_FIELD_KEYS.originalDomain, preservedOriginalDomain),
    customField(CONTACT_FIELD_KEYS.originalLandingPage, preservedOriginalLandingPage),
    customField(CONTACT_FIELD_KEYS.originalCampaign, preservedOriginalCampaign),
    customField(CONTACT_FIELD_KEYS.latestLeadSource, input.sourceTool ?? input.originalDomain),
    customField(CONTACT_FIELD_KEYS.latestCampaign, input.utmCampaign ?? ""),
    customField(CONTACT_FIELD_KEYS.sourceTool, input.sourceTool ?? ""),
    customField(CONTACT_FIELD_KEYS.trade, input.trade ?? ""),
    customField(CONTACT_FIELD_KEYS.geographicPriority, input.geography ?? ""),
    customField(CONTACT_FIELD_KEYS.utmSource, input.utmSource ?? ""),
    customField(CONTACT_FIELD_KEYS.utmMedium, input.utmMedium ?? ""),
    customField(CONTACT_FIELD_KEYS.utmCampaign, input.utmCampaign ?? ""),
    customField(CONTACT_FIELD_KEYS.utmContent, input.utmContent ?? ""),
    customField(CONTACT_FIELD_KEYS.utmTerm, input.utmTerm ?? ""),
    customField(CONTACT_FIELD_KEYS.subscriptionInterests, (input.subscriptionInterests ?? []).join(", ")),
    customField(
      CONTACT_FIELD_KEYS.newsletterLocalInterest,
      input.publications.includes("field-notes") ? ["Yes"] : [],
    ),
    customField(
      CONTACT_FIELD_KEYS.newsletterCrmInterest,
      input.publications.includes("growth-systems-brief") ? ["Yes"] : [],
    ),
    customField(
      CONTACT_FIELD_KEYS.emailConsentStatus,
      input.emailConsent ? CONSENT_STATUS.granted : CONSENT_STATUS.denied,
    ),
    customField(CONTACT_FIELD_KEYS.emailConsentSource, input.consentSource),
    customField(CONTACT_FIELD_KEYS.emailConsentTimestamp, nowIso),
    customField(
      CONTACT_FIELD_KEYS.smsConsentStatus,
      input.phone
        ? input.smsConsent
          ? CONSENT_STATUS.granted
          : CONSENT_STATUS.denied
        : CONSENT_STATUS.denied,
    ),
    ...(input.phone
      ? [
          customField(CONTACT_FIELD_KEYS.smsConsentSource, input.consentSource),
          customField(CONTACT_FIELD_KEYS.smsConsentTimestamp, nowIso),
        ]
      : []),
  ];

  const res = await ghlFetch("/contacts/upsert", {
    method: "POST",
    body: JSON.stringify({
      locationId,
      email: normalizeEmail(input.email),
      firstName: input.firstName,
      lastName: input.lastName,
      phone: input.phone ? normalizePhone(input.phone) : undefined,
      customFields,
    }),
  });

  if (!res.ok) {
    throw new Error(`GHL upsert-contact failed: ${res.status} ${await safeText(res)}`);
  }
  const body = await res.json();
  const contactId: string | undefined = body?.contact?.id ?? body?.id;
  if (!contactId) throw new Error("GHL upsert-contact returned no contact id");

  return { contactId, created: !existing };
}

export async function unsubscribe(email: string, source: string): Promise<{ contactId: string } | { notFound: true }> {
  const existing = await findContactByEmail(email);
  if (!existing) return { notFound: true };

  const { locationId } = getConfig();
  const res = await ghlFetch(`/contacts/${existing.id}`, {
    method: "PUT",
    body: JSON.stringify({
      locationId,
      customFields: [
        { key: CONTACT_FIELD_KEYS.unsubscribeStatus, field_value: UNSUBSCRIBE_VALUE },
        { key: CONTACT_FIELD_KEYS.emailConsentStatus, field_value: CONSENT_STATUS.denied },
        { key: CONTACT_FIELD_KEYS.emailConsentSource, field_value: source },
        { key: CONTACT_FIELD_KEYS.emailConsentTimestamp, field_value: new Date().toISOString() },
      ],
    }),
  });
  if (!res.ok) throw new Error(`GHL unsubscribe update failed: ${res.status} ${await safeText(res)}`);
  return { contactId: existing.id };
}

type GhlContact = {
  id: string;
  customFieldValue: (key: string) => string | undefined;
};

async function findContactByEmail(email: string): Promise<GhlContact | null> {
  const { locationId } = getConfig();
  const res = await ghlFetch(
    `/contacts/?locationId=${encodeURIComponent(locationId)}&query=${encodeURIComponent(normalizeEmail(email))}&limit=1`,
    { method: "GET" },
  );
  if (!res.ok) return null;
  const body = await res.json();
  const contact = body?.contacts?.[0];
  if (!contact) return null;
  const fields: Array<{ id?: string; key?: string; value?: unknown; field_value?: unknown }> =
    contact.customFields ?? contact.customField ?? [];
  return {
    id: contact.id,
    customFieldValue: (key: string) => {
      const match = fields.find((f) => f.key === key);
      const v = match?.field_value ?? match?.value;
      return typeof v === "string" ? v : undefined;
    },
  };
}

async function safeText(res: Response) {
  try {
    return await res.text();
  } catch {
    return "";
  }
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function normalizePhone(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return digits;
  if (digits.length === 10) return `+1${digits}`;
  return digits;
}
