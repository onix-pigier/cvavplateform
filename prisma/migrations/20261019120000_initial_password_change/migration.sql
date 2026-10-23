ALTER TABLE "accounts"
  ADD COLUMN "passwordChangeRequired" BOOLEAN NOT NULL DEFAULT false;

-- Older seeds granted chiefs direct membership creation. Remove that grant;
-- parish administration now owns membership validation.
DELETE FROM "permissions" AS p
USING "roles" AS r, "resources" AS res, "actions" AS a
WHERE p."roleId" = r."id"
  AND p."resourceId" = res."id"
  AND p."actionId" = a."id"
  AND r."code" = 'CHEF'
  AND res."code" = 'APPARTENANCE'
  AND a."code" = 'CREATE';
