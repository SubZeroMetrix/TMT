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
      "Owner-led service firms with a real office-to-field workflow — enough people that work has to move between the office and the crew, and small enough that the owner still makes the call. In practice that is usually a team of five to thirty. That includes HVAC, plumbing, electrical, roofing and general contracting, plus non-trades service businesses with the same shape. Pre-revenue businesses and firms without a single decision maker are not a fit.",
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
      "The Growth & Systems Blueprint is $1,500 founding-client price, delivered within five business days, and credited toward an approved implementation engagement. Before that, the shop visit is free and runs 60 minutes; it exists to work out whether the paid Blueprint is worth your money. Implementation, if you want it, is quoted separately as a fixed-scope project. No hourly billing.",
  },
  {
    question: "Is my business too small for AI consulting?",
    answer:
      "The work is built for owner-led service businesses with a real office-to-field workflow. That shape gets the most out of fixing operations: there are enough moving parts for admin work and follow-up to pile up, no large back office to absorb it, and still one person who can decide to change a process. Pre-revenue businesses are not a fit.",
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
      "Owner-led service businesses. Most are contracting and field service firms — HVAC, plumbing, electrical, roofing, general contracting — and the rest are service businesses with the same operating shape, such as med spas, dental practices, salons and professional services. The common thread is an office-to-field workflow with pain in scheduling, follow-up, quoting or admin load.",
  },
  {
    question: "How is this different from hiring an IT company in Pinellas County?",
    answer:
      "An IT company keeps your existing systems running. This work decides which systems you should have in the first place, and whether a process change would work better than buying anything. No hardware, no help desk, no software licenses sold, and no commission taken for recommending a vendor.",
  },
];

/**
 * /services/technology-audit — the paid product.
 *
 * Price questions are among the highest-intent things anyone asks an answer
 * engine, so these answer directly with the number rather than deflecting.
 */
