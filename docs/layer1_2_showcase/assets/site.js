const state = {
  data: null,
  selectedSlug: "cell_cell_communication",
  selectedScenario: "single",
  query: "",
};

const els = {
  statusStrip: document.querySelector("#statusStrip"),
  principles: document.querySelector("#principles"),
  bubbleCloud: document.querySelector("#bubbleCloud"),
  routeGrid: document.querySelector("#routeGrid"),
  routeSearch: document.querySelector("#routeSearch"),
  playgroundRoute: document.querySelector("#playgroundRoute"),
  playgroundTarget: document.querySelector("#playgroundTarget"),
  playgroundOutput: document.querySelector("#playgroundOutput"),
  playgroundHint: document.querySelector("#playgroundHint"),
  selectedRoute: document.querySelector("#selectedRoute"),
  selectedMethodCount: document.querySelector("#selectedMethodCount"),
  selectedTopicTitle: document.querySelector("#selectedTopicTitle"),
  selectedBoundary: document.querySelector("#selectedBoundary"),
  selectedFields: document.querySelector("#selectedFields"),
  decisionTree: document.querySelector("#decisionTree"),
  methodTable: document.querySelector("#methodTable"),
  methodTableNote: document.querySelector("#methodTableNote"),
  methodPanel: document.querySelector("#method-panel"),
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

function bubbleLabel(route) {
  const custom = {
    artifact_correction: "Artifact\nCorrection",
    cell_cell_communication: "Cell-Cell\nCommunication",
    cell_type_inference: "Cell Type\nInference",
    data_quality_control: "Quality\nControl",
    denoising_signal_recovery: "Denoising\nRecovery",
    domain_clustering: "Domain /\nClustering",
    gene_expression_prediction_imputation: "Prediction /\nImputation",
    graph_neighborhood: "Graph /\nNeighborhood",
    integration: "Integration",
    normalization: "Normalization",
    panel_design: "Panel\nDesign",
    phenotype_cohort_linked_spatial_feature_niche_analysis: "Phenotype /\nCohort Niche",
    program_discovery: "Program\nDiscovery",
    segmentation: "Segmentation",
    spatial_clonal_analysis: "Spatial\nClonal",
    spatial_contrast_testing: "Spatial\nContrast",
    spatial_perturbation_analysis: "Spatial\nPerturbation",
    spatial_trajectory_analysis: "Spatial\nTrajectory",
    spatially_variable_gene_detection: "Spatially\nVariable Genes",
    super_resolution: "Super-\nresolution",
  };
  return custom[route.slug] || route.analysis_problem.replace(" / ", "\n").replace(" ", "\n");
}

function bubbleSize(topic) {
  const count = topic.method_count || 0;
  if (count >= 20) return "large";
  if (count >= 10) return "medium";
  return "small";
}

function routeForSlug(slug) {
  return state.data.routes.find((route) => route.slug === slug);
}

function topicForSlug(slug) {
  return state.data.topics[slug];
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

function setJumpHighlight() {
  els.methodPanel.classList.remove("is-jumped");
  window.requestAnimationFrame(() => {
    els.methodPanel.classList.add("is-jumped");
    window.setTimeout(() => els.methodPanel.classList.remove("is-jumped"), 1100);
  });
}

function activateRoute(slug, { scroll = false, via = "grid" } = {}) {
  state.selectedSlug = slug;
  renderBubbleCloud();
  renderRoutes();
  renderSelection();
  drawCanvas();
  if (scroll) {
    els.methodPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    setJumpHighlight();
    els.playgroundHint.textContent =
      via === "bubble"
        ? "Bubble route locked. Jumped to the matching Layer 2 panel."
        : "Route updated. Layer 2 panel refreshed below.";
  }
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

function renderBubbleCloud() {
  const routes = filteredRoutes();
  els.bubbleCloud.innerHTML = routes
    .map((route, index) => {
      const topic = topicForSlug(route.slug);
      const accent = palette[index % palette.length];
      return `
        <button
          class="route-bubble ${route.slug === state.selectedSlug ? "is-active" : ""} size-${bubbleSize(topic)}"
          data-slug="${escapeHtml(route.slug)}"
          style="--accent:${accent}; --delay:${index * 45}ms"
          type="button"
          role="listitem"
        >
          <span class="bubble-name">${escapeHtml(bubbleLabel(route)).replaceAll("\n", "<br />")}</span>
          <span class="bubble-meta">${topic.method_count} methods</span>
        </button>
      `;
    })
    .join("");

  els.bubbleCloud.querySelectorAll(".route-bubble").forEach((bubble) => {
    bubble.addEventListener("click", () => {
      activateRoute(bubble.dataset.slug, { scroll: true, via: "bubble" });
    });
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
    card.addEventListener("click", () => activateRoute(card.dataset.slug, { scroll: false, via: "grid" }));
  });
}

function renderSelection() {
  const route = routeForSlug(state.selectedSlug);
  const topic = topicForSlug(state.selectedSlug);
  if (!route || !topic) return;

  els.playgroundRoute.textContent = route.analysis_problem;
  els.playgroundTarget.textContent = route.analysis_target;
  els.playgroundOutput.textContent = route.target_output;

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

async function loadRegistry() {
  const inline = window.__REGISTRY__ || null;
  if (window.location.protocol === "file:" && inline) {
    return inline;
  }
  try {
    const response = await fetch("data/registry.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Registry fetch failed: ${response.status}`);
    return await response.json();
  } catch (error) {
    if (inline) {
      return inline;
    }
    throw error;
  }
}

async function init() {
  try {
    state.data = await loadRegistry();
    renderStatus();
    renderPrinciples();
    renderBubbleCloud();
    renderRoutes();
    renderSelection();
    renderScenarios();
    renderCCC();
    drawCanvas();
    document.body.classList.add("is-ready");
  } catch (error) {
    document.body.classList.add("load-error");
    els.selectedTopicTitle.textContent = "Registry data failed to load";
    els.selectedBoundary.textContent = error.message;
    els.playgroundHint.textContent = "Registry snapshot was unavailable in this preview context.";
  }
}

els.routeSearch.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderBubbleCloud();
  renderRoutes();
});

window.addEventListener("resize", () => {
  if (state.data) drawCanvas();
});

init();
