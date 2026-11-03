const STORAGE_KEY = 'stationfall-field-terminal-v1';

const characters = [
  { id:'astro-chimp', name:'Astro-Chimp', role:'Lab escapee', code:'AC', accent:'#e6a84a', traits:['Creature','Agile','Sneaky'], ability:'Zero-G Savant', abilityText:'Excels at improvised movement and hard-to-reach routes.', objective:'Keep the clever primate alive and one step ahead of station security.', start:'Bio Lab' },
  { id:'billionaire', name:'Billionaire', role:'Station patron', code:'BL', accent:'#d9c678', traits:['Human','Wealthy','Influential'], ability:'Open Account', abilityText:'Money, access, and leverage turn locked doors into suggestions.', objective:'Convert influence into a clean escape before the station falls.', start:'Executive Suite' },
  { id:'botanist', name:'Botanist', role:'Xenoflora specialist', code:'BT', accent:'#8fc48f', traits:['Human','Scientist','Calm'], ability:'Field Samples', abilityText:'Understands hazardous plants, spores, and the station greenhouse.', objective:'Protect the specimen that matters and preserve the research.', start:'Hydroponics' },
  { id:'colonel', name:'Colonel', role:'Command officer', code:'CL', accent:'#d17259', traits:['Human','Armed','Command'], ability:'Chain of Command', abilityText:'Can turn a scattered group into an organized response.', objective:'Restore order—or at least make sure the right people survive.', start:'Command Deck' },
  { id:'counselor', name:'Counselor', role:'Crew therapist', code:'CO', accent:'#b2a0d2', traits:['Human','Diplomatic','Observant'], ability:'Read the Room', abilityText:'Sees pressure points and knows exactly when to push them.', objective:'Resolve a personal crisis hidden inside the larger catastrophe.', start:'Counseling' },
  { id:'cyborg', name:'Cyborg', role:'Augmented operative', code:'CY', accent:'#86b5c4', traits:['Cyborg','Strong','Technical'], ability:'Integrated Systems', abilityText:'Interfaces directly with station machinery and shrugs off punishment.', objective:'Complete the embedded directive before system failure.', start:'Machine Shop' },
  { id:'daredevil', name:'Daredevil', role:'Thrill seeker', code:'DD', accent:'#e4874f', traits:['Human','Agile','Famous'], ability:'No Fear', abilityText:'Treats impossible odds as an invitation to perform.', objective:'Turn disaster into the greatest story ever broadcast.', start:'Observation Ring' },
  { id:'engineer', name:'Engineer', role:'Systems specialist', code:'EN', accent:'#ddbb55', traits:['Human','Technical','Repair'], ability:'Jury-Rig', abilityText:'Coaxes damaged equipment through one last critical cycle.', objective:'Keep the station functional long enough to secure an exit.', start:'Engineering' },
  { id:'exile', name:'Exile', role:'Political fugitive', code:'EX', accent:'#a79a76', traits:['Human','Sneaky','Diplomatic'], ability:'False Papers', abilityText:'Moves through checkpoints by becoming whoever is expected.', objective:'Escape unnoticed with proof that could change everything.', start:'Docking Bay' },
  { id:'inspector', name:'Inspector', role:'Internal investigator', code:'IN', accent:'#82b0a0', traits:['Human','Observant','Authority'], ability:'Case File', abilityText:'Connects people, objects, and locations into a useful theory.', objective:'Expose the culprit before evidence burns with the station.', start:'Security' },
  { id:'medical-droid', name:'Medical Droid', role:'Emergency physician', code:'MD', accent:'#d4e2df', traits:['Robot','Medical','Technical'], ability:'Triage Protocol', abilityText:'Stabilizes patients while everyone else is still panicking.', objective:'Fulfil the care directive, even when priorities conflict.', start:'Infirmary' },
  { id:'mind-reader', name:'Mind Reader', role:'Psionic researcher', code:'MR', accent:'#bf87c7', traits:['Human','Psionic','Observant'], ability:'Surface Thoughts', abilityText:'Catches intentions just before they become actions.', objective:'Find the one mind on the station that cannot be ignored.', start:'Psi Lab' },
  { id:'ninja', name:'Ninja', role:'Covert infiltrator', code:'NJ', accent:'#8790a8', traits:['Human','Agile','Sneaky'], ability:'Shadow Route', abilityText:'Crosses dangerous territory without becoming the story.', objective:'Secure the target and leave no reliable witnesses.', start:'Maintenance' },
  { id:'pilot', name:'Pilot', role:'Shuttle ace', code:'PL', accent:'#6fb8d4', traits:['Human','Agile','Navigation'], ability:'Hot Launch', abilityText:'Makes an escape craft do things the manual insists are impossible.', objective:'Get the right vessel—and the right passengers—away safely.', start:'Flight Deck' },
  { id:'space-pirate', name:'Space Pirate', role:'Opportunistic raider', code:'SP', accent:'#d96161', traits:['Human','Armed','Sneaky'], ability:'Claim Salvage', abilityText:'Knows what is worth taking and how to make it disappear.', objective:'Leave richer than you arrived, preferably with your crew intact.', start:'Cargo Hold' },
  { id:'stowaway', name:'Stowaway', role:'Unlisted passenger', code:'ST', accent:'#b6a286', traits:['Human','Sneaky','Survivor'], ability:'Nobody Here', abilityText:'Turns overlooked spaces into safe routes and hiding places.', objective:'Stay off every manifest and get onto an outbound craft.', start:'Waste Processing' },
  { id:'telepathic-rat', name:'Telepathic Rat', role:'Psionic specimen', code:'TR', accent:'#cf9a86', traits:['Creature','Psionic','Tiny'], ability:'Whisper Network', abilityText:'Hears the station through vents, minds, and frightened vermin.', objective:'Free the colony and punish whoever called it an experiment.', start:'Ventilation' },
  { id:'xenobiologist', name:'Xenobiologist', role:'Alien life expert', code:'XB', accent:'#6fc29c', traits:['Human','Scientist','Medical'], ability:'Alien Physiology', abilityText:'Recognizes what is alive, what is dangerous, and what only looks dead.', objective:'Recover the breakthrough without becoming part of it.', start:'Containment' }
];

