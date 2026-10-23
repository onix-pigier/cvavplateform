import { config } from "dotenv";

export const TEST_ENV_PATH = ".env.test";

export function loadTestEnvironment() {
  const result = config({ path: TEST_ENV_PATH, override: true });
  if (result.error) throw new Error(`Impossible de charger ${TEST_ENV_PATH}.`);
}

export function assertTestDatabaseUrl(raw = process.env.DATABASE_URL) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("Refusé : les commandes de base de test sont interdites en production.");
  }
  if (!raw) throw new Error("Refusé : DATABASE_URL est absente.");

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error("Refusé : DATABASE_URL n'est pas une URL valide.");
  }

  const allowedHosts = new Set(["127.0.0.1", "localhost", "::1"]);
  const databaseName = decodeURIComponent(url.pathname.replace(/^\//, ""));
  if (
    !["postgres:", "postgresql:"].includes(url.protocol) ||
    !allowedHosts.has(url.hostname) ||
    url.port !== "5433" ||
    databaseName !== "app_test" ||
    decodeURIComponent(url.username) !== "cvav_test"
  ) {
    throw new Error(
      "Refusé : la base doit être PostgreSQL local, utilisateur cvav_test, port 5433, base app_test.",
    );
  }
  return url;
}

if (process.argv[1]?.endsWith("test-db-guard.ts")) {
  try {
    loadTestEnvironment();
    assertTestDatabaseUrl();
    console.log("Garde-fou DB test : URL autorisée (app_test sur localhost:5433).");
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Garde-fou DB test refusé.");
    process.exitCode = 2;
  }
}
