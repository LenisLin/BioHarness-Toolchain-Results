# Spatial Contrast Testing Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem` `Spatial Contrast Testing`.

This document defines the topic boundary and candidate freeze. It does not define commands, execution surfaces, backend bindings, machine-call contracts, execution-environment bindings, or execution readiness.

## Analysis Problem Boundary

`Spatial Contrast Testing` covers spatial transcriptomics methods whose primary reusable contribution is testing an explicit spatial contrast across conditions, sample groups, covariates, structurally matched tissues, or registered spatial templates. The main outputs are gene-level or pattern-level contrast objects: DE genes, effect estimates, differentially spatially patterned genes, or registered statistical maps.

The core inclusion gate is the Input / Output / Estimand triad: the input must include an explicit contrast design, the output must be a contrast-test or contrast-map object, and the estimand must be between-condition, between-sample, matched-tissue, or registered-template spatial contrast.

## Source Registry

Primary source registry: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/layer1_spatial_method_registry.csv`

Superseded source package: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/comparative_analysis`

## Bounded Retrieval Record

Retrieval role: split-boundary metadata and evidence check for the previous `Comparative Analysis` package. This pass did not perform a full topic-wide literature redo.

Sources:

- active Layer 1 registry
- archived 2026-05-01 Comparative Analysis method table
- targeted STcompare DOI/code/publication-status check
- user-approved Input / Output / Estimand split decision

## Inclusion Rules

Include methods when all of the following are true:

- the method belongs to the split-positive candidate set
- the main input includes explicit condition, group, covariate, structurally matched tissue, or registered-template contrast
- the main output is a contrast-test or contrast-map deliverable
- the method is not primarily a clinical phenotype-linked feature/niche method, within-sample SVG method, plain domain/clustering method, or graph-neighborhood discovery method

## Exclusion Rules

Exclude or cross-reference methods when the primary output is:

- within-sample spatially variable genes without condition/group contrast
- tissue domains, spatial clusters, cellular neighborhoods, or graph communities
- pathology scores, phenotype-linked features, clinical niches, cohort motifs, or bulk-linked spatial features
- generic integration, preprocessing, normalization, denoising, or artifact correction

## Final Candidate Freeze

| Tool Name | Split branch | Evidence identity |
| --- | --- | --- |
| `C-SIDE` | cell-type-specific condition contrast | PMID 36050488; DOI 10.1038/s41592-022-01575-3 |
| `Niche-DE` | niche-conditioned condition contrast | PMID 38217002; DOI 10.1186/s13059-023-03159-6 |
| `SPADE` | between-group spatial pattern / DE contrast | PMID 39470725; DOI 10.1093/nar/gkae962 |
| `SpatialGEE` | spatial-correlation-aware condition contrast | PMID 41671295; DOI 10.1371/journal.pcbi.1013956 |
| `STcompare` | structurally matched spatial pattern contrast | DOI 10.1101/2025.11.21.689847; bioRxiv preprint |
| `SpatialSPM` | registered pixel-wise spatial pattern contrast | PMID 38676948; DOI 10.1093/nar/gkae293 |

## Boundary Notes

`STcompare` has preprint-level evidence provenance and must stay restricted to structurally comparable tissues. Preprint status is a confidence caveat only, not a method-selection gate.

`SpatialGEE` has branch-local comparative statistical-method support. That evidence does not rank the other contrast branches.

This topic is distinct from `Spatially Variable Gene Detection`: SVG methods ask which genes vary spatially within a sample or tissue context, while this topic asks which expression or pattern objects differ across an explicit contrast design.
