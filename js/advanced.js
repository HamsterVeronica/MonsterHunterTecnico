// ── Constantes ────────────────────────────────────────────────────────────

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

const SUPPORTED_SKILLS = {
  3:  { type: 'affinity',
        perLevel: [0, 4, 8, 12, 16, 20] },
  22: { type: 'crit_bonus',
        perLevel: [0.25, 0.28, 0.31, 0.34, 0.37, 0.40] },
  41: { type: 'elem', elem: 'dragon',
        perLevel: [{flat:0,pct:0},{flat:40,pct:0},{flat:50,pct:.10},{flat:60,pct:.20}] },
  50: { type: 'elem', elem: 'fuego',
        perLevel: [{flat:0,pct:0},{flat:40,pct:0},{flat:50,pct:.10},{flat:60,pct:.20}] },
  57: { type: 'wex',
        wexBase:  [0,  5, 10, 15, 20, 30],
        wexWound: [0,  3,  5, 10, 15, 20] },
  72: { type: 'attack',
        perLevel: [{flat:0,pct:0},{flat:3,pct:0},{flat:5,pct:0},{flat:7,pct:0},{flat:8,pct:.02},{flat:9,pct:.04}] },
  91: { type: 'elem', elem: 'agua',
        perLevel: [{flat:0,pct:0},{flat:40,pct:0},{flat:50,pct:.10},{flat:60,pct:.20}] },
  121:{ type: 'elem', elem: 'hielo',
        perLevel: [{flat:0,pct:0},{flat:40,pct:0},{flat:50,pct:.10},{flat:60,pct:.20}] },
  127:{ type: 'elem', elem: 'rayo',
        perLevel: [{flat:0,pct:0},{flat:40,pct:0},{flat:50,pct:.10},{flat:60,pct:.20}] },
};

// ── DOM refs ───────────────────────────────────────────────────────────────

const weaponSelect    = document.getElementById('weapon-select');
const attackInput     = document.getElementById('attack-input');
const attackLabel     = document.getElementById('attack-label');
const atkModeBtns     = document.querySelectorAll('.atk-mode-btn');
const sharpnessSelect = document.getElementById('sharpness-select');
const elemType        = document.getElementById('elem-type');
const elemInput       = document.getElementById('elem-input');
const monsterSelect   = document.getElementById('monster-select');
const partSelect      = document.getElementById('part-select');
const trueRawHint     = document.getElementById('true-raw-hint');
const resultsContainer= document.getElementById('results-container');
const affinityInput   = document.getElementById('affinity-input');
const atkSearchInput  = document.getElementById('atk-search');
const sortBtns        = document.querySelectorAll('.adv-sort-btn');

let attackMode      = 'shown';
let currentVariant  = 'normal';
let sortMode        = 'total';
let activeSkills    = [];
let hasCalculated   = false;

// ── Poblar selects ─────────────────────────────────────────────────────────

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

// ── Custom monster dropdown ────────────────────────────────────────────────

const monsterDd          = document.getElementById('monster-dd');
const monsterDdTrigger   = document.getElementById('monster-dd-trigger');
const monsterDdPanel     = document.getElementById('monster-dd-panel');
const monsterDdSelected  = document.getElementById('monster-dd-selected');
const monsterDdSearch    = document.getElementById('monster-dd-search');
const monsterDdItems     = document.getElementById('monster-dd-items');
const configWrapperInner = document.querySelector('.config-wrapper-inner');

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
    monsterDdTrigger.classList.remove('field-invalid');
    monsterDdPanel.hidden = true;
    configWrapperInner.style.overflow = '';
    monsterDdSearch.value = '';
    filterMonsterItems('');
    monsterSelect.dispatchEvent(new Event('change'));
  });

  monsterDdItems.appendChild(btn);
});

monsterDdTrigger.addEventListener('click', () => {
  const opening = monsterDdPanel.hidden;
  monsterDdPanel.hidden = !opening;
  configWrapperInner.style.overflow = opening ? 'visible' : '';
  if (opening) {
    monsterDdSearch.focus();
    const active = monsterDdItems.querySelector('.monster-dd-item--active');
    if (active) active.scrollIntoView({ block: 'nearest' });
  }
});

