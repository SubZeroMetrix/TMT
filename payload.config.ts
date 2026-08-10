import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";
import sharp from "sharp";

import { migrations } from "./migrations";
import { Faqs } from "./payload/collections/Faqs";
import { Media } from "./payload/collections/Media";
import { Pages } from "./payload/collections/Pages";
import { Posts } from "./payload/collections/Posts";
import { Reviews } from "./payload/collections/Reviews";
import { Services } from "./payload/collections/Services";
import { Testimonials } from "./payload/collections/Testimonials";
import { Users } from "./payload/collections/Users";
import { FooterGlobal } from "./payload/globals/Footer";
import { Homepage } from "./payload/globals/Homepage";
import { Navigation } from "./payload/globals/Navigation";
import { SiteSettings } from "./payload/globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const serverURL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: " · TMT Admin",
    },
  },
  collections: [
    Users,
    Media,
    Pages,
    Services,
    Reviews,
    Testimonials,
    Faqs,
    Posts,
  ],
  globals: [Homepage, Navigation, FooterGlobal, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  serverURL,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  // Use TCP pg pool (not WebSocket @vercel/postgres) — avoids Neon 504s on Vercel.
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.POSTGRES_URL || process.env.DATABASE_URL || "",
      max: 10,
      connectionTimeoutMillis: 10_000,
    },
    push: process.env.NODE_ENV !== "production",
    prodMigrations: migrations,
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: {
        media: {
          disablePayloadAccessControl: true,
        },
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
      clientUploads: true,
    }),
  ],
  cors: [serverURL].filter(Boolean),
  csrf: [serverURL].filter(Boolean),
});
