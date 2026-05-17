// ── Traducción de partes del cuerpo ──────────────────────────────────────────
const PARTES = {
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

// ── Helpers ──────────────────────────────────────────────────────────────────

function el(tag, attrs, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === 'class') node.className = v;
    else node.setAttribute(k, v);
  }
  for (const child of children) {
    if (child == null) continue;
    node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  }
  return node;
}

// Devuelve clase CSS de color para un valor de hitzone (0-100)
function hzClass(val) {
  if (val === 0)  return 'hz-0';
  if (val < 20)   return 'hz-low';
  if (val < 40)   return 'hz-mid';
  if (val < 60)   return 'hz-high';
  return 'hz-max';
}

// ── Secciones ─────────────────────────────────────────────────────────────────

function buildElementos(monster) {
  const ELEM_KEYS = ['fuego', 'agua', 'rayo', 'hielo', 'dragon'];
  const maxVal = Math.max(...ELEM_KEYS.map(k => monster.elementos[k]));

  const rows = ELEM_KEYS.map(key => {
    const val    = monster.elementos[key];
    const pct    = maxVal > 0 ? (val / maxVal) * 100 : 0;
    const color  = `var(--${key === 'dragon' ? 'dragon' : key})`;
    const active = monster.elementos_efectivos.includes(key);

    return el('div', { class: 'elem-row' },
      el('span', { class: `elem-label ${active ? 'elem-active' : ''}` }, LABELS.elementos[key]),
      el('div', { class: 'elem-bar-wrap' },
        el('div', { class: 'elem-bar', style: `width:${pct}%;background:${color}` })
      ),
      el('span', { class: 'elem-value' }, String('x ' + val))
    );
  });

  return el('div', { class: 'section' },
    el('h3', {}, 'Daño elemental adicional'),
    el('div', { class: 'section-body' },
      el('p', { class: 'section-note' },
        'Multiplicador del daño elemental que recibe. A mayor valor, más efectivo es ese elemento.'
      ),
      el('div', { class: 'elem-table' }, ...rows)
    )
  );
}

const STATUS_ICONS = {
  veneno:     'src/status/poison.png',
  sueno:      'src/status/sleep.png',
  paralisis:  'src/status/paralysis.png',
  nitro:      'src/status/blastblight.png',
  aturdido:   'src/status/stun.png',
  agotamiento:'src/status/exhaust.png',
};

function buildEstados(monster) {
  const ESTADO_KEYS = ['veneno', 'sueno', 'paralisis', 'nitro', 'aturdido', 'agotamiento'];
  const EFF_LABEL   = ['Inmune', 'Baja', 'Normal', 'Alta'];

  const rows = ESTADO_KEYS.map(key => {
    const val = monster.estados[key];
    return el('div', { class: 'estado-row' },
      el('span', { class: 'estado-name' },
        el('img', { src: STATUS_ICONS[key], alt: LABELS.estados[key], class: 'status-icon' }),
        LABELS.estados[key]
      ),
      el('span', { class: `eff-${val}` }, EFF_LABEL[val])
    );
  });

  return el('div', { class: 'section' },
    el('h3', {}, 'Estados alterados'),
    el('div', { class: 'section-body' },
      el('p', { class: 'section-note' }, 'Facilidad con la que se le aplican estados alterados al monstruo.'),
      el('div', { class: 'estado-table' }, ...rows)
    )
  );
}

function buildObjetos(monster) {
  if (monster.inmune_objetos) {
    return el('div', { class: 'section' },
      el('h3', {}, 'Objetos de caza'),
      el('div', { class: 'section-body' },
        el('p', { class: 'objeto-no', style: 'font-size:0.85rem' }, 'Inmune a todos los objetos')
      )
    );
  }

  const OBJ_KEYS = ['eslinga_flash', 'bomba_sonica', 'trampa_electrica', 'trampa_escollo'];
  const rows = OBJ_KEYS.map(key => {
    const val = monster.objetos[key];
    return el('div', { class: 'objeto-row' },
      el('span', { class: 'objeto-name' }, LABELS.objetos[key]),
      el('span', { class: val ? 'objeto-si' : 'objeto-no' }, val ? 'Sí' : 'No')
    );
  });

  return el('div', { class: 'section' },
    el('h3', {}, 'Objetos de caza'),
    el('div', { class: 'section-body' },
      el('p', { class: 'section-note' }, 'Indica si el objeto surte efecto sobre el monstruo.'),
      el('div', { class: 'objetos-list' }, ...rows)
    )
  );
}

