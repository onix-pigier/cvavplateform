import QRCode, { type BitMatrix } from "qrcode";

export type CertificatePdfSnapshot = {
  templateVersion: "attestation-v1";
  requestTypeName: string;
  beneficiaryName: string;
  uniqueNumber: string;
  verificationUrl: string;
};

function pdfText(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "?").replace(/[\\()]/g, "\\$&");
}

/** PDF minimal et déterministe pour le mode sans moteur Chromium. */
export function createSimplePdf(lines: string[], qrMatrix?: BitMatrix) {
  const textCommands = ["BT", "/F1 16 Tf", "72 760 Td", ...lines.flatMap((line, index) => [index === 0 ? `(${pdfText(line)}) Tj` : `0 -28 Td (${pdfText(line)}) Tj`]), "ET"];
  const qrCommands: string[] = [];
  if (qrMatrix) {
    const box = 120;
    const quietZone = 4;
    const cell = box / (qrMatrix.size + quietZone * 2);
    const originX = 420;
    const originY = 92;
    qrCommands.push(`1 1 1 rg ${originX} ${originY} ${box} ${box} re f`, "0 0 0 rg");
    for (let row = 0; row < qrMatrix.size; row++) {
      for (let column = 0; column < qrMatrix.size; column++) {
        if (qrMatrix.get(row, column)) {
          const x = originX + (column + quietZone) * cell;
          const y = originY + (qrMatrix.size - row - 1 + quietZone) * cell;
          qrCommands.push(`${x.toFixed(3)} ${y.toFixed(3)} ${cell.toFixed(3)} ${cell.toFixed(3)} re f`);
        }
      }
    }
  }
  const commands = [...textCommands, ...qrCommands].join("\n");
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${Buffer.byteLength(commands, "latin1")} >>\nstream\n${commands}\nendstream`,
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => { offsets.push(Buffer.byteLength(pdf, "latin1")); pdf += `${index + 1} 0 obj\n${object}\nendobj\n`; });
  const xrefOffset = Buffer.byteLength(pdf, "latin1");
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.slice(1).map((offset) => `${String(offset).padStart(10, "0")} 00000 n `).join("\n")}\ntrailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return Buffer.from(pdf, "latin1");
}

/** Attestation V1 : le QR vectoriel et les données figées font partie du PDF haché. */
export function createCertificatePdf(snapshot: CertificatePdfSnapshot) {
  const lines = ["CV-AV — Diocèse de Daloa", snapshot.requestTypeName, `Beneficiaire: ${snapshot.beneficiaryName}`, `Numero: ${snapshot.uniqueNumber}`, "Verification publique: scanner le QR"];
  const matrix = QRCode.create(snapshot.verificationUrl, { errorCorrectionLevel: "M" }).modules;
  return createSimplePdf(lines, matrix);
}
