# Phenotype- / Cohort-linked Spatial Feature and Niche Analysis Layer 2

## Status

Layer served: `Layer 2`

Current status: complete working/evidence package after the 2026-05-05 Comparative boundary follow-up.

This package supports branch-local method selection for `Phenotype- / Cohort-linked Spatial Feature and Niche Analysis`. It is not a Layer 3 execution surface, Layer 4 implementation, execution-environment bundle, machine-call contract, universal-method policy, or execution-readiness claim.

## Topic Boundary

`Phenotype- / Cohort-linked Spatial Feature and Niche Analysis` covers spatial transcriptomics methods whose primary reusable contribution is linking spatial features, tissue motifs, cellular/spatial niches, tissue cellular neighborhoods, tumor microenvironment structures, or bulk-linked signals to phenotype, cohort, disease-control, clinical outcome, survival, therapy-response, or condition labels.

The core inclusion gate is the Input / Output / Estimand triad: the input must include phenotype/cohort/clinical/bulk-linked or condition signal, the output must be a feature, niche, motif, representation, or tissue cellular neighborhood associated with that signal, and the estimand must be phenotype/cohort association or prioritization rather than direct gene-level contrast testing.

Candidate set: 5 methods.

`TissueMosaic`, `SpaLinker`, `TiRank`, `stClinic`, `CytoCommunity`

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

The package is ready as a working/evidence basis for later human review and possible formal rendering. `SPaSE` has been removed from the active positive set because pathology-score estimation is outside the currently active Analysis Problem set. `CytoCommunity` is included as a controlled duplicate only for cohort- or phenotype-linked tissue cellular neighborhood/community feature analysis. No formal file is generated here.