export const AUDIT_FAQS: Faq[] = [
  {
    question: "How much does the Growth & Systems Blueprint cost?",
    answer:
      "$1,500 founding-client price, delivered within five business days, and credited toward an approved implementation engagement. After the first three founding-client engagements, it is reassessed against real delivery time. There is no hourly billing and no open-ended retainer — you know the number and the scope before you start.",
  },
  {
    question: "What exactly do I get for the fee?",
    answer:
      "A map of how work moves through your business today, your top three operational leaks, a measured baseline covering hours, delays, missed follow-up, rework and revenue exposure, a prioritized action plan scored by impact, effort, cost and risk, two to three specific technology or AI use cases worth pursuing, a vendor-neutral implementation recommendation, a 30/60/90-day roadmap, and the safeguards and approval points for any AI that gets used.",
  },
  {
    question: "Is implementation included in the audit?",
    answer:
      "No, and that is deliberate. The audit is the diagnosis and the decision plan. Implementation is quoted separately as a fixed-scope project once you know what is actually worth doing. Bundling the two is how consulting engagements turn into open-ended troubleshooting nobody can price.",
  },
  {
    question: "What if the audit finds we do not need to buy anything?",
    answer:
      "That is a legitimate and fairly common outcome, and you still get the full deliverable. Several of the highest-value fixes in a service business — naming an owner for the dispatch board, defining the job close-out step, giving estimate follow-up to a named person on a set day — cost nothing but a decision. You would leave knowing that, with the baseline to prove it later.",
  },
  {
    question: "How do you decide where AI is safe to use?",
    answer:
      "Every recommendation is run through the four functions in the NIST AI Risk Management Framework: Govern (who owns the decision and approves the output), Map (which exact process and data are involved), Measure (the baseline and the number that proves it worked), and Manage (what happens when it is wrong, unavailable, or creates new risk). Anything that cannot pass those four does not go in the roadmap.",
  },
  {
    question: "Do I need the free shop visit before the audit?",
    answer:
      "Yes. The shop visit is 60 minutes, free, and exists to work out whether a paid audit is worth your money. If it is, you get a scoped proposal within 24 hours. If it is not, you will hear that plainly.",
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
      "Owner-led service businesses — HVAC, plumbing, electrical, roofing and general contracting, plus non-trades service businesses with the same operating shape. The work is finding the operating problems first, then choosing technology, improving workflow, and training the team. No software licenses are sold and no commission is taken from any vendor.",
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

/**
 * Outcome Sprints. Keyed by the /services/<slug> segment. Each answers price
 * and scope directly — same rule as AUDIT_FAQS: price questions are
 * high-intent, so answer with the number, not a deflection to "contact us."
 */
export const SPRINT_FAQS: Record<string, Faq[]> = {
  "unsold-estimate-recovery-sprint": [
    {
      question: "How much does the Unsold Estimate Recovery Sprint cost?",
      answer:
        "$5,000 to $7,500 as a founding-client range, scoped and fixed before the sprint starts based on what the Growth & Systems Blueprint finds — estimate volume, current tools, and where follow-up breaks down today. No hourly billing.",
    },
    {
      question: "Do I need the audit before this sprint?",
      answer:
        "Yes. The audit is what determines whether unsold estimates are the highest-value problem to fix first, and it sets the sprint's scope and price. Sprints are not sold without it.",
    },
    {
      question: "Will this replace our CRM or add new software?",
      answer:
        "Usually not. Most CRM and FSM platforms already have a follow-up or pipeline feature that was never configured or adopted. New software is only recommended when nothing suitable already exists.",
    },
  ],
  "missed-call-recovery-sprint": [
    {
      question: "How much does the Missed Call Recovery Sprint cost?",
      answer:
        "$5,000 to $7,500 as a founding-client range, scoped and fixed before the sprint starts based on what the Growth & Systems Blueprint finds — current phone setup, call volume, and where calls are actually being lost. No hourly billing.",
    },
    {
      question: "Does this involve AI answering customer calls?",
      answer:
        "Only where it removes real admin work with a human reviewing the outcome — after-hours call handling and routing, for example. It is never used to make unreviewed customer-facing decisions.",
    },
    {
      question: "How do you measure whether it worked?",
      answer:
        "The audit establishes a baseline for missed-call volume before anything changes. A 30-day check afterward compares against that same baseline — the same rule as every engagement: no baseline, no claimed result.",
    },
  ],
  "office-workflow-reduction-sprint": [
    {
      question: "How much does the Office Workflow Reduction Sprint cost?",
      answer:
        "$5,000 to $7,500 as a founding-client range, scoped and fixed before the sprint starts based on what the Growth & Systems Blueprint finds — which systems are involved and where duplicate work actually happens. No hourly billing.",
    },
    {
      question: "Is this the right sprint if we don't know which problem we have?",
      answer:
        "That is exactly what the audit is for. If the top operating leak is duplicate data entry and disconnected systems rather than a specific pain point like missed calls or unsold estimates, this is the sprint the audit will recommend.",
    },
  ],
  "maintenance-agreement-reactivation-sprint": [
    {
      question: "How much does the Maintenance Agreement Reactivation Sprint cost?",
      answer:
        "$5,000 to $7,500 as a founding-client range, scoped and fixed before the sprint starts based on what the Growth & Systems Blueprint finds — how many agreements exist and what platform manages them today. No hourly billing.",
    },
    {
      question: "Is this only for HVAC businesses?",
      answer:
        "It applies to any business running recurring maintenance or service agreements, though it is most common in HVAC. The audit confirms whether lapsed agreements are a significant enough leak to justify the sprint.",
    },
  ],
  "crm-fsm-utilization-sprint": [
    {
      question: "How much does the CRM/FSM Utilization Sprint cost?",
      answer:
        "$5,000 to $7,500 as a founding-client range, scoped and fixed before the sprint starts based on what the Growth & Systems Blueprint finds — which platform, what is configured today, and where adoption breaks down. No hourly billing.",
    },
    {
      question: "What if the audit finds we should switch platforms entirely?",
      answer:
        "That is a legitimate outcome and the recommendation stays vendor-neutral either way — no commission is taken on any platform. If switching is the right call, that becomes a separately scoped project rather than this sprint.",
    },
  ],
};

/** Per-city. Keyed by the /locations/<slug> segment. */
export const LOCATION_FAQS: Record<string, Faq[]> = {
  clearwater: [
    {
      question: "Do you work with contractors in Clearwater and the beaches?",
      answer:
        "Yes. Clearwater and the beach communities — Clearwater Beach, Sand Key, and the barrier islands — are core service area, along with the rest of Pinellas County. Visits happen at the shop, since how the office actually runs during the tourist season is what matters most.",
    },
    {
      question:
        "How does Clearwater's tourism economy affect a contractor's technology needs?",
      answer:
        "Clearwater runs two overlapping demand cycles: year-round residential and commercial work, plus a hospitality and short-term-rental sector tied to the beaches that needs fast turnaround between guest stays. A property management or hospitality-adjacent contractor client has tighter scheduling windows than a standard residential job, which changes what 'good' dispatch and follow-up look like — a system built only for residential service calls tends to break under same-day turnaround pressure.",
    },
    {
      question: "What kinds of businesses in Clearwater do you work with?",
      answer:
        "Owner-led contracting and field-service firms — HVAC, plumbing, electrical, roofing, general contracting — plus service businesses supporting Clearwater's hospitality and vacation-rental sector, where the operating shape (fast turnaround, seasonal volume swings) is similar even outside the trades.",
    },
    {
      question: "Is Clearwater different from St. Petersburg for a service business?",
      answer:
        "The core Pinellas operating constraints are the same — narrow county, unforgiving drive time, a real summer peak. What differs is demand mix: Clearwater carries more tourism and hospitality-driven work than St. Petersburg's more residential/commercial balance, and its growing tech-sector presence (AnyDesk, KnowBe4, and others have opened offices there) means more office and mixed-use commercial buildout for contractors serving that space.",
    },
  ],
  largo: [
    {
      question: "Do you work with contractors based in Largo?",
      answer:
        "Yes. Largo sits centrally in Pinellas County, and that central position is exactly why many Pinellas contractor and field-service businesses are physically headquartered there — it is close to dispatch coverage running both north toward Clearwater and south toward St. Petersburg without the drive-time penalty either end of the county carries.",
    },
    {
      question: "What makes Largo a strong base for a contractor business?",
      answer:
        "Largo has one of the stronger industrial and office real estate markets in Pinellas County, anchored by major employers including TD Synnex, and the West Bay Drive and Clearwater-Largo Road corridors have seen active redevelopment. For a contractor business, that combination of central location and available industrial/flex space makes Largo a practical place to base trucks, storage, and an office — rather than a place a business merely services.",
    },
    {
      question: "What operational problems are common for Largo-based contractors?",
      answer:
        "Because Largo sits mid-county, dispatch efficiency depends heavily on whether the board is built with drive time in mind — a Largo-based crew covering both the Clearwater and St. Petersburg sides of the county in the same day is a very different scheduling problem than a business anchored at one end. Businesses that never account for that in how jobs get sequenced lose more hours to driving than the map distance suggests.",
    },
    {
      question: "Do you serve Largo directly, or only as part of Pinellas County?",
      answer:
        "Directly. Largo gets the same on-site shop visit and advisory work as St. Petersburg or Clearwater — the location does not change the service, only the drive.",
    },
  ],
  "pinellas-park": [
    {
      question: "Do you work with contractors in Pinellas Park?",
      answer:
        "Yes, and Pinellas Park is a particularly common base for them. It carries one of the largest concentrations of industrial and warehouse space in Pinellas County, with industrial vacancy historically running near the low single digits — which makes it one of the few places in the county where a contractor business can actually find warehouse, flex, or shop space to lease or buy.",
    },
    {
      question: "Why do so many contractor businesses operate out of Pinellas Park?",
      answer:
        "Zoning and available real estate. Most of Pinellas County is built out residentially, but Pinellas Park has real industrial and flex-space inventory — the kind a contractor business actually needs for trucks, equipment, and material storage. A business headquartered there is not necessarily working there; it is based there because that is where the space exists, then dispatches across the rest of the county.",
    },
    {
      question:
        "What does that mean for a Pinellas Park contractor's technology needs?",
      answer:
        "A business based in warehouse/flex space with a truck fleet has different operational pressure points than a purely office-based service business — inventory and equipment tracking, fleet coordination, and dispatch efficiency out of a single hub location tend to matter more here than for a business without a physical yard. That shapes which parts of a CRM or FSM platform are worth configuring first.",
    },
    {
      question: "How tight is industrial space in Pinellas Park right now?",
      answer:
        "Tight. Countywide industrial vacancy in Pinellas has run near 2 percent in recent market reporting, and Pinellas Park carries a meaningful share of what exists. A contractor business already based there holds a real advantage over one still looking for space — worth knowing before assuming relocation is an easy option.",
    },
  ],
  brandon: [
    {
      question: "Do you work with contractors in Brandon?",
      answer:
        "Yes. Brandon is the commercial and residential anchor of eastern Hillsborough County, and it is core service area alongside Tampa. Richard is based in St. Petersburg and works on site throughout the Brandon area.",
    },
    {
      question: "Is Brandon a city, and does that affect permitting?",
      answer:
        "Brandon is unincorporated — a census-designated place with a real identity (roughly 115,000 residents) but no city government of its own. Zoning, permitting, and most public services run through Hillsborough County directly rather than a city hall, which matters for any contractor business that assumes 'the city' handles permits — in Brandon, it is the county, on the county's process and timeline.",
    },
    {
      question:
        "What is different about running a service business out of Brandon versus Tampa proper?",
      answer:
        "Brandon carries real commercial density of its own — one of the larger unincorporated business districts in the state, with thousands of businesses along the SR 60 corridor — but without a separate municipal government, so a Brandon-based contractor is navigating county process for permits and licensing even while serving what functions like its own commercial center. That combination of scale without a distinct city bureaucracy is worth planning around, not discovering mid-project.",
    },
    {
      question: "Do you travel to Brandon and the surrounding communities?",
      answer:
        "Yes — Brandon, along with Riverview, Valrico, and the rest of eastern Hillsborough County. These unincorporated communities cover most of the county geographically, and most of Hillsborough's contractor businesses operate somewhere in that unincorporated ring rather than inside Tampa's city limits.",
    },
  ],
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
        "The Growth & Systems Blueprint is $1,500 founding-client price, delivered in five business days, and credited toward an approved implementation engagement. The shop visit that comes first is free, runs 60 minutes, and carries no obligation. Call or text 727-600-3425.",
    },
  ],
};