const locations = [
  { id:'command', name:'Command Deck', deck:'A-01', zone:'Command', description:'Station control, executive systems, and the best overview of a worsening situation.', tags:['Authority','Comms'] },
  { id:'security', name:'Security', deck:'A-03', zone:'Command', description:'Restricted records, weapons lockers, and surveillance access converge here.', tags:['Secure','Armed'] },
  { id:'flight', name:'Flight Deck', deck:'A-06', zone:'Command', description:'The quickest route to a shuttle—assuming launch control still answers.', tags:['Escape','Navigation'] },
  { id:'infirmary', name:'Infirmary', deck:'B-02', zone:'Habitat', description:'Medical supplies and treatment beds for injuries that cannot wait.', tags:['Medical','Recovery'] },
  { id:'executive', name:'Executive Suite', deck:'B-04', zone:'Habitat', description:'Private quarters with privileged access and expensive secrets.', tags:['Private','Influence'] },
  { id:'hydroponics', name:'Hydroponics', deck:'B-08', zone:'Habitat', description:'Dense cultivated growth, experimental flora, and several concealed paths.', tags:['Biological','Hazard'] },
  { id:'engineering', name:'Engineering', deck:'C-01', zone:'Systems', description:'The station heartbeat: power routing, damage control, and catastrophic failure.', tags:['Technical','Power'] },
  { id:'machine', name:'Machine Shop', deck:'C-03', zone:'Systems', description:'Tools, spare parts, and just enough machinery to improvise a solution.', tags:['Repair','Fabrication'] },
  { id:'maintenance', name:'Maintenance', deck:'C-07', zone:'Systems', description:'Narrow service corridors connecting the places passengers never see.', tags:['Hidden','Technical'] },
  { id:'bio-lab', name:'Bio Lab', deck:'D-02', zone:'Research', description:'Specimens, analysis equipment, and protocols that are no longer holding.', tags:['Science','Creature'] },
  { id:'psi-lab', name:'Psi Lab', deck:'D-05', zone:'Research', description:'Shielded chambers designed to keep thoughts from leaking into the station.', tags:['Psionic','Restricted'] },
  { id:'containment', name:'Containment', deck:'D-09', zone:'Research', description:'Heavy seals surround whatever the research team decided must not escape.', tags:['Secure','Alien'] },
  { id:'cargo', name:'Cargo Hold', deck:'E-03', zone:'Industrial', description:'Crates, contraband, loading equipment, and a direct route toward the docks.', tags:['Items','Escape'] },
  { id:'docking', name:'Docking Bay', deck:'E-06', zone:'Industrial', description:'Visiting craft and outbound traffic meet under increasingly unreliable clamps.', tags:['Escape','Public'] },
  { id:'waste', name:'Waste Processing', deck:'E-09', zone:'Industrial', description:'Noisy, unpleasant, and ideal for anyone trying not to be found.', tags:['Hidden','Hazard'] }
];

