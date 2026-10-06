import test from "node:test";
import assert from "node:assert/strict";
import nextConfig from "../../next.config";

test("les headers de sécurité essentiels sont déclarés", async () => {
  const groups = await nextConfig.headers?.();
  const headers = groups?.flatMap((group) => group.headers) ?? [];
  const values = new Map(headers.map((header) => [header.key, header.value]));
  assert.equal(values.get("X-Content-Type-Options"), "nosniff");
  assert.equal(values.get("X-Frame-Options"), "DENY");
  assert.equal(values.get("Referrer-Policy"), "strict-origin-when-cross-origin");
  assert.equal(values.get("Strict-Transport-Security"), "max-age=31536000; includeSubDomains");
});
