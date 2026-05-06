# Normalization Topic Scope

## Boundary

`Normalization` covers methods whose primary reusable contribution is post-capture normalization, scaling, or comparable technical-depth adjustment of already measured spatial transcriptomics expression values.

The active dedicated candidate freeze contains exactly one positive method: `SpaNorm`.

`Panel Design` is a separate topic for pre-assay gene/probe panel selection. Denoising, imputation, artifact correction, QC, SVG detection, and expression prediction remain outside this topic unless the requested task is explicitly normalization.

## Backbone / Baseline Workflow Context

Scanpy, Seurat/sctransform, scran/scater, Giotto, and Squidpy are included as Layer 2 context only. They should be visible to agents as standard workflow routes, but they are not counted as dedicated spatial-aware normalization candidates and should not be globally ranked against `SpaNorm`.

## Caveats

`SpaNorm` can remove or attenuate true spatial biology if library-size effects and tissue structure are not separable. Baseline workflow normalization is often appropriate for routine preprocessing, but it is not evidence that a workflow package is a spatial-specific normalization method-paper candidate.

## Retrieval Decision

Targeted metadata/code checks only. No full retrieval redo is required.
