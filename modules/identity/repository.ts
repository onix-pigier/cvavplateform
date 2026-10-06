import { prisma } from "@/lib/prisma";

// Module identity : Person, Account, UserRole, Mandat, Grade — WF-01 à WF-08, WF-22
// Accès base de données uniquement — aucune règle métier ni contrôle RBAC
// ici (ça vit dans service.ts).
export const _prismaRef = prisma;

export function findPrivateProfile(accountId: string) {
  return prisma.account.findUnique({
    where: { id: accountId },
    select: {
      id: true,
      username: true,
      status: true,
      person: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          birthDate: true,
          sex: true,
          phone: true,
          email: true,
          status: true,
          gradeHistory: {
            where: { endedAt: null },
            orderBy: { obtainedAt: "desc" },
            take: 1,
            select: { obtainedAt: true, grade: { select: { code: true, name: true, category: true } } },
          },
          chefQualifications: {
            where: { endedAt: null },
            orderBy: { obtainedAt: "desc" },
            select: { code: true, obtainedAt: true },
          },
          memberships: {
            where: { isActive: true, endDate: null },
            orderBy: { startDate: "desc" },
            take: 1,
            select: {
              pastoralYear: true,
              paroisse: { select: { id: true, name: true, doyenne: { select: { id: true, name: true } } } },
              section: { select: { id: true, name: true } },
              team: { select: { id: true, name: true } },
            },
          },
        },
      },
      userRoles: {
        where: { endDate: null },
        select: { scopeType: true, scopeId: true, role: { select: { code: true } } },
      },
    },
  });
}
