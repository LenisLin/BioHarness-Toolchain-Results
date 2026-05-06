const state = {
  data: null,
  selectedSlug: "cell_cell_communication",
  selectedScenario: "single",
  query: "",
};

const els = {
  statusStrip: document.querySelector("#statusStrip"),
  principles: document.querySelector("#principles"),
  routeGrid: document.querySelector("#routeGrid"),
  routeSearch: document.querySelector("#routeSearch"),
  selectedRoute: document.querySelector("#selectedRoute"),
  selectedMethodCount: document.querySelector("#selectedMethodCount"),
  selectedTopicTitle: document.querySelector("#selectedTopicTitle"),
  selectedBoundary: document.querySelector("#selectedBoundary"),
  selectedFields: document.querySelector("#selectedFields"),
  decisionTree: document.querySelector("#decisionTree"),
  methodTable: document.querySelector("#methodTable"),
  methodTableNote: document.querySelector("#methodTableNote"),
  scenarioTabs: document.querySelector("#scenarioTabs"),
  scenarioPanel: document.querySelector("#scenarioPanel"),
  cccSafeLanguage: document.querySelector("#cccSafeLanguage"),
  cccFields: document.querySelector("#cccFields"),
  cccMethods: document.querySelector("#cccMethods"),
  canvas: document.querySelector("#routeCanvas"),
};

const palette = ["#2f6a4f", "#bd563b", "#2f6f91", "#a8792b"];

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function compactText(value = "", limit = 190) {
  const clean = String(value).replace(/\s+/g, " ").trim();
  if (clean.length <= limit) return clean;
  return `${clean.slice(0, limit - 1).trim()}...`;
}

function routeForSlug(slug) {
  return state.data.routes.find((route) => route.slug === slug);
}

function topicForSlug(slug) {
  return state.data.topics[slug];
}

function renderStatus() {
  els.statusStrip.innerHTML = state.data.snapshot.status
    .map(
      (item) => `
        <div class="status-cell">
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
          <small>${escapeHtml(item.note)}</small>
        </div>
      `,
    )
    .join("");
}

function renderPrinciples() {
  els.principles.innerHTML = state.data.principles
    .map((item) => `<div class="principle">${escapeHtml(item)}</div>`)
    .join("");
}