monsterDdSearch.addEventListener('input', () => filterMonsterItems(monsterDdSearch.value));
monsterDdSearch.addEventListener('keydown', e => {
  if (e.key === 'Escape') { monsterDdPanel.hidden = true; configWrapperInner.style.overflow = ''; monsterDdSearch.value = ''; filterMonsterItems(''); }
});

document.addEventListener('click', e => {
  if (!monsterDd.contains(e.target)) { monsterDdPanel.hidden = true; configWrapperInner.style.overflow = ''; }
});

// ── Selector de parte ──────────────────────────────────────────────────────

function populateParts(monsterId) {
  partSelect.innerHTML = '';
  if (!monsterId || !HITZONES[monsterId]) {
    const o = document.createElement('option');
    o.value = '';
    o.textContent = '— Selecciona un monstruo primero —';
    partSelect.appendChild(o);
    partSelect.disabled = true;
    return;
  }
  const blank = document.createElement('option');
  blank.value = '';
  blank.textContent = '— Selecciona una parte —';
  partSelect.appendChild(blank);

  const parts = Object.keys(HITZONES[monsterId]);
  parts.sort((a, b) => (PARTES_ES[a] || a).localeCompare(PARTES_ES[b] || b, 'es'));
  parts.forEach(p => {
    const o = document.createElement('option');
    o.value = p;
    o.textContent = PARTES_ES[p] || p;
    partSelect.appendChild(o);
  });
  partSelect.disabled = false;
}

// ── Colapso de configuración ───────────────────────────────────────────────

const configWrapper = document.getElementById('config-wrapper');
const configSummary = document.getElementById('config-summary');
const calcBtn       = document.getElementById('calc-btn');
let configCollapsed = false;

const ELEM_NOMBRES = { fuego: 'Fuego', agua: 'Agua', rayo: 'Rayo', hielo: 'Hielo', dragon: 'Dragón' };

function buildSummary() {
  const weapon    = WEAPONS.find(w => w.id === weaponSelect.value);
  const monster   = MONSTERS.find(m => m.id === monsterSelect.value);
  const partKey   = partSelect.value;
  const attack    = attackInput.value;
  const sharpLabel= sharpnessSelect.options[sharpnessSelect.selectedIndex]?.text.split(' ')[0] || '';
  const aff       = parseInt(affinityInput.value) || 0;
  const elemKey   = elemType.value;
  const elemVal   = elemInput.value;
  const skillCount= activeSkills.filter(s => s.enabled).length;

  const chips = [];
  if (weapon) chips.push(`<span class="cfg-chip cfg-chip--weapon">${weapon.nombre}</span>`);
  if (attack) {
    const atkText = attackMode === 'shown' ? attack : `Real ${attack}`;
    const affText = aff !== 0 ? ` · ${aff > 0 ? '+' : ''}${aff}%` : '';
    chips.push(`<span class="cfg-chip">${atkText} · ${sharpLabel}${affText}</span>`);
  }
  if (elemKey && elemVal) {
    chips.push(`<span class="cfg-chip cfg-chip--elem">${ELEM_NOMBRES[elemKey] || elemKey} ${elemVal}</span>`);
  }
  if (monster) {
    const partLabel = partKey ? (PARTES_ES[partKey] || partKey) : '';
    chips.push(`<span class="cfg-chip cfg-chip--monster">${monster.nombre}${partLabel ? ` · ${partLabel}` : ''}</span>`);
  }
  if (skillCount > 0) {
    chips.push(`<span class="cfg-chip">${skillCount} habilidad${skillCount > 1 ? 'es' : ''}</span>`);
  }
  configSummary.innerHTML = chips.join('');
}

function collapseConfig() {
  monsterDdPanel.hidden = true;
  configWrapperInner.style.overflow = '';
  configWrapper.classList.add('collapsed');
  configCollapsed = true;
  buildSummary();
  configSummary.hidden = false;
  calcBtn.textContent = '✎ Editar parámetros';
  calcBtn.classList.add('calc-action-btn--edit');
}

