-- Invariants de domaine qu'un @@unique Prisma ne peut pas exprimer :
-- une seule appartenance active et un seul grade courant par personne.
-- Si des doublons historiques existent, l'index échoue volontairement :
-- ils doivent être arbitrés, jamais supprimés automatiquement.
CREATE UNIQUE INDEX "memberships_one_active_per_person_key"
  ON "memberships"("personId")
  WHERE "isActive" = true;

CREATE UNIQUE INDEX "grade_histories_one_current_grade_per_person_key"
  ON "grade_histories"("personId")
  WHERE "endedAt" IS NULL;