function buildAtaques(monster) {
  const a = monster.ataques_especiales;
  const rows = [];

  if (a.rugido) {
    rows.push(el('div', { class: 'ataque-row' },
      el('div', { class: 'ataque-label' }, 'Rugido'),
      el('div', { class: 'ataque-badges' },
        el('span', { class: `badge-intensidad intensidad-${a.rugido}` }, LABELS.intensidad_ataque[a.rugido])
      )
    ));
  }

  if (a.temblor_viento) {
    rows.push(el('div', { class: 'ataque-row' },
      el('div', { class: 'ataque-label' }, 'Temblor / Viento'),
      el('div', { class: 'ataque-badges' },
        el('span', { class: `badge-intensidad intensidad-${a.temblor_viento}` }, LABELS.intensidad_ataque[a.temblor_viento])
      )
    ));
  }

  if (a.ataque_elemental && a.ataque_elemental.length > 0) {
    rows.push(el('div', { class: 'ataque-row' },
      el('div', { class: 'ataque-label' }, 'Ataque elemental'),
      el('div', { class: 'ataque-badges' },
        ...a.ataque_elemental.map(k => el('span', { class: 'badge-alteration' }, LABELS.alteraciones[k]))
      )
    ));
  }

  if (a.efecto_estado && a.efecto_estado.length > 0) {
    rows.push(el('div', { class: 'ataque-row' },
      el('div', { class: 'ataque-label' }, 'Efecto de estado'),
      el('div', { class: 'ataque-badges' },
        ...a.efecto_estado.map(k => el('span', { class: 'badge-alteration' }, LABELS.alteraciones[k]))
      )
    ));
  }

  if (rows.length === 0) {
    rows.push(el('p', { style: 'font-size:0.85rem;color:var(--text-muted)' }, 'Ninguno'));
  }

  return el('div', { class: 'section' },
    el('h3', {}, 'Ataques especiales'),
    el('div', { class: 'section-body' },
      el('p', { class: 'section-note' }, 'Efectos que el monstruo puede infligir sobre el jugador durante el combate.'),
      el('div', { class: 'ataques-list' }, ...rows)
    )
  );
}

// ── Tabla de Hitzones ─────────────────────────────────────────────────────────

const ELEM_ICONS = {
  fuego:  'src/elements/fire.png',
  agua:   'src/elements/water.png',
  rayo:   'src/elements/thunder.png',
  hielo:  'src/elements/ice.png',
  dragon: 'src/elements/dragon.png',
};

const HZ_COLS = [
  { key: 'corte',     label: 'Corte',     short: 'Cor.', icon: 'src/weapons/gs.png' },
  { key: 'impacto',   label: 'Impacto',   short: 'Imp.', icon: 'src/weapons/hammer.png' },
  { key: 'proyectil', label: 'Disparo',   short: 'Dis.', icon: 'src/weapons/lb.png' },
  { key: 'fuego',     label: 'Fuego',     short: 'Fue.', elem: true, icon: ELEM_ICONS.fuego },
  { key: 'agua',      label: 'Agua',      short: 'Agu.', elem: true, icon: ELEM_ICONS.agua },
  { key: 'rayo',      label: 'Rayo',      short: 'Ray.', elem: true, icon: ELEM_ICONS.rayo },
  { key: 'hielo',     label: 'Hielo',     short: 'Hie.', elem: true, icon: ELEM_ICONS.hielo },
  { key: 'dragon',    label: 'Dragón',    short: 'Dra.', elem: true, icon: ELEM_ICONS.dragon },
  { key: 'aturdido',  label: 'Aturdidor', short: 'Atur.', sep: true },
];

