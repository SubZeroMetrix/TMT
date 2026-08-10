import type { CollectionConfig } from "payload";

import { editorsAndOwners, publishedOrAuthenticated } from "../access/roles";
import { seoFields } from "../fields/seo";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "_status", "updatedAt"],
    group: "Content",
  },
  versions: {
    drafts: {
      autosave: {
        interval: 800,
      },
    },
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
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
        description: "Lower numbers appear first in page lists.",
      },
    },
    {
      name: "summary",
      type: "textarea",
    },
    {
      name: "content",
      type: "richText",
    },
    ...seoFields,
  ],
};
