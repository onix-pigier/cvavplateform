ALTER TABLE "team_leaderships"
  DROP CONSTRAINT IF EXISTS "team_leaderships_teamId_personId_pastoralYear_key",
  ADD COLUMN "endedAt" TIMESTAMP(3),
  ADD COLUMN "createdByAccountId" TEXT,
  ADD COLUMN "updatedByAccountId" TEXT,
  ADD COLUMN "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE "team_leaderships"
  ADD CONSTRAINT "team_leaderships_createdByAccountId_fkey"
    FOREIGN KEY ("createdByAccountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT "team_leaderships_updatedByAccountId_fkey"
    FOREIGN KEY ("updatedByAccountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE INDEX "team_leaderships_teamId_pastoralYear_endedAt_idx"
  ON "team_leaderships"("teamId", "pastoralYear", "endedAt");
CREATE INDEX "team_leaderships_personId_pastoralYear_endedAt_idx"
  ON "team_leaderships"("personId", "pastoralYear", "endedAt");

CREATE UNIQUE INDEX "team_leaderships_active_person_year_key"
  ON "team_leaderships"("teamId", "personId", "pastoralYear")
  WHERE "endedAt" IS NULL;
CREATE UNIQUE INDEX "team_leaderships_one_active_leader_per_team_year_key"
  ON "team_leaderships"("teamId", "pastoralYear")
  WHERE "role" = 'LEADER' AND "endedAt" IS NULL;
