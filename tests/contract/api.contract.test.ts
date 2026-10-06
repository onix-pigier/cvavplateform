import test from "node:test";
import assert from "node:assert/strict";

const baseUrl = process.env.TEST_BASE_URL;
const contractTest = baseUrl ? test : test.skip;

contractTest("le contrat public de health est stable", async () => {
  const response = await fetch(`${baseUrl}/api/health`);
  assert.equal(response.status, 200);
  const body = await response.json() as { status?: string; service?: string; timestamp?: string };
  assert.equal(body.status, "ok");
  assert.equal(body.service, "cvav-platform");
  assert.ok(typeof body.timestamp === "string");
});

contractTest("le contrat de readiness expose toujours un statut", async () => {
  const response = await fetch(`${baseUrl}/api/ready`);
  assert.ok(response.status === 200 || response.status === 503);
  const body = await response.json() as { status?: string; database?: string };
  assert.ok(body.status === "ready" || body.status === "not_ready");
  assert.ok(body.database === "ok" || body.database === "unavailable");
});
