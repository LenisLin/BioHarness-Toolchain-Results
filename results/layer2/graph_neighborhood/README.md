# Graph / Neighborhood Layer 2 Package

Layer served: `Layer 2`

Status: complete working/evidence package for the frozen `Graph / Neighborhood` candidate set.

This directory is a method-selection evidence package. It is not a Layer 3 execution surface, Layer 4 adapter design, environment capsule, callable-signature spec, runtime support matrix, or default-method policy.

## Artifact Index

| File | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, bounded retrieval record, inclusion/exclusion rules, and candidate freeze. |
| `field_registry.json` | Shared and topic-specific field definitions. |
| `method_table.json` | Structured method table built first from the frozen candidate set. |
| `method_table.csv` | CSV rendered from `method_table.json` with a real CSV writer. |
| `method_table.md` | Human-readable Markdown rendered from `method_table.json`. |
| `review_decision_tree.md` | PubMed/review screening, evidence caveats, branch-local decision tree, and coverage ledger. |
| `closure.md` | Gate check, current facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

## Candidate Freeze

The frozen candidate set contains 14 methods: `CellCharter`, `ENVI`, `mNSF`, `NNMF`, `NSF`, `SOTIP`, `MESA`, `NicheCompass`, `Nicheformer`, `SPARROW`, `CytoCommunity`, `SMORE`, `scHolography`, `SIGEL`.

The candidate set comes from `/tmp/bioharness_layer2_subagents/input/graph_neighborhood.json` and was not expanded during this Layer 2 pass.
