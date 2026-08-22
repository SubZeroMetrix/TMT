"use client";

import { useState } from "react";
import { track } from "@vercel/analytics/react";
import {
  DOMAIN_QUESTIONS,
  SCALE,
  BUSINESS_STAGE_OPTIONS,
  TOTAL_STEPS,
} from "@/lib/gss/questions";
import type { BusinessStage, DomainScores } from "@/lib/gss/scoring";
import { getFirstTouch } from "@/lib/attribution";

type Step = { kind: "domain"; index: number } | { kind: "stage" } | { kind: "contact" };

type ApiResult = {
  overall: number;
  band: "weak" | "developing" | "strong";
  resultCopy: string;
  strongestDomain: string;
  weakestDomain: string;
  primarySystemsGap: string;
  recommendedNextAction: string;
};

const DISCLAIMER =
  "This is a self-reported snapshot based on your answers, not a verified audit. It's meant to point at where to look next, not to replace a real walkthrough of your business.";

const NEXT_ACTION_COPY: Record<string, string> = {
  book_shop_visit:
    "Worth a free 60-minute Shop Visit to confirm before you spend on anything.",
  blueprint_recommended:
    "A Growth & Systems Blueprint can confirm exactly where the remaining gaps are.",
  nurture_not_ready: "Not the right time for a full engagement — we'll keep useful info coming.",
  insufficient_evidence: "We need a bit more context — a quick call is the fastest way to sort that out.",
  not_a_fit: "Based on what you shared, TMT likely isn't the right fit right now.",
};

