// Constantes

const PARTES_ES = {
  'Abdominal Iceplate':       'Placa de hielo abdominal',
  'Antenna':                  'Antena',
  'Back':                     'Lomo',
  'Belly':                    'Vientre',
  'Chest':                    'Pecho',
  'Dorsal Fin':               'Aleta dorsal',
  'Foreleg':                  'Pata delantera',
  'Front Left Arm':           'Brazo delantero izq.',
  'Front Right Arm':          'Brazo delantero der.',
  'Head':                     'Cabeza',
  'Head (Crystalized)':       'Cabeza (cristalizada)',
  'Hind Leg':                 'Pata trasera',
  'L Wingarm (Crystalized)':  'Ala-brazo izq. (cristalizada)',
  'Left Chainblade':          'Cuchilla izquierda',
  'Left Claw':                'Garra izquierda',
  'Left Foreleg':             'Pata delantera izq.',
  'Left Hind Leg':            'Pata trasera izq.',
  'Left Leg':                 'Pata izquierda',
  'Left Wing':                'Ala izquierda',
  'Left Wingarm':             'Ala-brazo izquierdo',
  'Lg. Iceplate (Exposed)':   'Placa de hielo (expuesta)',
  'Lg. Iceplate (Hidden)':    'Placa de hielo (oculta)',
  'Mantle':                   'Manto',
  'Membrane':                 'Membrana',
  'Middle Left Arm':          'Brazo central izq.',
  'Middle Right Arm':         'Brazo central der.',
  'Mouth':                    'Boca',
  'Neck':                     'Cuello',
  'Nose':                     'Nariz',
  'Petals':                   'Pétalos',
  'R Wingarm (Crystalized)':  'Ala-brazo der. (cristalizada)',
  'Rear':                     'Zona trasera',
  'Rear Left Arm':            'Brazo trasero izq.',
  'Rear Power Unit':          'Unidad trasera',
  'Rear Right Arm':           'Brazo trasero der.',
  'Right Chainblade':         'Cuchilla derecha',
  'Right Claw':               'Garra derecha',
  'Right Foreleg':            'Pata delantera der.',
  'Right Hind Leg':           'Pata trasera der.',
  'Right Leg':                'Pata derecha',
  'Right Wing':               'Ala derecha',
  'Right Wingarm':            'Ala-brazo derecho',
  'Stinger':                  'Aguijón',
  'Tail':                     'Cola',
  'Tail Hair':                'Pelo de cola',
  'Tail Tip':                 'Punta de cola',
  'Tentacle':                 'Tentáculo',
  'Tongue':                   'Lengua',
  'Torso':                    'Torso',
  'Veil: Foreleg (Left)':     'Velo: Pata delantera (izq.)',
  'Veil: Foreleg (Right)':    'Velo: Pata delantera (der.)',
  'Veil: Head (Left)':        'Velo: Cabeza (izq.)',
  'Veil: Head (Right)':       'Velo: Cabeza (der.)',
  'Veil: Tail (Left)':        'Velo: Cola (izq.)',
  'Veil: Tail (Middle)':      'Velo: Cola (centro)',
  'Veil: Tail (Right)':       'Velo: Cola (der.)',
  'Veil: Torso (Left)':       'Velo: Torso (izq.)',
  'Veil: Torso (Right)':      'Velo: Torso (der.)',
};

const SHARPNESS = {
  red:    { raw: 0.50,  elem: 0.25   },
  orange: { raw: 0.75,  elem: 0.50   },
  yellow: { raw: 1.00,  elem: 0.75   },
  green:  { raw: 1.05,  elem: 1.00   },
  blue:   { raw: 1.20,  elem: 1.0625 },
  white:  { raw: 1.32,  elem: 1.15   },
  purple: { raw: 1.39,  elem: 1.27   },
};

const TIPO_LABEL = { corte: 'Corte', impacto: 'Impacto', proyectil: 'Disparo' };

const WEX_MIN_HZ = 45;

