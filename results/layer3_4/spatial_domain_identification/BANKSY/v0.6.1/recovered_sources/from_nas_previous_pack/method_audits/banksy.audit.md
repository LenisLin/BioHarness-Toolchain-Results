# BANKSY Method Engineering Audit

This is an engineering-stage audit artifact. It consolidates BANKSY Layer3/4 planning evidence for review. It is not a production implementation, runtime API, adapter, environment capsule, validator, benchmark, or biological correctness claim.

Primary upstream planning record copy: [evidence/2026-04-28_banksy_method_execution_planning_record_v0.6.md](../evidence/2026-04-28_banksy_method_execution_planning_record_v0.6.md)

Primary retrieval packet: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/`

## Audit Status

```yaml
method_id: BANKSY
task_family: spatial_domain_identification
audit_status: planning_record_complete
authority_status: blueprint
last_updated: "2026-04-28"
production_adapter_implemented: false
storage_location: NAS
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
  - Output schema freeze remains incomplete.
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
      - Multi-sample examples are observed, but no BioHarness joint multislice contract is validated.
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
        - AnnData with expression matrix and a semantic spatial coordinate source.
      disallowed_variants:
        - image-only input
        - reference-only input
        - non-spatial expression matrix without coordinates
    required_spatial_information:
      spatial_coordinate_source:
        allowed_modes:
          - obsm_spatial
          - obs_x_y_columns
          - adapter_validated_custom_mapping
      coordinate_system: dataset-native 2D coordinate system; production normalization policy not frozen
      library_id_policy: optional provenance/grouping metadata only
      scale_factor_policy: not required by BANKSY evidence
    multi_sample_policy:
      status: examples_observed_but_bioharness_contract_not_validated
      supported_claim: no_joint_multislice_contract_claim
      agent_visible_summary: multi-sample usage requires additional review before default surface exposure
    target_domain_count_policy:
      status: not_directly_guaranteed
      mapping: may require resolution search or post-hoc selection
      agent_action: ask user whether approximate granularity is acceptable
