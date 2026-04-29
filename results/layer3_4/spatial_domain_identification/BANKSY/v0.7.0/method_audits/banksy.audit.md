# BANKSY Method Engineering Audit v0.7

## Audit Status

```yaml
method_id: BANKSY
task_family: spatial_domain_identification
audit_version: v0.7
planning_status: blueprint
authority_status: blueprint
storage_policy:
  method_specific_intermediate_location: NAS_required
  project_docs_allowed: false_for_method_specific_intermediates
  production_claim_allowed: false_unless_runtime_implementation_exists
source_policy:
  final_source_basis: lowercase NAS retrieval artifacts plus official repository URLs
  excluded_as_final_source:
    - BANKSY v0.6.1 active review files
    - BANKSY v0.6.1 active surface files
    - BANKSY v0.6.1 active adapter files
runtime_execution:
  banksy_run: not_run
  environment_probe: not_run
  adapter_implementation: not_implemented
```

## Layer 2 To Layer 3 Handoff

```yaml
layer2_to_layer3_handoff:
  full_handoff:
    layer2_branch: spatial_domain_identification
    method_role: neighborhood-kernel clustering candidate for spatial domain identification
    selection_context: selected for Layer3/4 co-design rerun from v0.7 template
    caveats:
      - compact handoff only; full Layer2 reasoning is not copied into Layer3
      - no benchmark reranking or paper-level re-review was performed
      - no biological correctness claim is made
    evidence_summary:
      - spatial expression plus coordinates are required
      - domain labels are the core output
      - image signal is not required by default
      - external reference is not required by default
      - CPU-oriented planning profile is supported by current handoff
    hardware_resource_tag: cpu_first_dependency_constrained
    applicability_notes:
      - suitable for blueprint planning of a morphology-free spatial domain surface
      - exact domain count and multi-sample contract require follow-up
    evidence_refs:
      - L2_BANKSY_COMPACT_HANDOFF
```

## Hard Constraints For Layer3

```yaml
hard_constraints_for_layer3:
  required_modalities:
    - spatial_expression
    - spatial_coordinates
  forbidden_modalities:
    - histology_image_required_by_default
    - external_reference_required_by_default
  required_input_object:
    status: AnnData-compatible spatial expression object required for current planning
    evidence_refs:
      - README_QUICKSTART
      - L2_BANKSY_COMPACT_HANDOFF
  required_spatial_information:
    spatial_coordinate_source:
      allowed_modes:
        - obsm_spatial
        - obs_x_y_columns
        - adapter_validated_custom_mapping
    backend_coordinate_representation: layer4_only
    evidence_refs:
      - README_QUICKSTART
      - INIT_COORDINATES_WEIGHTS
  histology_requirement:
    status: not_required
    evidence_refs:
      - L2_BANKSY_COMPACT_HANDOFF
  reference_requirement:
    status: not_required
    evidence_refs:
      - L2_BANKSY_COMPACT_HANDOFF
  gpu_requirement:
    status: not_required_by_current_evidence
    evidence_refs:
      - L2_BANKSY_COMPACT_HANDOFF
      - PYPROJECT_PACKAGE_ENV
  multi_sample_policy:
    status: examples_observed_but_bioharness_contract_not_validated
    supported_claim: no_joint_multisample_contract_claim
    agent_visible_summary: multi-sample usage requires additional review before default surface exposure
    evidence_refs:
      - OFFICIAL_EXAMPLES_FIXTURE_LIMIT
      - L2_BANKSY_COMPACT_HANDOFF
  minimum_dataset_assumptions:
    status: unknown_requires_fixture_validation
```

## Audit Evidence Registry

See [../evidence/evidence_index.md](../evidence/evidence_index.md) for the full evidence index.

