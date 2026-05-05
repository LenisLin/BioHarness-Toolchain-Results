# Spatially Variable Gene Detection Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package; ready for formal rendering or representative Layer 3/4 engineering audit.

This closure does not freeze a default method, Layer 3 execution surface, backend adapter boundary, callable signature, environment capsule, rewrite decision, or runtime-support status.

## Authority Artifacts

- Topic scope: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatially_variable_gene_detection/topic_scope.md`
- Field registry: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatially_variable_gene_detection/field_registry.json`
- CSV method table: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatially_variable_gene_detection/method_table.csv`
- Human-readable method table: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatially_variable_gene_detection/method_table.md`
- Structured method table: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatially_variable_gene_detection/method_table.json`
- Review and decision tree: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatially_variable_gene_detection/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Spatially Variable Gene Detection`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, sources, queries, inclusion/exclusion rules, and candidate freeze. |
| Frozen candidate set | Pass | 14 rows match the frozen input JSON. |
| Field schema | Pass | Shared fields plus six topic-specific decision fields are defined in `field_registry.json`. |
| Method table artifacts | Pass | JSON is the source; CSV and Markdown are generated from the same JSON. |
| Review / benchmark pass | Pass with caveats | Broad overall SVG and ctSVG-specific benchmarks were retrieved; no single benchmark covers all 14 methods across all branches. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no global ranking. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, callable-signature, and default-method claims. |

## Current Layer 2 Facts

- Candidate rows: 14.
- Fields per method row: 22.
- Branches represented: overall SVG detection; cell-type-specific SVG detection; cell-type-conditional SVG detection; gene-centric tissue pattern mining; SVG clustering / feature selection.
- Code access from frozen input: 9 available, 5 unclear.
- Compute labels: 14 CPU; no GPU requirement is claimed.
- Benchmark/review support: broad SVG benchmarks retrieved for the overall branch; a 2026 ctSVG benchmark retrieved for the cell-type-specific branch; boundary branches rely mainly on method-paper evidence and logic review.
- Memory burden: 14 unclear.
- Scale sensitivity: 4 low, 3 medium, 1 high, 6 unclear.

## Caveats Carried Into Later Work

- The retrieved benchmarks support branch-local logic, not a universal ranking of all methods.
- Overall SVG, cell-type-specific SVG, conditional cell-type-landscape correlation, gene-centric tissue-pattern mining, and SVG clustering are related but not interchangeable tasks.
- Many resource, memory, and scale labels remain conservative because method-paper and benchmark evidence are not equivalent to BioHarness runtime validation.
- Code links are not invented. Rows without a primary link in the frozen input remain `unclear` even if a paper may contain code availability elsewhere.
- Cell type-specific and cell-type-adjusted branches inherit bias from cell type labels, deconvolution, reference composition, or cell type-effect modeling.
- Broad SVG benchmarks report calibration and metric dependence; downstream biological interpretation can change substantially with method choice.

## Representative Layer 3/4 Audit Batch

The following representative audit batch covers the main scientific and engineering branches. This is not a default-method list and does not imply runtime support.

| Method | Why include in audit batch |
| --- | --- |
| `SPARK-X` | Scalable overall SVG branch with strong broad-benchmark signal. |
| `SpatialDE` | Canonical Gaussian-process baseline branch and literature-comparability anchor. |
| `nnSVG` | Scalable nearest-neighbor GP branch. |
| `HEARTSVG` | Large-scale distribution-free overall SVG branch with unclear code access to resolve. |
| `Celina` | Cell-type-specific SVG branch with code link and 2026 benchmark support. |
| `ctSVG` | Cell-type-specific conservative false-positive-control branch with code-access gap to resolve. |
| `InSituCor` | Cell-type-conditional spatial-correlation boundary branch. |
| `SPACE-SVG` | Cell-type-adjusted SVG clustering / feature-selection boundary branch. |
| `STMiner` | Gene-centric tissue-pattern mining boundary branch. |

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Spatially Variable Gene Detection` Layer 2 is complete as a working/evidence package for method-selection support. It is ready for later formal rendering or representative Layer 3/4 audit, but it does not imply default methods, runtime surfaces, package entrypoints, environment capsules, wrappers, rewrites, or adapter implementations.
