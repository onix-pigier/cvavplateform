import test from "node:test";
import assert from "node:assert/strict";
import { isSerializationFailure, withSerializationRetry } from "../../modules/requests/serialization-retry";

test("recognizes PostgreSQL serialization failures wrapped by Prisma adapters", () => {
  assert.equal(isSerializationFailure({ code: "40001" }), true);
  assert.equal(isSerializationFailure({ meta: { driverAdapterError: { cause: { code: "40001" } } } }), true);
  assert.equal(isSerializationFailure({ code: "P2034" }), true);
  assert.equal(isSerializationFailure({ code: "P2002" }), false);
});

test("retries serialization failures with a bounded retry count", async () => {
  let calls = 0;
  let delays = 0;
  const value = await withSerializationRetry(async () => {
    calls += 1;
    if (calls < 3) throw { code: "40001" };
    return "committed";
  }, { delay: async () => { delays += 1; } });
  assert.equal(value, "committed");
  assert.equal(calls, 3);
  assert.equal(delays, 2);
});

test("does not retry business errors and stops after the retry limit", async () => {
  let calls = 0;
  await assert.rejects(withSerializationRetry(async () => {
    calls += 1;
    throw new Error("REQUEST_ALREADY_DECIDED");
  }, { delay: async () => {} }), /REQUEST_ALREADY_DECIDED/);
  assert.equal(calls, 1);

  calls = 0;
  await assert.rejects(withSerializationRetry(async () => {
    calls += 1;
    throw { code: "40001" };
  }, { maxRetries: 2, delay: async () => {} }), (error: unknown) => (error as { code?: string }).code === "40001");
  assert.equal(calls, 3);
});
