import test from "node:test";
import assert from "node:assert/strict";
import { paginationMeta, parsePagination } from "../../lib/http";

test("borne et normalise la pagination", () => {
  const result = parsePagination(new URLSearchParams("page=0&pageSize=1000"));
  assert.deepEqual(result, { page: 1, pageSize: 100, skip: 0, take: 100 });
});

test("calcule les métadonnées de pagination", () => {
  assert.deepEqual(paginationMeta(2, 20, 45), { page: 2, pageSize: 20, total: 45, pageCount: 3, hasNextPage: true });
});
