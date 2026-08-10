import type { CollectionConfig } from "payload";

import { anyone, editorsAndOwners } from "../access/roles";

const PUBLIC_MEDIA_MIME = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/gif",
  "image/svg+xml",
  "video/mp4",
  "video/webm",
  "video/quicktime",
];

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Media",
    plural: "Media",
  },
  access: {
    create: editorsAndOwners,
    delete: editorsAndOwners,
    read: anyone,
    update: editorsAndOwners,
  },
  admin: {
    group: "Content",
  },
  upload: {
    mimeTypes: PUBLIC_MEDIA_MIME,
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 512,
        position: "centre",
      },
      {
        name: "hero",
        width: 1920,
        height: undefined,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: {
        description: "Required for accessibility. Describe the image or video.",
      },
    },
    {
      name: "caption",
      type: "text",
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data, req }) => {
        const mime = data?.mimeType as string | undefined;
        if (mime && !PUBLIC_MEDIA_MIME.includes(mime)) {
          throw new Error(
            "Only public website images and videos may be uploaded. Do not store private documents or sensitive files in Blob.",
          );
        }
        if (data && !data.alt) {
          req.payload.logger.warn("Media upload missing alt text");
        }
        return data;
      },
    ],
  },
};
