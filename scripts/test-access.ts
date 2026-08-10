/**
 * Access-control smoke tests against a running Payload instance / DB.
 * Requires env + at least one owner user after first /admin signup.
 */
import { getPayload } from "payload";
import config from "../payload.config";
import { requireStrongPassword } from "../payload/access/roles";

async function main() {
  const checks: Array<{ name: string; ok: boolean; detail?: string }> = [];

  // Password policy
  checks.push({
    name: "reject short password",
    ok: requireStrongPassword("short") !== true,
  });
  checks.push({
    name: "accept strong password",
    ok:
      requireStrongPassword("Correct-Horse-Battery-9!") === true,
  });

  const payload = await getPayload({ config });

  // Unauthenticated public read of users must be denied
  try {
    const usersPublic = await payload.find({
      collection: "users",
      overrideAccess: false,
      user: undefined,
      limit: 10,
    });
    checks.push({
      name: "users not publicly listable",
      ok: usersPublic.totalDocs === 0,
      detail: `totalDocs=${usersPublic.totalDocs}`,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    checks.push({
      name: "users not publicly listable",
      ok: /forbidden|not allowed/i.test(message),
      detail: message,
    });
  }
  // Media should be readable publicly (empty is fine)
  const mediaPublic = await payload.find({
    collection: "media",
    overrideAccess: false,
    user: undefined,
    limit: 1,
  });
  checks.push({
    name: "media publicly readable",
    ok: mediaPublic !== undefined,
  });

  // Draft services should not appear to anonymous users
  const servicesPublic = await payload.find({
    collection: "services",
    overrideAccess: false,
    user: undefined,
    draft: false,
    limit: 50,
  });
  const leakedDrafts = servicesPublic.docs.filter(
    (doc) => (doc as { _status?: string })._status === "draft",
  );
  checks.push({
    name: "draft services hidden from public",
    ok: leakedDrafts.length === 0,
    detail: `publicDocs=${servicesPublic.totalDocs}`,
  });

  let failed = 0;
  for (const check of checks) {
    const mark = check.ok ? "PASS" : "FAIL";
    if (!check.ok) failed += 1;
    console.log(`${mark}  ${check.name}${check.detail ? ` (${check.detail})` : ""}`);
  }

  if (failed > 0) {
    console.error(`\n${failed} check(s) failed`);
    process.exit(1);
  }
  console.log("\nAll access checks passed");
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
