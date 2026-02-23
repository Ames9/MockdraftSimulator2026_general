// Data loaded from data.js

// DOM Elements
const languageModal = document.getElementById('language-modal');
const phaseTeamGrid = document.getElementById('teams-grid');
const phaseDraftList = document.getElementById('prospects-list');
const sectionTeamSelect = document.getElementById('phase-team-selection');
const sectionDraftRoom = document.getElementById('phase-draft-room');
const saintsModal = document.getElementById('saints-modal');
const saintsPraiseText = document.getElementById('saints-praise-text');
const nonSaintsModal = document.getElementById('non-saints-modal');
const nonSaintsText = document.getElementById('non-saints-text');
const rbModal = document.getElementById('rb-modal');
const qbModal = document.getElementById('qb-modal');
const qbText = document.getElementById('qb-text');
const pkModal = document.getElementById('pk-modal');
const successModal = document.getElementById('success-modal');
const successText = document.getElementById('success-text');
const startModal = document.getElementById('start-modal');
const startRoundCount = document.getElementById('start-round-count');
const draftClassList = document.getElementById('draft-class-list');
const btnTradeUp = document.getElementById('btn-trade-up');
const btnTradeDown = document.getElementById('btn-trade-down');
const btnSimPick = document.getElementById('btn-sim-pick');
const btnPauseResume = document.getElementById('btn-pause-resume');

const roundSelect = document.getElementById('round-select');
const trackerList = document.getElementById('tracker-list');
const currentTeamNameEl = document.getElementById('current-team-name');
const currentPickInfoEl = document.getElementById('current-pick-info');
const positionFilters = document.getElementById('position-filters');
const btnSkipPick = document.getElementById('btn-skip-pick');
const btnTradePicks = document.getElementById('btn-trade-picks');
const loadMoreContainer = document.getElementById('load-more-container');
const searchInput = document.getElementById('prospect-search');

// State
let currentLanguage = 'ja';
let availableProspects = [];
let targetTeamId = 'no'; // Saints
let totalRounds = 7;
let activeDraftOrder = [];
let currentPickIndex = 0;
let isPaused = false;
let hasDraftStarted = false;
let simInterval = null;
let currentFilter = 'ALL';
let currentLimit = 10;
let userDraftClass = [];
let activeTeamNeeds = {};
// Trade State
let activePicks2027 = [];
let activePicks2028 = [];
let tradeSelectedUserPicks = [];
let tradeSelectedPartnerPicks = [];
let tradePartnerId = null;
let isTradeUpMode = false;

// Initialize app
function setLanguage(lang) {
    currentLanguage = lang;
    languageModal.style.display = 'none';
    languageModal.classList.add('hidden');
}

function init() {
    availableProspects = [...draftProspects]; // Reset available prospects
    userDraftClass = [];
    userExecutedTrades = []; // New tracker for final modal
    renderTeams();
    setupFilters();
}

// Render the grid of teams (alphabetical order handles by data.js order, assuming data.js is alphabetical, if not we sort here)
function renderTeams() {
    phaseTeamGrid.innerHTML = '';
    const sortedTeams = [...teams].sort((a, b) => a.city.localeCompare(b.city));
    sortedTeams.forEach(team => {
        const div = document.createElement('div');
        div.className = `card`;
        div.onclick = () => handleTeamSelection(team);

        div.innerHTML = `
            <h3 class="card-title">${team.name}</h3>
            <p class="card-subtitle">${team.city}</p>
        `;
        phaseTeamGrid.appendChild(div);
    });
}

// Render the draft board with filters and pagination limits
function renderProspects() {
    phaseDraftList.innerHTML = '';
    const searchTerm = searchInput.value.toLowerCase();

    const filtered = availableProspects.filter(p => {
        // First check position filter
        let posMatch = currentFilter === 'ALL';
        if (!posMatch) {
            if (currentFilter === 'OL') posMatch = (p.pos === 'OT' || p.pos === 'IOL');
            else if (currentFilter === 'DL') posMatch = (p.pos === 'DT' || p.pos === 'DL');
            else if (currentFilter === 'EDGE') posMatch = (p.pos === 'EDGE');
            else if (currentFilter === 'LB') posMatch = (p.pos === 'LB');
            else if (currentFilter === 'CB') posMatch = (p.pos === 'CB');
            else if (currentFilter === 'S') posMatch = (p.pos === 'S');
            else if (currentFilter === 'WR') posMatch = (p.pos === 'WR');
            else if (currentFilter === 'TE') posMatch = (p.pos === 'TE');
            else if (currentFilter === 'RB') posMatch = (p.pos === 'RB' || p.isRB);
            else if (currentFilter === 'QB') posMatch = (p.pos === 'QB');
            else if (currentFilter === 'K') posMatch = (p.pos === 'K');
            else if (currentFilter === 'P') posMatch = (p.pos === 'P');
            else posMatch = p.pos.includes(currentFilter);
        }

        // Then check search term
        let searchMatch = true;
        if (searchTerm) {
            searchMatch = p.name.toLowerCase().includes(searchTerm);
        }

        return posMatch && searchMatch;
    });

    if (currentLimit >= filtered.length) {
        loadMoreContainer.classList.add('hidden');
    } else {
        loadMoreContainer.classList.remove('hidden');
    }

    filtered.slice(0, currentLimit).forEach(prospect => {
        const div = document.createElement('div');
        div.className = 'card';
        div.onclick = () => handleDraftSelection(prospect);

        div.innerHTML = `
            <span class="card-badge">${prospect.pos}</span>
            <h3 class="card-title">${prospect.name}</h3>
            <p class="card-subtitle">${prospect.school} | Rank: #${prospect.rank}</p>
        `;
        phaseDraftList.appendChild(div);
    });
}

