import "dotenv/config";
import { defineConfig, env } from "prisma/config";

/**
 * Configuration Prisma CLI (obligatoire en Prisma 7).
 *
 * L'URL de connexion ne se trouve plus dans prisma/schema.prisma mais ici.
 * `dotenv` charge le .env du projet pour le CLI comme pour le seed.
 */
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
