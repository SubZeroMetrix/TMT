import { DOMAINS, DOMAIN_LABELS, type Domain, type BusinessStage } from "./scoring";

export type ScaleOption = { value: number; label: string };

/** Same 1-5 scale label set for every domain question — keeps the self-rating consistent and transparent. */
export const SCALE: ScaleOption[] = [
  { value: 1, label: "Major gap" },
  { value: 2, label: "Needs significant improvement" },
  { value: 3, label: "Developing" },
  { value: 4, label: "Strong" },
  { value: 5, label: "Very strong" },
];

export type DomainQuestion = {
  domain: Domain;
  label: string;
  prompt: string;
};

export const DOMAIN_QUESTIONS: DomainQuestion[] = [
  {
    domain: "demand",
    label: DOMAIN_LABELS.demand,
    prompt:
      "How consistently does your business generate enough qualified opportunities to support your current growth goals?",
  },
  {
    domain: "conversion",
    label: DOMAIN_LABELS.conversion,
    prompt:
      "How consistently does your business turn qualified leads and opportunities into paying customers?",
  },
  {
    domain: "revenue_capture",
    label: DOMAIN_LABELS.revenue_capture,
    prompt:
      "How consistently does your business follow up, recover missed opportunities, and capture revenue from leads and estimates already generated?",
  },
  {
    domain: "operations",
    label: DOMAIN_LABELS.operations,
    prompt: "How well can your current operations handle and deliver the volume of work you are trying to generate?",
  },
  {
    domain: "systems_measurement",
    label: DOMAIN_LABELS.systems_measurement,
    prompt: "How well connected are your systems, workflows, data, and performance reporting?",
  },
  {
    domain: "growth_scale",
    label: DOMAIN_LABELS.growth_scale,
    prompt: "How prepared is the business to grow without creating significant operational or financial instability?",
  },
];

export const BUSINESS_STAGE_OPTIONS: { value: BusinessStage; label: string }[] = [
  { value: "pre_revenue", label: "Exploring / not yet generating revenue" },
  { value: "early", label: "Early-stage (1-4 employees)" },
  { value: "core_icp", label: "Established (5-30 employees)" },
  { value: "larger", label: "Larger (31+ employees)" },
];

// Domain question + business stage question = 7 total steps, per spec.
export const TOTAL_STEPS = DOMAINS.length + 1;
