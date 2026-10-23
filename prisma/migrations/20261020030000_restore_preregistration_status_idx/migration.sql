CREATE INDEX IF NOT EXISTS "pre_registrations_status_createdAt_idx"
  ON "pre_registrations"("status", "createdAt");
