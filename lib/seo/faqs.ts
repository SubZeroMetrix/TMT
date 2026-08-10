/**
 * The answer-engine corpus.
 *
 * These are written to be LIFTED. An answer engine quotes a self-contained
 * paragraph — so every answer here has to stand alone, name the place, and be
 * true without the page around it. Rules used throughout:
 *
 *   - Answer in the first sentence. No throat-clearing.
 *   - Name St. Petersburg, Tampa, Pinellas or Hillsborough in the answer text.
 *   - No invented numbers, no fake specificity. Ranges and mechanisms only.
 *   - Contractor vocabulary: calls, trucks, techs, board, tickets, callbacks.
 */

export type Faq = { question: string; answer: string };

/** Sitewide. Safe to render on the homepage, /services, or /about. */
export const GENERAL_FAQS: Faq[] = [
  {
    question:
      "Who helps contractors in St. Petersburg and Tampa choose business software?",
    answer:
      "The Modern Trades Mentor, based in St. Petersburg, advises owner-led contracting firms across Pinellas and Hillsborough counties on which software and AI tools fit their business. It is run by Richard Fritzke, who spent 26 years in HVAC and facilities operations before advising contractors — a tradesman who understands technology rather than a technology consultant who discovered the trades. The firm does not build or resell software.",
  },
  {
    question:
      "What does a technology audit for a contracting business actually involve?",
    answer:
      "A technology audit looks at how a contracting business runs before it looks at any software. It covers how tomorrow's board gets built and who owns it, how a technician closes out a job, where pricing comes from, what happens to a call nobody answers, and who chases estimates that did not close. The output is a picture of where the business is losing money and time, and whether new software would fix that or just add work. For Tampa Bay shops it is usually the first engagement.",
  },
  {
    question:
      "Should a small HVAC company in Tampa Bay use ServiceTitan, Jobber, or Housecall Pro?",
    answer:
      "It depends on the size of the shop and how much process discipline already exists, not on which product is best overall. Larger shops with a written pricebook and a dedicated dispatcher tend to fit ServiceTitan. Smaller owner-run crews in St. Petersburg and Tampa often get more out of Jobber or Housecall Pro because the setup burden is lighter. The most common expensive mistake is buying a product that assumes processes the shop has not built yet — the software then gets blamed for a problem it was never able to fix.",
  },
  {
    question: "Why do field service software rollouts fail in small shops?",
    answer:
      "They fail because the shop bought a new way of working and only installed the app. The crew works around it, the office keeps the old spreadsheet running alongside it, and a few months later the owner concludes the software did not work. The most common specific causes are that nobody owns the dispatch board, that closing out a job is still a favor a tech does when they remember, and that no written pricebook exists — which turns setup into hundreds of first-time pricing decisions made while still running calls.",
  },
  {
    question: "Where is a contracting business most likely losing money right now?",
    answer:
      "Usually in three places: calls nobody answered and nobody called back, estimates that were sent and never chased, and work that was performed but never billed or never billed fully. None of these show up on a profit and loss statement as a line item, which is why they persist. Each can be measured in a week without buying anything.",
  },
  {
    question: "Is AI worth it for a small contracting business?",
    answer:
      "In narrow places, yes. Answering and routing calls after hours, drafting follow-up to estimates, and summarizing long job notes are all places where it removes real admin work. It is dangerous anywhere a wrong answer reaches a customer unreviewed, anywhere it touches pricing, and anywhere it makes a safety or code judgment. The honest test is whether a specific tool removes admin work or adds a new thing somebody has to check.",
  },
  {
    question:
      "Does The Modern Trades Mentor get paid by the software companies it recommends?",
    answer:
      "No. The Modern Trades Mentor has no paid relationship with any software vendor and takes no commission for recommending one. Recommendations are based on what fits that specific business. If that ever changes, it will be stated plainly on this site and disclosed to every client before a recommendation is made.",
  },
  {
    question: "What size contracting business is this for?",
    answer:
      "Owner-led firms with roughly zero to fifteen employees — shops where the owner still answers the phone or has only recently stopped. That includes HVAC, plumbing, electrical, roofing and general contracting, plus non-trades service businesses with the same shape, such as med spas, dental practices and salons. Pre-revenue businesses and firms without a single decision maker are not a fit.",
  },
];