```yaml
audit_evidence_registry:
  repository_snapshot:
    url: https://github.com/prabhakarlab/Banksy_py
    commit_or_release: 43e2d692db6705c0195039764194473912e4cfc2
    local_path_if_present: unknown
    last_checked: "2026-04-28"
  evidence_items:
    - evidence_id: L2_BANKSY_COMPACT_HANDOFF
      source_type: layer2_artifact
      path_or_url: /mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/
      symbol_or_section: BANKSY compact handoff
      line_range: unknown
      summary: Method role, spatial expression plus coordinates, domain-label output, no default image/reference requirement, and CPU-oriented planning profile.
      confidence: medium
    - evidence_id: OFFICIAL_HEAD_PIN
      source_type: package_docs
      path_or_url: https://github.com/prabhakarlab/Banksy_py
      symbol_or_section: repository HEAD
      line_range: unknown
      summary: Official source evidence pinned to commit 43e2d692db6705c0195039764194473912e4cfc2.
      confidence: high
    - evidence_id: README_QUICKSTART
      source_type: readme
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/README.md
      symbol_or_section: quick start / usage
      line_range: unknown
      summary: Package install, AnnData-style input, spatial coordinate requirement, default clustering path in public docs, and RAM caution.
      confidence: high
    - evidence_id: PYPROJECT_PACKAGE_ENV
      source_type: install_file
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/pyproject.toml
      symbol_or_section: package metadata
      line_range: unknown
      summary: Package/version, Python and numpy constraints, core dependencies, and optional R/rpy2 path.
      confidence: high
    - evidence_id: LICENSE_GPL3
      source_type: package_docs
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/LICENSE.md
      symbol_or_section: license
      line_range: unknown
      summary: GPL-3.0 licensing risk.
      confidence: high
    - evidence_id: INIT_COORDINATES_WEIGHTS
      source_type: source_code
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/initialize_banksy.py
      symbol_or_section: coordinate and spatial-weight source
      line_range: unknown
      summary: Backend coordinate representation, neighborhood controls, spatial weights / graph construction.
      confidence: high
    - evidence_id: EMBED_MATRIX_DENSE_RISK
      source_type: source_code
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/embed_banksy.py
      symbol_or_section: representation source
      line_range: unknown
      summary: Neighbor-augmented representation, numeric controls, dense-memory risk, non-finite matrix failure translation.
      confidence: high
    - evidence_id: RUN_MULTIPARAM_OUTPUT
      source_type: source_code
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/run_banksy.py
      symbol_or_section: workflow source
      line_range: unknown
      summary: Workflow draft, returned summary table candidate, plotting/export policy need.
      confidence: high
    - evidence_id: CLUSTER_SEED_OPTIONAL_MCLUST
      source_type: source_code
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/cluster_methods.py
      symbol_or_section: clustering source
      line_range: unknown
      summary: Seed policy and optional R-backed path not default until environment evidence exists.
      confidence: high
    - evidence_id: PLOT_OUTPUT_ARTIFACTS
      source_type: source_code
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/plot_banksy.py
      symbol_or_section: plotting/output source
      line_range: unknown
      summary: Domain-label output mapping, AnnData observation metadata planning, and controlled figure/object artifact policy.
      confidence: high
    - evidence_id: UMAP_PCA_SEED
      source_type: source_code
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy_utils/umap_pca.py
      symbol_or_section: embedding utility source
      line_range: unknown
      summary: UMAP/PCA seed behavior for reproducibility planning.
      confidence: high
    - evidence_id: OFFICIAL_EXAMPLES_FIXTURE_LIMIT
      source_type: example
      path_or_url: CODEX_B006_ascending.py and DLPFC_concatenate_multisample.py at pinned repository commit
      symbol_or_section: official examples
      line_range: unknown
      summary: Usage pattern evidence only; not BioHarness smoke-fixture success.
      confidence: medium
```

## Code Mind Map

This map is organized by BioHarness function surface. Backend source names are Layer4-only evidence and are not placed into the Layer3 surface.

