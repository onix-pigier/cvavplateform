export interface PrivateObjectStorage {
  createUploadUrl(input: { objectKey: string; mimeType: string; byteSize: number; expiresInSeconds: number }): Promise<{ uploadUrl: string; objectKey: string }>;
  createDownloadUrl(input: { objectKey: string; expiresInSeconds: number }): Promise<string>;
  deleteObject(objectKey: string): Promise<void>;
}
