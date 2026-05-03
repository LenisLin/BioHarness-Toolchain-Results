# Spatially Variable Gene Detection Layer 2

## Status

Layer served: `Layer 2`

Current status: complete working/evidence package for method selection.

This directory contains the Layer 2 method-selection evidence package for the spatial transcriptomics `Spatially Variable Gene Detection` analysis problem. It supports conditional method selection within this topic. It is not a Layer 3 execution surface, Layer 4 adapter implementation, environment capsule, default-method policy, or runtime-support claim.

## Topic Boundary

This package covers methods whose primary reusable contribution is detection, ranking, interpretation, or branch-specific discovery of spatially variable genes or gene-level spatial patterns in spatial transcriptomics data.

The candidate set is frozen to 14 Layer 1 methods:

`Celina`, `ctSVG`, `STANCE`, `STMiner`, `BSP`, `HEARTSVG`, `nnSVG`, `SOMDE`, `SPARK`, `SPARK-X`, `SpatialDE`, `spVC`, `InSituCor`, `SPACE-SVG`.

`STMiner`, `InSituCor`, and `SPACE-SVG` are retained as boundary branches because the frozen registry places gene-centric pattern mining, cell-type-conditional correlation, and cell-type-adjusted SVG clustering inside this analysis problem. Their boundary status is carried as a caveat throughout the package.

## Artifacts

| Artifact | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, retrieval record, inclusion/exclusion rules, and final candidate freeze. |
| `field_registry.json` | Shared and topic-specific Layer 2 field definitions and controlled values. |
| `method_table.csv` | Spreadsheet-friendly method-selection table generated from JSON with a CSV writer. |
| `method_table.md` | Human-readable method-selection table rendered from JSON. |
| `method_table.json` | Structured method-selection table and source for CSV/Markdown rendering. |
| `review_decision_tree.md` | Benchmark/review screening, evidence spot-checks, conditional decision tree, and coverage ledger. |
| `closure.md` | Gate check, Layer 2 facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

## Current Closure

The closure decision is that this Layer 2 topic is complete enough to serve as a working/evidence basis for later formal rendering or representative Layer 3/4 engineering audit. No runtime execution support is implied.
