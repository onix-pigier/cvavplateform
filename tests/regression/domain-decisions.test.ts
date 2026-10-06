import test from "node:test";
import assert from "node:assert/strict";
import { ChefQualificationCode, GradeCategory } from "../../lib/generated/prisma/client";
import { v1ScreenSlugs } from "../../components/ecrans/v1";

test("les décisions métier Vol00-C restent protégées", () => {
  assert.deepEqual(Object.values(ChefQualificationCode), ["AA", "AC", "AP", "APHG"]);
  assert.deepEqual(Object.values(GradeCategory), ["MILITANT", "MENEUR", "CHEF"]);
});

test("la galerie n'expose pas les 359 écrans comme fonctionnalités actives", () => {
  assert.equal(v1ScreenSlugs.size, 7);
});