function loadMoreProspects() {
    currentLimit += 10;
    renderProspects();
}

function setupFilters() {
    positionFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.getAttribute('data-pos');
            currentLimit = 10;
            renderProspects();
        }
    });

    searchInput.addEventListener('input', () => {
        currentLimit = 10; // reset pagination when searching
        renderProspects();
    });
}

// Handle Team Clicks
function handleTeamSelection(team) {
    targetTeamId = team.id;
    if (team.id === 'no') {
        const randomIndex = Math.floor(Math.random() * saintsPraiseMessages[currentLanguage].length);
        saintsPraiseText.innerHTML = saintsPraiseMessages[currentLanguage][randomIndex];
        document.getElementById('saints-modal-title').textContent = `Welcome to the ${team.name}`;
        document.getElementById('saints-modal-title').style.color = "var(--color-saints-gold)";
        saintsModal.classList.remove('hidden');
    } else {
        if (teamSpecificMessages && teamSpecificMessages[team.id]) {
            const msgs = teamSpecificMessages[team.id][currentLanguage];
            const randomIndex = Math.floor(Math.random() * msgs.length);
            nonSaintsText.textContent = msgs[randomIndex];
        } else {
            const randomIndex = Math.floor(Math.random() * genericTeamMessages[currentLanguage].length);
            nonSaintsText.textContent = genericTeamMessages[currentLanguage][randomIndex].replace('{TEAM}', team.name);
        }
        document.getElementById('non-saints-modal-title').textContent = `Welcome to the ${team.name}`;
        nonSaintsModal.classList.remove('hidden');
    }
}

function promptStartDraft() {
    totalRounds = parseInt(roundSelect.value);
    const team = teams.find(t => t.id === targetTeamId);

    // Inject localized Start Draft text
    const startTextEl = document.getElementById('start-text');
    let startMsg = startDraftMessages[currentLanguage][0];
    startMsg = startMsg.replace('{ROUNDS}', `<strong>${totalRounds}</strong>`);
    startMsg = startMsg.replace('{TEAM}', `<strong>${team.name}</strong>`);
    startTextEl.innerHTML = startMsg;

    startModal.classList.remove('hidden');
}

function cancelStartDraft() {
    startModal.classList.add('hidden');
}

function confirmStartDraft() {
    startModal.classList.add('hidden');
    startDraft();
}

function startDraft() {
    totalRounds = parseInt(roundSelect.value);

    // Deep copy draftOrder to prevent bleeding state mutations across restarts
    const fullOriginalDraftOrder = JSON.parse(JSON.stringify(draftOrder));

    activeDraftOrder = fullOriginalDraftOrder.filter(pick => pick.round <= totalRounds);

    // Phase 9: Unrestricted trades require us to know who owns ALL picks, not just the active ones
    activeFullDraftOrder = JSON.parse(JSON.stringify(fullOriginalDraftOrder));

    // Enrich active picks with value and ownership tracking
    activeDraftOrder.forEach(pick => {
        pick.year = 2026;
        pick.originalTeamId = pick.teamId;
        pick.currentTeamId = pick.teamId;
        pick.value = richHillValues[pick.pick] || Math.max(1, Math.floor(1000 / pick.pick));
        pick.id = `2026_Pick${pick.pick}`;

        // Sync these to the master list as well, so it reflects the correct object ref early
        let masterNode = activeFullDraftOrder.find(p => p.pick === pick.pick);
        if (masterNode) {
            masterNode.year = 2026;
            masterNode.originalTeamId = pick.teamId;
            masterNode.currentTeamId = pick.teamId;
            masterNode.value = pick.value;
            masterNode.id = pick.id;
        }
    });

    // Populate the REST of the master list (picks that won't be simulated but CAN be traded)
    activeFullDraftOrder.forEach(pick => {
        if (!pick.year) {
            pick.year = 2026;
            pick.originalTeamId = pick.teamId;
            pick.currentTeamId = pick.teamId;
            pick.value = richHillValues[pick.pick] || Math.max(1, Math.floor(1000 / pick.pick));
            pick.id = `2026_Pick${pick.pick}`;
        }
    });

    activePicks2027 = JSON.parse(JSON.stringify(draftPicks2027));
    activePicks2028 = JSON.parse(JSON.stringify(draftPicks2028));

    // Initialize dynamic needs tracking
    activeTeamNeeds = typeof teamNeeds !== 'undefined' ? JSON.parse(JSON.stringify(teamNeeds)) : {};

    currentPickIndex = 0;
    isPaused = false;
    currentLimit = 10;
    availableProspects = [...draftProspects]; // fresh draft class
    userDraftClass = [];
    trackerList.innerHTML = '';
    draftClassList.innerHTML = '';

    // Switch to Draft Room
    sectionTeamSelect.classList.add('hidden');
    sectionDraftRoom.classList.remove('hidden');
    sectionTeamSelect.classList.remove('active');
    sectionDraftRoom.classList.add('active');

    // Pre-Draft state
    isPaused = true;
    hasDraftStarted = false;
    currentTeamNameEl.textContent = "Draft Room";
    currentPickInfoEl.textContent = "Awaiting Simulation Start...";
    document.getElementById('btn-start-sim').classList.remove('hidden');
    btnSimPick.classList.add('hidden');
    btnPauseResume.classList.add('hidden');
    btnSkipPick.classList.add('hidden');

    renderProspects();
    updateDraftHeader();
}