// Habilidades soportadas en el cálculo de daño
// Cada entrada define cómo afecta la habilidad al cálculo
const SUPPORTED_SKILLS = {
  3:  { type: 'affinity',                                   // Ojo crítico
        perLevel: [0, 4, 8, 12, 16, 20] },
  22: { type: 'crit_bonus',                                 // Bonus críticos
        perLevel: [0.25, 0.28, 0.31, 0.34, 0.37, 0.40] },
  41: { type: 'elem', elem: 'dragon',                       // Ataque de draco
        perLevel: [{flat:0,pct:0},{flat:40,pct:0},{flat:50,pct:.10},{flat:60,pct:.20}] },
  50: { type: 'elem', elem: 'fuego',                        // Ataque de fuego
        perLevel: [{flat:0,pct:0},{flat:40,pct:0},{flat:50,pct:.10},{flat:60,pct:.20}] },
  57: { type: 'wex',                                        // Punto débil
        wexBase:  [0,  5, 10, 15, 20, 30],
        wexWound: [0,  3,  5, 10, 15, 20] },
  72: { type: 'attack',                                     // Bonus de ataque
        perLevel: [{flat:0,pct:0},{flat:3,pct:0},{flat:5,pct:0},{flat:7,pct:0},{flat:8,pct:.02},{flat:9,pct:.04}] },
  91: { type: 'elem', elem: 'agua',                         // Ataque de agua
        perLevel: [{flat:0,pct:0},{flat:40,pct:0},{flat:50,pct:.10},{flat:60,pct:.20}] },
  121:{ type: 'elem', elem: 'hielo',                        // Ataque de hielo
        perLevel: [{flat:0,pct:0},{flat:40,pct:0},{flat:50,pct:.10},{flat:60,pct:.20}] },
  127:{ type: 'elem', elem: 'rayo',                         // Ataque de rayo
        perLevel: [{flat:0,pct:0},{flat:40,pct:0},{flat:50,pct:.10},{flat:60,pct:.20}] },
};

const ELEM_ICONS = {
  fuego:  'src/elements/fire.png',
  agua:   'src/elements/water.png',
  rayo:   'src/elements/thunder.png',
  hielo:  'src/elements/ice.png',
  dragon: 'src/elements/dragon.png',
};

// Referencias DOM

const weaponSelect    = document.getElementById('weapon-select');
const attackInput     = document.getElementById('attack-input');
const attackLabel     = document.getElementById('attack-label');
const atkModeBtns     = document.querySelectorAll('.atk-mode-btn');
let attackMode        = 'shown'; // 'shown' | 'real'
const sharpnessSelect = document.getElementById('sharpness-select');
const elemType        = document.getElementById('elem-type');
const elemInput       = document.getElementById('elem-input');
const monsterSelect   = document.getElementById('monster-select');
const trueRawHint     = document.getElementById('true-raw-hint');
let currentVariant    = 'normal';
const resultsContainer= document.getElementById('results-container');
const affinityInput   = document.getElementById('affinity-input');

// Estado de habilidades activas: [{ skillId, level, enabled }]
let activeSkills = [];

// Poblar selects

WEAPONS.forEach(w => {
  const opt = document.createElement('option');
  opt.value = w.id;
  opt.textContent = w.nombre;
  weaponSelect.appendChild(opt);
});

MONSTERS.forEach(m => {
  const opt = document.createElement('option');
  opt.value = m.id;
  opt.textContent = m.nombre;
  monsterSelect.appendChild(opt);
});

// ── Custom monster dropdown ───────────────────────────────────────────────

const monsterDd        = document.getElementById('monster-dd');
const monsterDdTrigger = document.getElementById('monster-dd-trigger');
const monsterDdPanel   = document.getElementById('monster-dd-panel');
const monsterDdSelected= document.getElementById('monster-dd-selected');
const monsterDdSearch  = document.getElementById('monster-dd-search');
const monsterDdItems   = document.getElementById('monster-dd-items');

function setMonsterDisplay(m) {
  monsterDdSelected.innerHTML = '';
  if (!m) {
    monsterDdSelected.innerHTML = '<span class="monster-dd-placeholder">— Selecciona un monstruo —</span>';
    return;
  }
  const img = document.createElement('img');
  img.src = `src/${m.id}.png`;
  img.alt = m.nombre;
  img.className = 'monster-dd-img monster-dd-img--selected';
  img.onerror = () => { img.style.visibility = 'hidden'; };
  const span = document.createElement('span');
  span.textContent = m.nombre;
  monsterDdSelected.appendChild(img);
  monsterDdSelected.appendChild(span);
}

