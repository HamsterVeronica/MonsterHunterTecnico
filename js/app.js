const ELEM_IMG = {
  fuego:  'src/elements/fire.png',
  agua:   'src/elements/water.png',
  rayo:   'src/elements/thunder.png',
  hielo:  'src/elements/ice.png',
  dragon: 'src/elements/dragon.png',
};

const grid   = document.getElementById('monster-grid');
const search = document.getElementById('search');
const elBtns = document.querySelectorAll('.filter-btn[data-elem]');

let activeElem = '';

// Construir todas las cards de una vez
const cards = MONSTERS.map(monster => {
  const card = document.createElement('a');
  card.className = 'monster-card';
  card.href = `monster.html?id=${monster.id}`;
  card.dataset.nombre = monster.nombre.toLowerCase();
  card.dataset.elementos = monster.elementos_efectivos.join(',');

  const badges = monster.elementos_efectivos.length > 0
    ? monster.elementos_efectivos
        .map(key => `<img src="${ELEM_IMG[key]}" alt="${LABELS.elementos[key]}" title="${LABELS.elementos[key]}" class="elem-icon">`)
        .join('')
    : `<span class="badge badge-ninguno">Todos</span>`;

  const img = document.createElement('img');
  img.src = `src/${monster.id}.png`;
  img.alt = monster.nombre;
  img.className = 'card-img';
  img.onerror = () => { img.style.display = 'none'; };

  card.insertAdjacentHTML('beforeend', `
    <div class="card-name">${monster.nombre}</div>
  `);
  card.appendChild(img);
  card.insertAdjacentHTML('beforeend', `
    <div class="card-body">
      <div class="card-weakpoint">Punto débil: <span>${monster.punto_debil}</span></div>
      <div class="card-weakness">
        <span class="card-weakness-label">Debilidad</span>
        <div class="element-badges">${badges}</div>
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
    const nameMatch = card.dataset.nombre.includes(query);
    const elemMatch = !activeElem || card.dataset.elementos.split(',').includes(activeElem);
    card.style.display = nameMatch && elemMatch ? '' : 'none';
  });
}

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

search.addEventListener('input', () => {
  applyFilters();
  showDropdown(search.value.toLowerCase().trim());
});

search.addEventListener('blur', () => { dropdown.hidden = true; });
search.addEventListener('focus', () => {
  if (search.value.trim()) showDropdown(search.value.toLowerCase().trim());
});

elBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    elBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeElem = btn.dataset.elem;
    applyFilters();
  });
});
