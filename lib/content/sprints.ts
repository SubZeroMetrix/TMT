/**
 * Outcome Sprints — the second rung of the ladder (Audit -> Sprint -> Ongoing
 * Partnership). Each sprint fixes one named, specific operating problem
 * rather than selling a generic "implementation" engagement. The audit
 * determines which sprint, if any, a given business needs.
 *
 * Pricing follows the exact device already established by the audit page
 * (`app/services/technology-audit/page.tsx`): a founding-client price for
 * early engagements, framed as a range because scope is set by the audit,
 * not fixed in advance. No invented before/after numbers anywhere here —
 * consistent with content-drafts/proof-loop.md.
 */

export type Sprint = {
  slug: string;
  name: string;
  shortName: string;
  heroDescription: string;
  problem: string;
  whatItFixes: string[];
  whoFor: string;
  signals: string[];
  deliverables: string[];
  processNote: string;
};

export const FOUNDING_SPRINT_PRICE = "$5,000–$7,500";

export const SPRINTS: Sprint[] = [
  {
    slug: "unsold-estimate-recovery-sprint",
    name: "Unsold Estimate Recovery Sprint",
    shortName: "Unsold Estimate Recovery",
    heroDescription:
      "Estimates that went out and never got chased are lost revenue that never shows up as a line item. This sprint builds the follow-up system that catches them.",
    problem:
      "Most contracting businesses have no single person or process responsible for following up on estimates that did not close on the spot. The estimate sits, the customer forgets, and a competitor who called back gets the job.",
    whatItFixes: [
      "No named owner for estimate follow-up — it happens only when someone remembers",
      "No fixed cadence — follow-up timing varies by who is doing it and how busy the week is",
      "No visibility into how many open estimates exist or how old they are",
      "CRM/FSM follow-up features that exist but were never configured or adopted",
      "No script or process for the follow-up call or message itself",
    ],
    whoFor:
      "Businesses sending real estimate volume — quotes for repairs, replacements, or larger jobs — where a meaningful share close later or not at all, and nobody can currently say how many are sitting open right now.",
    signals: [
      "You cannot answer 'how many open estimates do we have right now' without digging",
      "Follow-up happens when someone has time, not on a schedule",
      "Estimates over 2 weeks old are common and nobody is tracking them",
      "The CRM/FSM has a follow-up or pipeline feature that is not being used",
    ],
    deliverables: [
      "A named owner and a fixed follow-up cadence for every open estimate",
      "Follow-up configured inside the CRM/FSM you already use — no new software unless nothing suitable exists",
      "A follow-up script or message template built for how your team actually talks to customers",
      "A simple, visible way to see every open estimate and its age",
      "A 30-day check to confirm the system is actually being used",
    ],
    processNote:
      "Scope is set by what the audit finds — how many estimates, what tools exist today, and where the process breaks. That scope is agreed before the sprint starts, at a fixed price.",
  },
  {
    slug: "missed-call-recovery-sprint",
    name: "Missed Call Recovery Sprint",
    shortName: "Missed Call Recovery",
    heroDescription:
      "A call nobody answered and nobody called back is a job that went to whoever picked up next. This sprint builds the system that catches it.",
    problem:
      "Missed calls rarely get tracked, so the business never sees the pattern — how many come in after hours, how many go to voicemail during peak call volume, and how many never get a callback at all.",
    whatItFixes: [
      "No visibility into missed-call volume or when it happens",
      "No after-hours call handling — everything goes to voicemail or nothing",
      "No callback ownership — a missed call is nobody's job to return",
      "Peak-season call volume that overwhelms the office with no overflow plan",
      "Call routing that was never configured to match how the team actually works",
    ],
    whoFor:
      "Businesses that answer their own phones during business hours and have no structured after-hours or overflow handling — a shape common across HVAC, plumbing, and electrical shops with real call volume.",
    signals: [
      "Nobody can say how many calls were missed last week",
      "After-hours calls go to a generic voicemail with no follow-up process",
      "Peak-season call volume regularly overwhelms whoever is answering",
      "You suspect missed calls are costing jobs but have never measured it",
    ],
    deliverables: [
      "A measured baseline of missed-call volume and when it happens",
      "After-hours and overflow call handling built for your actual call patterns",
      "A named owner and process for returning missed calls",
      "Practical, reviewed use of call-handling AI only where it removes real admin work — never unreviewed customer-facing decisions",
      "A 30-day check against the baseline to confirm it worked",
    ],
    processNote:
      "Scope is set by what the audit finds — current phone system, call volume, and where calls are actually being lost. That scope is agreed before the sprint starts, at a fixed price.",
  },
  {
    slug: "office-workflow-reduction-sprint",
    name: "Office Workflow Reduction Sprint",
    shortName: "Office Workflow Reduction",
    heroDescription:
      "Retyping the same job information into three systems is not a software problem — it is a workflow that was never designed. This sprint redesigns it.",
    problem:
      "As a business grows past a handful of employees, information starts getting entered more than once — from the phone call, into the CRM, onto a job ticket, into accounting — and every re-entry point is where errors and delay get introduced.",
    whatItFixes: [
      "The same job or customer information typed into multiple systems by hand",
      "No single source of truth for job status — office, dispatch, and field see different pictures",
      "Manual handoffs between office and field with no clear process",
      "Reporting built by hand each week because the systems do not talk to each other",
      "Office staff time consumed by administrative rework instead of customer-facing work",
    ],
    whoFor:
      "Businesses with enough office staff and job volume that information genuinely has to move between people and systems — not a one-person shop, and not a business where the owner personally tracks everything.",
    signals: [
      "The same job detail gets typed into more than one system",
      "Office staff describe their week as mostly re-entering or re-checking information",
      "Job status depends on who you ask — office, dispatch, or the tech in the field",
      "Weekly reports are built by hand rather than pulled from a system",
    ],
    deliverables: [
      "A mapped workflow showing exactly where information moves and where it gets duplicated",
      "Integration or process changes that eliminate the highest-cost duplicate entry",
      "A single source of truth for job status, agreed and adopted by office and field",
      "Documented handoff points between office and field",
      "A 30-day check on hours recovered, measured against the audit's baseline",
    ],
    processNote:
      "Scope is set by what the audit finds — which systems are involved and where duplication actually happens. That scope is agreed before the sprint starts, at a fixed price.",
  },
  {
    slug: "maintenance-agreement-reactivation-sprint",
    name: "Maintenance Agreement Reactivation Sprint",
    shortName: "Maintenance Agreement Reactivation",
    heroDescription:
      "Lapsed maintenance agreements are recurring revenue that already exists and is quietly going uncollected. This sprint finds it and gets it renewed.",
    problem:
      "Maintenance agreements lapse quietly — a card expires, a reminder never goes out, a customer forgets — and most businesses have no process for catching it, so the recurring revenue and the recurring visibility into that customer's equipment both disappear.",
    whatItFixes: [
      "No visibility into which maintenance agreements have lapsed or are about to",
      "No renewal or reactivation process — agreements lapse silently",
      "Payment failures (expired cards, failed autopay) that go unnoticed",
      "No named owner for the maintenance-agreement book of business",
      "Scheduling for maintenance visits handled ad hoc rather than systematically",
    ],
    whoFor:
      "HVAC and other service businesses running maintenance or service agreements today, with agreements that have grown faster than the process for managing them.",
    signals: [
      "Nobody can say how many agreements are active, lapsed, or expiring this quarter",
      "Renewal happens only if the customer calls first",
      "Payment failures are discovered by accident, not flagged automatically",
      "Maintenance visit scheduling is manual and inconsistent",
    ],
    deliverables: [
      "A full accounting of active, lapsed, and expiring agreements",
      "A reactivation process and outreach for lapsed agreements",
      "Automated flagging of payment failures before they become silent lapses",
      "A named owner and renewal cadence for the agreement book going forward",
      "A 30-day check on agreements reactivated and renewal rate",
    ],
    processNote:
      "Scope is set by what the audit finds — how many agreements exist, what platform manages them, and where the process breaks. That scope is agreed before the sprint starts, at a fixed price.",
  },
  {
    slug: "crm-fsm-utilization-sprint",
    name: "CRM/FSM Utilization Sprint",
    shortName: "CRM/FSM Utilization",
    heroDescription:
      "Most contractor businesses use a fraction of the CRM or field-service software they already pay for. This sprint gets you the rest of it — or confirms you have the wrong tool.",
    problem:
      "A system gets bought, partially set up, and partially adopted — some features get used, most do not, and the business ends up paying for capability it never configured and a team that was never trained on it.",
    whatItFixes: [
      "Core features (dispatch, follow-up, reporting, invoicing) purchased but never configured",
      "Staff using only the parts of the system they happened to learn, workarounds for the rest",
      "No written pricebook or standard setup, so the software cannot do what it was built for",
      "Confirms whether the current CRM/FSM actually fits the business, or should be replaced",
      "No training plan for new hires — every new employee learns the system informally",
    ],
    whoFor:
      "Businesses already running ServiceTitan, Jobber, Housecall Pro, FieldEdge, or a comparable CRM/FSM platform, where adoption is partial and the return on the subscription is unclear.",
    signals: [
      "You are not sure which features you are paying for but not using",
      "Different staff use the system differently, with no standard way of working",
      "Reports get built by hand because the system's reporting is not configured or trusted",
      "You have wondered whether to switch platforms rather than fix how the current one is used",
    ],
    deliverables: [
      "A full utilization review — what is configured, what is not, what is paid for but unused",
      "Configuration of the highest-value unused features for your specific workflow",
      "A written pricebook or standard setup where none exists",
      "A vendor-neutral recommendation on whether to stay, reconfigure, or switch platforms",
      "A training plan so new hires learn the system the same way, on purpose",
    ],
    processNote:
      "Scope is set by what the audit finds — which platform, what is configured today, and where adoption breaks down. That scope is agreed before the sprint starts, at a fixed price.",
  },
];

export function getSprintBySlug(slug: string): Sprint | undefined {
  return SPRINTS.find((s) => s.slug === slug);
}
