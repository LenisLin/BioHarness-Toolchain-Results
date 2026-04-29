# BANKSY Validation Runtime Plan v0.7

No BANKSY runtime, smoke test, fixture execution, repeated-run check, or runtime-cost measurement was performed by this artifact.

```yaml
validation_runtime_plan:
  callability_check:
    installable:
      status: not_run
      planned_check: isolated install or import probe after explicit enablement
      evidence_refs:
        - PYPROJECT_PACKAGE_ENV
        - README_QUICKSTART
    runnable_example:
      status: not_run
      planned_check: minimal BioHarness fixture smoke run after fixture exists and execution is explicitly enabled
      evidence_refs:
        - OFFICIAL_EXAMPLES_FIXTURE_LIMIT
    observable_io:
      status: not_run
      planned_check: verify domain labels, summary table, artifacts, and provenance are emitted
      evidence_refs:
        - RUN_MULTIPARAM_OUTPUT
        - PLOT_OUTPUT_ARTIFACTS
  preflight_checks:
    - spatial expression object is present
    - expression matrix is present
    - semantic spatial coordinate source is present
    - semantic parameters are bounded
    - memory risk is screened before dense representation
    - requested optional clustering path is available or excluded
  postrun_checks:
    - domain labels exist and align one-to-one with observations
    - output namespace is present
    - summary table exists
    - declared artifacts exist and are non-empty where applicable
    - provenance record exists
    - no unexpected writes outside adapter output directory
  contract_tests:
    - input contract validation fails clearly for missing coordinates
    - output contract validation fails clearly for missing labels
    - artifact manifest records all outputs
    - typed failures map to agent-visible repair actions
  visual_checks:
    purpose: sanity_only
    known_limitations:
      - visual plausibility is not biological correctness
      - visual similarity does not prove algorithmic equivalence
    checks:
      - diagnostic figure exists and is non-empty if requested
      - plotted labels are not all missing if figure generation succeeds
  reproducibility_checks:
    random_seed_control: record clustering and embedding seed behavior where available
    deterministic_mode_available: unknown
    repeated_run_policy: future two-run fixture comparison before MVP
    expected_variability: stochastic embedding or clustering may vary
    label_permutation_awareness: label IDs may permute across valid runs
    stochastic_components:
      - clustering backend
      - embedding utilities
  runtime_cost_record:
    measurement_status: not_run
    wall_time: unknown
    peak_memory: unknown
    device_used: unknown
    fixture_size: unknown
  rewrite_comparison:
    output_schema_equivalence: required before wrapper acceptance
    domain_count_equivalence: report exact or approximate depending on policy
    no_empty_domain_equivalence: required when applicable
    label_permutation_handling: required
    clustering_similarity_metrics:
      - ARI
      - NMI
      - adjusted_mutual_information
    spatial_pattern_similarity: optional sanity check only
    figure_sanity: required for generated figures, not correctness proof
    runtime_delta: not_observed
    memory_delta: not_observed
    known_non_equivalence:
      - exact label IDs may permute
      - stochastic components can vary until determinism is proven
```

## Blocking Validation Gaps

- Minimal fixture is not available.
- Smoke run has not been executed.
- Output schema is not frozen.
- Runtime cost is not measured.
- Repeated-run reproducibility is not measured.
