# BANKSY Risk Register And Decision Log v0.7

## Risk Register

```yaml
risk_register:
  scientific_risks:
    - risk: Runtime success or visual plausibility could be mistaken for biological correctness.
      mitigation: Keep visual checks sanity-only and require scientific review for interpretation.
      evidence_refs:
        - REPO_LAYER3_LAYER4_PROTOCOL
    - risk: Exact domain count may not be guaranteed by semantic granularity controls.
      mitigation: Use target_domain_count_policy with approximate granularity user confirmation.
      evidence_refs:
        - RUN_MULTIPARAM_OUTPUT
        - CLUSTER_SEED_OPTIONAL_MCLUST
  engineering_risks:
    - risk: Layer3 could leak backend internals.
      mitigation: Keep raw backend paths and symbols in Layer4 only.
      evidence_refs:
        - REPO_LAYER3_LAYER4_PROTOCOL
    - risk: Result table and output schema are not frozen.
      mitigation: Require output schema freeze after smoke fixture.
      evidence_refs:
        - RUN_MULTIPARAM_OUTPUT
        - PLOT_OUTPUT_ARTIFACTS
    - risk: Dense-memory risk may surprise agent-facing execution.
      mitigation: Add preflight memory screen and typed memory-risk failure.
      evidence_refs:
        - EMBED_MATRIX_DENSE_RISK
  environment_risks:
    - risk: Python and numpy constraints may conflict with a shared capsule.
      mitigation: Run isolated import probe and decide shared versus dedicated capsule.
      evidence_refs:
        - PYPROJECT_PACKAGE_ENV
    - risk: Optional R/rpy2 path adds cross-language complexity.
      mitigation: Exclude optional path from MVP until separately verified.
      evidence_refs:
        - PYPROJECT_PACKAGE_ENV
        - CLUSTER_SEED_OPTIONAL_MCLUST
  reproducibility_risks:
    - risk: Stochastic clustering or embedding may vary across runs.
      mitigation: Record seeds and require repeated-run fixture comparison.
      evidence_refs:
        - CLUSTER_SEED_OPTIONAL_MCLUST
        - UMAP_PCA_SEED
    - risk: Label IDs may permute between valid runs.
      mitigation: Use label-permutation-aware metrics such as ARI, NMI, and adjusted mutual information.
      evidence_refs:
        - REPO_LAYER3_LAYER4_PROTOCOL
  licensing_risks:
    - risk: GPL-3.0 dependency affects packaging and distribution choices.
      mitigation: Review packaging strategy before bundling or distributing a capsule.
      evidence_refs:
        - LICENSE_GPL3
        - PYPROJECT_PACKAGE_ENV
  agent_misuse_risks:
    - risk: Agent may treat optional multi-sample usage as a validated joint contract.
      mitigation: Use normalized multi_sample_policy with no joint contract claim.
      evidence_refs:
        - OFFICIAL_EXAMPLES_FIXTURE_LIMIT
    - risk: Agent may ask for exact domain count when only approximate granularity is supported.
      mitigation: Ask user whether approximate granularity is acceptable.
      evidence_refs:
        - RUN_MULTIPARAM_OUTPUT
        - CLUSTER_SEED_OPTIONAL_MCLUST
```

## Decision Log

```yaml
decision_log:
  - decision_id: BANKSY_V070_D001
    decision: Treat v0.6.1 as failed/stress-test material and regenerate v0.7.0 artifacts from the generic v0.7 template.
    options_considered:
      - repair v0.6.1 active files
      - regenerate v0.7.0 from template
    rationale: v0.7 adds storage, evidence, environment, acceptance, and normalization requirements.
    evidence_refs:
      - REPO_LAYER3_LAYER4_PROTOCOL
    decided_by: Codex
    date: "2026-04-28"
    revisitable: false
  - decision_id: BANKSY_V070_D002
    decision: Store BANKSY-specific intermediate artifacts only in NAS.
    options_considered:
      - project docs
      - NAS results workspace
    rationale: Method-specific audit/review/surface/adapter artifacts are intermediate engineering outputs.
    evidence_refs:
      - REPO_LAYER3_LAYER4_PROTOCOL
    decided_by: Codex
    date: "2026-04-28"
    revisitable: false
  - decision_id: BANKSY_V070_D003
    decision: Use a semantic Layer3 coordinate source and keep backend coordinate representation in Layer4 only.
    options_considered:
      - expose backend coordinate representation to agent
      - expose semantic coordinate source to agent
    rationale: Layer3 must remain semantic and agent-safe.
    evidence_refs:
      - README_QUICKSTART
      - INIT_COORDINATES_WEIGHTS
      - REPO_LAYER3_LAYER4_PROTOCOL
    decided_by: Codex
    date: "2026-04-28"
    revisitable: true
  - decision_id: BANKSY_V070_D004
    decision: Keep environment_hold_status as not_justified_yet.
    options_considered:
      - final environment hold
      - probe-required status
    rationale: Static dependency risk exists, but no failed probe or impossible constraint is recorded.
    evidence_refs:
      - PYPROJECT_PACKAGE_ENV
      - CLUSTER_SEED_OPTIONAL_MCLUST
    decided_by: Codex
    date: "2026-04-28"
    revisitable: true
  - decision_id: BANKSY_V070_D005
    decision: Use strong_wrapper as rewrite level and do not touch algorithm core.
    options_considered:
      - thin adapter
      - strong wrapper
      - compatibility rewrite
      - algorithmic rewrite
    rationale: Interface standardization is needed; algorithmic reimplementation is not supported by current evidence.
    evidence_refs:
      - README_QUICKSTART
      - RUN_MULTIPARAM_OUTPUT
      - REPO_LAYER3_LAYER4_PROTOCOL
    decided_by: Codex
    date: "2026-04-28"
    revisitable: true
  - decision_id: BANKSY_V070_D006
    decision: Set review recommendation to partial_with_known_blockers until probes and fixture validation exist.
    options_considered:
      - ready_for_human_review
      - partial_with_known_blockers
      - requires_followup
    rationale: Required files and YAML can pass, but runtime evidence and fixture checks are absent.
    evidence_refs:
      - OFFICIAL_EXAMPLES_FIXTURE_LIMIT
      - PYPROJECT_PACKAGE_ENV
    decided_by: Codex
    date: "2026-04-28"
    revisitable: true
```