const projects = [
  { id:'helix', name:'Project HELIX', status:'BIOLOGICAL', summary:'Adaptive tissue capable of surviving vacuum exposure.', lead:'Bio Lab', clues:['living sample','gene key','containment seal'] },
  { id:'looking-glass', name:'Project LOOKING GLASS', status:'PSIONIC', summary:'A device that amplifies and records directed thought.', lead:'Psi Lab', clues:['resonator','shielding array','memory trace'] },
  { id:'icarus', name:'Project ICARUS', status:'PROPULSION', summary:'An experimental drive module built for impossible acceleration.', lead:'Engineering', clues:['drive core','coolant loop','launch code'] },
  { id:'janus', name:'Project JANUS', status:'SECURITY', summary:'Predictive identity software designed to expose impostors.', lead:'Security', clues:['access profile','camera mesh','override token'] },
  { id:'orchard', name:'Project ORCHARD', status:'XENOFLORA', summary:'A symbiotic plant network with unusual environmental control.', lead:'Hydroponics', clues:['seed vault','spore map','growth catalyst'] },
  { id:'lifeboat', name:'Project LIFEBOAT', status:'CLASSIFIED', summary:'A covert evacuation protocol with a very short passenger list.', lead:'Command Deck', clues:['manifest','captain key','shuttle beacon'] }
];

const state = {
  game: loadGame(),
  setupCount: 8,
  setupMode: 'manual',
  setupSelected: [],
  selectedTrait: 'Agile',
  filters: { characters:'', locations:'', projects:'' }
};

const app = document.querySelector('#app');
const headerActions = document.querySelector('#header-actions');
const bottomNav = document.querySelector('#bottom-nav');
const modalRoot = document.querySelector('#modal-root');
const toast = document.querySelector('#toast');

function loadGame() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return parsed?.characterIds?.length ? parsed : null;
  } catch { return null; }
}

function saveGame(game) {
  state.game = game;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(game));
}

function removeGame() {
  state.game = null;
  localStorage.removeItem(STORAGE_KEY);
}

function getRoster() {
  if (!state.game) return [];
  return state.game.characterIds.map(id => characters.find(character => character.id === id)).filter(Boolean);
}

