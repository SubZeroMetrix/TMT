/**
 * Safe CMS reads with fallback to static lib/content.ts.
 * Public site keeps working even if Payload/DB is unavailable.
 */
import { getPayload } from "payload";
import config from "@payload-config";

import * as staticContent from "@/lib/content";

async function getPayloadClient() {
  try {
    return await getPayload({ config });
  } catch (error) {
    console.error("[cms] Payload unavailable, using static content", error);
    return null;
  }
}

export async function getHomepageContent() {
  const payload = await getPayloadClient();
  if (!payload) return staticContent;

  try {
    const homepage = await payload.findGlobal({
      slug: "homepage",
      depth: 1,
      draft: false,
    });

    if (!homepage?.hero?.headlineLine1) {
      return staticContent;
    }

    return {
      ...staticContent,
      hero: {
        ...staticContent.hero,
        ...homepage.hero,
        founderImage: staticContent.hero.founderImage,
      },
      trustBar:
        homepage.trustBar?.length
          ? homepage.trustBar.map((item) => ({
              value: item.value,
              label: item.label,
            }))
          : staticContent.trustBar,
      trades:
        homepage.trades?.length
          ? homepage.trades.map((t) => t.name)
          : staticContent.trades,
      whoThisIsFor: homepage.whoThisIsFor?.heading
        ? {
            heading: homepage.whoThisIsFor.heading || staticContent.whoThisIsFor.heading,
            support: homepage.whoThisIsFor.support || staticContent.whoThisIsFor.support,
          }
        : staticContent.whoThisIsFor,
      painPoints:
        homepage.painPoints?.length
          ? homepage.painPoints.map((p) => ({ title: p.title, body: p.body }))
          : staticContent.painPoints,
      finalCta: homepage.finalCta?.headline
        ? {
            ...staticContent.finalCta,
            ...homepage.finalCta,
            primaryCta: homepage.finalCta.primaryCta?.href
              ? homepage.finalCta.primaryCta
              : staticContent.finalCta.primaryCta,
            secondaryCta: homepage.finalCta.secondaryCta?.href
              ? homepage.finalCta.secondaryCta
              : staticContent.finalCta.secondaryCta,
          }
        : staticContent.finalCta,
    };
  } catch (error) {
    console.error("[cms] homepage read failed", error);
    return staticContent;
  }
}

export async function getNavigationContent() {
  const payload = await getPayloadClient();
  if (!payload) return staticContent.header;

  try {
    const nav = await payload.findGlobal({ slug: "navigation", depth: 0 });
    if (!nav?.nav?.length) return staticContent.header;
    return {
      wordmarkLine1: nav.wordmarkLine1 || staticContent.header.wordmarkLine1,
      wordmarkLine2: nav.wordmarkLine2 || staticContent.header.wordmarkLine2,
      wordmarkLine3: nav.wordmarkLine3 || staticContent.header.wordmarkLine3,
      descriptor: nav.descriptor || staticContent.header.descriptor,
      nav: nav.nav.map((item) => ({
        label: item.label,
        href: item.href,
      })),
      primaryCta: nav.primaryCta?.href
        ? { label: nav.primaryCta.label, href: nav.primaryCta.href }
        : staticContent.header.primaryCta,
    };
  } catch {
    return staticContent.header;
  }
}

export async function getPublishedReviews() {
  const payload = await getPayloadClient();
  if (!payload) return [];

  try {
    const result = await payload.find({
      collection: "reviews",
      where: { _status: { equals: "published" } },
      sort: "order",
      depth: 1,
      limit: 50,
    });
    return result.docs;
  } catch {
    return [];
  }
}

export async function getPublishedTestimonials() {
  const payload = await getPayloadClient();
  if (!payload) return [];

  try {
    const result = await payload.find({
      collection: "testimonials",
      where: { _status: { equals: "published" } },
      sort: "order",
      depth: 1,
      limit: 50,
    });
    return result.docs;
  } catch {
    return [];
  }
}
