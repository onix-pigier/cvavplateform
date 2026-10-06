import { prisma } from "@/lib/prisma";

export const DALOA_DIOCESE_ID = "diocese-daloa";

export async function getPublicDirectory() {
  return prisma.doyenne.findMany({
    where: { dioceseId: DALOA_DIOCESE_ID, isActive: true },
    include: {
      paroisses: {
        where: { isActive: true },
        include: {
          ville: true,
          sections: {
            where: { isActive: true },
            include: {
              teams: {
                where: { isActive: true },
                include: {
                  leaderships: {
                    orderBy: { pastoralYear: "desc" },
                    include: { person: { select: { id: true, firstName: true, lastName: true, status: true } } },
                  },
                },
                orderBy: { name: "asc" },
              },
            },
            orderBy: { name: "asc" },
          },
        },
        orderBy: [{ name: "asc" }],
      },
    },
    orderBy: { name: "asc" },
  });
}

export async function getPublicDoyenne(id: string) {
  return prisma.doyenne.findFirst({
    where: { id, dioceseId: DALOA_DIOCESE_ID, isActive: true },
    include: {
      diocese: true,
      paroisses: {
        where: { isActive: true },
        include: {
          ville: true,
          sections: {
            where: { isActive: true },
            include: {
              teams: {
                where: { isActive: true },
                include: {
                  leaderships: {
                    orderBy: { pastoralYear: "desc" },
                    include: { person: { select: { id: true, firstName: true, lastName: true, status: true } } },
                  },
                },
                orderBy: { name: "asc" },
              },
            },
            orderBy: { name: "asc" },
          },
        },
        orderBy: { name: "asc" },
      },
    },
  });
}

export async function getPublicParoisse(id: string) {
  const paroisse = await prisma.paroisse.findFirst({
    where: { id, isActive: true, doyenne: { dioceseId: DALOA_DIOCESE_ID, isActive: true } },
    include: {
      ville: true,
      doyenne: { include: { diocese: true } },
      sections: {
        where: { isActive: true },
        include: {
          teams: {
            where: { isActive: true },
            include: {
              leaderships: {
                orderBy: { pastoralYear: "desc" },
                include: { person: { select: { id: true, firstName: true, lastName: true, status: true } } },
              },
            },
            orderBy: { name: "asc" },
          },
        },
        orderBy: { name: "asc" },
      },
    },
  });

  if (!paroisse) return null;

  const activities = await prisma.activity.findMany({
    where: {
      scopeType: "PAROISSE",
      scopeId: paroisse.id,
      status: { in: ["PLANNED", "ONGOING", "COMPLETED"] },
    },
    include: { activityType: true },
    orderBy: { startDate: "desc" },
    take: 12,
  });

  return { ...paroisse, activities };
}
