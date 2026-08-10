import type { Field } from "payload";

export const linkFields: Field[] = [
  {
    name: "label",
    type: "text",
    required: true,
  },
  {
    name: "href",
    type: "text",
    required: true,
  },
  {
    name: "newTab",
    type: "checkbox",
    defaultValue: false,
  },
];
