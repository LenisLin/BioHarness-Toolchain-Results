# Phenotype- / Cohort-linked Spatial Feature and Niche Analysis Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem` `Phenotype- / Cohort-linked Spatial Feature and Niche Analysis`.

This document defines the topic boundary and candidate freeze. It does not define commands, execution surfaces, backend bindings, machine-call contracts, execution-environment bindings, or execution readiness.

## Analysis Problem Boundary

This Layer 2 package assumes Layer 1 has already assigned the Analysis Problem. It does not decide whether a user task belongs to this topic.

Within that assigned topic, the package covers methods whose main reusable contribution is linking spatial features, tissue motifs, cellular/spatial niches, tissue cellular neighborhoods, tumor microenvironment structures, or bulk-linked signals to phenotype, cohort, disease-control, clinical outcome, survival, therapy-response, condition, or bulk-cohort labels.

The core inclusion gate is the Input / Output / Estimand triad: the input must include phenotype/cohort/clinical/bulk-linked or condition signal, the output must be a feature, niche, motif, representation, or tissue cellular neighborhood associated with that signal, and the estimand must be phenotype/cohort association or prioritization rather than direct gene-level contrast testing.

## Source Registry

Primary source registry: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/layer1_spatial_method_registry.csv`

Superseded source package: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/comparative_analysis`

## Bounded Retrieval Record

Retrieval role: split-boundary metadata and evidence check for the phenotype/cohort-linked branch. This pass did not perform a full topic-wide literature redo.

Sources:

- active Layer 1 registry
- archived 2026-05-01 Comparative Analysis method table
- targeted DOI/PubMed/code checks for `TiRank`, `stClinic`, `SPaSE`, and `CytoCommunity`
- existing `Graph / Neighborhood` package evidence for `CytoCommunity`
- user-approved Input / Output / Estimand split decision and 2026-05-05 controlled-duplicate policy

## Inclusion Rules

Include methods when all of the following are true:

- the method belongs to the split-positive candidate set
- the main input includes phenotype, cohort, clinical outcome, survival, therapy-response, condition, or bulk-linked signal
- the main output is a phenotype-associated spatial feature, clinical niche, cohort motif, phenotype-linked representation, or cohort/phenotype-associated tissue cellular neighborhood/community feature
- the method is not primarily a direct DE/pattern contrast test, within-sample SVG detector, plain domain/clustering method, or generic graph-neighborhood discovery method

## Exclusion / Cross-reference Rules

- `SPaSE` was removed from the active positive set by 2026-05-05 human boundary review. The identity is not rejected; the pathology-score estimand is outside the currently active Analysis Problem set.
- If a user task primarily asks for spatial pathology severity scoring, return to Layer 1 Analysis Problem review rather than forcing a positive method from this package.
- `MENDER` remains in `Domain / Clustering`; it may support upstream tissue-structure context but is not a positive row here.
- `CytoCommunity` remains positive in `Graph / Neighborhood` for generic tissue cellular neighborhood discovery and appears here only as a controlled duplicate for cohort- or phenotype-linked TCN/community feature analysis.
- Direct gene-level or pattern-level contrast testing belongs to `Spatial Contrast Testing` after Layer 1 assignment.
- Within-sample spatial gene variability belongs to `Spatially Variable Gene Detection` after Layer 1 assignment.

## Final Candidate Freeze

| Tool Name | Split branch | Evidence identity |
| --- | --- | --- |
| `TissueMosaic` | cohort motif / representation association | PMID 40925368; DOI 10.1016/j.cels.2025.101394 |
| `SpaLinker` | bulk-linked phenotype spatial feature association | PMID 40480216; DOI 10.1016/j.xgen.2025.100893 |
| `TiRank` | clinical phenotype-linked niche prioritization | PMID 41689080; DOI 10.1186/s13073-026-01604-2 |
| `stClinic` | multi-slice phenotype-linked niche discovery | PMID 40523901; DOI 10.1038/s41467-025-60575-x |
| `CytoCommunity` | cohort-linked tissue cellular neighborhood/community features | PMID 38191930; DOI 10.1038/s41592-023-02124-2 |

## Boundary Notes

This topic should not be read as clinical causality. The outputs are association, prioritization, representation, niche-importance, or cohort-linked community-feature objects unless later experimental design supports stronger claims.

Code traces support Layer 1/2 evidence only. They do not imply runtime support, adapters, callable signatures, backend bindings, or environment capsules.
