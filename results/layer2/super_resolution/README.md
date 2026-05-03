# Super-resolution Layer 2

## Status

Layer served: `Layer 2`

Current status: complete working/evidence package for method selection, with
scientific caveats carried forward.

This directory contains the Layer 2 method-selection evidence package for the
spatial transcriptomics `Super-resolution` analysis problem. It supports
conditional method selection within this topic. It is not a Layer 3 execution
surface, Layer 4 adapter implementation, environment capsule, default-method
policy, or runtime-support claim.

## Topic Boundary

This package covers methods whose reusable contribution is spatial
transcriptomics resolution enhancement, high-density spatial profile
generation, subspot or single-cell-resolution expression inference,
pseudo-single-cell reconstruction, tissue-architecture reconstruction, or
segmentation-free high-resolution factorization.

The candidate set is frozen to eight Layer 1 methods:

`FICTURE`, `iStar`, `scstGCN`, `Spotiphy`, `TESLA`, `XFuse`, `iSCALE`,
`STAGE`.

The methods differ in whether they start from already high-density data,
spot-level ST plus histology, large tissue sections, or sparse spatial inputs.
That branch structure is used for method-selection logic only.

## Artifacts

| Artifact | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, retrieval record, inclusion/exclusion rules, and final candidate freeze. |
| `field_registry.json` | Shared and topic-specific Layer 2 field definitions and controlled values. |
| `method_table.json` | Structured method-selection table and source of truth for rendered tables. |
| `method_table.csv` | Spreadsheet-friendly method-selection table generated from JSON. |
| `method_table.md` | Human-readable method-selection table generated from JSON. |
| `review_decision_tree.md` | PubMed verification, benchmark/review screening, logic review, decision tree, coverage ledger, and evidence spot-checks. |
| `closure.md` | Gate check, Layer 2 facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

## Current Closure

The closure decision is that this Layer 2 topic is complete enough to serve as
a working/evidence basis for later formal rendering or representative Layer 3/4
engineering audit. No runtime execution support is implied.
