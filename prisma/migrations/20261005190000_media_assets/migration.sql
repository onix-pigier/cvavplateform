-- CreateEnum
CREATE TYPE "MediaKind" AS ENUM ('AVATAR', 'PHOTO', 'VIDEO', 'DOCUMENT');

-- CreateEnum
CREATE TYPE "MediaVisibility" AS ENUM ('PRIVATE', 'SCOPE', 'PUBLIC');

-- CreateTable
CREATE TABLE "media_assets" (
    "id" TEXT NOT NULL,
    "ownerPersonId" TEXT,
    "uploadedById" TEXT NOT NULL,
    "kind" "MediaKind" NOT NULL,
    "visibility" "MediaVisibility" NOT NULL DEFAULT 'PRIVATE',
    "storageProvider" TEXT NOT NULL,
    "objectKey" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "byteSize" BIGINT NOT NULL,
    "checksum" TEXT,
    "width" INTEGER,
    "height" INTEGER,
    "durationSeconds" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "media_assets_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "media_assets_objectKey_key" ON "media_assets"("objectKey");
CREATE INDEX "media_assets_ownerPersonId_idx" ON "media_assets"("ownerPersonId");
CREATE INDEX "media_assets_uploadedById_idx" ON "media_assets"("uploadedById");
CREATE INDEX "media_assets_kind_visibility_idx" ON "media_assets"("kind", "visibility");
ALTER TABLE "media_assets" ADD CONSTRAINT "media_assets_ownerPersonId_fkey" FOREIGN KEY ("ownerPersonId") REFERENCES "persons"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "media_assets" ADD CONSTRAINT "media_assets_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
