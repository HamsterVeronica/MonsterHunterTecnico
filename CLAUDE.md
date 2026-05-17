# MH Wilds - Monster Encyclopedia

## Project Overview
A simple static web app (HTML + CSS + JS, no frameworks) that displays all Monster Hunter Wilds monsters and their detailed stats, plus a damage calculator. Runs directly in the browser by opening `index.html` — no server required.

## Stack
- Pure HTML, CSS, and JavaScript — no build tools, no frameworks, no dependencies
- Data stored as `.js` files with global `const` declarations (`.json` files also exist as human-readable reference but are not loaded by the browser — `file://` protocol blocks `fetch()` for local JSON)
- Navigation between pages via URL query params (e.g., `monster.html?id=rathalos`)

## File Structure
```
index.html              → Monster list/grid view (DONE)
monster.html            → Monster detail page with hitzones (DONE)
calculator.html         → Damage calculator — avg damage per body part (DONE)
advanced.html           → Advanced calculator — damage per attack move (DONE)

css/style.css           → All shared styles — dark theme, element color coding (DONE)
css/calculator.css      → Calculator + advanced calculator styles (DONE)

js/app.js               → Renders the monster grid on index.html (DONE)
js/monster.js           → Detail page logic — loads hitzones, renders stats (DONE)
js/calculator.js        → Basic calculator logic (DONE)
js/advanced.js          → Advanced calculator logic (DONE)

data/labels.js          → Single source of truth for all display names (DONE)
data/monsters.js        → All 34 monsters as a global JS array (DONE)
data/hitzones.js        → Hitzone values per monster, body part, and variant (DONE)
data/weapons.js         → 14 weapon types with bloat and damage type (DONE)
data/motion-values.js   → Motion values (MV) per weapon (DONE)
data/skills.js          → All 179 skills from the game (id, name, kind, ranks[]) (DONE)

data/labels.json        → Human-readable copy of labels (reference only)
data/monsters.json      → Human-readable copy of monster data (reference only)
data/weapons.json       → Human-readable copy of weapons data (reference only)
scripts/extract-hitzones.js       → Script to generate hitzones.js from raw data
scripts/extract-motion-values.js  → Script to generate motion-values.js
scripts/matrix-arkveld.js         → Arkveld-specific matrix helper script

src/                    → Static image assets
  *.png                 → Monster portrait images (one per monster id)
  logoV.png             → Footer logo
  elements/             → Element icons (fire, water, thunder, ice, dragon)
  status/               → Status icons (poison, sleep, paralysis, stun, exhaust, blastblight)
  weapons/              → Weapon type icons (gs, hammer, lb…)
```

## Data Shape

### LABELS (data/labels.js)
Keys: `elementos`, `estados`, `objetos`, `intensidad_ataque`, `alteraciones`, `efectividad_estado`, `ataques_especiales`, `tipos`

### MONSTERS (data/monsters.js) — each monster has:
- `id` — URL slug (e.g. `"rathalos"`)
- `nombre` — display name in Spanish
- `tipo` — array of type strings: `["curtido"]`, `["hipercurtido"]`, `["colera"]`, or combinations
- `capturable` — `true` / `false` (false for the 3 jefes: Zoh Shia, Omega Planetes, Gogmazios)
- `punto_debil` — weak body part(s)
- `elementos_efectivos` — array of most effective element keys (e.g. `["rayo"]`)
- `elementos` — object with multipliers: `{ fuego, agua, rayo, hielo, dragon }` (higher = more effective)
- `estados` — susceptibility 0–3 per status: `{ veneno, sueno, paralisis, nitro, aturdido, agotamiento }`
- `ataques_especiales` — `{ rugido, temblor_viento, ataque_elemental[], efecto_estado[] }`
  - `rugido` / `temblor_viento`: key from `LABELS.intensidad_ataque` or `null`
  - `ataque_elemental` / `efecto_estado`: arrays of keys from `LABELS.alteraciones`
- `objetos` — `{ eslinga_flash, bomba_sonica, trampa_electrica, trampa_escollo }` — booleans
- `inmune_objetos` — `true` for Zoh Shia, Omega Planetes, Gogmazios
- `notas` — free-text field with resistance/tip notes

