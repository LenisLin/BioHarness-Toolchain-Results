# Domain / Clustering Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package for the frozen `Domain / Clustering` candidate set.

This closure does not freeze a default method, Layer 3 execution surface, backend adapter boundary, callable signature, environment capsule, rewrite decision, or runtime-support status.

## Authority Artifacts

- Topic scope: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/domain_clustering/topic_scope.md`
- Field registry: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/domain_clustering/field_registry.json`
- Structured method table: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/domain_clustering/method_table.json`
- CSV method table: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/domain_clustering/method_table.csv`
- Human-readable method table: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/domain_clustering/method_table.md`
- Review and decision tree: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/domain_clustering/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Domain / Clustering`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, local sources, brief benchmark/review screening, and candidate freeze. |
| Frozen candidate set | Pass | 37 rows retained from `historical topic-subagent staging input; current candidate-freeze authority is /mnt/NAS_21T/ProjectData/BioHarness/results/layer2/domain_clustering/topic_scope.md`. |
| Field schema | Pass | 16 shared fields plus 6 topic-specific fields in `field_registry.json`. |
| Method table artifacts | Pass | JSON, CSV, and Markdown are generated from the same row model. |
| Review / logic pass | Pass with caveats | Relevant domain benchmarks exist, but no all-candidate benchmark was found. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no global ranking. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, callable, environment, and default-method claims. |

## Current Layer 2 Facts

- Candidate rows: `37`.
- Fields per method row: `22`.
- Code access counts: {'available': 28, 'unclear': 9}.
- Compute labels: {'Optional GPU': 20, 'CPU': 17}.
- Modality branch counts: {'expression + spatial coordinates branch': 27, 'expression + image/morphology branch': 7, 'marker/semantic annotation branch': 1, 'reference-informed branch': 1, 'spatial multi-omics integration': 1}.
- Benchmark support cue is branch-local and derived from frozen registry evidence plus brief screening.

## Caveats Carried Into Later Work

- No suitable benchmark was found that covers and ranks all 37 frozen candidates.
- Several rows have pending or unclear code access in the frozen registry and require manual review before engineering audit.
- Resource, memory, and scale labels are coarse Layer 2 triage cues; they are not BioHarness runtime validation.
- Image-guided, reference-informed, multi-omics, and foundation-model branches need dataset-specific bias checks before use.
- Topic-model and semantic-annotation outputs should not be collapsed into ordinary cluster labels without manual interpretation.
- Multi-slice and integration-aware methods may optimize alignment or representation quality as well as domain labels; the endpoint must be checked branch-locally.

## Representative Layer 3/4 Audit Batch

This representative audit batch is for later engineering review only. It is not a runtime-support statement and not a default-method list.

| Branch | Representative candidates | Why include |
| --- | --- | --- |
| Bayesian/statistical spatial clustering | `BayesSpace`, `BASS` | Mature statistical baselines and benchmark-covered branches. |
| Graph/neural spatial domains | `STAGATE`, `GraphST`, `SEDR` | Core graph-representation family used in benchmark comparisons. |
| Scalable neighborhood/CPU branch | `BANKSY`, `SpatialLeiden`, `MNMST` | CPU-oriented or scalable neighborhood/topology routes. |
| Image-informed branch | `SpaGCN`, `SiGra`, `iIMPACT` | Tests morphology/image-aware assumptions. |
| Multi-slice/alignment branch | `PRECAST`, `MENDER`, `SpaDo` | Covers cross-slice and batch-aware domain comparison. |
| Interpretability/semantic branch | `SpaTopic`, `STAMP`, `Pianno` | Covers topic, module, marker, and semantic outputs. |
| Newer broad representation branch | `Novae`, `SpatialGlue`, `IRIS` | Captures high-priority newer candidates requiring careful audit. |

Audit outputs must remain separate from this Layer 2 package: `MethodEngineeringAudit`, Layer 3 `ExecutionSurfaceSpec`, Layer 4 `BackendAdapterSpec`, `RewriteDecision`, `EnvironmentProfile`, and validation requirements.

## Closure Decision

`Domain / Clustering` Layer 2 is complete as a working/evidence package for method-selection support. It is ready for later formal rendering or representative Layer 3/4 audit, while preserving open questions about execution surfaces, adapter boundaries, environment capsules, runtime support, and default-method policy.
