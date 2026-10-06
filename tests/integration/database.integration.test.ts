import test from "node:test";
import assert from "node:assert/strict";

const integrationTest = process.env.TEST_DATABASE_URL ? test : test.skip;

integrationTest("API Prisma ↔ PostgreSQL répond et expose les référentiels", async () => {
  process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;
  const { prisma } = await import("../../lib/prisma");
  try {
    const result = await prisma.$queryRaw<Array<{ ok: number }>>`SELECT 1 AS ok`;
    assert.equal(Number(result[0]?.ok), 1);
    assert.ok((await prisma.activityType.count()) >= 0);
    assert.ok((await prisma.requestType.count()) >= 0);
  } finally {
    await prisma.$disconnect();
  }
});