function startSimulation() {
    isPaused = false;
    hasDraftStarted = true;
    document.getElementById('btn-start-sim').classList.add('hidden');

    // Kick off the simulation engine loop natively
    updateDraftHeader();
    runSimulation();
}

function updateSpeedLabel(val) {
    const label = document.getElementById('speed-label');
    if (val <= 0) label.textContent = "Instant";
    else if (val <= 150) label.textContent = "Fast";
    else if (val <= 500) label.textContent = "Normal";
    else if (val <= 1000) label.textContent = "Slow";
    else label.textContent = "Very Slow";
}

function updateDraftHeader() {
    if (currentPickIndex >= activeDraftOrder.length) {
        currentTeamNameEl.textContent = "Draft Complete";
        currentPickInfoEl.textContent = "";
        return;
    }

    // Phase 11 Fix: Prevent the default "Saints" or underlying picks from showing on the header before the user clicks 'Start Draft'
    if (!hasDraftStarted) {
        currentTeamNameEl.textContent = "Draft Room";
        currentPickInfoEl.textContent = "Awaiting Simulation Start...";
        currentPickInfoEl.style.color = "var(--color-text-secondary)";
        currentPickInfoEl.style.fontWeight = "normal";
        btnSimPick.classList.add('hidden');
        btnPauseResume.classList.add('hidden');
        btnSkipPick.classList.add('hidden');

        // Allow Trade Up immediately (Pre-Draft trade for Pick 1) if user doesn't own it
        const upcomingPick = activeDraftOrder[currentPickIndex];
        if (upcomingPick && upcomingPick.teamId !== targetTeamId) {
            btnTradePicks.classList.remove('hidden');
        }

        return; // Halt further header logic until draft actually starts
    }

    const currentPick = activeDraftOrder[currentPickIndex];
    const team = teams.find(t => t.id === currentPick.teamId);
    currentTeamNameEl.textContent = team ? team.name : currentPick.teamName;

    if (currentPick.teamId === targetTeamId) {
        currentPickInfoEl.textContent = `You are on the clock! (Round ${currentPick.round}, Pick ${currentPick.pick})`;
        currentPickInfoEl.style.color = "var(--color-saints-gold)";
        currentPickInfoEl.style.fontWeight = "bold";
        btnSimPick.classList.add('hidden');
        btnPauseResume.classList.add('hidden');
        btnSkipPick.classList.add('hidden');
    } else {
        // Find next target team pick
        let nextTargetPick = activeDraftOrder.slice(currentPickIndex).find(p => p.teamId === targetTeamId);
        let nextTargetText = nextTargetPick ? ` | Next Pick: Round ${nextTargetPick.round}, Pick ${nextTargetPick.pick}` : '';

        currentPickInfoEl.textContent = `ON THE CLOCK: Round ${currentPick.round}, Pick ${currentPick.pick} (${currentPick.teamName})${nextTargetText}`;
        currentPickInfoEl.style.color = "var(--color-text-secondary)";
        currentPickInfoEl.style.fontWeight = "normal";
        btnPauseResume.classList.remove('hidden');
        btnSkipPick.classList.remove('hidden');

        if (isPaused) {
            btnSimPick.classList.remove('hidden');
            btnPauseResume.textContent = "Resume Simulation";
        } else {
            btnSimPick.classList.add('hidden');
            btnPauseResume.textContent = "Pause Simulation";
        }
    }
}

function togglePause() {
    isPaused = !isPaused;
    if (!isPaused) {
        runSimulation();
    } else {
        clearTimeout(simInterval);
    }
    updateDraftHeader();
}

