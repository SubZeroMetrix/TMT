// Homepage + site content. Isolated so it can move into a CMS later.

export const header = {
  wordmarkLine1: "THE",
  wordmarkLine2: "MODERN",
  wordmarkLine3: "TRADES MENTOR LLC",
  descriptor: "CONTRACTOR OPERATIONS & TECHNOLOGY",
  // Restructured around the diagnose -> fix -> maintain offer ladder rather
  // than service categories (AI Consulting / AI Automation / CRM & Workflow).
  // URLs are unchanged for pages that already exist - this is a navigation
  // relabel, not a route change (see /services/technology-audit's own
  // "don't 301 on a positioning change" precedent).
  //
  // "90-Day Sprint" points at /services rather than a single page: five
  // separate named sprint pages exist there (Unsold Estimate Recovery,
  // Missed Call Recovery, etc.) - one nav label can't fan out to five URLs.
  // "Ongoing Partnership" points at /contact: a dedicated partnership page
  // was not part of the approved build scope, so this links to where that
  // conversation actually starts today rather than a page that doesn't exist.
  nav: [
    { label: "Problems We Fix", href: "/services" },
    { label: "Operations Audit", href: "/services/technology-audit" },
    { label: "90-Day Sprint", href: "/services" },
    { label: "Ongoing Partnership", href: "/contact" },
    { label: "HVAC", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "About Richard", href: "/about" },
  ],
  primaryCta: { label: "Book a Shop Visit", href: "/book-a-strategy-call" },
};

/**
 * The broad front door. These run directly under the hero so a visitor
 * searching "AI consulting" or "workflow automation" sees themselves before
 * the contractor specialization appears further down the page.
 */
export const broadServices = {
  heading: "What we do",
  items: [
    {
      title: "AI Consulting",
      body: "Where AI earns its keep in your business, where it is a liability, and what to fix first.",
      href: "/ai-consulting-st-petersburg-fl",
    },
    {
      title: "AI Automation",
      body: "Narrow, reliable automation of the admin work that eats the week — calls, follow-up, notes, billing gaps.",
      href: "/ai-automation",
    },
    {
      title: "CRM & Workflow Consulting",
      body: "How customer and job information should move through the business, and which system actually fits it.",
      href: "/crm-workflow-consulting",
    },
    {
      title: "Operational Audits",
      body: "Where the business is losing money and time, measured and ranked. $1,500 founding price, five business days.",
      href: "/services/technology-audit",
    },
    {
      title: "On-Site Shop Visits",
      body: "Free, 60 minutes, at your place — a fit conversation to see whether a paid audit is worth it.",
      href: "/book-a-strategy-call",
    },
    {
      title: "Serving Pinellas & Hillsborough",
      body: "St. Petersburg, Clearwater, Largo, Tampa, Brandon and every city across both counties.",
      href: "/locations/pinellas-county-fl",
    },
  ],
};

export const hero = {
  eyebrow: "FIELD-TESTED. CONTRACTOR-BUILT.",
  // H1 targets the head term contractors actually search ("AI consulting").
  // The locked brand promise moved to `promise` directly beneath it — the
  // search term wins the click, the promise wins the read.
  headlineLine1: "AI CONSULTING FOR CONTRACTORS",
  headlineLine2: "AND SERVICE BUSINESSES",
  promise: "Modernize your contracting business. Without losing control of it.",
  description:
    "The Modern Trades Mentor helps Tampa Bay service businesses find and fix the operating problems that waste time, delay follow-up, and make technology investments fail. We start with the workflow — not the software — and make vendor-neutral recommendations backed by a practical implementation plan.",
  primaryCta: { label: "Book a Shop Visit", href: "/book-a-strategy-call" },
  secondaryCta: { label: "See the Operational AI Readiness Audit", href: "/services/technology-audit" },
  phone: { label: "Prefer to talk now? Call 727-600-3425", href: "tel:+17276003425" },
  credibilityLine:
    "Built by a trades and operations leader with more than 26 years of HVAC, facilities, service-management, and mechanical-systems experience.",
  founderImage: {
    src: "/richard-founder-banner.png",
    alt: "Richard Fritzke, founder of The Modern Trades Mentor",
  },
  vendorNeutralBadge: {
    title: "VENDOR-NEUTRAL. CONTRACTOR-FIRST.",
    body: "We do not sell software licenses. We help you choose what fits your business.",
  },
};

export const trustBar = [
  { value: "26+", label: "Years in HVAC, Facilities & Operations" },
  { value: "20+", label: "Technicians Supervised" },
  { value: "40+", label: "Commercial Facilities Managed" },
  { value: "EPA", label: "Universal EPA Certified" },
];