function escapeHtml(value='') {
  return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function route() {
  const hash = location.hash.replace('#','') || 'home';
  const [view, id] = hash.split('/');
  closeModal();
  renderHeader(view);

  if (['game','characters','locations','projects','traits'].includes(view) && !state.game) {
    location.hash = '#home';
    return;
  }

  const renderers = { home:renderHome, setup:renderSetup, game:renderDashboard, characters:renderCharacters, locations:renderLocations, projects:renderProjects, traits:renderTraits };
  (renderers[view] || renderHome)(id);
  renderBottomNav(view);
  window.scrollTo({ top:0, behavior:'instant' });
  app.focus({ preventScroll:true });
}

function renderHeader(view) {
  if (state.game && view !== 'home' && view !== 'setup') {
    headerActions.innerHTML = `<span class="game-label status-tag">GAME SAVED</span><a class="btn btn-ghost" href="#home">Main menu</a>`;
  } else {
    headerActions.innerHTML = state.game ? `<a class="btn btn-ghost" href="#game">Resume</a>` : '';
  }
}

function renderBottomNav(view) {
  const gameViews = ['game','characters','locations','projects','traits'];
  if (!state.game || !gameViews.includes(view)) {
    bottomNav.hidden = true;
    return;
  }
  bottomNav.hidden = false;
  const items = [
    ['game','⌂','Brief'], ['characters','◎','Crew'], ['locations','⌖','Places'], ['projects','◇','Project X'], ['traits','≋','Traits']
  ];
  bottomNav.innerHTML = items.map(([routeName, icon, label]) => `<a href="#${routeName}" class="${view===routeName?'active':''}"><span>${icon}</span>${label}</a>`).join('');
}

function renderHome() {
  const activeGame = state.game ? `
    <section class="active-game">
      <div class="active-game-top">
        <div>
          <h3><span class="pulse"></span>Active game detected</h3>
          <p>${state.game.characterIds.length} characters · saved ${relativeTime(state.game.updatedAt)}</p>
        </div>
        <a class="btn btn-primary" href="#game">Continue game <span>→</span></a>
      </div>
    </section>` : '';

  app.innerHTML = `
    <section class="hero">
      <div>
        <p class="eyebrow">Station support system online</p>
        <h1>Your crew.<br>Your clues.<br><em>One terminal.</em></h1>
        <p class="lede">Set up a game, keep the characters in play close at hand, and find locations, projects, or traits before the station comes down.</p>
        ${activeGame}
        <div class="hero-actions">
          <button class="btn btn-primary" data-action="new-game">New game <span>＋</span></button>
          <a class="btn btn-secondary" href="#locations" ${state.game?'':'aria-disabled="true"'}>${state.game?'Open companion':'Set up to unlock companion'}</a>
        </div>
      </div>
      <div class="orbit-panel" aria-hidden="true">
        <div class="telemetry"><span>ORBIT 09.41</span><span>DECAY // ACTIVE</span></div>
        <div class="orbit"><i></i><i></i><i></i></div>
        <div class="station-core">FIELD<br>TERMINAL</div>
      </div>
    </section>`;

  app.querySelector('[data-action="new-game"]').addEventListener('click', startNewGame);
}

function startNewGame() {
  if (state.game) {
    openConfirm('Start a new game?', 'Your current roster will remain saved until you finish the new setup.', () => {
      state.setupSelected = [];
      location.hash = '#setup';
    });
  } else {
    state.setupSelected = [];
    location.hash = '#setup';
  }
}

function renderSetup() {
  const selected = new Set(state.setupSelected);
  const picker = state.setupMode === 'manual' ? `
    <div class="character-grid">
      ${characters.map(character => `
        <button class="character-pick ${selected.has(character.id)?'selected':''}" data-character="${character.id}" data-code="${character.code}" aria-pressed="${selected.has(character.id)}">
          <span class="check">${selected.has(character.id)?'✓':''}</span>
          <small>${character.role}</small>
          <h3>${character.name}</h3>
          <div class="mini-traits">${character.traits.slice(0,3).map(trait=>`<span>${trait}</span>`).join('')}</div>
        </button>`).join('')}
    </div>` : `
    <div class="random-stage">
      <div class="random-stage-inner">
        <div class="random-stage-icon">?</div>
        <h2>Let the station decide.</h2>
        <p class="lede">We’ll draw ${state.setupCount} distinct characters. You can reshuffle until the table feels right.</p>
        <button class="btn btn-secondary" data-action="preview-random">Generate preview</button>
      </div>
    </div>`;

  app.innerHTML = `
    <a class="back-link" href="#home">← Main menu</a>
    <div class="setup-shell">
      <aside class="setup-rail">
        <p class="eyebrow">New game</p>
        <h3>Build the cast</h3>
        <p>Your setup saves when you launch the companion.</p>
        <div class="step-list">
          <div class="step active"><b>1</b><span>ROSTER SIZE</span></div>
          <div class="step active"><b>2</b><span>CHARACTERS</span></div>
          <div class="step"><b>3</b><span>LAUNCH</span></div>
        </div>
      </aside>
      <section class="setup-content">
        <div class="page-head">
          <div><p class="eyebrow">Game setup</p><h2>Who’s on the station?</h2><p class="lede">Choose the exact cast, or draw a random roster.</p></div>
        </div>
        <div class="control-row">
          <div class="field">
            <label>Characters in play</label>
            <div class="counter">
              <button data-action="decrement" aria-label="Fewer characters">−</button>
              <output>${state.setupCount}</output>
              <button data-action="increment" aria-label="More characters">＋</button>
            </div>
          </div>
          <div class="field">
            <label>Selection method</label>
            <div class="segment">
              <button class="${state.setupMode==='manual'?'active':''}" data-mode="manual">Pick my own</button>
              <button class="${state.setupMode==='random'?'active':''}" data-mode="random">Random draw</button>
            </div>
          </div>
          ${state.setupMode==='manual'?`<div class="selection-count"><strong>${state.setupSelected.length}</strong> / ${state.setupCount} selected</div>`:''}
        </div>
        ${picker}
        <div class="setup-footer">
          <a class="btn btn-secondary" href="#home">Cancel</a>
          <button class="btn btn-primary" data-action="launch" ${state.setupMode==='manual' && state.setupSelected.length!==state.setupCount?'disabled':''}>${state.setupMode==='random'?'Draw & launch':'Launch companion'} <span>→</span></button>
        </div>
      </section>
    </div>`;
  bindSetup();
}

function bindSetup() {
  app.querySelector('[data-action="decrement"]').addEventListener('click', () => {
    state.setupCount = Math.max(3, state.setupCount - 1);
    state.setupSelected = state.setupSelected.slice(0, state.setupCount);
    renderSetup();
  });
  app.querySelector('[data-action="increment"]').addEventListener('click', () => {
    state.setupCount = Math.min(12, state.setupCount + 1);
    renderSetup();
  });
  app.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => {
    state.setupMode = button.dataset.mode;
    renderSetup();
  }));
  app.querySelectorAll('[data-character]').forEach(button => button.addEventListener('click', () => {
    const id = button.dataset.character;
    if (state.setupSelected.includes(id)) state.setupSelected = state.setupSelected.filter(item => item !== id);
    else if (state.setupSelected.length < state.setupCount) state.setupSelected.push(id);
    else showToast(`Choose exactly ${state.setupCount} characters`);
    renderSetup();
  }));
  app.querySelector('[data-action="preview-random"]')?.addEventListener('click', () => {
    state.setupSelected = randomCharacterIds(state.setupCount);
    state.setupMode = 'manual';
    renderSetup();
    showToast('Random roster ready — adjust or launch');
  });
  app.querySelector('[data-action="launch"]').addEventListener('click', () => {
    const ids = state.setupMode === 'random' ? randomCharacterIds(state.setupCount) : state.setupSelected;
    if (ids.length !== state.setupCount) return;
    saveGame({ id: crypto.randomUUID?.() || String(Date.now()), characterIds:ids, createdAt:Date.now(), updatedAt:Date.now() });
    location.hash = '#game';
    showToast('Game saved on this device');
  });
}

