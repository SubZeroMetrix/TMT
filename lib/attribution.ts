"use client";

/**
 * Client-side first-touch / current-touch attribution capture.
 *
 * First-touch is written once (localStorage) and never overwritten — it
 * answers "how did this person first find us." Current-touch is written on
 * every visit (sessionStorage) — it answers "what brought them to this page
 * right now." Both are read back into a query string appended to embedded
 * GHL form/survey URLs, which GHL's form_embed.js prefills into hidden
 * fields whose `id`/name matches the query key. No server, no cookies, no
 * PII — just UTM params, referrer, and landing page.
 *
 * CRM FIELD-MAPPING CONTRACT (for CORE/TMT reconciliation — nothing here
 * writes to HighLevel directly; this only prepares the query string a form
 * embed can consume):
 *
 *   query key         -> intended GHL custom field
 *   ft_utm_source     -> contact.lead_source (first touch)
 *   ft_utm_medium     -> contact.lead_source_detail (first touch, appended)
 *   ft_utm_campaign   -> contact.lead_source_detail (first touch, appended)
 *   ft_landing_page   -> contact.lead_source_detail (first touch, appended)
 *   ct_utm_source     -> not yet mapped to a field — CURRENT touch is
 *                        captured client-side but TMT's custom fields only
 *                        have a single Lead Source / Lead Source Detail pair
 *                        (first-touch shaped). Adding latest-touch fields is
 *                        a CORE-or-TMT custom-field decision, not made here.
 *
 * PENDING CORE DEPENDENCY — none. This is pure website-side capture; wiring
 * the query string into an actual HighLevel form is unaffected by CORE.
 */

const FIRST_TOUCH_KEY = "tmt_first_touch_v1";
const CURRENT_TOUCH_KEY = "tmt_current_touch_v1";

export type TouchData = {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  referrer: string | null;
  landing_page: string | null;
  captured_at: string;
};

function readTouchFromLocation(): TouchData {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_term: params.get("utm_term"),
    utm_content: params.get("utm_content"),
    referrer: document.referrer || null,
    landing_page: window.location.pathname,
    captured_at: new Date().toISOString(),
  };
}

/**
 * Call once per page load (e.g. in a top-level client layout effect).
 * Idempotent: safe to call on every navigation.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;

  try {
    if (!window.localStorage.getItem(FIRST_TOUCH_KEY)) {
      window.localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(readTouchFromLocation()));
    }
  } catch {
    // Private browsing / storage disabled — first-touch capture is
    // best-effort only, never blocks the page.
  }

  try {
    window.sessionStorage.setItem(CURRENT_TOUCH_KEY, JSON.stringify(readTouchFromLocation()));
  } catch {
    // Same as above.
  }
}

function safeParse(raw: string | null): TouchData | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as TouchData;
  } catch {
    return null;
  }
}

export function getFirstTouch(): TouchData | null {
  if (typeof window === "undefined") return null;
  try {
    return safeParse(window.localStorage.getItem(FIRST_TOUCH_KEY));
  } catch {
    return null;
  }
}

export function getCurrentTouch(): TouchData | null {
  if (typeof window === "undefined") return null;
  try {
    return safeParse(window.sessionStorage.getItem(CURRENT_TOUCH_KEY));
  } catch {
    return null;
  }
}

/**
 * Build a query string to append to a GHL form/survey embed URL so
 * form_embed.js prefills first-touch attribution into hidden fields.
 * Returns "" if nothing has been captured yet (never blocks the embed).
 */
export function attributionQueryString(): string {
  const ft = getFirstTouch();
  if (!ft) return "";
  const params = new URLSearchParams();
  if (ft.utm_source) params.set("ft_utm_source", ft.utm_source);
  if (ft.utm_medium) params.set("ft_utm_medium", ft.utm_medium);
  if (ft.utm_campaign) params.set("ft_utm_campaign", ft.utm_campaign);
  if (ft.landing_page) params.set("ft_landing_page", ft.landing_page);
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}