export default function GSSForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [scores, setScores] = useState<Partial<DomainScores>>({});
  const [businessStage, setBusinessStage] = useState<BusinessStage | null>(null);
  const [contact, setContact] = useState({ firstName: "", lastName: "", email: "", phone: "", company: "" });
  const [website, setWebsite] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ApiResult | null>(null);
  const [started, setStarted] = useState(false);

  const steps: Step[] = [
    ...DOMAIN_QUESTIONS.map((_, i): Step => ({ kind: "domain", index: i })),
    { kind: "stage" },
    { kind: "contact" },
  ];
  const step = steps[stepIndex];
  const progressPct = Math.round(((stepIndex + 1) / (TOTAL_STEPS + 1)) * 100);

  function markStarted() {
    if (!started) {
      setStarted(true);
      track("gss_started");
    }
  }

  function canAdvance(): boolean {
    if (step.kind === "domain") return scores[DOMAIN_QUESTIONS[step.index].domain] !== undefined;
    if (step.kind === "stage") return businessStage !== null;
    return true;
  }

  function goNext() {
    markStarted();
    if (!canAdvance()) return;
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  }

  function goBack() {
    setStepIndex((i) => Math.max(i - 1, 0));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!contact.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!businessStage) {
      setError("Please go back and select your business stage.");
      return;
    }

    setSubmitting(true);
    try {
      const ft = getFirstTouch();
      const res = await fetch("/api/gss/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scores,
          businessStage,
          contact,
          attribution: ft
            ? {
                utm_source: ft.utm_source,
                utm_medium: ft.utm_medium,
                utm_campaign: ft.utm_campaign,
                landing_page: ft.landing_page,
              }
            : undefined,
          website, // honeypot
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      setResult(data.result);
      track("gss_completed", { band: data.result.band });
    } catch {
      setError("Could not submit right now. Please try again, or call 727-600-3425.");
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-dim mb-2">
          Your Result
        </p>
        <h3 className="font-display text-2xl font-bold text-navy mb-4">
          Overall score: {result.overall.toFixed(1)} / 5
        </h3>
        <p className="text-navy/80 leading-relaxed mb-4">{result.resultCopy}</p>
        <dl className="grid sm:grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <dt className="font-semibold text-navy">Strongest area</dt>
            <dd className="text-navy/70">{result.strongestDomain}</dd>
          </div>
          <div>
            <dt className="font-semibold text-navy">Priority area</dt>
            <dd className="text-navy/70">{result.weakestDomain}</dd>
          </div>
        </dl>
        <p className="text-navy/80 leading-relaxed mb-4">{result.primarySystemsGap}</p>
        <p className="text-navy font-semibold mb-6">
          {NEXT_ACTION_COPY[result.recommendedNextAction] ?? ""}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/book-a-strategy-call#schedule"
            onClick={() => track("strategy_call_requested", { source: "gss_result" })}
            className="inline-flex items-center justify-center rounded-md bg-blue px-6 py-3 text-sm font-semibold text-white hover:bg-blue-hover transition-colors"
          >
            Book a Strategy Call
          </a>
          <a
            href="/services/technology-audit"
            onClick={() => track("gss_blueprint_clicked")}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-navy hover:border-cyan-dim transition-colors"
          >
            See the Growth & Systems Blueprint
          </a>
        </div>
        <p className="mt-6 text-xs text-navy/50">{DISCLAIMER}</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
      <div className="mb-6">
        <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden" role="progressbar" aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full bg-blue transition-all" style={{ width: `${progressPct}%` }} />
        </div>
        <p className="mt-2 text-xs text-navy/50">
          Step {stepIndex + 1} of {steps.length}
        </p>
      </div>

      {step.kind === "domain" && (
        <fieldset>
          <legend className="font-display text-xl font-bold text-navy mb-1">
            {DOMAIN_QUESTIONS[step.index].label}
          </legend>
          <p className="text-navy/70 mb-5">{DOMAIN_QUESTIONS[step.index].prompt}</p>
          <div className="space-y-2">
            {SCALE.map((opt) => {
              const domain = DOMAIN_QUESTIONS[step.index].domain;
              const checked = scores[domain] === opt.value;
              return (
                <label
                  key={opt.value}
                  className={`flex items-center gap-3 rounded-md border p-3 cursor-pointer transition-colors ${
                    checked ? "border-blue bg-blue/5" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="radio"
                    name={domain}
                    checked={checked}
                    onChange={() => {
                      markStarted();
                      setScores((s) => ({ ...s, [domain]: opt.value }));
                    }}
                    className="h-4 w-4"
                  />
                  <span className="text-navy">
                    <strong>{opt.value}</strong> — {opt.label}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      {step.kind === "stage" && (
        <fieldset>
          <legend className="font-display text-xl font-bold text-navy mb-1">Business Stage</legend>
          <p className="text-navy/70 mb-5">Where is the business today?</p>
          <div className="space-y-2">
            {BUSINESS_STAGE_OPTIONS.map((opt) => {
              const checked = businessStage === opt.value;
              return (
                <label
                  key={opt.value}
                  className={`flex items-center gap-3 rounded-md border p-3 cursor-pointer transition-colors ${
                    checked ? "border-blue bg-blue/5" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="businessStage"
                    checked={checked}
                    onChange={() => setBusinessStage(opt.value)}
                    className="h-4 w-4"
                  />
                  <span className="text-navy">{opt.label}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      {step.kind === "contact" && (
        <form onSubmit={handleSubmit}>
          <h3 className="font-display text-xl font-bold text-navy mb-1">Where should we send your result?</h3>
          <p className="text-navy/70 mb-5">Takes 10 seconds. No spam, no autoresponder chain.</p>

          {/* Honeypot — hidden from real users */}
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-navy mb-1" htmlFor="gss-firstname">
                First name
              </label>
              <input
                id="gss-firstname"
                type="text"
                required
                value={contact.firstName}
                onChange={(e) => setContact((c) => ({ ...c, firstName: e.target.value }))}
                className="w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1" htmlFor="gss-lastname">
                Last name
              </label>
              <input
                id="gss-lastname"
                type="text"
                value={contact.lastName}
                onChange={(e) => setContact((c) => ({ ...c, lastName: e.target.value }))}
                className="w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-navy mb-1" htmlFor="gss-email">
              Email
            </label>
            <input
              id="gss-email"
              type="email"
              required
              value={contact.email}
              onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
              className="w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-navy mb-1" htmlFor="gss-phone">
                Phone (optional)
              </label>
              <input
                id="gss-phone"
                type="tel"
                value={contact.phone}
                onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                className="w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1" htmlFor="gss-company">
                Company (optional)
              </label>
              <input
                id="gss-company"
                type="text"
                value={contact.company}
                onChange={(e) => setContact((c) => ({ ...c, company: e.target.value }))}
                className="w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </div>
          </div>

          <p className="text-xs text-navy/50 mb-4">
            By submitting, you agree to receive your result and occasional relevant follow-up from The
            Modern Trades Mentor. No spam. Unsubscribe anytime.
          </p>

          {error && <p className="text-sm text-red-600 mb-4" role="alert">{error}</p>}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={goBack}
              className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-navy"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 rounded-md bg-blue px-6 py-3 text-sm font-semibold text-white hover:bg-blue-hover transition-colors disabled:opacity-60"
            >
              {submitting ? "Scoring…" : "Get My Result"}
            </button>
          </div>
        </form>
      )}

      {step.kind !== "contact" && (
        <div className="mt-6 flex gap-4">
          <button
            type="button"
            onClick={goBack}
            disabled={stepIndex === 0}
            className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-navy disabled:opacity-40"
          >
            Back
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canAdvance()}
            className="flex-1 rounded-md bg-blue px-6 py-3 text-sm font-semibold text-white hover:bg-blue-hover transition-colors disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}

      <p className="mt-6 text-xs text-navy/50">{DISCLAIMER}</p>
    </div>
  );
}
