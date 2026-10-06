import test from "node:test";
import assert from "node:assert/strict";
import { validateMediaUpload } from "../../lib/storage/policy";

test("accepte un avatar image dans la limite V1", () => {
  const result = validateMediaUpload({ kind: "AVATAR", mimeType: "image/jpeg", byteSize: 1024 });
  assert.equal(result.ok, true);
});

test("refuse une vidéo déclarée comme avatar", () => {
  const result = validateMediaUpload({ kind: "AVATAR", mimeType: "video/mp4", byteSize: 1024 });
  assert.equal(result.ok, false);
});

test("refuse un fichier qui dépasse la limite serveur", () => {
  const result = validateMediaUpload({ kind: "VIDEO", mimeType: "video/mp4", byteSize: 250 * 1024 * 1024 + 1 });
  assert.equal(result.ok, false);
});

test("refuse les champs inconnus", () => {
  const result = validateMediaUpload({ kind: "PHOTO", mimeType: "image/png", byteSize: 100, path: "../../secret" });
  assert.equal(result.ok, false);
});