function runSimulation() {
    if (isPaused || currentPickIndex >= activeDraftOrder.length) return;

    const currentPick = activeDraftOrder[currentPickIndex];

    // Stop simulation when it's the user's turn
    if (currentPick.teamId === targetTeamId) {
        isPaused = true;
        updateDraftHeader();
        return;
    }

    // CPU Turn: map the 1-5 slider to milliseconds
    const speedSlider = document.getElementById('sim-speed-slider');
    let baseSpeed = 500;

    if (speedSlider) {
        const val = parseInt(speedSlider.value);
        if (val === 1) baseSpeed = 1500;
        else if (val === 2) baseSpeed = 1000;
        else if (val === 3) baseSpeed = 500;
        else if (val === 4) baseSpeed = 200;
        else if (val === 5) baseSpeed = 50;
    }

    simInterval = window.setTimeout(function () {
        simulatePick();

        // After simulating the pick, the loop must check if the newly updated state warrants continuation
        if (!isPaused && currentPickIndex < activeDraftOrder.length) {
            const nextPick = activeDraftOrder[currentPickIndex];
            if (nextPick && nextPick.teamId !== targetTeamId) {
                runSimulation();
            } else {
                // If the next turn IS the target team, we enforce the pause directly in the interval lifecycle
                isPaused = true;
                updateDraftHeader();
            }
        }
    }, baseSpeed);
}

function skipToNextPick() {
    isPaused = false;
    clearTimeout(simInterval);

    // Rapidly simulate until we hit user pick or draft ends
    while (currentPickIndex < activeDraftOrder.length) {
        const pick = activeDraftOrder[currentPickIndex];
        if (pick.teamId === targetTeamId) break;
        simulatePick();
    }

    // We hit our pick or draft ended
    if (currentPickIndex < activeDraftOrder.length) {
        isPaused = true;
        updateDraftHeader();
    }
}

function simulatePick() {
    try {
        if (currentPickIndex >= activeDraftOrder.length) return;
        const currentPick = activeDraftOrder[currentPickIndex];

        // CPU Logic: Blend Best Player Available with Team Needs
        const needs = activeTeamNeeds[currentPick.teamId] || [];

        // Phase 12: Double-Dip Penalty
        let lastDraftedPos = null;
        for (let i = currentPickIndex - 1; i >= 0; i--) {
            if (activeDraftOrder[i].teamId === currentPick.teamId && activeDraftOrder[i].draftedPos) {
                lastDraftedPos = activeDraftOrder[i].draftedPos;
                break;
            }
        }

        let basePool = availableProspects;
        if (lastDraftedPos && Math.random() < 0.8) {
            // 80% chance to actively avoid double dipping
            const filteredPool = availableProspects.filter(p => p.pos !== lastDraftedPos && !(p.isRB && lastDraftedPos === 'RB'));
            // Only apply if it doesn't leave the pool completely empty
            if (filteredPool.length > 0) basePool = filteredPool;
        }

        // Look at the top 25 available prospects to see if a need can be met (allows for bigger reaches)
        const candidates = basePool.slice(0, 25);
        let selectedProspect = null;
        let isNeedMet = false;

        // Filter the candidates down to ones matching the team's needs
        const candidatesWithNeeds = candidates.filter(p => needs.includes(p.pos) || (p.isRB && needs.includes("RB")));

        const topNeedIndex = candidatesWithNeeds.length > 0 ? basePool.indexOf(candidatesWithNeeds[0]) : -1;

        // 60% chance to draft for Need if the highest-ranked matching prospect is within the overall top 10 available
        // OR 30% chance to reach for a need within the top 25
        if (topNeedIndex > -1 && topNeedIndex < 10 && Math.random() < 0.6) {
            selectedProspect = candidatesWithNeeds[0];
            isNeedMet = true;
        } else if (topNeedIndex > -1 && topNeedIndex < 25 && Math.random() < 0.3) {
            selectedProspect = candidatesWithNeeds[0];
            isNeedMet = true;
        } else {
            // BPA Logic: Pick randomly from the top 5 available to inject some variance at the top of the board
            const bpaPool = basePool.slice(0, 5);
            // Ensure pool is not empty
            if (bpaPool.length > 0) {
                selectedProspect = bpaPool[Math.floor(Math.random() * bpaPool.length)];
                // Check if BPA coincidentally met a need
                if (needs.includes(selectedProspect.pos) || (selectedProspect.isRB && needs.includes("RB"))) {
                    isNeedMet = true;
                }
            }
        }

        // Fallback (i.e. end of draft or unexpected state)
        if (!selectedProspect) {
            selectedProspect = availableProspects[0];
            if (needs.includes(selectedProspect.pos) || (selectedProspect.isRB && needs.includes("RB"))) {
                isNeedMet = true;
            }
        }

        // Phase 12: Record the drafted position for future double-dip checks
        currentPick.draftedPos = selectedProspect.pos;
        if (selectedProspect.isRB) currentPick.draftedPos = 'RB';

        // Remove the drafted position from the team's active needs list if fulfilled
        if (isNeedMet) {
            let posToRemove = selectedProspect.pos;
            if (selectedProspect.isRB && needs.includes("RB")) posToRemove = "RB";

            const needIndex = needs.indexOf(posToRemove);
            if (needIndex > -1) {
                needs.splice(needIndex, 1);
            }
        }

        // Remove the drafted prospect from available pool
        availableProspects = availableProspects.filter(p => p.id !== selectedProspect.id);

        const pickGrade = calculatePickGrade(currentPickIndex + 1, selectedProspect.rank, selectedProspect, currentPick, isNeedMet);
        recordPick(currentPick, selectedProspect, pickGrade);

        currentPickIndex++;
        renderProspects();
        updateDraftHeader();

        // Check if draft is completely over
        if (currentPickIndex >= activeDraftOrder.length) {
            showSuccessModal();
        }
    } catch (e) {
        const item = document.createElement('div');
        item.className = 'tracker-item';
        item.style.color = "red";
        item.textContent = `ERROR: ${e.message} at Pick ${currentPickIndex + 1}`;
        trackerList.prepend(item);
        isPaused = true;
    }
}

