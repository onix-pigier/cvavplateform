import { authorize } from "@/lib/rbac/authorize";
import { getSession } from "@/lib/auth";
import { createHash, randomBytes } from "node:crypto";
import QRCode from "qrcode";
import { createCertificatePdf } from "@/lib/pdf/simple";
import { createCertificateRequestSchema, overrideCertificateRequestSchema, rejectCertificateRequestSchema, type CreateCertificateRequestInput } from "./schema";
import * as repository from "./repository";
import { isOverrideDelayMet, nextValidationLevel, statusAfterApproval, validationPath, type ValidationLevel } from "./workflow";

// Module requests : CertificateRequest, Certificate — WF-13, WF-27 (circuit anti-auto-validation D-062)
// Chaque fonction exportée ici doit commencer par authorize() avant toute
// opération, puis valider l entrée (schéma Zod), puis déléguer à repository.ts.
export const _authorizeRef = authorize;

export class RequestValidationError extends Error {}
export class RequestForbiddenError extends Error {}

function targetForValidation(level: ValidationLevel, membership: NonNullable<Awaited<ReturnType<typeof repository.findRequesterMembership>>>) {
  if (level === "PAROISSE") return { type: "PAROISSE" as const, id: membership.paroisseId };
  if (level === "DOYENNE") return { type: "DOYENNE" as const, id: membership.paroisse.doyenneId };
  return { type: "DIOCESE" as const, id: membership.paroisse.doyenne.dioceseId };
}

function expectedStatusForLevel(level: ValidationLevel) {
  return level === "PAROISSE" ? "PENDING" as const : level === "DOYENNE" ? "SECTION_APPROVED" as const : "DOYENNE_APPROVED" as const;
}

function ensureValidatorRole(session: NonNullable<Awaited<ReturnType<typeof getSession>>>, level: ValidationLevel) {
  const expectedRole = level === "PAROISSE" ? "ADMIN_PAROISSE" : level === "DOYENNE" ? "ADMIN_DOYENNE" : "SUPER_ADMIN";
  if (!session.roles.some((role) => role.roleCode === expectedRole)) {
    throw new RequestForbiddenError(`Cette étape doit être traitée par le rôle ${expectedRole}.`);
  }
}

function scopeForRequest(session: Awaited<ReturnType<typeof getSession>>, membership: NonNullable<Awaited<ReturnType<typeof repository.findRequesterMembership>>>) {
  if (!session) return null;
  const role = session.roles.find((item) => ["CHEF", "ADMIN_PAROISSE", "ADMIN_DOYENNE", "SUPER_ADMIN"].includes(item.roleCode));
  if (!role) return null;
  if (role.roleCode === "CHEF") return membership.team?.id ? { type: "EQUIPE", id: membership.team.id } : null;
  if (role.roleCode === "ADMIN_PAROISSE") return { type: "PAROISSE", id: membership.paroisse.id };
  if (role.roleCode === "ADMIN_DOYENNE") return { type: "DOYENNE", id: membership.paroisse.doyenneId };
  return { type: "DIOCESE", id: membership.paroisse.doyenne.dioceseId };
}

export async function createCertificateRequest(raw: unknown) {
  const session = await getSession();
  if (!session) throw new RequestForbiddenError("Connexion requise.");
  const parsed = createCertificateRequestSchema.safeParse(raw);
  if (!parsed.success) throw new RequestValidationError(parsed.error.message);
  const requestType = await repository.findRequestType(parsed.data.requestTypeId);
  if (!requestType) throw new RequestValidationError("Type de demande introuvable.");
  try { validationPath(requestType.requiredValidationLevel); }
  catch { throw new RequestValidationError("Le type de demande doit définir un niveau requis : paroisse, doyenné ou diocèse."); }
  const membership = await repository.findRequesterMembership(parsed.data.requesterId);
  if (!membership) throw new RequestValidationError("Le demandeur n'a pas de rattachement actif.");
  const scope = scopeForRequest(session, membership);
  if (!scope) throw new RequestForbiddenError("Seul un chef ou un administrateur autorisé peut créer cette demande.");
  const check = await authorize({ resourceCode: "DEMANDE", actionCode: "CREATE", targetScopeType: scope.type, targetScopeId: scope.id });
  if (!check.allowed) throw new RequestForbiddenError(check.reason);
  const existing = await repository.findExistingPendingRequest(parsed.data.requesterId, parsed.data.requestTypeId);
  if (existing) return existing;
  return repository.createRequest({ ...parsed.data, createdById: session.personId, createdByAccountId: session.accountId, requiredValidationLevel: requestType.requiredValidationLevel as ValidationLevel });
}

