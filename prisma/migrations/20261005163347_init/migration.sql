-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('M', 'F');

-- CreateEnum
CREATE TYPE "PersonStatus" AS ENUM ('ACTIVE', 'SUSPENDED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('ACTIVE', 'SUSPENDED', 'BLOCKED');

-- CreateEnum
CREATE TYPE "ScopeType" AS ENUM ('DIOCESE', 'DOYENNE', 'PAROISSE', 'SECTION', 'EQUIPE', 'ACTIVITY', 'SELF');

-- CreateEnum
CREATE TYPE "RecognitionStatus" AS ENUM ('PENDING', 'RECOGNIZED');

-- CreateEnum
CREATE TYPE "TeamLeadershipRole" AS ENUM ('LEADER', 'ASSISTANT');

-- CreateEnum
CREATE TYPE "MandateStatus" AS ENUM ('ACTIVE', 'ENDED', 'RENEWED');

-- CreateEnum
CREATE TYPE "GradeCategory" AS ENUM ('MILITANT', 'MENEUR', 'CHEF');

-- CreateEnum
CREATE TYPE "ChefQualificationCode" AS ENUM ('AA', 'AC', 'AP', 'APHG');

-- CreateEnum
CREATE TYPE "AttendanceSource" AS ENUM ('MANUAL', 'NFC');

-- CreateEnum
CREATE TYPE "CardStatus" AS ENUM ('ACTIVE', 'SUSPENDED', 'REVOKED');

-- CreateEnum
CREATE TYPE "ActivityStatus" AS ENUM ('PLANNED', 'ONGOING', 'COMPLETED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "CeremonySessionStatus" AS ENUM ('PLANNED', 'VALIDATED', 'COMPLETED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "CeremonyCandidateStatus" AS ENUM ('PROPOSED', 'APPROVED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "SpiritualOpinion" AS ENUM ('PENDING', 'FAVORABLE', 'RESERVED', 'UNFAVORABLE');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('UP_TO_DATE', 'PARTIAL', 'LATE');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'MOBILE_MONEY', 'BANK_TRANSFER');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('INCOME', 'EXPENSE');

-- CreateEnum
CREATE TYPE "CertificateRequestStatus" AS ENUM ('PENDING', 'SECTION_APPROVED', 'APPROVED', 'REJECTED', 'ISSUED');

-- CreateEnum
CREATE TYPE "CertificateStatus" AS ENUM ('VALID', 'REVOKED');

-- CreateEnum
CREATE TYPE "NotificationChannel" AS ENUM ('APP', 'EMAIL', 'SMS', 'WHATSAPP');

-- CreateEnum
CREATE TYPE "BroadcastStatus" AS ENUM ('DRAFT', 'SCHEDULED', 'SENT');

-- CreateEnum
CREATE TYPE "BackupStatus" AS ENUM ('SUCCESS', 'FAILED');

-- CreateEnum
CREATE TYPE "BackupType" AS ENUM ('AUTOMATIC', 'MANUAL');

-- CreateEnum
CREATE TYPE "DataConfidence" AS ENUM ('CONFIRMED_CURRENT', 'OFFICIAL_HISTORICAL', 'HISTORICAL_TO_VERIFY', 'TO_DOCUMENT');

-- CreateEnum
CREATE TYPE "GovernanceBodyType" AS ENUM ('COUNCIL', 'BUREAU');

-- CreateTable
CREATE TABLE "dioceses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "dioceses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doyennes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "aliasLabel" TEXT,
    "dioceseId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "doyennes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "villes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "region" TEXT NOT NULL,

    CONSTRAINT "villes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paroisses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "doyenneId" TEXT NOT NULL,
    "villeId" TEXT NOT NULL,
    "address" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "confidence" "DataConfidence" NOT NULL DEFAULT 'TO_DOCUMENT',
    "source" TEXT,
    "sourceDate" TIMESTAMP(3),
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "paroisses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sections" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "paroisseId" TEXT NOT NULL,
    "recognitionStatus" "RecognitionStatus" NOT NULL DEFAULT 'RECOGNIZED',
    "sponsorSectionId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teams" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sectionId" TEXT NOT NULL,
    "targetGradeCode" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_leaderships" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "role" "TeamLeadershipRole" NOT NULL,
    "pastoralYear" TEXT NOT NULL,

    CONSTRAINT "team_leaderships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persons" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "sex" "Sex" NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "status" "PersonStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "persons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "status" "AccountStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "scopeType" "ScopeType" NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "scopeType" "ScopeType" NOT NULL,
    "scopeId" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fonctions" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "votingRight" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "fonctions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "governance_bodies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "GovernanceBodyType" NOT NULL,
    "scopeType" "ScopeType" NOT NULL,
    "scopeId" TEXT NOT NULL,

    CONSTRAINT "governance_bodies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mandates" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "fonctionId" TEXT NOT NULL,
    "governanceBodyId" TEXT,
    "scopeType" "ScopeType" NOT NULL,
    "scopeId" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "status" "MandateStatus" NOT NULL DEFAULT 'ACTIVE',
    "previousMandateId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mandates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grades" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" "GradeCategory" NOT NULL,
    "order" INTEGER NOT NULL,
    "conditions" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "grades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grade_histories" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "gradeId" TEXT NOT NULL,
    "obtainedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3),
    "awardedById" TEXT,
    "justification" TEXT,

    CONSTRAINT "grade_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chef_qualifications" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "code" "ChefQualificationCode" NOT NULL,
    "obtainedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3),
    "awardedById" TEXT,

    CONSTRAINT "chef_qualifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "memberships" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "paroisseId" TEXT NOT NULL,
    "sectionId" TEXT NOT NULL,
    "teamId" TEXT,
    "pastoralYear" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),

    CONSTRAINT "memberships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tutors" (
    "id" TEXT NOT NULL,
    "minorPersonId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "relationship" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tutors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membership_cards" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "nfcUid" TEXT NOT NULL,
    "status" "CardStatus" NOT NULL DEFAULT 'ACTIVE',
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revokedAt" TIMESTAMP(3),

    CONSTRAINT "membership_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "requiresValidation" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "activity_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "activityTypeId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "location" TEXT,
    "scopeType" "ScopeType" NOT NULL,
    "scopeId" TEXT NOT NULL,
    "status" "ActivityStatus" NOT NULL DEFAULT 'PLANNED',
    "responsibleId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pilgrimage_logistics" (
    "id" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,
    "accommodation" TEXT,
    "transport" TEXT,
    "catering" TEXT,
    "specialNeeds" TEXT,

    CONSTRAINT "pilgrimage_logistics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "presences" (
    "id" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "present" BOOLEAN NOT NULL,
    "justification" TEXT,
    "recordedById" TEXT,
    "source" "AttendanceSource" NOT NULL DEFAULT 'MANUAL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "presences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ceremony_sessions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "scopeType" "ScopeType" NOT NULL,
    "scopeId" TEXT NOT NULL,
    "activityId" TEXT,
    "status" "CeremonySessionStatus" NOT NULL DEFAULT 'PLANNED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ceremony_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ceremony_candidates" (
    "id" TEXT NOT NULL,
    "ceremonySessionId" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "targetRite" TEXT NOT NULL,
    "status" "CeremonyCandidateStatus" NOT NULL DEFAULT 'PROPOSED',

    CONSTRAINT "ceremony_candidates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spiritual_opinion_records" (
    "id" TEXT NOT NULL,
    "ceremonySessionId" TEXT,
    "authorPersonId" TEXT NOT NULL,
    "opinion" "SpiritualOpinion" NOT NULL DEFAULT 'PENDING',
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "spiritual_opinion_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fee_grids" (
    "id" TEXT NOT NULL,
    "pastoralYear" TEXT NOT NULL,
    "gradeOrQualificationCode" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "scopeType" "ScopeType" NOT NULL,
    "scopeId" TEXT NOT NULL,

    CONSTRAINT "fee_grids_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contributions" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "pastoralYear" TEXT NOT NULL,
    "gradeOrQualificationCode" TEXT NOT NULL,
    "expectedAmount" DECIMAL(10,2) NOT NULL,
    "paidAmount" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "status" "PaymentStatus" NOT NULL DEFAULT 'LATE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contributions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "contributionId" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "paidAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "method" "PaymentMethod" NOT NULL DEFAULT 'CASH',
    "receiptNumber" TEXT,
    "receiptPdfUrl" TEXT,
    "recordedById" TEXT NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "financial_transactions" (
    "id" TEXT NOT NULL,
    "type" "TransactionType" NOT NULL,
    "category" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "scopeType" "ScopeType" NOT NULL,
    "scopeId" TEXT NOT NULL,
    "activityId" TEXT,
    "recordedById" TEXT NOT NULL,

    CONSTRAINT "financial_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "request_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "requiredValidationLevel" "ScopeType" NOT NULL,
    "generatesCertificate" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "request_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certificate_requests" (
    "id" TEXT NOT NULL,
    "requestTypeId" TEXT NOT NULL,
    "requesterId" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "status" "CertificateRequestStatus" NOT NULL DEFAULT 'PENDING',
    "level1ValidatorId" TEXT,
    "level2ValidatorId" TEXT,
    "escalated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),

    CONSTRAINT "certificate_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certificates" (
    "id" TEXT NOT NULL,
    "certificateRequestId" TEXT NOT NULL,
    "uniqueNumber" TEXT NOT NULL,
    "qrCode" TEXT NOT NULL,
    "contentHash" TEXT NOT NULL,
    "hashAlgorithm" TEXT NOT NULL DEFAULT 'SHA-256',
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "templateUsed" TEXT,
    "pdfUrl" TEXT NOT NULL,
    "status" "CertificateStatus" NOT NULL DEFAULT 'VALID',

    CONSTRAINT "certificates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "scopeType" "ScopeType" NOT NULL,
    "scopeId" TEXT NOT NULL,
    "paroisseId" TEXT,
    "addedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library_documents" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "accessRoles" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "library_documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "targetLink" TEXT,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "channel" "NotificationChannel" NOT NULL DEFAULT 'APP',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "broadcasts" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "targetScopeType" "ScopeType",
    "targetScopeId" TEXT,
    "targetRoleCode" TEXT,
    "channels" "NotificationChannel"[],
    "status" "BroadcastStatus" NOT NULL DEFAULT 'DRAFT',
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sentAt" TIMESTAMP(3),

    CONSTRAINT "broadcasts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "health_profiles" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "allergies" TEXT,
    "emergencyContactName" TEXT NOT NULL,
    "emergencyContactPhone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "health_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "health_profile_consents" (
    "id" TEXT NOT NULL,
    "healthProfileId" TEXT NOT NULL,
    "tutorId" TEXT NOT NULL,
    "consentedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "consentText" TEXT NOT NULL,

    CONSTRAINT "health_profile_consents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diocese_settings" (
    "id" TEXT NOT NULL,
    "dioceseId" TEXT NOT NULL,
    "logoUrl" TEXT,
    "colors" JSONB,
    "signatures" JSONB,
    "documentTemplates" JSONB,
    "contactInfo" TEXT,

    CONSTRAINT "diocese_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" TEXT NOT NULL,
    "accountId" TEXT,
    "action" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "before" JSONB,
    "after" JSONB,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ipAddress" TEXT,
    "device" TEXT,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "backups" (
    "id" TEXT NOT NULL,
    "executedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "BackupStatus" NOT NULL,
    "type" "BackupType" NOT NULL,
    "fileSize" TEXT,
    "location" TEXT,

    CONSTRAINT "backups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resources" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actions" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "actions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" TEXT NOT NULL,
    "roleId" TEXT,
    "fonctionId" TEXT,
    "resourceId" TEXT NOT NULL,
    "actionId" TEXT NOT NULL,
    "maxScopeType" "ScopeType" NOT NULL,
    "condition" JSONB,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "doyennes_dioceseId_idx" ON "doyennes"("dioceseId");

-- CreateIndex
CREATE INDEX "paroisses_doyenneId_idx" ON "paroisses"("doyenneId");

-- CreateIndex
CREATE INDEX "paroisses_villeId_idx" ON "paroisses"("villeId");

-- CreateIndex
CREATE INDEX "sections_paroisseId_idx" ON "sections"("paroisseId");

-- CreateIndex
CREATE INDEX "teams_sectionId_idx" ON "teams"("sectionId");

-- CreateIndex
CREATE INDEX "team_leaderships_teamId_pastoralYear_idx" ON "team_leaderships"("teamId", "pastoralYear");

-- CreateIndex
CREATE UNIQUE INDEX "team_leaderships_teamId_personId_pastoralYear_key" ON "team_leaderships"("teamId", "personId", "pastoralYear");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_personId_key" ON "accounts"("personId");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_username_key" ON "accounts"("username");

-- CreateIndex
CREATE UNIQUE INDEX "roles_code_key" ON "roles"("code");

-- CreateIndex
CREATE INDEX "user_roles_accountId_idx" ON "user_roles"("accountId");

-- CreateIndex
CREATE INDEX "user_roles_roleId_scopeType_scopeId_idx" ON "user_roles"("roleId", "scopeType", "scopeId");

-- CreateIndex
CREATE UNIQUE INDEX "fonctions_code_key" ON "fonctions"("code");

-- CreateIndex
CREATE UNIQUE INDEX "mandates_previousMandateId_key" ON "mandates"("previousMandateId");

-- CreateIndex
CREATE INDEX "mandates_personId_idx" ON "mandates"("personId");

-- CreateIndex
CREATE INDEX "mandates_fonctionId_scopeType_scopeId_idx" ON "mandates"("fonctionId", "scopeType", "scopeId");

-- CreateIndex
CREATE UNIQUE INDEX "grades_code_key" ON "grades"("code");

-- CreateIndex
CREATE INDEX "grade_histories_personId_idx" ON "grade_histories"("personId");

-- CreateIndex
CREATE INDEX "chef_qualifications_personId_idx" ON "chef_qualifications"("personId");

-- CreateIndex
CREATE INDEX "memberships_paroisseId_idx" ON "memberships"("paroisseId");

-- CreateIndex
CREATE INDEX "memberships_teamId_pastoralYear_idx" ON "memberships"("teamId", "pastoralYear");

-- CreateIndex
CREATE INDEX "memberships_personId_isActive_idx" ON "memberships"("personId", "isActive");

-- CreateIndex
CREATE INDEX "tutors_minorPersonId_idx" ON "tutors"("minorPersonId");

-- CreateIndex
CREATE UNIQUE INDEX "membership_cards_nfcUid_key" ON "membership_cards"("nfcUid");

-- CreateIndex
CREATE INDEX "membership_cards_accountId_status_idx" ON "membership_cards"("accountId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "activity_types_name_key" ON "activity_types"("name");

-- CreateIndex
CREATE INDEX "activities_scopeType_scopeId_idx" ON "activities"("scopeType", "scopeId");

-- CreateIndex
CREATE INDEX "activities_activityTypeId_idx" ON "activities"("activityTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "pilgrimage_logistics_activityId_key" ON "pilgrimage_logistics"("activityId");

-- CreateIndex
CREATE INDEX "presences_personId_idx" ON "presences"("personId");

-- CreateIndex
CREATE UNIQUE INDEX "presences_activityId_personId_key" ON "presences"("activityId", "personId");

-- CreateIndex
CREATE UNIQUE INDEX "ceremony_sessions_activityId_key" ON "ceremony_sessions"("activityId");

-- CreateIndex
CREATE UNIQUE INDEX "ceremony_candidates_ceremonySessionId_personId_key" ON "ceremony_candidates"("ceremonySessionId", "personId");

-- CreateIndex
CREATE UNIQUE INDEX "fee_grids_pastoralYear_gradeOrQualificationCode_scopeType_s_key" ON "fee_grids"("pastoralYear", "gradeOrQualificationCode", "scopeType", "scopeId");

-- CreateIndex
CREATE UNIQUE INDEX "contributions_personId_pastoralYear_gradeOrQualificationCod_key" ON "contributions"("personId", "pastoralYear", "gradeOrQualificationCode");

-- CreateIndex
CREATE INDEX "payments_contributionId_idx" ON "payments"("contributionId");

-- CreateIndex
CREATE INDEX "financial_transactions_scopeType_scopeId_idx" ON "financial_transactions"("scopeType", "scopeId");

-- CreateIndex
CREATE UNIQUE INDEX "request_types_name_key" ON "request_types"("name");

-- CreateIndex
CREATE INDEX "certificate_requests_requesterId_idx" ON "certificate_requests"("requesterId");

-- CreateIndex
CREATE INDEX "certificate_requests_status_idx" ON "certificate_requests"("status");

-- CreateIndex
CREATE UNIQUE INDEX "certificates_certificateRequestId_key" ON "certificates"("certificateRequestId");

-- CreateIndex
CREATE UNIQUE INDEX "certificates_uniqueNumber_key" ON "certificates"("uniqueNumber");

-- CreateIndex
CREATE INDEX "documents_scopeType_scopeId_idx" ON "documents"("scopeType", "scopeId");

-- CreateIndex
CREATE INDEX "notifications_accountId_read_idx" ON "notifications"("accountId", "read");

-- CreateIndex
CREATE UNIQUE INDEX "health_profiles_personId_key" ON "health_profiles"("personId");

-- CreateIndex
CREATE UNIQUE INDEX "diocese_settings_dioceseId_key" ON "diocese_settings"("dioceseId");

-- CreateIndex
CREATE INDEX "audit_logs_entityType_entityId_idx" ON "audit_logs"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "audit_logs_accountId_idx" ON "audit_logs"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "resources_code_key" ON "resources"("code");

-- CreateIndex
CREATE UNIQUE INDEX "actions_code_key" ON "actions"("code");

-- CreateIndex
CREATE INDEX "permissions_roleId_idx" ON "permissions"("roleId");

-- CreateIndex
CREATE INDEX "permissions_fonctionId_idx" ON "permissions"("fonctionId");

-- AddForeignKey
ALTER TABLE "doyennes" ADD CONSTRAINT "doyennes_dioceseId_fkey" FOREIGN KEY ("dioceseId") REFERENCES "dioceses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paroisses" ADD CONSTRAINT "paroisses_doyenneId_fkey" FOREIGN KEY ("doyenneId") REFERENCES "doyennes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paroisses" ADD CONSTRAINT "paroisses_villeId_fkey" FOREIGN KEY ("villeId") REFERENCES "villes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_paroisseId_fkey" FOREIGN KEY ("paroisseId") REFERENCES "paroisses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_sponsorSectionId_fkey" FOREIGN KEY ("sponsorSectionId") REFERENCES "sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_leaderships" ADD CONSTRAINT "team_leaderships_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_leaderships" ADD CONSTRAINT "team_leaderships_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mandates" ADD CONSTRAINT "mandates_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mandates" ADD CONSTRAINT "mandates_fonctionId_fkey" FOREIGN KEY ("fonctionId") REFERENCES "fonctions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mandates" ADD CONSTRAINT "mandates_governanceBodyId_fkey" FOREIGN KEY ("governanceBodyId") REFERENCES "governance_bodies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mandates" ADD CONSTRAINT "mandates_previousMandateId_fkey" FOREIGN KEY ("previousMandateId") REFERENCES "mandates"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grade_histories" ADD CONSTRAINT "grade_histories_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grade_histories" ADD CONSTRAINT "grade_histories_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "grades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grade_histories" ADD CONSTRAINT "grade_histories_awardedById_fkey" FOREIGN KEY ("awardedById") REFERENCES "persons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chef_qualifications" ADD CONSTRAINT "chef_qualifications_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chef_qualifications" ADD CONSTRAINT "chef_qualifications_awardedById_fkey" FOREIGN KEY ("awardedById") REFERENCES "persons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_paroisseId_fkey" FOREIGN KEY ("paroisseId") REFERENCES "paroisses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tutors" ADD CONSTRAINT "tutors_minorPersonId_fkey" FOREIGN KEY ("minorPersonId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membership_cards" ADD CONSTRAINT "membership_cards_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_activityTypeId_fkey" FOREIGN KEY ("activityTypeId") REFERENCES "activity_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_responsibleId_fkey" FOREIGN KEY ("responsibleId") REFERENCES "persons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pilgrimage_logistics" ADD CONSTRAINT "pilgrimage_logistics_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "activities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "presences" ADD CONSTRAINT "presences_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "activities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "presences" ADD CONSTRAINT "presences_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "presences" ADD CONSTRAINT "presences_recordedById_fkey" FOREIGN KEY ("recordedById") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ceremony_sessions" ADD CONSTRAINT "ceremony_sessions_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "activities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ceremony_candidates" ADD CONSTRAINT "ceremony_candidates_ceremonySessionId_fkey" FOREIGN KEY ("ceremonySessionId") REFERENCES "ceremony_sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ceremony_candidates" ADD CONSTRAINT "ceremony_candidates_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spiritual_opinion_records" ADD CONSTRAINT "spiritual_opinion_records_ceremonySessionId_fkey" FOREIGN KEY ("ceremonySessionId") REFERENCES "ceremony_sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spiritual_opinion_records" ADD CONSTRAINT "spiritual_opinion_records_authorPersonId_fkey" FOREIGN KEY ("authorPersonId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contributions" ADD CONSTRAINT "contributions_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_contributionId_fkey" FOREIGN KEY ("contributionId") REFERENCES "contributions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_recordedById_fkey" FOREIGN KEY ("recordedById") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "financial_transactions" ADD CONSTRAINT "financial_transactions_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "activities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "financial_transactions" ADD CONSTRAINT "financial_transactions_recordedById_fkey" FOREIGN KEY ("recordedById") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificate_requests" ADD CONSTRAINT "certificate_requests_requestTypeId_fkey" FOREIGN KEY ("requestTypeId") REFERENCES "request_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificate_requests" ADD CONSTRAINT "certificate_requests_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificate_requests" ADD CONSTRAINT "certificate_requests_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificate_requests" ADD CONSTRAINT "certificate_requests_level1ValidatorId_fkey" FOREIGN KEY ("level1ValidatorId") REFERENCES "persons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificate_requests" ADD CONSTRAINT "certificate_requests_level2ValidatorId_fkey" FOREIGN KEY ("level2ValidatorId") REFERENCES "persons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificates" ADD CONSTRAINT "certificates_certificateRequestId_fkey" FOREIGN KEY ("certificateRequestId") REFERENCES "certificate_requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_paroisseId_fkey" FOREIGN KEY ("paroisseId") REFERENCES "paroisses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "broadcasts" ADD CONSTRAINT "broadcasts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "health_profiles" ADD CONSTRAINT "health_profiles_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "health_profile_consents" ADD CONSTRAINT "health_profile_consents_healthProfileId_fkey" FOREIGN KEY ("healthProfileId") REFERENCES "health_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "health_profile_consents" ADD CONSTRAINT "health_profile_consents_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "tutors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diocese_settings" ADD CONSTRAINT "diocese_settings_dioceseId_fkey" FOREIGN KEY ("dioceseId") REFERENCES "dioceses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissions" ADD CONSTRAINT "permissions_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissions" ADD CONSTRAINT "permissions_fonctionId_fkey" FOREIGN KEY ("fonctionId") REFERENCES "fonctions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissions" ADD CONSTRAINT "permissions_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "resources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissions" ADD CONSTRAINT "permissions_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "actions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
