"use client";

import { useState } from "react";
import { getFirstTouch } from "@/lib/attribution";

type Status = "idle" | "submitting" | "success" | "error" | "disabled";

const GEOGRAPHIES = [
  { value: "st-petersburg", label: "St. Petersburg" },
  { value: "clearwater", label: "Clearwater" },
  { value: "largo", label: "Largo" },
  { value: "palm-harbor", label: "Palm Harbor" },
  { value: "other-pinellas", label: "Other Pinellas" },
  { value: "tampa-hillsborough", label: "Tampa / Hillsborough" },
];

const INTERESTS = [
  "CRM & follow-up systems",
  "Revenue recovery",
  "Customer reactivation",
  "AI & automation",
  "Phone & SMS",
  "Owner reporting",
];

export default function FieldNotesSignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [emailConsent, setEmailConsent] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);

  function toggleInterest(i: string) {
    setInterests((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const ft = getFirstTouch();

    const payload = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      trade: data.get("trade"),
      geography: data.get("geography"),
      interests,
      original_domain: "themoderntradesmentor.com",
      original_landing_page: ft?.landing_page || "",
      utm_source: ft?.utm_source || "",
      utm_medium: ft?.utm_medium || "",
      utm_campaign: ft?.utm_campaign || "",
      email_consent: emailConsent,
    };

    try {
      const res = await fetch("/api/field-notes-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.status === 503 && json.disabled) {
        setStatus("disabled");
      } else if (json.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Could not reach the server. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-blue font-medium" role="status" aria-live="polite">
        You&apos;re subscribed. Check your inbox to confirm.
      </p>
    );
  }

  if (status === "disabled") {
    return (
      <div role="status" aria-live="polite">
        <p className="text-sm text-navy/70 leading-relaxed">
          Signup is temporarily unavailable while we finish setting up delivery. Email{" "}
          <a href="mailto:hello@themoderntradesmentor.com" className="font-semibold text-blue hover:underline">
            hello@themoderntradesmentor.com
          </a>{" "}
          with &quot;Field Notes&quot; in the subject line and you&apos;ll be added by hand in the meantime.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="fn-firstName" className="block text-xs font-medium text-navy/70 mb-1">First name *</label>
          <input id="fn-firstName" name="firstName" type="text" required maxLength={100} className="w-full rounded-lg border border-navy/15 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue" />
        </div>
        <div>
          <label htmlFor="fn-lastName" className="block text-xs font-medium text-navy/70 mb-1">Last name</label>
          <input id="fn-lastName" name="lastName" type="text" maxLength={100} className="w-full rounded-lg border border-navy/15 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue" />
        </div>
      </div>
      <div>
        <label htmlFor="fn-email" className="block text-xs font-medium text-navy/70 mb-1">Email *</label>
        <input id="fn-email" name="email" type="email" required maxLength={254} className="w-full rounded-lg border border-navy/15 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="fn-trade" className="block text-xs font-medium text-navy/70 mb-1">Trade</label>
          <input id="fn-trade" name="trade" type="text" maxLength={100} className="w-full rounded-lg border border-navy/15 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue" />
        </div>
        <div>
          <label htmlFor="fn-geography" className="block text-xs font-medium text-navy/70 mb-1">Area</label>
          <select id="fn-geography" name="geography" className="w-full rounded-lg border border-navy/15 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue">
            {GEOGRAPHIES.map((g) => <option key={g.value} value={g.value}>{g.label}</option>)}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className="block text-xs font-medium text-navy/70 mb-2">Topics you care about (optional)</legend>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((i) => (
            <button
              key={i}
              type="button"
              aria-pressed={interests.includes(i)}
              onClick={() => toggleInterest(i)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                interests.includes(i) ? "bg-blue text-white border-blue" : "border-navy/20 text-navy/70 hover:border-blue"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="flex items-start gap-2 text-xs text-navy/60">
        <input type="checkbox" checked={emailConsent} onChange={(e) => setEmailConsent(e.target.checked)} className="mt-0.5" required />
        I agree to receive the Field Notes newsletter by email. Unsubscribe any time.
      </label>

      {status === "error" && <p role="alert" className="text-sm text-red-600">{errorMsg}</p>}

      <button type="submit" disabled={status === "submitting" || !emailConsent} className="w-full rounded-full bg-blue text-white font-semibold py-2.5 text-sm disabled:opacity-50">
        {status === "submitting" ? "Subscribing..." : "Join Field Notes"}
      </button>
    </form>
  );
}