export async function listMyRequests(page: number, pageSize: number) {
  const session = await getSession();
  if (!session) throw new RequestForbiddenError("Connexion requise.");
  const [items, total] = await repository.listRequests(session.personId, (page - 1) * pageSize, pageSize);
  return { items, total };
}

export async function approveCertificateRequest(id: string) {
  const session = await getSession();
  if (!session) throw new RequestForbiddenError("Connexion requise.");
  const request = await repository.findRequestForApproval(id);
  if (!request) throw new RequestValidationError("Demande introuvable.");
  if (request.requesterId === session.personId) throw new RequestForbiddenError("Un demandeur ne peut pas valider sa propre demande.");
  const membership = request.requester.memberships[0];
  if (!membership) throw new RequestValidationError("Rattachement du demandeur introuvable.");
  let level: ValidationLevel;
  try { level = nextValidationLevel(request.status, request.requiredValidationLevel) as ValidationLevel; }
  catch { throw new RequestValidationError("Le circuit enregistré pour cette demande est invalide."); }
  if (!level) throw new RequestValidationError("Cette demande n'a plus d'étape de validation en attente.");
  ensureValidatorRole(session, level);
  const target = targetForValidation(level, membership);
  const check = await authorize({ resourceCode: "DEMANDE", actionCode: "VALIDATE", targetScopeType: target.type, targetScopeId: target.id });
  if (!check.allowed) throw new RequestForbiddenError(check.reason);
  const nextStatus = statusAfterApproval(level, request.requiredValidationLevel);
  const certificate = nextStatus === "APPROVED" && request.requestType.generatesCertificate
    ? await createCertificatePayload(id, request.requester.firstName, request.requester.lastName, request.requestType.name)
    : undefined;
  try {
    return { stage: nextStatus, request: await repository.approveAtLevel({
      id, expectedStatus: expectedStatusForLevel(level), nextStatus, level,
      nextLevel: nextValidationLevel(nextStatus, request.requiredValidationLevel),
      validatorId: session.personId, validatorAccountId: session.accountId, certificate,
    }) };
  } catch (error) {
    if (error instanceof Error && ["REQUEST_ALREADY_DECIDED", "REQUEST_STEP_NOT_PENDING"].includes(error.message)) throw new RequestValidationError("La demande vient d’être traitée par une autre personne. Actualisez la liste.");
    throw error;
  }
}

/** Dérogation diocésaine limitée à l'étape courante et aux cas sans validateur disponible après 72 h. */
export async function overrideCertificateRequest(id: string, raw: unknown) {
  const session = await getSession();
  if (!session) throw new RequestForbiddenError("Connexion requise.");
  const parsed = overrideCertificateRequestSchema.safeParse(raw);
  if (!parsed.success) throw new RequestValidationError(parsed.error.message);
  if (!session.roles.some((role) => role.roleCode === "SUPER_ADMIN" && role.scopeType === "DIOCESE")) {
    throw new RequestForbiddenError("Seul le SUPER_ADMIN diocésain peut utiliser cette dérogation.");
  }

  const request = await repository.findRequestForApproval(id);
  if (!request) throw new RequestValidationError("Demande introuvable.");
  if (request.requesterId === session.personId) throw new RequestForbiddenError("Un demandeur ne peut pas valider sa propre demande.");
  const membership = request.requester.memberships[0];
  if (!membership) throw new RequestValidationError("Rattachement du demandeur introuvable.");
  let level: ValidationLevel;
  try { level = nextValidationLevel(request.status, request.requiredValidationLevel) as ValidationLevel; }
  catch { throw new RequestValidationError("Le circuit enregistré pour cette demande est invalide."); }
  if (!level) throw new RequestValidationError("Cette demande n'a plus d'étape de validation en attente.");

  const target = targetForValidation(level, membership);
  const permission = await authorize({ resourceCode: "DEMANDE", actionCode: "VALIDATE", targetScopeType: target.type, targetScopeId: target.id });
  if (!permission.allowed) throw new RequestForbiddenError(permission.reason);
  const currentStep = request.validationSteps.find((step) => step.level === level && step.status === "PENDING");
  if (!currentStep) throw new RequestValidationError("L'étape courante n'est plus en attente.");
  const pendingForMs = Date.now() - currentStep.createdAt.getTime();
  if (!isOverrideDelayMet(currentStep.createdAt)) throw new RequestValidationError("La dérogation n'est possible qu'après 72 heures d'attente de l'étape courante.");
  if (await repository.hasActiveValidator(level, target)) throw new RequestForbiddenError("Un validateur actif existe pour cette étape et ce périmètre.");

  const nextStatus = statusAfterApproval(level, request.requiredValidationLevel);
  const certificate = nextStatus === "APPROVED" && request.requestType.generatesCertificate
    ? await createCertificatePayload(id, request.requester.firstName, request.requester.lastName, request.requestType.name)
    : undefined;
  try {
    return { stage: nextStatus, request: await repository.approveAtLevel({
      id,
      expectedStatus: expectedStatusForLevel(level),
      nextStatus,
      level,
      nextLevel: nextValidationLevel(nextStatus, request.requiredValidationLevel),
      validatorId: session.personId,
      validatorAccountId: session.accountId,
      override: {
        reason: parsed.data.reason,
        pendingForMs,
        targetScope: target,
        nextScope: nextValidationLevel(nextStatus, request.requiredValidationLevel)
          ? targetForValidation(nextValidationLevel(nextStatus, request.requiredValidationLevel) as ValidationLevel, membership)
          : null,
      },
      certificate,
    }) };
  } catch (error) {
    if (error instanceof Error && error.message === "OVERRIDE_DELAY_NOT_MET") throw new RequestValidationError("La dérogation n'est possible qu'après 72 heures d'attente de l'étape courante.");
    if (error instanceof Error && error.message === "OVERRIDE_VALIDATOR_AVAILABLE") throw new RequestForbiddenError("Un validateur actif existe pour cette étape et ce périmètre.");
    if (error instanceof Error && ["REQUEST_ALREADY_DECIDED", "REQUEST_STEP_NOT_PENDING"].includes(error.message)) throw new RequestValidationError("La demande vient d’être traitée par une autre personne. Actualisez la liste.");
    throw error;
  }
}