/** /services/ai-consulting-st-petersburg — the broad head-term page. */
export const AI_CONSULTING_STPETE_FAQS: Faq[] = [
  {
    question: "What does an AI consultant actually do for a small business?",
    answer:
      "An AI consultant works out which parts of a business are worth automating, which are not, and what has to be fixed by hand first. For a small service business in St. Petersburg that usually means looking at how calls are answered, how jobs get closed out, and how estimates are followed up — then deciding whether any tool would help or just add a step. The output is a short list of what to do, in order, with a reason attached to each item.",
  },
  {
    question: "How much does AI consulting cost in St. Petersburg?",
    answer:
      "Engagements are scoped to the business rather than billed by the hour, and start with a readiness audit before any tool is recommended. The first conversation is a free shop visit with no obligation. Call 727-600-3425 to get a scope and a number for your situation.",
  },
  {
    question: "Is my business too small for AI consulting?",
    answer:
      "Small is the point. The work is built for owner-led businesses with roughly zero to fifteen employees — where the owner still answers the phone or recently stopped. Businesses that size get the most out of removing admin work, because there is no back office to absorb it. Pre-revenue businesses are not a fit.",
  },
  {
    question: "Do I need to buy new software to use AI in my business?",
    answer:
      "Often not, at least not first. A lot of the earliest gains come from changing a process or using something already included in a system you pay for. Buying new software before fixing the process underneath is the most common expensive mistake, because the software then gets blamed for a problem it was never able to fix.",
  },
  {
    question: "What is the difference between AI consulting and IT support?",
    answer:
      "IT support keeps what you have running. This is about deciding what you should have in the first place — which systems fit the way your business actually works, where automation removes real admin work, and where it would create risk. No hardware, no help desk, no software licenses sold.",
  },
];

/** /locations/pinellas-county-fl — the county service-area hub. */
export const PINELLAS_COUNTY_FAQS: Faq[] = [
  {
    question: "Do you serve all of Pinellas County?",
    answer:
      "Yes. The service area covers all 24 incorporated municipalities in Pinellas County — St. Petersburg, Clearwater, Largo, Pinellas Park, Seminole, Dunedin, Safety Harbor, Oldsmar, Tarpon Springs, Gulfport, South Pasadena, Kenneth City, the Belleair communities, the Redington and Indian beaches, St. Pete Beach, Madeira Beach and Treasure Island — plus unincorporated areas including Palm Harbor, East Lake, Lealman, Feather Sound, Tierra Verde and Bay Pines.",
  },
  {
    question: "Do you come to my business, or is this remote?",
    answer:
      "On site, anywhere in Pinellas County. The first visit happens at your shop because how the office actually runs is the thing worth seeing, and it does not show up on a video call. Remote work is possible for follow-up sessions and for businesses outside the immediate area.",
  },
  {
    question: "What kinds of businesses in Pinellas County do you work with?",
    answer:
      "Owner-led businesses with roughly zero to fifteen employees. Most are contracting and field service firms — HVAC, plumbing, electrical, roofing, general contracting — and the rest are service businesses with the same operating shape, such as med spas, dental practices, salons and professional services. The common thread is phones, scheduling, follow-up and admin load.",
  },
  {
    question: "How is this different from hiring an IT company in Pinellas County?",
    answer:
      "An IT company keeps your existing systems running. This work decides which systems you should have in the first place, and whether a process change would work better than buying anything. No hardware, no help desk, no software licenses sold, and no commission taken for recommending a vendor.",
  },
];

/** /locations/hillsborough-county-fl — the Tampa-side service-area hub. */
export const HILLSBOROUGH_COUNTY_FAQS: Faq[] = [
  {
    question: "Do you travel to Tampa and Hillsborough County?",
    answer:
      "Yes. Richard is based in St. Petersburg and works on site throughout Hillsborough County — Tampa, Temple Terrace and Plant City, plus the unincorporated communities where most of the county's contractors actually operate, including Brandon, Riverview, Valrico, Lutz, Carrollwood, Westchase, Citrus Park, Apollo Beach, Ruskin, Sun City Center and Seffner.",
  },
  {
    question:
      "What is different about running a service business in Hillsborough County?",
    answer:
      "Territory. Hillsborough is several times the size of Pinellas and most of it is unincorporated, so crews cover longer distances between calls and scheduling breaks down sooner as the business grows. Shops here tend to add trucks and office staff earlier, which means dispatch and job close-out become real problems at a smaller headcount than owners expect.",
  },
  {
    question: "Do permits work differently in Hillsborough than in Pinellas?",
    answer:
      "Yes, and it matters for any shop working both sides of the bay. Hillsborough and Pinellas run separate permitting processes, and the incorporated cities within each county add their own. A business crossing the bay is effectively carrying two sets of process, which is worth accounting for before choosing software that assumes one.",
  },
  {
    question: "What kinds of businesses do you work with in Tampa?",
    answer:
      "Owner-led businesses with roughly zero to fifteen employees — HVAC, plumbing, electrical, roofing and general contracting, plus non-trades service businesses with the same operating shape. The work is choosing technology, improving workflow, and training the team. No software licenses are sold and no commission is taken from any vendor.",
  },
];

