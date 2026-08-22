import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import path from "node:path";

import { SITE_URL } from "@/lib/seo/schema";
import { ARTICLES } from "@/lib/articles";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

/**
 * Static routes. Priority reflects commercial intent, not how much we like the
 * page: the money pages are the services and the two core location pages.
 */
const ROUTES: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  // Broad head-term pages — the primary local search targets
  { path: "/ai-consulting-st-petersburg-fl", priority: 0.95, changeFrequency: "monthly" },
  { path: "/ai-automation", priority: 0.9, changeFrequency: "monthly" },
  { path: "/crm-workflow-consulting", priority: 0.9, changeFrequency: "monthly" },

  // GSS diagnostic — primary free-tier acquisition path, added 2026-08-22
  { path: "/growth-systems-score", priority: 0.9, changeFrequency: "monthly" },

  // Services — the offer pages
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/technology-audit", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/software-selection", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/revenue-loss-recovery", priority: 0.9, changeFrequency: "monthly" },

  // Three service paths — added 2026-08-15 alongside the funnel rebuild
  { path: "/services/growth-operations-systems", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/ai-consulting-automation", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/ongoing-growth-partner", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/ai-adoption-training", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/implementation-planning", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/custom-workflow", priority: 0.7, changeFrequency: "monthly" },

  // Outcome Sprints — second rung of the offer ladder, added alongside the
  // technology audit above rather than replacing any existing entry here.
  { path: "/services/unsold-estimate-recovery-sprint", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/missed-call-recovery-sprint", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/office-workflow-reduction-sprint", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/maintenance-agreement-reactivation-sprint", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/crm-fsm-utilization-sprint", priority: 0.8, changeFrequency: "monthly" },

  // Local — county hubs first, then the individual markets
  { path: "/locations/pinellas-county-fl", priority: 0.9, changeFrequency: "monthly" },
  { path: "/locations/hillsborough-county-fl", priority: 0.9, changeFrequency: "monthly" },
  { path: "/locations/st-petersburg", priority: 0.9, changeFrequency: "monthly" },
  { path: "/locations/tampa", priority: 0.9, changeFrequency: "monthly" },
  { path: "/locations/clearwater", priority: 0.8, changeFrequency: "monthly" },
  { path: "/locations/tampa-bay", priority: 0.8, changeFrequency: "monthly" },
  // Tier-1 markets per lib/seo/geo.ts PAGE POLICY — own real page, not a
  // doorway. Largo, Pinellas Park, and Brandon were marked tier:1 in the
  // source-of-truth data but had no page built until now.
  { path: "/locations/largo", priority: 0.8, changeFrequency: "monthly" },
  { path: "/locations/pinellas-park", priority: 0.8, changeFrequency: "monthly" },
  { path: "/locations/brandon", priority: 0.8, changeFrequency: "monthly" },
  // Wesley Chapel — tier:1 as of 2026-08-16 (see lib/seo/geo.ts), built for
  // the "automation consultant wesley chapel" search term.
  { path: "/locations/wesley-chapel", priority: 0.8, changeFrequency: "monthly" },

  // Trust and conversion
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/how-it-works", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.7, changeFrequency: "monthly" },
  { path: "/book-a-strategy-call", priority: 0.8, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/product-development", priority: 0.5, changeFrequency: "monthly" },

  // Insights
  { path: "/insights", priority: 0.7, changeFrequency: "weekly" },
  { path: "/field-notes", priority: 0.6, changeFrequency: "monthly" },

  // Inside the System — TMT internal case studies, individually canonical
  { path: "/insights/inside-the-system/ai-operating-system", priority: 0.6, changeFrequency: "monthly" },
  { path: "/insights/inside-the-system/when-ai-isnt-the-problem", priority: 0.6, changeFrequency: "monthly" },
  { path: "/insights/inside-the-system/why-leads-fall-through-the-cracks", priority: 0.6, changeFrequency: "monthly" },

  // Legal — indexed but low priority; they carry NAP consistency signals
  { path: "/legal/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/terms", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/accessibility", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/ai-disclaimer", priority: 0.2, changeFrequency: "yearly" },
];

/**
 * Real per-page last-modified date, from the file's own git history rather
 * than one shared build timestamp — Google explicitly discounts a lastmod
 * that doesn't reflect an actual content change. Falls back to the build
 * time if git isn't available (e.g. a shallow clone with truncated history).
 */
function lastCommitDate(routePath: string): Date {
  const filePath = path.join(
    process.cwd(),
    "app",
    routePath === "/" ? "" : routePath,
    "page.tsx",
  );
  try {
    const iso = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", filePath],
      { cwd: process.cwd(), encoding: "utf8" },
    ).trim();
    return iso ? new Date(iso) : new Date();
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ROUTES.map(({ path: routePath, priority, changeFrequency }) => ({
    url: `${SITE_URL}${routePath}`,
    lastModified: lastCommitDate(routePath),
    changeFrequency,
    priority,
  }));

  // Articles come from the registry, so a new post can never be published
  // without appearing here.
  const articleRoutes = ARTICLES.map((a) => ({
    url: `${SITE_URL}/insights/${a.slug}`,
    lastModified: new Date(`${a.updated}T12:00:00Z`),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
