import test from "node:test";
import assert from "node:assert/strict";

const baseUrl = process.env.TEST_BASE_URL;
const securityTest = baseUrl ? test : test.skip;

securityTest("une API privée refuse une requête sans session", async () => {
  const response = await fetch(`${baseUrl}/api/identity`);
  assert.equal(response.status, 401);
  const body = await response.json() as { error?: { code?: string } };
  assert.equal(body.error?.code, "UNAUTHENTICATED");
});

securityTest("un paramètre de recherche hostile ne fait pas tomber l'API publique", async () => {
  const payload = encodeURIComponent("' OR 1=1 --");
  const response = await fetch(`${baseUrl}/api/organisation/paroisses?doyenneId=${payload}`);
  assert.ok(response.status === 200 || response.status === 403);
});
