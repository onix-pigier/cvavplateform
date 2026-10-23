CREATE TYPE "ValidationLevel" AS ENUM ('PAROISSE', 'DOYENNE', 'DIOCESE');

CREATE TYPE "ValidationStepStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

ALTER TABLE "request_types"
  ALTER COLUMN "requiredValidationLevel" TYPE "ValidationLevel"
  USING ("requiredValidationLevel"::text::"ValidationLevel");

ALTER TABLE "certificate_requests"
  ALTER COLUMN "requiredValidationLevel" TYPE "ValidationLevel"
  USING ("requiredValidationLevel"::text::"ValidationLevel");

CREATE TABLE "certificate_validation_steps" (
  "id" TEXT NOT NULL,
  "requestId" TEXT NOT NULL,
  "level" "ValidationLevel" NOT NULL,
  "status" "ValidationStepStatus" NOT NULL DEFAULT 'PENDING',
  "validatedByPersonId" TEXT,
  "comment" TEXT,
  "validatedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "certificate_validation_steps_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "certificate_validation_steps_requestId_level_key"
  ON "certificate_validation_steps"("requestId", "level");
CREATE INDEX "certificate_validation_steps_level_status_createdAt_idx"
  ON "certificate_validation_steps"("level", "status", "createdAt");

ALTER TABLE "certificate_validation_steps"
  ADD CONSTRAINT "certificate_validation_steps_requestId_fkey"
  FOREIGN KEY ("requestId") REFERENCES "certificate_requests"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "certificate_validation_steps"
  ADD CONSTRAINT "certificate_validation_steps_validatedByPersonId_fkey"
  FOREIGN KEY ("validatedByPersonId") REFERENCES "persons"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;

-- Backfill a step per level included in each request's snapshotted path.
-- Legacy records have no per-step timestamp, so validatedAt stays NULL.
INSERT INTO "certificate_validation_steps"
  ("id", "requestId", "level", "status", "validatedByPersonId", "createdAt")
SELECT gen_random_uuid()::text, cr."id", 'PAROISSE'::"ValidationLevel",
  CASE
    WHEN cr."status" IN ('SECTION_APPROVED', 'DOYENNE_APPROVED', 'APPROVED', 'ISSUED') THEN 'APPROVED'::"ValidationStepStatus"
    WHEN cr."status" = 'REJECTED' AND cr."level2ValidatorId" IS NULL AND cr."level3ValidatorId" IS NULL THEN 'REJECTED'::"ValidationStepStatus"
    ELSE 'PENDING'::"ValidationStepStatus"
  END,
  cr."level1ValidatorId", cr."createdAt"
FROM "certificate_requests" cr;

INSERT INTO "certificate_validation_steps"
  ("id", "requestId", "level", "status", "validatedByPersonId", "createdAt")
SELECT gen_random_uuid()::text, cr."id", 'DOYENNE'::"ValidationLevel",
  CASE
    WHEN cr."status" IN ('DOYENNE_APPROVED', 'APPROVED', 'ISSUED') THEN 'APPROVED'::"ValidationStepStatus"
    WHEN cr."status" = 'REJECTED' AND cr."level2ValidatorId" IS NOT NULL AND cr."level3ValidatorId" IS NULL THEN 'REJECTED'::"ValidationStepStatus"
    ELSE 'PENDING'::"ValidationStepStatus"
  END,
  cr."level2ValidatorId", cr."createdAt"
FROM "certificate_requests" cr
WHERE cr."requiredValidationLevel" IN ('DOYENNE', 'DIOCESE')
  AND (
    cr."status" IN ('SECTION_APPROVED', 'DOYENNE_APPROVED', 'APPROVED', 'ISSUED')
    OR (cr."status" = 'REJECTED' AND cr."level2ValidatorId" IS NOT NULL)
  );

INSERT INTO "certificate_validation_steps"
  ("id", "requestId", "level", "status", "validatedByPersonId", "createdAt")
SELECT gen_random_uuid()::text, cr."id", 'DIOCESE'::"ValidationLevel",
  CASE
    WHEN cr."status" IN ('APPROVED', 'ISSUED') THEN 'APPROVED'::"ValidationStepStatus"
    WHEN cr."status" = 'REJECTED' AND cr."level3ValidatorId" IS NOT NULL THEN 'REJECTED'::"ValidationStepStatus"
    ELSE 'PENDING'::"ValidationStepStatus"
  END,
  cr."level3ValidatorId", cr."createdAt"
FROM "certificate_requests" cr
WHERE cr."requiredValidationLevel" = 'DIOCESE'
  AND (
    cr."status" IN ('DOYENNE_APPROVED', 'APPROVED', 'ISSUED')
    OR (cr."status" = 'REJECTED' AND cr."level3ValidatorId" IS NOT NULL)
  );
