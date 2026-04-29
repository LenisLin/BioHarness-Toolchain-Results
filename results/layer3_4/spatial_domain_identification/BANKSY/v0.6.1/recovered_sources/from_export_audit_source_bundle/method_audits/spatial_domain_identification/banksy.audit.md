# BANKSY Method Engineering Audit

This is an engineering-stage audit artifact. It consolidates BANKSY Layer3/4 planning evidence for review. It is not a production implementation, runtime API, adapter, environment capsule, validator, benchmark, or biological correctness claim.

Primary upstream planning record: [BANKSY MethodExecutionPlanningRecord v0.6](../../docs/method_execution_planning_records/spatial_domain_identification/2026-04-28_banksy_method_execution_planning_record_v0.6.md)

Primary retrieval packet: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/`

## Audit Status

```yaml
method_id: BANKSY
task_family: spatial_domain_identification
audit_status: planning_record_complete
authority_status: blueprint
last_updated: 2026-04-28
production_adapter_implemented: false
source_layer2_artifacts:
  - path: /mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_pilot.md
    notes: Layer 2 pilot narrative and decision context.
  - path: /mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.md
    notes: BANKSY row and task-family field values.
  - path: /mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.json
    notes: Structured BANKSY Layer 2 field values.
  - path: /mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_layer2_field_registry.json
    notes: Layer 2 field definitions and interpretation boundary.
  - path: /mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-18_domain_identification_layer2_supplement_review.md
    notes: Supplemental Layer 2 review and decision-tree branch context.
blocking_issues:
  - No BioHarness-owned minimal BANKSY smoke fixture has been run.
  - No BioHarness BANKSY environment capsule or lockfile has been created.
  - Exact semantic-to-backend numeric parameter mappings remain unvalidated.
  - GPL-3.0 redistribution and bundling implications require follow-up before production packaging.
```

## Layer 2 To Layer 3 Handoff

```yaml
layer2_to_layer3_handoff:
  full_handoff:
    layer2_branch: morphology_free_multiscale_neighborhood_structural_route
    method_role: neighborhood-kernel clustering method for spatial domain identification
    selection_context: scalable local-neighborhood transcriptome clustering without image-guided or heavy deep-learning requirements
    caveats:
      - Do not treat BANKSY as a universal default.
      - Do not use when explicit joint multi-slice modeling is the first-order requirement.
      - Do not use when image-guided domain calling is the first-order requirement.
    evidence_summary:
      - Layer 2 records BANKSY as ST matrix plus spatial coordinates to domain labels.
      - Official Python repository evidence supports AnnData-style input, coordinate keys, neighborhood-aware representation, and label/artifact outputs.
    hardware_resource_tag: CPU-first; no GPU requirement observed in current evidence.
    applicability_notes:
      - Morphology-free domain segmentation candidate.
      - Cross-slice support is treated as separate multi-sample use, not explicit joint modeling.
      - Batch handling remains implicit or limited.
  hard_constraints_for_layer3:
    required_modalities:
      - spatial transcriptomics expression matrix
      - spatial coordinates
    forbidden_modalities:
      - required histology image signal
      - required external biological reference or annotation prior
    required_input_object:
      object_type: AnnData
      accepted_variants:
        - AnnData with expression matrix and coordinate fields available through configured coordinate keys.
      disallowed_variants:
        - image-only input
        - reference-only input
        - non-spatial expression matrix without coordinates
    required_spatial_information:
      coordinate_keys: required semantic coordinate key pair
      coordinate_system: dataset-native 2D coordinate system; production normalization policy not frozen
      library_id_policy: optional provenance/grouping metadata only
      scale_factor_policy: not required by BANKSY evidence
    histology_requirement:
      status: not_required
      accepted_image_inputs: []
      fallback_policy: ignore for this method surface unless future visualization context requires it
    reference_requirement:
      status: not_required
      accepted_reference_types: []
    gpu_requirement:
      status: not_required
      cpu_fallback_policy: CPU is planned primary mode
    multi_slice_requirement:
      status: separate_multi_sample_use_only_blueprint
      slice_key_policy: record as provenance/grouping metadata
      batch_or_library_policy: no explicit batch-correction claim
    minimum_dataset_assumptions:
      min_observations: unknown
      min_features: unknown
      min_domains_or_clusters: requires_followup
      sparse_dense_policy: dense conversion risk must be assessed before production
      other_assumptions:
        - Upstream README recommends at least 16 GB RAM.
        - Official examples are not BioHarness smoke fixtures.
