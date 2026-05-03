# Normalization / Feature Selection Layer 2

## Status

Layer served: `Layer 2`

Current status: complete working/evidence package for method selection.

This directory contains the Layer 2 method-selection evidence package for the
spatial transcriptomics `Normalization / Feature Selection` analysis problem.
It supports conditional method selection within this topic. It is not a Layer 3
execution surface, Layer 4 adapter implementation, environment capsule,
default-method policy, or runtime-support claim.

## Topic Boundary

This package covers methods whose primary reusable contribution is either:

- spatial-aware normalization of measured spatial transcriptomics expression;
- feature or gene-panel selection for targeted spatial transcriptomics assays.

The candidate set is frozen to two Layer 1 methods:

`SpaNorm`, `scGIST`.

These two methods occupy different branches. `SpaNorm` is a post-capture
normalization method. `scGIST` is a pre-assay or assay-design feature-selection
method for targeted panels. Their inclusion in one analysis problem does not
make them interchangeable.

## Artifacts

| Artifact | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, retrieval record, inclusion/exclusion rules, and final candidate freeze. |
| `field_registry.json` | Shared and topic-specific Layer 2 field definitions and controlled values. |
| `method_table.csv` | Spreadsheet-friendly method-selection table rendered from JSON. |
| `method_table.md` | Human-readable method-selection table rendered from JSON. |
| `method_table.json` | Structured method-selection table and source for table rendering. |
| `review_decision_tree.md` | Review pass, logic review, decision tree, coverage ledger, and evidence spot-checks. |
| `closure.md` | Gate check, Layer 2 facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

## Current Closure

The closure decision is that this Layer 2 topic is complete enough to serve as
a working/evidence basis for later formal rendering or representative Layer 3/4
engineering audit. No runtime execution support is implied.
