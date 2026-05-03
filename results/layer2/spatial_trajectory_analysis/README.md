# Spatial Trajectory Analysis Layer 2 Package

Layer served: `Layer 2`

Status: complete working/evidence package for method-selection support.

This package covers the `Spatial Trajectory Analysis` Analysis Problem using the frozen seven-method candidate set supplied in `/tmp/bioharness_layer2_subagents/input/spatial_trajectory_analysis.json`. It is a method-selection evidence package. It is not a Layer 3 execution surface, Layer 4 adapter plan, environment capsule, callable signature, runtime-support claim, or default-method policy.

## Artifacts

| File | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, retrieval record, inclusion/exclusion rules, and final candidate freeze. |
| `field_registry.json` | Shared and topic-specific field definitions. |
| `method_table.json` | Structured source table for the frozen candidate set. |
| `method_table.csv` | CSV rendered from `method_table.json` with a CSV writer. |
| `method_table.md` | Human-readable table rendered from `method_table.json`. |
| `review_decision_tree.md` | PubMed review/benchmark screening, evidence spot-checks, branch-local decision tree, and coverage ledger. |
| `closure.md` | Gate check, current Layer 2 facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

## Candidate Freeze

The candidate set is frozen at seven methods:

`SpaTrack`, `spVelo`, `STT`, `SIRV`, `PearlST`, `TopoVelo`, `CASCAT`.

No methods were added beyond the frozen input.

