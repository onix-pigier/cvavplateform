import test from "node:test";
import assert from "node:assert/strict";

const baseUrl = process.env.TEST_BASE_URL;
const functionalTest = baseUrl ? test : test.skip;

for (const path of ["/", "/paroisses", "/robots.txt", "/sitemap.xml"]) {
  functionalTest(`le parcours public répond sur ${path}`, async () => {
    const response = await fetch(`${baseUrl}${path}`);
    assert.equal(response.status, 200);
    assert.ok((await response.text()).length > 0);
  });
}
