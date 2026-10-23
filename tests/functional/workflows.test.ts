import test from "node:test";
import assert from "node:assert/strict";
import { SignJWT } from "jose";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../lib/generated/prisma/client";
import { assertTestDatabaseUrl } from "../../scripts/test-db-guard";
import { openChromePage } from "../support/chrome-page";

const databaseUrl = process.env.TEST_DATABASE_URL;
const baseUrl = process.env.TEST_BASE_URL;
const workflowTest = databaseUrl && baseUrl ? test : test.skip;
const SESSION_COOKIE = "cvav_session";
const SESSION_SECRET = process.env.SESSION_SECRET;

assertTestDatabaseUrl(databaseUrl);
if (!SESSION_SECRET || SESSION_SECRET.length < 32) throw new Error("SESSION_SECRET de test absente ou trop courte.");

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: databaseUrl }) });

async function sessionCookie(username: string) {
  const account = await prisma.account.findUniqueOrThrow({ where: { username }, include: { person: true } });
  const token = await new SignJWT({
    accountId: account.id,
    personId: account.personId,
    username: account.username,
    sessionVersion: account.sessionVersion,
    passwordChangeRequired: account.passwordChangeRequired,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuer("cvav-platform")
    .setAudience("cvav-web")
    .setIssuedAt()
    .setExpirationTime("10m")
    .sign(new TextEncoder().encode(SESSION_SECRET));
  return { account, cookie: `${SESSION_COOKIE}=${token}` };
}

async function api(path: string, cookie: string, init?: RequestInit) {
  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers: { Cookie: cookie, ...(init?.body ? { "Content-Type": "application/json" } : {}), ...init?.headers },
  });
}