export const trades = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "General Contracting",
  "Handyman",
  "Landscaping",
  "Painting",
  "Cleaning Services",
  "Solar",
];

export const whoThisIsFor = {
  heading: "Built for Small Contractor and Field-Service Teams",
  support:
    "Designed primarily for owner-led service companies that need a practical technology roadmap — not another software sales pitch.",
};

export const painPoints = [
  {
    title: "Disconnected Systems",
    body: "CRM, dispatch, invoicing, and texting tools that don't talk to each other — because each was sold separately.",
  },
  {
    title: "Scheduling & Follow-Up Gaps",
    body: "Missed calls, unsold estimates, and lapsed maintenance agreements that quietly cost more than a new tool ever would.",
  },
  {
    title: "Overloaded Office Teams",
    body: "Manual work that software should be handling, piling onto the people who already have the most on their plate.",
  },
  {
    title: "Low Software Adoption",
    body: "Tools bought with good intentions that technicians and office staff never actually use.",
  },
  {
    title: "AI Confusion",
    body: "Pressure to 'do something with AI' with no clear sense of what's useful, what's risky, and what's a waste of money.",
  },
  {
    title: "No Clear Modernization Roadmap",
    body: "A pile of individual decisions instead of one coherent plan for where the business's systems need to go.",
  },
];

export const audit = {
  eyebrow: "Start With Clarity",
  title: "Operational AI Readiness Audit",
  description:
    "$1,500 fixed fee, delivered in five business days: a workflow map, your top three operating leaks, a measured baseline, and a 30/60/90-day plan.",
  items: [
    "Current software and tool inventory",
    "Workflow and bottleneck analysis",
    "Scheduling, dispatch, and follow-up review",
    "Staff adoption and training readiness",
    "AI opportunity and risk assessment",
    "Security and data-handling review",
    "Vendor-neutral recommendations",
    "Prioritized implementation roadmap",
  ],
  cta: { label: "Explore the Audit", href: "/services/technology-audit" },
};

export const principles = [
  {
    title: "Business Before AI",
    body: "We fix the process before automating it.",
  },
  {
    title: "Vendor-Neutral Recommendations",
    body: "We do not force a preferred software platform.",
  },
  {
    title: "Practical Implementation",
    body: "A recommendation is only useful if the team can actually adopt it.",
  },
  {
    title: "Keep the Human in Control",
    body: "AI should support owners and staff — not create new risks or confusion.",
  },
];

export const founder = {
  heading: "Built From the Field, Not From a Sales Deck",
  columns: [
    {
      title: "26+ Years in the Trades",
      items: ["Commercial HVAC", "Facilities", "Mechanical Systems", "Operations"],
    },
    {
      title: "Leadership",
      items: ["20+ technicians supervised", "40+ facilities managed", "Capital planning", "Building optimization"],
    },
    {
      title: "Licenses & Credentials",
      items: [
        "ICC Master Mechanical License",
        "EPA Universal Certified",
        "A.S. HVAC/R, Redstone College",
        "OSHA 30 · MSHA certified",
      ],
    },
    {
      title: "Today",
      items: ["Helping contractors modernize", "Software selection", "Practical AI adoption", "Staff training"],
    },
  ],
  subhead:
    "Practical AI, technology, and workflow guidance built on more than 26 years in HVAC, mechanical systems, facilities, technician leadership, and service operations.",
  narrative:
    "Richard Fritzke founded The Modern Trades Mentor to help business owners make better technology decisions without getting pulled into a software sales pitch.",
  narrative2:
    "For more than 26 years, Richard has worked across HVAC/R, facilities, mechanical systems, technician leadership, building optimization, capital planning, and service operations. He has led technical teams, supported complex commercial environments, and worked through the operational problems that software alone cannot solve: inconsistent processes, missed follow-up, disconnected systems, weak adoption, and wasted administrative time.",
  narrative3:
    "Today, Richard applies that field-and-operations experience to AI consulting, workflow improvement, CRM and software guidance, and practical technology planning for owner-led service businesses. Every recommendation starts with the business process, the people doing the work, and the outcome the owner needs — not a preferred software platform.",
  disclaimer:
    "Experience references are provided for professional background only and do not imply endorsement by any current or former employer or government entity.",
  cta: { label: "See Why Contractors Trust Richard", href: "/about" },
};

/**
 * Supporting credibility signal — NOT a headline.
 *
 * Wording is deliberate and must not change without the owner's say-so: the
 * licenses are NOT active, and TMT does not sell insurance or give insurance,
 * legal, tax or financial advice. Never describe Richard as a "licensed
 * insurance broker" or imply current licensure. Use "previously held licenses"
 * and "former insurance underwriting experience" only. The disclaimer below
 * must always render with it.
 */