```

## Audit Evidence Registry

```yaml
audit_evidence_registry:
  repository_snapshot:
    url: https://github.com/prabhakarlab/Banksy_py
    commit_or_release: 43e2d692db6705c0195039764194473912e4cfc2
    local_path_if_present: not_observed
    last_checked: "2026-04-28"
  evidence_items:
    - evidence_id: E_LAYER2_HANDOFF
      source_type: layer2_artifact
      path_or_url: /mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/
      symbol_or_section: BANKSY row, field registry, supplement review branch context
      line_range: requires_followup
      summary: Existing Layer 2 artifacts identify BANKSY as a morphology-free neighborhood-kernel domain-identification candidate with spatial expression plus coordinates as input and domain labels as output.
      confidence: medium
    - evidence_id: E_NAS_RETRIEVAL_PLAN
      source_type: inferred
      path_or_url: /mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_retrieval_plan.md
      symbol_or_section: retrieval scope and claim boundaries
      line_range: unknown
      summary: Retrieval scope is official repository evidence plus existing Layer 2 artifacts; new literature review and runtime execution are excluded.
      confidence: medium
    - evidence_id: E_NAS_INVENTORY
      source_type: package_docs
      path_or_url: /mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_source_evidence_inventory.json
      symbol_or_section: evidence_items
      line_range: unknown
      summary: Structured evidence ledger with source claims, limitations, confidence, and Layer3/Layer4 assignment details.
      confidence: medium
    - evidence_id: E_NAS_MATRIX
      source_type: inferred
      path_or_url: /mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_layer3_4_assignment_matrix.md
      symbol_or_section: assignment table
      line_range: unknown
      summary: Explicitly assigns retrieved facts to Layer3, Layer4, shared planning metadata, or exclusions.
      confidence: medium
    - evidence_id: E_NAS_COVERAGE
      source_type: inferred
      path_or_url: /mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_retrieval_coverage_check.md
      symbol_or_section: coverage summary
      line_range: unknown
      summary: Confirms coverage for v0.6 planning fields and records missing fixture, environment, and runtime evidence.
      confidence: medium
    - evidence_id: E_README
      source_type: readme
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/README.md
      symbol_or_section: quick start, requirements, general steps, examples
      line_range: requires_followup
      summary: Official README documents pybanksy installation, AnnData input, coordinate keys, RAM recommendation, default Leiden, optional mclust, and example workflows.
      confidence: high
    - evidence_id: E_PYPROJECT
      source_type: install_file
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/pyproject.toml
      symbol_or_section: project metadata and dependencies
      line_range: requires_followup
      summary: Declares package pybanksy 1.3.4, Python >=3.8,<3.13, numpy >=1.21,<2.0, scanpy/anndata stack, python-igraph/leidenalg, GPL-3.0, and optional rpy2 mclust extra.
      confidence: high
    - evidence_id: E_LICENSE
      source_type: package_docs
      path_or_url: https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/LICENSE.md
      symbol_or_section: license text
      line_range: requires_followup
      summary: GPL-3.0 licensing evidence for distribution-risk tracking.
      confidence: high
    - evidence_id: E_INIT
      source_type: source_code
      path_or_url: src/banksy/initialize_banksy.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2
      symbol_or_section: initialization and spatial weight construction
      line_range: requires_followup
      summary: Uses AnnData and coordinate tuple evidence; builds fixed-neighbor spatial weights.
      confidence: high
    - evidence_id: E_EMBED
      source_type: source_code
      path_or_url: src/banksy/embed_banksy.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2
      symbol_or_section: BANKSY matrix generation
      line_range: requires_followup
      summary: Supports lambda/max_m-like controls, dense conversion risk, and non-finite assertion risk.
      confidence: high
    - evidence_id: E_RUN
      source_type: source_code
      path_or_url: src/banksy/run_banksy.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2
      symbol_or_section: multiparam workflow
      line_range: requires_followup
      summary: Evidence for workflow orchestration, PCA/UMAP/clustering/plotting, and result table return.
      confidence: high
    - evidence_id: E_CLUSTER
      source_type: source_code
      path_or_url: src/banksy/cluster_methods.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2
      symbol_or_section: clustering helpers
      line_range: requires_followup
      summary: Evidence for Leiden partition seed and optional mclust path requiring rpy2/R.
      confidence: high
    - evidence_id: E_PLOT
      source_type: source_code
      path_or_url: src/banksy/plot_banksy.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2
      symbol_or_section: plotting and label output
      line_range: requires_followup
      summary: Evidence for label assignment to AnnData observations and optional H5AD/figure output.
      confidence: high
    - evidence_id: E_UMAP_PCA
      source_type: source_code
      path_or_url: src/banksy_utils/umap_pca.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2
      symbol_or_section: PCA/UMAP helper
      line_range: requires_followup
      summary: Evidence for dimensionality reduction helper and UMAP seed behavior.
      confidence: high
    - evidence_id: E_EXAMPLES
      source_type: example
      path_or_url: CODEX_B006_ascending.py and DLPFC_concatenate_multisample.py at prabhakarlab/Banksy_py commit 43e2d692db6705c0195039764194473912e4cfc2
      symbol_or_section: official example scripts
      line_range: requires_followup
      summary: Example workflow evidence; external data dependencies mean they are not BioHarness smoke fixtures. Multi-sample examples are observed, but BioHarness has not validated a joint multislice contract.
      confidence: medium
```

## Layer3/Layer4 Coordinate Boundary

Layer3 exposes `spatial_coordinate_source`, a semantic coordinate source that an agent can reason about. Layer4 maps that semantic source to BANKSY backend coordinate-key representation. Raw backend coordinate tuple details are Layer4-only and are not part of the agent-facing Layer3 surface.

## Domain Resolution Boundary

`domain_resolution_policy` is a granularity-control abstraction. It is not an exact `n_domains` guarantee; reaching an approximate target may require resolution search or post-hoc selection.
