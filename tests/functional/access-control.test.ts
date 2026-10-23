import test from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { SignJWT } from "jose";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../lib/generated/prisma/client";
import { assertTestDatabaseUrl } from "../../scripts/test-db-guard";

const databaseUrl = process.env.TEST_DATABASE_URL;
const baseUrl = process.env.TEST_BASE_URL;
const accessTest = databaseUrl && baseUrl ? test : test.skip;
const secret = process.env.SESSION_SECRET;
const prisma = databaseUrl ? new PrismaClient({ adapter: new PrismaPg({ connectionString: databaseUrl }) }) : null;

assertTestDatabaseUrl(databaseUrl);
if (!secret || secret.length < 32) throw new Error("SESSION_SECRET de test absente ou trop courte.");

async function sessionCookie(username: string, mustChangePassword = false) {
  const account = await prisma!.account.findUniqueOrThrow({
    where: { username },
    include: { userRoles: { where: { endDate: null }, include: { role: true } } },
  });
  const roles = account.userRoles.map((assignment) => ({
    roleCode: assignment.role.code,
    scopeType: assignment.scopeType,
    scopeId: assignment.scopeId,
  }));
  const token = await new SignJWT({
    accountId: account.id,
    personId: account.personId,
    username: account.username,
    sessionVersion: account.sessionVersion,
    passwordChangeRequired: account.passwordChangeRequired,
    ...(mustChangePassword ? { mustChangePassword: true } : {}),
    roles,
    mandates: [],
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuer("cvav-platform")
    .setAudience("cvav-web")
    .setIssuedAt()
    .setExpirationTime("10m")
    .sign(new TextEncoder().encode(secret));
  return { account, cookie: `cvav_session=${token}` };
}

function api(path: string, cookie: string, init?: RequestInit) {
  return fetch(`${baseUrl}${path}`, {
    ...init,
    redirect: "manual",
    headers: { Cookie: cookie, ...(init?.body ? { "Content-Type": "application/json" } : {}), ...init?.headers },
  });
}

accessTest("les accès croisés entre rôles et périmètres sont refusés", async () => {
  try {
    const [militant, targetMember, chef, adminParish, adminDeanery, superAdmin] = await Promise.all([
      sessionCookie("test-militant"),
      sessionCookie("test-target-militant"),
      sessionCookie("test-chef-equipe"),
      sessionCookie("test-admin-paroisse"),
      sessionCookie("test-admin-doyenne"),
      sessionCookie("test-super-admin"),
    ]);

    const unauthenticated = await api("/api/requests", "");
    assert.equal(unauthenticated.status, 401);
    const firstLoginSession = await sessionCookie("test-militant", true);
    const restrictedApi = await api("/api/requests", firstLoginSession.cookie);
    assert.equal(restrictedApi.status, 403, "une session de première connexion ne doit pas accéder aux API métier");

    // Un militant ne doit pas entrer dans l'espace d'administration.
    const adminPage = await api("/admin/personnes", militant.cookie);
    assert.equal(adminPage.status, 307);
    const redirectLocation = adminPage.headers.get("location");
    assert.ok(redirectLocation, `la redirection doit fournir Location (réponse ${adminPage.status})`);
    assert.equal(new URL(redirectLocation, baseUrl).pathname, "/militant/dashboard");

    // Un chef peut créer l'activité de son équipe, mais pas consigner une
    // présence dans une activité d'une autre paroisse/d'un autre doyenné.
    const foreignTeam = await prisma!.team.findUniqueOrThrow({ where: { id: "test-foreign-team-cvav" } });
    const activityType = await prisma!.activityType.findUniqueOrThrow({ where: { name: "Réunion" } });
    const activityResponse = await api("/api/activities", superAdmin.cookie, {
      method: "POST",
      body: JSON.stringify({
        name: `Test accès croisé ${randomUUID()}`,
        activityTypeId: activityType.id,
        startDate: "2026-11-14T09:00:00.000Z",
        endDate: "2026-11-14T11:00:00.000Z",
        location: "Équipe hors périmètre",
        scopeType: "EQUIPE",
        scopeId: foreignTeam.id,
      }),
    });
    assert.equal(activityResponse.status, 201, await activityResponse.clone().text());
    const activity = await activityResponse.json() as { data: { id: string } };
    const presenceResponse = await api(`/api/activities/${activity.data.id}/presences`, chef.cookie, {
      method: "POST",
      body: JSON.stringify({ personId: targetMember.account.personId, present: true }),
    });
    assert.equal(presenceResponse.status, 403, await presenceResponse.text());
    assert.equal(await prisma!.presence.count({ where: { activityId: activity.data.id } }), 0, "aucune présence hors scope ne doit être écrite");

    // Une demande diocésaine suit les trois étapes prévues. Le rôle du niveau
    // supérieur ne peut ni court-circuiter ni remplacer l'autorité de l'étape.
    const requestType = await prisma!.requestType.findUniqueOrThrow({ where: { name: "Demande exceptionnelle" } });
    const createResponse = await api("/api/requests", chef.cookie, {
      method: "POST",
      body: JSON.stringify({ requestTypeId: requestType.id, requesterId: targetMember.account.personId }),
    });
    assert.equal(createResponse.status, 201, await createResponse.clone().text());
    const created = await createResponse.json() as { data: { id: string; status: string; requiredValidationLevel: string } };
    assert.equal(created.data.requiredValidationLevel, "DIOCESE");
    assert.equal(created.data.status, "PENDING");

    const deaneryAtParishStage = await api(`/api/requests/${created.data.id}/approve`, adminDeanery.cookie, { method: "POST" });
    assert.equal(deaneryAtParishStage.status, 403, "l'étape paroissiale appartient à ADMIN_PAROISSE");

    const parishApproval = await api(`/api/requests/${created.data.id}/approve`, adminParish.cookie, { method: "POST" });
    assert.equal(parishApproval.status, 200, await parishApproval.clone().text());
    const afterParish = await prisma!.certificateRequest.findUniqueOrThrow({ where: { id: created.data.id } });
    assert.equal(afterParish.status, "SECTION_APPROVED");

    const parishAtDeaneryStage = await api(`/api/requests/${created.data.id}/approve`, adminParish.cookie, { method: "POST" });
    assert.equal(parishAtDeaneryStage.status, 403, "l'étape de doyenné appartient à ADMIN_DOYENNE");
    const deaneryApproval = await api(`/api/requests/${created.data.id}/approve`, adminDeanery.cookie, { method: "POST" });
    assert.equal(deaneryApproval.status, 200, await deaneryApproval.clone().text());
    const afterDeanery = await prisma!.certificateRequest.findUniqueOrThrow({ where: { id: created.data.id } });
    assert.equal(afterDeanery.status, "DOYENNE_APPROVED");

    const deaneryAtDioceseStage = await api(`/api/requests/${created.data.id}/approve`, adminDeanery.cookie, { method: "POST" });
    assert.equal(deaneryAtDioceseStage.status, 403, "l'étape diocésaine appartient à SUPER_ADMIN");
    const diocesanApproval = await api(`/api/requests/${created.data.id}/approve`, superAdmin.cookie, { method: "POST" });
    assert.equal(diocesanApproval.status, 200, await diocesanApproval.clone().text());

    const completed = await prisma!.certificateRequest.findUniqueOrThrow({ where: { id: created.data.id }, include: { validationSteps: true } });
    assert.equal(completed.status, "APPROVED");
    assert.deepEqual(completed.validationSteps.map((step) => step.level).sort(), ["DIOCESE", "DOYENNE", "PAROISSE"]);
    assert.ok(completed.validationSteps.every((step) => step.status === "APPROVED"));

    // Un compte d'une autre paroisse du même doyenné ne peut ni approuver ni
    // rejeter une demande paroissiale, malgré l'identité du rôle.
    const parishOnlyType = await prisma!.requestType.findUniqueOrThrow({ where: { name: "Attestation de grade" } });
    const parishRequestResponse = await api("/api/requests", chef.cookie, {
      method: "POST",
      body: JSON.stringify({ requestTypeId: parishOnlyType.id, requesterId: targetMember.account.personId }),
    });
    assert.equal(parishRequestResponse.status, 201, await parishRequestResponse.clone().text());
    const parishRequest = await parishRequestResponse.json() as { data: { id: string } };
    const otherParish = await sessionCookie("test-admin-autre-paroisse");
    const otherParishApprove = await api(`/api/requests/${parishRequest.data.id}/approve`, otherParish.cookie, { method: "POST" });
    assert.equal(otherParishApprove.status, 403);
    const otherParishReject = await api(`/api/requests/${parishRequest.data.id}/reject`, otherParish.cookie, { method: "POST", body: JSON.stringify({ reason: "Test de périmètre" }) });
    assert.equal(otherParishReject.status, 403);
    const parishReject = await api(`/api/requests/${parishRequest.data.id}/reject`, adminParish.cookie, { method: "POST", body: JSON.stringify({ reason: "Rejet de test" }) });
    assert.equal(parishReject.status, 200, await parishReject.clone().text());

    // Au niveau doyenné, même rôle mais autre doyenné : approbation et rejet
    // doivent échouer sans révéler les données ni modifier l'état.
    const deaneryRequestType = await prisma!.requestType.findUniqueOrThrow({ where: { name: "Demande de nomination" } });
    const deaneryRequestResponse = await api("/api/requests", chef.cookie, {
      method: "POST",
      body: JSON.stringify({ requestTypeId: deaneryRequestType.id, requesterId: targetMember.account.personId }),
    });
    assert.equal(deaneryRequestResponse.status, 201, await deaneryRequestResponse.clone().text());
    const deaneryRequest = await deaneryRequestResponse.json() as { data: { id: string } };
    const parishStage = await api(`/api/requests/${deaneryRequest.data.id}/approve`, adminParish.cookie, { method: "POST" });
    assert.equal(parishStage.status, 200, await parishStage.clone().text());
    const otherDeanery = await sessionCookie("test-admin-autre-doyenne");
    const otherDeaneryApprove = await api(`/api/requests/${deaneryRequest.data.id}/approve`, otherDeanery.cookie, { method: "POST" });
    assert.equal(otherDeaneryApprove.status, 403);
    const otherDeaneryReject = await api(`/api/requests/${deaneryRequest.data.id}/reject`, otherDeanery.cookie, { method: "POST", body: JSON.stringify({ reason: "Test de périmètre" }) });
    assert.equal(otherDeaneryReject.status, 403);
    const deaneryReject = await api(`/api/requests/${deaneryRequest.data.id}/reject`, adminDeanery.cookie, { method: "POST", body: JSON.stringify({ reason: "Rejet de test" }) });
    assert.equal(deaneryReject.status, 200, await deaneryReject.clone().text());

    // Les demandes et attestations ne sont consultables que par leurs acteurs.
    const certificateRequestResponse = await api("/api/requests", chef.cookie, {
      method: "POST",
      body: JSON.stringify({ requestTypeId: parishOnlyType.id, requesterId: targetMember.account.personId }),
    });
    assert.equal(certificateRequestResponse.status, 201, await certificateRequestResponse.clone().text());
    const certificateRequest = await certificateRequestResponse.json() as { data: { id: string } };
    const certificateBeforeValidation = await api(`/api/requests/${certificateRequest.data.id}/certificate`, targetMember.cookie);
    assert.equal(certificateBeforeValidation.status, 404, "aucune attestation ne doit exister ou être téléchargeable avant validation finale");
    const wrongRoleApproval = await api(`/api/requests/${certificateRequest.data.id}/approve`, militant.cookie, { method: "POST" });
    assert.equal(wrongRoleApproval.status, 403);
    const deniedBody = await wrongRoleApproval.text();
    assert.doesNotMatch(deniedBody, /Cible Contrôle accès|test-target-militant|phone|email/i);
    const certificateApproval = await api(`/api/requests/${certificateRequest.data.id}/approve`, adminParish.cookie, { method: "POST" });
    assert.equal(certificateApproval.status, 200, await certificateApproval.clone().text());
    const ownCertificate = await api(`/api/requests/${certificateRequest.data.id}/certificate`, targetMember.cookie);
    assert.equal(ownCertificate.status, 200);
    const otherAccountDownload = await api(`/api/requests/${certificateRequest.data.id}/certificate`, adminParish.cookie);
    assert.equal(otherAccountDownload.status, 403);
    const requestById = await api(`/api/requests/${certificateRequest.data.id}`, targetMember.cookie);
    assert.equal(requestById.status, 404, "aucune route de détail ne doit exposer une demande par identifiant");

    // La dérogation diocésaine exige un motif, 72 h révolues et l'absence
    // d'un validateur actif au niveau et dans le périmètre de l'étape.
    const overrideType = await prisma!.requestType.findUniqueOrThrow({ where: { name: "Demande exceptionnelle" } });
    const overrideCreate = await api("/api/requests", chef.cookie, {
      method: "POST",
      body: JSON.stringify({ requestTypeId: overrideType.id, requesterId: targetMember.account.personId }),
    });
    assert.equal(overrideCreate.status, 201, await overrideCreate.clone().text());
    const overrideRequest = await overrideCreate.json() as { data: { id: string } };
    const overridePath = `/api/requests/${overrideRequest.data.id}/override`;
    const missingReason = await api(overridePath, superAdmin.cookie, { method: "POST", body: JSON.stringify({ reason: " " }) });
    assert.equal(missingReason.status, 422, "le motif est obligatoire");
    const wrongOverrideRole = await api(overridePath, adminParish.cookie, { method: "POST", body: JSON.stringify({ reason: "Intervention de test justifiée" }) });
    assert.equal(wrongOverrideRole.status, 403, "un administrateur paroissial ne peut pas utiliser l'override diocésain");
    const tooEarlyWithValidator = await api(overridePath, superAdmin.cookie, { method: "POST", body: JSON.stringify({ reason: "Intervention de test justifiée" }) });
    assert.equal(tooEarlyWithValidator.status, 422, "une étape récente ne peut pas être dérogée");

    const parishAdminRole = await prisma!.userRole.findFirstOrThrow({
      where: { accountId: adminParish.account.id, role: { code: "ADMIN_PAROISSE" }, scopeType: "PAROISSE" },
    });
    const now = new Date();
    const createdStep = await prisma!.certificateValidationStep.findFirstOrThrow({ where: { requestId: overrideRequest.data.id, level: "PAROISSE" } });
    await prisma!.certificateValidationStep.update({ where: { id: createdStep.id }, data: { createdAt: new Date(now.getTime() - 73 * 60 * 60 * 1000) } });
    const stillHasValidator = await api(overridePath, superAdmin.cookie, { method: "POST", body: JSON.stringify({ reason: "Intervention de test justifiée" }) });
    assert.equal(stillHasValidator.status, 403, "même après 72 h, un validateur actif bloque la dérogation");

    let recentWithoutValidatorId: string | null = null;
    try {
      await prisma!.userRole.update({ where: { id: parishAdminRole.id }, data: { endDate: now } });
      const recentWithoutValidatorCreate = await api("/api/requests", chef.cookie, {
        method: "POST",
        body: JSON.stringify({ requestTypeId: parishOnlyType.id, requesterId: targetMember.account.personId }),
      });
      assert.equal(recentWithoutValidatorCreate.status, 201, await recentWithoutValidatorCreate.clone().text());
      const recentWithoutValidator = await recentWithoutValidatorCreate.json() as { data: { id: string } };
      recentWithoutValidatorId = recentWithoutValidator.data.id;
      const recentNoValidatorResult = await api(`/api/requests/${recentWithoutValidator.data.id}/override`, superAdmin.cookie, {
        method: "POST", body: JSON.stringify({ reason: "Intervention de test justifiée" }),
      });
      assert.equal(recentNoValidatorResult.status, 422, "l'absence de validateur ne remplace pas le délai de 72 h");

      const overrideResult = await api(overridePath, superAdmin.cookie, { method: "POST", body: JSON.stringify({ reason: "Aucun administrateur actif dans la paroisse" }) });
      assert.equal(overrideResult.status, 200, await overrideResult.clone().text());
      const overrideBody = await overrideResult.json() as { data: { request: { status: string; validationSteps: Array<{ level: string; status: string; overridden: boolean; comment: string | null }> } } };
      assert.equal(overrideBody.data.request.status, "SECTION_APPROVED");
      assert.deepEqual(overrideBody.data.request.validationSteps.map((step) => [step.level, step.status, step.overridden]).sort(([left], [right]) => String(left).localeCompare(String(right))), [
        ["PAROISSE", "APPROVED", true], ["DOYENNE", "PENDING", false],
      ].sort(([left], [right]) => String(left).localeCompare(String(right))), "la dérogation ne valide que l'étape courante");
      assert.equal(overrideBody.data.request.validationSteps.find((step) => step.level === "PAROISSE")?.comment, "Aucun administrateur actif dans la paroisse");
      const overrideAudit = await prisma!.auditLog.findFirstOrThrow({
        where: { action: "OVERRIDE_APPROVE_CERTIFICATE_REQUEST_LEVEL", entityId: overrideRequest.data.id },
      });
      assert.equal(overrideAudit.accountId, superAdmin.account.id);
      const auditBefore = overrideAudit.before as Record<string, unknown>;
      assert.equal(auditBefore.status, "PENDING");
      assert.equal(auditBefore.validationLevel, "PAROISSE");
      assert.equal(auditBefore.stepStatus, "PENDING");
      assert.deepEqual(auditBefore.scope, { type: "PAROISSE", id: parishAdminRole.scopeId });
      const auditAfter = overrideAudit.after as Record<string, unknown>;
      assert.equal(auditAfter.status, "SECTION_APPROVED");
      assert.equal(auditAfter.validationLevel, "PAROISSE");
      assert.equal(auditAfter.validatorPersonId, superAdmin.account.personId);
      assert.equal(auditAfter.certificateGenerated, false);
      assert.equal(auditAfter.overridden, true);
      assert.equal(auditAfter.overrideReason, "Aucun administrateur actif dans la paroisse");
      assert.equal(auditAfter.activeValidatorAvailable, false);
      assert.deepEqual(auditAfter.scope, { type: "PAROISSE", id: parishAdminRole.scopeId });
      assert.ok(Number(auditAfter.pendingForMs) >= 73 * 60 * 60 * 1000);
      const escalatedNotification = await prisma!.notification.findFirst({
        where: { accountId: adminDeanery.account.id, type: "CERTIFICATE_REQUEST_ESCALATED", targetLink: "/admin/demandes", message: { contains: overrideRequest.data.id } },
      });
      assert.ok(escalatedNotification, "l'administrateur du prochain niveau reçoit une notification après la dérogation");
    } finally {
      await prisma!.userRole.update({ where: { id: parishAdminRole.id }, data: { endDate: null } });
      await prisma!.certificateRequest.deleteMany({ where: { id: { in: [overrideRequest.data.id, ...(recentWithoutValidatorId ? [recentWithoutValidatorId] : [])] } } });
    }

    // Un mandat TRESORIER arrivé à échéance ne doit pas conférer de droits,
    // même si un ancien jeton contient encore cette fonction.
    const expiredPerson = await prisma!.person.create({ data: {
      firstName: "Mandat", lastName: "Expiré", birthDate: new Date("1990-01-01T00:00:00.000Z"), sex: "M",
    } });
    const expiredAccount = await prisma!.account.create({ data: {
      personId: expiredPerson.id,
      username: `test-expired-mandate-${randomUUID()}`,
      passwordHash: "not-used-by-this-test",
    } });
    const treasurer = await prisma!.fonction.findUniqueOrThrow({ where: { code: "TRESORIER" } });
    const expiredMandate = await prisma!.mandate.create({ data: {
      personId: expiredPerson.id,
      fonctionId: treasurer.id,
      scopeType: "PAROISSE",
      scopeId: "paroisse-doyenne-mgr-alphonse-kirmann-cathedrale-christ-roi",
      startDate: new Date("2025-01-01T00:00:00.000Z"),
      endDate: new Date("2025-12-31T23:59:59.000Z"),
      status: "ACTIVE",
    } });
    const staleMandateToken = await new SignJWT({
      accountId: expiredAccount.id,
      personId: expiredPerson.id,
      username: expiredAccount.username,
      sessionVersion: expiredAccount.sessionVersion,
      passwordChangeRequired: false,
      roles: [],
      mandates: [{ fonctionCode: "TRESORIER", scopeType: "PAROISSE", scopeId: expiredMandate.scopeId }],
    }).setProtectedHeader({ alg: "HS256" }).setIssuer("cvav-platform").setAudience("cvav-web").setIssuedAt().setExpirationTime("10m").sign(new TextEncoder().encode(secret));
    const expiredMandateAccess = await api("/api/finance", `cvav_session=${staleMandateToken}`);
    assert.equal(expiredMandateAccess.status, 403, "un mandat expiré est exclu lors de la reconstruction serveur de session");
    await prisma!.mandate.delete({ where: { id: expiredMandate.id } });
    await prisma!.account.delete({ where: { id: expiredAccount.id } });
    await prisma!.person.delete({ where: { id: expiredPerson.id } });

    // Invalider une session signée par sessionVersion après révocation.
    await prisma!.account.update({ where: { id: targetMember.account.id }, data: { sessionVersion: { increment: 1 } } });
    const revokedSession = await api("/api/requests", targetMember.cookie);
    assert.equal(revokedSession.status, 401);
  } finally {
    await prisma?.$disconnect();
  }
});
