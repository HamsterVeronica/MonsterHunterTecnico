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

const ELEM_ICONS = {
  fuego:  'src/elements/fire.png',
  agua:   'src/elements/water.png',
  rayo:   'src/elements/thunder.png',
  hielo:  'src/elements/ice.png',
  dragon: 'src/elements/dragon.png',
};

// Referencias DOM

const weaponSelect   = document.getElementById('weapon-select');
const attackInput    = document.getElementById('attack-input');
const sharpnessSelect= document.getElementById('sharpness-select');
const elemType       = document.getElementById('elem-type');
const elemInput      = document.getElementById('elem-input');
const monsterSelect  = document.getElementById('monster-select');
const variantField   = document.getElementById('variant-field');
const variantSelect  = document.getElementById('variant-select');
const trueRawHint    = document.getElementById('true-raw-hint');
const resultsContainer = document.getElementById('results-container');

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

// Pre-seleccionar monstruo desde URL si viene de monster.html
const urlParams = new URLSearchParams(window.location.search);
const preId = urlParams.get('id');
if (preId) monsterSelect.value = preId;

// Lógica

function getWeapon() {
  return WEAPONS.find(w => w.id === weaponSelect.value) || null;
}

function updateTrueRaw() {
  const weapon = getWeapon();
  const attack = parseFloat(attackInput.value);
  if (weapon && attack > 0) {
    const trueRaw = (attack / weapon.bloat).toFixed(1);
    trueRawHint.textContent = `Daño real: ${trueRaw}`;
  } else {
    trueRawHint.textContent = '';
  }
}

function getMV(weaponId) {
  const mv = MOTION_VALUES && MOTION_VALUES[weaponId];
  if (!mv || !mv.raw) return { avg: 100, min: 100, max: 100 };
  return mv.raw;
}

function calcDano() {
  const weapon   = getWeapon();
  const attack   = parseFloat(attackInput.value) || 0;
  const sharp    = SHARPNESS[sharpnessSelect.value];
  const elemVal  = parseFloat(elemInput.value) || 0;
  const elemKey  = elemType.value;
  const monsterId= monsterSelect.value;
  const variant  = variantSelect.value;

  if (!weapon || attack <= 0 || !monsterId) {
    resultsContainer.innerHTML = '';
    return;
  }

  const hitzones = HITZONES[monsterId];
  if (!hitzones) return;

  const trueRaw      = attack / weapon.bloat;
  const mv           = getMV(weapon.id);
  const rawBase      = trueRaw * sharp.raw;          // sin MV
  const rawAvg       = rawBase * (mv.avg / 100);
  const rawMin       = rawBase * (mv.min / 100);
  const rawMax       = rawBase * (mv.max / 100);
  const elemEfectivo = elemVal > 0 ? (elemVal / 10) * sharp.elem : 0;
  const tipoDano     = weapon.tipo_dano;

  // Mostrar/ocultar selector de variante según datos del monstruo
  const partes = Object.keys(hitzones);
  const hasHerida     = partes.some(p => hitzones[p].herida);
  const hasPuntoDebil = partes.some(p => hitzones[p].punto_debil);
  variantField.style.display = (hasHerida || hasPuntoDebil) ? '' : 'none';

  // Calcular daño por parte
  const resultados = partes.map(parte => {
    const hasVariant = !!hitzones[parte][variant];
    const datos = hasVariant ? hitzones[parte][variant] : hitzones[parte].normal;

    const hzRaw  = datos[tipoDano] || 0;
    const hzElem = elemKey ? (datos[elemKey] || 0) : 0;

    const danoAvg  = rawAvg * (hzRaw / 100);
    const danoMin  = rawMin * (hzRaw / 100);
    const danoMax  = rawMax * (hzRaw / 100);
    const danoElem = elemEfectivo * (hzElem / 100);
    const total    = danoAvg + danoElem;
    const totalMin = danoMin + danoElem;
    const totalMax = danoMax + danoElem;

    return { parte, hzRaw, hzElem, danoAvg, danoMin, danoMax, danoElem, total, totalMin, totalMax, hasVariant };
  });

  // Ordenar de mayor a menor daño total (promedio)
  resultados.sort((a, b) => b.total - a.total);

  const maxTotal = resultados[0]?.total || 1;

  // Renderizar tabla
  const hasElem = elemVal > 0 && elemKey;
  const hasMV   = mv.min !== mv.max;

  let html = `
    <div class="results-info">
      <span>Daño real: <strong>${trueRaw.toFixed(1)}</strong></span>
      <span>Filo: <strong>${sharpnessSelect.options[sharpnessSelect.selectedIndex].text.split(' ')[0]}</strong>
        (×${sharp.raw} físico${hasElem ? ` / ×${sharp.elem} elem` : ''})</span>
      <span>Tipo de golpe: <strong>${TIPO_LABEL[tipoDano]}</strong></span>
      <span title="Media de todos los ataques del arma. El rango [mín–máx] refleja la variación entre ataques.">MV promedio: <strong>${mv.avg}</strong>
        <span class="mv-range">[${mv.min}–${mv.max}]</span></span>
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
        <td class="dmg-part-cell">${PARTES_ES[r.parte] || r.parte}</td>
        <td class="dmg-cell">${r.hzRaw}</td>
        ${hasElem ? `<td class="dmg-cell">${r.hzElem}</td>` : ''}
        <td class="dmg-cell dmg-raw">${Math.round(r.danoAvg)}</td>
        ${hasElem ? `<td class="dmg-cell dmg-elem">${Math.round(r.danoElem)}</td>` : ''}
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
  if (hasMV) {
    html += `<p class="section-note" style="margin-top:0.5rem">El rango mín–máx refleja la variación entre los distintos ataques del arma (MV ${mv.min}–${mv.max}).</p>`;
  }
  resultsContainer.innerHTML = html;
}

// Eventos

weaponSelect.addEventListener('change', () => { updateTrueRaw(); calcDano(); });
attackInput.addEventListener('input',   () => { updateTrueRaw(); calcDano(); });
sharpnessSelect.addEventListener('change', calcDano);
elemType.addEventListener('change', () => {
  elemInput.disabled = !elemType.value;
  if (!elemType.value) elemInput.value = '';
  calcDano();
});
elemInput.addEventListener('input', calcDano);
monsterSelect.addEventListener('change', calcDano);
variantSelect.addEventListener('change', calcDano);

// Calcular si hay monstruo preseleccionado
if (preId) calcDano();
