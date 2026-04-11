// scripts/matrix-arkveld.js — genera data/matriz-arkveld.txt
// node scripts/matrix-arkveld.js
const fs = require('fs');

// ─── Datos de armas (copiados de data/weapons.js) ───────────────────────────
const WEAPONS = [
  { id: 'great-sword',   nombre: 'Gran Espada',     bloat: 4.8, tipo_dano: 'corte'     },
  { id: 'long-sword',    nombre: 'Espada Larga',    bloat: 3.3, tipo_dano: 'corte'     },
  { id: 'sword-shield',  nombre: 'Espada y Escudo', bloat: 1.4, tipo_dano: 'corte'     },
  { id: 'dual-blades',   nombre: 'Espadas Dobles',    bloat: 1.4, tipo_dano: 'corte'     },
  { id: 'hammer',        nombre: 'Martillo',         bloat: 5.2, tipo_dano: 'impacto'  },
  { id: 'hunting-horn',  nombre: 'Cornamusa',        bloat: 4.2, tipo_dano: 'impacto'  },
  { id: 'lance',         nombre: 'Lanza',            bloat: 2.3, tipo_dano: 'corte'    },
  { id: 'gunlance',      nombre: 'Lanza Pistola',   bloat: 2.3, tipo_dano: 'corte'    },
  { id: 'switch-axe',    nombre: 'Hacha Espada',    bloat: 3.5, tipo_dano: 'corte'    },
  { id: 'charge-blade',  nombre: 'Hacha Cargada',  bloat: 3.6, tipo_dano: 'corte'    },
  { id: 'insect-glaive', nombre: 'Glaive Insecto',  bloat: 3.1, tipo_dano: 'corte'    },
  { id: 'bow',           nombre: 'Arco',             bloat: 1.2, tipo_dano: 'proyectil'},
  { id: 'light-bowgun',  nombre: 'Ballesta Ligera', bloat: 1.3, tipo_dano: 'proyectil'},
  { id: 'heavy-bowgun',  nombre: 'Ballesta Pesada', bloat: 1.5, tipo_dano: 'proyectil'},
];

// ─── Cargar HITZONES (el fichero es JSON válido entre la primera { y última }) ──
const hzCode   = fs.readFileSync('data/hitzones.js', 'utf8');
const hzStart  = hzCode.indexOf('{');
const hzEnd    = hzCode.lastIndexOf('}') + 1;
const HITZONES = JSON.parse(hzCode.slice(hzStart, hzEnd));

// ─── Cargar MOTION_VALUES (mismo truco) ─────────────────────────────────────
const mvCode        = fs.readFileSync('data/motion-values.js', 'utf8');
const mvStart       = mvCode.indexOf('{');
const mvEnd         = mvCode.lastIndexOf('}') + 1;
const MOTION_VALUES = JSON.parse(mvCode.slice(mvStart, mvEnd));

// ─── Config ──────────────────────────────────────────────────────────────────
const TRUE_RAW = 100;   // Daño real normalizado — multiplica por tu daño real real
const SHARP    = 1.32;  // Filo blanco

// ─── Arkveld ─────────────────────────────────────────────────────────────────
const ark    = HITZONES['arkveld'];
const partes = Object.keys(ark);

const PARTE_ES = {
  'Head':'Cabeza','Neck':'Cuello','Back':'Lomo','Torso':'Torso',
  'Belly':'Vientre','Tail':'Cola','Tail Tip':'P.Cola',
  'Left Wing':'Ala Izq.','Right Wing':'Ala Der.',
  'Left Wingarm':'A-Bz Izq.','Right Wingarm':'A-Bz Der.',
  'Left Foreleg':'Pd.Izq.','Right Foreleg':'Pd.Der.',
  'Left Hind Leg':'Pt.Izq.','Right Hind Leg':'Pt.Der.',
  'Left Leg':'Pata Izq.','Right Leg':'Pata Der.',
  'Mantle':'Manto','Mouth':'Boca','Stinger':'Aguijón',
  'Left Claw':'Garra Izq.','Right Claw':'Garra Der.',
};

// ─── Calcular daño ────────────────────────────────────────────────────────────
const rows = WEAPONS.map(w => {
  const mvData = MOTION_VALUES[w.id] && MOTION_VALUES[w.id].raw;
  const avgMV  = mvData ? mvData.avg : 100;
  const minMV  = mvData ? mvData.min : 100;
  const maxMV  = mvData ? mvData.max : 100;
  const row    = { arma: w.nombre, avgMV, minMV, maxMV };
  for (const p of partes) {
    const hz   = ark[p].normal[w.tipo_dano] || 0;
    const base = TRUE_RAW * SHARP * (hz / 100);
    row[p]     = Math.round(base * (avgMV / 100));
    row[p+'_min'] = Math.round(base * (minMV / 100));
    row[p+'_max'] = Math.round(base * (maxMV / 100));
  }
  return row;
});

// ─── Render tabla de texto ────────────────────────────────────────────────────
const partLabels = partes.map(p => PARTE_ES[p] || p);

const W_ARMA = Math.max(18, ...rows.map(r => r.arma.length));
const W_MV   = 5;
const W_PART = partes.map((p, i) => Math.max(partLabels[i].length, 4));

const pad  = (s, n) => String(s).padStart(n);
const padL = (s, n) => String(s).padEnd(n);
const sep  = '─'.repeat(W_ARMA + 3 + W_MV + 3 + W_PART.reduce((a, b) => a + b + 3, 0));

let out = `MATRIZ DE DAÑO — ARKVELD (estado normal)\n`;
out += `Daño Real normalizado: ${TRUE_RAW}  |  Filo: Blanco ×${SHARP}\n`;
out += `Fórmula: Daño Real × Filo × (MV/100) × (Zona/100)\n`;
out += `Para tu arma: multiplica el daño por (tu_daño_real / ${TRUE_RAW})\n\n`;
out += sep + '\n';

let header = padL('Arma', W_ARMA) + ' │ ' + pad('MV⌀', W_MV);
partes.forEach((p, i) => { header += ' │ ' + pad(partLabels[i], W_PART[i]); });
out += header + '\n' + sep + '\n';

for (const r of rows) {
  let line = padL(r.arma, W_ARMA) + ' │ ' + pad(r.avgMV, W_MV);
  partes.forEach((p, i) => { line += ' │ ' + pad(r[p], W_PART[i]); });
  out += line + '\n';
}
out += sep + '\n';

out += '\nMEJOR ARMA POR PARTE (mayor daño medio):\n';
for (const p of partes) {
  const best = rows.reduce((a, b) => a[p] >= b[p] ? a : b);
  const label = (PARTE_ES[p] || p).padEnd(14);
  out += `  ${label}: ${best.arma.padEnd(W_ARMA)} ${best[p]}  [rango ${best[p+'_min']}–${best[p+'_max']}]\n`;
}

out += '\nRANGO MÍN–MÁX POR ARMA (parte más débil: Cabeza):\n';
const headParte = partes.find(p => p === 'Head') || partes[0];
for (const r of rows) {
  out += `  ${padL(r.arma, W_ARMA)}: ${pad(r[headParte+'_min'],4)} – ${pad(r[headParte+'_max'],4)}  (media: ${r[headParte]})\n`;
}

// ─── Guardar ─────────────────────────────────────────────────────────────────
fs.writeFileSync('data/matriz-arkveld.txt', out, 'utf8');
console.log(out);
console.log('Guardado en: data/matriz-arkveld.txt');
