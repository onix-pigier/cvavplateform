import test from "node:test";
import assert from "node:assert/strict";
import { createActivitySchema, recordPresenceSchema } from "../../modules/activities/schema";
import { createCertificateRequestSchema, rejectCertificateRequestSchema } from "../../modules/requests/schema";
import { validateMediaUpload } from "../../lib/storage/policy";

const values: unknown[] = [null, undefined, "", "0", -1, 0, Number.NaN, Number.POSITIVE_INFINITY, {}, [], { __proto__: "x" }, "' OR 1=1 --", "<script>alert(1)</script>"];

test("les validateurs résistent à des entrées imprévues", () => {
  for (const value of values) {
    assert.doesNotThrow(() => createActivitySchema.safeParse(value));
    assert.doesNotThrow(() => recordPresenceSchema.safeParse(value));
    assert.doesNotThrow(() => createCertificateRequestSchema.safeParse(value));
    assert.doesNotThrow(() => rejectCertificateRequestSchema.safeParse(value));
    assert.doesNotThrow(() => validateMediaUpload(value));
  }
});

test("les champs supplémentaires ne sont pas acceptés dans une demande", () => {
  const result = createCertificateRequestSchema.safeParse({ requestTypeId: "x", requesterId: "y", isAdmin: true });
  assert.equal(result.success, false);
});