function expandConfig() {
  configWrapper.classList.remove('collapsed');
  configCollapsed = false;
  configSummary.hidden = true;
  calcBtn.textContent = 'Calcular ▸';
  calcBtn.classList.remove('calc-action-btn--edit');
}

calcBtn.addEventListener('click', () => {
  if (configCollapsed) {
    expandConfig();
    return;
  }
  const hasWeapon  = !!weaponSelect.value;
  const hasAttack  = (parseFloat(attackInput.value) || 0) > 0;
  const hasMonster = !!monsterSelect.value;
  const hasPart    = !!partSelect.value;

  weaponSelect.classList.toggle('field-invalid', !hasWeapon);
  attackInput.classList.toggle('field-invalid', !hasAttack);
  monsterDdTrigger.classList.toggle('field-invalid', !hasMonster);
  partSelect.classList.toggle('field-invalid', !hasPart);

  if (hasWeapon && hasAttack && hasMonster && hasPart) {
    calcAdvanced();
    hasCalculated = true;
    collapseConfig();
  }
});

// ── Pre-seleccionar desde URL ──────────────────────────────────────────────

const urlParams = new URLSearchParams(window.location.search);
const preId = urlParams.get('id');
if (preId) {
  monsterSelect.value = preId;
  setMonsterDisplay(MONSTERS.find(m => m.id === preId) || null);
  populateParts(preId);
}

// ── Helpers ────────────────────────────────────────────────────────────────

