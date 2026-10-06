import { prisma } from "@/lib/prisma";
import { logger } from "@/lib/logger";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ status: "ready", database: "ok" }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    logger.error("readiness_check_failed", { error });
    return NextResponse.json({ status: "not_ready", database: "unavailable" }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
