# Data Quality Control Layer 2 Package

## Status

Layer served: `Layer 2`

Current package status: complete working/evidence package for the frozen
`Data Quality Control` candidate set.

This package supports method selection inside one Layer 1 `Analysis Problem`.
It is not a Layer 3 execution surface, Layer 4 implementation, callable
signature, environment binding, adapter plan, or runtime-support statement.

## Frozen Candidate Set

- `SpotSweeper`
- `stPipe`

The candidate set is frozen from:

`/tmp/bioharness_layer2_subagents/input/data_quality_control.json`

No methods were added during this Layer 2 pass.

## Artifact Index

| File | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, retrieval record, inclusion/exclusion rules, and candidate freeze. |
| `field_registry.json` | Shared and topic-specific field definitions. |
| `method_table.json` | Structured method-selection table built first from the frozen candidate set. |
| `method_table.csv` | CSV rendering generated from `method_table.json` with a CSV writer. |
| `method_table.md` | Human-readable Markdown rendering generated from `method_table.json`. |
| `review_decision_tree.md` | Benchmark/review screening, evidence spot-checks, and branch-local decision logic. |
| `closure.md` | Gate check, current facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

## Reading Rule

Use this package for conditional method selection only. Do not read the audit
batch or code links as evidence of BioHarness runtime support.
