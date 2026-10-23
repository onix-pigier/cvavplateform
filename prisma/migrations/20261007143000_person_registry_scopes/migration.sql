CREATE TABLE "person_registry_entries" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "scopeType" "ScopeType" NOT NULL,
    "scopeId" TEXT NOT NULL,
    "createdByAccountId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "person_registry_entries_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "person_registry_entries_personId_scopeType_scopeId_key"
ON "person_registry_entries"("personId", "scopeType", "scopeId");

CREATE INDEX "person_registry_entries_scopeType_scopeId_createdAt_idx"
ON "person_registry_entries"("scopeType", "scopeId", "createdAt");

ALTER TABLE "person_registry_entries"
ADD CONSTRAINT "person_registry_entries_personId_fkey"
FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "person_registry_entries"
ADD CONSTRAINT "person_registry_entries_createdByAccountId_fkey"
FOREIGN KEY ("createdByAccountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