function randomCharacterIds(count) {
  return [...characters].sort(() => Math.random() - .5).slice(0,count).map(character => character.id);
}

function renderDashboard() {
  const roster = getRoster();
  app.innerHTML = `
    <section>
      <div class="dashboard-head">
        <div>
          <p class="eyebrow">Active game</p>
          <h2>Station brief</h2>
          <div class="game-meta"><span class="status-tag">LOCAL SAVE ACTIVE</span><span>${roster.length} CHARACTERS</span><span>STARTED ${formatDate(state.game.createdAt)}</span></div>
        </div>
        <button class="btn btn-danger" data-action="end-game">End game</button>
      </div>
      <div class="command-search">
        <input id="global-search" type="search" autocomplete="off" placeholder="Search crew, locations, projects or traits…" aria-label="Search companion" />
        <span class="shortcut">⌘ K</span>
        <div class="search-results" id="global-results" hidden></div>
      </div>
      <div class="section-row"><h2>Characters in play</h2><a class="text-link" href="#characters">VIEW ALL →</a></div>
      <div class="roster-strip">${roster.map((character,index)=>rosterCard(character,index)).join('')}</div>
      <div class="tool-grid">
        ${toolCard('characters','◎','Character companion','Abilities, objectives, and starting locations')}
        ${toolCard('locations','⌖','Location finder','Search the station by deck, zone, or purpose')}
        ${toolCard('projects','◇','Project X lookup','Find project leads, clues, and classifications')}
        ${toolCard('traits','≋','Trait scanner','See which in-play characters match any trait')}
      </div>
    </section>`;

  bindCharacterOpeners();
  app.querySelector('[data-action="end-game"]').addEventListener('click', () => openConfirm('End this game?', 'This removes the saved roster from this device.', () => { removeGame(); location.hash='#home'; showToast('Game cleared'); }));
  const globalSearch = app.querySelector('#global-search');
  globalSearch.addEventListener('input', () => renderGlobalResults(globalSearch.value));
  document.addEventListener('keydown', focusSearchShortcut, { once:true });
}

function rosterCard(character,index) {
  return `<button class="roster-card" data-open-character="${character.id}" style="--accent:${character.accent}"><span class="index">${String(index+1).padStart(2,'0')}</span><span class="avatar">${character.code}</span><h3>${character.name}</h3><p>${character.role}</p><span class="arrow">↗</span></button>`;
}