### HITZONES (data/hitzones.js)
```
HITZONES[monster_id][part_name][variant] = {
  corte, impacto, proyectil,
  fuego, agua, rayo, hielo, dragon,
  aturdido
}
```
- `part_name` — English key (e.g. `"Head"`) — translated to Spanish via `PARTES_ES` dict in `monster.js`, `calculator.js`, and `advanced.js`
- `variant` — `"normal"` | `"herida"` | `"punto_debil"` (not all parts have all variants)

### WEAPONS (data/weapons.js)
```js
{ id, nombre, bloat, tipo_dano: 'corte'|'impacto'|'proyectil', clase: 'melé'|'distancia' }
```
14 weapons total. `bloat` is the divisor to get true raw from displayed attack.

### MOTION_VALUES (data/motion-values.js)
```
MOTION_VALUES[weapon_id].ataques = [{ nombre, mv_raw, mv_elem }]
MOTION_VALUES[weapon_id].raw  = { avg, min, max }   ← derived from mv_raw
MOTION_VALUES[weapon_id].elem = { avg, min, max }   ← derived from mv_elem (null if no element MV)
```
Attack counts per weapon range from 31 (Heavy Bowgun) to 172 (Dual Blades).

### SKILLS_DB (data/skills.js)
```js
[{ id, name, kind: 'weapon'|'armor'|'set', ranks: [{ level, description }] }]
```
179 skills total. Used for the calculator's skill search UI.

## Calculator Architecture (calculator.html + calculator.js)

### Sharpness
Seven levels, each with `raw` and `elem` multipliers applied to the respective damage components:
```
red:    { raw: 0.50, elem: 0.25  }
orange: { raw: 0.75, elem: 0.50  }
yellow: { raw: 1.00, elem: 0.75  }
green:  { raw: 1.05, elem: 1.00  }
blue:   { raw: 1.20, elem: 1.0625}
white:  { raw: 1.32, elem: 1.15  }
purple: { raw: 1.39, elem: 1.27  }
```

### Damage Formula
```
trueRaw       = displayedAttack / weapon.bloat   (or entered directly in "Real" mode)
trueRawBoosted= (trueRaw + skillAtkFlat) * (1 + skillAtkPct)
rawBase       = trueRawBoosted * sharpness.raw

Physical (avg) = rawBase * (mv.avg/100) * (hzRaw/100) * critMult
Elemental (avg)= (elemValBoosted/10) * sharpness.elem * (mvElem.avg ?? 1) * (hzElem/100)
Total          = Physical + Elemental
```
- Min/max range uses `mv.min` / `mv.max` instead of `mv.avg` (same for `mvElem`)
- `elemValBoosted = elemVal * (1 + skillElemPct) + skillElemFlat` (0 if no elem entered)
- `critMult = 1 + (effAffinity/100) * critBonus` where `critBonus` defaults to 0.25
- `effAffinity = Math.min(100, baseAffinity + wexBonus)` — capped at 100%
- `baseAffinity` = affinity input + Ojo crítico skill bonus
- `WEX_MIN_HZ = 45` — minimum hitzone value for Punto débil base bonus to activate

### SUPPORTED_SKILLS (calculator.js and advanced.js — identical in both)
Only these skill IDs actually affect the calculation. Others show "sin efecto" in the UI.
```
id=3   Ojo crítico      → type:'affinity'   perLevel:[0,4,8,12,16,20] (% added to affinity)
id=22  Bonus críticos   → type:'crit_bonus' perLevel:[0.25,0.28,0.31,0.34,0.37,0.40]
id=41  Ataque de draco  → type:'elem' elem:'dragon'  perLevel:[{flat,pct}×4]
id=50  Ataque de fuego  → type:'elem' elem:'fuego'   perLevel:[{flat,pct}×4]
id=57  Punto débil      → type:'wex'  wexBase:[0,5,10,15,20,30] wexWound:[0,3,5,10,15,20]
id=72  Bonus de ataque  → type:'attack'              perLevel:[{flat,pct}×6]
id=91  Ataque de agua   → type:'elem' elem:'agua'    perLevel:[{flat,pct}×4]
id=121 Ataque de hielo  → type:'elem' elem:'hielo'   perLevel:[{flat,pct}×4]
id=127 Ataque de rayo   → type:'elem' elem:'rayo'    perLevel:[{flat,pct}×4]
```
- `wexBase` applies when hitzone `hzRaw >= 45`; `wexWound` applies when variant is `'herida'` (stackable)
- Elem skills: `flat` added after `pct` scaling → `elemVal * (1 + pct) + flat`
- Attack skill: applied to trueRaw → `(trueRaw + flat) * (1 + pct)`
- To add a new supported skill: add its entry to `SUPPORTED_SKILLS` in both files — the UI handles it automatically

