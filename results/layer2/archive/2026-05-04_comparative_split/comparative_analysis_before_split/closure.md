# Comparative Analysis Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package; ready for formal rendering
or representative Layer 3/4 engineering audit.

This closure does not freeze a default method, Layer 3 execution surface,
backend adapter boundary, callable signature, environment capsule, rewrite
decision, or runtime-support status.

## Authority Artifacts

- Topic scope:
  `/tmp/bioharness_layer2_subagents/output/comparative_analysis/topic_scope.md`
- Field registry:
  `/tmp/bioharness_layer2_subagents/output/comparative_analysis/field_registry.json`
- Structured method table:
  `/tmp/bioharness_layer2_subagents/output/comparative_analysis/method_table.json`
- CSV method table:
  `/tmp/bioharness_layer2_subagents/output/comparative_analysis/method_table.csv`
- Human-readable method table:
  `/tmp/bioharness_layer2_subagents/output/comparative_analysis/method_table.md`
- Review and decision tree:
  `/tmp/bioharness_layer2_subagents/output/comparative_analysis/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Comparative Analysis`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, sources, PubMed queries, inclusion/exclusion rules, and candidate freeze. |
| Frozen candidate set | Pass | Nine rows: `C-SIDE`, `Niche-DE`, `SPADE`, `SpatialGEE`, `STcompare`, `TissueMosaic`, `SPaSE`, `SpaLinker`, `SpatialSPM`. |
| Field schema | Pass | Shared fields plus six topic-specific decision fields in `field_registry.json`. |
| Method table artifacts | Pass | JSON is the source table; CSV and Markdown are generated from the same JSON. |
| Review / logic pass | Pass with caveats | A 2026 spatial-DE comparative study supports only one branch; no independent benchmark ranks all nine methods. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no global ranking. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, callable, and default-method claims. |

## Current Layer 2 Facts

- Candidate rows: 9.
- Fields per method row: 22.
- Code access: 7 available, 2 unclear.
- Compute labels: 7 CPU, 2 Optional GPU, 0 Required GPU.
- Memory burden: 9 unclear.
- Scale sensitivity: 4 medium, 1 high, 4 unclear.
- Structural alignment need: 5 none, 2 helpful, 2 required.
- Evidence sources: 7 method paper, 1 benchmark/review, 1 mixed.
- PMID coverage: 8 with PubMed PMIDs, 1 preprint-only row without PMID.

## Caveats Carried Into Later Work

- `STcompare` is preprint-supported in the frozen input and should not be
  treated as peer-reviewed evidence without later update.
- `SpatialGEE` has direct comparative-study support for a spatial-DE
  statistical-method branch, but that evidence does not rank or validate the
  other branches.
- `SPaSE` and `SpaLinker` have verified PubMed/DOI identities but unclear code
  access in this bounded pass.
- `TissueMosaic` and `SpaLinker` may require cohort-scale or representation
  learning scrutiny; their learned or transferred features are not equivalent
  to transparent gene-level DE tests.
- `C-SIDE` and `Niche-DE` depend on reliable cell-type, annotation, or niche
  definitions; reference and annotation errors can become false comparative
  signal.
- `STcompare` and `SpatialSPM` depend on structural comparability or
  registration assumptions that can create or hide apparent spatial pattern
  differences.
- Resource, memory, and scale labels are conservative Layer 2 cues, not
  BioHarness execution benchmarks.

## Representative Layer 3/4 Audit Batch

The audit batch below is representative coverage for engineering review. It is
not a default-method list and does not imply runtime support.

| Method | Why include in audit batch |
| --- | --- |
| `C-SIDE` | Cell-type-specific differential expression route with established public code. |
| `Niche-DE` | Niche-conditioned differential expression route. |
| `SpatialGEE` | Benchmark-supported spatial-DE statistical route. |
| `SPADE` | Coordinate-space spatial pattern plus DE route. |
| `SpatialSPM` | Registered image-matrix statistical mapping route. |
| `TissueMosaic` | Cross-sample learned tissue motif route with optional GPU/resource scrutiny. |
| `SPaSE` | Pathology-score route with code-access uncertainty. |
| `SpaLinker` | Bulk-linked phenotype-spatial feature route with code-access uncertainty. |

`STcompare` may be audited as an additional structurally matched preprint route
if later engineering review explicitly wants preprint/code coverage. It is kept
out of the first representative batch only to avoid making a preprint row look
like a frozen core method.

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Comparative Analysis` Layer 2 is complete as a working/evidence package for
method-selection support. It is ready for later formal rendering or
representative Layer 3/4 audit, but it does not imply default methods, runtime
surfaces, package entrypoints, environment capsules, wrappers, rewrites, or
adapter implementations.