/** /services/ai-automation-tampa-bay */
export const AI_AUTOMATION_TAMPA_FAQS: Faq[] = [
  {
    question: "What can a small business in Tampa Bay realistically automate?",
    answer:
      "The reliable wins are narrow: capturing and routing calls that come in after hours, sending follow-up on estimates that would otherwise sit, turning long job notes into something billable, and flagging work that was completed but never invoiced. Each is a defined task with a clear check on the output. Automation that tries to run a whole department is where small businesses lose money.",
  },
  {
    question: "How long does it take to see a return on automation?",
    answer:
      "The process changes usually show up within weeks because they cost nothing but attention. Anything requiring new software takes longer, and the honest driver is not the software — it is how long it takes the team to change habits. A rollout with no internal owner tends to revert within about 90 days regardless of what was bought.",
  },
  {
    question: "Will automation replace my office staff?",
    answer:
      "That is the wrong target for a business this size. The realistic outcome is that the person answering the phone stops re-typing the same information into three places and gets time back for the work that actually needs a human — chasing an estimate, calming an upset customer, catching a scheduling conflict before it costs a truck roll.",
  },
  {
    question: "Do you serve businesses outside Pinellas County?",
    answer:
      "Yes. The service area covers Tampa and Hillsborough County — including Brandon, Riverview, Valrico, Temple Terrace, Plant City, Lutz, Carrollwood, Westchase, Apollo Beach, Ruskin and Sun City Center — along with all of Pinellas County and parts of Pasco.",
  },
];

/** /services/crm-workflow-consulting */
export const CRM_WORKFLOW_FAQS: Faq[] = [
  {
    question: "What does a CRM consultant do for a contracting business?",
    answer:
      "A CRM consultant decides how customer and job information should move through the business, then picks and sets up a system that matches it. For contractors that means the path from an inbound call to a booked job to a closed ticket to an invoice — and making sure nothing needs to be typed twice along the way. Choosing the software is the small part; defining the path is the work.",
  },
  {
    question: "Which CRM is best for a small contracting business?",
    answer:
      "There is no single best one. Field service platforms like ServiceTitan, Jobber, Housecall Pro and FieldEdge each assume a different level of existing process, and the right pick depends on shop size, whether a written pricebook exists, and whether anyone owns the dispatch board. A shop that buys a system assuming processes it has not built will use a fraction of it and blame the tool.",
  },
  {
    question: "How do I know if my workflow is the problem instead of my software?",
    answer:
      "Ask who builds tomorrow's schedule and what they look at when they do it. If the answer is more than one person, or more than one place, the workflow is the problem. Other quick tests: whether a technician can close out a job before pulling away, whether pricing comes from a written source, and whether anyone owns following up on estimates that did not close.",
  },
  {
    question: "Can you fix our workflow without changing our current software?",
    answer:
      "Frequently, yes, and it is usually the first thing to try. Most small businesses use a fraction of what they already pay for, and the highest-value changes — naming one owner for the schedule, defining the close-out step, writing down pricing — cost nothing. Replacing software before that is done just moves the problem to a new screen.",
  },
];

/** Per-city. Keyed by the /locations/<slug> segment. */
export const LOCATION_FAQS: Record<string, Faq[]> = {
  "st-petersburg": [
    {
      question:
        "Do you work with contractors in St. Petersburg and the rest of Pinellas County?",
      answer:
        "Yes. St. Petersburg is home base for The Modern Trades Mentor, and the core service area is all of Pinellas County — including Clearwater, Largo, Pinellas Park, Dunedin, Palm Harbor, Seminole, Gulfport, Tarpon Springs, Safety Harbor, Oldsmar, and the beach communities. Visits happen at the shop, not over video, because most of what matters is visible only in how the office actually runs.",
    },
    {
      question:
        "What technology problems are specific to Pinellas County contractors?",
      answer:
        "Two stand out. Drive time is unforgiving in a county this narrow and this congested, so how the dispatch board is built has an outsized effect on how many calls a truck can turn in a day. And the summer peak is brutal — a shop that cannot handle call volume in July will lose jobs it never knew it had, which makes missed-call tracking the highest-value thing to measure before buying anything.",
    },
    {
      question: "How does storm season affect a contractor's systems in St. Pete?",
      answer:
        "Storm season turns a normal week into a surge, and the systems that break first are the manual ones — a paper board, a single phone line, and follow-up that depends on somebody remembering. The work worth doing before June is making sure calls get captured when volume triples and that jobs can be closed out from the truck rather than back at the shop.",
    },
  ],
  tampa: [
    {
      question: "Do you work with contractors in Tampa and Hillsborough County?",
      answer:
        "Yes. Tampa is a primary market for The Modern Trades Mentor, along with Brandon, Riverview, Temple Terrace, Carrollwood, Lutz, Plant City, Apollo Beach, Ruskin and Valrico. The consultant is based in St. Petersburg and works on-site with Hillsborough County shops.",
    },
    {
      question:
        "What is different about running a contracting business in Tampa versus St. Pete?",
      answer:
        "Tampa shops tend to cover more territory and grow headcount sooner, which means dispatch and scheduling break earlier than they do for a Pinellas crew working a narrow county. Permitting also differs between Hillsborough and Pinellas, so a shop working both sides of the bay carries two sets of process. Both of those are reasons to sort out the board and the close-out habit before adding software.",
    },
    {
      question:
        "How much does it cost to get help choosing contractor software in Tampa?",
      answer:
        "Engagements are scoped to the business rather than billed hourly, and start with a readiness audit before any recommendation is made. The first conversation — the shop visit — is free and carries no obligation. Call 727-600-3425.",
    },
  ],
};