// Handle User Draft Pick
function handleDraftSelection(prospect) {
    if (currentPickIndex >= activeDraftOrder.length) return;
    const currentPick = activeDraftOrder[currentPickIndex];

    if (currentPick.teamId !== targetTeamId) {
        // Not our turn
        return;
    }

    // Determine if User met a need
    let isNeedMet = false;
    const needs = activeTeamNeeds[currentPick.teamId] || [];
    if (needs.includes(prospect.pos) || (prospect.isRB && needs.includes("RB"))) {
        isNeedMet = true;
        let posToRemove = prospect.pos;
        if (prospect.isRB && needs.includes("RB")) posToRemove = "RB";
        const needIndex = needs.indexOf(posToRemove);
        if (needIndex > -1) {
            needs.splice(needIndex, 1);
        }
    }

    // Calculate Grade
    const pickGrade = calculatePickGrade(currentPickIndex + 1, prospect.rank, prospect, currentPick, isNeedMet);

    // Store grade on the user's specific pick
    userDraftClass.push({ pick: currentPick, player: prospect, grade: pickGrade });

    // Accept the pick
    // Remove prospect from available
    availableProspects = availableProspects.filter(p => p.id !== prospect.id);
    recordPick(currentPick, prospect, pickGrade);

    currentPickIndex++;
    renderProspects();
    updateDraftHeader();

    // Auto-resume draft
    isPaused = false;
    runSimulation();

    // Check if draft is completely over
    if (currentPickIndex >= activeDraftOrder.length) {
        showSuccessModal();
    }
}

function recordPick(pickData, prospect, pickGrade) {
    const item = document.createElement('div');
    item.className = `tracker-item ${pickData.teamId === targetTeamId ? 'saints-pick' : ''}`;

    let gradeHtml = '';
    if (pickGrade) {
        gradeHtml = `<span style="float:right; font-weight:bold; color:var(--color-saints-gold);">${pickGrade.grade}</span>`;
    }

    item.innerHTML = `
        <div class="tracker-pick-info">R${pickData.round} P${pickData.pick} - ${pickData.teamName} ${gradeHtml}</div>
        <div class="tracker-player">${prospect.name} <span style="color:var(--color-text-secondary); font-size:0.8rem; font-weight:normal;">${prospect.pos}</span></div>
    `;

    trackerList.prepend(item); // insert at top
}

function calculateOverallGrade(picks) {
    const gradeValues = { 'A+': 4.0, 'A': 3.5, 'B+': 3.0, 'B': 2.5, 'C': 2.0, 'F': 0.0 };
    if (picks.length === 0) return 'N/A';

    // Check for F-penalties
    for (const p of picks) {
        if (p.grade.grade === 'F') return 'F';
    }

    let sum = 0;
    for (const p of picks) {
        sum += gradeValues[p.grade.grade] || 2.0;
    }
    const avg = sum / picks.length;

    if (avg >= 3.8) return 'A+';
    if (avg >= 3.3) return 'A';
    if (avg >= 2.8) return 'B+';
    if (avg >= 2.3) return 'B';
    if (avg >= 1.5) return 'C';
    return 'F';
}

