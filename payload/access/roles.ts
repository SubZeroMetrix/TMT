import type { Access, FieldAccess, PayloadRequest } from "payload";

export type Role = "owner" | "editor";

type UserWithRole = {
  id?: number | string;
  role?: Role | null;
};

export const isOwner = (user?: UserWithRole | null): boolean =>
  Boolean(user && user.role === "owner");

export const isEditorOrOwner = (user?: UserWithRole | null): boolean =>
  Boolean(user && (user.role === "owner" || user.role === "editor"));

export const authenticated: Access = ({ req }) => Boolean(req.user);

export const ownersOnly: Access = ({ req }) => isOwner(req.user as UserWithRole | undefined);

export const editorsAndOwners: Access = ({ req }) =>
  isEditorOrOwner(req.user as UserWithRole | undefined);

/** Published content is public; drafts require an authenticated editor/owner. */
export const publishedOrAuthenticated: Access = ({ req: { user } }) => {
  if (isEditorOrOwner(user as UserWithRole | undefined)) return true;
  return {
    _status: {
      equals: "published",
    },
  };
};

export const anyone: Access = () => true;

export const nobody: Access = () => false;

export const ownerFieldAccess: FieldAccess = ({ req }) =>
  isOwner(req.user as UserWithRole | undefined);

export function requireStrongPassword(password: string): true | string {
  if (!password || password.length < 12) {
    return "Password must be at least 12 characters.";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must include an uppercase letter.";
  }
  if (!/[a-z]/.test(password)) {
    return "Password must include a lowercase letter.";
  }
  if (!/[0-9]/.test(password)) {
    return "Password must include a number.";
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    return "Password must include a special character.";
  }
  return true;
}

export function canManageUsers({ req }: { req: PayloadRequest }): boolean {
  return isOwner(req.user as UserWithRole | undefined);
}
