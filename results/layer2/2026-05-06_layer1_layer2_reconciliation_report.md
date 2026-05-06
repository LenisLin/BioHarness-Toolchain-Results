# Layer1/Layer2 Reconciliation Report

Date: 2026-05-06

## Overall Conclusion

The active Layer1 `Analysis Problem` set is aligned with the active Layer2 topic-package set. Candidate count mismatches identified before this reconciliation have been resolved by excluding `Giotto` from active CCC Layer1 positives and backfilling six confirmed Layer2 candidates into Layer1.

No formal Layer2 files were generated or modified by this reconciliation.

## Resolved Count Changes

- `Cell-Cell Communication`: Layer1 active positives now match Layer2 at 16 after `Giotto` was changed to documented backbone exclusion.
- `Graph / Neighborhood`: Layer1 active positives now match Layer2 at 20 after `SpaNiche` and `SpatialQuery` were backfilled.
- `Integration`: Layer1 active positives now match Layer2 at 22 after `SpaMosaic`, `INSPIRE`, `SpatialCOC`, and `SSpMosaic` were backfilled.

## Analysis Problem Gate

Formal Layer1/Layer2 readers should enumerate topics from active Layer1 `Analysis Problem` values and resolve the current Layer2 package slug from this gate or the paired confirmation-status CSV. The active `Domain / Clustering` analysis problem resolves to `domain_clustering`.

All active Layer1 `Analysis Problem` names map to active Layer2 packages:

| Analysis Problem | Topic Slug | Layer1 Count | Layer2 Count | Formal Readiness |
| --- | --- | ---: | ---: | --- |
| Artifact Correction | `artifact_correction` | 4 | 4 | Ready |
| Cell-Cell Communication | `cell_cell_communication` | 16 | 16 | Ready |
| Cell Type Inference | `cell_type_inference` | 35 | 35 | Ready |
| Data Quality Control | `data_quality_control` | 4 | 4 | Ready |
| Denoising / Signal Recovery | `denoising_signal_recovery` | 7 | 7 | Ready |
| Domain / Clustering | `domain_clustering` | 37 | 37 | Ready |
| Gene Expression Prediction / Imputation | `gene_expression_prediction_imputation` | 17 | 17 | Ready |
| Graph / Neighborhood | `graph_neighborhood` | 20 | 20 | Ready |
| Integration | `integration` | 22 | 22 | Ready |
| Normalization | `normalization` | 1 | 1 | Ready |
| Panel Design | `panel_design` | 5 | 5 | Ready |
| Phenotype- / Cohort-linked Spatial Feature and Niche Analysis | `phenotype_cohort_linked_spatial_feature_niche_analysis` | 5 | 5 | Ready |
| Program Discovery | `program_discovery` | 13 | 13 | Ready |
| Segmentation | `segmentation` | 11 | 11 | Ready |
| Spatial Clonal Analysis | `spatial_clonal_analysis` | 5 | 5 | Ready |
| Spatial Contrast Testing | `spatial_contrast_testing` | 6 | 6 | Ready |
| Spatial Perturbation Analysis | `spatial_perturbation_analysis` | 5 | 5 | Ready |
| Spatial Trajectory Analysis | `spatial_trajectory_analysis` | 9 | 9 | Ready |
| Spatially Variable Gene Detection | `spatially_variable_gene_detection` | 14 | 14 | Ready |
| Super-resolution | `super_resolution` | 11 | 11 | Ready |

## Historical Split Packages Covered By Active Mapping

- `comparative_analysis` is covered by the active `spatial_contrast_testing` and `phenotype_cohort_linked_spatial_feature_niche_analysis` mappings.
- `normalization_feature_selection` is covered by the active `normalization` and `panel_design` mappings.
