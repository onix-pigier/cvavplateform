async function main() {
  const baseUrl = process.env.LOAD_URL;
  const allow = process.env.ALLOW_LOAD_TEST === "YES";
  const targetUrl = baseUrl ?? "";

  if (!baseUrl || !allow) {
    console.error("Définir LOAD_URL et ALLOW_LOAD_TEST=YES avant un test de charge.");
    process.exitCode = 2;
    return;
  }

  const args = new Map(process.argv.slice(2).map((value) => {
    const [key, raw] = value.replace(/^--/, "").split("=");
    return [key, Number(raw)];
  }));
  const total = args.get("total") || 1000;
  const concurrency = Math.min(args.get("concurrency") || 100, total);
  const timeoutMs = Number(process.env.LOAD_TIMEOUT_MS ?? 30_000);
  const started = performance.now();
  let cursor = 0;
  let failures = 0;
  let connectionFailures = 0;
  let httpFailures = 0;
  const statusCounts: Record<string, number> = {};
  const durations: number[] = [];

  async function worker() {
    while (true) {
      const index = cursor++;
      if (index >= total) return;
      const start = performance.now();
      try {
        const response = await fetch(targetUrl, { signal: AbortSignal.timeout(timeoutMs) });
        statusCounts[String(response.status)] = (statusCounts[String(response.status)] ?? 0) + 1;
        if (!response.ok) {
          failures += 1;
          httpFailures += 1;
        }
        await response.arrayBuffer();
      } catch {
        failures += 1;
        connectionFailures += 1;
      } finally {
        durations.push(performance.now() - start);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, worker));
  durations.sort((a, b) => a - b);
  const p95 = durations[Math.min(durations.length - 1, Math.floor(durations.length * 0.95))] ?? 0;
  console.log(JSON.stringify({ url: baseUrl, total, concurrency, timeoutMs, failures, connectionFailures, httpFailures, statusCounts, elapsedMs: Math.round(performance.now() - started), p95Ms: Math.round(p95) }));
  if (failures > 0) process.exitCode = 1;
}

void main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
