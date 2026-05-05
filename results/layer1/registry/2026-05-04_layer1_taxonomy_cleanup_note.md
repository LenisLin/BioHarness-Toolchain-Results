# Layer 1 Taxonomy Cleanup Note

Date: 2026-05-04

This note records the active Layer 1 registry state after the taxonomy cleanup for Super-resolution, Gene Expression Prediction / Imputation, Denoising / Signal Recovery, and the Comparative Analysis split.

## Active Registry

- Canonical registry: `layer1_spatial_method_registry.csv`
- Active row count: 235
- Archived legacy files: `archive/2026-05-04_taxonomy_cleanup/`

The previous dated working registry, legacy master CSV, and older supplement/validation notes remain historical context only. The active registry is the current candidate freeze.

## Schema Extension

The active registry includes three coarse placement fields:

- `Main Input`
- `Main Output`
- `Analysis Problem Basis`

These fields are coarse Layer 1 placement metadata. They support Analysis Problem assignment and do not imply Layer 3/4 execution support, machine-call contracts, backend bindings, or execution-environment support.

## Revised Topic Boundaries

- `Super-resolution`: target-sample measured spatial expression or spatial omics anchors finer-geometry reconstruction of the same sample signal. Inferred pseudo-cell, single-cell-resolution, high-density, or cell-level outputs are not direct single-cell molecule measurements.
- `Gene Expression Prediction / Imputation`: expression values are predicted, imputed, refined, generated, or calibrated from histology, reference data, partial spatial expression, bulk data, or model priors.
- `Denoising / Signal Recovery`: measured spatial expression is recovered, denoised, smoothed, reconstructed, or filtered at the same intended spatial resolution.
- `Spatial Contrast Testing`: explicit condition/group/covariate, structurally matched tissue, or registered-template contrast with DE genes, effect estimates, differentially patterned genes, or statistical maps as the output.
- `Phenotype- / Cohort-linked Spatial Feature and Niche Analysis`: phenotype/cohort/disease-control/clinical outcome/bulk-linked signal with phenotype-associated spatial features, pathology scores, cohort motifs, or clinical niches as the output.

`Comparative Analysis` is superseded in the active registry by the two split topics above. The review-seeded deconvolution `SPADE` row remains in `Cell Type Inference`; the NAR 2024 spatial-pattern `SPADE` row belongs to `Spatial Contrast Testing`. `MENDER` remains in `Domain / Clustering`; `CytoCommunity` remains in `Graph / Neighborhood`.

`stImpute` and `spRefine` are not active rows in the current registry.

## Revised Counts

- Artifact Correction: 3
- Cell Type Inference: 35
- Cell-Cell Communication: 17
- Data Quality Control: 4
- Denoising / Signal Recovery: 7
- Domain / Clustering: 37
- Gene Expression Prediction / Imputation: 17
- Graph / Neighborhood: 18
- Integration: 18
- Normalization / Feature Selection: 2
- Phenotype- / Cohort-linked Spatial Feature and Niche Analysis: 5
- Program Discovery: 13
- Segmentation: 11
- Spatial Clonal Analysis: 5
- Spatial Contrast Testing: 6
- Spatial Perturbation Analysis: 5
- Spatial Trajectory Analysis: 7
- Spatially Variable Gene Detection: 14
- Super-resolution: 11

## Evidence Scope

The all-row `Main Input`, `Main Output`, and `Analysis Problem Basis` backfill used local registry metadata and topic templates. The 2026-05-04 Comparative Analysis split added targeted metadata/code checks for `TiRank`, `stClinic`, and `STcompare`; it reused existing local placement evidence for `MENDER` and `CytoCommunity` as cross-topic context only.

## 2026-05-05 Comparative Boundary Follow-up

Human review revised the Comparative split boundary after the 2026-05-04 cleanup.

- `SPaSE` was removed from the active working registry rather than marked `Exclude` or `Hold`. The reason is not metadata failure: its spatial pathology-score estimand is outside the currently active Analysis Problem set. It may be reconsidered if a future `Spatial Pathology Scoring` or disease-severity mapping Analysis Problem is opened.
- `CytoCommunity` now has a controlled duplicate working-registry row under `Phenotype- / Cohort-linked Spatial Feature and Niche Analysis`, while the original `Graph / Neighborhood` row remains active. The duplicate row is restricted to cohort- or phenotype-associated tissue cellular neighborhood/community feature analysis.
- The controlled duplicate is a working Layer 1/2 boundary device, not a formal registry freeze and not a runtime, callable, adapter, backend, or environment-support claim.
- Net active working row count is expected to remain unchanged because the `SPaSE` active delete is balanced by the `CytoCommunity` controlled duplicate.


## 2026-05-05 ovrlpy Data QC Supplement

Human review requested inclusion of `ovrlpy` after targeted evidence checking.
The method is added under `Data Quality Control` as an imaging-based SRT
3D signal-overlap quality-control method. Direct evidence is PMID 41667711 and
DOI 10.1038/s41587-026-03004-8; public code traces include
https://github.com/HiDiHlabs/ovrl.py, PyPI, and Bioconda.

This is a Layer 1 evidence-registry addition and a Layer 2 Data QC
method-selection branch update only. It does not imply Layer 3 runtime support,
callable contracts, backend adapters, environment support, general 3D
reconstruction support, multi-slice integration support, or segmentation-mask
generation support.

Net active working row count increases to 235.