function toolCard(routeName, icon, title, text) {
  return `<a class="tool-card" href="#${routeName}"><span class="tool-icon">${icon}</span><div><h3>${title}</h3><p>${text}</p></div></a>`;
}

function renderGlobalResults(query) {
  const resultsNode = app.querySelector('#global-results');
  const term = query.trim().toLowerCase();
  if (!term) { resultsNode.hidden = true; return; }
  const rosterIds = new Set(state.game.characterIds);
  const found = [
    ...characters.filter(item => rosterIds.has(item.id) && searchable(item).includes(term)).map(item => ({type:'Character', label:item.name, detail:item.role, action:`character:${item.id}`})),
    ...locations.filter(item => searchable(item).includes(term)).map(item => ({type:'Location', label:item.name, detail:`${item.deck} · ${item.zone}`, action:`location:${item.id}`})),
    ...projects.filter(item => searchable(item).includes(term)).map(item => ({type:'Project', label:item.name, detail:item.status, action:`project:${item.id}`})),
    ...allTraits().filter(trait => trait.toLowerCase().includes(term)).map(trait => ({type:'Trait', label:trait, detail:'Find matching roster', action:`trait:${trait}`}))
  ].slice(0,8);
  resultsNode.hidden = false;
  resultsNode.innerHTML = found.length ? found.map(result => `<button class="search-result" data-global-action="${result.action}"><span class="result-type">${result.type}</span><span><b>${result.label}</b><br><small>${result.detail}</small></span></button>`).join('') : `<div class="search-empty">No signal found for “${escapeHtml(query)}”</div>`;
  resultsNode.querySelectorAll('[data-global-action]').forEach(button => button.addEventListener('click', () => handleGlobalAction(button.dataset.globalAction)));
}

function handleGlobalAction(action) {
  const [type,id] = action.split(':');
  if (type==='character') openCharacter(id);
  if (type==='location') { location.hash='#locations'; setTimeout(()=>openLocation(id),0); }
  if (type==='project') { location.hash='#projects'; setTimeout(()=>openProject(id),0); }
  if (type==='trait') { state.selectedTrait=id; location.hash='#traits'; }
}

function searchable(item) {
  return Object.values(item).flat().join(' ').toLowerCase();
}

function renderCharacters() {
  const roster = getRoster();
  const query = state.filters.characters;
  const filtered = roster.filter(character => searchable(character).includes(query.toLowerCase()));
  renderLookupPage('Character companion','Only the cast selected for this game appears here.','Search in-play characters…','characters', filtered.map(character => `
    <article class="info-card clickable" data-open-character="${character.id}">
      <div class="kicker">${character.role}</div><h3>${character.name}</h3><p>${character.ability}: ${character.abilityText}</p>
      <div class="meta"><span class="tag in-play">IN PLAY</span>${character.traits.map(trait=>`<span class="tag">${trait}</span>`).join('')}</div>
    </article>`).join(''));
  bindLookupSearch('characters'); bindCharacterOpeners();
}

function renderLocations() {
  const query = state.filters.locations;
  const filtered = locations.filter(location => searchable(location).includes(query.toLowerCase()));
  const zones = ['All',...new Set(locations.map(location=>location.zone))];
  renderLookupPage('Location finder','Search the station by name, deck, zone, or function.','Try “escape”, “medical”, or “Deck D”…','locations', filtered.map(location => `
    <article class="info-card location-card clickable" data-open-location="${location.id}"><span class="deck-label">${location.deck}</span><div class="kicker">${location.zone} zone</div><h3>${location.name}</h3><p>${location.description}</p><div class="meta">${location.tags.map(tag=>`<span class="tag">${tag}</span>`).join('')}</div></article>`).join(''), zones);
  bindLookupSearch('locations'); bindFilterChips('locations'); app.querySelectorAll('[data-open-location]').forEach(node=>node.addEventListener('click',()=>openLocation(node.dataset.openLocation)));
}

