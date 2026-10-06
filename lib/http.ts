import { NextResponse } from "next/server";
import { incrementMetric } from "./metrics";

export function requestId(request?: Request) {
  return request?.headers.get("x-request-id") ?? crypto.randomUUID();
}

export function jsonData<T>(data: T, meta?: Record<string, unknown>, init?: ResponseInit) {
  incrementMetric("http.response.success");
  return NextResponse.json({ data, ...(meta ? { meta } : {}) }, { ...init, headers: { "x-request-id": requestId(), ...init?.headers } });
}

export function jsonError(code: string, message: string, status = 400, request?: Request) {
  incrementMetric(`http.error.${code}`);
  const id = requestId(request);
  return NextResponse.json({ error: { code, message, requestId: id } }, { status, headers: { "x-request-id": id, "Cache-Control": "no-store" } });
}

export const FORBIDDEN = () => jsonError("FORBIDDEN_SCOPE", "Action non autorisée sur ce périmètre.", 403);
export const UNAUTHENTICATED = () => jsonError("UNAUTHENTICATED", "Connexion requise.", 401);

export function parsePagination(searchParams: URLSearchParams, defaults = { page: 1, pageSize: 20 }) {
  const page = Math.max(1, Number.parseInt(searchParams.get("page") ?? String(defaults.page), 10) || defaults.page);
  const pageSize = Math.min(100, Math.max(1, Number.parseInt(searchParams.get("pageSize") ?? String(defaults.pageSize), 10) || defaults.pageSize));
  return { page, pageSize, skip: (page - 1) * pageSize, take: pageSize };
}

export function paginationMeta(page: number, pageSize: number, total: number) {
  return { page, pageSize, total, pageCount: Math.ceil(total / pageSize), hasNextPage: page * pageSize < total };
}
