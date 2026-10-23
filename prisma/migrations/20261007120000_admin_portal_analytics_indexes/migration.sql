CREATE INDEX "memberships_paroisseId_isActive_startDate_idx" ON "memberships"("paroisseId", "isActive", "startDate");
CREATE INDEX "memberships_sectionId_startDate_idx" ON "memberships"("sectionId", "startDate");
CREATE INDEX "memberships_teamId_isActive_startDate_idx" ON "memberships"("teamId", "isActive", "startDate");
CREATE INDEX "activities_scopeType_scopeId_startDate_idx" ON "activities"("scopeType", "scopeId", "startDate");
CREATE INDEX "presences_activityId_present_idx" ON "presences"("activityId", "present");
