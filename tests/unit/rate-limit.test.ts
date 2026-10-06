import test from "node:test";
import assert from "node:assert/strict";
import { consumeRateLimit } from "../../lib/rate-limit";

test("bloque après la limite configurée", () => {
  const key = `unit-${crypto.randomUUID()}`;
  assert.equal(consumeRateLimit(key, 1, 60_000).allowed, true);
  assert.equal(consumeRateLimit(key, 1, 60_000).allowed, false);
});
