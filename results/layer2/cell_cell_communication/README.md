# Cell-Cell Communication Layer 2

## Status

Layer served: `Layer 2`

Current status: complete working/evidence package for method selection.

This directory contains the Layer 2 method-selection evidence package for the spatial transcriptomics `Cell-Cell Communication` analysis problem. It supports conditional method selection within this topic. It is not a Layer 3 execution surface, Layer 4 adapter implementation, environment capsule, default-method policy, callable-signature definition, or runtime-support claim.

## Topic Boundary

This package covers methods whose primary reusable contribution is communication, interaction, ligand-receptor, neighbor-preference, relay-network, or pathway-aware CCC interpretation for single-cell or spatial transcriptomics contexts.

The frozen candidate set contains 16 Layer 1 methods:

`CellChat`, `CellNEST`, `COMMOT`, `NicheNet`, `SpaOTsc`, `SpaTalk`, `SpatialDM`, `DeepTalk`, `stLearn`, `COZI`, `MISTy`, `Spacia`, `SVCA`, `SPIDER`, `Scriabin`, `CausalCCC`.

`Giotto` is excluded by controller policy as a broad backbone/ecosystem package and is not counted in the method table or closure counts.

## Artifacts

| Artifact | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, bounded retrieval record, inclusion/exclusion rules, Giotto exclusion, and final candidate freeze. |
| `field_registry.json` | Shared and topic-specific Layer 2 field definitions and controlled values. |
| `method_table.json` | Structured method-selection table built first. |
| `method_table.csv` | CSV rendered from `method_table.json` with a real CSV writer. |
| `method_table.md` | Human-readable table rendered from `method_table.json`. |
| `review_decision_tree.md` | Benchmark/review screen, logic review, decision tree, coverage ledger, and evidence spot-checks. |
| `closure.md` | Gate check, Layer 2 facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

## Current Closure

The closure decision is that this Layer 2 topic is complete enough to serve as a working/evidence basis for later formal rendering or representative Layer 3/4 engineering audit. No runtime execution support is implied.