function showSuccessModal() {
    const overallGrade = calculateOverallGrade(userDraftClass);

    successText.innerHTML = `Your ${totalRounds}-round 2026 NFL Draft is complete!<br><br><strong>Overall Draft Grade: <span style="font-size: 1.5em; color: var(--color-saints-gold);">${overallGrade}</span></strong>`;

    draftClassList.innerHTML = '';

    // Check for penalties to show lectures
    let penaltyLectures = [];
    userDraftClass.forEach(d => {
        if (d.grade.grade === 'F') {
            if (d.grade.penalty === 'RB' && !penaltyLectures.includes('RB')) {
                penaltyLectures.push('RB');
                const pInfo = document.createElement('div');
                pInfo.style.marginTop = "1rem";
                pInfo.style.padding = "1rem";
                pInfo.style.border = "1px solid red";
                pInfo.innerHTML = rbRejectionMessages[currentLanguage][0];
                successText.appendChild(pInfo);
            }
            if (d.grade.penalty === 'QB' && !penaltyLectures.includes('QB')) {
                penaltyLectures.push('QB');
                const pInfo = document.createElement('div');
                pInfo.style.marginTop = "1rem";
                pInfo.style.padding = "1rem";
                pInfo.style.border = "1px solid red";
                pInfo.innerHTML = `<p>${qbPraiseMessages[currentLanguage][0]}</p>`;
                successText.appendChild(pInfo);
            }
            if (d.grade.penalty === 'PK' && !penaltyLectures.includes('PK')) {
                penaltyLectures.push('PK');
                const pInfo = document.createElement('div');
                pInfo.style.marginTop = "1rem";
                pInfo.style.padding = "1rem";
                pInfo.style.border = "1px solid red";
                pInfo.innerHTML = pkRejectionMessages[currentLanguage][0];
                successText.appendChild(pInfo);
            }
        }
    });

    if (userDraftClass.length === 0) {
        draftClassList.innerHTML = '<li>No players drafted.</li>';
    } else {
        userDraftClass.forEach(d => {
            const li = document.createElement('li');
            li.style.padding = "0.5rem 0";
            li.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
            li.innerHTML = `<strong style="display:inline-block; width: 60px;">R${d.pick.round} P${d.pick.pick}:</strong> ${d.player.name} <span style="color: var(--color-text-secondary); font-size: 0.9em;">(${d.player.pos} - Rank: ${d.player.rank})</span> <strong style="float:right; color:var(--color-saints-gold);">${d.grade.grade}</strong>`;
            draftClassList.appendChild(li);
        });
    }

    const tradeSummaryContainer = document.getElementById('trade-history-summary');
    const tradeHistoryList = document.getElementById('trade-history-list');

    if (userExecutedTrades && userExecutedTrades.length > 0) {
        if (tradeSummaryContainer) tradeSummaryContainer.style.display = 'block';
        if (tradeHistoryList) {
            tradeHistoryList.innerHTML = '';
            userExecutedTrades.forEach(trade => {
                const li = document.createElement('li');
                li.style.padding = "0.5rem 0";
                li.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
                li.innerHTML = `<strong>With ${trade.partner}:</strong><br>
                    <span style="color: var(--color-success)">Received:</span> ${trade.received}<br>
                    <span style="color: var(--color-warning)">Sent:</span> ${trade.sent}`;
                tradeHistoryList.appendChild(li);
            });
        }
    } else {
        if (tradeSummaryContainer) tradeSummaryContainer.style.display = 'none';
        if (tradeHistoryList) tradeHistoryList.innerHTML = '';
    }

    successModal.classList.remove('hidden');
}

// Handle Modal Closes
function closeSaintsModal() {
    saintsModal.classList.add('hidden');
    promptStartDraft();
}
function closeNonSaintsModal() {
    nonSaintsModal.classList.add('hidden');
    promptStartDraft();
}

function calculatePickGrade(pickNumber, prospectRank, prospect, currentPick, isNeedMet) {
    // F-Grade Penalties
    if (currentPick.round === 1 && (prospect.isRB || prospect.pos === 'RB')) {
        return { grade: 'F', penalty: 'RB' };
    }
    if (currentPick.round <= 2 && prospect.pos === 'QB' && currentPick.teamId === 'no') {
        return { grade: 'F', penalty: 'QB' };
    }
    if (currentPick.round <= 5 && (prospect.pos === 'P' || prospect.pos === 'K' || prospect.pos === 'LS')) {
        return { grade: 'F', penalty: 'PK' };
    }

    // Basic value calculation using Rich Hill Chart percentages
    const pickValue = richHillValues[pickNumber] || Math.max(1, Math.floor(1000 / pickNumber));
    const prospectValue = richHillValues[prospectRank] || Math.max(1, Math.floor(1000 / prospectRank));

    let ratio = prospectValue / pickValue;

    // Phase 11: Top 10 Forgiveness. The Rich Hill curve drops so steeply from 1 to 10 that minor reaches destroy grades.
    // Modified in Phase 17: Reduced from 0.10 to 0.05 to prevent inflating grades to A+ too easily
    if (pickNumber <= 10) {
        ratio += 0.05;
    }

    // Phase 11: Boosted Need Synergy. Reward strategic roster building more heavily.
    if (isNeedMet) {
        ratio += 0.10;
    }

    if (ratio >= 1.15) return { grade: 'A+' };
    if (ratio >= 1.00) return { grade: 'A' };
    if (ratio >= 0.90) return { grade: 'B' };
    if (ratio >= 0.80) return { grade: 'C' };
    return { grade: 'D' };
}
// ====== PHASE 6: TRADE NEGOTIATION ENGINE ======
function closeTradeModal() {
    document.getElementById('trade-modal').classList.add('hidden');
}

function attemptTradeUp() {
    isTradeUpMode = true;
    openTradeModal();
}

function attemptTradeDown() {
    isTradeUpMode = false;
    openTradeModal();
}

