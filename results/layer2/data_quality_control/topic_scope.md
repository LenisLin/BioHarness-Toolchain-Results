# Data Quality Control Topic Scope

## Layer 1 / Layer 2 Boundary

The current Layer 1 authority for this package is `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/layer1_spatial_method_registry.csv`. The Data Quality Control freeze contains exactly four Layer 1-positive rows: SpotSweeper, SpatialQC, ovrlpy, and stPipe.

Layer 1 records method identity, analysis-problem placement, and code/access trace metadata. Layer 2 records method-selection knowledge for the Data Quality Control task family. A method appearing here can support later representative Layer 3/4 audit planning, but this package does not claim BioHarness execution support, callable interfaces, adapters, or environment profiles.

## Included Task Space

Data Quality Control covers methods whose primary role is to detect, summarize, filter, or report quality issues in spatial transcriptomics data before substantive downstream biological interpretation. The topic is organized by processing stage and data object:

- post-count spatial/local/regional QC: SpotSweeper;
- automated prepared-object QC reporting, filtering, and data cleaning: SpatialQC;
- post-transcript-localization 3D vertical overlap QC: ovrlpy;
- upstream preprocessing and QC workflow: stPipe.

## Exclusion Boundary

This topic does not include generic denoising, imputation, segmentation validation, biological pattern discovery, or artifact-correction methods whose primary output is a corrected expression matrix. QC flags may motivate those downstream steps, but they are not substitutes for artifact correction or biological validation.

## Scientific Caveats

DQC methods are separated by processing stage and platform; they are not a head-to-head ranking. QC/artifact flags can overlap with true tissue biology and require contextual review. ovrlpy overlap calls are QC evidence, not segmentation validation or biological interpretation. SpatialQC is a broad automated QC/reporting/data-cleaning pipeline, not a focused vertical-overlap or local-spatial-artifact detector.

## Retrieval Decision

Targeted metadata and code/access checks were sufficient for this reconciliation. No full retrieval redo is indicated because the Layer 1-positive set is fixed, SpatialQC identity is clear, and the branch logic depends on processing stage rather than on a contested comparative benchmark.
