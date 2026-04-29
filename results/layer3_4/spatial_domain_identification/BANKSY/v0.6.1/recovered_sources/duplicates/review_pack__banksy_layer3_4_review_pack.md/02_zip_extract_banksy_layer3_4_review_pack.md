# BANKSY Layer3/4 Review Pack

## Review Status

```yaml
method_id: BANKSY
task_family: spatial_domain_identification
review_pack_status: ready_for_review
authority_status: blueprint
production_adapter_implemented: false
last_updated: 2026-04-28
```

This pack consolidates existing BANKSY Layer3/4 method engineering work for human review. It does not implement the BANKSY adapter, rewrite BANKSY code, create an environment capsule, run a smoke test, or claim production support.

## Artifact Index

| Artifact | Path |
| --- | --- |
| MethodEngineeringAudit | [method_audits/spatial_domain_identification/banksy.audit.md](../../method_audits/spatial_domain_identification/banksy.audit.md) |
| Canonical Layer3 surface | [surface_registry/spatial_domain_identification/canonical.v1.yaml](../../surface_registry/spatial_domain_identification/canonical.v1.yaml) |
| BANKSY Layer3 ExecutionSurfaceSpec draft | [surface_registry/spatial_domain_identification/banksy.v1.yaml](../../surface_registry/spatial_domain_identification/banksy.v1.yaml) |
| BANKSY Layer4 BackendAdapterSpec draft | [backend_adapter_registry/spatial_domain_identification/banksy.adapter.v1.yaml](../../backend_adapter_registry/spatial_domain_identification/banksy.adapter.v1.yaml) |
| Environment plan | [environment_profiles/spatial_domain_identification/banksy.environment.md](../../environment_profiles/spatial_domain_identification/banksy.environment.md) |
| Rewrite decision | [method_audits/spatial_domain_identification/banksy.rewrite_decision.md](../../method_audits/spatial_domain_identification/banksy.rewrite_decision.md) |
| Validation/runtime plan | [method_audits/spatial_domain_identification/banksy.validation_runtime.md](../../method_audits/spatial_domain_identification/banksy.validation_runtime.md) |
| Risk/decision log | [method_audits/spatial_domain_identification/banksy.risk_decision_log.md](../../method_audits/spatial_domain_identification/banksy.risk_decision_log.md) |
| MethodExecutionPlanningRecord v0.6 | [docs/method_execution_planning_records/spatial_domain_identification/2026-04-28_banksy_method_execution_planning_record_v0.6.md](../method_execution_planning_records/spatial_domain_identification/2026-04-28_banksy_method_execution_planning_record_v0.6.md) |
| NAS retrieval outputs | `/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/` |

Source Layer2 artifacts:

- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_pilot.md`
- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.md`
- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.json`
- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_layer2_field_registry.json`
- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-18_domain_identification_layer2_supplement_review.md`

## What Changed

BANKSY contributes a morphology-free, neighborhood-aware spatial domain identification option: spatial transcriptomics expression plus spatial coordinates to domain labels. It was selected as the first Layer3/4 co-design pilot because the Layer2 pilot already identifies it as a scalable local-neighborhood transcriptome clustering candidate and the official Python repository exposes enough source evidence for a blueprint surface and wrapper plan.

Functional surfaces identified:

- input checking for AnnData expression data and spatial coordinates;
- conditional preprocessing readiness;
- neighborhood-aware representation building;
- embedding and clustering;
- domain label assignment;
- standardized artifact export;
- BioHarness final validation;
- optional visualization for sanity checks only.

Backend bindings identified:

- official repository and pinned commit;
- package metadata and dependency constraints;
- initialization / spatial-weight evidence;
- BANKSY matrix generation evidence;
- workflow orchestration and clustering evidence;
- output assignment and optional artifact evidence.

What remains unknown or requires follow-up:

- no BioHarness smoke fixture has been run;
- no install/import/runtime probe has been run;
- no environment capsule or lockfile exists;
- exact semantic-to-backend numeric parameter mappings are not validated;
- runtime cost is not measured;
- optional mclust/R support is not proven;
- GPL-3.0 packaging implications require review.

## Layer3 Summary

Surface ID: `spatial_domain_identification.banksy.v1`

Inherits from: `spatial_domain_identification.canonical.v1`

Functional stages:

- `input_check`
- `method_preprocessing`
- `core_structure_building`
- `model_fit_or_inference`
- `output_assignment`
- `artifact_export`
- `final_validation`
- `visualization`

Agent-visible semantic parameters:

- `coordinate_key_pair`
- `domain_resolution_policy`
- `neighborhood_scale_policy`
- `spatial_expression_weight_policy`
- `cluster_method_policy`
- `seed_policy`
- `artifact_export_policy`

Hard constraints:

- requires spatial expression data and spatial coordinates;
- does not require histology image input;
- does not require external reference input;
- no GPU requirement observed;
- multi-slice support remains separate multi-sample use only, not explicit joint modeling;
- dense-memory risk requires preflight before production.

Standard outputs:

- `domain_labels`
- `results_summary_table`
- `method_provenance`
- labeled object / label table
- optional diagnostic plots

Validation hooks:

- coordinate-key preflight;
- memory-risk preflight;
- one label per observation;
- nonempty label vector;
- provenance completeness;
- visual sanity only if figures are requested.

Typed failure modes:

- `SpatialKeyMissing`
- `SparseMatrixDensificationRisk`
- `NonFiniteMatrix`
- `OptionalClusteringBackendUnavailable`
- `OutputContractViolation`
- `RuntimeToolError`

No raw backend function names are exposed in the Layer3 surface. Backend files, raw functions, package-private parameters, and implementation call graph are assigned to Layer4 only.

## Layer4 Summary

Backend adapter ID: `backend.spatial_domain_identification.banksy.v1`

Integration mode: public Python API evidence with a planned `strong_wrapper`.

Implementation status: `not_implemented`.

Key entrypoint evidence:

- official README quick start;
- `pyproject.toml`;
- `LICENSE.md`;
- `src/banksy/initialize_banksy.py`;
- `src/banksy/embed_banksy.py`;
- `src/banksy/run_banksy.py`;
- `src/banksy/cluster_methods.py`;
- `src/banksy/plot_banksy.py`;
- `src/banksy_utils/umap_pca.py`;
- CODEX and DLPFC official examples, not BioHarness fixtures.

Function surface binding coverage:

- `input_check`: observed backend evidence plus adapter validation required.
- `method_preprocessing`: requires follow-up; likely foundation adapter responsibility.
- `core_structure_building`: observed backend binding evidence.
- `model_fit_or_inference`: observed backend binding evidence.
- `output_assignment`: observed backend binding evidence.
- `artifact_export`: observed backend evidence plus adapter filesystem policy required.
- `final_validation`: harness-added, requires follow-up.
- `visualization`: observed backend binding evidence, conditional.

Environment profile candidate: `banksy_cpu_python_blueprint`.

Parameter mapping status: drafted but not production-frozen; exact numeric mappings require fixture validation.

Input/output mapping status: drafted; AnnData plus coordinate mapping in, BioHarness labels/table/provenance out.

Artifact mapping status: drafted; H5AD/figures/logs require controlled output directory and naming.

Failure translation status: drafted for missing coordinates, non-finite matrix, dense-memory risk, optional mclust backend missing, and output-contract failures.

Filesystem policy status: planned only; wrapper must enforce approved working/output/temp directories before implementation.

## Rewrite Decision Summary

Interface standardization decision:

- wrap I/O;
- normalize semantic parameters;
- standardize label namespace, artifacts, logs, provenance, and failure translation;
- redesign wrapper entrypoint for BioHarness use.

Algorithmic rewrite decision:

- do not rewrite BANKSY algorithm;
- do not touch neighborhood construction, matrix generation, dimensionality reduction, clustering, or label assignment semantics.

Final rewrite level: `strong_wrapper`

Algorithm core touched: `false`

Fidelity checks required:

- not required for the blueprint strong wrapper unless algorithm core or compatibility rewrite is introduced;
- required before any algorithmic or compatibility rewrite.

Blocking issues:

- no smoke fixture;
- no environment probe;
- no validated semantic-to-backend numeric mappings;
- optional mclust/R support not proven.

## Validation And Runtime Summary

Fixture/example status:

- official examples exist, but external data dependencies mean they are not BioHarness smoke fixtures.

Installability status:

- planned, not executed.

Runnable example status:

- planned, not executed.

Observable I/O status:

- planned, not executed.

Smoke test plan:

- minimal AnnData with expression and coordinates;
- one non-null label per observation;
- method provenance emitted;
- no writes outside approved output directory.

Contract test plan:

- input object and coordinate checks;
- output label/table/provenance checks;
- path-safety checks.

Visual sanity plan:

- optional spatial label plots;
- check existence and nonmissing labels;
- explicitly not biological correctness.

Fidelity test plan:

- only required for rewrite/compatibility changes or regression comparisons;
- compare output schema, domain count, no-empty-domain behavior, label permutation-aware agreement, ARI/NMI/AMI where meaningful, and figure sanity.

Runtime measurement status:

- not measured; wall time, peak memory, device, and fixture size are all `not_observed`.

## Risks And Blockers

Scientific risk:

- overclaiming BANKSY as universally best or biologically correct.

Engineering risk:

- dense conversion memory risk;
- output side effects;
- missing harness final validation implementation.

Environment risk:

- Python/numpy compatibility constraints;
- optional rpy2/R path for mclust.

Reproducibility risk:

- stochastic clustering and UMAP behavior;
- label permutation during comparisons.

Licensing risk:

- GPL-3.0 packaging/distribution implications unresolved.

Agent misuse risk:

- exposing backend internals in Layer3;
- choosing BANKSY outside hard constraints;
- treating visual sanity as biological correctness;
- assuming environment/capsule support;
- assuming implementation exists.

Blockers before MVP implementation:

- approve or create minimal smoke fixture;
- run install/import environment probe;
- decide shared versus dedicated capsule;
- validate semantic-to-backend parameter mappings;
- define final output table/provenance schema;
- review GPL-3.0 packaging implications.

## Acceptance Checklist

- [ ] Layer3 surface inherits from or references a canonical spatial domain identification surface.
- [ ] Layer3 contains no raw backend function names.
- [ ] Layer3 contains only semantic agent-visible parameters.
- [ ] Layer3 preserves hard constraints from Layer2.
- [ ] Every Layer3 stage has a Layer4 binding or is explicitly marked harness-added / requires_followup.
- [ ] Layer4 contains concrete backend evidence references.
- [ ] Layer4 has integration mode.
- [ ] Layer4 has parameter mapping policy.
- [ ] Layer4 has input conversion and output mapping.
- [ ] Layer4 has filesystem policy.
- [ ] Environment plan is separate from rewrite decision.
- [ ] Rewrite decision separates interface standardization from algorithmic rewriting.
- [ ] Algorithmic rewrite is avoided or explicitly justified.
- [ ] Validation distinguishes smoke, contract, visual sanity, and fidelity checks.
- [ ] Visual sanity is not treated as biological correctness.
- [ ] Random seed / reproducibility / label permutation are considered.
- [ ] Risk register exists.
- [ ] Decision log exists.
- [ ] Unknowns and blockers are explicit.
- [ ] No production support is claimed unless implemented evidence exists.

## Reviewer Questions

- Is the selected `strong_wrapper` integration mode stable enough for the first MVP implementation attempt?
- Is `banksy_cpu_python_blueprint` the right environment profile candidate, or should this wait for a general scverse compatibility probe?
- Should optional mclust/R support be excluded from the MVP surface entirely?
- Are the proposed output mappings sufficient for downstream BioHarness adapters?
- What minimal AnnData fixture should be used for the first smoke test?
- Which semantic parameter mappings must be resolved before implementation?
- Does GPL-3.0 affect the intended packaging or deployment model?
- Which fields must be promoted into schemas before this can become a formal contract instance?

