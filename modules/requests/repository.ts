import { prisma } from "@/lib/prisma";
import type { CreateCertificateRequestInput } from "./schema";

// Module requests : CertificateRequest, Certificate — WF-13, WF-27 (circuit anti-auto-validation D-062)
// Accès base de données uniquement — aucune règle métier ni contrôle RBAC
// ici (ça vit dans service.ts).
export const _prismaRef = prisma;

export function findRequestType(id: string) {
  return prisma.requestType.findUnique({ where: { id } });
}

export function findRequesterMembership(personId: string) {
  return prisma.membership.findFirst({
    where: { personId, isActive: true, endDate: null },
    include: { paroisse: { select: { id: true, doyenneId: true, doyenne: { select: { dioceseId: true } } } }, team: { select: { id: true } } },
    orderBy: { startDate: "desc" },
  });
}

export function findExistingPendingRequest(requesterId: string, requestTypeId: string) {
  return prisma.certificateRequest.findFirst({
    where: { requesterId, requestTypeId, status: { in: ["PENDING", "SECTION_APPROVED"] } },
    include: { requestType: true, certificate: true },
    orderBy: { createdAt: "desc" },
  });
}

export function createRequest(input: CreateCertificateRequestInput & { createdById: string }) {
  return prisma.certificateRequest.create({
    data: { requestTypeId: input.requestTypeId, requesterId: input.requesterId, createdById: input.createdById },
    include: { requestType: true, requester: { select: { id: true, firstName: true, lastName: true } }, certificate: true },
  });
}

export function listRequests(personId: string, skip: number, take: number) {
  return Promise.all([
    prisma.certificateRequest.findMany({
      where: { OR: [{ requesterId: personId }, { createdById: personId }] },
      include: { requestType: true, requester: { select: { id: true, firstName: true, lastName: true } }, certificate: true },
      orderBy: { createdAt: "desc" }, skip, take,
    }),
    prisma.certificateRequest.count({ where: { OR: [{ requesterId: personId }, { createdById: personId }] } }),
  ]);
}

export function findRequestForApproval(id: string) {
  return prisma.certificateRequest.findUnique({
    where: { id },
    include: {
      requestType: true,
      requester: { include: { memberships: { where: { isActive: true, endDate: null }, include: { paroisse: true, team: true }, take: 1 } } },
      certificate: true,
    },
  });
}

export function approveAtSection(id: string, validatorId: string) {
  return prisma.certificateRequest.update({ where: { id }, data: { status: "SECTION_APPROVED", level1ValidatorId: validatorId } });
}

export function approveAtDoyenne(id: string, validatorId: string, certificate: { uniqueNumber: string; qrCode: string; contentHash: string; pdfUrl: string; templateUsed: string }) {
  return prisma.$transaction(async (tx) => {
    const updated = await tx.certificateRequest.update({ where: { id }, data: { status: "APPROVED", level2ValidatorId: validatorId, closedAt: new Date() } });
    await tx.certificate.create({ data: { certificateRequestId: id, ...certificate } });
    return updated;
  });
}

export function rejectRequest(id: string, validatorId: string, level: "SECTION" | "DOYENNE", decisionNote: string) {
  return prisma.certificateRequest.update({
    where: { id },
    data: level === "SECTION" ? { status: "REJECTED", level1ValidatorId: validatorId, decisionNote, closedAt: new Date() } : { status: "REJECTED", level2ValidatorId: validatorId, decisionNote, closedAt: new Date() },
  });
}

export function findCertificateByNumber(uniqueNumber: string) {
  return prisma.certificate.findUnique({ where: { uniqueNumber }, select: { uniqueNumber: true, status: true, generatedAt: true, hashAlgorithm: true, contentHash: true } });
}

export function findCertificateForDownload(requestId: string) {
  return prisma.certificate.findUnique({
    where: { certificateRequestId: requestId },
    select: {
      uniqueNumber: true,
      status: true,
      generatedAt: true,
      contentHash: true,
      certificateRequest: { select: { requesterId: true, createdById: true } },
    },
  });
}
