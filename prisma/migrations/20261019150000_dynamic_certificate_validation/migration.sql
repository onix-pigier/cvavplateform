ALTER TYPE "CertificateRequestStatus" ADD VALUE IF NOT EXISTS 'DOYENNE_APPROVED';

ALTER TABLE "certificate_requests"
  ADD COLUMN "requiredValidationLevel" "ScopeType";

UPDATE "certificate_requests" AS cr
SET "requiredValidationLevel" = rt."requiredValidationLevel"
FROM "request_types" AS rt
WHERE cr."requestTypeId" = rt."id";

ALTER TABLE "certificate_requests"
  ALTER COLUMN "requiredValidationLevel" SET NOT NULL,
  ADD COLUMN "level3ValidatorId" TEXT;

ALTER TABLE "certificate_requests"
  ADD CONSTRAINT "certificate_requests_level3ValidatorId_fkey"
  FOREIGN KEY ("level3ValidatorId") REFERENCES "persons"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;

CREATE INDEX "certificate_requests_level3ValidatorId_idx"
  ON "certificate_requests"("level3ValidatorId");
