// Script para extraer datos de hitzones de los HTMLs scrapeados
// Ejecutar con: node scripts/extract-hitzones.js

const fs = require('fs');
const path = require('path');

const HTML_DIR = path.join(__dirname, '..', 'monstruos-html');
const OUTPUT   = path.join(__dirname, '..', 'data', 'hitzones.js');

// Monstruos a omitir (no están en monsters.js)
const SKIP = new Set(['high-purrformance-barrel-puncher']);

// Columnas de la tabla de hitzones (índice 0=parte, 1=variante, 2..10=valores)
const COLS = ['corte', 'impacto', 'proyectil', 'fuego', 'agua', 'rayo', 'hielo', 'dragon', 'aturdido'];

function extractTable(content) {
  // La tabla de hitzones es la segunda tabla del documento (índice 1)
  const tables = [...content.matchAll(/<table[^>]*>([\s\S]*?)<\/table>/g)];
  if (tables.length < 2) return null;

  const tableHtml = tables[1][0];
  const rows = [...tableHtml.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)];

  const parts = {};

  for (const rowMatch of rows) {
    const cells = [...rowMatch[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g)];
    const vals  = cells.map(c => c[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());

    if (vals.length < 11 || vals[2] === '') continue;

    const partName = vals[0];
    const variant  = vals[1];
    if (!partName) continue;

    const nums = vals.slice(2, 11).map(Number);
    const entry = {};
    COLS.forEach((col, i) => { entry[col] = nums[i]; });

    if (!parts[partName]) parts[partName] = {};

    if (variant === 'Wounds') {
      parts[partName].herida = entry;
    } else if (variant === 'Weak Point') {
      parts[partName].punto_debil = entry;
    } else {
      parts[partName].normal = entry;
    }
  }

  return parts;
}

const result = {};
const files  = fs.readdirSync(HTML_DIR).filter(f => f.endsWith('.html'));

for (const file of files) {
  const slug = file.replace('.html', '');
  if (SKIP.has(slug)) { console.log('SKIP:', slug); continue; }

  const monsterId = ID_MAP[slug] || slug;
  const content   = fs.readFileSync(path.join(HTML_DIR, file), 'utf-8');
  const parts     = extractTable(content);

  if (!parts || Object.keys(parts).length === 0) {
    console.warn('WARN: sin datos para', slug);
    continue;
  }

  result[monsterId] = parts;
  console.log('OK:', monsterId, '→', Object.keys(parts).length, 'partes');
}

const output = `// Datos de hitzones extraídos de monstruos-html/
// Columnas: corte, impacto, proyectil, fuego, agua, rayo, hielo, dragon, aturdido
// Variantes por parte: normal, herida, punto_debil
const HITZONES = ${JSON.stringify(result, null, 2)};
`;

fs.writeFileSync(OUTPUT, output, 'utf-8');
console.log('\nGenerado:', OUTPUT);
console.log('Monstruos procesados:', Object.keys(result).length);
