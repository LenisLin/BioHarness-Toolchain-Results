# BANKSY MethodExecutionPlanningRecord v0.6

```yaml
method_execution_planning_record:
  record_id: "2026-04-28_banksy_spatial_domain_identification_v0.6"
  record_version: "0.6"
  method_id: "banksy"
  task_family: "spatial_domain_identification"
  planning_status: "blueprint"
  authority_status: "blueprint_only_no_production_adapter"

  source_layer2_artifacts:
    - artifact_id: "domain_identification_layer2_pilot"
      path_or_uri: "/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_pilot.md"
      role: "Layer 2 pilot narrative and decision context"
      last_checked: "2026-04-28"
      evidence_refs: ["E_LAYER2_HANDOFF"]
      confidence: "medium"
    - artifact_id: "domain_identification_layer2_subtable_md"
      path_or_uri: "/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.md"
      role: "BANKSY row and task-family field values"
      last_checked: "2026-04-28"
      evidence_refs: ["E_LAYER2_HANDOFF"]
      confidence: "medium"
    - artifact_id: "domain_identification_layer2_subtable_json"
      path_or_uri: "/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.json"
      role: "structured BANKSY Layer 2 field values"
      last_checked: "2026-04-28"
      evidence_refs: ["E_LAYER2_HANDOFF"]
      confidence: "medium"
    - artifact_id: "domain_identification_layer2_field_registry"
      path_or_uri: "/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_layer2_field_registry.json"
      role: "Layer 2 field definitions and interpretation boundary"
      last_checked: "2026-04-28"
      evidence_refs: ["E_LAYER2_HANDOFF"]
      confidence: "medium"
    - artifact_id: "domain_identification_layer2_supplement_review"
      path_or_uri: "/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-18_domain_identification_layer2_supplement_review.md"
      role: "supplemental Layer 2 review and decision-tree branch context"
      last_checked: "2026-04-28"
      evidence_refs: ["E_LAYER2_HANDOFF"]
      confidence: "medium"

  canonical_surface_reference:
    canonical_surface_id: "spatial_domain_identification.canonical.v1"
    method_surface_id: "spatial_domain_identification.banksy.v1"
    inherits_from: "spatial_domain_identification.canonical.v1"
    inheritance_scope:
      execution_stages: true
      standard_outputs: true
      common_failure_modes: true
      common_validation_hooks: true
    method_specific_extensions:
      allowed:
        - "method_constraints"
        - "semantic_parameters"
        - "method_local_artifacts"
        - "method_specific_validation"
      forbidden_in_layer3:
        - "backend_file_paths"
        - "raw_backend_function_names"
        - "package_private_parameters"
        - "implementation_call_graph"
    evidence_refs: ["E_REPO_INTERFACE_CONTRACT", "E_TEMPLATE"]
    confidence: "medium"

  layer2_to_layer3_handoff:
    promoted_method_name: "BANKSY"
    layer2_role:
      - "neighborhood-kernel clustering method for spatial domain identification"
      - "ST expression matrix plus spatial coordinates to domain labels"
    selection_reason_summary: "Best first choice when scalable local-neighborhood transcriptome clustering is desired without image-guided or heavy deep-learning models."
    not_first_choice_when:
      - "explicit joint multi-slice modeling is a first-order requirement"
      - "image-guided domain calling is a first-order requirement"
    claim_boundary: "This record carries only execution-planning and evidence-boundary claims; it does not re-review BANKSY paper-level scientific validity."
    evidence_boundary: "Claims are limited to the known Layer 2 handoff and official repository evidence pinned to prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2."
    unresolved_layer2_questions:
      - question: "What benchmark thresholds should qualify BANKSY output for BioHarness default recommendations?"
        impact_on_layer3: "Does not block a blueprint surface, but blocks production-ranking claims."
      - question: "How should multi-sample use be standardized across datasets with different batch/library semantics?"
        impact_on_layer3: "Requires conservative slice policy and no joint multi-slice promise."
    evidence_refs: ["E_LAYER2_HANDOFF", "E_README"]
    confidence: "medium"

  hard_constraints_for_layer3:
    required_modalities:
      - modality: "spatial transcriptomics expression matrix"
        reason: "BANKSY operates on gene expression stored in an AnnData-like object."
        evidence_refs: ["E_README", "E_INIT"]
        confidence: "high"
      - modality: "spatial coordinates"
        reason: "Initialization uses a coordinate tuple and builds spatial neighborhood weights."
        evidence_refs: ["E_README", "E_INIT"]
        confidence: "high"
    forbidden_modalities:
      - modality: "histology image signal as required input"
        reason: "Known official evidence does not require image input for domain segmentation examples."
        evidence_refs: ["E_LAYER2_HANDOFF", "E_README"]
        confidence: "medium"
      - modality: "external biological reference or annotation prior as required input"
        reason: "Layer 2 handoff records no external biological guidance/reference requirement."
        evidence_refs: ["E_LAYER2_HANDOFF"]
        confidence: "medium"
    required_input_object:
      object_type: "AnnData"
      accepted_variants: ["AnnData with expression matrix and coordinate columns available through configured coordinate keys"]
      disallowed_variants: ["image-only input", "reference-only input", "non-spatial expression matrix without coordinates"]
      evidence_refs: ["E_README", "E_INIT"]
      confidence: "high"
    required_spatial_information:
      coordinate_keys: ["agent-supplied semantic coordinate key pair, mapped by adapter to backend coordinate tuple"]
      coordinate_system: "dataset-native 2D spatial coordinate system; no production normalization policy is frozen"
      library_id_policy: "blueprint: optional metadata for provenance; no joint multi-library modeling claim"
      scale_factor_policy: "not required by BANKSY blueprint surface unless future canonical surface requires it"
      evidence_refs: ["E_README", "E_INIT", "E_LAYER2_HANDOFF"]
      confidence: "medium"
    histology_requirement:
      status: "not_required"
      accepted_image_inputs: []
      fallback_policy: "ignore image inputs for this method surface unless future validation adds separate visualization context"
      evidence_refs: ["E_LAYER2_HANDOFF"]
      confidence: "medium"
    reference_requirement:
      status: "not_required"
      accepted_reference_types: []
      species_or_modality_constraints: []
      evidence_refs: ["E_LAYER2_HANDOFF"]
      confidence: "medium"
    gpu_requirement:
      status: "not_required"
      gpu_type_or_cuda_notes: "No GPU requirement is claimed from known official evidence."
      cpu_fallback_policy: "CPU is the planned execution target."
      evidence_refs: ["E_LAYER2_HANDOFF"]
      confidence: "medium"
    multi_slice_requirement:
      status: "separate_multi_sample_use_only_blueprint"
      slice_key_policy: "treat slice/library key as provenance and grouping metadata; do not expose joint multi-slice modeling as a Layer 3 guarantee"
      batch_or_library_policy: "batch handling is implicit or limited in known handoff; adapter must avoid claiming explicit batch correction"
      evidence_refs: ["E_LAYER2_HANDOFF", "E_EXAMPLES"]
      confidence: "medium"
    minimum_dataset_assumptions:
      min_observations: "not_frozen"
      min_features: "not_frozen"
      min_domains_or_clusters: "agent or adapter must supply a domain-count/clustering policy when the backend path requires one"
      sparse_dense_policy: "planner must account for dense conversion and non-finite assertion risk before production"
      other_assumptions:
        - "RAM recommendation from official README is at least 16GB."
        - "External example datasets are not BioHarness smoke fixtures yet."
      evidence_refs: ["E_README", "E_EMBED", "E_EXAMPLES"]
      confidence: "medium"

  audit_evidence_registry:
    evidence_refs: ["E_NAS_RETRIEVAL_PLAN", "E_NAS_INVENTORY", "E_NAS_MATRIX", "E_NAS_COVERAGE", "E_NAS_SCHEMA_NOTE"]
    confidence: "medium"
    sources:
      - ref_id: "E_LAYER2_HANDOFF"
        source_type: "existing_layer2_artifacts"
        path_or_uri: "/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/"
        version_or_commit: "2026-04-16_to_2026-04-18_layer2_files"
        inspected_items: ["BANKSY Layer2 row", "field registry", "supplement review branch context"]
        supports_claims: ["compact method handoff", "hard constraints", "claim boundary"]
        limitations: ["does not replace Layer3/Layer4 source inspection", "full Layer2 reasoning is intentionally not copied into this record"]
        evidence_refs: []
        confidence: "medium"
      - ref_id: "E_REPO_INTERFACE_CONTRACT"
        source_type: "local_repo_docs"
        path_or_uri: "docs/40_interface_contract.md; docs/80_layer3_layer4_design.md; docs/82_layer3_4_codesign.md; docs/83_layer3_4_method_execution_planning_protocol.md"
        version_or_commit: "repo_local_2026-04-28"
        inspected_items: ["Layer3/Layer4 visibility boundary", "execution surface vs backend adapter separation", "planning protocol"]
        supports_claims: ["Layer3 semantic visibility", "Layer4 backend binding visibility", "no production claim"]
        limitations: ["blueprint docs, not runtime implementation"]
        evidence_refs: []
        confidence: "high"
      - ref_id: "E_TEMPLATE"
        source_type: "local_repo_template"
        path_or_uri: "docs/templates/method_execution_planning_record_template.md"
        version_or_commit: "MethodExecutionPlanningRecord v0.6"
        inspected_items: ["required record fields", "Layer3 exclusions", "Layer4 draft fields", "environment/rewrite/validation/risk/decision fields"]
        supports_claims: ["record shape", "coverage requirements"]
        limitations: ["template only, not executable schema"]
        evidence_refs: []
        confidence: "high"
      - ref_id: "E_NAS_RETRIEVAL_PLAN"
        source_type: "nas_retrieval_output"
        path_or_uri: "/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_retrieval_plan.md"
        version_or_commit: "2026-04-28"
        inspected_items: ["source scope", "claim boundaries", "included/excluded sources"]
        supports_claims: ["retrieval procedure reference", "claim boundary"]
        limitations: ["does not include runtime execution evidence"]
        evidence_refs: []
        confidence: "medium"
      - ref_id: "E_NAS_INVENTORY"
        source_type: "nas_retrieval_output"
        path_or_uri: "/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_source_evidence_inventory.json"
        version_or_commit: "2026-04-28"
        inspected_items: ["official source evidence ledger", "Layer3/Layer4 assignment", "coverage summary", "unresolved gaps"]
        supports_claims: ["structured source evidence ledger"]
        limitations: ["blueprint evidence only"]
        evidence_refs: []
        confidence: "medium"
      - ref_id: "E_NAS_MATRIX"
        source_type: "nas_retrieval_output"
        path_or_uri: "/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_layer3_4_assignment_matrix.md"
        version_or_commit: "2026-04-28"
        inspected_items: ["retrieved fact assignment", "Layer3 exclusions", "Layer4 inclusions"]
        supports_claims: ["Layer 3/4 assignment evidence"]
        limitations: ["assignment matrix is planning guidance, not an executable contract"]
        evidence_refs: []
        confidence: "medium"
      - ref_id: "E_NAS_COVERAGE"
        source_type: "nas_retrieval_output"
        path_or_uri: "/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_retrieval_coverage_check.md"
        version_or_commit: "2026-04-28"
        inspected_items: ["v0.6 checklist", "environment/rewrite/validation checks", "evidence gaps"]
        supports_claims: ["retrieval coverage check"]
        limitations: ["does not convert planned checks into executed validation"]
        evidence_refs: []
        confidence: "medium"
      - ref_id: "E_NAS_SCHEMA_NOTE"
        source_type: "nas_retrieval_output"
        path_or_uri: "/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_source_evidence_inventory.schema_note.md"
        version_or_commit: "2026-04-28"
        inspected_items: ["JSON field meanings"]
        supports_claims: ["inventory schema note"]
        limitations: ["descriptive note only"]
        evidence_refs: []
        confidence: "medium"
      - ref_id: "E_README"
        source_type: "official_repository_file"
        path_or_uri: "https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/README.md"
        version_or_commit: "43e2d692db6705c0195039764194473912e4cfc2"
        inspected_items: ["quick start", "pybanksy install/imports", "AnnData input", "coord_keys example", "domain segmentation examples", "RAM recommendation", "Leiden default", "mclust optional"]
        supports_claims: ["AnnData input", "coordinate keys", "domain segmentation role", "16GB RAM recommendation", "default clustering policy evidence"]
        limitations: ["README examples do not constitute BioHarness smoke fixtures"]
        evidence_refs: []
        confidence: "high"
      - ref_id: "E_PYPROJECT"
        source_type: "official_repository_file"
        path_or_uri: "https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/pyproject.toml"
        version_or_commit: "43e2d692db6705c0195039764194473912e4cfc2"
        inspected_items: ["package name", "version", "Python range", "dependencies", "optional mclust extra", "license metadata"]
        supports_claims: ["environment constraints", "package version", "dependency risks"]
        limitations: ["no lockfile or production capsule is claimed"]
        evidence_refs: []
        confidence: "high"
      - ref_id: "E_LICENSE"
        source_type: "official_repository_file"
        path_or_uri: "https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/LICENSE.md"
        version_or_commit: "43e2d692db6705c0195039764194473912e4cfc2"
        inspected_items: ["GPL-3.0 license"]
        supports_claims: ["licensing risk and adapter distribution caution"]
        limitations: []
        evidence_refs: []
        confidence: "high"
      - ref_id: "E_INIT"
        source_type: "official_repository_file"
        path_or_uri: "src/banksy/initialize_banksy.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2"
        version_or_commit: "43e2d692db6705c0195039764194473912e4cfc2"
        inspected_items: ["AnnData and coordinate tuple use", "fixed-neighbor spatial weights"]
        supports_claims: ["coordinate requirement", "neighborhood weight construction"]
        limitations: ["Layer 4 evidence only; raw backend names must not be exposed in Layer 3"]
        evidence_refs: []
        confidence: "high"
      - ref_id: "E_EMBED"
        source_type: "official_repository_file"
        path_or_uri: "src/banksy/embed_banksy.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2"
        version_or_commit: "43e2d692db6705c0195039764194473912e4cfc2"
        inspected_items: ["BANKSY matrix generation", "lambda", "max_m", "dense conversion", "non-finite assertion risk"]
        supports_claims: ["semantic parameter candidates", "memory and data-quality risks"]
        limitations: ["Layer 4 evidence only; package-private details excluded from Layer 3"]
        evidence_refs: []
        confidence: "high"
      - ref_id: "E_RUN"
        source_type: "official_repository_file"
        path_or_uri: "src/banksy/run_banksy.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2"
        version_or_commit: "43e2d692db6705c0195039764194473912e4cfc2"
        inspected_items: ["multiparam workflow", "PCA", "UMAP", "clustering", "plotting", "results_df return"]
        supports_claims: ["workflow draft", "output table candidate", "plotting side effects"]
        limitations: ["no production adapter claim"]
        evidence_refs: []
        confidence: "high"
      - ref_id: "E_CLUSTER"
        source_type: "official_repository_file"
        path_or_uri: "src/banksy/cluster_methods.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2"
        version_or_commit: "43e2d692db6705c0195039764194473912e4cfc2"
        inspected_items: ["Leiden partitioning", "partition_seed", "mclust rpy2/R requirement"]
        supports_claims: ["clustering policy", "reproducibility risk", "optional R dependency"]
        limitations: ["mclust optional path not planned for first wrapper"]
        evidence_refs: []
        confidence: "high"
      - ref_id: "E_PLOT"
        source_type: "official_repository_file"
        path_or_uri: "src/banksy/plot_banksy.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2"
        version_or_commit: "43e2d692db6705c0195039764194473912e4cfc2"
        inspected_items: ["writes labels into adata.obs", "optional h5ad and figure outputs"]
        supports_claims: ["output assignment", "artifact export candidates"]
        limitations: ["plot output is visual sanity only, not correctness"]
        evidence_refs: []
        confidence: "high"
      - ref_id: "E_UMAP_PCA"
        source_type: "official_repository_file"
        path_or_uri: "src/banksy_utils/umap_pca.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2"
        version_or_commit: "43e2d692db6705c0195039764194473912e4cfc2"
        inspected_items: ["PCA/UMAP helper", "UMAP transform_seed=42"]
        supports_claims: ["reproducibility notes"]
        limitations: ["does not eliminate all stochasticity"]
        evidence_refs: []
        confidence: "high"
      - ref_id: "E_EXAMPLES"
        source_type: "official_repository_examples"
        path_or_uri: "CODEX_B006_ascending.py and DLPFC_concatenate_multisample.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2"
        version_or_commit: "43e2d692db6705c0195039764194473912e4cfc2"
        inspected_items: ["official examples", "external data dependencies"]
        supports_claims: ["example coverage", "not-yet-smoke-fixture limitation"]
        limitations: ["external data dependencies mean examples are not BioHarness smoke fixtures"]
        evidence_refs: []
        confidence: "medium"
    unresolved_evidence_gaps:
      - gap: "No BioHarness-owned minimal BANKSY smoke fixture is recorded."
        planned_resolution: "Create a small AnnData fixture only after environment probing and validation plan approval."
        impact_if_unresolved: "Blocks production adapter and runtime-cost claims."
        evidence_refs: ["E_EXAMPLES"]
        confidence: "high"
      - gap: "No production environment capsule or lockfile is recorded for BioHarness."
        planned_resolution: "Run a future isolated package/environment probe using pyproject evidence."
        impact_if_unresolved: "Blocks production runtime execution."
        evidence_refs: ["E_PYPROJECT"]
        confidence: "high"

  code_mind_map:
    evidence_refs: ["E_README", "E_PYPROJECT", "E_INIT", "E_EMBED", "E_RUN", "E_CLUSTER", "E_PLOT", "E_UMAP_PCA", "E_EXAMPLES"]
    confidence: "high"
    repository:
      url: "https://github.com/prabhakarlab/Banksy_py"
      commit_or_release: "43e2d692db6705c0195039764194473912e4cfc2"
      license: "GPL-3.0"
      last_checked: "2026-04-28"
      evidence_refs: ["E_LICENSE", "E_PYPROJECT"]
      confidence: "high"
    install_and_environment_files:
      - path: "pyproject.toml"
        role: "declares pybanksy 1.3.4, Python >=3.8,<3.13, core dependencies, and optional mclust extra using rpy2"
        evidence_refs: ["E_PYPROJECT"]
        confidence: "high"
      - path: "LICENSE.md"
        role: "declares GPL-3.0 licensing"
        evidence_refs: ["E_LICENSE"]
        confidence: "high"
    examples_and_entrypoints:
      - path_or_uri: "README.md quick start"
        entrypoint_type: "official usage documentation"
        demonstrated_inputs: ["AnnData", "coordinate keys", "spatial domain segmentation scenario"]
        demonstrated_outputs: ["domain segmentation labels and plots, as examples"]
        evidence_refs: ["E_README"]
        confidence: "high"
      - path_or_uri: "CODEX_B006_ascending.py"
        entrypoint_type: "official example script"
        demonstrated_inputs: ["external CODEX/example data"]
        demonstrated_outputs: ["example workflow outputs"]
        evidence_refs: ["E_EXAMPLES"]
        confidence: "medium"
      - path_or_uri: "DLPFC_concatenate_multisample.py"
        entrypoint_type: "official example script"
        demonstrated_inputs: ["external DLPFC multi-sample data"]
        demonstrated_outputs: ["example workflow outputs"]
        evidence_refs: ["E_EXAMPLES"]
        confidence: "medium"
    backend_modules_and_files:
      - path: "src/banksy/initialize_banksy.py"
        responsibility: "Layer 4 evidence: initialize AnnData/coordinates and fixed-neighbor spatial weights"
        evidence_refs: ["E_INIT"]
        confidence: "high"
      - path: "src/banksy/embed_banksy.py"
        responsibility: "Layer 4 evidence: construct BANKSY matrices and expose memory/data validity risks"
        evidence_refs: ["E_EMBED"]
        confidence: "high"
      - path: "src/banksy/run_banksy.py"
        responsibility: "Layer 4 evidence: orchestrate multiparam workflow and result collection"
        evidence_refs: ["E_RUN"]
        confidence: "high"
      - path: "src/banksy/cluster_methods.py"
        responsibility: "Layer 4 evidence: clustering implementation choices and seed hooks"
        evidence_refs: ["E_CLUSTER"]
        confidence: "high"
      - path: "src/banksy/plot_banksy.py"
        responsibility: "Layer 4 evidence: label writing and optional artifact output"
        evidence_refs: ["E_PLOT"]
        confidence: "high"
      - path: "src/banksy_utils/umap_pca.py"
        responsibility: "Layer 4 evidence: PCA/UMAP helper and UMAP seed behavior"
        evidence_refs: ["E_UMAP_PCA"]
        confidence: "high"
    data_flow_notes:
      - stage: "input_check"
        observed_behavior: "Expect AnnData with usable expression data and coordinate keys."
        evidence_refs: ["E_README", "E_INIT"]
        confidence: "high"
      - stage: "core_structure_building"
        observed_behavior: "Build neighbor-augmented spatial weights and BANKSY matrices."
        evidence_refs: ["E_INIT", "E_EMBED"]
        confidence: "high"
      - stage: "model_fit_or_inference"
        observed_behavior: "Run dimensionality reduction and clustering over parameter choices."
        evidence_refs: ["E_RUN", "E_CLUSTER", "E_UMAP_PCA"]
        confidence: "high"
      - stage: "output_assignment"
        observed_behavior: "Labels may be written to AnnData observations, and a result table can be returned."
        evidence_refs: ["E_RUN", "E_PLOT"]
        confidence: "high"

  function_surface_map:
    stage_bindings:
      - execution_stage: "input_check"
        layer3_semantic_operation: "Verify AnnData expression matrix, coordinate availability, finite values, and planned memory class."
        layer4_backend_binding_refs: ["E_INIT", "E_EMBED"]
        parameter_policy_refs: ["coordinate_key_pair", "memory_policy"]
        evidence_refs: ["E_README", "E_INIT", "E_EMBED"]
        confidence: "medium"
      - execution_stage: "core_structure_building"
        layer3_semantic_operation: "Construct neighborhood-aware representation using spatial coordinates."
        layer4_backend_binding_refs: ["E_INIT", "E_EMBED"]
        parameter_policy_refs: ["neighborhood_scale_policy", "spatial_expression_weight_policy"]
        evidence_refs: ["E_INIT", "E_EMBED"]
        confidence: "medium"
      - execution_stage: "model_fit_or_inference"
        layer3_semantic_operation: "Compute embedding and cluster spatial domains under selected semantic clustering policy."
        layer4_backend_binding_refs: ["E_RUN", "E_CLUSTER", "E_UMAP_PCA"]
        parameter_policy_refs: ["cluster_method_policy", "domain_count_policy", "seed_policy"]
        evidence_refs: ["E_RUN", "E_CLUSTER", "E_UMAP_PCA"]
        confidence: "medium"
      - execution_stage: "output_assignment"
        layer3_semantic_operation: "Attach domain labels and summarize parameter settings/results."
        layer4_backend_binding_refs: ["E_RUN", "E_PLOT"]
        parameter_policy_refs: ["label_namespace_policy"]
        evidence_refs: ["E_RUN", "E_PLOT"]
        confidence: "medium"
      - execution_stage: "artifact_export"
        layer3_semantic_operation: "Optionally export labeled AnnData, plots, and provenance table under BioHarness artifact naming."
        layer4_backend_binding_refs: ["E_PLOT", "E_RUN"]
        parameter_policy_refs: ["artifact_export_policy"]
        evidence_refs: ["E_PLOT", "E_RUN"]
        confidence: "medium"
    unmapped_backend_functions:
      - backend_ref: "raw plotting helpers and package-internal utility calls"
        reason_not_exposed_to_layer3: "Layer 3 must expose semantic artifact and visualization requests, not backend raw function names or call graph."
        evidence_refs: ["E_REPO_INTERFACE_CONTRACT", "E_TEMPLATE"]
        confidence: "high"
      - backend_ref: "optional mclust/R path"
        reason_not_exposed_to_layer3: "Optional dependency adds rpy2/R environment complexity; hold behind Layer 4 policy until a capsule is proven."
        evidence_refs: ["E_PYPROJECT", "E_CLUSTER"]
        confidence: "high"

  layer3_agent_surface:
    surface_id: "spatial_domain_identification.banksy.v1"
    visibility: "agent_visible"
    inherits_from: "spatial_domain_identification.canonical.v1"
    task_family: "spatial_domain_identification"
    method_id: "banksy"
    execution_stage_vocab:
      - "input_check"
      - "method_preprocessing"
      - "core_structure_building"
      - "model_fit_or_inference"
      - "output_assignment"
      - "artifact_export"
      - "final_validation"
      - "visualization"
    semantic_inputs:
      - input_id: "spatial_expression_anndata"
        object_contract: "AnnData containing expression matrix and spatial coordinate fields"
        required: true
        constraints:
          - "must include a semantic coordinate key pair"
          - "must not require histology image input"
          - "must not require external reference input"
    semantic_parameters:
      - parameter_id: "coordinate_key_pair"
        meaning: "Names of the two spatial coordinate fields to use."
        policy: "expose_to_agent"
        allowed_values_or_range: "two coordinate keys present in input object"
        default_strategy: "infer only when canonical coordinate metadata is unambiguous"
        agent_visibility: "agent_visible"
      - parameter_id: "domain_resolution_policy"
        meaning: "Semantic choice for domain granularity or cluster-count/resolution exploration."
        policy: "expose_to_agent"
        allowed_values_or_range: "task-family domain granularity vocabulary; exact backend mapping deferred to Layer 4"
        default_strategy: "use conservative default exploration only after validation fixture exists"
        agent_visibility: "agent_visible"
      - parameter_id: "neighborhood_scale_policy"
        meaning: "Semantic strength/range of local spatial-neighborhood context."
        policy: "expose_to_agent"
        allowed_values_or_range: "low | default | high | adapter_validated_custom"
        default_strategy: "default"
        agent_visibility: "agent_visible"
      - parameter_id: "spatial_expression_weight_policy"
        meaning: "Semantic balance between original expression and neighbor-augmented expression."
        policy: "expose_to_agent"
        allowed_values_or_range: "expression_dominant | balanced | spatial_context_enriched | adapter_validated_custom"
        default_strategy: "balanced"
        agent_visibility: "agent_visible"
      - parameter_id: "cluster_method_policy"
        meaning: "Semantic clustering backend family."
        policy: "expose_to_agent"
        allowed_values_or_range: "leiden_default; optional_mclust_hold_until_environment_proven"
        default_strategy: "leiden_default"
        agent_visibility: "agent_visible"
      - parameter_id: "seed_policy"
        meaning: "Reproducibility control for stochastic steps."
        policy: "expose_to_agent"
        allowed_values_or_range: "integer seed or adapter default"
        default_strategy: "record all seed choices in provenance"
        agent_visibility: "agent_visible"
      - parameter_id: "artifact_export_policy"
        meaning: "Which standard artifacts to emit."
        policy: "expose_to_agent"
        allowed_values_or_range: "labels_only | labels_and_table | labels_table_figures | full_debug_artifacts"
        default_strategy: "labels_and_table"
        agent_visibility: "agent_visible"
    semantic_outputs:
      - output_id: "domain_labels"
        object_location: "AnnData.obs under BioHarness-controlled label namespace"
        required: true
        validation_hook: "non-empty label vector with one label per observation"
      - output_id: "results_summary_table"
        object_location: "standard artifact table with selected parameters and clustering summary"
        required: true
        validation_hook: "schema and non-empty-row check"
      - output_id: "method_provenance"
        object_location: "standard provenance artifact"
        required: true
        validation_hook: "records method id, package/version/commit if available, parameters, seeds, and environment candidate"
    standard_artifacts:
      - artifact_id: "labeled_anndata"
        artifact_type: "h5ad_or_in_memory_anndata"
        required: true
        provenance_fields: ["method_id", "surface_id", "label_namespace", "coordinate_key_pair", "seed_policy"]
      - artifact_id: "domain_label_table"
        artifact_type: "tabular"
        required: true
        provenance_fields: ["observation_id", "domain_label", "method_id", "surface_id"]
      - artifact_id: "diagnostic_plots"
        artifact_type: "figures"
        required: false
        provenance_fields: ["plot_type", "coordinate_key_pair", "label_namespace"]
    typed_failure_modes:
      - failure_id: "missing_spatial_coordinates"
        meaning: "Input object does not contain usable coordinate keys."
        agent_action: "ask user to provide coordinate key mapping or choose another method."
      - failure_id: "nonfinite_or_invalid_matrix"
        meaning: "Input or generated matrix contains invalid values."
        agent_action: "run preprocessing/quality control before retrying."
      - failure_id: "insufficient_memory_for_dense_step"
        meaning: "Dataset exceeds memory budget for planned representation."
        agent_action: "request smaller fixture, more memory, or an alternative method."
      - failure_id: "optional_clustering_backend_unavailable"
        meaning: "Requested optional clustering path is not available in the environment."
        agent_action: "use default clustering policy or hold for environment setup."
    layer3_exclusions:
      - "backend_file_paths"
      - "raw_backend_function_names"
      - "package_private_parameters"
      - "implementation_call_graph"
    evidence_refs: ["E_REPO_INTERFACE_CONTRACT", "E_TEMPLATE", "E_LAYER2_HANDOFF", "E_README", "E_PYPROJECT"]
    confidence: "medium"

  layer4_adapter_draft:
    adapter_id: "backend.spatial_domain_identification.banksy.v1"
    visibility: "implementation_debug_audit_only"
    integration_mode: "strong_wrapper_blueprint_no_production_adapter"
    authority_note: "This is a draft binding plan only; no production adapter, runtime, validator, environment capsule, smoke fixture, or executed runtime cost is claimed."
    filesystem_policy:
      working_directory: "future BioHarness run workspace; not created by this record"
      input_mounts: ["future mounted AnnData input path"]
      output_directory: "future BioHarness artifact directory"
      temp_storage: "future isolated temp directory"
      cache_policy: "no cache policy frozen"
      cleanup_policy: "no cleanup policy frozen"
    function_surface_bindings:
      - binding_id: "l4_input_initialization_binding"
        layer3_stage: "input_check"
        backend_file: "src/banksy/initialize_banksy.py"
        backend_function_or_entrypoint: "initialize stage using AnnData and coordinate tuple"
        call_signature_notes: "backend binding evidence only; exact call signature is not exposed to Layer 3"
        evidence_refs: ["E_INIT"]
        confidence: "medium"
      - binding_id: "l4_banksy_matrix_binding"
        layer3_stage: "core_structure_building"
        backend_file: "src/banksy/embed_banksy.py"
        backend_function_or_entrypoint: "BANKSY matrix generation path"
        call_signature_notes: "lambda/max_m mapping must remain adapter-owned and validated before production"
        evidence_refs: ["E_EMBED"]
        confidence: "medium"
      - binding_id: "l4_workflow_binding"
        layer3_stage: "model_fit_or_inference"
        backend_file: "src/banksy/run_banksy.py"
        backend_function_or_entrypoint: "multiparam workflow path"
        call_signature_notes: "orchestrates PCA, UMAP, clustering, plotting, and returns result table evidence"
        evidence_refs: ["E_RUN"]
        confidence: "medium"
      - binding_id: "l4_clustering_binding"
        layer3_stage: "model_fit_or_inference"
        backend_file: "src/banksy/cluster_methods.py"
        backend_function_or_entrypoint: "Leiden partitioning; optional mclust path"
        call_signature_notes: "default path should prefer Leiden until rpy2/R capsule is proven"
        evidence_refs: ["E_CLUSTER"]
        confidence: "medium"
      - binding_id: "l4_output_plot_binding"
        layer3_stage: "output_assignment"
        backend_file: "src/banksy/plot_banksy.py"
        backend_function_or_entrypoint: "label assignment and optional h5ad/figure output path"
        call_signature_notes: "adapter must place outputs under BioHarness artifact naming and provenance"
        evidence_refs: ["E_PLOT"]
        confidence: "medium"
    parameter_mapping:
      - parameter_id: "coordinate_key_pair"
        layer3_parameter: "coordinate_key_pair"
        backend_parameter: "coordinate tuple/key mapping"
        policy: "expose_to_agent"
        conversion_rule: "validate keys against AnnData and convert to backend coordinate tuple only inside Layer 4"
        evidence_refs: ["E_README", "E_INIT"]
        confidence: "medium"
      - parameter_id: "spatial_expression_weight_policy"
        layer3_parameter: "spatial_expression_weight_policy"
        backend_parameter: "lambda-related backend setting"
        policy: "expose_to_agent"
        conversion_rule: "map semantic enum to validated numeric values in adapter; no production mapping frozen"
        evidence_refs: ["E_EMBED"]
        confidence: "medium"
      - parameter_id: "neighborhood_scale_policy"
        layer3_parameter: "neighborhood_scale_policy"
        backend_parameter: "max_m/neighborhood-related backend setting"
        policy: "expose_to_agent"
        conversion_rule: "map semantic enum to validated backend settings after fixture-based checks"
        evidence_refs: ["E_EMBED"]
        confidence: "medium"
      - parameter_id: "cluster_method_policy"
        layer3_parameter: "cluster_method_policy"
        backend_parameter: "clustering implementation selection"
        policy: "expose_to_agent"
        conversion_rule: "default to Leiden; hold optional mclust path unless R/rpy2 environment is proven"
        evidence_refs: ["E_CLUSTER", "E_PYPROJECT"]
        confidence: "high"
    input_conversion:
      - input_id: "spatial_expression_anndata"
        source_contract: "BioHarness spatial AnnData contract candidate"
        backend_expected_format: "AnnData plus coordinate tuple/key mapping"
        conversion_steps:
          - "validate object type"
          - "validate coordinate keys"
          - "validate finite expression data where feasible"
          - "estimate memory risk before dense conversion path"
        evidence_refs: ["E_README", "E_INIT", "E_EMBED"]
        confidence: "medium"
    output_mapping:
      - output_id: "domain_labels"
        backend_output: "labels written to AnnData observations or produced through workflow outputs"
        layer3_output: "domain_labels"
        extraction_rule: "copy to BioHarness-controlled label namespace and emit label table"
        evidence_refs: ["E_RUN", "E_PLOT"]
        confidence: "medium"
      - output_id: "results_summary_table"
        backend_output: "results_df-style table"
        layer3_output: "results_summary_table"
        extraction_rule: "normalize columns only after schema is specified by future adapter"
        evidence_refs: ["E_RUN"]
        confidence: "medium"
    artifact_mapping:
      - artifact_id: "labeled_anndata"
        backend_artifact: "optional h5ad output or mutated AnnData"
        standard_artifact: "BioHarness labeled AnnData artifact"
        export_rule: "future adapter must write only under approved output directory"
        evidence_refs: ["E_PLOT"]
        confidence: "medium"
      - artifact_id: "diagnostic_plots"
        backend_artifact: "optional figures"
        standard_artifact: "BioHarness diagnostic figure artifacts"
        export_rule: "visual sanity only; not biological correctness"
        evidence_refs: ["E_PLOT"]
        confidence: "medium"
    failure_translation:
      - backend_signal: "missing or invalid coordinate keys"
        typed_failure: "missing_spatial_coordinates"
        agent_visible_summary: "Input lacks usable spatial coordinates."
        evidence_refs: ["E_README", "E_INIT"]
        confidence: "medium"
      - backend_signal: "non-finite assertion or invalid matrix during embedding"
        typed_failure: "nonfinite_or_invalid_matrix"
        agent_visible_summary: "Input or generated matrix contains invalid values."
        evidence_refs: ["E_EMBED"]
        confidence: "medium"
      - backend_signal: "memory pressure from dense conversion"
        typed_failure: "insufficient_memory_for_dense_step"
        agent_visible_summary: "Dataset may exceed available memory for BANKSY representation."
        evidence_refs: ["E_README", "E_EMBED"]
        confidence: "medium"
      - backend_signal: "rpy2/R unavailable for optional mclust path"
        typed_failure: "optional_clustering_backend_unavailable"
        agent_visible_summary: "Optional clustering backend is unavailable; use default clustering or configure environment."
        evidence_refs: ["E_PYPROJECT", "E_CLUSTER"]
        confidence: "high"
    smoke_test:
      fixture: "not_available"
      command_or_entrypoint: "not_defined"
      expected_observable_io: []
      evidence_refs: ["E_EXAMPLES"]
      confidence: "high"
    fidelity_test:
      required: "only if algorithmic rewrite is proposed"
      comparison_target: "official backend output on a controlled fixture"
      metrics_or_checks: ["schema equivalence", "one label per observation", "non-empty domains", "label permutation-aware agreement if comparing labels"]
      evidence_refs: ["E_RUN", "E_PLOT"]
      confidence: "medium"

  environment_plan:
    environment_profile_candidate: "banksy_cpu_python_blueprint"
    expected_capsule: "none_exists_blueprint_only"
    native_package_manager: "Python packaging via pyproject metadata; no BioHarness install command is frozen"
    install_files: ["pyproject.toml"]
    lock_or_container_available: "not_claimed"
    dependency_conflict_risk: "medium_high_due_to_numpy_lt_2_and_optional_rpy2_R_path"
    known_conflicting_dependencies:
      - dependency: "numpy"
        conflict: "official dependency constrains numpy >=1.21,<2.0"
      - dependency: "python"
        conflict: "official Python range is >=3.8,<3.13"
      - dependency: "rpy2/R"
        conflict: "only needed for optional mclust path and requires separate runtime support"
    gpu_policy: "not_required"
    cuda_policy: "not_applicable"
    cpu_fallback_policy: "primary planned execution mode is CPU"
    shared_environment_feasibility: "possible but unproven; scanpy/anndata/numpy constraints must be checked against shared capsules"
    isolation_strategy: "prefer dedicated or compatibility-tested capsule before production"
    environment_decision: "hold_due_to_environment"
    evidence_refs: ["E_PYPROJECT", "E_README", "E_CLUSTER"]
    confidence: "medium"

  rewrite_plan:
    interface_standardization:
      needed: true
      scope:
        - "standardize AnnData coordinate-key validation"
        - "standardize semantic parameter mapping"
        - "standardize label namespace and provenance output"
        - "standardize typed failure translation"
      rationale: "A strong wrapper is needed to present a stable agent surface while keeping backend details in Layer 4."
      validation_required:
        - "input contract check"
        - "output schema check"
        - "seed/provenance check"
        - "memory-risk preflight"
      evidence_refs: ["E_REPO_INTERFACE_CONTRACT", "E_README", "E_EMBED", "E_PLOT"]
      confidence: "medium"
    algorithmic_rewrite:
      needed: false
      touched_algorithm_core: false
      approval_required_if_touched: true
      fidelity_required_if_touched: true
      rationale: "No algorithmic rewrite is planned; preserve official backend behavior behind a wrapper."
      excluded_algorithmic_components:
        - "spatial neighborhood construction"
        - "BANKSY matrix generation"
        - "PCA/UMAP/clustering implementation"
        - "label assignment semantics"
      evidence_refs: ["E_INIT", "E_EMBED", "E_RUN", "E_CLUSTER"]
      confidence: "high"
    rewrite_decision: "strong_wrapper_no_algorithmic_rewrite"
    revisitable: true
    unresolved_questions:
      - "Whether optional mclust support belongs in the first adapter or a later environment-specific extension."
      - "What exact semantic-to-backend numeric mappings should be validated for lambda/max_m-like controls."

  validation_runtime_plan:
    callability_check:
      installable:
        check: "future isolated install probe for pybanksy under Python >=3.8,<3.13 with numpy <2"
        expected_evidence: "install log and import check; not executed in this record"
      runnable_example:
        check: "future run on BioHarness-owned minimal AnnData fixture"
        expected_evidence: "command log, output artifact list, and validation report; fixture not available now"
      observable_io:
        check: "future verification of one label per observation, summary table, provenance, and optional figures"
        expected_evidence: "schema validation report; not executed in this record"
    smoke_test:
      fixture: "not_yet_available"
      success_criteria:
        - "adapter accepts minimal AnnData with coordinate keys"
        - "emits one non-null label per observation"
        - "emits method provenance"
        - "does not write outside approved output directory"
    contract_test:
      input_contract_checks:
        - "AnnData object present"
        - "coordinate keys present"
        - "expression matrix finite or failures translated"
        - "memory preflight recorded"
      output_contract_checks:
        - "domain label count equals observation count"
        - "label namespace is BioHarness-controlled"
        - "summary table exists"
        - "provenance includes method id, package/version/commit where available, parameters, and seeds"
    visual_checks:
      visual_sanity_scope: "optional spatial label plot can show non-empty label distribution and coordinate orientation issues"
      not_biological_correctness: true
      not_algorithmic_equivalence: true
      checks:
        - "plot file exists if requested"
        - "plot labels are not all missing"
        - "visual review is recorded as sanity only"
    reproducibility_checks:
      random_seed_policy: "record Leiden partition seed and UMAP seed behavior where backend exposes or fixes them"
      determinism_policy: "do not claim deterministic output until repeated fixture runs are checked"
      repeated_runs: "future two-run fixture comparison"
      label_permutation_awareness: "required for any label comparison"
      stochastic_components: ["Leiden partitioning", "UMAP"]
    rewrite_comparison:
      required: "not_required_for_strong_wrapper_unless_algorithmic_core_is_touched"
      schema_equivalence: "future wrapper must preserve required outputs"
      domain_count: "check against selected policy"
      no_empty_domain: "check if cluster-count policy supports it"
      label_permutation: "required when comparing labels"
      ari_nmi_ami: "optional for fixture-based regression comparison"
      spatial_pattern_sanity: "visual sanity only"
      runtime_memory_delta: "record only after fixture execution"
    runtime_cost_record:
      wall_time: "not_executed"
      peak_memory: "not_executed"
      device_used: "not_executed"
      fixture_size: "not_available"
    evidence_refs: ["E_README", "E_EMBED", "E_CLUSTER", "E_UMAP_PCA", "E_EXAMPLES"]
    confidence: "medium"

  risk_register:
    scientific_risks:
      - risk: "Agent may overstate BANKSY as universally best for domain identification."
        mitigation: "Keep Layer 2 handoff compact and evidence-bounded; no paper-level re-review or superiority claim in Layer 3."
        evidence_refs: ["E_LAYER2_HANDOFF"]
        confidence: "medium"
    engineering_risks:
      - risk: "Dense conversion can cause memory failures on larger datasets."
        mitigation: "Require memory preflight and typed insufficient-memory failure before production."
        evidence_refs: ["E_README", "E_EMBED"]
        confidence: "high"
      - risk: "Backend plotting/output side effects may write unexpected artifacts."
        mitigation: "Wrapper must constrain output directory and normalize artifact naming."
        evidence_refs: ["E_PLOT"]
        confidence: "medium"
    environment_risks:
      - risk: "Dependency constraints may conflict with shared BioHarness Python environments."
        mitigation: "Hold production adapter until isolated environment probe or dedicated capsule is approved."
        evidence_refs: ["E_PYPROJECT"]
        confidence: "high"
      - risk: "Optional mclust path requires rpy2/R."
        mitigation: "Default to Leiden and gate mclust behind separate environment proof."
        evidence_refs: ["E_PYPROJECT", "E_CLUSTER"]
        confidence: "high"
    reproducibility_risks:
      - risk: "Stochastic clustering and UMAP steps may vary across runs."
        mitigation: "Expose seed policy semantically and record all backend seeds in provenance."
        evidence_refs: ["E_CLUSTER", "E_UMAP_PCA"]
        confidence: "medium"
    licensing_risks:
      - risk: "GPL-3.0 license may constrain redistribution or bundling strategy."
        mitigation: "Review legal/distribution approach before packaging any adapter or capsule."
        evidence_refs: ["E_LICENSE", "E_PYPROJECT"]
        confidence: "high"
    agent_misuse_risks:
      - risk: "Agent may request raw backend parameters or function names from Layer 3."
        mitigation: "Layer 3 exposes semantic controls only; backend bindings remain Layer 4 implementation/debug/audit-only."
        evidence_refs: ["E_REPO_INTERFACE_CONTRACT", "E_TEMPLATE"]
        confidence: "high"

  decision_log:
    - decision_id: "D001_status"
      decision: "Record remains blueprint and blueprint_only_no_production_adapter."
      options: ["blueprint", "production_candidate", "production_adapter"]
      rationale: "No BioHarness environment capsule, runtime execution, validator, smoke fixture, or cost record exists in this task."
      evidence_refs: ["E_TEMPLATE", "E_EXAMPLES"]
      revisitable: true
      revisit_trigger: "After environment probe, smoke fixture validation, and runtime evidence exist."
      confidence: "high"
    - decision_id: "D002_layer3_visibility"
      decision: "Layer 3 is agent_visible but excludes backend raw function names, backend file paths, package-private params, and implementation call graph."
      options: ["semantic_agent_surface", "backend_exposing_surface"]
      rationale: "Repo contract guidance separates ExecutionSurfaceSpec from BackendAdapterSpec."
      evidence_refs: ["E_REPO_INTERFACE_CONTRACT", "E_TEMPLATE"]
      revisitable: false
      revisit_trigger: "Only repo-wide interface policy change."
      confidence: "high"
    - decision_id: "D003_layer4_visibility"
      decision: "Layer 4 draft is implementation_debug_audit_only and may include backend binding evidence."
      options: ["hide_all_backend_evidence", "include_layer4_binding_evidence"]
      rationale: "Adapter planning needs auditable binding evidence while preserving Layer 3/4 separation."
      evidence_refs: ["E_REPO_INTERFACE_CONTRACT", "E_TEMPLATE"]
      revisitable: true
      revisit_trigger: "If a future BackendAdapterSpec schema changes evidence fields."
      confidence: "high"
    - decision_id: "D004_rewrite_scope"
      decision: "Use strong wrapper; no algorithmic rewrite."
      options: ["strong_wrapper", "algorithmic_rewrite", "reject"]
      rationale: "Official backend evidence already covers core BANKSY behavior; current need is interface standardization and validation."
      evidence_refs: ["E_INIT", "E_EMBED", "E_RUN", "E_CLUSTER"]
      revisitable: true
      revisit_trigger: "If backend cannot be installed, validated, or safely wrapped."
      confidence: "medium"
    - decision_id: "D005_default_clustering"
      decision: "Plan Leiden as default; hold optional mclust until R/rpy2 environment support is proven."
      options: ["leiden_default", "mclust_default", "support_both_immediately"]
      rationale: "Known evidence records Leiden default and mclust optional dependency complexity."
      evidence_refs: ["E_README", "E_PYPROJECT", "E_CLUSTER"]
      revisitable: true
      revisit_trigger: "After environment capsule supports rpy2/R and fixture validation passes."
      confidence: "high"

  subagent_work_plan:
    shared_evidence_ledger:
      location: "/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_source_evidence_inventory.json"
      update_rule: "current NAS retrieval packet artifact; future updates should be versioned rather than mutating this evidence snapshot"
    source_priority:
      - priority: 1
        source_type: "official repository at pinned commit"
        reason: "Primary evidence for code, environment, and usage claims."
      - priority: 2
        source_type: "compact Layer 2 handoff"
        reason: "Bounds method-selection context without pasting full Layer 2 reasoning."
      - priority: 3
        source_type: "current NAS retrieval outputs"
        reason: "Structured evidence ledger, assignment matrix, retrieval plan, and coverage record for this planning snapshot."
    subagent_tasks:
      - task_id: "SA001_source_inventory_check"
        assignment: "Re-check official repository evidence against the pinned commit if this planning record is revised."
        inputs:
          - "prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2"
          - "current NAS source evidence inventory path"
        expected_output:
          must_include:
            - "evidence_refs"
            - "confidence"
            - "unresolved_questions"
            - "proposed_layer3_implications"
            - "proposed_layer4_implications"
        handoff_notes: "Keep backend file/function evidence in Layer 4 fields only."
      - task_id: "SA002_environment_probe_plan"
        assignment: "Draft isolated environment probe for pybanksy package constraints without creating production capsule."
        inputs:
          - "pyproject.toml evidence"
          - "README installation notes"
        expected_output:
          must_include:
            - "evidence_refs"
            - "confidence"
            - "unresolved_questions"
            - "proposed_layer3_implications"
            - "proposed_layer4_implications"
        handoff_notes: "Must distinguish installability evidence from production runtime support."
      - task_id: "SA003_fixture_design"
        assignment: "Design a minimal BioHarness-owned AnnData smoke fixture for future validation."
        inputs:
          - "Layer 3 semantic input contract"
          - "official examples as non-fixture references"
        expected_output:
          must_include:
            - "evidence_refs"
            - "confidence"
            - "unresolved_questions"
            - "proposed_layer3_implications"
            - "proposed_layer4_implications"
        handoff_notes: "Do not reuse external example data as smoke fixture unless licensing and retrieval are resolved."
    integration_rule: "Integrate only evidence-bound implications; unresolved items stay in risk register or next action."
    unresolved_questions:
      - "Should first-cycle validation include only Leiden or also optional mclust?"
      - "What canonical artifact names will the spatial domain identification task family require?"
      - "What memory threshold should trigger early refusal for dense conversion risk?"

  next_action_decision:
    decision: "run_environment_probe"
    allowed_values:
      - "draft_layer3_surface"
      - "draft_layer4_adapter"
      - "request_more_evidence"
      - "run_environment_probe"
      - "hold_due_to_environment"
      - "hold_due_to_api_or_licensing"
      - "reject_for_current_cycle"
    rationale: "The Layer 3/Layer 4 blueprint is sufficient for planning, but production movement is blocked by missing environment, smoke fixture, validator, and runtime evidence."
    evidence_refs: ["E_PYPROJECT", "E_README", "E_EXAMPLES"]
    confidence: "medium"
```