```

## Audit Evidence Registry

```yaml
audit_evidence_registry:
  repository_snapshot:
    url: https://github.com/prabhakarlab/Banksy_py
    commit_or_release: 43e2d692db6705c0195039764194473912e4cfc2
    local_path_if_present: not_observed
    last_checked: 2026-04-28
  evidence_items:
    - evidence_id: E_LAYER2_HANDOFF
      source_type: layer2_artifact
      path_or_url: /mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/
      lines_or_section: BANKSY row, field registry, supplement review branch context
      summary: Existing Layer 2 artifacts identify BANKSY as a morphology-free neighborhood-kernel domain-identification candidate with spatial expression plus coordinates as input and domain labels as output.
      confidence: medium
    - evidence_id: E_NAS_RETRIEVAL_PLAN
      source_type: inferred
      path_or_url: /mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_retrieval_plan.md
      lines_or_section: retrieval scope and claim boundaries
      summary: Retrieval scope is official repository evidence plus existing Layer 2 artifacts; new literature review and runtime execution are excluded.
      confidence: medium
    - evidence_id: E_NAS_INVENTORY
      source_type: package_docs
      path_or_url: /mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_source_evidence_inventory.json
      lines_or_section: evidence_items
      summary: Structured evidence ledger with source claims, limitations, confidence, and Layer3/Layer4 assignment details.
      confidence: medium
    - evidence_id: E_NAS_MATRIX
      source_type: inferred
      path_or_url: /mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_layer3_4_assignment_matrix.md
      lines_or_section: assignment table
      summary: Explicitly assigns retrieved facts to Layer3, Layer4, shared planning metadata, or exclusions.
      confidence: medium
    - evidence_id: E_NAS_COVERAGE
      source_type: inferred
      path_or_url: /mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_retrieval_coverage_check.md
      lines_or_section: coverage summary
      summary: Confirms coverage for v0.6 planning fields and records missing fixture, environment, and runtime evidence.
      confidence: medium
    - evidence_id: E_README
      source_type: readme
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/README.md
      lines_or_section: quick start, requirements, general steps, examples
      summary: Official README documents pybanksy installation, AnnData input, coordinate keys, RAM recommendation, default Leiden, optional mclust, and example workflows.
      confidence: high
    - evidence_id: E_PYPROJECT
      source_type: install_file
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/pyproject.toml
      lines_or_section: project metadata and dependencies
      summary: Declares package pybanksy 1.3.4, Python >=3.8,<3.13, numpy >=1.21,<2.0, scanpy/anndata stack, python-igraph/leidenalg, GPL-3.0, and optional rpy2 mclust extra.
      confidence: high
    - evidence_id: E_LICENSE
      source_type: package_docs
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/LICENSE.md
      lines_or_section: license text
      summary: GPL-3.0 licensing evidence for distribution-risk tracking.
      confidence: high
    - evidence_id: E_INIT
      source_type: source_code
      path_or_url: src/banksy/initialize_banksy.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2
      lines_or_section: initialization and spatial weight construction
      summary: Uses AnnData and coordinate tuple evidence; builds fixed-neighbor spatial weights.
      confidence: high
    - evidence_id: E_EMBED
      source_type: source_code
      path_or_url: src/banksy/embed_banksy.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2
      lines_or_section: BANKSY matrix generation
      summary: Supports lambda/max_m-like controls, dense conversion risk, and non-finite assertion risk.
      confidence: high
    - evidence_id: E_RUN
      source_type: source_code
      path_or_url: src/banksy/run_banksy.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2
      lines_or_section: multiparam workflow
      summary: Evidence for workflow orchestration, PCA/UMAP/clustering/plotting, and result table return.
      confidence: high
    - evidence_id: E_CLUSTER
      source_type: source_code
      path_or_url: src/banksy/cluster_methods.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2
      lines_or_section: clustering helpers
      summary: Evidence for Leiden partition seed and optional mclust path requiring rpy2/R.
      confidence: high
    - evidence_id: E_PLOT
      source_type: source_code
      path_or_url: src/banksy/plot_banksy.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2
      lines_or_section: plotting and label output
      summary: Evidence for label assignment to AnnData observations and optional H5AD/figure output.
      confidence: high
    - evidence_id: E_UMAP_PCA
      source_type: source_code
      path_or_url: src/banksy_utils/umap_pca.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2
      lines_or_section: PCA/UMAP helper
      summary: Evidence for dimensionality reduction helper and UMAP seed behavior.
      confidence: high
    - evidence_id: E_EXAMPLES
      source_type: example
      path_or_url: CODEX_B006_ascending.py and DLPFC_concatenate_multisample.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2
      lines_or_section: official example scripts
      summary: Example workflow evidence; external data dependencies mean they are not BioHarness smoke fixtures.
      confidence: medium