function buildHitzoneTable(monsterId) {
  const data = HITZONES[monsterId];

  if (!data) {
    return el('div', { class: 'section full-width hz-no-data' },
      el('h3', {}, 'Daño por zona (Hitzones)'),
      el('div', { class: 'section-body' },
        el('p', { class: 'section-note' }, 'Los datos de hitzones para este monstruo aún no están disponibles.')
      )
    );
  }

  const parts = Object.keys(data);

  // Detectar qué variantes existen
  const hasHerida     = parts.some(p => data[p].herida);
  const hasPuntoDebil = parts.some(p => data[p].punto_debil);
  const variants      = ['normal'];
  if (hasHerida)     variants.push('herida');
  if (hasPuntoDebil) variants.push('punto_debil');

  const VARIANT_LABEL = { normal: 'Normal', herida: 'Herida', punto_debil: 'Punto débil' };

  let activeVariant = 'normal';
  let sortCol = null;   // key de columna activa para ordenar
  let sortDir = 'desc'; // 'asc' | 'desc'

  // ── Construir thead ────────────────────────────────────────────────────────
  const isMobile = () => window.innerWidth <= 600;

  const thParte = el('th', { class: 'hz-th hz-part' }, 'Parte');

  const thCols = HZ_COLS.map(c => {
    const th = el('th', {
      class: `hz-th hz-th--sortable${c.elem ? ' hz-elem' : ''}${c.sep ? ' hz-sep' : ''}`,
      title: `Ordenar por ${c.label}`,
    });
    if (c.icon && !isMobile()) {
      const img = el('img', { src: c.icon, alt: c.label, class: 'hz-col-icon' });
      th.appendChild(img);
      if (!c.elem) th.appendChild(document.createTextNode(' ' + c.label));
    } else {
      th.textContent = isMobile() ? c.short : c.label;
    }
    const arrow = el('span', { class: 'hz-sort-arrow' }, '');
    th.appendChild(arrow);

    th.addEventListener('click', () => {
      if (sortCol === c.key) {
        sortDir = sortDir === 'desc' ? 'asc' : 'desc';
      } else {
        sortCol = c.key;
        sortDir = 'desc';
      }
      refreshTable();
    });
    return { th, col: c };
  });

  const thead = el('thead', {},
    el('tr', {}, thParte, ...thCols.map(x => x.th))
  );

  // ── Construir filas ────────────────────────────────────────────────────────
  function getSortedParts(variant) {
    if (!sortCol) return parts;
    return [...parts].sort((a, b) => {
      const vA = (data[a][variant] || data[a].normal || {})[sortCol] ?? 0;
      const vB = (data[b][variant] || data[b].normal || {})[sortCol] ?? 0;
      return sortDir === 'desc' ? vB - vA : vA - vB;
    });
  }

  const ELEM_KEYS_HZ = HZ_COLS.filter(c => c.elem).map(c => c.key);

  function buildRows(variant) {
    const sorted = getSortedParts(variant);

    return sorted.map(part => {
      const hasVariant = !!data[part][variant];
      const rowData    = hasVariant ? data[part][variant] : data[part].normal;
      const showZero   = variant !== 'normal' && !hasVariant;

      // Máximo elemental de esta fila (mejor elemento para esta parte concreta)
      const maxElemVal = showZero ? 0 : Math.max(...ELEM_KEYS_HZ.map(k => rowData[k] ?? 0));

      return el('tr', {},
        el('td', { class: 'hz-part-cell' }, PARTES[part] || part),
        ...HZ_COLS.map(c => {
          const val    = showZero ? 0 : (rowData[c.key] ?? 0);
          const isBest = c.elem && !showZero && val > 0 && val === maxElemVal;
          const hzCls  = isBest ? 'hz-max' : hzClass(val);
          const cell   = el('td', {
            class: `hz-cell ${hzCls}${c.elem ? ' hz-elem' : ''}${c.sep ? ' hz-sep' : ''}${isBest ? ' hz-best' : ''}`,
          }, String(val));
          if (isBest) cell.appendChild(el('span', { class: 'hz-best-badge' }, '★'));
          return cell;
        })
      );
    });
  }

  function updateSortArrows() {
    thCols.forEach(({ th, col }) => {
      th.classList.toggle('hz-th--sorted', sortCol === col.key);
      const arrow = th.querySelector('.hz-sort-arrow');
      if (sortCol === col.key) {
        arrow.textContent = sortDir === 'desc' ? ' ▼' : ' ▲';
      } else {
        arrow.textContent = '';
      }
    });
  }

  const tbody = el('tbody', {}, ...buildRows('normal'));

  const table = el('table', { class: 'hz-table' }, thead, tbody);
  const wrap  = el('div', { class: 'hz-scroll' }, table);

  function refreshTable() {
    while (tbody.firstChild) tbody.removeChild(tbody.firstChild);
    buildRows(activeVariant).forEach(row => tbody.appendChild(row));
    updateSortArrows();
  }

  // Botones de variante
  let btnGroup = null;
  if (variants.length > 1) {
    const btns = variants.map(v => {
      const btn = el('button', { class: `hz-btn${v === 'normal' ? ' active' : ''}` }, VARIANT_LABEL[v]);
      btn.addEventListener('click', () => {
        activeVariant = v;
        refreshTable();
        btnGroup.querySelectorAll('.hz-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
      return btn;
    });
    btnGroup = el('div', { class: 'hz-btn-group' }, ...btns);
  }

  return el('div', { class: 'section full-width' },
    el('h3', {}, 'Daño por zona (Hitzones)'),
    el('div', { class: 'section-body' },
      el('p', { class: 'section-note' }, 'Haz clic en el encabezado de una columna para ordenar. ★ indica la mejor zona elemental.'),
      ...(btnGroup ? [btnGroup] : []),
      wrap
    )
  );
}

// ── Drops ─────────────────────────────────────────────────────────────────────

const TIPO_DROP_ES = {
  talla:                    'Despiece',
  talla_cola:               'Despiece de cola',
  talla_cuerpo_podrido:     'Despiece (cuerpo podrido)',
  talla_cola_podrida:       'Despiece de cola (podrido)',
  recompensa_caceria:       'Recompensa de cacería',
  parte_rota:               'Parte rota',
  herida_destruida:         'Herida rota',
  'broken-fragment':        'Fragmento roto',
  'carve-crystallized':     'Cuerpo cristalizado (guardianes)',
  'tempered-wound-destroyed': 'Herida Hipercurtida (azul)',
};

const TIPO_DROP_ORDER = [
  'talla', 'talla_cola', 'talla_cuerpo_podrido', 'talla_cola_podrida',
  'recompensa_caceria', 'parte_rota', 'herida_destruida',
];

const RANGO_ES = { low: 'Rango Bajo', high: 'Rango Alto' };

const ESPECIE_ES = {
  'amphibian':     'Anfibio',
  'flying-wyvern': 'Wyverno Volador',
  'construct':     'Guardián',
  'fanged-beast':  'Bestia Colmillada',
  'temnoceran':    'Temnoceran',
  'demi-elder':    'Semidragón',
  'brute-wyvern':  'Wyverno Bruto',
  'leviathan':     'Leviatán',
  'bird-wyvern':   'Wyverno Pájaro',
  'cephalopod':    'Cefalópodo',
  'machine':       'Máquina',
  'elder-dragon':  'Dragón Anciano',
};

function prettifyParte(parte) {
  const MAP = {
    'head':               'Cabeza',
    'head-hide':          'Cabeza',
    'hide':               'Piel',
    'back':               'Lomo',
    'chest':              'Pecho',
    'stomach':            'Vientre',
    'tail':               'Cola',
    'tail-tip':           'Punta de cola',
    'tail-hair':          'Pelo de cola',
    'mouth':              'Boca',
    'antennae':           'Antenas',
    'petal':              'Pétalos',
    'dorsal-fin':         'Aleta dorsal',
    'periscope':          'Periscopio',
    'front-legs':         'Patas delanteras',
    'left-wing':          'Ala izquierda',
    'right-wing':         'Ala derecha',
    'left-wing-blade':    'Hoja ala izq.',
    'right-wing-blade':   'Hoja ala der.',
    'left-wing-arm-hide': 'Ala-brazo izq.',
    'right-wing-arm-hide':'Ala-brazo der.',
    'left-wing-legs':     'Patas ala izq.',
    'right-wing-legs':    'Patas ala der.',
    'left-front-leg':     'Pata delantera izq.',
    'right-front-leg':    'Pata delantera der.',
    'left-hind-leg':      'Pata trasera izq.',
    'right-hind-leg':     'Pata trasera der.',
    'left-front-arm':     'Brazo delantero izq.',
    'right-front-arm':    'Brazo delantero der.',
    'left-leg':           'Pata izquierda',
    'right-leg':          'Pata derecha',
    'left-nail':          'Garra izquierda',
    'right-nail':         'Garra derecha',
    'frozen-bigcore-after': 'Núcleo grande (descongelado)',
    'frozen-core-waist':    'Núcleo de cintura (descongelado)',
  };
  return MAP[parte] ?? parte.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function buildDrops(monster) {
  if (!monster.drops || monster.drops.length === 0) return null;

  // Agrupa condiciones por tipo+rango
  const groups = {};
  for (const drop of monster.drops) {
    for (const cond of drop.condiciones) {
      const key = `${cond.tipo}|${cond.rango}`;
      if (!groups[key]) groups[key] = { tipo: cond.tipo, rango: cond.rango, items: [] };
      groups[key].items.push({
        nombre:       drop.nombre,
        rareza:       drop.rareza,
        probabilidad: cond.probabilidad,
        parte:        cond.parte ?? null,
      });
    }
  }

  const sortedKeys = Object.keys(groups).sort((a, b) => {
    const [tipoA, rangoA] = a.split('|');
    const [tipoB, rangoB] = b.split('|');
    const iA = TIPO_DROP_ORDER.indexOf(tipoA);
    const iB = TIPO_DROP_ORDER.indexOf(tipoB);
    if (iA !== iB) return iA - iB;
    return rangoA === 'low' ? -1 : 1;
  });

  const groupEls = sortedKeys.map(key => {
    const g = groups[key];
    const sorted = [...g.items].sort((a, b) => b.probabilidad - a.probabilidad);

    const RAREZA_CLASS = { 4: '', 5: 'drop-r5', 6: 'drop-r6', 7: 'drop-r7' };

    const rows = sorted.map(item => {
      const nameContent = [item.nombre];
      if (item.parte) {
        nameContent.push(el('span', { class: 'drop-parte' }, prettifyParte(item.parte)));
      }
      return el('tr', {},
        el('td', { class: 'drop-nombre' }, ...nameContent),
        el('td', { class: `drop-rareza ${RAREZA_CLASS[item.rareza] ?? ''}` }, '★'.repeat(item.rareza - 3)),
        el('td', { class: 'drop-pct' }, `${item.probabilidad}%`)
      );
    });

    const titulo = `${TIPO_DROP_ES[g.tipo] ?? g.tipo} — ${RANGO_ES[g.rango] ?? g.rango}`;
    return el('div', { class: 'drop-group' },
      el('h4', { class: 'drop-group-title' }, titulo),
      el('table', { class: 'drop-table' },
        el('thead', {},
          el('tr', {},
            el('th', {}, 'Objeto'),
            el('th', { class: 'drop-rareza' }, 'R'),
            el('th', { class: 'drop-pct' }, '%')
          )
        ),
        el('tbody', {}, ...rows)
      )
    );
  });

  return el('div', { class: 'section full-width' },
    el('h3', {}, 'Recompensas'),
    el('div', { class: 'section-body' },
      el('p', { class: 'section-note' }, 'Objetos obtenibles al cazar este monstruo. Los rangos dependen del rango de la misión.'),
      el('div', { class: 'drops-grid' }, ...groupEls)
    )
  );
}

// ── Render principal ──────────────────────────────────────────────────────────

function render() {
  const root   = document.getElementById('detail-root');
  const params = new URLSearchParams(window.location.search);
  const id     = params.get('id');

  const monster = MONSTERS.find(m => m.id === id);

  if (!monster) {
    root.appendChild(el('div', { class: 'not-found' },
      el('p', {}, 'Monstruo no encontrado.'),
      el('a', { href: 'index.html', class: 'back-link', style: 'margin-top:16px;display:inline-flex' }, '← Volver')
    ));
    return;
  }

  document.title = `MH Wilds — ${monster.nombre}`;

  const badges = monster.elementos_efectivos.length > 0
    ? monster.elementos_efectivos.map(k => {
        return el('img', { src: ELEM_ICONS[k], alt: LABELS.elementos[k], title: LABELS.elementos[k], class: 'elem-icon elem-icon-lg' });
      })
    : [el('span', { class: 'badge badge-ninguno' }, 'Débil a todos los elementos')];

  const img = el('img', { src: `src/${monster.id}.png`, alt: monster.nombre, class: 'detail-img' });
  img.onerror = () => { img.style.display = 'none'; };

  // Badge de tipo
  const TIPO_CLASS = { normal: 'badge-tipo--normal', curtido: 'badge-tipo--curtido', hipercurtido: 'badge-tipo--hipercurtido', colera: 'badge-tipo--colera' };
  const tipoBadge = monster.tipo.length ? (() => {
    const wrap = el('div', { class: 'card-info-tipos' });
    monster.tipo.forEach(t => {
      wrap.appendChild(el('span', { class: `badge-tipo ${TIPO_CLASS[t] || ''}` }, LABELS.tipos[t] || t));
    });
    return wrap;
  })() : null;

  // Badge de capturabilidad
  const capturaBadge = el('span', {
    class: monster.capturable ? 'badge-captura badge-captura--si' : 'badge-captura badge-captura--no'
  }, monster.capturable ? '✓ Capturable' : '✗ No capturable');

  const especieBadge = monster.especie
    ? el('span', { class: 'badge-especie' }, ESPECIE_ES[monster.especie] ?? monster.especie)
    : null;

  const zonaText = monster.zonas && monster.zonas.length
    ? el('p', { class: 'weakpoint-line', style: 'margin-top:6px' },
        'Zona: ', el('span', {}, monster.zonas.join(', '))
      )
    : null;

  const descripcionEl = monster.descripcion
    ? el('p', { class: 'monster-descripcion' }, monster.descripcion)
    : null;

  const header = el('div', { class: 'detail-header' },
    el('div', { class: 'detail-header-nav' },
      el('a', { href: 'index.html', class: 'back-link' }, '← Todos los monstruos'),
      el('a', { href: `calculator.html?id=${monster.id}`, class: 'calc-link' }, '🗡 Calcular daño')
    ),
    el('div', { class: 'detail-hero' },
      img,
      el('div', { class: 'detail-hero-info' },
        el('h2', {}, monster.nombre),
        el('div', { class: 'detail-hero-badges' }, tipoBadge, capturaBadge, especieBadge),
        ...(descripcionEl ? [descripcionEl] : []),
        el('p', { class: 'weakpoint-line', style: 'margin-top:8px' },
          'Punto débil principal: ', el('span', {}, monster.punto_debil)
        ),
        el('div', { class: 'element-badges', style: 'margin-top:6px' },
          el('span', { class: 'weakpoint-line', style: 'margin-right:6px' }, 'Debilidad principal:'),
          ...badges
        ),
        ...(zonaText ? [zonaText] : [])
      )
    )
  );

  const hitzoneSection = buildHitzoneTable(monster.id);
  const dropsSection   = buildDrops(monster);

  const detail = el('div', { class: 'monster-detail' },
    header,
    el('div', { class: 'detail-grid' },
      buildElementos(monster),
      buildEstados(monster),
      buildObjetos(monster),
      buildAtaques(monster),
      hitzoneSection,
      ...(dropsSection ? [dropsSection] : [])
    )
  );

  root.appendChild(detail);
}

render();