function renderProjects() {
  const query = state.filters.projects;
  const filtered = projects.filter(project => searchable(project).includes(query.toLowerCase()));
  renderLookupPage('Project X index','Prototype records for quickly resolving named projects and their leads.','Search projects, clues, or departments…','projects', filtered.map(project => `
    <article class="info-card clickable" data-open-project="${project.id}"><div class="kicker">${project.status} // ${project.id.toUpperCase()}</div><h3>${project.name}</h3><p>${project.summary}</p><div class="meta"><span class="tag in-play">LEAD: ${project.lead}</span>${project.clues.slice(0,2).map(clue=>`<span class="tag">${clue}</span>`).join('')}</div></article>`).join(''));
  bindLookupSearch('projects'); app.querySelectorAll('[data-open-project]').forEach(node=>node.addEventListener('click',()=>openProject(node.dataset.openProject)));
}

function renderLookupPage(title, subtitle, placeholder, key, cards, chips=[]) {
  app.innerHTML = `
    <a class="back-link" href="#game">← Station brief</a>
    <div class="page-head"><div><p class="eyebrow">Field index</p><h2>${title}</h2><p class="lede">${subtitle}</p></div></div>
    <div class="lookup-bar"><input class="search-input" data-lookup="${key}" type="search" value="${escapeHtml(state.filters[key])}" placeholder="${placeholder}" aria-label="Search ${title}" /><a class="btn btn-secondary" href="#game">Done</a></div>
    ${chips.length?`<div class="filter-chips">${chips.map((chip,index)=>`<button class="chip ${index===0?'active':''}" data-chip="${chip}" data-key="${key}">${chip}</button>`).join('')}</div>`:''}
    <div class="list-grid">${cards || `<div class="empty-state"><div><h3>No matches</h3><p>Try a broader search term.</p></div></div>`}</div>`;
}

function bindLookupSearch(key) {
  const input = app.querySelector(`[data-lookup="${key}"]`);
  input.addEventListener('input', () => { state.filters[key] = input.value; if(key==='characters') renderCharacters(); if(key==='locations') renderLocations(); if(key==='projects') renderProjects(); requestAnimationFrame(()=>app.querySelector(`[data-lookup="${key}"]`)?.focus()); });
}

function bindFilterChips(key) {
  app.querySelectorAll(`[data-key="${key}"]`).forEach(button => button.addEventListener('click', () => {
    state.filters[key] = button.dataset.chip === 'All' ? '' : button.dataset.chip;
    renderLocations();
  }));
}

function renderTraits() {
  const traits = allTraits();
  if (!traits.includes(state.selectedTrait)) state.selectedTrait = traits[0];
  const matches = getRoster().filter(character=>character.traits.includes(state.selectedTrait));
  app.innerHTML = `
    <a class="back-link" href="#game">← Station brief</a>
    <div class="page-head"><div><p class="eyebrow">Roster query</p><h2>Who has trait…</h2><p class="lede">Scan only the characters currently in play.</p></div></div>
    <div class="filter-chips">${traits.map(trait=>`<button class="chip ${trait===state.selectedTrait?'active':''}" data-trait="${trait}">${trait}</button>`).join('')}</div>
    <section class="trait-section">
      <div class="section-row"><h2>${state.selectedTrait}</h2><span class="tag in-play">${matches.length} MATCH${matches.length===1?'':'ES'}</span></div>
      <div class="trait-results">${matches.length?matches.map(character=>`<button class="trait-person" data-open-character="${character.id}"><span class="mini-avatar" style="--accent:${character.accent}">${character.code}</span><span><b>${character.name}</b><small>${character.role}</small></span></button>`).join(''):`<div class="empty-state"><div><h3>No one in play</h3><p>Try another trait.</p></div></div>`}</div>
    </section>`;
  app.querySelectorAll('[data-trait]').forEach(button=>button.addEventListener('click',()=>{state.selectedTrait=button.dataset.trait;renderTraits();}));
  bindCharacterOpeners();
}

function allTraits() {
  return [...new Set(getRoster().flatMap(character=>character.traits))].sort();
}

function bindCharacterOpeners() {
  app.querySelectorAll('[data-open-character]').forEach(node=>node.addEventListener('click',()=>openCharacter(node.dataset.openCharacter)));
}

