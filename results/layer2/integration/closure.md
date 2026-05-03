# Integration Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package; ready for formal rendering or representative Layer 3/4 engineering audit.

This closure does not freeze a default method, Layer 3 execution surface, backend adapter boundary, callable signature, environment capsule, rewrite decision, or runtime-support status.

## Authority Artifacts

- Topic scope: `/tmp/bioharness_layer2_subagents/output/integration/topic_scope.md`
- Field registry: `/tmp/bioharness_layer2_subagents/output/integration/field_registry.json`
- CSV method table: `/tmp/bioharness_layer2_subagents/output/integration/method_table.csv`
- Human-readable method table: `/tmp/bioharness_layer2_subagents/output/integration/method_table.md`
- Structured method table: `/tmp/bioharness_layer2_subagents/output/integration/method_table.json`
- Review and decision tree: `/tmp/bioharness_layer2_subagents/output/integration/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Integration`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, sources, queries, inclusion/exclusion rules, and candidate freeze. |
| Frozen candidate set | Pass | Eighteen rows from the frozen input JSON; no methods added. |
| Field schema | Pass | Shared fields plus four topic-specific decision fields in `field_registry.json`. |
| Method table artifacts | Pass | JSON was built first; CSV and Markdown were generated from `method_table.json`. |
| Review / benchmark pass | Pass with caveats | PubMed found relevant benchmark records, but they support branch-local logic only. |
| Decision tree | Pass with caveats | Output-first, conditional branch-local method selection only; no global ranking. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, callable-signature, and default-method claims. |

## Current Layer 2 Facts

- Candidate rows: 18.
- Fields per method row: 20.
- Code access: 18 available, 0 unclear, 0 unavailable.
- Compute labels: 7 CPU, 11 Optional GPU, 0 Required GPU.
- Integration targets represented: search-and-match mapping, spatiotemporal alignment, pairwise slice alignment, partial overlap alignment, coordinate alignment, heterogeneous slice alignment, stitching, latent embedding integration, 3D reconstruction, 2D/3D multi-slice integration, multimodal modeling, and batch correction.
- Scale sensitivity: 6 high, 11 medium, 1 unclear.
- Benchmark/review screening: relevant PubMed benchmark records were found for alignment and multi-slice integration, but not for a universal ranking across all Integration branches.

## Caveats Carried Into Later Work

- The frozen set is heterogeneous. A single benchmark rank would collapse distinct tasks such as coordinate warping, latent integration, 3D reconstruction, multimodal modeling, and count batch correction.
- Code links are trace metadata only; public repositories do not imply runtime support, adapter availability, callable signatures, or environment capsules.
- Resource and scale labels are conservative Layer 2 cues, not measured BioHarness runtime results.
- Graph and contrastive representation methods can remove biological condition signal or entangle integration with clustering/domain objectives.
- Geometric alignment methods can over-align noncorresponding tissues or distort coordinates if tissue morphology differs.
- 3D and automated Integration methods need extra audit for model opacity, data-size behavior, and validation criteria.
- Multimodal Integration can be biased by modality imbalance, missing modalities, or modality-specific noise.

## Representative Layer 3/4 Audit Batch

This audit batch is representative coverage for later engineering review. It is not runtime support, not a default-method list, and not an adapter-availability claim.

| Method | Why include in representative audit batch |
| --- | --- |
| `PASTE` | Canonical CPU optimal-transport baseline for comparable slice alignment. |
| `PASTE2` | Partial-overlap alignment branch with available code link. |
| `STalign` | Diffeomorphic coordinate-mapping branch with available code link. |
| `STAligner` | Cross-condition/cross-technology graph-attention integration branch with available code link. |
| `GraphST` | Graph contrastive representation branch and cross-topic integration/clustering bridge. |
| `CAST` | High-resolution search-and-match branch with scale-sensitivity caveat. |
| `SANTO` | Coarse-to-fine stitching branch highlighted by alignment benchmarks. |
| `SPACEL` | 3D tissue-architecture stacking branch with available code link. |
| `MISO` | Multimodal spatial omics branch. |
| `Crescendo` | Single-cell spatial count batch-correction branch. |

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Integration` Layer 2 is complete as a working/evidence package for method-selection support. It is ready for later formal rendering or representative Layer 3/4 audit, but it does not imply default methods, runtime surfaces, package entrypoints, environment capsules, wrappers, rewrites, or adapter implementations.
