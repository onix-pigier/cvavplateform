import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";

const publicFiles = [
  "app/(public)/paroisses/page.tsx",
  "components/portal/ParishCard.tsx",
  "components/portal/ActivityCarousel.tsx",
];

test("les pages publiques ne réintroduisent pas les motifs visuels exclus", async () => {
  const source = await Promise.all(publicFiles.map((file) => readFile(join(process.cwd(), file), "utf8")));
  const combined = source.join("\n");

  assert.doesNotMatch(combined, /gradient|glassmorphism|backdrop-blur|material-symbols/i);
});
