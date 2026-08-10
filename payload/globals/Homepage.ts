import type { GlobalConfig } from "payload";

import { editorsAndOwners, publishedOrAuthenticated } from "../access/roles";
import { linkFields } from "../fields/link";

export const Homepage: GlobalConfig = {
  slug: "homepage",
  label: "Homepage",
  versions: {
    drafts: true,
    max: 25,
  },
  access: {
    read: publishedOrAuthenticated,
    update: editorsAndOwners,
  },
  fields: [
    {
      name: "hero",
      type: "group",
      fields: [
        { name: "eyebrow", type: "text" },
        { name: "headlineLine1", type: "text", required: true },
        { name: "headlineLine2", type: "text" },
        { name: "description", type: "textarea", required: true },
        {
          name: "primaryCta",
          type: "group",
          fields: linkFields,
        },
        {
          name: "secondaryCta",
          type: "group",
          fields: linkFields,
        },
        {
          name: "phone",
          type: "group",
          fields: linkFields,
        },
        { name: "credibilityLine", type: "textarea" },
        {
          name: "founderImage",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "vendorNeutralBadge",
          type: "group",
          fields: [
            { name: "title", type: "text" },
            { name: "body", type: "textarea" },
          ],
        },
      ],
    },
    {
      name: "trustBar",
      type: "array",
      fields: [
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },
    {
      name: "trades",
      type: "array",
      fields: [{ name: "name", type: "text", required: true }],
    },
    {
      name: "whoThisIsFor",
      type: "group",
      fields: [
        { name: "heading", type: "text" },
        { name: "support", type: "textarea" },
      ],
    },
    {
      name: "painPoints",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "body", type: "textarea", required: true },
      ],
    },
    {
      name: "audit",
      type: "group",
      fields: [
        { name: "eyebrow", type: "text" },
        { name: "title", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "items",
          type: "array",
          fields: [{ name: "item", type: "text", required: true }],
        },
        {
          name: "cta",
          type: "group",
          fields: linkFields,
        },
      ],
    },
    {
      name: "principles",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "body", type: "textarea", required: true },
      ],
    },
    {
      name: "founder",
      type: "group",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "columns",
          type: "array",
          fields: [
            { name: "title", type: "text", required: true },
            {
              name: "items",
              type: "array",
              fields: [{ name: "item", type: "text", required: true }],
            },
          ],
        },
        { name: "narrative", type: "textarea" },
        { name: "disclaimer", type: "textarea" },
        {
          name: "cta",
          type: "group",
          fields: linkFields,
        },
      ],
    },
    {
      name: "differentiators",
      type: "array",
      fields: [{ name: "item", type: "text", required: true }],
    },
    {
      name: "philosophy",
      type: "textarea",
    },
    {
      name: "aiPositioning",
      type: "group",
      fields: [
        { name: "heading", type: "text" },
        { name: "usesHeading", type: "text" },
        {
          name: "uses",
          type: "array",
          fields: [{ name: "item", type: "text", required: true }],
        },
        { name: "cautionsHeading", type: "text" },
        {
          name: "cautions",
          type: "array",
          fields: [{ name: "item", type: "text", required: true }],
        },
      ],
    },
    {
      name: "finalCta",
      type: "group",
      fields: [
        { name: "headline", type: "text" },
        { name: "body", type: "textarea" },
        {
          name: "primaryCta",
          type: "group",
          fields: linkFields,
        },
        {
          name: "secondaryCta",
          type: "group",
          fields: linkFields,
        },
        { name: "footnote", type: "text" },
      ],
    },
  ],
};
