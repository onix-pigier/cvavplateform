CREATE TYPE "GradeProposalStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

CREATE TABLE "grade_proposals" (
  "id" TEXT NOT NULL,
  "personId" TEXT NOT NULL,
  "gradeId" TEXT NOT NULL,
  "proposedByAccountId" TEXT NOT NULL,
  "status" "GradeProposalStatus" NOT NULL DEFAULT 'PENDING',
  "decisionNote" TEXT,
  "decidedByAccountId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "decidedAt" TIMESTAMP(3),
  CONSTRAINT "grade_proposals_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "grade_proposals_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "grade_proposals_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "grades"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "grade_proposals_proposedByAccountId_fkey" FOREIGN KEY ("proposedByAccountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "grade_proposals_decidedByAccountId_fkey" FOREIGN KEY ("decidedByAccountId") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "grade_proposals_status_createdAt_idx" ON "grade_proposals"("status", "createdAt");
CREATE INDEX "grade_proposals_personId_status_idx" ON "grade_proposals"("personId", "status");
