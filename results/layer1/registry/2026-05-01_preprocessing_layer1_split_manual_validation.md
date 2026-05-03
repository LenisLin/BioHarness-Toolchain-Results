# Preprocessing Layer 1 Split Manual Validation

Date: 2026-05-01

Source table updated: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

## Confirmed Layer 1 Analysis Problems

The old broad `Preprocessing` analysis problem was replaced in this working copy by four Layer 1 analysis problems:

| Analysis Problem | Scope |
|---|---|
| Data Quality Control | Data structure, count-matrix/spatial-object readiness, QC, filtering, and preprocessing-readiness reporting. |
| Artifact Correction | Spot swapping, contamination, spatial artifact correction, and pollution removal when this is the method's primary claim. |
| Denoising / Imputation | Expression denoising, smoothing, enhancement, and imputation when the primary contribution is signal recovery. |
| Normalization / Feature Selection | Normalization, scaling, size-factor estimation, variance stabilization, and feature/HVG selection. |

## PubMed Retrieval Basis

Queries used during the manual pass:

- `spatial transcriptomics quality control preprocessing`
- `spatial transcriptomics denoising imputation`
- `spatial transcriptomics normalization highly variable genes`
- `spot swapping spatial transcriptomics`
- targeted follow-up searches for `SpotClean`, `MIST`, `Sprod`, `SpotSweeper`, `SpotGF`, `SCANPY`, `Squidpy`, `sctransform`, `scran`, and `scater`

## Migrated Existing Rows

| Method | Previous Analysis Problem | New Analysis Problem | Manual reason |
|---|---|---|---|
| MIST | Preprocessing | Denoising / Imputation | Region-specific denoising/imputation is the primary contribution. |
| SpotClean | Preprocessing | Artifact Correction | Spot-swapping contamination correction is the primary contribution. |
| SpotGF | Preprocessing | Denoising / Imputation | Denoising via optimal-transport gene filtering is the primary contribution. DOI/PMID corrected from PubMed. |
| SpotSweeper | Preprocessing | Data Quality Control | Spatially aware QC is the primary contribution. |
| Sprod | Preprocessing | Denoising / Imputation | Image- and position-informed denoising is the primary contribution. |

## Added Rows

| Analysis Problem | Method | PMID | DOI | Manual reason |
|---|---|---:|---|---|
| Data Quality Control | stPipe | 41278534 | 10.1093/nargab/lqaf167 | Direct spatial transcriptomics preprocessing/QC toolkit. |
| Data Quality Control | Scanpy | 29409532 | 10.1186/s13059-017-1382-0 | Mature count-matrix QC/preprocessing workflow used before spatial downstream analysis. |
| Data Quality Control | scater | 28088763 | 10.1093/bioinformatics/btw777 | Mature R/Bioconductor QC/preprocessing workflow. |
| Data Quality Control | Squidpy | 35102346 | 10.1038/s41592-021-01358-2 | Mature spatial-omics framework supporting data readiness; not treated as a dedicated QC algorithm. |
| Normalization / Feature Selection | sctransform | 31870423 | 10.1186/s13059-019-1874-1 | Mature variance-stabilizing normalization method. |
| Normalization / Feature Selection | scran | 27122128 | 10.1186/s13059-016-0947-7 | Mature size-factor normalization method. |
| Normalization / Feature Selection | Scanpy | 29409532 | 10.1186/s13059-017-1382-0 | Mature normalization/HVG workflow entry. |
| Denoising / Imputation | DiffusionST | 40794943 | 10.1093/bib/bbaf390 | Peer-reviewed spatial transcriptomics denoising/imputation method. |
| Denoising / Imputation | stDiff | 38628114 | 10.1093/bib/bbae171 | Peer-reviewed spatial transcriptomics imputation method. |
| Denoising / Imputation | stGRL | 40597202 | 10.1186/s12915-025-02290-z | Peer-reviewed spatial transcriptomics denoising method. |
| Denoising / Imputation | spRefine | 41633767 | 10.1101/gr.281001.125 | Peer-reviewed spatial transcriptomics denoising/enhancement method. |

## Held Or Excluded During This Pass

| Candidate | Decision | Reason |
|---|---|---|
| HistoSweep | Hold | bioRxiv/preprint-style evidence and pathology-image QC emphasis; not added as an Include row. |
| SpaDiff | Hold | preprint evidence in this pass; not added as an Include row. |
| SoupX / DecontX | Exclude for this pass | No direct spatial transcriptomics PubMed support found for the scoped Layer 1 preprocessing split. |
| Giotto / STUtility | Defer | Broad spatial workbench entries; may be useful later, but this pass avoided overloading preprocessing with general analysis platforms. |
| Segmentation or super-resolution methods | Exclude | Out of scope for the confirmed preprocessing split. |

## Critical Notes

- This is a Layer 1 registry update only. It does not claim Layer 2 completion, Layer 3 callable support, or Layer 4 implementation readiness.
- Core workflow entries such as Scanpy, scater, scran, and sctransform are included as pragmatic toolbox entries, not as spatial-only algorithms.
- Artifact Correction remains sparse after peer-reviewed filtering; SpotClean is the only direct Include row in this pass.
- Denoising/imputation overlaps with gene prediction and enhancement in some papers. The Layer 1 placement follows the primary methodological claim, while Layer 2 should refine task-level decision rules.
- GitHub URLs were left blank when a direct code link was not manually confirmed in this pass.

## Addendum: Backbone Correction Supersedes Earlier Generic Rows

Later on 2026-05-01, generic ecosystem packages were removed from concrete Layer 1 analysis-problem rows and moved to the backbone ledger:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_backbone_package_ledger.md`

This supersedes the earlier placement of Scanpy, scater, scran, Squidpy, and sctransform as concrete Data Quality Control or Normalization / Feature Selection rows. Direct spatial methods such as SpaNorm remain in the working registry.