function filterMonsterItems(query) {
  const q = query.toLowerCase();
  monsterDdItems.querySelectorAll('.monster-dd-item').forEach(btn => {
    btn.style.display = (q && !btn.dataset.nombre.includes(q)) ? 'none' : '';
  });
}

MONSTERS.forEach(m => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'monster-dd-item';
  btn.dataset.value = m.id;
  btn.dataset.nombre = m.nombre.toLowerCase();

  const img = document.createElement('img');
  img.src = `src/${m.id}.png`;
  img.alt = m.nombre;
  img.className = 'monster-dd-img';
  img.loading = 'lazy';
  img.onerror = () => { img.style.visibility = 'hidden'; };

  const span = document.createElement('span');
  span.textContent = m.nombre;

  btn.appendChild(img);
  btn.appendChild(span);

  btn.addEventListener('click', () => {
    monsterSelect.value = m.id;
    setMonsterDisplay(m);
    monsterDdPanel.hidden = true;
    monsterDdSearch.value = '';
    filterMonsterItems('');
    monsterSelect.dispatchEvent(new Event('change'));
  });

  monsterDdItems.appendChild(btn);
});

monsterDdTrigger.addEventListener('click', () => {
  const opening = monsterDdPanel.hidden;
  monsterDdPanel.hidden = !opening;
  if (opening) {
    monsterDdSearch.focus();
    // Scroll active item into view
    const active = monsterDdItems.querySelector('.monster-dd-item--active');
    if (active) active.scrollIntoView({ block: 'nearest' });
  }
});

monsterDdSearch.addEventListener('input', () => filterMonsterItems(monsterDdSearch.value));
monsterDdSearch.addEventListener('keydown', e => {
  if (e.key === 'Escape') { monsterDdPanel.hidden = true; monsterDdSearch.value = ''; filterMonsterItems(''); }
});

document.addEventListener('click', e => {
  if (!monsterDd.contains(e.target)) monsterDdPanel.hidden = true;
});

// Pre-seleccionar monstruo desde URL si viene de monster.html
const urlParams = new URLSearchParams(window.location.search);
const preId = urlParams.get('id');
if (preId) {
  monsterSelect.value = preId;
  setMonsterDisplay(MONSTERS.find(m => m.id === preId) || null);
}

// Lógica

function getWeapon() {
  return WEAPONS.find(w => w.id === weaponSelect.value) || null;
}

function updateTrueRaw() {
  const weapon = getWeapon();
  const attack = parseFloat(attackInput.value);
  if (weapon && attack > 0) {
    if (attackMode === 'shown') {
      trueRawHint.textContent = `Daño real: ${(attack / weapon.bloat).toFixed(1)}`;
    } else {
      trueRawHint.textContent = `Ataque mostrado: ~${(attack * weapon.bloat).toFixed(0)}`;
    }
  } else {
    trueRawHint.textContent = '';
  }
}

function getMV(weaponId) {
  const mv = MOTION_VALUES && MOTION_VALUES[weaponId];
  return {
    raw:  (mv && mv.raw)  ? mv.raw  : { avg: 100, min: 100, max: 100 },
    elem: (mv && mv.elem) ? mv.elem : null,
  };
}

