// Combina data/monsters.json (datos del juego) con monsters.json (descripción, drops, tamaño)
// Salida: data/monsters.json actualizado
// Uso: node scripts/merge-monsters.js

const fs   = require('fs');
const path = require('path');

// ── Mapeo nombre inglés → id del proyecto ──────────────────────────────────
const NAME_TO_ID = {
  'Zoh Shia':                     'zoh-shia',
  'Doshaguma Guardián':           'guardian-doshaguma',
  'Rey Dau':                      'rey-dau',
  'Lala Barina':                  'lala-barina',
  'Congalala':                    'congalala',
  'Nerscylla':                    'nerscylla',
  'Gore Magala':                  'gore-magala',
  'Gravios':                      'gravios',
  'Arkveld Guardián':             'guardian-arkveld',
  'Quematrice':                   'quematrice',
  'Doshaguma':                    'doshaguma',
  'Balahara':                     'balahara',
  'Rathian':                      'rathian',
  'Chatacabra':                   'chatacabra',
  'Mizutsune':                    'mitzutsune',
  'Anjanath Fulgúreo Guardián':   'guardian-fulgur-anjanath',
  'Hirabami':                     'hirabami',
  'Yian Kut-Ku':                  'yian-kut-ku',
  'Rompopolo':                    'rompopolo',
  'Arkveld':                      'arkveld',
  'Ajarakan':                     'ajarakan',
  'Gypceros':                     'gypceros',
  'Xu Wu':                        'xu-wu',
  'Rathalos Guardián':            'guardian-rathalos',
  'Uth Duna':                     'uth-duna',
  'Jin Dahaad':                   'jin-dahaad',
  'Nu Udra':                      'nu-udra',
  'Odogaron Ébano Guardián':      'guardian-ebony-odogaron',
  'Rathalos':                     'rathalos',
  'Blangonga':                    'blangonga',
  'Lagiacrus':                    'lagiacrus',
  'Seregios':                     'seregios',
  'Omega Planetes':               'omega-planetes',
  'Gogmazios':                    'gogmazios',
};

// ── Traducción de tipos de drop ─────────────────────────────────────────────
const KIND_ES = {
  'target-reward':         'recompensa_caceria',
  'carve':                 'talla',
  'carve-rotten':          'talla_cuerpo_podrido',
  'wound-destroyed':       'herida_destruida',
  'carve-rotten-severed':  'talla_cola_podrida',
  'broken-part':           'parte_rota',
  'carve-severed':         'talla_cola',
};

// ── Simplifica rewards del nuevo JSON ──────────────────────────────────────
function simplifyRewards(rewards) {
  const drops = [];
  for (const r of rewards) {
    const item = r.item;
    const condiciones = r.conditions.map(c => {
      const entry = {
        tipo:         KIND_ES[c.kind] ?? c.kind,
        rango:        c.rank,
        cantidad:     c.quantity,
        probabilidad: c.chance,
      };
      if (c.part) entry.parte = c.part;
      return entry;
    });
    drops.push({
      nombre:   item.name,
      rareza:   item.rarity,
      condiciones,
    });
  }
  return drops;
}

// ── Carga archivos ──────────────────────────────────────────────────────────
const root    = path.join(__dirname, '..');
const oldData = JSON.parse(fs.readFileSync(path.join(root, 'data', 'monsters.json'), 'utf8'));
const newData = JSON.parse(fs.readFileSync(path.join(root, 'monsters.json'),        'utf8'));

// Lee tipo y capturable desde monsters.js (sintaxis JS, no JSON puro)
const jsRaw  = fs.readFileSync(path.join(root, 'data', 'monsters.js'), 'utf8');
// eslint-disable-next-line no-new-func
const jsData = new Function(`${jsRaw}; return MONSTERS;`)();
const jsById = Object.fromEntries(jsData.map(m => [m.id, m]));

// Indexa el nuevo archivo por id del proyecto
const newById = {};
for (const m of newData) {
  const id = NAME_TO_ID[m.name];
  if (!id) { console.warn('Sin mapeo para:', m.name); continue; }
  newById[id] = m;
}

// ── Merge ───────────────────────────────────────────────────────────────────
const merged = oldData.map(m => {
  const extra = newById[m.id];
  if (!extra) {
    console.warn('No encontrado en nuevo JSON:', m.id);
    return m;
  }
  return {
    // ── Datos existentes (sin cambios) ──
    id:                  m.id,
    nombre:              m.nombre,
    tipo:                jsById[m.id]?.tipo      ?? null,
    capturable:          jsById[m.id]?.capturable ?? null,
    especie:             extra.species,
    // ── Nuevo: descripción ──
    descripcion:         extra.description ?? null,
    // ── Nuevo: tamaño ──
    tamano:              extra.size ?? null,
    // ── Nuevo: zonas ──
    zonas:               (extra.locations ?? []).map(l => l.name),
    // ── Datos de combate (sin cambios) ──
    punto_debil:         m.punto_debil,
    elementos_efectivos: m.elementos_efectivos,
    elementos:           m.elementos,
    estados:             m.estados,
    ataques_especiales:  m.ataques_especiales,
    objetos:             m.objetos,
    inmune_objetos:      m.inmune_objetos,
    notas:               m.notas,
    // ── Nuevo: drops ──
    drops:               simplifyRewards(extra.rewards ?? []),
  };
});

// ── Escribe resultado ───────────────────────────────────────────────────────
const outPath = path.join(root, 'data', 'monsters.json');
fs.writeFileSync(outPath, JSON.stringify(merged, null, 2), 'utf8');
console.log(`\n✓ Merged ${merged.length} monstruos → ${outPath}`);

// Verifica que todos tuvieron match
const sinMatch = merged.filter((_, i) => !newById[oldData[i].id]);
if (sinMatch.length) console.warn('Sin datos nuevos:', sinMatch.map(m => m.id));
else console.log('✓ Todos los monstruos tienen datos del nuevo JSON');
