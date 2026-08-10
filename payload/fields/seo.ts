import type { Field } from "payload";

export const seoFields: Field[] = [
  {
    name: "seo",
    type: "group",
    label: "SEO",
    fields: [
      {
        name: "title",
        type: "text",
        admin: {
          description: "Overrides the default page title in search results.",
        },
      },
      {
        name: "description",
        type: "textarea",
      },
      {
        name: "image",
        type: "upload",
        relationTo: "media",
      },
      {
        name: "noIndex",
        type: "checkbox",
        defaultValue: false,
        label: "Hide from search engines",
      },
    ],
  },
];
