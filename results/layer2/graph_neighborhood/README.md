# Graph / Neighborhood Layer 2 Package

Layer served: `Layer 2`

Status: confirm with caveats after the 2026-05-06 Layer1/Layer2 reconciliation. The targeted 20-method `Graph / Neighborhood` candidate freeze is accepted as ready for formal rendering while preserving branch-local caveats.

This directory is a method-selection evidence package. It is not a Layer 3 execution surface, Layer 4 adapter design, environment capsule, callable-signature spec, runtime support matrix, or default-method policy.

## Artifact Index

| File | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, bounded retrieval record, inclusion/exclusion rules, boundary router, and candidate freeze. |
| `field_registry.json` | Shared and topic-specific field definitions. |
| `method_table.json` | Structured method table built first from the revised candidate freeze. |
| `method_table.csv` | CSV rendered from `method_table.json` with a real CSV writer. |
| `method_table.md` | Human-readable Markdown rendered from `method_table.json`. |
| `review_decision_tree.md` | PubMed/review screening, evidence caveats, branch-local router and decision tree, and coverage ledger. |
| `closure.md` | Gate check, current facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

## Candidate Freeze

The revised candidate set contains 20 methods: `CellCharter`, `ENVI`, `mNSF`, `NNMF`, `NSF`, `SOTIP`, `MESA`, `NicheCompass`, `Nicheformer`, `SPARROW`, `CytoCommunity`, `SMORE`, `TrimNN`, `scNiche`, `CellNiche`, `DECIPHER`, `scHolography`, `SIGEL`, `SpaNiche`, `SpatialQuery`.

The candidate set combines the original Graph / Neighborhood frozen rows with the targeted 2026-05-03 Graph / Neighborhood supplement for `TrimNN`, `scNiche`, `CellNiche`, and `DECIPHER`, plus the targeted correction for `SpaNiche` and `SpatialQuery`. The 2026-05-06 Layer1/Layer2 reconciliation backfills `SpaNiche` and `SpatialQuery` into the active Layer1 registry. This was a targeted freeze update, not a full Graph / Neighborhood redo.

## 2026-05-05 Controlled Duplicate Note

`CytoCommunity` remains a positive `Graph / Neighborhood` method for tissue cellular neighborhood discovery. A controlled duplicate working row now also appears under `Phenotype- / Cohort-linked Spatial Feature and Niche Analysis` only when the requested deliverable is cohort- or phenotype-associated TCN/community features. This does not change the generic Graph / Neighborhood branch and does not imply runtime support.