export const insuranceBackground = {
  heading: "Earlier career",
  body:
    "Earlier in his career, Richard worked in insurance underwriting with Burns & Wilcox and previously held licenses in property and casualty, life, and health insurance. Although those licenses are no longer active, that experience continues to inform his practical approach to risk, documentation, vendor evaluation, and operational decision-making.",
  disclaimer:
    "The Modern Trades Mentor does not provide insurance, legal, tax, or financial advice, and does not sell insurance products.",
};

export const howRichardWorks = {
  heading: "How Richard Works With Your Business",
  steps: [
    {
      title: "1. Understand the operation",
      body: "We start with the real work: how leads move, how jobs are scheduled, how the office and field communicate, and where time or revenue is being lost.",
    },
    {
      title: "2. Identify the practical opportunity",
      body: "We review the workflows, systems, and AI opportunities that can make the business easier to manage — without forcing unnecessary technology changes.",
    },
    {
      title: "3. Create a clear next step",
      body: "You receive vendor-neutral guidance on what to improve first, what to leave alone, and what information you need before making a software or automation decision.",
    },
  ],
};

export const differentiators = [
  "Real field experience",
  "Vendor neutral",
  "No software commissions driving recommendations",
  "AI when it actually makes sense",
  "Operations before automation",
  "Training before implementation",
  "Built by someone still developing modern contractor software",
];

export const philosophy =
  "Technology should fit the contractor — not force the contractor to fit the technology.";

export const aiPositioning = {
  heading: "AI Is Part of the Future. It Is Not the Whole Strategy.",
  usesHeading: "Where AI actually helps a contractor",
  uses: [
    "Call summaries",
    "Customer follow-up",
    "Internal knowledge search",
    "SOP creation",
    "Proposal drafting",
    "Technician documentation",
    "Scheduling support",
    "Reporting",
    "Training",
    "Workflow assistance",
  ],
  cautionsHeading: "What we watch for",
  cautions: [
    "Not every process should be automated.",
    "Poor processes become worse when automated.",
    "Sensitive decisions still require human review.",
    "Data access and permissions must be controlled.",
    "Staff education matters as much as the tool.",
  ],
};

export const finalCta = {
  headline: "Ready to Build a More Modern Contracting Business?",
  body: "Start with a practical conversation about your current systems, your team, and where technology or AI can create real value.",
  primaryCta: { label: "Book a Shop Visit", href: "/book-a-strategy-call" },
  secondaryCta: { label: "Call 727-600-3425", href: "tel:+17276003425" },
  footnote: "No pressure. No software pitch. No obligation to buy a platform.",
};

/**
 * Pre-booking fit check.
 *
 * A shop visit costs 2-3 hours once drive time across the bay is counted, so
 * the point of this block is to let the wrong-fit visitor disqualify
 * themselves before Richard drives — without adding a form or a paywall in
 * front of a stranger who found the site through search.
 *
 * These three questions are also set as required questions on the Google
 * Calendar appointment schedule, which is where the answers are actually
 * captured. Keep the two in sync.
 */
export const fitCheck = {
  eyebrow: "Before you book",
  heading: "Three questions worth answering first",
  intro:
    "The visit works best when Richard knows what he is walking into. You will be asked these when you pick a time — short answers are fine.",
  questions: [
    {
      q: "How big is the team, office and field?",
      why: "Owners included. The work fits businesses of roughly 5 to 30 people — enough that jobs have to move between the office and the crew, small enough that one person can still decide to change a process.",
    },
    {
      q: "What are you using today?",
      why: "CRM, dispatch, invoicing, texts — even if the honest answer is a whiteboard, a shared inbox, and group texts. There is no wrong answer here.",
    },
    {
      q: "What two or three things do you most want fixed?",
      why: "In plain language — follow-up, scheduling, quoting, dispatch, reporting, or admin that eats the week. This is what the hour gets spent on.",
    },
  ],
  notAFit: {
    heading: "When it is not a fit",
    body: "The owner or decision-maker needs to be at the visit — an hour with someone who cannot decide anything helps nobody. Beyond that: pre-revenue businesses, anyone shopping for a cheap AI chatbot rather than a better operation, and anyone unwilling to change a process. Software cannot fix a process the business will not change, and Richard will say so early rather than take the work.",
  },
};

export const contact = {
  phone: { label: "727-600-3425", href: "tel:+17276003425" },
  email: {
    label: "Richard@TheModernTradesMentor.com",
    href: "mailto:Richard@TheModernTradesMentor.com",
  },
  address: "PO Box 66093, St. Petersburg, FL 33767",
  company: "The Modern Trades Mentor LLC",
};
