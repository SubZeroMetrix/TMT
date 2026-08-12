import type { MetadataRoute } from "next";

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

  // Services — the offer pages
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/technology-audit", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/software-selection", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/revenue-loss-recovery", priority: 0.9, changeFrequency: "monthly" },
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

  // Trust and conversion
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/how-it-works", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.7, changeFrequency: "monthly" },
  { path: "/book-a-strategy-call", priority: 0.8, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/product-development", priority: 0.5, changeFrequency: "monthly" },

  // Insights
  { path: "/insights", priority: 0.7, changeFrequency: "weekly" },

  // Legal — indexed but low priority; they carry NAP consistency signals
  { path: "/legal/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/terms", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/accessibility", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/ai-disclaimer", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
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
