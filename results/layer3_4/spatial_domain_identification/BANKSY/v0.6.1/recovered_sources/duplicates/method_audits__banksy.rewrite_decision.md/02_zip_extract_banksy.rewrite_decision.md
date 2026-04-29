# BANKSY Rewrite Decision

This rewrite decision is a design artifact, not an implementation approval.

BioHarness aggressively standardizes interfaces, contracts, validation, artifacts, and provenance, but conservatively rewrites scientific algorithms.

```yaml
rewrite_decision:
  method_id: BANKSY
  decision_status: proposed

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
    algorithmic_rewrite_risk: high_if_attempted_without_fidelity_evidence
    scientific_equivalence_risk: high_if_neighborhood_construction_or_clustering_logic_is_changed

  final_rewrite_level: strong_wrapper
  rationale:
    - Official backend evidence covers the core BANKSY behavior sufficiently for wrapper planning.
    - BioHarness needs stable semantic inputs, parameter mapping, output namespaces, artifacts, provenance, and typed failures.
    - No evidence supports or requires an algorithmic rewrite in this planning cycle.
  fidelity_required: only_if_algorithm_core_is_touched_or_compatibility_rewrite_is_proposed
  approval_required_before_implementation: true
  evidence_refs:
    - E_REPO_INTERFACE_CONTRACT
    - E_README
    - E_INIT
    - E_EMBED
    - E_RUN
    - E_CLUSTER
    - E_PLOT
  blocking_issues:
    - Exact semantic-to-backend numeric mappings require fixture validation.
    - Optional mclust/R path requires environment proof before inclusion.
    - No BioHarness smoke fixture or runtime evidence exists.
```

