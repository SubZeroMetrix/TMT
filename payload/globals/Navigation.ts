import type { GlobalConfig } from "payload";

import { anyone, editorsAndOwners } from "../access/roles";
import { linkFields } from "../fields/link";

export const Navigation: GlobalConfig = {
  slug: "navigation",
  label: "Navigation",
  access: {
    read: anyone,
    update: editorsAndOwners,
  },
  fields: [
    {
      name: "wordmarkLine1",
      type: "text",
      defaultValue: "THE",
    },
    {
      name: "wordmarkLine2",
      type: "text",
      defaultValue: "MODERN",
    },
    {
      name: "wordmarkLine3",
      type: "text",
      defaultValue: "TRADES MENTOR LLC",
    },
    {
      name: "descriptor",
      type: "text",
      defaultValue: "CONTRACTOR TECHNOLOGY & AI ADVISORY",
    },
    {
      name: "nav",
      type: "array",
      labels: { singular: "Nav Item", plural: "Nav Items" },
      fields: linkFields,
    },
    {
      name: "primaryCta",
      type: "group",
      fields: linkFields,
    },
  ],
};