```

## Code Mind Map

```yaml
code_mind_map:
  - function_surface: input_check
    evidence_confidence: medium
    files:
      - path: README.md quick start
        role: documents AnnData input and coordinate-key setup
        key_functions_or_classes: not_applicable_documentation
        observed_inputs: [AnnData, coordinate keys]
        observed_outputs: [initialized workflow inputs]
        evidence_refs: [E_README]
        keep_wrap_redesign_rewrite_notes: Layer3 should expose only semantic input checks; Layer4 adapter validates concrete fields.
      - path: src/banksy/initialize_banksy.py
        role: backend initialization evidence for AnnData and coordinates
        key_functions_or_classes: initialize stage using coordinate tuple
        observed_inputs: [AnnData, coordinate tuple, neighbor-count setting, decay setting]
        observed_outputs: [spatial weights / banksy_dict-like state]
        evidence_refs: [E_INIT]
        keep_wrap_redesign_rewrite_notes: Keep backend call in Layer4; expose missing coordinate failure in Layer3.
  - function_surface: method_preprocessing
    evidence_confidence: low
    files:
      - path: README.md general steps
        role: documents Scanpy-style preprocessing expectation before BANKSY
        key_functions_or_classes: not_observed_as_bioharness_binding
        observed_inputs: [AnnData expression matrix]
        observed_outputs: [preprocessed expression matrix]
        evidence_refs: [E_README]
        keep_wrap_redesign_rewrite_notes: Requires follow-up; BioHarness may rely on upstream foundation adapters rather than BANKSY wrapper.
  - function_surface: core_structure_building
    evidence_confidence: high
    files:
      - path: src/banksy/initialize_banksy.py
        role: constructs spatial neighbor weights
        key_functions_or_classes: fixed-neighbor spatial weight construction
        observed_inputs: [coordinates, neighborhood policy]
        observed_outputs: [spatial weights]
        evidence_refs: [E_INIT]
        keep_wrap_redesign_rewrite_notes: Wrap without rewriting graph/neighborhood algorithm.
      - path: src/banksy/embed_banksy.py
        role: constructs BANKSY matrices and neighbor-augmented representation
        key_functions_or_classes: BANKSY matrix generation path
        observed_inputs: [AnnData expression, spatial weights, lambda/max_m-like controls]
        observed_outputs: [neighbor-augmented AnnData/matrix state]
        evidence_refs: [E_EMBED]
        keep_wrap_redesign_rewrite_notes: Memory preflight needed; do not expose raw backend numeric internals directly to agent.
  - function_surface: model_fit_or_inference
    evidence_confidence: high
    files:
      - path: src/banksy/run_banksy.py
        role: orchestrates PCA/UMAP/clustering workflow
        key_functions_or_classes: multiparam workflow path
        observed_inputs: [BANKSY representation, clustering policy, PCA/UMAP settings]
        observed_outputs: [result table candidate, embeddings/labels as backend state]
        evidence_refs: [E_RUN]
        keep_wrap_redesign_rewrite_notes: Strong wrapper should normalize entrypoint and provenance.
      - path: src/banksy/cluster_methods.py
        role: clustering implementation evidence
        key_functions_or_classes: Leiden partition path; optional mclust path
        observed_inputs: [embedding/matrix, clustering parameters, seed]
        observed_outputs: [labels]
        evidence_refs: [E_CLUSTER]
        keep_wrap_redesign_rewrite_notes: Default to Leiden until optional rpy2/R path has environment proof.
      - path: src/banksy_utils/umap_pca.py
        role: PCA/UMAP helper and seed evidence
        key_functions_or_classes: PCA/UMAP helper
        observed_inputs: [matrix/AnnData, dimensionality settings]
        observed_outputs: [reduced representation / embedding]
        evidence_refs: [E_UMAP_PCA]
        keep_wrap_redesign_rewrite_notes: Record stochastic components; do not claim determinism.
  - function_surface: output_assignment
    evidence_confidence: high
    files:
      - path: src/banksy/run_banksy.py
        role: returns result table candidate
        key_functions_or_classes: results_df return path
        observed_inputs: [workflow outputs]
        observed_outputs: [results_df-style table]
        evidence_refs: [E_RUN]
        keep_wrap_redesign_rewrite_notes: Normalize table schema in future adapter.
      - path: src/banksy/plot_banksy.py
        role: assigns labels to AnnData observations
        key_functions_or_classes: label assignment and plotting/export path
        observed_inputs: [labels, AnnData]
        observed_outputs: [AnnData observation labels]
        evidence_refs: [E_PLOT]
        keep_wrap_redesign_rewrite_notes: Copy to BioHarness-controlled namespace; do not expose raw backend naming to Layer3.
  - function_surface: artifact_export
    evidence_confidence: medium
    files:
      - path: src/banksy/plot_banksy.py
        role: optional H5AD and figure output evidence
        key_functions_or_classes: plotting/export path
        observed_inputs: [AnnData, labels, output settings]
        observed_outputs: [H5AD file, figures]
        evidence_refs: [E_PLOT]
        keep_wrap_redesign_rewrite_notes: Wrapper must constrain filesystem and naming before production.
  - function_surface: final_validation
    evidence_confidence: low
    files:
      - path: not_observed
        role: BioHarness-added validation stage
        key_functions_or_classes: requires_followup
        observed_inputs: [domain labels, result table, provenance]
        observed_outputs: [validation report]
        evidence_refs: [E_NAS_COVERAGE]
        keep_wrap_redesign_rewrite_notes: Harness stage required; not a native BANKSY binding observed.
  - function_surface: visualization
    evidence_confidence: medium
    files:
      - path: src/banksy/plot_banksy.py
        role: optional spatial label plotting
        key_functions_or_classes: plotting path
        observed_inputs: [coordinates, labels]
        observed_outputs: [diagnostic figures]
        evidence_refs: [E_PLOT]
        keep_wrap_redesign_rewrite_notes: Visual checks are sanity only, not biological correctness.
