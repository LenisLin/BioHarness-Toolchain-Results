# Segmentation Layer 2

## Status

Layer served: `Layer 2`

Current status: reprocessed 11-row working/evidence package for method selection.

This directory contains the Layer 2 method-selection evidence package for the
spatial transcriptomics `Segmentation` analysis problem. It supports conditional
method selection within this topic. It is not a Layer 3 execution surface, Layer
4 adapter implementation, environment profile, universal method policy, or
execution-support claim.

## Topic Boundary

This package covers the current Layer 1 Segmentation candidate set, including
cell segmentation / transcript assignment methods, a histology image-processing
support boundary row, transcript spot-detection methods retained under the
segmentation topic, and a joint image segmentation/classification boundary row.

The candidate set is frozen to eleven Layer 1 methods:

`Baysor`, `Bering`, `SCS`, `segger`, `UCS`, `BIDCell`, `VistoSeg`, `STCellbin`, `Spotiflow`, `Piscis`, `CelloType`.

`VistoSeg` is retained as an image-processing support row. `Spotiflow` and
`Piscis` are retained as upstream transcript spot-detection rows. `CelloType` is
retained as a joint image segmentation/classification row. These boundary rows
should not be treated as direct substitutes for transcript-to-cell assignment
methods.

## Artifacts

| Artifact | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, retrieval record, inclusion/exclusion rules, and final candidate freeze. |
| `field_registry.json` | Shared and topic-specific Layer 2 field definitions and controlled values. |
| `method_table.json` | Structured method-selection table built first as the source table. |
| `method_table.csv` | Spreadsheet-friendly method-selection table generated from JSON with a CSV writer. |
| `method_table.md` | Human-readable method-selection table rendered from JSON. |
| `review_decision_tree.md` | Review pass, logic review, decision tree, coverage ledger, and evidence spot-checks. |
| `closure.md` | Gate check, Layer 2 facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

## Current Closure

The closure decision is that this Layer 2 topic has been reprocessed against the
current Layer 1 registry and is complete enough to serve as a working/evidence
basis for later formal rendering or representative Layer 3/4 engineering audit.
No execution support is implied.
