# Program Discovery Layer 2

## Status

Layer served: `Layer 2`

Current status: complete working/evidence package for method selection.

This directory contains the Layer 2 method-selection evidence package for the spatial transcriptomics `Program Discovery` analysis problem. It supports conditional, branch-local method selection. It is not a Layer 3 execution surface, Layer 4 adapter implementation, environment capsule, default-method policy, or runtime-support claim.

## Topic Boundary

This package covers methods whose frozen Layer 1 placement supports discovery of transcriptional programs, multicellular programs, spatial topics, factors, co-expression modules, regulatory programs, tissue modules, or interpretable spatial gradients from spatial transcriptomics data.

The candidate set is frozen to thirteen Layer 1 methods:

`CellPie, DIALOGUE, scITD, SPICEMIX, STAMP, SpaTM, FISHFactor, SpatialCorr, SpaceX, SpaGRN, SPACE, spMOCA, LSGI`.

Subtask labels from the frozen input are used only as branch cues inside this topic. They do not create separate Layer 2 completion units.

## Artifacts

| Artifact | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, bounded retrieval record, inclusion/exclusion rules, and final candidate freeze. |
| `field_registry.json` | Shared and Program Discovery-specific Layer 2 field definitions. |
| `method_table.json` | Structured method-selection table built first from the frozen candidate set. |
| `method_table.csv` | Spreadsheet-friendly table generated from JSON with Python `csv.DictWriter`. |
| `method_table.md` | Human-readable table generated from JSON. |
| `review_decision_tree.md` | Benchmark/review screening, logic review, conditional decision tree, and coverage ledger. |
| `closure.md` | Gate check, facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

## Current Closure

The closure decision is that this Layer 2 topic is complete enough to serve as a working/evidence basis for later formal rendering or representative Layer 3/4 engineering audit. No runtime execution support is implied.
