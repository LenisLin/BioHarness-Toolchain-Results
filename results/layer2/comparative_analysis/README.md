# Comparative Analysis Layer 2

## Status

Layer served: `Layer 2`

Current status: complete working/evidence package for method selection.

This directory contains the Layer 2 method-selection evidence package for the
spatial transcriptomics `Comparative Analysis` analysis problem. It supports
conditional method selection within this topic. It is not a Layer 3 execution
surface, Layer 4 adapter implementation, environment capsule, default-method
policy, or runtime-support claim.

## Topic Boundary

This package covers methods for comparing spatial expression, spatial patterns,
cell-type-specific expression, niche-conditioned expression, pathology scores,
spatial microenvironment features, or registered gene-expression pattern images
across conditions, samples, cohorts, or tissue states.

The candidate set is frozen to nine Layer 1 methods:

`C-SIDE`, `Niche-DE`, `SPADE`, `SpatialGEE`, `STcompare`, `TissueMosaic`,
`SPaSE`, `SpaLinker`, `SpatialSPM`.

`STcompare` remains preprint-supported, and `SPaSE` plus `SpaLinker` retain
code-access uncertainty in this bounded pass. These caveats are carried through
the table, review, and closure artifacts.

## Artifacts

| Artifact | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, retrieval record, inclusion/exclusion rules, and final candidate freeze. |
| `field_registry.json` | Shared and topic-specific Layer 2 field definitions and controlled values. |
| `method_table.json` | Structured method-selection table built first from the frozen candidate set. |
| `method_table.csv` | Spreadsheet-friendly method-selection table generated from `method_table.json`. |
| `method_table.md` | Human-readable method-selection table generated from `method_table.json`. |
| `review_decision_tree.md` | Benchmark/review screening, logic review, decision tree, coverage ledger, and evidence spot-checks. |
| `closure.md` | Gate check, Layer 2 facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

## Current Closure

The closure decision is that this Layer 2 topic is complete enough to serve as
a working/evidence basis for later formal rendering or representative Layer 3/4
engineering audit. No runtime execution support is implied.
