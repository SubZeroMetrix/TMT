import type { GlobalConfig } from "payload";

import { anyone, editorsAndOwners } from "../access/roles";
import { linkFields } from "../fields/link";
import { seoFields } from "../fields/seo";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  access: {
    read: anyone,
    update: editorsAndOwners,
  },
  fields: [
    {
      name: "companyName",
      type: "text",
      required: true,
      defaultValue: "The Modern Trades Mentor LLC",
    },
    {
      name: "phone",
      type: "group",
      fields: linkFields,
    },
    {
      name: "email",
      type: "group",
      fields: linkFields,
    },
    {
      name: "address",
      type: "textarea",
    },
    {
      name: "bookingUrl",
      type: "text",
      admin: {
        description: "Optional Go High Level / booking calendar URL override.",
      },
    },
    {
      name: "defaultCta",
      type: "group",
      fields: linkFields,
    },
    ...seoFields,
  ],
};
