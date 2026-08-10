/**
 * Seed Payload globals/collections from existing static website content.
 * Does not modify the public frontend until you publish and wire pages.
 *
 * Usage: npm run seed
 * Requires .env.local with DATABASE_URL / POSTGRES_URL and PAYLOAD_SECRET.
 */
import { getPayload } from "payload";
import config from "../payload.config";
import * as content from "../lib/content";

async function seed() {
  const payload = await getPayload({ config });

  console.log("Seeding navigation…");
  await payload.updateGlobal({
    slug: "navigation",
    data: {
      wordmarkLine1: content.header.wordmarkLine1,
      wordmarkLine2: content.header.wordmarkLine2,
      wordmarkLine3: content.header.wordmarkLine3,
      descriptor: content.header.descriptor,
      nav: content.header.nav.map((item) => ({
        label: item.label,
        href: item.href,
        newTab: false,
      })),
      primaryCta: {
        label: content.header.primaryCta.label,
        href: content.header.primaryCta.href,
        newTab: false,
      },
    },
    draft: false,
    overrideAccess: true,
  });

  console.log("Seeding site settings…");
  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      companyName: content.contact.company,
      phone: {
        label: content.contact.phone.label,
        href: content.contact.phone.href,
        newTab: false,
      },
      email: {
        label: content.contact.email.label,
        href: content.contact.email.href,
        newTab: false,
      },
      address: content.contact.address,
      defaultCta: {
        label: content.finalCta.primaryCta.label,
        href: content.finalCta.primaryCta.href,
        newTab: false,
      },
      seo: {
        title: "The Modern Trades Mentor | Contractor Technology & AI Guidance",
        description:
          "The Modern Trades Mentor helps Tampa Bay contractors choose the right software, AI, and systems for their business.",
        noIndex: false,
      },
    },
    overrideAccess: true,
  });

  console.log("Seeding homepage (as draft — publish after review)…");
  await payload.updateGlobal({
    slug: "homepage",
    draft: true,
    data: {
      hero: {
        eyebrow: content.hero.eyebrow,
        headlineLine1: content.hero.headlineLine1,
        headlineLine2: content.hero.headlineLine2,
        description: content.hero.description,
        primaryCta: { ...content.hero.primaryCta, newTab: false },
        secondaryCta: { ...content.hero.secondaryCta, newTab: false },
        phone: { ...content.hero.phone, newTab: false },
        credibilityLine: content.hero.credibilityLine,
        vendorNeutralBadge: content.hero.vendorNeutralBadge,
      },
      trustBar: content.trustBar,
      trades: content.trades.map((name) => ({ name })),
      whoThisIsFor: content.whoThisIsFor,
      painPoints: content.painPoints,
      audit: {
        ...content.audit,
        items: content.audit.items.map((item) => ({ item })),
        cta: { ...content.audit.cta, newTab: false },
      },
      principles: content.principles,
      founder: {
        heading: content.founder.heading,
        columns: content.founder.columns.map((col) => ({
          title: col.title,
          items: col.items.map((item) => ({ item })),
        })),
        narrative: content.founder.narrative,
        disclaimer: content.founder.disclaimer,
        cta: { ...content.founder.cta, newTab: false },
      },
      differentiators: content.differentiators.map((item) => ({ item })),
      philosophy: content.philosophy,
      aiPositioning: {
        heading: content.aiPositioning.heading,
        usesHeading: content.aiPositioning.usesHeading,
        uses: content.aiPositioning.uses.map((item) => ({ item })),
        cautionsHeading: content.aiPositioning.cautionsHeading,
        cautions: content.aiPositioning.cautions.map((item) => ({ item })),
      },
      finalCta: {
        headline: content.finalCta.headline,
        body: content.finalCta.body,
        primaryCta: { ...content.finalCta.primaryCta, newTab: false },
        secondaryCta: { ...content.finalCta.secondaryCta, newTab: false },
        footnote: content.finalCta.footnote,
      },
    },
    overrideAccess: true,
  });

  const servicesSeed = [
    {
      title: "Technology & AI Readiness Audit",
      slug: "technology-audit",
      order: 1,
      summary:
        "A structured review of your systems, workflows, staff readiness, security exposure, and modernization priorities.",
      bullets: content.audit.items.map((item) => ({ item })),
      ctaLabel: "Explore the Audit",
      ctaHref: "/services/technology-audit",
    },
    {
      title: "Software Selection",
      slug: "software-selection",
      order: 2,
      summary: "Vendor-neutral help choosing tools that fit your contracting business.",
    },
    {
      title: "Implementation Planning",
      slug: "implementation-planning",
      order: 3,
      summary: "Practical rollout plans your team can actually adopt.",
    },
    {
      title: "Custom Workflow",
      slug: "custom-workflow",
      order: 4,
      summary: "Connect the tools you already own so work stops falling through the cracks.",
    },
    {
      title: "AI Adoption & Training",
      slug: "ai-adoption-training",
      order: 5,
      summary: "Train the team on AI that earns its keep — not vendor hype.",
    },
    {
      title: "Revenue Loss Recovery",
      slug: "revenue-loss-recovery",
      order: 6,
      summary: "Find and fix the silent leaks in scheduling, follow-up, and maintenance agreements.",
    },
  ];

  console.log("Seeding services (draft)…");
  for (const service of servicesSeed) {
    const existing = await payload.find({
      collection: "services",
      where: { slug: { equals: service.slug } },
      limit: 1,
      overrideAccess: true,
    });
    if (existing.totalDocs > 0) {
      await payload.update({
        collection: "services",
        id: existing.docs[0].id,
        data: service,
        draft: true,
        overrideAccess: true,
      });
    } else {
      await payload.create({
        collection: "services",
        data: service,
        draft: true,
        overrideAccess: true,
      });
    }
  }

  console.log("Seeding FAQs (draft)…");
  const faqs = [
    {
      question: "Do you sell software licenses?",
      answer:
        "No. Recommendations are vendor-neutral. We help you choose what fits — we do not earn commissions on software sales.",
      order: 1,
      category: "General",
    },
    {
      question: "Who is this for?",
      answer:
        "Owner-led HVAC, plumbing, electrical, roofing, general contracting, and service businesses — especially teams with roughly 0–15 employees.",
      order: 2,
      category: "General",
    },
    {
      question: "Where do you work?",
      answer:
        "Primarily Tampa Bay (Tampa, St. Petersburg, Clearwater) with remote advisory available for other markets.",
      order: 3,
      category: "General",
    },
  ];

  for (const faq of faqs) {
    const existing = await payload.find({
      collection: "faqs",
      where: { question: { equals: faq.question } },
      limit: 1,
      overrideAccess: true,
    });
    if (existing.totalDocs === 0) {
      await payload.create({
        collection: "faqs",
        data: faq,
        draft: true,
        overrideAccess: true,
      });
    }
  }

  console.log("Seed complete. Homepage/services/FAQs are drafts — publish from /admin after review.");
  console.log("Create your owner account at /admin if you have not already.");
  process.exit(0);
}

seed().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