workflowTest("pré-inscription → décision → compte, activité → présence, demande → attestation", async () => {
  let browser: Awaited<ReturnType<typeof openChromePage>> | undefined;
  let browserFailed = false;
  try {
    const parishId = "paroisse-doyenne-mgr-alphonse-kirmann-cathedrale-christ-roi";
    const parish = await prisma.paroisse.findUniqueOrThrow({ where: { id: parishId } });

    // Le formulaire public doit proposer les identifiants de paroisse réellement
    // utilisés par le seed (slugs historiques), sans créer de compte à l'affichage.
    const chef = await sessionCookie("test-chef-equipe");
    const admin = await sessionCookie("test-admin-paroisse");
    const militant = await sessionCookie("test-militant");
    const testPhone = `+225${Date.now()}`;
    const testFirstName = `Test${Date.now()}`;
    const testLastName = "NouvelleAdhesion";

    const testPassword = process.env.CVAV_TEST_PASSWORD;
    assert.ok(testPassword, "CVAV_TEST_PASSWORD doit être chargé depuis .env.test");
    browser = await openChromePage(`${baseUrl}/pre-inscription`);
    await browser.waitForText("Demander à rejoindre le mouvement");
    await browser.waitForHydration();
    const submittedFields = await browser.evaluate<Record<string, string>>(`(() => {
      const set = (name, value) => {
        const input = document.querySelector('[name="' + name + '"]');
        if (!input) throw new Error('Champ absent: ' + name);
        const proto = input instanceof HTMLSelectElement ? HTMLSelectElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(proto, 'value').set.call(input, value);
        input.dispatchEvent(new Event(input instanceof HTMLSelectElement ? 'change' : 'input', { bubbles: true }));
      };
      set('firstName', ${JSON.stringify(testFirstName)}); set('lastName', ${JSON.stringify(testLastName)});
      set('birthDate', '2000-08-05'); set('sex', 'M'); set('phone', ${JSON.stringify(testPhone)});
      set('requestedParishId', ${JSON.stringify(parishId)});
      set('website', '');
      const consent = document.querySelector('[name="consent"]'); consent.checked = true;
      consent.dispatchEvent(new Event('change', { bubbles: true }));
      return Object.fromEntries(new FormData(document.querySelector('form')).entries());
    })()`);
    assert.equal(submittedFields.firstName, testFirstName);
    assert.equal(submittedFields.lastName, testLastName);
    assert.equal(submittedFields.requestedParishId, parishId);
    assert.equal(submittedFields.website, "");
    assert.equal(submittedFields.consent, "on");
    const validity = await browser.evaluate<{ valid: boolean; invalid: Array<{ name: string; value: string; validity: string }> }>(`(() => {
      const form = document.querySelector('form');
      return { valid: form.checkValidity(), invalid: [...form.elements].filter((field) => field.willValidate && !field.checkValidity()).map((field) => ({ name: field.name, value: field.value, validity: field.validationMessage })) };
    })()`);
    assert.deepEqual(validity.invalid, [], `champs navigateur invalides : ${JSON.stringify(validity.invalid)}`);
    await browser.evaluate(`document.querySelector('form').requestSubmit(document.querySelector('form button[type="submit"]'))`);
    await browser.waitForText("Votre demande est enregistrée.");
    const pendingRegistration = await prisma.preRegistration.findFirst({ where: { firstName: testFirstName, lastName: testLastName, phone: testPhone } });
    assert.ok(pendingRegistration, "la pré-inscription soumise depuis le formulaire doit être persistée");
    assert.equal(pendingRegistration.status, "PENDING");
    assert.equal(pendingRegistration.createdAccountId, null, "aucun compte ne doit exister avant la décision");
    assert.equal(await prisma.person.count({ where: { firstName: testFirstName, lastName: testLastName } }), 0);

    await browser.navigate(`${baseUrl}/login`);
    await browser.waitForText("Numéro de membre");
    await browser.waitForHydration();
    await browser.evaluate(`(() => {
      const set = (name, value) => {
        const input = document.querySelector('[name="' + name + '"]');
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
        setter.call(input, value); input.dispatchEvent(new Event('input', { bubbles: true }));
      };
      set('username', 'test-admin-paroisse'); set('password', ${JSON.stringify(testPassword)});
      document.querySelector('form').requestSubmit(document.querySelector('form button[type="submit"]'));
      return true;
    })()`);
    await browser.waitForText("PRIORITÉS DU PÉRIMÈTRE");
    await browser.navigate(`${baseUrl}/admin/pre-inscriptions`);
    await browser.waitForText(`${testFirstName} ${testLastName}`);
    await browser.waitForHydration();
    await browser.evaluate(`(() => {
      const form = [...document.querySelectorAll('form')].find((item) => item.querySelector('[name="requestId"]')?.value === ${JSON.stringify(pendingRegistration.id)});
      if (!form) throw new Error('Formulaire de décision introuvable');
      const setSelect = (name, value) => {
        const select = form.querySelector('[name="' + name + '"]');
        const setter = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set;
        setter.call(select, value); select.dispatchEvent(new Event('change', { bubbles: true }));
      };
      setSelect('sectionId', '3b2ecf6d-4928-4c38-b687-0a164ee8b02c');
      form.querySelector('button[name="decision"][value="APPROVE"]').click();
      return true;
    })()`);
    const approvedText = await browser.waitForText("Compte créé · matricule :");
    const createdUsername = approvedText.match(/Compte créé · matricule\s*:\s*([^\s\n]+)/)?.[1];
    const temporaryPassword = await browser.evaluate<string>("document.querySelector('code')?.textContent ?? ''");
    assert.ok(createdUsername && temporaryPassword.length >= 12, "le responsable reçoit le matricule et le secret temporaire une seule fois");
    const decidedRegistration = await prisma.preRegistration.findUniqueOrThrow({ where: { id: pendingRegistration.id } });
    assert.equal(decidedRegistration.status, "ACCOUNT_CREATED");
    assert.ok(decidedRegistration.createdAccountId);
    const createdAccount = await prisma.account.findUniqueOrThrow({ where: { id: decidedRegistration.createdAccountId }, include: { person: { include: { memberships: true } }, userRoles: { include: { role: true } } } });
    assert.equal(createdAccount.passwordChangeRequired, true, "le compte approuvé doit exiger le changement du secret temporaire");
    assert.equal(createdAccount.person.memberships.length, 1);
    assert.ok(createdAccount.userRoles.some((assignment) => assignment.role.code === "MILITANT"));
    assert.equal(createdAccount.username, createdUsername);

    await browser.navigate(`${baseUrl}/login`);
    await browser.waitForText("Numéro de membre");
    await browser.waitForHydration();
    await browser.evaluate(`(() => {
      const set = (name, value) => {
        const input = document.querySelector('[name="' + name + '"]');
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
        setter.call(input, value); input.dispatchEvent(new Event('input', { bubbles: true }));
      };
      set('username', ${JSON.stringify(createdUsername)}); set('password', ${JSON.stringify(temporaryPassword)});
      document.querySelector('form').requestSubmit(document.querySelector('form button'));
      return true;
    })()`);
    await browser.waitForText("Choisissez votre mot de passe");
    await browser.waitForHydration();
    const passwordForm = await browser.evaluate<{ valid: boolean; fields: Array<{ name: string; value: string; validation: string }> }>(`(() => {
      const set = (name, value) => {
        const input = document.querySelector('[name="' + name + '"]');
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
        setter.call(input, value); input.dispatchEvent(new Event('input', { bubbles: true }));
      };
      set('password', 'CVAV-First-Login-Changed-2026!');
      set('confirmation', 'CVAV-First-Login-Changed-2026!');
      const form = document.querySelector('form');
      const fields = [...form.elements].filter((field) => field.name).map((field) => ({ name: field.name, value: field.value, validation: field.validationMessage }));
      return { valid: form.checkValidity(), fields };
    })()`);
    assert.equal(passwordForm.valid, true, `formulaire de changement de mot de passe invalide : ${JSON.stringify(passwordForm.fields)}`);
    await browser.evaluate(`document.querySelector('form').requestSubmit(document.querySelector('form button'))`);
    await browser.waitForText("Votre espace personnel est prêt.");
    const updatedAccount = await prisma.account.findUniqueOrThrow({ where: { id: createdAccount.id } });
    assert.equal(updatedAccount.passwordChangeRequired, false, "la première connexion doit consommer le secret temporaire et imposer son remplacement");

    const activityType = await prisma.activityType.findUniqueOrThrow({ where: { name: "Réunion" } });
    const activityResponse = await api("/api/activities", chef.cookie, {
      method: "POST",
      body: JSON.stringify({
        name: "Réunion de test bout en bout",
        activityTypeId: activityType.id,
        startDate: "2026-11-14T09:00:00.000Z",
        endDate: "2026-11-14T11:00:00.000Z",
        location: "Section de test",
        scopeType: "EQUIPE",
        scopeId: "316404bc-87b0-42db-b64d-7fe4e4e9c5f4",
      }),
    });
    assert.equal(activityResponse.status, 201, await activityResponse.clone().text());
    const activityJson = await activityResponse.json() as { data: { id: string } };
    const activityId = activityJson.data.id;

    const attendanceResponse = await api(`/api/activities/${activityId}/presences`, chef.cookie, {
      method: "POST",
      body: JSON.stringify({ personId: militant.account.personId, present: true }),
    });
    assert.equal(attendanceResponse.status, 201, await attendanceResponse.clone().text());
    const savedPresence = await prisma.presence.findUniqueOrThrow({ where: { activityId_personId: { activityId, personId: militant.account.personId } } });
    assert.equal(savedPresence.present, true);
    assert.equal(savedPresence.recordedById, chef.account.id);

    const requestType = await prisma.requestType.findUniqueOrThrow({ where: { name: "Attestation de grade" } });
    const requestResponse = await api("/api/requests", chef.cookie, {
      method: "POST",
      body: JSON.stringify({ requestTypeId: requestType.id, requesterId: militant.account.personId }),
    });
    assert.equal(requestResponse.status, 201, await requestResponse.clone().text());
    const requestJson = await requestResponse.json() as { data: { id: string; requiredValidationLevel: string; status: string } };
    const requestId = requestJson.data.id;
    assert.equal(requestJson.data.requiredValidationLevel, "PAROISSE");

    const approvalResponse = await api(`/api/requests/${requestId}/approve`, admin.cookie, { method: "POST" });
    assert.equal(approvalResponse.status, 200, await approvalResponse.clone().text());
    const storedRequest = await prisma.certificateRequest.findUniqueOrThrow({ where: { id: requestId }, include: { certificate: true, validationSteps: true } });
    assert.equal(storedRequest.status, "APPROVED");
    assert.equal(storedRequest.validationSteps[0]?.status, "APPROVED");
    assert.equal(storedRequest.certificate?.status, "VALID");
    assert.ok(storedRequest.certificate?.contentHash);

    const pdfResponse = await api(`/api/requests/${requestId}/certificate`, militant.cookie);
    assert.equal(pdfResponse.status, 200);
    assert.match(pdfResponse.headers.get("content-type") ?? "", /application\/pdf/);
    assert.ok((await pdfResponse.arrayBuffer()).byteLength > 100);

    const verifyResponse = await fetch(`${baseUrl}/verify/${storedRequest.certificate!.uniqueNumber}`);
    assert.equal(verifyResponse.status, 200);
    assert.match(await verifyResponse.text(), /Le numéro existe dans le registre des attestations/);

    const auditCount = await prisma.auditLog.count({ where: { entityId: { in: [pendingRegistration.id, activityId, savedPresence.id, requestId] } } });
    assert.ok(auditCount >= 4, "décision d'adhésion, activité, présence et validation doivent laisser une trace d'audit");
    assert.equal(parish.isActive, true);
  } catch (error) {
    browserFailed = true;
    throw error;
  } finally {
    try { await browser?.close(browserFailed || process.env.CVAV_CAPTURE_TRACE === "1"); }
    finally { await prisma.$disconnect(); }
  }
});
