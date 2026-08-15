"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function FeedbackForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [permissionToPublish, setPermissionToPublish] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      company: data.get("company"),
      email: data.get("email"),
      service: data.get("service"),
      feedback: data.get("feedback"),
      preferredPublicName: data.get("preferredPublicName"),
      permissionToPublish,
      website: data.get("website"), // honeypot
    };

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok) {
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
      setPermissionToPublish(false);
    } catch {
      setErrorMessage("Could not send feedback right now. Please try again, or call or text 727-600-3425.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bp-frame bp-panel-light p-7 sm:p-9 max-w-2xl">
        <p className="font-display font-semibold text-navy text-lg">
          Thank you for sharing your experience.
        </p>
        <p className="mt-2 text-sm text-navy/70 leading-relaxed">
          We may follow up to verify your feedback. Your comments will not be published without
          your permission.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-md border border-border-light bg-white px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-blue/40 focus:border-blue";

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5" noValidate>
      {/* Honeypot — hidden from real visitors, visible to bots that fill every field */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this field blank</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
            Full name <span className="text-blue">*</span>
          </label>
          <input id="name" name="name" type="text" required maxLength={200} className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-navy mb-1.5">
            Company name <span className="text-blue">*</span>
          </label>
          <input id="company" name="company" type="text" required maxLength={200} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
          Email address <span className="text-blue">*</span>
        </label>
        <input id="email" name="email" type="email" required maxLength={254} className={inputClass} />
        <p className="mt-1.5 text-xs text-navy/55">Used only to verify your feedback — never published.</p>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-navy mb-1.5">
          What did TMT help you work on?
        </label>
        <input id="service" name="service" type="text" maxLength={200} className={inputClass} />
      </div>

      <div>
        <label htmlFor="feedback" className="block text-sm font-semibold text-navy mb-1.5">
          Your feedback <span className="text-blue">*</span>
        </label>
        <textarea id="feedback" name="feedback" required maxLength={5000} rows={5} className={inputClass} />
      </div>

      <div>
        <label htmlFor="preferredPublicName" className="block text-sm font-semibold text-navy mb-1.5">
          Preferred public name/company <span className="text-navy/50 font-normal">(optional)</span>
        </label>
        <input id="preferredPublicName" name="preferredPublicName" type="text" maxLength={200} className={inputClass} />
        <p className="mt-1.5 text-xs text-navy/55">
          How you'd like to be credited if this is ever published — can differ from your name above.
        </p>
      </div>

      <label className="flex items-start gap-3 text-sm text-navy/80">
        <input
          type="checkbox"
          checked={permissionToPublish}
          onChange={(e) => setPermissionToPublish(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-border-light text-blue focus:ring-blue/40"
        />
        <span>
          I give The Modern Trades Mentor permission to publish this feedback with my name and
          company.
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-accent-warning" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-md bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-cta hover:bg-blue-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Feedback"}
      </button>
    </form>
  );
}
