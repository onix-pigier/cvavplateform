import { z } from "zod";

export const mediaUploadSchema = z.object({
  kind: z.enum(["AVATAR", "PHOTO", "VIDEO", "DOCUMENT"]),
  mimeType: z.string().min(3).max(100),
  byteSize: z.number().int().positive(),
  ownerPersonId: z.string().optional(),
}).strict();

const allowedMimeTypes = new Set([
  "image/jpeg", "image/png", "image/webp", "image/avif",
  "video/mp4", "video/webm", "application/pdf",
]);

const maxBytesByKind = {
  AVATAR: 5 * 1024 * 1024,
  PHOTO: 10 * 1024 * 1024,
  VIDEO: 250 * 1024 * 1024,
  DOCUMENT: 20 * 1024 * 1024,
} as const;

export function validateMediaUpload(input: unknown) {
  const parsed = mediaUploadSchema.safeParse(input);
  if (!parsed.success) return { ok: false as const, message: parsed.error.message };
  if (!allowedMimeTypes.has(parsed.data.mimeType)) return { ok: false as const, message: "Type de fichier non autorisé." };
  if (parsed.data.kind === "AVATAR" && !parsed.data.mimeType.startsWith("image/")) return { ok: false as const, message: "Un avatar doit être une image." };
  if (parsed.data.kind === "VIDEO" && !parsed.data.mimeType.startsWith("video/")) return { ok: false as const, message: "Cette ressource doit être une vidéo." };
  if (parsed.data.byteSize > maxBytesByKind[parsed.data.kind]) return { ok: false as const, message: "Fichier trop volumineux." };
  return { ok: true as const, data: parsed.data };
}