function calcDano() {
  const weapon   = getWeapon();
  const attack   = parseFloat(attackInput.value) || 0;
  const sharp    = SHARPNESS[sharpnessSelect.value];
  const elemVal  = parseFloat(elemInput.value) || 0;
  const elemKey  = elemType.value;
  const monsterId= monsterSelect.value;
  const variant  = currentVariant;

  if (!weapon || attack <= 0 || !monsterId) {
    resultsContainer.innerHTML = '';
    return;
  }

  const hitzones = HITZONES[monsterId];
  if (!hitzones) return;

  // Calcular bonos acumulados de habilidades activas
  let skillAffinity = 0;
  let skillAtkFlat = 0, skillAtkPct = 0;
  let skillElemFlat = 0, skillElemPct = 0;
  let critBonus = 0.25;
  let wexLevel = 0;

  activeSkills.filter(s => s.enabled && s.level > 0).forEach(({ skillId, level }) => {
    const sk = SUPPORTED_SKILLS[skillId];
    if (!sk) return;
    if (sk.type === 'affinity')   { skillAffinity += sk.perLevel[level] || 0; }
    if (sk.type === 'attack')     { const v = sk.perLevel[level] || {}; skillAtkFlat += v.flat||0; skillAtkPct += v.pct||0; }
    if (sk.type === 'elem' && elemKey === sk.elem) { const v = sk.perLevel[level] || {}; skillElemFlat += v.flat||0; skillElemPct += v.pct||0; }
    if (sk.type === 'crit_bonus') { critBonus = sk.perLevel[level] || 0.25; }
    if (sk.type === 'wex')        { wexLevel = level; }
  });

  const baseAffinity   = (parseFloat(affinityInput.value) || 0) + skillAffinity;
  const trueRaw        = attackMode === 'real' ? attack : attack / weapon.bloat;
  const trueRawBoosted = (trueRaw + skillAtkFlat) * (1 + skillAtkPct);
  const { raw: mv, elem: mvElem } = getMV(weapon.id);
  const rawBase      = trueRawBoosted * sharp.raw;
  const rawAvg       = rawBase * (mv.avg / 100);
  const rawMin       = rawBase * (mv.min / 100);
  const rawMax       = rawBase * (mv.max / 100);
  const elemValBoosted = elemVal > 0 ? elemVal * (1 + skillElemPct) + skillElemFlat : 0;
  const elemBase     = elemValBoosted > 0 ? (elemValBoosted / 10) * sharp.elem : 0;
  const tipoDano     = weapon.tipo_dano;

  const partes = Object.keys(hitzones);
  const hasHerida     = partes.some(p => hitzones[p].herida);
  const hasPuntoDebil = partes.some(p => hitzones[p].punto_debil);
  const VARIANT_LABEL = { normal: 'Normal', herida: 'Herida', punto_debil: 'Punto débil' };
  const variants      = ['normal'];
  if (hasHerida)     variants.push('herida');
  if (hasPuntoDebil) variants.push('punto_debil');

  // Si la variante activa ya no existe en este monstruo, volver a normal
  if (!variants.includes(currentVariant)) currentVariant = 'normal';

  // Calcular daño por parte
  const resultados = partes.map(parte => {
    const hasVariant = !!hitzones[parte][variant];
    const datos = hasVariant ? hitzones[parte][variant] : hitzones[parte].normal;

    const hzRaw  = datos[tipoDano] || 0;
    const hzElem = elemKey ? (datos[elemKey] || 0) : 0;

    // Afinidad efectiva — Punto débil: bono base en zonas ≥45, bono herida si variante = herida
    const wexSk = SUPPORTED_SKILLS[57];
    const wexBaseActive  = wexLevel > 0 && hzRaw >= WEX_MIN_HZ;
    const wexWoundActive = wexLevel > 0 && variant === 'herida';
    const wexBonus = (wexBaseActive  ? (wexSk.wexBase[wexLevel]  || 0) : 0)
                   + (wexWoundActive ? (wexSk.wexWound[wexLevel] || 0) : 0);
    const wexActive = wexBaseActive || wexWoundActive;
    const effAffinity = Math.min(100, baseAffinity + wexBonus);
    const critMult = 1 + (effAffinity / 100) * critBonus;

    const danoAvg  = rawAvg * (hzRaw / 100) * critMult;
    const danoMin  = rawMin * (hzRaw / 100) * critMult;
    const danoMax  = rawMax * (hzRaw / 100) * critMult;
    const danoElem    = elemBase * (mvElem ? mvElem.avg : 1) * (hzElem / 100);
    const danoElemMin = elemBase * (mvElem ? mvElem.min : 1) * (hzElem / 100);
    const danoElemMax = elemBase * (mvElem ? mvElem.max : 1) * (hzElem / 100);
    const total    = danoAvg  + danoElem;
    const totalMin = danoMin  + danoElemMin;
    const totalMax = danoMax  + danoElemMax;

    return { parte, hzRaw, hzElem, danoAvg, danoMin, danoMax, danoElem, danoElemMin, danoElemMax, total, totalMin, totalMax, hasVariant, wexActive, effAffinity };
  });

  // Ordenar de mayor a menor daño total (promedio)
  resultados.sort((a, b) => b.total - a.total);

  const maxTotal = resultados[0]?.total || 1;

  // Renderizar tabla
  const hasElem    = elemValBoosted > 0 && elemKey;
  const hasMV      = mv.min !== mv.max;
  const hasMVElem  = hasElem && mvElem && mvElem.min !== mvElem.max;
  const hasWEX    = wexLevel > 0;
  const wexSk     = SUPPORTED_SKILLS[57];
  const hasSkills = skillAtkFlat > 0 || skillAtkPct > 0 || skillElemFlat > 0 || skillElemPct > 0;

  const variantTabs = variants.length > 1
    ? `<div class="hz-btn-group dmg-variant-tabs">${
        variants.map(v =>
          `<button class="hz-btn calc-variant-btn${v === currentVariant ? ' active' : ''}" data-variant="${v}">${VARIANT_LABEL[v]}</button>`
        ).join('')
      }</div>`
    : '';

  let html = variantTabs + `
    <div class="results-info">
      <span>Daño real: <strong>${trueRaw.toFixed(1)}</strong></span>
      <span>Filo: <strong>${sharpnessSelect.options[sharpnessSelect.selectedIndex].text.split(' ')[0]}</strong>
        (×${sharp.raw} físico${hasElem ? ` / ×${sharp.elem} elem` : ''})</span>
      <span>Tipo de golpe: <strong>${TIPO_LABEL[tipoDano]}</strong></span>
      <span title="Media de todos los ataques del arma. El rango [mín–máx] refleja la variación entre ataques.">MV físico: <strong>${mv.avg}</strong>
        <span class="mv-range">[${mv.min}–${mv.max}]</span></span>
      ${hasElem && mvElem ? `<span title="Multiplicador elemental medio por ataque. Se aplica al daño elemental igual que el MV al daño físico.">MV elemental: <strong>${mvElem.avg}</strong>
        <span class="mv-range">[${mvElem.min}–${mvElem.max}]</span></span>` : ''}
      <span title="Afinidad base (arma + Ojo Crítico). Punto Débil puede aumentarla por parte.">Afinidad: <strong>${baseAffinity >= 0 ? '+' : ''}${baseAffinity}%</strong>${hasWEX ? ` <span class="mv-range">(+${wexSk.wexBase[wexLevel]}% zona / +${wexSk.wexWound[wexLevel]}% herida)</span>` : ''}</span>
      ${hasSkills ? `<span class="results-skills-note">Skills aplicadas al daño real</span>` : ''}
    </div>
    <table class="dmg-table">
      <thead>
        <tr>
          <th class="dmg-th dmg-part">Parte</th>
          <th class="dmg-th" title="Resistencia de la parte al daño físico (0-100). Cuanto más alto, más daño recibirá.">Resist. Física</th>
          ${hasElem ? `<th class="dmg-th" title="Resistencia de la parte al daño elemental (0-100). Cuanto más alto, más daño recibirá.">Resist. Elem.</th>` : ''}
          <th class="dmg-th">Daño Físico</th>
          ${hasElem ? `<th class="dmg-th">Daño Elem.</th>` : ''}
          <th class="dmg-th dmg-total">Total (promedio)</th>
        </tr>
      </thead>
      <tbody>
  `;

  resultados.forEach(r => {
    const pct = (r.total / maxTotal) * 100;
    const noVariant = variant !== 'normal' && !r.hasVariant;
    html += `
      <tr class="${noVariant ? 'dmg-row-muted' : ''}">
        <td class="dmg-part-cell">
          ${PARTES_ES[r.parte] || r.parte}
          ${r.wexActive ? '<span class="wex-tag" title="Weakness Exploit activo">WEX</span>' : ''}
        </td>
        <td class="dmg-cell">${r.hzRaw}</td>
        ${hasElem ? `<td class="dmg-cell">${r.hzElem}</td>` : ''}
        <td class="dmg-cell dmg-raw">${Math.round(r.danoAvg)}</td>
        ${hasElem ? `<td class="dmg-cell dmg-elem">
            ${Math.round(r.danoElem)}
            ${hasMVElem ? `<span class="dmg-range">${Math.round(r.danoElemMin)}–${Math.round(r.danoElemMax)}</span>` : ''}
          </td>` : ''}
        <td class="dmg-cell dmg-total-cell">
          <div class="dmg-bar-wrap">
            <div class="dmg-bar" style="width:${pct}%"></div>
          </div>
          <span class="dmg-total-val">${Math.round(r.total)}</span>
          ${hasMV ? `<span class="dmg-range">${Math.round(r.totalMin)}–${Math.round(r.totalMax)}</span>` : ''}
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  if (hasMV || hasMVElem) {
    const partes = [];
    if (hasMV)     partes.push(`físico MV ${mv.min}–${mv.max}`);
    if (hasMVElem) partes.push(`elemental MV ${mvElem.min}–${mvElem.max}`);
    html += `<p class="section-note" style="margin-top:0.5rem">El rango mín–máx refleja la variación entre los distintos ataques del arma (${partes.join(', ')}).</p>`;
  }
  resultsContainer.innerHTML = html;

  // Pestañas de variante
  resultsContainer.querySelectorAll('.calc-variant-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentVariant = btn.dataset.variant;
      calcDano();
    });
  });
}

// Eventos

atkModeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    attackMode = btn.dataset.mode;
    atkModeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    attackLabel.textContent = attackMode === 'shown' ? 'Ataque mostrado' : 'Daño real';
    attackInput.placeholder = attackMode === 'shown' ? 'Ej: 480' : 'Ej: 100';
    updateTrueRaw();
    calcDano();
  });
});

weaponSelect.addEventListener('change',    () => { updateTrueRaw(); calcDano(); });
attackInput.addEventListener('input',      () => { updateTrueRaw(); calcDano(); });
sharpnessSelect.addEventListener('change', calcDano);
elemType.addEventListener('change', () => {
  elemInput.disabled = !elemType.value;
  if (!elemType.value) elemInput.value = '';
  calcDano();
});
elemInput.addEventListener('input',        calcDano);
monsterSelect.addEventListener('change',   () => { currentVariant = 'normal'; calcDano(); });
affinityInput.addEventListener('input',    calcDano);

// ── Sistema de habilidades dinámico ──────────────────────────────────────

const skillSearchInput  = document.getElementById('skill-search');
const skillSearchPanel  = document.getElementById('skill-search-panel');
const skillSearchItems  = document.getElementById('skill-search-items');
const skillActiveList   = document.getElementById('skill-active-list');

function skillIsSupported(id) {
  return !!SUPPORTED_SKILLS[id];
}

function renderSkillList() {
  if (activeSkills.length === 0) {
    skillActiveList.innerHTML = '<p class="skill-empty-note">Añade habilidades con el buscador de arriba.</p>';
    return;
  }
  skillActiveList.innerHTML = '';
  activeSkills.forEach(entry => {
    const skData = SKILLS_DB.find(s => s.id === entry.skillId);
    if (!skData) return;
    const supported = skillIsSupported(entry.skillId);
    const maxLevel  = skData.ranks.length;
    const currRank  = skData.ranks.find(r => r.level === entry.level);

    const item = document.createElement('div');
    item.className = 'skill-item' + (entry.enabled ? '' : ' skill-item--off');

    // Header: nombre + toggle + eliminar
    const header = document.createElement('div');
    header.className = 'skill-item-header';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'skill-item-name';
    nameSpan.textContent = skData.name;
    if (!supported) {
      const tag = document.createElement('span');
      tag.className = 'skill-unsupported-tag';
      tag.textContent = 'sin efecto';
      nameSpan.appendChild(tag);
    }

    const controls = document.createElement('div');
    controls.className = 'skill-item-controls';

    // Selector de nivel
    const lvSel = document.createElement('select');
    lvSel.className = 'skill-level-select';
    skData.ranks.forEach(r => {
      const o = document.createElement('option');
      o.value = r.level;
      o.textContent = `Lv ${r.level}`;
      if (r.level === entry.level) o.selected = true;
      lvSel.appendChild(o);
    });
    lvSel.addEventListener('change', () => {
      entry.level = parseInt(lvSel.value);
      // Actualizar descripción
      const newRank = skData.ranks.find(r => r.level === entry.level);
      descSpan.textContent = newRank ? newRank.description : '';
      updateTrueRaw();
      calcDano();
    });

    // Checkbox activar/desactivar
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.className = 'skill-cb';
    cb.checked = entry.enabled;
    cb.title = 'Activar / desactivar';
    cb.addEventListener('change', () => {
      entry.enabled = cb.checked;
      item.classList.toggle('skill-item--off', !cb.checked);
      updateTrueRaw();
      calcDano();
    });

    // Botón eliminar
    const delBtn = document.createElement('button');
    delBtn.className = 'skill-remove-btn';
    delBtn.title = 'Eliminar habilidad';
    delBtn.textContent = '✕';
    delBtn.addEventListener('click', () => {
      activeSkills = activeSkills.filter(s => s.skillId !== entry.skillId);
      renderSkillList();
      updateTrueRaw();
      calcDano();
    });

    controls.appendChild(lvSel);
    controls.appendChild(cb);
    controls.appendChild(delBtn);
    header.appendChild(nameSpan);
    header.appendChild(controls);

    // Descripción del nivel actual
    const descSpan = document.createElement('p');
    descSpan.className = 'skill-item-desc';
    descSpan.textContent = currRank ? currRank.description : '';

    item.appendChild(header);
    item.appendChild(descSpan);
    skillActiveList.appendChild(item);
  });
}

function addSkill(skillId) {
  if (activeSkills.some(s => s.skillId === skillId)) return; // ya existe
  const skData = SKILLS_DB.find(s => s.id === skillId);
  if (!skData) return;
  activeSkills.push({ skillId, level: 1, enabled: true });
  renderSkillList();
  updateTrueRaw();
  calcDano();
}

function buildSkillSearch() {
  // Ordenar: weapon primero, luego el resto; alfabético dentro de cada grupo
  const sorted = [...SKILLS_DB].sort((a, b) => {
    const aw = a.kind === 'weapon' ? 0 : 1;
    const bw = b.kind === 'weapon' ? 0 : 1;
    if (aw !== bw) return aw - bw;
    return a.name.localeCompare(b.name, 'es');
  });

  sorted.forEach(sk => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'skill-search-item';
    btn.dataset.nombre = sk.name.toLowerCase();
    btn.dataset.id = sk.id;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = sk.name;

    const kindSpan = document.createElement('span');
    kindSpan.className = 'skill-kind-tag skill-kind-tag--' + sk.kind;
    kindSpan.textContent = sk.kind === 'weapon' ? 'arma' : sk.kind === 'armor' ? 'armadura' : 'set';

    btn.appendChild(nameSpan);
    btn.appendChild(kindSpan);

    btn.addEventListener('click', () => {
      addSkill(sk.id);
      skillSearchPanel.hidden = true;
      skillSearchInput.value = '';
      filterSkillSearch('');
    });

    skillSearchItems.appendChild(btn);
  });
}

function filterSkillSearch(query) {
  const q = query.toLowerCase();
  skillSearchItems.querySelectorAll('.skill-search-item').forEach(btn => {
    const matches = !q || btn.dataset.nombre.includes(q);
    btn.style.display = matches ? '' : 'none';
  });
}

buildSkillSearch();

skillSearchInput.addEventListener('focus', () => {
  skillSearchPanel.hidden = false;
});
skillSearchInput.addEventListener('input', () => {
  skillSearchPanel.hidden = false;
  filterSkillSearch(skillSearchInput.value);
});
skillSearchInput.addEventListener('keydown', e => {
  if (e.key === 'Escape') { skillSearchPanel.hidden = true; skillSearchInput.value = ''; filterSkillSearch(''); }
});

const skillSearchWrap = document.getElementById('skill-search-wrap');
document.addEventListener('click', e => {
  if (!skillSearchWrap.contains(e.target)) skillSearchPanel.hidden = true;
});

// Calcular si hay monstruo preseleccionado
if (preId) calcDano();
