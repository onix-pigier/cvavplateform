import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { createCertificatePdf, createSimplePdf } from "../../lib/pdf/simple";

test("produit un PDF déterministe lisible par le générateur V1", () => {
  const first = createSimplePdf(["CV-AV", "Attestation", "DAL-2026-TEST"]);
  const second = createSimplePdf(["CV-AV", "Attestation", "DAL-2026-TEST"]);
  assert.equal(first.subarray(0, 5).toString(), "%PDF-");
  assert.equal(createHash("sha256").update(first).digest("hex"), createHash("sha256").update(second).digest("hex"));
});

test("le PDF d’attestation embarque un QR vectoriel et reste déterministe", () => {
  const lines = ["CV-AV", "Attestation de grade", "Beneficiaire: Awa Test", "Numero: DAL-2026-TEST"];
  const snapshot = { templateVersion: "attestation-v1" as const, requestTypeName: "Attestation de grade", beneficiaryName: "Awa Test", uniqueNumber: "DAL-2026-TEST", verificationUrl: "https://cvav.example/verify/DAL-2026-TEST" };
  const first = createCertificatePdf(snapshot);
  const second = createCertificatePdf(snapshot);
  assert.equal(first.subarray(0, 5).toString(), "%PDF-");
  assert.equal(createHash("sha256").update(first).digest("hex"), createHash("sha256").update(second).digest("hex"));
  assert.match(first.toString("latin1"), / re f/);
});
