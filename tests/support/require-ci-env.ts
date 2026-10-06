const required = ["TEST_DATABASE_URL", "TEST_BASE_URL"];
const missing = required.filter((name) => !process.env[name]);
if (missing.length > 0) {
  console.error(`Variables manquantes pour la CI complète : ${missing.join(", ")}`);
  process.exit(2);
}