async function createCertificatePayload(requestId: string, firstName: string, lastName: string, requestTypeName: string) {
  const uniqueNumber = `DAL-${new Date().getUTCFullYear()}-${randomBytes(5).toString("hex").toUpperCase()}`;
  const verificationUrl = `${process.env.SITE_URL ?? "http://localhost:3000"}/verify/${uniqueNumber}`;
  const qrCode = await QRCode.toDataURL(verificationUrl, { errorCorrectionLevel: "M" });
  const contentSnapshot = { templateVersion: "attestation-v1" as const, requestTypeName, beneficiaryName: `${firstName} ${lastName}`, uniqueNumber, verificationUrl };
  const pdf = createCertificatePdf(contentSnapshot);
  return { uniqueNumber, qrCode, contentHash: createHash("sha256").update(pdf).digest("hex"), pdfUrl: `/api/requests/${requestId}/certificate`, templateUsed: contentSnapshot.templateVersion, contentSnapshot };
}

export async function rejectCertificateRequest(id: string, raw: unknown) {
  const session = await getSession();
  if (!session) throw new RequestForbiddenError("Connexion requise.");
  const parsed = rejectCertificateRequestSchema.safeParse(raw);
  if (!parsed.success) throw new RequestValidationError(parsed.error.message);
  const request = await repository.findRequestForApproval(id);
  if (!request) throw new RequestValidationError("Demande introuvable.");
  if (request.requesterId === session.personId) throw new RequestForbiddenError("Un demandeur ne peut pas rejeter sa propre demande.");
  const membership = request.requester.memberships[0];
  if (!membership) throw new RequestValidationError("Rattachement du demandeur introuvable.");
  let level: ValidationLevel;
  try { level = nextValidationLevel(request.status, request.requiredValidationLevel) as ValidationLevel; }
  catch { throw new RequestValidationError("Le circuit enregistré pour cette demande est invalide."); }
  if (!level) throw new RequestValidationError("Cette demande n'a plus d'étape de validation en attente.");
  ensureValidatorRole(session, level);
  const target = targetForValidation(level, membership);
  const check = await authorize({ resourceCode: "DEMANDE", actionCode: "REJECT", targetScopeType: target.type, targetScopeId: target.id });
  if (!check.allowed) throw new RequestForbiddenError(check.reason);
  try {
    return await repository.rejectRequest({ id, expectedStatus: expectedStatusForLevel(level), level, validatorId: session.personId, validatorAccountId: session.accountId, decisionNote: parsed.data.reason });
  } catch (error) {
    if (error instanceof Error && ["REQUEST_ALREADY_DECIDED", "REQUEST_STEP_NOT_PENDING"].includes(error.message)) throw new RequestValidationError("La demande vient d’être traitée par une autre personne. Actualisez la liste.");
    throw error;
  }
}
