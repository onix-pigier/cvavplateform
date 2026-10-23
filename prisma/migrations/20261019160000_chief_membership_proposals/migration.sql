ALTER TYPE "PreRegistrationStatus" ADD VALUE IF NOT EXISTS 'PENDING_PROPOSAL';

ALTER TABLE "pre_registrations"
  ADD COLUMN "proposalSectionId" TEXT,
  ADD COLUMN "proposalTeamId" TEXT,
  ADD COLUMN "proposalById" TEXT,
  ADD COLUMN "proposalSubmittedAt" TIMESTAMP(3),
  ADD COLUMN "proposalDecisionNote" TEXT,
  ADD COLUMN "proposalReviewedById" TEXT,
  ADD COLUMN "proposalReviewedAt" TIMESTAMP(3);

CREATE INDEX "pre_registrations_status_createdAt_idx"
  ON "pre_registrations"("status", "createdAt");
