import type { CollectionConfig } from "payload";

import { editorsAndOwners, publishedOrAuthenticated } from "../access/roles";
import { seoFields } from "../fields/seo";

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: "Insight Post",
    plural: "Insight Posts",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "publishedAt", "_status"],
    group: "Content",
  },
  versions: {
    drafts: {
      autosave: true,
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
      admin: { position: "sidebar" },
    },
    {
      name: "excerpt",
      type: "textarea",
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    ...seoFields,
  ],
};
