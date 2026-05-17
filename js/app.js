const ELEM_IMG = {
  fuego:  'src/elements/fire.png',
  agua:   'src/elements/water.png',
  rayo:   'src/elements/thunder.png',
  hielo:  'src/elements/ice.png',
  dragon: 'src/elements/dragon.png',
};

const TIPO_BADGE_CLASS = {
  normal:       'badge-tipo--normal',
  curtido:      'badge-tipo--curtido',
  hipercurtido: 'badge-tipo--hipercurtido',
  colera:       'badge-tipo--colera',
};

const grid         = document.getElementById('monster-grid');
const search       = document.getElementById('search');
const itemSearch   = document.getElementById('item-search');
const itemDropdown = document.getElementById('item-search-dropdown');

const tipoBtns  = document.querySelectorAll('#filter-tipo .filter-btn');
const elemBtns  = document.querySelectorAll('#filter-elem .filter-btn');
const estadoBtns= document.querySelectorAll('#filter-estado .filter-btn');

let activeTipo   = '';
let activeElem   = '';
let activeEstado = '';
let activeItem   = '';

// Construir todas las cards de una vez
const cards = MONSTERS.map(monster => {
  const card = document.createElement('a');
  card.className = 'monster-card';
  card.href = `monster.html?id=${monster.id}`;
  card.dataset.nombre    = monster.nombre.toLowerCase();
  card.dataset.elementos = monster.elementos_efectivos.join(',');
  card.dataset.tipos     = monster.tipo.join(',');
  const estadosAltos = Object.entries(monster.estados)
    .filter(([, v]) => v === 3)
    .map(([k]) => k);
  card.dataset.estados = estadosAltos.join(',');
  const dropNames = (monster.drops || []).map(d => d.nombre.toLowerCase());
  card.dataset.drops = dropNames.join('|');

  const tipoBadge = monster.tipo.length ? `<div class="card-info-tipos">${
    monster.tipo.map(t =>
      `<span class="badge-tipo ${TIPO_BADGE_CLASS[t] || ''}">${LABELS.tipos[t] || t}</span>`
    ).join('')
  }</div>` : '';

  const elemContent = monster.elementos_efectivos.length > 0
    ? monster.elementos_efectivos
        .map(key => `<img src="${ELEM_IMG[key]}" alt="${LABELS.elementos[key]}" title="${LABELS.elementos[key]}" class="elem-icon">`)
        .join('')
    : `<span style="color:var(--text-muted);font-size:0.75rem">Todos</span>`;

  const img = document.createElement('img');
  img.src = `src/${monster.id}.png`;
  img.alt = monster.nombre;
  img.className = 'card-img';
  img.onerror = () => { img.style.display = 'none'; };

  const wrap = document.createElement('div');
  wrap.className = 'card-img-wrap';
  wrap.appendChild(img);
  wrap.insertAdjacentHTML('beforeend', `<div class="card-name-overlay">${monster.nombre}</div>`);

  card.appendChild(wrap);
  card.insertAdjacentHTML('beforeend', `
    <div class="card-info">
      ${tipoBadge ? `<div class="card-info-row"><span class="card-info-label">Categoría</span>${tipoBadge}</div>` : ''}
      <div class="card-info-row">
        <span class="card-info-label">Punto débil</span>
        <span class="card-info-value">${monster.punto_debil}</span>
      </div>
      <div class="card-info-row">
        <span class="card-info-label">Débil a</span>
        <div class="card-info-elems">${elemContent}</div>
      </div>
    </div>
  `);

  grid.appendChild(card);
  return card;
});

const dropdown = document.getElementById('search-dropdown');

function applyFilters() {
  const query = search.value.toLowerCase().trim();
  cards.forEach(card => {
    const nameMatch   = card.dataset.nombre.includes(query);
    const elemMatch   = !activeElem   || card.dataset.elementos.split(',').includes(activeElem);
    const tipoMatch   = !activeTipo   || card.dataset.tipos.split(',').includes(activeTipo);
    const estadoMatch = !activeEstado || card.dataset.estados.split(',').includes(activeEstado);
    const itemMatch   = !activeItem   || card.dataset.drops.split('|').some(d => d.includes(activeItem));
    card.style.display = nameMatch && elemMatch && tipoMatch && estadoMatch && itemMatch ? '' : 'none';
  });
}

