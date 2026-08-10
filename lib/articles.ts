/**
 * The article registry — single source of truth.
 *
 * The /insights index, the sitemap and each page's Article schema all read
 * from here, so a new post cannot appear in one place and be missing from
 * another.
 *
 * `published` and `updated` are real dates. Never backdate a post to look
 * established, and bump `updated` only when the content actually changed.
 */

export type Article = {
  slug: string;
  title: string;
  /** Card subtitle on /insights. */
  subtitle: string;
  /** Meta description. Should read as a standalone answer where possible. */
  description: string;
  eyebrow: string;
  readTime: string;
  /** ISO date. */
  published: string;
  updated: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "what-to-automate-first",
    title: "What Should a Small Business Automate First?",
    subtitle:
      "Start with the work that repeats daily, follows the same steps every time, and costs you money when it is forgotten.",
    description:
      "Automate the work that repeats daily, follows identical steps, and costs money when forgotten — usually missed calls and estimate follow-up. A practical order of operations for small service businesses in St. Petersburg and Tampa.",
    eyebrow: "AI & Automation",
    readTime: "9 min read",
    published: "2026-08-10",
    updated: "2026-08-10",
  },
  {
    slug: "choose-a-field-service-crm",
    title: "How to Choose a Field Service CRM Without Getting Trapped by a Vendor",
    subtitle:
      "The demo is designed to hide the setup work. Six questions that surface what a platform actually costs you.",
    description:
      "Field service CRM demos hide the setup burden. Six questions that reveal what a platform really costs a small shop — pricebook work, data migration, contract terms, and who owns your data if you leave.",
    eyebrow: "Software Selection",
    readTime: "11 min read",
    published: "2026-08-10",
    updated: "2026-08-10",
  },
  {
    slug: "ai-consulting-st-petersburg-what-to-expect",
    title: "AI Consulting in St. Petersburg: What Local Businesses Should Expect",
    subtitle:
      "What actually happens, what it should cost you in time, and how to tell a real engagement from a sales process.",
    description:
      "What AI consulting looks like for a small business in St. Petersburg: a free on-site visit, a readiness audit before any tool is named, and a written recommendation. How to tell a real engagement from a sales process.",
    eyebrow: "Local · St. Petersburg",
    readTime: "8 min read",
    published: "2026-08-10",
    updated: "2026-08-10",
  },
  {
    slug: "truth-about-ai-in-the-trades",
    title: "The Truth About AI in the Trades",
    subtitle:
      "Contractors do not need more AI hype. They need a plan that works in the real business.",
    description:
      "An honest look at where AI helps a contracting business, where it is a liability, and what to fix before adopting any of it.",
    eyebrow: "AI & Operations",
    readTime: "12 min read",
    published: "2026-06-01",
    updated: "2026-08-10",
  },
];

export const getArticle = (slug: string) =>
  ARTICLES.find((a) => a.slug === slug);
