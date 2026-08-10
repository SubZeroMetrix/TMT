import type { GlobalConfig } from "payload";

import { anyone, editorsAndOwners } from "../access/roles";
import { linkFields } from "../fields/link";

export const FooterGlobal: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  access: {
    read: anyone,
    update: editorsAndOwners,
  },
  fields: [
    {
      name: "blurb",
      type: "textarea",
    },
    {
      name: "columns",
      type: "array",
      fields: [
        { name: "heading", type: "text", required: true },
        {
          name: "links",
          type: "array",
          fields: linkFields,
        },
      ],
    },
    {
      name: "legalLinks",
      type: "array",
      fields: linkFields,
    },
    {
      name: "copyright",
      type: "text",
    },
  ],
};
