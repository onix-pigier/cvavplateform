CREATE TABLE "account_access_requests" (
    "id" TEXT NOT NULL,
    "submittedIdentifier" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "account_access_requests_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "account_access_requests_status_createdAt_idx" ON "account_access_requests"("status", "createdAt");
