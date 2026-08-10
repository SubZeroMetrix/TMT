import type { CollectionConfig } from "payload";

import { editorsAndOwners, publishedOrAuthenticated } from "../access/roles";

export const Faqs: CollectionConfig = {
  slug: "faqs",
  labels: {
    singular: "FAQ",
    plural: "FAQs",
  },
  admin: {
    useAsTitle: "question",
    defaultColumns: ["question", "category", "order", "_status"],
    group: "Content",
  },
  versions: {
    drafts: true,
    maxPerDoc: 15,
  },
  access: {
    create: editorsAndOwners,
    delete: editorsAndOwners,
    read: publishedOrAuthenticated,
    update: editorsAndOwners,
  },
  fields: [
    {
      name: "question",
      type: "text",
      required: true,
    },
    {
      name: "answer",
      type: "textarea",
      required: true,
    },
    {
      name: "category",
      type: "text",
      admin: { position: "sidebar" },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: { position: "sidebar" },
    },
  ],
};
