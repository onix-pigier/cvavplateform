type Metric = { count: number; lastAt: string };

const metrics = new Map<string, Metric>();

/**
 * Compteurs locaux utiles en développement et comme adaptateur minimal.
 * En production, exporter ces événements vers OpenTelemetry/Prometheus : un
 * processus Next horizontalement répliqué ne doit pas être la source unique
 * des métriques.
 */
export function incrementMetric(name: string) {
  const current = metrics.get(name);
  metrics.set(name, { count: (current?.count ?? 0) + 1, lastAt: new Date().toISOString() });
}

export function getMetricsSnapshot() {
  return Object.fromEntries(metrics.entries());
}
