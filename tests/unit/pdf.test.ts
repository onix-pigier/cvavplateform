import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { createSimplePdf } from "../../lib/pdf/simple";

test("produit un PDF déterministe lisible par le générateur V1", () => {
  const first = createSimplePdf(["CV-AV", "Attestation", "DAL-2026-TEST"]);
  const second = createSimplePdf(["CV-AV", "Attestation", "DAL-2026-TEST"]);
  assert.equal(first.subarray(0, 5).toString(), "%PDF-");
  assert.equal(createHash("sha256").update(first).digest("hex"), createHash("sha256").update(second).digest("hex"));
});
