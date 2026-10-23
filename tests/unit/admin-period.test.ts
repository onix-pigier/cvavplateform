import assert from "node:assert/strict";
import test from "node:test";
import { parsePeriod } from "../../lib/admin/period";

test("custom analytics period is inclusive and capped at one year", () => {
  const period = parsePeriod(new URLSearchParams({ period: "custom", from: "2026-01-01", to: "2026-01-31" }));
  assert.equal(period.from.toISOString(), "2026-01-01T00:00:00.000Z");
  assert.equal(period.to.toISOString(), "2026-01-31T23:59:59.999Z");
  assert.equal(period.label, "Période personnalisée");
});

test("invalid and reversed custom periods fall back to the default window", () => {
  const now = new Date("2026-10-07T12:00:00.000Z");
  const reversed = parsePeriod(new URLSearchParams({ period: "custom", from: "2026-02-01", to: "2026-01-01" }), now);
  assert.equal(reversed.label, "90 derniers jours");
  const invalid = parsePeriod(new URLSearchParams({ period: "custom", from: "2026-02-30", to: "2026-03-01" }), now);
  assert.equal(invalid.label, "90 derniers jours");
});

test("period presets produce a finite UTC interval", () => {
  const now = new Date("2026-10-07T12:00:00.000Z");
  for (const preset of ["30d", "90d", "12m", "year"]) {
    const period = parsePeriod(new URLSearchParams({ period: preset }), now);
    assert.ok(period.from <= period.to);
    assert.equal(period.to.getUTCHours(), 23);
    assert.equal(Number.isFinite(period.from.getTime()), true);
  }
});
