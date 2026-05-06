# Layer1/Layer2 Reconciliation Note

Date: 2026-05-06

## Purpose

This note records the reconciliation performed before formal Layer2 rendering. It aligns active Layer1 `Analysis Problem` counts with current active Layer2 working packages and records the scientific boundary decisions used in the reconciliation.

## Decisions

- `Giotto` is no longer an active Layer1 `Cell-Cell Communication` positive method row. It is retained in the CSV with `Registry Status = Exclude` as a documented broad backbone/ecosystem exclusion. It remains useful as workflow context, but it is not counted in the CCC Layer2 method table or decision tree.
- `SpaNiche` and `SpatialQuery` are backfilled into active Layer1 under `Graph / Neighborhood` because they were already accepted in the confirmed 20-row Layer2 candidate freeze.
- `SpaMosaic`, `INSPIRE`, `SpatialCOC`, and `SSpMosaic` are backfilled into active Layer1 under `Integration` because they were already accepted in the confirmed 22-row Layer2 candidate freeze.

## Boundary Notes

The reconciliation records only candidate-boundary and count decisions needed before formal rendering. Topic-specific scientific interpretation cautions remain in the Layer2 working packages and are not promoted as formal Layer1/Layer2 fields.

## Active Layer1 Counts After Reconciliation

| Analysis Problem | Active Layer1 Include Rows |
| --- | ---: |
| Artifact Correction | 4 |
| Cell Type Inference | 35 |
| Cell-Cell Communication | 16 |
| Data Quality Control | 4 |
| Denoising / Signal Recovery | 7 |
| Domain / Clustering | 37 |
| Gene Expression Prediction / Imputation | 17 |
| Graph / Neighborhood | 20 |
| Integration | 22 |
| Normalization | 1 |
| Panel Design | 5 |
| Phenotype- / Cohort-linked Spatial Feature and Niche Analysis | 5 |
| Program Discovery | 13 |
| Segmentation | 11 |
| Spatial Clonal Analysis | 5 |
| Spatial Contrast Testing | 6 |
| Spatial Perturbation Analysis | 5 |
| Spatial Trajectory Analysis | 9 |
| Spatially Variable Gene Detection | 14 |
| Super-resolution | 11 |

Total active `Include` rows: 247.

## Analysis Problem Consistency Gate

The 20 active Layer1 `Analysis Problem` values map one-to-one to the 20 active Layer2 topic packages. Formal Layer1/Layer2 readers should enumerate topics from those active Layer1 values and resolve package slugs from the current confirmation-status mapping. `comparative_analysis` and `normalization_feature_selection` are historical split packages covered by the current active mappings.
