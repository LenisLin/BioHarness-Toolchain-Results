# Layer 1 Method Registry Current Summary

## Status

Layer served: `Layer 1` evidence registry.

This file summarizes the current spatial transcriptomics method registry used as the backing evidence source for Layer 1 task-family routing and for later Layer 2 topic selection work. It is not a Layer 2 decision tree, not a Layer 3 execution surface, and not a Layer 4 adapter plan.

## Current Registry

- Registry file: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1_method_registry/registry/layer1_spatial_method_registry.csv`
- Rows: 137
- Analysis problems: 15

## Per-Analysis-Problem Counts

| Analysis Problem | Rows |
| --- | ---: |
| Cell Type Inference | 27 |
| Cell-Cell Communication | 15 |
| Comparative Analysis | 5 |
| Domain / Clustering | 27 |
| Graph / Neighborhood | 6 |
| Integration | 12 |
| Preprocessing | 5 |
| Program Discovery | 4 |
| Segmentation | 5 |
| Spatial Clonal Analysis | 2 |
| Spatial Gene Prediction | 8 |
| Spatial Perturbation Analysis | 1 |
| Spatial Trajectory Analysis | 3 |
| Spatially Variable Gene Detection | 11 |
| Super-resolution | 6 |

## Retention Decision

Only the current registry and this current summary are retained in `results/layer1_method_registry`. Historical staged reports, scratch CSVs, and run notes were deleted because they are no longer the current result state.

## Layer Boundary

- Layer 1: this broad method registry and task-family evidence source.
- Layer 2: topic-specific method tables, field registries, and decision trees such as `results/layer2/spatial_domain_identification`.
- Layer 3/4: execution surface and backend adapter planning; not represented by this registry.
