import { prisma } from "@/lib/prisma";

// Module finance : FeeGrid, Contribution, Payment, FinancialTransaction — WF-11, WF-12, WF-30
// Accès base de données uniquement — aucune règle métier ni contrôle RBAC
// ici (ça vit dans service.ts).
export const _prismaRef = prisma;

export function listContributions(personId: string, pastoralYear?: string) {
  return prisma.contribution.findMany({
    where: { personId, ...(pastoralYear ? { pastoralYear } : {}) },
    orderBy: [{ pastoralYear: "desc" }, { createdAt: "desc" }],
    select: {
      id: true, pastoralYear: true, gradeOrQualificationCode: true,
      expectedAmount: true, paidAmount: true, status: true,
      payments: { orderBy: { paidAt: "desc" }, select: { id: true, amount: true, paidAt: true, method: true, receiptNumber: true } },
    },
  });
}
