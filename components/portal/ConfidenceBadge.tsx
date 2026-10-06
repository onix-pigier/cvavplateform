import type { DataConfidence } from "@/lib/generated/prisma/client";

const labels: Record<DataConfidence, { label: string; className: string }> = {
  CONFIRMED_CURRENT: { label: "Confirmé 2026", className: "bg-emerald-50 text-emerald-800" },
  OFFICIAL_HISTORICAL: { label: "Document officiel historique", className: "bg-blue-50 text-blue-800" },
  HISTORICAL_TO_VERIFY: { label: "Historique à recouper", className: "bg-amber-50 text-amber-900" },
  TO_DOCUMENT: { label: "À documenter", className: "bg-slate-100 text-slate-700" },
};

export function ConfidenceBadge({ confidence }: { confidence: DataConfidence }) {
  const item = labels[confidence];
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${item.className}`}>{item.label}</span>;
}
