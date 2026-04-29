# BANKSY Rewrite Decision v0.7

```yaml
rewrite_decision:
  method_id: BANKSY
  decision_status: candidate_requires_followup_before_mvp
  interface_standardization:
    wrap_io_only: true
    normalize_parameters: true
    redesign_entrypoint: true
    rewrite_glue_code: true
    standardize_logging: true
    standardize_artifacts: true
    standardize_failure_translation: true
  algorithmic_rewrite:
    compatibility_reimplement_function: false
    algorithm_core_touched: false
    do_not_rewrite_algorithm: true
    algorithmic_rewrite_risk: high_without_fidelity_evidence
    scientific_equivalence_risk: high_if_algorithm_core_is_changed
  final_rewrite_level: strong_wrapper
  rationale:
    - Official Python source evidence is sufficient for a wrapper draft.
    - BioHarness needs stable I/O, semantic parameters, controlled artifacts, provenance, typed failure translation, and validation hooks.
    - No evidence supports algorithmic reimplementation in this v0.7 planning pass.
  fidelity_required: true
  approval_required_before_implementation: true
  evidence_refs:
    - README_QUICKSTART
    - RUN_MULTIPARAM_OUTPUT
    - INIT_COORDINATES_WEIGHTS
    - EMBED_MATRIX_DENSE_RISK
    - CLUSTER_SEED_OPTIONAL_MCLUST
    - PLOT_OUTPUT_ARTIFACTS
    - REPO_LAYER3_LAYER4_PROTOCOL
  blocking_issues:
    - No install/import probe.
    - No minimal BioHarness fixture.
    - No runtime measurement.
    - Numeric parameter mapping is not validated.
```

BioHarness should standardize the interface around BANKSY, not rewrite the scientific algorithm in the current plan. A future compatibility or algorithmic rewrite would require a separate approval and fidelity package.