function openCharacter(id) {
  const character = characters.find(item=>item.id===id); if(!character) return;
  openModal(`
    <div class="modal-head" data-code="${character.code}">
      <button class="icon-btn modal-close" data-close-modal aria-label="Close">×</button>
      <div class="modal-title"><span class="detail-avatar" style="--accent:${character.accent}">${character.code}</span><div><h2>${character.name}</h2><p>${character.role}</p></div></div>
    </div>
    <div class="modal-body">
      <div class="meta">${character.traits.map(trait=>`<span class="tag">${trait}</span>`).join('')}<span class="tag in-play">START: ${character.start}</span></div>
      <div class="intel-block"><h3>${character.ability}</h3><p>${character.abilityText}</p></div>
      <div class="intel-block"><h3>Objective brief</h3><p>${character.objective}</p></div>
      <div class="modal-actions"><button class="btn btn-secondary" data-close-modal>Close file</button><a class="btn btn-primary" href="#traits" data-close-modal>Scan traits</a></div>
    </div>`);
}

function openLocation(id) {
  const location = locations.find(item=>item.id===id); if(!location) return;
  openModal(`<div class="modal-head" data-code="${location.deck.replace('-','')}"><button class="icon-btn modal-close" data-close-modal aria-label="Close">×</button><div class="modal-title"><div><h2>${location.name}</h2><p>${location.deck} // ${location.zone} zone</p></div></div></div><div class="modal-body"><div class="meta">${location.tags.map(tag=>`<span class="tag">${tag}</span>`).join('')}</div><div class="intel-block"><h3>Location brief</h3><p>${location.description}</p></div><div class="intel-block"><h3>Finder note</h3><p>Located in the ${location.zone.toLowerCase()} section. Use the deck code ${location.deck} as the physical-board reference.</p></div><div class="modal-actions"><button class="btn btn-secondary" data-close-modal>Close location</button></div></div>`);
}

function openProject(id) {
  const project = projects.find(item=>item.id===id); if(!project) return;
  openModal(`<div class="modal-head" data-code="${project.id.slice(0,2).toUpperCase()}"><button class="icon-btn modal-close" data-close-modal aria-label="Close">×</button><div class="modal-title"><div><h2>${project.name}</h2><p>Classification: ${project.status}</p></div></div></div><div class="modal-body"><div class="intel-block"><h3>Project summary</h3><p>${project.summary}</p></div><div class="intel-block"><h3>Primary lead</h3><p>${project.lead}</p></div><div class="intel-block"><h3>Associated clues</h3><div class="meta">${project.clues.map(clue=>`<span class="tag in-play">${clue}</span>`).join('')}</div></div><div class="modal-actions"><button class="btn btn-secondary" data-close-modal>Close record</button></div></div>`);
}

function openConfirm(title, body, onConfirm) {
  openModal(`<div class="modal-body"><p class="eyebrow">Confirm action</p><h2>${title}</h2><p class="lede">${body}</p><div class="modal-actions"><button class="btn btn-secondary" data-close-modal>Cancel</button><button class="btn btn-danger" data-confirm>Continue</button></div></div>`);
  modalRoot.querySelector('[data-confirm]').addEventListener('click',()=>{closeModal();onConfirm();});
}

function openModal(content) {
  modalRoot.innerHTML = `<div class="modal-backdrop" data-backdrop><section class="modal" role="dialog" aria-modal="true">${content}</section></div>`;
  modalRoot.querySelectorAll('[data-close-modal]').forEach(button=>button.addEventListener('click',closeModal));
  modalRoot.querySelector('[data-backdrop]').addEventListener('click',event=>{if(event.target===event.currentTarget)closeModal();});
  document.addEventListener('keydown', closeOnEscape);
}

function closeOnEscape(event) { if(event.key==='Escape') closeModal(); }
function closeModal() { modalRoot.innerHTML=''; document.removeEventListener('keydown',closeOnEscape); }

function showToast(message) {
  toast.textContent = message; toast.classList.add('show');
  clearTimeout(showToast.timer); showToast.timer = setTimeout(()=>toast.classList.remove('show'),2600);
}

function relativeTime(timestamp) {
  const minutes = Math.max(0, Math.floor((Date.now()-timestamp)/60000));
  if(minutes<1) return 'just now'; if(minutes<60) return `${minutes}m ago`;
  const hours=Math.floor(minutes/60); if(hours<24) return `${hours}h ago`;
  return `${Math.floor(hours/24)}d ago`;
}
function formatDate(timestamp) { return new Intl.DateTimeFormat(undefined,{month:'short',day:'numeric'}).format(timestamp).toUpperCase(); }
function focusSearchShortcut(event) { if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();app.querySelector('#global-search')?.focus();document.addEventListener('keydown',focusSearchShortcut,{once:true});} }

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
