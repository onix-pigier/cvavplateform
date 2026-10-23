ALTER TABLE "mandates"
  ADD COLUMN "createdByAccountId" TEXT,
  ADD COLUMN "updatedByAccountId" TEXT,
  ADD COLUMN "validatedByAccountId" TEXT,
  ADD COLUMN "validatedAt" TIMESTAMP(3),
  ADD COLUMN "appointmentReference" VARCHAR(160);

ALTER TABLE "mandates"
  ADD CONSTRAINT "mandates_createdByAccountId_fkey"
    FOREIGN KEY ("createdByAccountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT "mandates_updatedByAccountId_fkey"
    FOREIGN KEY ("updatedByAccountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT "mandates_validatedByAccountId_fkey"
    FOREIGN KEY ("validatedByAccountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
