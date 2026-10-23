import { spawn, spawnSync } from "node:child_process";
import { createServer } from "node:net";
import { resolve } from "node:path";
import { config } from "dotenv";
import { assertTestDatabaseUrl } from "./test-db-guard";

const requestedTestBaseUrl = process.env.CVAV_TEST_BASE_URL;
const loaded = config({ path: ".env.test", override: true });
if (loaded.error) throw new Error("Impossible de charger .env.test.");
assertTestDatabaseUrl();
process.env.TEST_DATABASE_URL = process.env.DATABASE_URL;
process.env.TEST_BASE_URL = requestedTestBaseUrl ?? process.env.TEST_BASE_URL ?? "http://127.0.0.1:3001";

const suite = process.argv[2];
if (suite !== "integration" && suite !== "functional" && suite !== "access-control" && suite !== "attendance") throw new Error("Suite autorisée : integration, functional, access-control ou attendance.");

function runIntegration() {
  const result = spawnSync(process.platform === "win32" ? "npm.cmd" : "npm", ["run", "test:integration"], { env: process.env, stdio: "inherit" });
  if (result.error) throw result.error;
  process.exit(result.status ?? 1);
}

async function findAvailablePort(preferred: number) {
  const tryPort = (port: number) => new Promise<number>((resolveListen, reject) => {
    const probe = createServer();
    probe.once("error", reject);
    probe.listen(port, "127.0.0.1", () => {
      const address = probe.address();
      const selected = address && typeof address === "object" ? address.port : port;
      probe.close((error) => error ? reject(error) : resolveListen(selected));
    });
  });
  try {
    return await tryPort(preferred);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "EADDRINUSE") throw error;
    return tryPort(0);
  }
}

async function runFunctional() {
  const testBaseUrl = new URL(process.env.TEST_BASE_URL!);
  const port = await findAvailablePort(Number(testBaseUrl.port || (testBaseUrl.protocol === "https:" ? 443 : 80)));
  testBaseUrl.port = String(port);
  process.env.TEST_BASE_URL = testBaseUrl.toString().replace(/\/$/, "");
  const server = spawn(process.execPath, [resolve("node_modules/next/dist/bin/next"), "dev", "--hostname", "127.0.0.1", "--port", String(port)], {
    env: { ...process.env, NODE_ENV: "development", NEXT_DIST_DIR: ".next-test" },
    stdio: "inherit",
  });

  let exitCode = 1;
  try {
    const deadline = Date.now() + 120_000;
    let ready = false;
    while (Date.now() < deadline) {
      if (server.exitCode !== null) throw new Error(`Le serveur Next.js de test s'est arrêté (${server.exitCode}).`);
      try {
        const response = await fetch(`${process.env.TEST_BASE_URL}/api/ready`);
        if (response.status === 200) { ready = true; break; }
      } catch { /* le serveur démarre encore */ }
      await new Promise((resolveDelay) => setTimeout(resolveDelay, 500));
    }
    if (!ready) throw new Error("Le serveur isolé n'est pas prêt sur la base app_test.");

    const result = suite === "attendance"
      ? spawnSync(process.platform === "win32" ? "npx.cmd" : "npx", ["playwright", "test", "tests/e2e/attendance.spec.ts"], { env: process.env, stdio: "inherit" })
      : suite === "access-control"
        ? spawnSync(process.execPath, ["--import", "tsx", "--test", "tests/functional/access-control.test.ts"], { env: process.env, stdio: "inherit" })
        : spawnSync(process.platform === "win32" ? "npm.cmd" : "npm", ["run", "test:functional"], { env: process.env, stdio: "inherit" });
    if (result.error) throw result.error;
    exitCode = result.status ?? 1;
  } finally {
    server.kill("SIGTERM");
    await new Promise<void>((resolveExit) => {
      if (server.exitCode !== null) return resolveExit();
      server.once("exit", () => resolveExit());
      setTimeout(() => { server.kill("SIGKILL"); resolveExit(); }, 5_000).unref();
    });
  }
  process.exit(exitCode);
}

if (suite === "integration") runIntegration();
else void runFunctional();
