import { chromium, type Browser, type BrowserContext, type Page } from "@playwright/test";
import { mkdtemp, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

export async function openChromePage(initialUrl: string) {
  const browser: Browser = await chromium.launch({
    headless: true,
    executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ?? process.env.CHROME_BIN ?? "/usr/bin/google-chrome",
  });
  const context: BrowserContext = await browser.newContext();
  await context.tracing.start({ screenshots: true, snapshots: true, sources: true });
  const page: Page = await context.newPage();
  page.on("pageerror", (error) => process.stderr.write(`[Playwright pageerror] ${error.message}\n`));
  page.on("requestfailed", (request) => process.stderr.write(`[Playwright requestfailed] ${request.method()} ${request.url()} ${request.failure()?.errorText ?? ""}\n`));
  try {
    await page.goto(initialUrl, { waitUntil: "domcontentloaded" });
  } catch (error) {
    const traceDir = await mkdtemp(join(tmpdir(), "cvav-playwright-prereg-trace-"));
    const tracePath = join(traceDir, "trace.zip");
    await context.tracing.stop({ path: tracePath });
    await context.close();
    await browser.close();
    process.stderr.write(`[Playwright trace] ${tracePath}\n`);
    throw error;
  }

  return {
    async evaluate<T = unknown>(expression: string): Promise<T> {
      return await page.evaluate(expression) as T;
    },
    async navigate(url: string) {
      await page.goto(url, { waitUntil: "domcontentloaded" });
    },
    async waitForText(text: string, timeoutMs = 15_000) {
      try {
        await page.waitForFunction((expected) => document.body?.innerText.includes(expected) ?? false, text, { timeout: timeoutMs });
      } catch {
        const body = (await page.locator("body").innerText().catch(() => "")).replace(/\s+/g, " ");
        throw new Error(`Texte attendu absent après ${timeoutMs} ms : ${text}. URL=${page.url()} Écran=${body.slice(0, 1400)}`);
      }
      return page.locator("body").innerText();
    },
    async waitForHydration(timeoutMs = 10_000) {
      await page.locator("form").first().waitFor({ state: "visible", timeout: timeoutMs });
      await page.waitForFunction(
        () => Object.keys(document.querySelector("form") ?? {}).some((key) => key.startsWith("__reactProps")),
        undefined,
        { timeout: timeoutMs },
      );
    },
    async close(preserveTrace = false) {
      if (preserveTrace) {
        const traceDir = await mkdtemp(join(tmpdir(), "cvav-playwright-prereg-trace-"));
        const tracePath = join(traceDir, "trace.zip");
        await context.tracing.stop({ path: tracePath });
        process.stderr.write(`[Playwright trace] ${tracePath}\n`);
      } else {
        await context.tracing.stop();
      }
      await context.close();
      await browser.close();
    },
  };
}