function updateTrueRaw() {
  const weapon = WEAPONS.find(w => w.id === weaponSelect.value) || null;
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

// ── Cálculo principal ──────────────────────────────────────────────────────

function calcAdvanced() {
  const weapon    = WEAPONS.find(w => w.id === weaponSelect.value) || null;
  const attack    = parseFloat(attackInput.value) || 0;
  const sharp     = SHARPNESS[sharpnessSelect.value];
  const elemVal   = parseFloat(elemInput.value) || 0;
  const elemKey   = elemType.value;
  const monsterId = monsterSelect.value;
  const partKey   = partSelect.value;

  if (!weapon || attack <= 0 || !monsterId || !partKey) {
    resultsContainer.innerHTML = '<p class="section-note">Selecciona tu arma, un monstruo y una parte del cuerpo para ver los resultados.</p>';
    return;
  }

  const hitzonesPart = HITZONES[monsterId]?.[partKey];
  if (!hitzonesPart) return;

  // Variantes disponibles para esta parte
  const partVariants = ['normal'];
  if (hitzonesPart.herida)      partVariants.push('herida');
  if (hitzonesPart.punto_debil) partVariants.push('punto_debil');
  if (!partVariants.includes(currentVariant)) currentVariant = 'normal';

  const datos    = hitzonesPart[currentVariant] || hitzonesPart.normal;
  const tipoDano = weapon.tipo_dano;
  const hzRaw    = datos[tipoDano]  || 0;
  const hzElem   = elemKey ? (datos[elemKey] || 0) : 0;

  // Bonos de habilidades activas
  let skillAffinity = 0, skillAtkFlat = 0, skillAtkPct = 0;
  let skillElemFlat = 0, skillElemPct = 0;
  let critBonus = 0.25, wexLevel = 0;

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
  const rawBase        = trueRawBoosted * sharp.raw;
  const elemValBoosted = elemVal > 0 ? elemVal * (1 + skillElemPct) + skillElemFlat : 0;
  const elemBase       = elemValBoosted > 0 ? (elemValBoosted / 10) * sharp.elem : 0;
  const hasElem        = elemBase > 0 && !!elemKey;

  const wexSk          = SUPPORTED_SKILLS[57];
  const wexBaseActive  = wexLevel > 0 && hzRaw >= WEX_MIN_HZ;
  const wexWoundActive = wexLevel > 0 && currentVariant === 'herida';
  const wexBonus = (wexBaseActive  ? (wexSk.wexBase[wexLevel]  || 0) : 0)
                 + (wexWoundActive ? (wexSk.wexWound[wexLevel] || 0) : 0);
  const wexActive   = wexBaseActive || wexWoundActive;
  const effAffinity = Math.min(100, baseAffinity + wexBonus);
  const critMult    = 1 + (effAffinity / 100) * critBonus;

  const motionData = MOTION_VALUES[weapon.id];
  if (!motionData) {
    resultsContainer.innerHTML = '<p class="section-note">No hay datos de motion values para esta arma.</p>';
    return;
  }

  // Daño por golpe
  const allAttacks = motionData.ataques.map(atk => {
    const physical  = rawBase * (atk.mv_raw / 100) * (hzRaw / 100) * critMult;
    const elemental = elemBase * (atk.mv_elem || 1) * (hzElem / 100);
    return {
      nombre:    atk.nombre,
      mv_raw:    atk.mv_raw,
      physical:  Math.round(physical),
      elemental: Math.round(elemental),
      total:     Math.round(physical + elemental),
    };
  });

  // Ordenar
  if (sortMode === 'mv') {
    allAttacks.sort((a, b) => b.mv_raw - a.mv_raw);
  } else {
    allAttacks.sort((a, b) => b.total - a.total);
  }

  // Filtrar por búsqueda
  const query    = atkSearchInput.value.trim().toLowerCase();
  const filtered = query ? allAttacks.filter(a => a.nombre.toLowerCase().includes(query)) : allAttacks;
  const maxTotal = filtered.reduce((m, a) => Math.max(m, a.total), 1);

  // Pestañas de variante
  const VARIANT_LABEL = { normal: 'Normal', herida: 'Herida', punto_debil: 'Punto débil' };
  const variantTabs = partVariants.length > 1
    ? `<div class="hz-btn-group dmg-variant-tabs">${partVariants.map(v =>
        `<button class="hz-btn calc-variant-btn${v === currentVariant ? ' active' : ''}" data-variant="${v}">${VARIANT_LABEL[v]}</button>`
      ).join('')}</div>`
    : '';

  // Barra de info
  const sharpLabel = sharpnessSelect.options[sharpnessSelect.selectedIndex].text.split(' ')[0];
  const infoHtml = `<div class="results-info">
    <span>Daño real: <strong>${trueRaw.toFixed(1)}</strong></span>
    <span>Filo: <strong>${sharpLabel}</strong> (×${sharp.raw})</span>
    <span>Tipo: <strong>${TIPO_LABEL[tipoDano]}</strong></span>
    <span>Zona física: <strong>${hzRaw}</strong>${hasElem ? `  ·  Zona elem: <strong>${hzElem}</strong>` : ''}</span>
    ${(effAffinity !== 0 || wexActive) ? `<span>Afinidad: <strong>${effAffinity >= 0 ? '+' : ''}${effAffinity}%</strong>${wexActive ? ' <span class="wex-tag">WEX</span>' : ''}</span>` : ''}
    <span class="adv-atk-count">${filtered.length < allAttacks.length ? `${filtered.length} de ${allAttacks.length}` : filtered.length} ataques</span>
  </div>`;

  // Cards
  let cardsHtml;
  if (filtered.length === 0) {
    cardsHtml = '<p class="section-note" style="margin-top:0.5rem">No hay ataques que coincidan con la búsqueda.</p>';
  } else {
    const items = filtered.map(a => {
      const pct = (a.total / maxTotal) * 100;
      return `<div class="adv-card">
        <div class="adv-card-header">
          <span class="adv-card-name">${a.nombre}</span>
          <span class="adv-card-mv">MV ${a.mv_raw}</span>
        </div>
        <div class="adv-card-bar-wrap">
          <div class="adv-card-bar" style="width:${pct.toFixed(1)}%"></div>
        </div>
        <div class="adv-card-dmg">
          <span class="adv-dmg-raw">Fís.&nbsp;${a.physical}</span>
          ${hasElem ? `<span class="adv-dmg-elem">Elem.&nbsp;${a.elemental}</span>` : ''}
          <span class="adv-dmg-sep">=</span>
          <span class="adv-dmg-total">${a.total}</span>
        </div>
      </div>`;
    }).join('');
    cardsHtml = `<div class="adv-cards-wrap"><div class="adv-cards">${items}</div></div>`;
  }

  resultsContainer.innerHTML = variantTabs + infoHtml + cardsHtml;

  resultsContainer.querySelectorAll('.calc-variant-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentVariant = btn.dataset.variant;
      calcAdvanced();
    });
  });
}

