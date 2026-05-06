# Normalization Review Decision Tree

Purpose: `when to choose`, not `how to run`.

## Step 0. Is this a normalization task?

If the task is pre-assay panel design, use `Panel Design`. If the task is denoising, imputation, artifact correction, QC, SVG detection, or expression prediction, use the corresponding analysis problem.

## Step 1. Is a dedicated spatial-aware normalization method requested?

Consider `SpaNorm` when the active task is normalization of an already measured spatial expression matrix and library-size effects may be spatially structured.

Carry the signal-removal caveat: normalization can attenuate real spatial biology when technical depth and tissue structure are entangled.

## Step 2. Is the request for a standard workflow baseline?

Use the Backbone / Baseline Workflow Context when the user asks for routine normalization, HVG selection, or preprocessing in a known ecosystem:

- Scanpy for AnnData/scverse workflows;
- Seurat/sctransform for R/Seurat workflows;
- scran/scater for Bioconductor workflows;
- Giotto or Squidpy for broad spatial workflow context.

These packages are not positive candidates in this Layer 2 method table and are not ranked against `SpaNorm`.
