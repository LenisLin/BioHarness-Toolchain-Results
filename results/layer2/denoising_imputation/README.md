# Denoising / Imputation Layer 2

## Status

Layer served: `Layer 2`

Current status: complete working/evidence package for method selection.

This directory contains the Layer 2 method-selection evidence package for the
spatial transcriptomics `Denoising / Imputation` analysis problem. It supports
conditional method selection within this topic. It is not a Layer 3 execution
surface, Layer 4 adapter implementation, environment capsule, default-method
policy, or runtime-support claim.

## Topic Boundary

This package covers methods whose primary reusable contribution is spatial
transcriptomics expression denoising, smoothing, signal recovery, enhancement,
or imputation.

The candidate set is frozen to seven Layer 1 methods:

`MIST`, `SpotGF`, `Sprod`, `DiffusionST`, `stDiff`, `stGRL`, `spRefine`.

`SpotGF` is retained as a boundary method because the current Layer 1 working
registry places it under denoising via optimal-transport gene filtering. Its
overlap with normalization/feature selection is carried as a caveat throughout
this package.

## Artifacts

| Artifact | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, retrieval record, inclusion/exclusion rules, and final candidate freeze. |
| `field_registry.json` | Shared and topic-specific Layer 2 field definitions and controlled values. |
| `method_table.csv` | Spreadsheet-friendly method-selection table. |
| `method_table.md` | Human-readable method-selection table. |
| `method_table.json` | Structured method-selection table. |
| `review_decision_tree.md` | Review pass, logic review, decision tree, coverage ledger, and evidence spot-checks. |
| `closure.md` | Gate check, Layer 2 facts, caveats, closure decision, and representative Layer 3/4 audit batch. |
| `2026-05-01_denoising_imputation_layer2_preimplementation_plan.md` | Pre-implementation planning note; not a required completion artifact. |

## Current Closure

The closure decision is that this Layer 2 topic is complete enough to serve as
a working/evidence basis for later formal rendering or representative Layer 3/4
engineering audit. No runtime execution support is implied.
