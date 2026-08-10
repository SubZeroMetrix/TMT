import type { CollectionConfig } from "payload";

import { editorsAndOwners, publishedOrAuthenticated } from "../access/roles";
import { seoFields } from "../fields/seo";

export const Services: CollectionConfig = {
  slug: "services",
  labels: {
    singular: "Service",
    plural: "Services",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "order", "_status"],
    group: "Content",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
  access: {
    create: editorsAndOwners,
    delete: editorsAndOwners,
    read: publishedOrAuthenticated,
    update: editorsAndOwners,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: { position: "sidebar" },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: { position: "sidebar" },
    },
    {
      name: "eyebrow",
      type: "text",
    },
    {
      name: "summary",
      type: "textarea",
      required: true,
    },
    {
      name: "body",
      type: "richText",
    },
    {
      name: "bullets",
      type: "array",
      fields: [
        {
          name: "item",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "ctaLabel",
      type: "text",
    },
    {
      name: "ctaHref",
      type: "text",
    },
    ...seoFields,
  ],
};