```

## Function Surface Map

```yaml
function_surface_map:
  execution_stage_vocab:
    input_check: required
    method_preprocessing: conditional
    core_structure_building: required
    model_fit_or_inference: required
    output_assignment: required
    artifact_export: required
    final_validation: required
    visualization: conditional
  surface_parameter_policy:
    expose_to_agent:
      - coordinate_key_pair
      - domain_resolution_policy
      - neighborhood_scale_policy
      - spatial_expression_weight_policy
      - cluster_method_policy
      - seed_policy
      - artifact_export_policy
    infer_from_input:
      - observation_count
      - feature_count
      - available_coordinate_keys
      - optional_slice_key
    fixed_by_adapter:
      - label_namespace
      - output_directory_layout
      - provenance_schema
      - filesystem_safety_policy
    backend_default:
      - low-level backend defaults that remain unvalidated
    forbidden_for_agent:
      - raw backend function names
      - backend file paths
      - package-private parameters
      - implementation call graph
  stages:
    - stage_id: input_check
      method_stage_label: validate spatial expression object and coordinates
      stage_requiredness: required
      stage_purpose: Ensure the input object has expression data and usable spatial coordinates before BANKSY execution planning.
      agent_visible_inputs: [spatial_expression_object, coordinate_key_pair]
      agent_visible_outputs: [input_contract_status]
      allowed_agent_parameters: [coordinate_key_pair]
      parameter_policy:
        expose_to_agent: [coordinate_key_pair]
        infer_from_input: [available_coordinate_keys]
        fixed_by_adapter: [object_type_check]
        backend_default: []
        forbidden_for_agent: [raw backend coordinate tuple internals]
      stage_preconditions: [AnnData-like object present, expression matrix present]
      stage_validation_hooks: [spatial_coordinates_present, one_coordinate_pair_selected]
      common_failure_modes: [missing_spatial_coordinates, nonfinite_or_invalid_matrix]
      layer4_mapping_required: true
      agent_action_on_failure: provide coordinate key mapping or run preprocessing/QC before retrying
      evidence_refs: [E_README, E_INIT, E_EMBED]
    - stage_id: method_preprocessing
      method_stage_label: verify preprocessing readiness
      stage_requiredness: conditional
      stage_purpose: Confirm upstream expression preprocessing is sufficient for BANKSY; exact BioHarness preprocessing policy is not frozen.
      agent_visible_inputs: [spatial_expression_object]
      agent_visible_outputs: [preprocessing_readiness_status]
      allowed_agent_parameters: []
      parameter_policy:
        expose_to_agent: []
        infer_from_input: [normalization_or_feature_layer_status]
        fixed_by_adapter: [preflight_warning_policy]
        backend_default: []
        forbidden_for_agent: [backend preprocessing helper internals]
      stage_preconditions: [input_check passed]
      stage_validation_hooks: [feature_layer_present_or_defaulted]
      common_failure_modes: [input_contract_violation]
      layer4_mapping_required: false
      agent_action_on_failure: run foundation preprocessing adapters or select another method
      evidence_refs: [E_README]
    - stage_id: core_structure_building
      method_stage_label: build neighborhood-aware representation
      stage_requiredness: required
      stage_purpose: Construct spatial-neighborhood representation using coordinates and expression data.
      agent_visible_inputs: [spatial_expression_object, coordinate_key_pair]
      agent_visible_outputs: [neighborhood_representation_status]
      allowed_agent_parameters: [neighborhood_scale_policy, spatial_expression_weight_policy]
      parameter_policy:
        expose_to_agent: [neighborhood_scale_policy, spatial_expression_weight_policy]
        infer_from_input: [observation_count]
        fixed_by_adapter: [safe_numeric_mapping_after_validation]
        backend_default: [unvalidated low-level defaults]
        forbidden_for_agent: [raw lambda/max_m/backend decay internals]
      stage_preconditions: [input_check passed]
      stage_validation_hooks: [memory_preflight_recorded, generated_matrix_finite]
      common_failure_modes: [insufficient_memory_for_dense_step, nonfinite_or_invalid_matrix]
      layer4_mapping_required: true
      agent_action_on_failure: request smaller fixture, more memory, preprocessing, or alternative method
      evidence_refs: [E_INIT, E_EMBED]
    - stage_id: model_fit_or_inference
      method_stage_label: compute embedding and cluster domains
      stage_requiredness: required
      stage_purpose: Run dimensionality reduction and clustering to assign spatial domains.
      agent_visible_inputs: [neighborhood_representation_status]
      agent_visible_outputs: [candidate_domain_labels, results_summary_table]
      allowed_agent_parameters: [domain_resolution_policy, cluster_method_policy, seed_policy]
      parameter_policy:
        expose_to_agent: [domain_resolution_policy, cluster_method_policy, seed_policy]
        infer_from_input: [dataset_size]
        fixed_by_adapter: [default_leiden_path_until_environment_proven]
        backend_default: [unvalidated PCA/UMAP backend defaults]
        forbidden_for_agent: [optional mclust path unless environment proven, raw partition internals]
      stage_preconditions: [core_structure_building passed]
      stage_validation_hooks: [seed_recorded, clustering_result_nonempty]
      common_failure_modes: [optional_clustering_backend_unavailable, runtime_tool_error]
      layer4_mapping_required: true
      agent_action_on_failure: fall back to default clustering policy or hold for environment setup
      evidence_refs: [E_RUN, E_CLUSTER, E_UMAP_PCA]
    - stage_id: output_assignment
      method_stage_label: assign domain labels to standard object fields
      stage_requiredness: required
      stage_purpose: Attach labels and summary results to BioHarness-controlled outputs.
      agent_visible_inputs: [candidate_domain_labels]
      agent_visible_outputs: [domain_labels, results_summary_table]
      allowed_agent_parameters: []
      parameter_policy:
        expose_to_agent: []
        infer_from_input: [observation_ids]
        fixed_by_adapter: [label_namespace]
        backend_default: []
        forbidden_for_agent: [backend output field names]
      stage_preconditions: [model_fit_or_inference passed]
      stage_validation_hooks: [one_label_per_observation, nonempty_label_vector]
      common_failure_modes: [output_contract_violation]
      layer4_mapping_required: true
      agent_action_on_failure: stop and request adapter/debug review
      evidence_refs: [E_RUN, E_PLOT]
    - stage_id: artifact_export
      method_stage_label: emit standardized artifacts
      stage_requiredness: required
      stage_purpose: Export label table, updated object reference, summary, provenance, and optional figures under BioHarness naming.
      agent_visible_inputs: [domain_labels, results_summary_table]
      agent_visible_outputs: [labeled_anndata, domain_label_table, method_provenance, diagnostic_plots]
      allowed_agent_parameters: [artifact_export_policy]
      parameter_policy:
        expose_to_agent: [artifact_export_policy]
        infer_from_input: [available_outputs]
        fixed_by_adapter: [artifact_layout, output_directory]
        backend_default: []
        forbidden_for_agent: [raw backend output paths]
      stage_preconditions: [output_assignment passed]
      stage_validation_hooks: [artifact_presence_check, path_safety_check]
      common_failure_modes: [filesystem_policy_violation, output_contract_violation]
      layer4_mapping_required: true
      agent_action_on_failure: stop and request artifact/export repair
      evidence_refs: [E_RUN, E_PLOT]
    - stage_id: final_validation
      method_stage_label: validate BANKSY domain outputs
      stage_requiredness: required
      stage_purpose: Check output contract, provenance, reproducibility metadata, and visual sanity limits.
      agent_visible_inputs: [domain_labels, method_provenance, optional_figures]
      agent_visible_outputs: [validation_status]
      allowed_agent_parameters: []
      parameter_policy:
        expose_to_agent: []
        infer_from_input: [label_count, observation_count, artifact_manifest]
        fixed_by_adapter: [validation_report_schema]
        backend_default: []
        forbidden_for_agent: [manual override of failed validation without review]
      stage_preconditions: [artifact_export passed]
      stage_validation_hooks: [domain_label_count_equals_observation_count, no_empty_required_outputs, label_permutation_awareness_recorded]
      common_failure_modes: [output_contract_violation, validation_incomplete]
      layer4_mapping_required: false
      agent_action_on_failure: stop for manual review or rerun with repaired inputs
      evidence_refs: [E_NAS_COVERAGE]
    - stage_id: visualization
      method_stage_label: generate optional spatial label diagnostics
      stage_requiredness: conditional
      stage_purpose: Produce optional spatial label plots for sanity checks only.
      agent_visible_inputs: [domain_labels, spatial_coordinates]
      agent_visible_outputs: [diagnostic_plots]
      allowed_agent_parameters: [artifact_export_policy]
      parameter_policy:
        expose_to_agent: [artifact_export_policy]
        infer_from_input: [coordinate_key_pair]
        fixed_by_adapter: [plot_output_location]
        backend_default: []
        forbidden_for_agent: [visual correctness claims]
      stage_preconditions: [domain_labels present]
      stage_validation_hooks: [plot_exists_if_requested, labels_not_all_missing]
      common_failure_modes: [visualization_failed]
      layer4_mapping_required: true
      agent_action_on_failure: continue if plots are optional; otherwise request artifact repair
      evidence_refs: [E_PLOT]
```

