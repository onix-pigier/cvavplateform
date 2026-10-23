import test from "node:test";
import assert from "node:assert/strict";
import { isOverrideDelayMet, nextValidationLevel, statusAfterApproval, VALIDATION_OVERRIDE_DELAY_MS, validationPath, type ValidationLevel } from "../../modules/requests/workflow";

test("request approval path follows configured final authority", () => {
  assert.deepEqual(validationPath("PAROISSE"), ["PAROISSE"]);
  assert.deepEqual(validationPath("DOYENNE"), ["PAROISSE", "DOYENNE"]);
  assert.deepEqual(validationPath("DIOCESE"), ["PAROISSE", "DOYENNE", "DIOCESE"]);
});

test("parish-level request closes at parish and does not require deanery approval", () => {
  assert.equal(nextValidationLevel("PENDING", "PAROISSE"), "PAROISSE");
  assert.equal(statusAfterApproval("PAROISSE", "PAROISSE"), "APPROVED");
  assert.equal(nextValidationLevel("SECTION_APPROVED", "PAROISSE"), null);
});

test("deanery and diocese requests advance only through their configured levels", () => {
  assert.equal(statusAfterApproval("PAROISSE", "DOYENNE"), "SECTION_APPROVED");
  assert.equal(nextValidationLevel("SECTION_APPROVED", "DOYENNE"), "DOYENNE");
  assert.equal(statusAfterApproval("DOYENNE", "DOYENNE"), "APPROVED");

  assert.equal(statusAfterApproval("DOYENNE", "DIOCESE"), "DOYENNE_APPROVED");
  assert.equal(nextValidationLevel("DOYENNE_APPROVED", "DIOCESE"), "DIOCESE");
  assert.equal(statusAfterApproval("DIOCESE", "DIOCESE"), "APPROVED");
});

test("unsupported validation scopes are rejected instead of silently using a fixed route", () => {
  assert.throws(() => validationPath("SELF" as ValidationLevel));
});

test("override eligibility starts exactly at the 72-hour boundary", () => {
  const now = new Date("2026-10-20T12:00:00.000Z");
  const exactlyAtBoundary = new Date(now.getTime() - VALIDATION_OVERRIDE_DELAY_MS);
  assert.equal(isOverrideDelayMet(new Date(exactlyAtBoundary.getTime() + 1), now), false, "une milliseconde avant 72 h est trop tôt");
  assert.equal(isOverrideDelayMet(exactlyAtBoundary, now), true, "72 h révolues suffisent exactement");
  assert.equal(isOverrideDelayMet(new Date(exactlyAtBoundary.getTime() - 1), now), true, "une milliseconde après 72 h reste éligible");
});