function openTradeModal() {
    // Phase 12b: Prevent race condition where the background simulation loop completes the pick before the user hits Propose Trade
    isPaused = true;
    if (simInterval) clearTimeout(simInterval);
    updateDraftHeader();

    document.getElementById('trade-modal').classList.remove('hidden');
    tradeSelectedUserPicks = [];
    tradeSelectedPartnerPicks = [];

    const partnerSelect = document.getElementById('trade-partner-select');
    partnerSelect.innerHTML = '';

    // Phase 11 Fix: Sort teams by nearest pick proximity instead of alphabetically
    const teamsWithNextPicks = teams.filter(t => t.id !== targetTeamId).map(t => {
        // Find their nearest future pick from the current draft cursor
        const nextPick = activeDraftOrder.slice(currentPickIndex).find(p => p.teamId === t.id);
        const pickDistance = nextPick ? nextPick.pick : 9999; // If no picks left, push to end
        return {
            team: t,
            distance: pickDistance
        };
    });

    teamsWithNextPicks.sort((a, b) => {
        if (a.distance !== b.distance) {
            return a.distance - b.distance;
        }
        return a.team.name.localeCompare(b.team.name);
    });

    const remainingTeams = teamsWithNextPicks.map(twp => twp.team);

    if (isTradeUpMode) {
        // Trade Up: partner defaults to current pick owner
        const currentPick = activeDraftOrder[currentPickIndex];
        tradePartnerId = currentPick.teamId;
    } else {
        // Trade Down: partner defaults to the first team in alphabetical list
        tradePartnerId = remainingTeams[0].id;
    }

    remainingTeams.forEach(team => {
        const option = document.createElement('option');
        option.value = team.id;

        // Find distance
        const twp = teamsWithNextPicks.find(t => t.team.id === team.id);
        const nextStr = twp && twp.distance !== 9999 ? ` (Next Pick: ${twp.distance})` : '';

        option.textContent = `${team.name}${nextStr}`;
        if (team.id === tradePartnerId) option.selected = true;
        partnerSelect.appendChild(option);
    });

    const userTeam = teams.find(t => t.id === targetTeamId);
    document.getElementById('trade-user-team-name').textContent = userTeam.name;

    updateTradeModalUI();
}

function getTeamPicks(teamId) {
    // Only return picks that haven't happened yet
    const currentYear = activeFullDraftOrder.filter(p => p.currentTeamId === teamId && p.pick > currentPickIndex);
    const nextYear = activePicks2027.filter(p => p.currentTeamId === teamId);
    const twoYearsOut = activePicks2028.filter(p => p.currentTeamId === teamId);
    return [...currentYear, ...nextYear, ...twoYearsOut];
}

function updateTradeModalUI() {
    tradePartnerId = document.getElementById('trade-partner-select').value;

    // Clear selections that are no longer valid if partner switched
    tradeSelectedPartnerPicks = [];

    renderPickCheckboxes('partner-picks-container', getTeamPicks(tradePartnerId), tradeSelectedPartnerPicks, false);
    renderPickCheckboxes('user-picks-container', getTeamPicks(targetTeamId), tradeSelectedUserPicks, true);

    evaluateTradeLogic();
}

function renderPickCheckboxes(containerId, picks, selectedArray, isUserPicks) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    if (picks.length === 0) {
        container.innerHTML = '<div style="color: var(--color-text-secondary); font-style: italic;">No tradable picks.</div>';
        return;
    }

    picks.forEach(pick => {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.marginBottom = '0.5rem';

        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.value = pick.id;
        cb.style.marginRight = '0.8rem';
        cb.style.transform = 'scale(1.2)';
        cb.checked = selectedArray.some(p => p.id === pick.id);

        cb.onchange = (e) => {
            if (e.target.checked) {
                selectedArray.push(pick);
            } else {
                const idx = selectedArray.findIndex(p => p.id === pick.id);
                if (idx > -1) selectedArray.splice(idx, 1);
            }
            evaluateTradeLogic();
        };

        const label = document.createElement('label');
        label.style.cursor = 'pointer';
        label.style.flex = "1";

        const yearText = pick.year === 2026 ? "2026" : pick.year;
        const roundText = `Round ${pick.round}`;
        const pickNumText = pick.year === 2026 ? ` (Pick ${pick.pick})` : "";
        label.textContent = `${yearText} ${roundText}${pickNumText} - Value: ${pick.value}`;

        // Let clicking label toggle checkbox
        label.onclick = () => { cb.click(); };

        div.appendChild(cb);
        div.appendChild(label);
        container.appendChild(div);
    });
}

function evaluateTradeLogic() {
    const sentValueEl = document.getElementById('trade-sent-value');
    const receivedValueEl = document.getElementById('trade-received-value');
    const statusMsg = document.getElementById('trade-status-message');
    const btnPropose = document.getElementById('btn-propose-trade');

    const totalSent = tradeSelectedUserPicks.reduce((sum, p) => sum + p.value, 0);
    const totalReceived = tradeSelectedPartnerPicks.reduce((sum, p) => sum + p.value, 0);

    sentValueEl.textContent = totalSent;
    receivedValueEl.textContent = totalReceived;

    if (tradeSelectedUserPicks.length === 0 && tradeSelectedPartnerPicks.length === 0) {
        statusMsg.textContent = "Select picks to evaluate trade.";
        statusMsg.style.color = "var(--color-text-secondary)";
        btnPropose.disabled = true;
        btnPropose.style.opacity = '0.5';
        btnPropose.style.pointerEvents = 'none';
        return;
    }

    btnPropose.disabled = false;
    btnPropose.style.opacity = '1';
    btnPropose.style.pointerEvents = 'auto';

    if (totalSent === 0) {
        statusMsg.textContent = "Offer is invalid. Cannot ask for free assets.";
        statusMsg.style.color = "var(--color-warning)";
        return;
    }

    if (totalReceived === 0) {
        statusMsg.textContent = "Offer is completely gratuitous and will be accepted.";
        statusMsg.style.color = "var(--color-success)";
        return;
    }

    // Basic Trade Value Model: Sent must be >= Receive * 0.95 for CPU to accept, usually.
    const diff = totalSent - totalReceived;
    const ratio = totalSent / totalReceived;

    if (ratio >= 1.05) {
        statusMsg.textContent = "CPU will accept this OVERPAY.";
        statusMsg.style.color = "var(--color-success)";
    } else if (ratio >= 0.95) {
        statusMsg.textContent = "FAIR VALUE. CPU is likely to accept.";
        statusMsg.style.color = "var(--color-saints-gold)";
    } else {
        statusMsg.textContent = "CPU will REJECT this lowball offer.";
        statusMsg.style.color = "var(--color-warning)";
    }
}

