import { spawnSync } from "node:child_process";
import { resolve } from "node:path";
import { loadTestEnvironment, assertTestDatabaseUrl } from "./test-db-guard";

loadTestEnvironment();
assertTestDatabaseUrl();

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

function run(args: string[]) {
  const result = spawnSync(npmCommand, args, {
    cwd: resolve(process.cwd()),
    env: process.env,
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

const operation = process.argv[2];
if (operation === "migrate") {
  run(["exec", "--", "prisma", "migrate", "deploy"]);
} else if (operation === "status") {
  run(["exec", "--", "prisma", "migrate", "status"]);
} else if (operation === "seed") {
  run(["run", "prisma:seed"]);
  run(["exec", "--", "tsx", "prisma/seed-test-fixtures.ts"]);
} else if (operation === "setup") {
  run(["exec", "--", "prisma", "migrate", "deploy"]);
  run(["run", "prisma:seed"]);
  run(["exec", "--", "tsx", "prisma/seed-test-fixtures.ts"]);
} else {
  throw new Error("Usage: prepare-test-db.ts <migrate|status|seed|setup>");
}
