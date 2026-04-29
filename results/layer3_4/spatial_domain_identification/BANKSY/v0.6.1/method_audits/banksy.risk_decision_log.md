# BANKSY Risk Register And Decision Log

```yaml
risk_register:
  scientific_risks:
    - risk: Agent may overstate BANKSY as universally best for spatial domain identification.
      severity: medium
      mitigation: Keep Layer 2 handoff compact and evidence-bounded; do not make benchmark superiority or biological correctness claims.
      evidence_refs: [E_LAYER2_HANDOFF, E_NAS_COVERAGE]
  engineering_risks:
    - risk: Dense conversion can cause memory failures on larger datasets.
      severity: high
      mitigation: Require memory preflight and typed insufficient-memory failure before production.
      evidence_refs: [E_README, E_EMBED]
    - risk: Backend plotting or output side effects may write unexpected artifacts.
      severity: medium
      mitigation: Constrain output directory and normalize artifact naming in the wrapper.
      evidence_refs: [E_PLOT]
    - risk: Final validation is a BioHarness-added stage without a native BANKSY binding observed.
      severity: medium
      mitigation: Treat validation as harness responsibility and require contract tests before production.
      evidence_refs: [E_NAS_COVERAGE]
  environment_risks:
    - risk: Python and numpy constraints may conflict with shared BioHarness environments.
      severity: high
      mitigation: Use isolated environment probe before assigning a shared capsule.
      evidence_refs: [E_PYPROJECT]
    - risk: Optional mclust path requires rpy2/R.
      severity: medium
      mitigation: Default to Leiden and gate optional mclust behind separate environment proof.
      evidence_refs: [E_PYPROJECT, E_CLUSTER]
  reproducibility_risks:
    - risk: Stochastic clustering and UMAP steps may vary across runs.
      severity: medium
      mitigation: Expose seed policy semantically, record backend seeds, and use label permutation-aware comparisons.
      evidence_refs: [E_CLUSTER, E_UMAP_PCA]
  licensing_risks:
    - risk: GPL-3.0 may constrain redistribution or bundling strategy.
      severity: high
      mitigation: Review legal/distribution approach before packaging any adapter or capsule.
      evidence_refs: [E_LICENSE, E_PYPROJECT]
  agent_misuse_risks:
    - risk: Agent exposes backend low-level parameters or raw function names.
      severity: high
      mitigation: Keep Layer3 semantic and put backend details only in Layer4.
      evidence_refs: [E_REPO_INTERFACE_CONTRACT, E_NAS_MATRIX]
    - risk: Agent chooses BANKSY outside hard constraints.
      severity: medium
      mitigation: Surface no-image/no-reference and no-joint-multislice limits in Layer3.
      evidence_refs: [E_LAYER2_HANDOFF]
    - risk: Agent treats visual sanity as biological correctness.
      severity: high
      mitigation: Validation plan explicitly marks visual checks as sanity only.
      evidence_refs: [E_NAS_COVERAGE]
    - risk: Agent ignores environment/capsule restrictions.
      severity: high
      mitigation: Keep environment plan separate and mark capsule support as not_observed.
      evidence_refs: [E_PYPROJECT]
    - risk: Agent assumes implementation exists when only a blueprint exists.
      severity: high
      mitigation: Repeat authority notes across Layer3, Layer4, audit, review pack, and roadmap.
      evidence_refs: [E_TEMPLATE]

decision_log:
  - decision_id: D001_status
    decision: Keep BANKSY artifacts blueprint-only with no production adapter claim.
    options_considered: [blueprint, production_candidate, production_adapter]
    rationale: No environment capsule, runtime execution, validator, smoke fixture, or runtime-cost record exists.
    evidence_refs: [E_TEMPLATE, E_EXAMPLES, E_NAS_COVERAGE]
    decided_by: BioHarness planning pass
    date: "2026-04-28"
    revisitable: true
  - decision_id: D002_layer3_visibility
    decision: Layer3 is agent-readable and semantic; backend raw details are excluded.
    options_considered: [semantic_agent_surface, backend_exposing_surface]
    rationale: Repo architecture separates ExecutionSurfaceSpec from BackendAdapterSpec.
    evidence_refs: [E_REPO_INTERFACE_CONTRACT, E_NAS_MATRIX]
    decided_by: BioHarness planning pass
    date: "2026-04-28"
    revisitable: false
  - decision_id: D003_layer4_visibility
    decision: Layer4 adapter draft is implementation_debug_audit_only and includes backend binding evidence.
    options_considered: [hide_all_backend_evidence, include_layer4_binding_evidence]
    rationale: Human reviewers need traceable source evidence for implementation claims while keeping Layer3 clean.
    evidence_refs: [E_REPO_INTERFACE_CONTRACT, E_NAS_INVENTORY]
    decided_by: BioHarness planning pass
    date: "2026-04-28"
    revisitable: true
  - decision_id: D004_rewrite_scope
    decision: Use strong_wrapper; avoid algorithmic rewrite.
    options_considered: [thin_adapter, strong_wrapper, compatibility_rewrite, algorithmic_rewrite, hold]
    rationale: Official backend behavior should be preserved; BioHarness needs interface and artifact standardization.
    evidence_refs: [E_INIT, E_EMBED, E_RUN, E_CLUSTER]
    decided_by: BioHarness planning pass
    date: "2026-04-28"
    revisitable: true
  - decision_id: D005_default_clustering
    decision: Plan Leiden as default and hold optional mclust until R/rpy2 support is proven.
    options_considered: [leiden_default, mclust_default, support_both_immediately]
    rationale: Official evidence records Leiden default and mclust optional dependency complexity.
    evidence_refs: [E_README, E_PYPROJECT, E_CLUSTER]
    decided_by: BioHarness planning pass
    date: "2026-04-28"
    revisitable: true
```