function submitTradeProposal() {
    const totalSent = tradeSelectedUserPicks.reduce((sum, p) => sum + p.value, 0);
    let totalReceived = tradeSelectedPartnerPicks.reduce((sum, p) => sum + p.value, 0);

    // Phase 10: Inject +/- 10% randomness to CPU's perception of received value
    const cpuMoodModifier = 0.9 + (Math.random() * 0.2);
    totalReceived = totalReceived * cpuMoodModifier;

    if (totalReceived > 0) {
        const ratio = totalSent / totalReceived;
        if (ratio < 0.95) {
            alert("Trade Rejected. The CPU GM hangs up the phone.");
            return;
        }
    }

    // Execute Trade
    tradeSelectedUserPicks.forEach(pick => {
        if (pick.year === 2026) {
            pick.currentTeamId = tradePartnerId;
            pick.teamName = teams.find(t => t.id === tradePartnerId).name;
            // IMPORTANT: If this pick is inside the actively simulated `activeDraftOrder`, sync it
            let activeNode = activeDraftOrder.find(p => p.id === pick.id);
            if (activeNode) {
                activeNode.teamId = tradePartnerId;
                activeNode.teamName = pick.teamName;
            }
        } else {
            pick.currentTeamId = tradePartnerId;
        }
    });

    tradeSelectedPartnerPicks.forEach(pick => {
        if (pick.year === 2026) {
            pick.currentTeamId = targetTeamId;
            pick.teamName = teams.find(t => t.id === targetTeamId).name;
            // IMPORTANT: If this pick is inside the actively simulated `activeDraftOrder`, sync it
            let activeNode = activeDraftOrder.find(p => p.id === pick.id);
            if (activeNode) {
                activeNode.teamId = targetTeamId;
                activeNode.teamName = pick.teamName;
            }
        } else {
            pick.currentTeamId = targetTeamId;
        }
    });

    // Log Trade in Tracker
    const formatPickList = (picks) => {
        return picks.map(p => {
            if (p.year === 2026) return `R${p.round} P${p.pick} (2026)`;
            return `R${p.round} (${p.year})`;
        }).join(', ');
    };

    const userAssetsSent = formatPickList(tradeSelectedUserPicks);
    const partnerAssetsSent = formatPickList(tradeSelectedPartnerPicks);

    const item = document.createElement('div');
    item.className = 'tracker-item tracker-trade';
    item.style.borderLeft = '3px solid var(--color-warning)';
    item.style.background = 'rgba(255, 77, 77, 0.1)';
    item.style.padding = '0.75rem';
    item.innerHTML = `
        <div class="tracker-pick-info" style="color: var(--color-warning); font-weight: bold; margin-bottom: 0.3rem;">TRADE EXECUTED</div>
        <div class="tracker-player" style="font-size: 0.85rem; line-height: 1.4;">
            <strong style="color: var(--color-text-primary);">${teams.find(t => t.id === targetTeamId).name} Receive:</strong><br>
            <span style="color: var(--color-text-secondary);">${partnerAssetsSent || 'Nothing'}</span><br><br>
            <strong style="color: var(--color-text-primary);">${teams.find(t => t.id === tradePartnerId).name} Receive:</strong><br>
            <span style="color: var(--color-text-secondary);">${userAssetsSent || 'Nothing'}</span>
        </div>
    `;
    trackerList.prepend(item);

    userExecutedTrades.push({
        partner: teams.find(t => t.id === tradePartnerId).name,
        sent: userAssetsSent || 'Nothing',
        received: partnerAssetsSent || 'Nothing'
    });

    alert("Trade Accepted! Pick ownerships have been transferred.");
    closeTradeModal();
    updateDraftHeader();

    // If we traded up and are now on the clock for the CURRENT pick, pause.
    if (!isPaused && activeDraftOrder[currentPickIndex].teamId === targetTeamId) {
        isPaused = true;
        clearTimeout(simInterval);
        updateDraftHeader();
    }
}

// Restart Draft
function restartDraft() {
    successModal.classList.add('hidden');
    sectionDraftRoom.classList.add('hidden');
    sectionTeamSelect.classList.remove('hidden');
    sectionDraftRoom.classList.remove('active');
    sectionTeamSelect.classList.add('active');
    clearTimeout(simInterval);
    init();
}

// Bootstrap
document.addEventListener('DOMContentLoaded', init);
