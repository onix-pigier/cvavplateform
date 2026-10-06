import "server-only";

type LogContext = Record<string, unknown>;

function sanitize(value: unknown): unknown {
  if (typeof value === "bigint") return value.toString();
  if (value instanceof Error) return { name: value.name, message: value.message, stack: value.stack };
  if (Array.isArray(value)) return value.map(sanitize);
  if (value && typeof value === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value)) {
      result[key] = /password|token|secret|authorization|cookie|phone|email/i.test(key) ? "[REDACTED]" : sanitize(item);
    }
    return result;
  }
  return value;
}

function write(level: "info" | "warn" | "error", message: string, context: LogContext = {}) {
  const safeContext = sanitize(context);
  const record = JSON.stringify({ timestamp: new Date().toISOString(), level, service: "cvav-platform", environment: process.env.NODE_ENV, message, ...(safeContext && typeof safeContext === "object" ? safeContext : {}) });
  if (level === "error") console.error(record);
  else if (level === "warn") console.warn(record);
  else console.info(record);
}

export const logger = {
  info: (message: string, context?: LogContext) => write("info", message, context),
  warn: (message: string, context?: LogContext) => write("warn", message, context),
  error: (message: string, context?: LogContext) => write("error", message, context),
};
