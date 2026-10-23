const MAX_RETRIES = 3;

function nestedErrorCodes(error: unknown, seen = new Set<unknown>()): Set<string> {
  if (!error || typeof error !== "object" || seen.has(error)) return new Set();
  seen.add(error);
  const record = error as Record<string, unknown>;
  const codes = new Set<string>();
  if (typeof record.code === "string") codes.add(record.code);
  for (const key of ["cause", "meta", "driverAdapterError", "originalError"]) {
    const child = record[key];
    for (const code of nestedErrorCodes(child, seen)) codes.add(code);
  }
  return codes;
}

export function isSerializationFailure(error: unknown): boolean {
  const codes = nestedErrorCodes(error);
  // PostgreSQL SQLSTATE 40001; Prisma reports serializable conflicts as P2034.
  return codes.has("40001") || codes.has("P2034");
}

export async function withSerializationRetry<T>(
  operation: () => Promise<T>,
  options: { maxRetries?: number; delay?: (retry: number) => Promise<void> } = {},
): Promise<T> {
  const maxRetries = options.maxRetries ?? MAX_RETRIES;
  const delay = options.delay ?? ((retry) => new Promise<void>((resolve) => setTimeout(resolve, 25 * 2 ** (retry - 1))));
  for (let attempt = 0; ; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      if (!isSerializationFailure(error) || attempt >= maxRetries) throw error;
      await delay(attempt + 1);
    }
  }
}
