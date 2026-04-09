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
    el('h3', {}, 'Daño adicional elemental'),
    el('p', { class: 'section-note' },
      'El valor indica cuánto daño elemental adicional recibe. Multiplica tu daño elemental por el valor --> luego súmalo al daño elemental.',
      el('br', {}),
      el('br', {}),
      `Ej: (Daño elemental x ${monster.elementos[ELEM_KEYS[0]]}) + Daño elemental`
    ),
    el('div', { class: 'elem-table' }, ...rows)
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
    el('h3', {}, 'Estados'),
    el('p', { class: 'section-note' }, 'Facilidad con la que se le aplican estados alterados al monstruo.'),
    el('div', { class: 'estado-table' }, ...rows)
  );
}

function buildObjetos(monster) {
  if (monster.inmune_objetos) {
    return el('div', { class: 'section' },
      el('h3', {}, 'Efectividad de Objetos'),
      el('p', { class: 'section-note' }, 'Indica si el objeto surte efecto sobre el monstruo.'),
      el('p', { class: 'objeto-no', style: 'font-size:0.85rem;margin-top:8px' }, 'Inmune a todos los objetos')
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
    el('h3', {}, 'Efectividad de Objetos'),
    el('p', { class: 'section-note' }, 'Indica si el objeto surte efecto sobre el monstruo.'),
    el('div', { class: 'objetos-list' }, ...rows)
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
    el('p', { class: 'section-note' }, 'Efectos que el monstruo puede infligir sobre el jugador durante el combate.'),
    el('div', { class: 'ataques-list' }, ...rows)
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
  if (!data) return null;

  const parts = Object.keys(data);

  // Detectar qué variantes existen
  const hasHerida    = parts.some(p => data[p].herida);
  const hasPuntoDebil = parts.some(p => data[p].punto_debil);
  const variants     = ['normal'];
  if (hasHerida)     variants.push('herida');
  if (hasPuntoDebil) variants.push('punto_debil');

  const VARIANT_LABEL = { normal: 'Normal', herida: 'Herida', punto_debil: 'Punto débil' };

  let activeVariant = 'normal';

  // Construir thead
  const isMobile = () => window.innerWidth <= 600;

  const thead = el('thead', {},
    el('tr', {},
      el('th', { class: 'hz-th hz-part' }, 'Parte'),
      ...HZ_COLS.map(c => {
        const th = el('th', { class: `hz-th${c.elem ? ' hz-elem' : ''}${c.sep ? ' hz-sep' : ''}` });
        if (c.icon && !isMobile()) {
          const img = el('img', { src: c.icon, alt: c.label, class: 'hz-col-icon' });
          th.appendChild(img);
          // Elementos: solo icono. Armas: icono + texto
          if (!c.elem) th.appendChild(document.createTextNode(' ' + c.label));
        } else {
          th.textContent = isMobile() ? c.short : c.label;
        }
        return th;
      })
    )
  );

  // Construir tbody
  function buildRows(variant) {
    return parts.map(part => {
      const hasVariant = !!data[part][variant];
      const rowData    = hasVariant ? data[part][variant] : data[part].normal;
      // Si el variant pedido no existe en esta parte, mostrar 0 en todas las celdas
      const showZero   = variant !== 'normal' && !hasVariant;

      return el('tr', {},
        el('td', { class: 'hz-part-cell' }, PARTES[part] || part),
        ...HZ_COLS.map(c => {
          const val = showZero ? 0 : rowData[c.key];
          return el('td', { class: `hz-cell ${hzClass(val)}${c.elem ? ' hz-elem' : ''}${c.sep ? ' hz-sep' : ''}` }, String(val));
        })
      );
    });
  }

  const tbody = el('tbody', {}, ...buildRows('normal'));

  const table = el('table', { class: 'hz-table' }, thead, tbody);
  const wrap  = el('div', { class: 'hz-scroll' }, table);

  // Botones de variante
  let btnGroup = null;
  if (variants.length > 1) {
    const btns = variants.map(v => {
      const btn = el('button', { class: `hz-btn${v === 'normal' ? ' active' : ''}` }, VARIANT_LABEL[v]);
      btn.addEventListener('click', () => {
        activeVariant = v;
        // Limpiar tbody
        while (tbody.firstChild) tbody.removeChild(tbody.firstChild);
        buildRows(v).forEach(row => tbody.appendChild(row));
        // Actualizar botones
        btnGroup.querySelectorAll('.hz-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
      return btn;
    });
    btnGroup = el('div', { class: 'hz-btn-group' }, ...btns);
  }

  return el('div', { class: 'section full-width' },
    el('h3', {}, 'Daño por zona'),
    ...(btnGroup ? [btnGroup] : []),
    wrap
  );
}

// ── Render principal ──────────────────────────────────────────────────────────

function render() {
  const root = document.getElementById('detail-root');
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
        const i = el('img', { src: ELEM_ICONS[k], alt: LABELS.elementos[k], title: LABELS.elementos[k], class: 'elem-icon elem-icon-lg' });
        return i;
      })
    : [el('span', { class: 'badge badge-ninguno' }, 'Debil a todos los elementos')];

  const img = el('img', { src: `src/${monster.id}.png`, alt: monster.nombre, class: 'detail-img' });
  img.onerror = () => { img.style.display = 'none'; };

  const header = el('div', { class: 'detail-header' },
    el('div', { class: 'detail-header-nav' },
      el('a', { href: 'index.html', class: 'back-link' }, '← Todos los monstruos'),
      el('a', { href: `calculator.html?id=${monster.id}`, class: 'calc-link' }, '🗡 Calcular daño')
    ),
    el('div', { class: 'detail-hero' },
      img,
      el('div', { class: 'detail-hero-info' },
        el('h2', {}, monster.nombre),
        el('p', { class: 'weakpoint-line' },
          'Punto débil: ', el('span', {}, monster.punto_debil)
        ),
        el('div', { class: 'element-badges', style: 'margin-top:10px' },
          el('span', { class: 'weakpoint-line', style: 'margin-right:6px' }, 'Débil a:'),
          ...badges
        )
      )
    )
  );

  const hitzoneSection = buildHitzoneTable(monster.id);

  const detail = el('div', { class: 'monster-detail' },
    header,
    el('div', { class: 'detail-grid' },
      buildElementos(monster),
      buildEstados(monster),
      buildObjetos(monster),
      buildAtaques(monster),
      ...(hitzoneSection ? [hitzoneSection] : [])
    )
  );

  root.appendChild(detail);
}

render();
