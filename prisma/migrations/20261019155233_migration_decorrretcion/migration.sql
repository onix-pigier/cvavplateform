-- DropForeignKey
ALTER TABLE "pre_registrations" DROP CONSTRAINT "pre_registrations_originParishId_fkey";

-- DropIndex
DROP INDEX "certificate_requests_level3ValidatorId_idx";

-- DropIndex
DROP INDEX "pre_registrations_createdAccountId_idx";

-- DropIndex
DROP INDEX IF EXISTS "pre_registrations_status_createdAt_idx";

-- DropIndex
DROP INDEX "team_leaderships_teamId_pastoralYear_idx";

-- DropIndex
DROP INDEX "team_leaderships_teamId_personId_pastoralYear_key";

-- AlterTable
ALTER TABLE "team_leaderships" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "pre_registrations" ADD CONSTRAINT "pre_registrations_originParishId_fkey" FOREIGN KEY ("originParishId") REFERENCES "paroisses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
