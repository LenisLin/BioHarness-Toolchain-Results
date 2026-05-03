# Cell Type Inference Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package with scientific caveats.

This closure does not freeze a default method, Layer 3 execution surface, backend adapter boundary, callable signature, environment capsule, rewrite decision, or runtime-support status.

## Authority Artifacts

- Topic scope: `/tmp/bioharness_layer2_subagents/output/cell_type_inference/topic_scope.md`
- Field registry: `/tmp/bioharness_layer2_subagents/output/cell_type_inference/field_registry.json`
- Structured method table: `/tmp/bioharness_layer2_subagents/output/cell_type_inference/method_table.json`
- CSV method table: `/tmp/bioharness_layer2_subagents/output/cell_type_inference/method_table.csv`
- Human-readable method table: `/tmp/bioharness_layer2_subagents/output/cell_type_inference/method_table.md`
- Review and decision tree: `/tmp/bioharness_layer2_subagents/output/cell_type_inference/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Cell Type Inference`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, sources, queries, inclusion/exclusion rules, and candidate freeze. |
| Frozen candidate set | Pass | 35 rows match the updated candidate freeze after a human scientific exclusion decision. |
| Field schema | Pass | Shared fields plus six topic-specific decision fields are defined in `field_registry.json`. |
| Method table artifacts | Pass | JSON, CSV, and Markdown tables are rendered from the same structured candidate rows. |
| Review / benchmark pass | Pass with caveats | PubMed screening found benchmark and review support, but no peer-reviewed all-35-method benchmark suitable for global ranking. |
| Decision tree | Pass with caveats | Conditional and branch-local only; no default-method or runtime-support claims. |
| Layer boundary | Pass | Artifacts avoid execution surfaces, adapters, environment capsules, callable signatures, and implementation status. |

## Current Layer 2 Facts

- Candidate rows: 35.
- Fields per method row: 22.
- Code access: 15 available, 20 unclear.
- Compute labels: 21 CPU, 14 Optional GPU, 0 Required GPU.
- Benchmark coverage labels: 6 independent benchmark includes, 10 review-only coverage, 19 method-paper/local benchmark only, 0 verification gap.
- Reference-assisted rows dominate the frozen set, but reference-free, marker-gene, histology-aware, placement/reconstruction, and specialized boundary branches are all represented.

## Caveats Carried Into Later Work

- No suitable peer-reviewed benchmark was found that jointly evaluates all 35 retained candidates across their incompatible output targets.
- Benchmark-covered classic deconvolution methods should not be ranked against cell-placement, histology-aware, gene-expression deconvolution, or specialized state-detection methods as if they answer the same question.
- Reference-assisted methods require scrutiny for reference mismatch, label granularity, batch effects, and rare-cell sensitivity.
- Reference-free methods require independent annotation checks because components or topics may not equal canonical cell types.
- Image/histology-assisted methods require image-quality and morphology-bias checks.
- High-resolution placement or reconstruction methods can overstate precision relative to the platform resolution.
- Many code-link, memory, and scale fields remain `unclear` because bounded retrieval did not verify stronger claims.

## Representative Layer 3/4 Audit Batch

The following representative audit batch spans major branches. It is not a default-method list and does not imply runtime support.

| Method | Why include in audit batch |
| --- | --- |
| `RCTD` | Benchmark-covered probabilistic reference-assisted spot deconvolution. |
| `CARD` | CPU spatially informed reference-assisted deconvolution. |
| `cell2location` | Fine-grained Bayesian abundance mapping with optional GPU/deep probabilistic ecosystem implications. |
| `STdeconvolve` | Reference-free topic-model deconvolution branch. |
| `Starfysh` | Histology-aware reference-free generative branch. |
| `CytoSPACE` | High-resolution cell-placement branch. |
| `PANDA` | Boundary branch for joint cell-type and gene-expression deconvolution. |

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Cell Type Inference` Layer 2 is complete as a working/evidence package for method-selection support. It is ready for later formal rendering or representative Layer 3/4 engineering audit, with unresolved code/resource metadata and benchmark limitations carried forward explicitly. It does not imply default methods, runtime surfaces, package entrypoints, environment capsules, wrappers, rewrites, or adapter implementations.
