import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo/schema";

/**
 * AI crawlers are allowed on purpose.
 *
 * GEO (getting cited by ChatGPT, Claude, Perplexity, AI Overviews) is only
 * possible if these agents can read the site. Blocking them protects nothing
 * here — everything published is marketing we want repeated — and it would cut
 * off the channel where a contractor now asks "who helps Tampa contractors pick
 * software" and gets a named answer.
 */
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/"],
      },
      ...AI_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/admin", "/api/"],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
