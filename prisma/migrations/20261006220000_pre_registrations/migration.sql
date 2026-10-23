CREATE TYPE "PreRegistrationKind" AS ENUM ('NEW_MEMBER', 'TRANSFER');
CREATE TYPE "PreRegistrationStatus" AS ENUM ('PENDING', 'IN_REVIEW', 'ARBITRATION', 'REJECTED', 'ACCOUNT_CREATED');

CREATE SEQUENCE "cvav_member_number_seq" START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

CREATE TABLE "pre_registrations" (
    "id" TEXT NOT NULL,
    "referenceCode" TEXT NOT NULL,
    "kind" "PreRegistrationKind" NOT NULL,
    "status" "PreRegistrationStatus" NOT NULL DEFAULT 'PENDING',
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthDate" DATE NOT NULL,
    "sex" "Sex" NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "guardianFirstName" TEXT,
    "guardianLastName" TEXT,
    "guardianPhone" TEXT,
    "guardianEmail" TEXT,
    "guardianRelationship" TEXT,
    "originParishId" TEXT,
    "originMemberNumber" TEXT,
    "requestedParishId" TEXT NOT NULL,
    "consentedAt" TIMESTAMP(3) NOT NULL,
    "possibleDuplicate" BOOLEAN NOT NULL DEFAULT false,
    "decisionNote" TEXT,
    "reviewedById" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "createdAccountId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "pre_registrations_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "pre_registrations_createdAccountId_idx" ON "pre_registrations"("createdAccountId");
CREATE UNIQUE INDEX "pre_registrations_referenceCode_key" ON "pre_registrations"("referenceCode");
CREATE INDEX "pre_registrations_requestedParishId_status_createdAt_idx" ON "pre_registrations"("requestedParishId", "status", "createdAt");
CREATE INDEX "pre_registrations_originParishId_idx" ON "pre_registrations"("originParishId");
CREATE INDEX "pre_registrations_status_possibleDuplicate_idx" ON "pre_registrations"("status", "possibleDuplicate");

ALTER TABLE "pre_registrations" ADD CONSTRAINT "pre_registrations_originParishId_fkey" FOREIGN KEY ("originParishId") REFERENCES "paroisses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "pre_registrations" ADD CONSTRAINT "pre_registrations_requestedParishId_fkey" FOREIGN KEY ("requestedParishId") REFERENCES "paroisses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "pre_registrations" ADD CONSTRAINT "pre_registrations_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "pre_registrations" ADD CONSTRAINT "pre_registrations_createdAccountId_fkey" FOREIGN KEY ("createdAccountId") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
