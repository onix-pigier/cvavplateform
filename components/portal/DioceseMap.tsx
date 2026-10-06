export function DioceseMap() {
  const places = [
    ["Vavoua", 115, 70], ["Zuénoula", 335, 56], ["Gohitafla", 510, 84],
    ["Zoukougbeu", 95, 205], ["Daloa", 292, 188], ["Bouaflé", 505, 190],
    ["Issia", 170, 315], ["Saïoua", 320, 320], ["Sinfra", 470, 302],
  ] as const;

  return (
    <div className="rounded-[2rem] border border-outline-variant bg-surface-container-lowest p-5 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Le territoire</p>
          <h3 className="mt-3 font-display-lg text-display-lg text-primary">Le diocèse en repères.</h3>
        </div>
        <p className="max-w-sm text-sm leading-6 text-on-surface-variant">Un aperçu du découpage présenté dans le référentiel diocésain. L’annuaire détaille ensuite chaque paroisse.</p>
      </div>
      <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-outline-variant/70 bg-[#f7f4ed] p-3 sm:p-5">
        <svg viewBox="0 0 640 390" role="img" aria-label="Carte schématique du diocèse de Daloa et de ses principaux repères" className="h-auto w-full">
          <path d="M92 35 197 18 300 35 382 22 520 60 588 150 574 260 522 345 404 370 301 351 210 372 124 335 55 245 62 150Z" fill="none" stroke="#071a3b" strokeWidth="3" />
          <path d="M72 160 182 175 292 188 410 170 555 215M180 28 208 170 170 325M380 25 350 176 320 330M520 60 460 180 470 302" fill="none" stroke="#9a7b39" strokeDasharray="5 7" strokeWidth="1.5" />
          {places.map(([name, x, y]) => <g key={name}><circle cx={x} cy={y} r={name === "Daloa" ? 7 : 5} fill={name === "Daloa" ? "#b58124" : "#071a3b"} /><text x={x + 11} y={y + 4} fill="#071a3b" fontSize="14" fontWeight={name === "Daloa" ? "700" : "500"}>{name}</text></g>)}
          <text x="292" y="214" fill="#071a3b" fontSize="11" letterSpacing="2">CENTRE DIOCÉSAIN</text>
        </svg>
      </div>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-on-surface-variant"><span><i className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#b58124]" />Daloa</span><span><i className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-primary" />Repères territoriaux</span><span>Carte schématique, non destinée à la navigation.</span></div>
    </div>
  );
}
