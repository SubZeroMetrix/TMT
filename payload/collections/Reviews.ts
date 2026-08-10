import type { CollectionConfig } from "payload";

import { editorsAndOwners, publishedOrAuthenticated } from "../access/roles";

export const Reviews: CollectionConfig = {
  slug: "reviews",
  labels: {
    singular: "Review",
    plural: "Reviews",
  },
  admin: {
    useAsTitle: "authorName",
    defaultColumns: ["authorName", "rating", "order", "_status"],
    group: "Social Proof",
  },
  versions: {
    drafts: true,
    maxPerDoc: 20,
  },
  access: {
    create: editorsAndOwners,
    delete: editorsAndOwners,
    read: publishedOrAuthenticated,
    update: editorsAndOwners,
  },
  fields: [
    {
      name: "authorName",
      type: "text",
      required: true,
    },
    {
      name: "authorTitle",
      type: "text",
      admin: {
        description: "Company / role (optional)",
      },
    },
    {
      name: "rating",
      type: "number",
      min: 1,
      max: 5,
      required: true,
      defaultValue: 5,
    },
    {
      name: "quote",
      type: "textarea",
      required: true,
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "sourceUrl",
      type: "text",
      admin: {
        description: "Optional link to the original review",
      },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: { position: "sidebar" },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: { position: "sidebar" },
    },
  ],
};
