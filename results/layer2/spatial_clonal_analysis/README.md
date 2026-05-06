# Spatial Clonal Analysis Layer 2

## Status

Layer served: `Layer 2`

Current status: complete working/evidence package for method selection.

This directory contains the Layer 2 method-selection evidence package for the
spatial transcriptomics `Spatial Clonal Analysis` analysis problem. It supports
conditional method selection within this topic. It is not a Layer 3 execution
surface, Layer 4 adapter implementation, environment profile, universal-method
policy, or execution-support claim.

## Topic Boundary

This package covers methods that infer spatial tumor clones, subclones, copy
number alteration patterns, clone proportions, or clone phylogeography from
spatial transcriptomics or paired spatial/genomic inputs.

The candidate set is frozen to five Layer 1 methods:

`CalicoST`, `Clonalscope`, `STARCH`, `Tumoroscope`, `SlideCNA`.

## Artifacts

| Artifact | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, retrieval record, inclusion/exclusion rules, and final candidate freeze. |
| `field_registry.json` | Shared and topic-specific Layer 2 field definitions and controlled values. |
| `method_table.csv` | Spreadsheet-friendly method-selection table. |
| `method_table.md` | Human-readable method-selection table. |
| `method_table.json` | Structured method-selection table. |
| `review_decision_tree.md` | PubMed benchmark/review screening, logic review, decision tree, coverage ledger, and evidence spot-checks. |
| `closure.md` | Gate check, Layer 2 facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

## Current Closure

The closure decision is that this Layer 2 topic is complete enough to serve as
a working/evidence basis for later formal rendering or representative Layer 3/4
engineering audit. No runtime execution support is implied.