// ── Eventos ────────────────────────────────────────────────────────────────

atkModeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    attackMode = btn.dataset.mode;
    atkModeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    attackLabel.textContent = attackMode === 'shown' ? 'Ataque mostrado' : 'Daño real';
    attackInput.placeholder = attackMode === 'shown' ? 'Ej: 480' : 'Ej: 100';
    updateTrueRaw();
    calcAdvanced();
  });
});

sortBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    sortMode = btn.dataset.sort;
    sortBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (hasCalculated) calcAdvanced();
  });
});

weaponSelect.addEventListener('change', () => {
  updateTrueRaw();
  if (weaponSelect.value) weaponSelect.classList.remove('field-invalid');
});
attackInput.addEventListener('input', () => {
  updateTrueRaw();
  if ((parseFloat(attackInput.value) || 0) > 0) attackInput.classList.remove('field-invalid');
});
sharpnessSelect.addEventListener('change', () => {});
elemType.addEventListener('change', () => {
  elemInput.disabled = !elemType.value;
  if (!elemType.value) elemInput.value = '';
});
elemInput.addEventListener('input',   () => {});
monsterSelect.addEventListener('change', () => {
  populateParts(monsterSelect.value);
  currentVariant = 'normal';
});
partSelect.addEventListener('change', () => {
  currentVariant = 'normal';
  if (partSelect.value) partSelect.classList.remove('field-invalid');
});
affinityInput.addEventListener('input', () => {});
atkSearchInput.addEventListener('input', () => { if (hasCalculated) calcAdvanced(); });

// ── Sistema de habilidades ─────────────────────────────────────────────────

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
    const currRank  = skData.ranks.find(r => r.level === entry.level);

    const item = document.createElement('div');
    item.className = 'skill-item' + (entry.enabled ? '' : ' skill-item--off');

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
      const newRank = skData.ranks.find(r => r.level === entry.level);
      descSpan.textContent = newRank ? newRank.description : '';
      updateTrueRaw();
      if (hasCalculated) calcAdvanced();
    });

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.className = 'skill-cb';
    cb.checked = entry.enabled;
    cb.title = 'Activar / desactivar';
    cb.addEventListener('change', () => {
      entry.enabled = cb.checked;
      item.classList.toggle('skill-item--off', !cb.checked);
      updateTrueRaw();
      if (hasCalculated) calcAdvanced();
    });

    const delBtn = document.createElement('button');
    delBtn.className = 'skill-remove-btn';
    delBtn.title = 'Eliminar habilidad';
    delBtn.textContent = '✕';
    delBtn.addEventListener('click', () => {
      activeSkills = activeSkills.filter(s => s.skillId !== entry.skillId);
      renderSkillList();
      updateTrueRaw();
      if (hasCalculated) calcAdvanced();
    });

    controls.appendChild(lvSel);
    controls.appendChild(cb);
    controls.appendChild(delBtn);
    header.appendChild(nameSpan);
    header.appendChild(controls);

    const descSpan = document.createElement('p');
    descSpan.className = 'skill-item-desc';
    descSpan.textContent = currRank ? currRank.description : '';

    item.appendChild(header);
    item.appendChild(descSpan);
    skillActiveList.appendChild(item);
  });
}

function addSkill(skillId) {
  if (activeSkills.some(s => s.skillId === skillId)) return;
  const skData = SKILLS_DB.find(s => s.id === skillId);
  if (!skData) return;
  activeSkills.push({ skillId, level: 1, enabled: true });
  renderSkillList();
  updateTrueRaw();
  if (hasCalculated) calcAdvanced();
}

function buildSkillSearch() {
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

skillSearchInput.addEventListener('focus', () => { skillSearchPanel.hidden = false; });
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

