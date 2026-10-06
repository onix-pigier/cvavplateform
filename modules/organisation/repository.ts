import { prisma } from "@/lib/prisma";
import type { CreateParoisseInput } from "./schema";

export function listParoisses(doyenneId?: string) {
  return prisma.paroisse.findMany({
    where: doyenneId ? { doyenneId } : undefined,
    include: { doyenne: true, ville: true },
    orderBy: { name: "asc" },
  });
}

export function createParoisse(input: CreateParoisseInput) {
  return prisma.paroisse.create({ data: input });
}

export function listDoyennesByDiocese(dioceseId: string) {
  return prisma.doyenne.findMany({
    where: { dioceseId, isActive: true },
    include: { paroisses: { where: { isActive: true }, include: { ville: true } } },
    orderBy: { name: "asc" },
  });
}
