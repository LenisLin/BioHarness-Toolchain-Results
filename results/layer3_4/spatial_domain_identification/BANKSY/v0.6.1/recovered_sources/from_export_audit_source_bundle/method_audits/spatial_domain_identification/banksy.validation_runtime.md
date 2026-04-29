# BANKSY Validation And Runtime Plan

This plan describes future validation gates. No BANKSY runtime, smoke test, fixture execution, or runtime-cost measurement has been performed by this artifact.

```yaml
validation_runtime_plan:
  method_id: BANKSY
  example_or_fixture_source: official examples observed, but no BioHarness-owned smoke fixture exists
  callability_check:
    installable:
      status: planned_not_executed
      evidence_refs: [E_PYPROJECT, E_README]
    runnable_example:
      status: planned_not_executed
      evidence_refs: [E_EXAMPLES]
    observable_io:
      status: planned_not_executed
      evidence_refs: [E_RUN, E_PLOT]

  preflight_checks:
    - AnnData-like object present.
    - Expression matrix present.
    - Coordinate key pair present and valid.
    - Optional slice key recorded as provenance only.
    - Memory preflight records sparse-to-dense risk.
    - Requested clustering policy is available in the environment.
  postrun_checks:
    - Domain labels exist.
    - Domain label count equals observation count.
    - Label namespace is BioHarness-controlled.
    - Results summary table exists.
    - Provenance records method, surface, adapter draft, package/version/commit if available, parameters, and seeds.
    - Optional figures exist only when requested.
  contract_tests:
    - input_contract.spatial_expression_object
    - input_contract.spatial_coordinates
    - output_contract.domain_labels
    - output_contract.results_summary_table
    - provenance_contract.required_metadata
    - filesystem_policy.output_dir_only

  visual_checks:
    purpose: sanity_only
    ai_visual_review_items:
      - plot file is non-empty if requested
      - labels are not all missing
      - coordinate orientation looks plausible enough for manual review routing
    human_review_items:
      - inspect whether the plot is suitable for downstream interpretation
      - decide whether biological interpretation should proceed
    known_limitations:
      - visual plausibility is not biological correctness
      - visual similarity does not prove algorithmic equivalence

  reproducibility_checks:
    random_seed_control: record clustering seed and UMAP seed behavior where exposed or fixed by backend
    deterministic_mode_available: unknown
    repeated_run_policy: future two-run fixture comparison before production
    expected_variability: stochastic clustering and embedding may vary
    label_permutation_awareness: required for any label comparison
    stochastic_components:
      - Leiden partitioning
      - UMAP

  runtime_cost_record:
    wall_time: not_observed
    peak_memory: not_observed
    device_used: not_observed
    fixture_size: not_observed
    measurement_status: unavailable_no_runtime_executed

  rewrite_comparison:
    output_schema_equivalence: required if wrapper behavior changes outputs; required for any rewrite
    domain_count_equivalence: required when comparing to official backend on a fixture
    no_empty_domain_equivalence: required when cluster policy supports it
    label_permutation_handling: required
    clustering_similarity_metrics:
      - ARI
      - NMI
      - adjusted_mutual_information
    spatial_pattern_similarity: sanity_only
    figure_sanity: required for generated figures, not correctness proof
    runtime_delta: not_observed
    memory_delta: not_observed
    known_non_equivalence:
      - Exact label IDs may permute across runs.
      - Stochastic embedding or clustering can vary unless determinism is proven.
```

