# Artifact Correction Layer 2 Package

Layer served: `Layer 2`

Status: complete working/evidence package for the frozen `Artifact Correction`
candidate set.

This package supports conditional method selection inside one Analysis Problem.
It is not a Layer 3 execution surface, Layer 4 implementation, adapter
definition, callable signature, environment binding, runtime-support statement,
or default-method policy.

## Candidate Freeze

The frozen input JSON defines exactly three candidates:

- `SpotClean`
- `Non-parametric Vignetting Correction`
- `cellAdmix`

No additional methods were added during this Layer 2 pass.

## Artifact Index

| File | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, bounded retrieval record, inclusion/exclusion rules, and candidate freeze. |
| `field_registry.json` | Shared and topic-specific field definitions. |
| `method_table.json` | Structured source-of-truth method table. |
| `method_table.csv` | CSV rendering generated from `method_table.json`. |
| `method_table.md` | Markdown rendering generated from `method_table.json`. |
| `review_decision_tree.md` | PubMed verification, benchmark/review screening, logic review, conditional decision tree, and coverage ledger. |
| `closure.md` | Gate check, current facts, caveats, closure decision, and representative Layer 3/4 audit batch. |
