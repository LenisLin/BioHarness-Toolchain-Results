# Spatial Contrast Testing Layer 2

## Status

Layer served: `Layer 2`

Current status: complete working/evidence package after the 2026-05-04 Comparative Analysis split.

This package supports branch-local method selection for `Spatial Contrast Testing`. It is not a Layer 3 execution surface, Layer 4 implementation, execution-environment bundle, machine-call contract, universal-method policy, or execution-readiness claim.

## Topic Boundary

`Spatial Contrast Testing` covers spatial transcriptomics methods whose primary reusable contribution is testing an explicit spatial contrast across conditions, sample groups, covariates, structurally matched tissues, or registered spatial templates. The main outputs are gene-level or pattern-level contrast objects: DE genes, effect estimates, differentially spatially patterned genes, or registered statistical maps.

The core inclusion gate is the Input / Output / Estimand triad: the input must include an explicit contrast design, the output must be a contrast-test or contrast-map object, and the estimand must be between-condition, between-sample, matched-tissue, or registered-template spatial contrast.

Candidate set: 6 methods.

`C-SIDE`, `Niche-DE`, `SPADE`, `SpatialGEE`, `STcompare`, `SpatialSPM`

## Artifacts

| Artifact | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, retrieval record, inclusion/exclusion rules, and candidate freeze. |
| `field_registry.json` | Shared and topic-specific Layer 2 field definitions. |
| `method_table.json` | Structured method-selection table. |
| `method_table.csv` | Spreadsheet-friendly method-selection table. |
| `method_table.md` | Human-readable method-selection table. |
| `review_decision_tree.md` | Logic review, branch-local decision tree, evidence spot-checks, and coverage ledger. |
| `closure.md` | Gate check, caveats, closure decision, and representative later-audit batch. |

## Current Closure

The package is ready as a working/evidence basis for later human review and possible formal rendering. No formal file is generated here.