function filteredRoutes() {
  const q = state.query.trim().toLowerCase();
  if (!q) return state.data.routes;
  return state.data.routes.filter((route) => {
    const haystack = [
      route.analysis_problem,
      route.analysis_target,
      route.main_input_or_signal,
      route.target_output,
      route.route,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

function renderRoutes() {
  const routes = filteredRoutes();
  els.routeGrid.innerHTML = routes
    .map(
      (route) => `
        <button class="route-card ${route.slug === state.selectedSlug ? "is-active" : ""}"
          data-slug="${escapeHtml(route.slug)}" type="button">
          <span class="card-title">${escapeHtml(route.analysis_problem)}</span>
          <span class="route-meta">
            <span><span>Target</span>${escapeHtml(compactText(route.analysis_target, 120))}</span>
            <span><span>Output</span>${escapeHtml(compactText(route.target_output, 120))}</span>
          </span>
          <span class="route-path">${escapeHtml(route.route)}</span>
        </button>
      `,
    )
    .join("");

  els.routeGrid.querySelectorAll(".route-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedSlug = card.dataset.slug;
      renderSelection();
      renderRoutes();
      drawCanvas();
    });
  });
}

function renderSelection() {
  const route = routeForSlug(state.selectedSlug);
  const topic = topicForSlug(state.selectedSlug);
  if (!route || !topic) return;

  els.selectedRoute.textContent = route.analysis_problem;
  els.selectedMethodCount.textContent = `${topic.method_count} method rows`;
  els.selectedTopicTitle.textContent = topic.title;
  els.selectedBoundary.textContent = topic.problem_boundary;
  els.selectedFields.innerHTML = topic.topic_specific_fields
    .map((field) => `<span class="field-pill">${escapeHtml(field)}</span>`)
    .join("");
  els.methodTableNote.textContent = `${topic.path}`;

  els.decisionTree.innerHTML = topic.decision_tree
    .map(
      (branch) => `
        <div class="branch">
          <strong>${escapeHtml(branch.condition)}</strong>
          <ul>
            ${(branch.actions || [])
              .slice(0, 3)
              .map((action) => `<li>${escapeHtml(action)}</li>`)
              .join("")}
          </ul>
        </div>
      `,
    )
    .join("");

  renderMethodTable(topic);
}

function renderMethodTable(topic) {
  const preferred = ["Method", "Selection role", "Main output", ...topic.topic_specific_fields.slice(0, 2)];
  const columns = preferred.filter((col) => topic.table_columns.includes(col));
  const rows = topic.method_rows || [];

  els.methodTable.innerHTML = `
    <table>
      <thead>
        <tr>${columns.map((col) => `<th>${escapeHtml(col)}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (row) => `
              <tr>
                ${columns.map((col) => `<td>${escapeHtml(compactText(row[col] || "", 160))}</td>`).join("")}
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderScenarios() {
  els.scenarioTabs.innerHTML = state.data.scenarios
    .map(
      (scenario) => `
        <button class="scenario-tab ${scenario.id === state.selectedScenario ? "is-active" : ""}"
          type="button" role="tab" aria-selected="${scenario.id === state.selectedScenario}"
          data-scenario="${escapeHtml(scenario.id)}">
          ${escapeHtml(scenario.label)}
        </button>
      `,
    )
    .join("");

  els.scenarioTabs.querySelectorAll(".scenario-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedScenario = button.dataset.scenario;
      renderScenarios();
    });
  });

  const scenario = state.data.scenarios.find((item) => item.id === state.selectedScenario);
  if (!scenario) return;
  els.scenarioPanel.innerHTML = `
    <blockquote>${escapeHtml(scenario.prompt)}</blockquote>
    <div class="scenario-grid">
      <div class="scenario-cell">
        <span>Layer 1 route</span>
        <strong>${escapeHtml(scenario.route)}</strong>
      </div>
      <div class="scenario-cell">
        <span>Layer 2 file</span>
        <strong>${escapeHtml(scenario.layer2)}</strong>
      </div>
      <div class="scenario-cell">
        <span>Caveat</span>
        <p>${escapeHtml(scenario.caveat)}</p>
      </div>
    </div>
    <div class="scenario-cell scenario-decision">
      <span>Decision</span>
      <p>${escapeHtml(scenario.decision)}</p>
    </div>
  `;
}

function renderCCC() {
  const ccc = topicForSlug("cell_cell_communication");
  els.cccSafeLanguage.textContent = state.data.ccc_highlight.safe_language;
  els.cccFields.innerHTML = state.data.ccc_highlight.fields
    .map(
      (field, index) => `
        <div class="ccc-field">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${escapeHtml(field)}</strong>
        </div>
      `,
    )
    .join("");

  const rows = ccc.method_rows || [];
  els.cccMethods.innerHTML = rows
    .map(
      (row) => `
        <article class="ccc-method">
          <strong>${escapeHtml(row.Method)}</strong>
          <p>${escapeHtml(compactText(row["Selection role"], 112))}</p>
          <p><b>Branch:</b> ${escapeHtml(row["CCC Branch"] || "")}</p>
          <p><b>Resolution:</b> ${escapeHtml(row["Resolution / Grouping Level"] || "")}</p>
        </article>
      `,
    )
    .join("");
}

function drawCanvas() {
  const canvas = els.canvas;
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  canvas.height = Math.max(1, Math.floor(rect.height * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const width = rect.width;
  const height = rect.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#1c241f";
  ctx.fillRect(0, 0, width, height);

  for (let x = 30; x < width; x += 42) {
    ctx.strokeStyle = "rgba(247, 248, 244, 0.045)";
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 90, height);
    ctx.stroke();
  }

  const routes = state.data.routes;
  const centerX = width * 0.5;
  const centerY = height * 0.5;
  routes.forEach((route, index) => {
    const angle = (Math.PI * 2 * index) / routes.length - Math.PI / 2;
    const radius = Math.min(width, height) * (0.31 + (index % 3) * 0.035);
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    const active = route.slug === state.selectedSlug;
    const color = palette[index % palette.length];

    ctx.strokeStyle = active ? "rgba(255, 255, 255, 0.72)" : "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = active ? 1.8 : 0.8;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.fillStyle = active ? color : "rgba(247, 248, 244, 0.76)";
    ctx.beginPath();
    ctx.arc(x, y, active ? 8 : 5, 0, Math.PI * 2);
    ctx.fill();

    if (active || index % 4 === 0) {
      ctx.font = active ? "700 13px sans-serif" : "11px sans-serif";
      ctx.fillStyle = active ? "#ffffff" : "rgba(247, 248, 244, 0.68)";
      ctx.fillText(route.analysis_problem, Math.min(x + 10, width - 190), y + 4);
    }
  });

  ctx.fillStyle = "#f7f8f4";
  ctx.beginPath();
  ctx.arc(centerX, centerY, 34, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#17211c";
  ctx.font = "700 12px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("L1", centerX, centerY - 2);
  ctx.font = "11px sans-serif";
  ctx.fillText("20 routes", centerX, centerY + 14);
  ctx.textAlign = "start";
}

async function init() {
  try {
    const response = await fetch("data/registry.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Registry fetch failed: ${response.status}`);
    state.data = await response.json();
    renderStatus();
    renderPrinciples();
    renderRoutes();
    renderSelection();
    renderScenarios();
    renderCCC();
    drawCanvas();
  } catch (error) {
    document.body.classList.add("load-error");
    els.selectedTopicTitle.textContent = "Registry data failed to load";
    els.selectedBoundary.textContent = error.message;
  }
}

els.routeSearch.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderRoutes();
});

window.addEventListener("resize", () => {
  if (state.data) drawCanvas();
});

init();
