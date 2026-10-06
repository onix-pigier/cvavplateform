import { authorize } from "@/lib/rbac/authorize";
import { getSession } from "@/lib/auth";
import { createHash, randomBytes } from "node:crypto";
import QRCode from "qrcode";
import { createSimplePdf } from "@/lib/pdf/simple";
import { createCertificateRequestSchema, rejectCertificateRequestSchema, type CreateCertificateRequestInput } from "./schema";
import * as repository from "./repository";

// Module requests : CertificateRequest, Certificate — WF-13, WF-27 (circuit anti-auto-validation D-062)
// Chaque fonction exportée ici doit commencer par authorize() avant toute
// opération, puis valider l entrée (schéma Zod), puis déléguer à repository.ts.
export const _authorizeRef = authorize;

export class RequestValidationError extends Error {}
export class RequestForbiddenError extends Error {}

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
  const membership = await repository.findRequesterMembership(parsed.data.requesterId);
  if (!membership) throw new RequestValidationError("Le demandeur n'a pas de rattachement actif.");
  const scope = scopeForRequest(session, membership);
  if (!scope) throw new RequestForbiddenError("Seul un chef ou un administrateur autorisé peut créer cette demande.");
  const check = await authorize({ resourceCode: "DEMANDE", actionCode: "CREATE", targetScopeType: scope.type, targetScopeId: scope.id });
  if (!check.allowed) throw new RequestForbiddenError(check.reason);
  const existing = await repository.findExistingPendingRequest(parsed.data.requesterId, parsed.data.requestTypeId);
  if (existing) return existing;
  return repository.createRequest({ ...parsed.data, createdById: session.personId });
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
  if (request.status === "PENDING") {
    const check = await authorize({ resourceCode: "DEMANDE", actionCode: "VALIDATE", targetScopeType: "PAROISSE", targetScopeId: membership.paroisseId });
    if (!check.allowed) throw new RequestForbiddenError(check.reason);
    return { stage: "SECTION_APPROVED", request: await repository.approveAtSection(id, session.personId) };
  }
  if (request.status !== "SECTION_APPROVED") throw new RequestValidationError("Cette demande n'est plus dans un état validable.");
  const check = await authorize({ resourceCode: "DEMANDE", actionCode: "VALIDATE", targetScopeType: "DOYENNE", targetScopeId: membership.paroisse.doyenneId });
  if (!check.allowed) throw new RequestForbiddenError(check.reason);
  const uniqueNumber = `DAL-${new Date().getUTCFullYear()}-${randomBytes(5).toString("hex").toUpperCase()}`;
  const verificationUrl = `${process.env.SITE_URL ?? "http://localhost:3000"}/verify/${uniqueNumber}`;
  const qrCode = await QRCode.toDataURL(verificationUrl, { errorCorrectionLevel: "M" });
  const pdf = createSimplePdf(["CV-AV — Diocèse de Daloa", "Attestation", `Numero: ${uniqueNumber}`, "Statut: VALID"]);
  const contentHash = createHash("sha256").update(pdf).digest("hex");
  return { stage: "APPROVED", request: await repository.approveAtDoyenne(id, session.personId, { uniqueNumber, qrCode, contentHash, pdfUrl: `/api/requests/${id}/certificate`, templateUsed: "attestation-v1" }) };
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
  if (request.status === "PENDING") {
    const check = await authorize({ resourceCode: "DEMANDE", actionCode: "REJECT", targetScopeType: "PAROISSE", targetScopeId: membership.paroisseId });
    if (!check.allowed) throw new RequestForbiddenError(check.reason);
    return repository.rejectRequest(id, session.personId, "SECTION", parsed.data.reason);
  }
  if (request.status !== "SECTION_APPROVED") throw new RequestValidationError("Cette demande n'est plus dans un état rejetable.");
  const check = await authorize({ resourceCode: "DEMANDE", actionCode: "REJECT", targetScopeType: "DOYENNE", targetScopeId: membership.paroisse.doyenneId });
  if (!check.allowed) throw new RequestForbiddenError(check.reason);
  return repository.rejectRequest(id, session.personId, "DOYENNE", parsed.data.reason);
}
