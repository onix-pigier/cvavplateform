import { randomUUID } from "node:crypto";
import pg from "pg";
import { expect, test } from "@playwright/test";
import { SignJWT } from "jose";
import { assertTestDatabaseUrl } from "../../scripts/test-db-guard";

const databaseUrl = process.env.TEST_DATABASE_URL;
const baseUrl = process.env.TEST_BASE_URL;
const secret = process.env.SESSION_SECRET;
assertTestDatabaseUrl(databaseUrl);
if (!databaseUrl || !baseUrl || !secret || secret.length < 32) throw new Error("Configuration E2E de test incomplète.");
const prisma = new pg.Client({ connectionString: databaseUrl });
test.beforeAll(async () => prisma.connect());

test("AttendanceSheet reste utilisable à 360 px et enregistre le pointage", async ({ page, context }) => {
  const { rows: [account] } = await prisma.query(`SELECT a.id, a."personId", a.username, a."sessionVersion", a."passwordChangeRequired", json_agg(json_build_object('roleCode', r.code, 'scopeType', ur."scopeType", 'scopeId', ur."scopeId")) AS roles FROM accounts a JOIN user_roles ur ON ur."accountId" = a.id JOIN roles r ON r.id = ur."roleId" WHERE a.username = $1 AND ur."endDate" IS NULL GROUP BY a.id`, ["test-chef-equipe"]);
  const { rows: [target] } = await prisma.query(`SELECT p.id, p."firstName", p."lastName", m."teamId" FROM accounts a JOIN persons p ON p.id = a."personId" JOIN memberships m ON m."personId" = p.id WHERE a.username = $1 AND m."isActive" = true AND m."endDate" IS NULL LIMIT 1`, ["test-target-militant"]);
  const { rows: [activityType] } = await prisma.query(`SELECT id FROM activity_types WHERE name = $1`, ["Réunion"]);
  if (!account || !target || !activityType || !target.teamId) throw new Error("Fixtures Playwright manquantes dans app_test.");
  const name = `Présence mobile ${randomUUID().slice(0, 8)}`;
  const activityId = randomUUID();
  await prisma.query(`INSERT INTO activities (id, name, "activityTypeId", "startDate", "endDate", location, "scopeType", "scopeId", status, "createdAt", "updatedAt") VALUES ($1,$2,$3,$4,$5,$6,'EQUIPE',$7,'PLANNED',now(),now())`, [activityId, name, activityType.id, new Date("2026-11-14T09:00:00.000Z"), new Date("2026-11-14T11:00:00.000Z"), "Équipe de test", target.teamId]);

  try {
    const token = await new SignJWT({
      accountId: account.id,
      personId: account.personId,
      username: account.username,
      sessionVersion: account.sessionVersion,
      passwordChangeRequired: account.passwordChangeRequired,
      roles: account.roles,
      mandates: [],
    }).setProtectedHeader({ alg: "HS256" }).setIssuer("cvav-platform").setAudience("cvav-web").setIssuedAt().setExpirationTime("10m").sign(new TextEncoder().encode(secret));

    await context.addCookies([{ name: "cvav_session", value: token, url: baseUrl }]);
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto(`${baseUrl}/admin/activites/${activityId}`);
    await expect(page.getByRole("heading", { name })).toBeVisible();
    const overflow = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, page: document.documentElement.scrollWidth }));
    expect(overflow.page, `débordement horizontal à 360px: ${JSON.stringify(overflow)}`).toBeLessThanOrEqual(overflow.viewport);

    const presentButton = page.getByRole("button", { name: `Marquer ${target.firstName} ${target.lastName} présent` });
    await expect(presentButton).toBeVisible();
    await presentButton.click();
    await expect(page.getByRole("status").filter({ hasText: "Pointage enregistré." })).toBeVisible();
    await expect(page.getByText("Présent", { exact: true }).first()).toBeVisible();
    const { rows: [saved] } = await prisma.query(`SELECT present, "recordedById" FROM presences WHERE "activityId"=$1 AND "personId"=$2`, [activityId, target.id]);
    expect(saved?.present).toBe(true);
    expect(saved?.recordedById).toBe(account.id);
  } finally {
    await prisma.query(`DELETE FROM presences WHERE "activityId"=$1`, [activityId]);
    await prisma.query(`DELETE FROM activities WHERE id=$1`, [activityId]);
  }
});

test("un doublon de personne est placé en arbitrage au dépôt de pré-inscription", async ({ page }) => {
  const { rows: [known] } = await prisma.query(`SELECT p."firstName",p."lastName",p."birthDate",p.sex FROM accounts a JOIN persons p ON p.id=a."personId" WHERE a.username=$1`, ["test-target-militant"]);
  const parishId = "paroisse-doyenne-mgr-alphonse-kirmann-cathedrale-christ-roi";
  if (!known) throw new Error("Fixture militant cible absente.");
  const phone = `+225${Date.now()}`;
  await page.goto(`${baseUrl}/pre-inscription`);
  await page.getByLabel("Prénom(s) *").fill(known.firstName);
  await page.getByLabel("Nom *").fill(known.lastName);
  await page.getByLabel("Date de naissance *").fill(new Date(known.birthDate).toISOString().slice(0, 10));
  await page.getByLabel("Sexe *").selectOption(known.sex);
  await page.getByLabel("Téléphone de contact *").fill(phone);
  await page.getByLabel("Paroisse souhaitée *").selectOption(parishId);
  await page.getByLabel(/Je confirme l’exactitude/).check();
  await page.getByRole("button", { name: "Envoyer la demande" }).click();
  await expect(page.getByText("Votre demande est enregistrée.")).toBeVisible();
  const { rows: [registration] } = await prisma.query(`SELECT status, "possibleDuplicate", "createdAccountId" FROM pre_registrations WHERE phone=$1 ORDER BY "createdAt" DESC LIMIT 1`, [phone]);
  expect(registration).toBeTruthy();
  expect(registration.status).toBe("ARBITRATION");
  expect(registration.possibleDuplicate).toBe(true);
  expect(registration.createdAccountId).toBeNull();
});

test.afterAll(async () => prisma.end());
