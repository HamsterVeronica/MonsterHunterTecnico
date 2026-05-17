// Genera data/monsters.js desde data/monsters.json
// Uso: node scripts/generate-monsters-js.js

const fs   = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'data', 'monsters.json'), 'utf8'));

const out = `const MONSTERS = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(path.join(root, 'data', 'monsters.js'), out, 'utf8');
console.log(`✓ Generados ${data.length} monstruos → data/monsters.js`);
