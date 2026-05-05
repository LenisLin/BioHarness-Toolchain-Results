# Artifact Correction Topic Scope

## Layer 1 / Layer 2 Boundary

The current Layer 1 authority for this package is `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/layer1_spatial_method_registry.csv`. The Artifact Correction freeze contains exactly four Layer 1-positive rows: SpotClean, Non-parametric Vignetting Correction, cellAdmix, and SPLIT.

Layer 1 records method identity, analysis-problem placement, and code/access trace metadata. Layer 2 records method-selection knowledge for the Artifact Correction task family. A method appearing here can support later representative Layer 3/4 audit planning, but this package does not claim BioHarness execution support, callable interfaces, adapters, or environment profiles.

## Included Task Space

Artifact Correction covers methods whose primary output is a correction or adjustment for a defined technical artifact mechanism in spatial transcriptomics data:

- spot swapping or local contamination: SpotClean;
- vignetting or position-dependent intensity attenuation: Non-parametric Vignetting Correction;
- molecular admixture across cells or compartments: cellAdmix;
- Xenium-specific signal contamination or transcript spillover: SPLIT.

## Exclusion Boundary

This topic does not include generic QC reporting, segmentation validation, generic denoising/imputation, biological pattern discovery, or methods whose primary output is only an artifact flag without a correction target. Artifact correction can be motivated by QC results, but the rows here are organized by correction mechanism and data object.

## Scientific Caveats

Artifact Correction rows correct different artifact mechanisms and cannot be universally ranked. QC/artifact signals can overlap with true tissue biology and require contextual review. cellAdmix corrects molecular admixture effects; it does not prove segmentation is solved. SPLIT is Xenium-specific signal-contamination correction, not generic denoising and not generic QC.

## Retrieval Decision

Targeted metadata and code/access checks were sufficient for this reconciliation. No full retrieval redo is indicated because the current task is layer alignment and mechanism-local branch cleanup rather than a new broad candidate search.
