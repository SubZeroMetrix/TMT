import type { CollectionConfig } from "payload";

import { editorsAndOwners, publishedOrAuthenticated } from "../access/roles";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: {
    singular: "Testimonial",
    plural: "Testimonials",
  },
  admin: {
    useAsTitle: "authorName",
    defaultColumns: ["authorName", "format", "order", "_status"],
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
    },
    {
      name: "format",
      type: "select",
      required: true,
      defaultValue: "written",
      options: [
        { label: "Written", value: "written" },
        { label: "Video", value: "video" },
      ],
    },
    {
      name: "quote",
      type: "textarea",
      admin: {
        condition: (_, siblingData) => siblingData?.format !== "video",
      },
    },
    {
      name: "video",
      type: "upload",
      relationTo: "media",
      admin: {
        condition: (_, siblingData) => siblingData?.format === "video",
        description: "Upload an MP4/WebM for public website playback only.",
      },
    },
    {
      name: "videoUrl",
      type: "text",
      admin: {
        condition: (_, siblingData) => siblingData?.format === "video",
        description: "Optional external embed URL (YouTube/Vimeo).",
      },
    },
    {
      name: "poster",
      type: "upload",
      relationTo: "media",
      admin: {
        condition: (_, siblingData) => siblingData?.format === "video",
      },
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
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
