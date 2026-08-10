import type { CollectionConfig } from "payload";
import { ValidationError } from "payload";

import {
  canManageUsers,
  editorsAndOwners,
  isOwner,
  ownersOnly,
  requireStrongPassword,
  type Role,
} from "../access/roles";

type UserWithRole = {
  id?: number | string;
  role?: Role | null;
};

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "User",
    plural: "Users",
  },
  auth: {
    tokenExpiration: 60 * 60 * 8,
    maxLoginAttempts: 5,
    lockTime: 15 * 60 * 1000,
    verify: false,
  },
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "name", "role"],
    group: "Admin",
  },
  access: {
    admin: ({ req }) => Boolean(req.user),
    create: async ({ req }) => {
      if (canManageUsers({ req })) return true;
      const existing = await req.payload.find({
        collection: "users",
        limit: 1,
        depth: 0,
        overrideAccess: true,
      });
      return existing.totalDocs === 0;
    },
    delete: ownersOnly,
    read: editorsAndOwners,
    update: ({ req }) => {
      if (canManageUsers({ req })) return true;
      if (!req.user) return false;
      return {
        id: {
          equals: req.user.id,
        },
      };
    },
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "owner",
      options: [
        { label: "Owner", value: "owner" },
        { label: "Editor", value: "editor" },
      ],
      access: {
        // First user may set role; afterward only owners.
        create: async ({ req }) => {
          if (isOwner(req.user as UserWithRole | undefined)) {
            return true;
          }
          const existing = await req.payload.find({
            collection: "users",
            limit: 1,
            depth: 0,
            overrideAccess: true,
          });
          return existing.totalDocs === 0;
        },
        update: ({ req }) => isOwner(req.user as UserWithRole | undefined),
        read: () => true,
      },
      admin: {
        description:
          "Owners can manage users and publish. Editors can create and edit content. Password must be 12+ characters with upper, lower, number, and symbol.",
      },
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data, operation, req }) => {
        const password =
          typeof data?.password === "string" ? data.password : undefined;
        if (password) {
          const result = requireStrongPassword(password);
          if (result !== true) {
            throw new ValidationError({
              errors: [{ message: result, path: "password" }],
            });
          }
        }
        if (operation === "create" && !req.user && data) {
          data.role = "owner";
        }
        return data;
      },
    ],
  },
  timestamps: true,
};