| BioHarness function surface | Layer3 semantic meaning | Layer4-only source evidence | evidence_refs | confidence |
| --- | --- | --- | --- | --- |
| input_check | Validate spatial expression object and semantic coordinate source. | README usage and initialization source. | README_QUICKSTART, INIT_COORDINATES_WEIGHTS | high |
| method_preprocessing | Confirm method-local prerequisites without silently doing global ST preprocessing. | README workflow shape. | README_QUICKSTART | medium |
| core_structure_building | Build spatial neighborhood context and neighbor-augmented representation. | Initialization and embedding source files. | INIT_COORDINATES_WEIGHTS, EMBED_MATRIX_DENSE_RISK | high |
| model_fit_or_inference | Run clustering/granularity workflow and record seed behavior. | Workflow, clustering, and embedding utility source files. | RUN_MULTIPARAM_OUTPUT, CLUSTER_SEED_OPTIONAL_MCLUST, UMAP_PCA_SEED | high |
| output_assignment | Normalize domain labels and summary table into BioHarness outputs. | Workflow and plotting/output source files. | RUN_MULTIPARAM_OUTPUT, PLOT_OUTPUT_ARTIFACTS | high |
| artifact_export | Write only declared artifacts under adapter-owned output directory. | Plotting/output source file plus wrapper policy. | PLOT_OUTPUT_ARTIFACTS, REPO_LAYER3_LAYER4_PROTOCOL | medium |
| final_validation | Check label presence, table presence, provenance, and artifact manifest. | Planned wrapper validation; not run. | RUN_MULTIPARAM_OUTPUT, PLOT_OUTPUT_ARTIFACTS | medium |
| visualization | Optional spatial diagnostic figures for sanity only. | Plotting/output source file. | PLOT_OUTPUT_ARTIFACTS | high |

## Function Surface Map

```yaml
function_surface_map:
  stage_bindings:
    - execution_stage: input_check
      layer3_semantic_operation: validate spatial expression object and semantic coordinate source
      layer4_backend_binding_refs:
        - README_QUICKSTART
        - INIT_COORDINATES_WEIGHTS
      confidence: high
    - execution_stage: core_structure_building
      layer3_semantic_operation: build method-specific spatial neighborhood context
      layer4_backend_binding_refs:
        - INIT_COORDINATES_WEIGHTS
        - EMBED_MATRIX_DENSE_RISK
      confidence: high
    - execution_stage: model_fit_or_inference
      layer3_semantic_operation: infer or cluster spatial domains under a semantic granularity policy
      layer4_backend_binding_refs:
        - RUN_MULTIPARAM_OUTPUT
        - CLUSTER_SEED_OPTIONAL_MCLUST
        - UMAP_PCA_SEED
      confidence: high
    - execution_stage: output_assignment
      layer3_semantic_operation: assign domain labels and summary outputs to controlled BioHarness namespace
      layer4_backend_binding_refs:
        - RUN_MULTIPARAM_OUTPUT
        - PLOT_OUTPUT_ARTIFACTS
      confidence: high
  unmapped_or_not_frozen:
    - exact result table schema
    - exact numeric parameter defaults
    - runtime log schema
    - minimal fixture behavior
```

## Layer3/Layer4 Coordinate Boundary

Layer3 exposes only:

```yaml
spatial_coordinate_source:
  allowed_modes:
    - obsm_spatial
    - obs_x_y_columns
    - adapter_validated_custom_mapping
```

Layer4 maps that semantic source into the backend-compatible coordinate representation. Raw backend coordinate representation details remain Layer4-only.

## Domain Resolution Boundary

```yaml
target_domain_count_policy:
  status: not_directly_guaranteed
  mapping: may require resolution search or post-hoc selection
  agent_action: ask user whether approximate granularity is acceptable
```

Numeric semantic-to-backend mapping is not validated and remains a blocker before MVP implementation.

## Multi-sample Boundary

```yaml
multi_sample_policy:
  status: examples_observed_but_bioharness_contract_not_validated
  supported_claim: no_joint_multisample_contract_claim
  agent_visible_summary: multi-sample usage requires additional review before default surface exposure
```

Official examples support usage-pattern awareness but do not freeze a BioHarness joint/multisample contract.

## Open Questions

- What minimal AnnData-compatible fixture should be used for smoke testing?
- Which environment capsule should own `pybanksy` and its dependency constraints?
- What exact output schema should BioHarness freeze for domain labels and summary tables?
- How should semantic granularity policies map to backend settings after fixture validation?
- Should optional R/rpy2 clustering remain excluded from MVP or become a separately probed optional path?
- What packaging/distribution policy is acceptable for GPL-3.0 dependencies?