// ── Buscador de objetos ─────────────────────────────────────────────────────

// Índice global: nombre_drop → [monster, ...]
const dropIndex = new Map();
MONSTERS.forEach(m => {
  (m.drops || []).forEach(d => {
    const key = d.nombre.toLowerCase();
    if (!dropIndex.has(key)) dropIndex.set(key, []);
    dropIndex.get(key).push(m);
  });
});

function showItemDropdown(query) {
  itemDropdown.innerHTML = '';
  if (!query) { itemDropdown.hidden = true; return; }

  const matches = [];
  for (const [nombre] of dropIndex) {
    if (nombre.includes(query)) matches.push(nombre);
  }

  if (!matches.length) { itemDropdown.hidden = true; return; }

  matches.sort((a, b) => {
    const aStart = a.startsWith(query) ? 0 : 1;
    const bStart = b.startsWith(query) ? 0 : 1;
    return aStart - bStart || a.localeCompare(b);
  });

  matches.forEach(nombre => {
    const monsters = dropIndex.get(nombre);
    const li = document.createElement('li');
    li.className = 'search-option';

    const nameEl = document.createElement('span');
    nameEl.textContent = monsters[0].drops.find(d => d.nombre.toLowerCase() === nombre).nombre;

    const monEl = document.createElement('span');
    monEl.className = 'item-drop-monsters';
    monEl.textContent = monsters.map(m => m.nombre).join(', ');

    li.appendChild(nameEl);
    li.appendChild(monEl);

    li.addEventListener('mousedown', () => {
      itemSearch.value = monsters[0].drops.find(d => d.nombre.toLowerCase() === nombre).nombre;
      activeItem = nombre;
      itemDropdown.hidden = true;
      search.value = '';
      applyFilters();
    });
    itemDropdown.appendChild(li);
  });

  itemDropdown.hidden = false;
}

itemSearch.addEventListener('input', () => {
  const q = itemSearch.value.toLowerCase().trim();
  if (!q) {
    activeItem = '';
    itemDropdown.hidden = true;
    applyFilters();
    return;
  }
  showItemDropdown(q);
  activeItem = q;
  applyFilters();
});
itemSearch.addEventListener('blur',  () => { itemDropdown.hidden = true; });
itemSearch.addEventListener('focus', () => {
  const q = itemSearch.value.toLowerCase().trim();
  if (q) showItemDropdown(q);
});

function showDropdown(query) {
  dropdown.innerHTML = '';
  if (!query) { dropdown.hidden = true; return; }

  const matches = MONSTERS.filter(m => m.nombre.toLowerCase().includes(query));
  if (!matches.length) { dropdown.hidden = true; return; }

  matches.forEach(m => {
    const li = document.createElement('li');
    li.className = 'search-option';
    li.textContent = m.nombre;
    li.addEventListener('mousedown', () => {
      search.value = m.nombre;
      dropdown.hidden = true;
      applyFilters();
    });
    dropdown.appendChild(li);
  });

  dropdown.hidden = false;
}

function bindFilterGroup(btns, getter, setter) {
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setter(getter(btn));
      applyFilters();
    });
  });
}

search.addEventListener('input', () => {
  applyFilters();
  showDropdown(search.value.toLowerCase().trim());
});
search.addEventListener('blur',  () => { dropdown.hidden = true; });
search.addEventListener('focus', () => {
  if (search.value.trim()) showDropdown(search.value.toLowerCase().trim());
});

bindFilterGroup(tipoBtns,   btn => btn.dataset.tipo,   v => { activeTipo   = v; });
bindFilterGroup(elemBtns,   btn => btn.dataset.elem,   v => { activeElem   = v; });
bindFilterGroup(estadoBtns, btn => btn.dataset.estado, v => { activeEstado = v; });