### Skill System (calculator.js / advanced.js)
- `activeSkills` — module-level array: `[{ skillId, level, enabled }]`
- `SKILLS_DB` (from data/skills.js) drives the search UI — all 179 skills searchable
- Only skills present in `SUPPORTED_SKILLS` contribute to the damage calculation

### Calculator UI State (calculator.js)
- `attackMode` — `'shown'` | `'real'` — whether attack input is displayed or true raw
- `currentVariant` — `'normal'` | `'herida'` | `'punto_debil'` — controlled by tabs rendered inside results
- Variant tabs only appear when the selected monster has herida/punto_debil data
- Monster selector is a custom dropdown (not native `<select>`) with image thumbnails + search filter
- `affinityInput` — numeric field for base weapon affinity (range −100 to 100); Ojo crítico is added on top of this
- Results update live on every input change

## Advanced Calculator Architecture (advanced.html + advanced.js)

Shows damage broken down **per attack move** against a specific monster part, instead of an average across all attacks.

### Differences from the basic calculator
- Requires selecting a **specific body part** (`part-select`) in addition to monster — results are per-attack for that part
- Uses `atk.mv_raw` and `atk.mv_elem` directly from `MOTION_VALUES[weapon].ataques` instead of the pre-computed avg/min/max
- Per-attack formula:
  ```
  Physical  = rawBase * (atk.mv_raw / 100) * (hzRaw / 100) * critMult
  Elemental = elemBase * (atk.mv_elem || 1) * (hzElem / 100)
  ```
- Results rendered as **cards** in a responsive grid (3 cols desktop → 2 cols tablet/mobile)
- Cards sortable by **Total damage** or **MV** via toggle buttons
- Attack filter input narrows cards by name in real time (post-calculation)
- Variant tabs (Normal / Herida / Punto débil) per the selected part — only shown if the part has those variants

### Collapsible config UX
- `hasCalculated` flag — results do NOT update live while filling in fields; the table only appears on button click
- **"Calcular ▸"** button: validates all required fields (weapon + attack + monster + part), runs `calcAdvanced()`, sets `hasCalculated = true`, collapses the config panel with a CSS grid-row animation
- When collapsed, a summary bar shows key params as chips (weapon · attack · sharpness · element · monster · part · skills)
- **"✎ Editar parámetros"** button re-expands the config; table stays visible
- After `hasCalculated = true`: sort toggle, search filter, skill changes, and variant tabs DO trigger recalculation live

### Constants duplicated in advanced.js
`PARTES_ES`, `SHARPNESS`, `TIPO_LABEL`, `WEX_MIN_HZ`, `SUPPORTED_SKILLS` — identical copies from `calculator.js`. If values change, update both files.

## Design
- Dark theme (`#0d0d17` background)
- Element colors: Fuego=#e05252, Agua=#3a8fd8, Rayo=#e8c840, Hielo=#6ab4f0, Dragón=#9b5de5
- Efectividad status colors: Inmune=red, Baja=muted, Normal=default, Alta=green
- CSS variables defined in `:root` in `style.css`
- Shared styles for `index.html` and `monster.html` in `style.css`; calculator + advanced styles in `calculator.css`
- Footer on all pages: logo (`src/logoV.png`) + "Creado por Nausicaä — V" + thanks to Jairo and Ghydral

## Conventions
- No external libraries
- Mobile-friendly (CSS Grid with `auto-fill`)
- All user-facing strings come from `LABELS` — never hardcode display names in JS or HTML
- Body part names stored in English in `HITZONES`, translated at render time via `PARTES_ES` dictionary
- Keep it simple — no over-engineering
- Monster types in Wilds: `curtido`, `hipercurtido`, `colera` — stored as arrays in `tipo` field
