# Spatial Gene Prediction Layer 2

## Status

Layer served: `Layer 2`

Current status: complete working/evidence package for method selection.

This directory contains the Layer 2 method-selection evidence package for the
spatial transcriptomics `Spatial Gene Prediction` analysis problem. It supports
conditional method selection within this topic. It is not a Layer 3 execution
surface, Layer 4 adapter implementation, environment capsule, default-method
policy, or runtime-support claim.

## Topic Boundary

This package covers methods whose primary reusable contribution is predicting,
enhancing, reconstructing, imputing, or uncertainty-calibrating spatial gene
expression.

The candidate set is frozen to 11 Layer 1 methods:

`GHIST`, `Hist2ST`, `SpaGE`, `SpatialScope`, `STASCAN`, `stPlus`,
`THItoGene`, `TISSUE`, `FmH2ST`, `stAI`, `OmiCLIP`.

`STASCAN` is retained as a boundary method because the current frozen input
places it in the prediction branch, but its main output is a fine-resolution
cell-distribution map rather than a conventional predicted gene-expression
matrix.

## Artifacts

| Artifact | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, retrieval record, inclusion/exclusion rules, and final candidate freeze. |
| `field_registry.json` | Shared and topic-specific Layer 2 field definitions and controlled values. |
| `method_table.json` | Structured method-selection table and source for rendered table artifacts. |
| `method_table.csv` | Spreadsheet-friendly method-selection table generated from JSON. |
| `method_table.md` | Human-readable method-selection table generated from JSON. |
| `review_decision_tree.md` | Review pass, logic review, decision tree, coverage ledger, and evidence spot-checks. |
| `closure.md` | Gate check, Layer 2 facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

## Current Closure

The closure decision is that this Layer 2 topic is complete enough to serve as
a working/evidence basis for later formal rendering or representative Layer 3/4
engineering audit. No runtime execution support is implied.
