const fs   = require('fs');
const path = require('path');

const MV_DIR  = path.join(__dirname, '..', 'data', 'mv-data');
const OUT_FILE = path.join(__dirname, '..', 'data', 'motion-values.js');

const WEAPON_CONFIGS = [
  { id: 'great-sword',   file: 'gran-espada-mv.csv',     elemCol: 5,  skipRows: 1 },
  { id: 'long-sword',    file: 'espada-larga-mv.csv',    elemCol: 3,  skipRows: 1 },
  { id: 'sword-shield',  file: 'espada-escudo-mv.csv',   elemCol: 5,  skipRows: 1 },
  { id: 'dual-blades',   file: 'dagas-dobles-mv.csv',    elemCol: 3,  skipRows: 1 },
  { id: 'hammer',        file: 'martillo-mv.csv',         elemCol: 5,  skipRows: 1 },
  { id: 'hunting-horn',  file: 'cornamusa-mv.csv',        elemCol: 5,  skipRows: 1 },
  { id: 'lance',         file: 'lanza-mv.csv',            elemCol: 5,  skipRows: 1 },
  { id: 'gunlance',      file: 'lanza-pistola-mv.csv',    elemCol: 3,  skipRows: 1 },
  { id: 'switch-axe',    file: 'hacha-espada-mv.csv',     elemCol: 3,  skipRows: 1 },
  { id: 'charge-blade',  file: 'espada-cargada-mv.csv',   elemCol: 5,  skipRows: 1 },
  { id: 'insect-glaive', file: 'glaive-insecto-mv.csv',   elemCol: 5,  skipRows: 1 },
  { id: 'bow',           file: 'arco-mv.csv',              elemCol: 3,  skipRows: 1 },
  { id: 'light-bowgun',  file: 'ballesta-ligera-mv.csv',  elemCol: null, skipRows: 2 },
  { id: 'heavy-bowgun',  file: 'ballesta-pesada-mv.csv',  elemCol: 2,  skipRows: 1 },
];

function parseCsvLine(line) {
  const result = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      result.push(cur.trim());
      cur = '';
    } else {
      cur += ch;
    }
  }
  result.push(cur.trim());
  return result;
}

function parseNum(val) {
  if (!val || val.includes('?') || val === '-' || val === '') return null;
  const num = parseFloat(val);
  return isNaN(num) ? null : num;
}

function stats(values) {
  if (values.length === 0) return { avg: 0, min: 0, max: 0, count: 0 };
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  return {
    avg:   Math.round(avg * 100) / 100,
    min:   Math.min(...values),
    max:   Math.max(...values),
    count: values.length,
  };
}

const MOTION_VALUES = {};

for (const cfg of WEAPON_CONFIGS) {
  const filepath = path.join(MV_DIR, cfg.file);
  const raw = fs.readFileSync(filepath, 'utf8');
  const lines = raw.split(/\r?\n/);

  const attacks = [];

  for (let i = cfg.skipRows; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const cols = parseCsvLine(line);
    const name = cols[0];
    if (!name || name === '' || name === '-') continue;

    const mv = parseNum(cols[1]);
    if (mv === null || mv <= 0) continue;

    if (name.startsWith('*') || name.startsWith('Kinsect attacks scale')) continue;

    const entry = { nombre: name, mv_raw: mv };

    if (cfg.elemCol !== null) {
      const elemVal = parseNum(cols[cfg.elemCol]);
      if (elemVal !== null && elemVal > 0) {
        entry.mv_elem = elemVal;
      }
    }

    attacks.push(entry);
  }

  const rawVals  = attacks.map(a => a.mv_raw);
  const elemVals = attacks.filter(a => a.mv_elem !== undefined).map(a => a.mv_elem);

  MOTION_VALUES[cfg.id] = {
    ataques:  attacks,
    raw:      stats(rawVals),
    elem:     elemVals.length > 0 ? stats(elemVals) : null,
  };

  console.log(`${cfg.id}: ${attacks.length} ataques, raw avg=${MOTION_VALUES[cfg.id].raw.avg} (min=${MOTION_VALUES[cfg.id].raw.min}, max=${MOTION_VALUES[cfg.id].raw.max})`);
}

const output = `// Generado automáticamente por scripts/extract-motion-values.js
// Motion Values por arma — todos los ataques con su MV y estadísticas (avg/min/max)
// Datos basados en investigación de la comunidad (pueden contener incertidumbre)

const MOTION_VALUES = ${JSON.stringify(MOTION_VALUES, null, 2)};
`;

fs.writeFileSync(OUT_FILE, output, 'utf8');
console.log(`\nEscrito: ${OUT_FILE}`);
