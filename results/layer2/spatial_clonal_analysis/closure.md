# Spatial Clonal Analysis Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package; ready for formal rendering
or representative Layer 3/4 engineering audit.

This closure does not freeze a universal method, Layer 3 execution surface,
backend adapter boundary, callable interface, environment profile, rewrite
decision, or execution-support status.

## Authority Artifacts

- Topic scope:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_clonal_analysis/topic_scope.md`
- Field registry:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_clonal_analysis/field_registry.json`
- CSV method table:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_clonal_analysis/method_table.csv`
- Human-readable method table:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_clonal_analysis/method_table.md`
- Structured method table:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_clonal_analysis/method_table.json`
- Review and decision tree:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_clonal_analysis/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Spatial Clonal Analysis`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, sources, queries, inclusion/exclusion rules, and candidate freeze. |
| Frozen candidate set | Pass | Five rows: `CalicoST`, `Clonalscope`, `STARCH`, `Tumoroscope`, `SlideCNA`. |
| Field schema | Pass | Shared fields plus six topic-specific decision fields in `field_registry.json`. |
| Method table artifacts | Pass | CSV, Markdown, and JSON tables represent the same five candidates and field model. |
| Review / logic pass | Pass with caveats | No dedicated five-method independent benchmark was found; decision tree uses explicit logic review plus method-paper evidence. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no universal ranking. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, and universal-method claims. |

## Current Layer 2 Facts

- Candidate rows: 5.
- Fields per method row: 22.
- Code access: 5 available.
- Compute labels: 5 CPU.
- Clonal signal basis: 1 allele-specific CNA, 1 copy-number profile, 1 total
  CNA from expression, 1 somatic point mutation + expression, 1 spatial CNA
  from sparse expression.
- Matched data dependence: 1 ST only, 1 SRT + allele counts, 1 optional matched
  DNA, 1 ST + matched DNA + pathology image, 1 ST + reference spots.
- Spot mixture handling: 1 assumes dominant clone per spot, 1 models tumor
  admixture, 1 deconvolves clone proportions, 1 bins sparse spots, 1 supports
  single-cell and ST.
- Memory burden: 5 unclear.
- Scale sensitivity: 4 medium, 1 unclear.

## Caveats Carried Into Later Work

- No independent benchmark was found that jointly compares and ranks all five
  frozen spatial clonal-analysis methods.
- Method-paper validations use different target signals: allele-specific CNA,
  total CNA, point mutations, copy-number-profile subclones, and sparse
  Slide-seq-like CNA. These outputs should not be treated as interchangeable.
- `Tumoroscope` has strong matched-input dependence and should not be treated
  as a pure ST-only method.
- `STARCH` remains useful as a direct historical ST clone/CNA method, but it is
  not allele-specific and should not be promoted beyond its total-CNA evidence.
- `SlideCNA` directly supports spatial CNA recovery in sparse Slide-seq-like
  data; subclone interpretations require biological and genomic sanity checks.
- Resource and scale fields remain conservative because public method evidence
  is not equivalent to BioHarness runtime validation.

## Representative Layer 3/4 Audit Batch

All five frozen candidates are recommended as the first representative audit
batch because the topic is small and each method covers a distinct selection
branch:

| Method | Why include in audit batch |
| --- | --- |
| `CalicoST` | Allele-specific CNA and phylogeography branch. |
| `Clonalscope` | Copy-number-profile subclone detection branch spanning spatial and single-cell tumor omics. |
| `STARCH` | ST-only total-CNA spatial clone baseline branch. |
| `Tumoroscope` | Matched DNA, pathology-image, and ST mutation-read clone deconvolution branch. |
| `SlideCNA` | Sparse high-resolution Slide-seq-like spatial CNA branch. |

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Spatial Clonal Analysis` Layer 2 is complete as a working/evidence package for
method-selection support. It is ready for later formal rendering or
representative Layer 3/4 audit, but it does not imply universal methods, runtime
surfaces, package entrypoints, environment profiles, wrappers, rewrites, or
adapter implementations.


Allele-specific CNA, total CNA, point-mutation clone deconvolution, sparse spatial CNA, and copy-number-profile subclones are not interchangeable.
