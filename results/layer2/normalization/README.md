# Normalization Layer 2 Working Package

This package supersedes the normalization branch of the former `Normalization / Feature Selection` topic. The dedicated positive method freeze contains one spatial-aware normalization method: `SpaNorm`.

Backbone and baseline workflow packages are listed as context only. They help an agent recognize standard normalization/HVG workflow routes, but they are not counted as positive Layer 2 candidates and are not ranked against `SpaNorm`.

## Backbone / Baseline Workflow Context

| Package | Context Role |
| --- | --- |
| Scanpy | AnnData/scverse preprocessing, normalization, and HVG workflow context for spatial objects in Python workflows. |
| Seurat / sctransform | R/Seurat normalization and variance-stabilizing workflow context for spatial or single-cell-like expression objects. |
| scran / scater | Bioconductor size-factor normalization, QC, and preprocessing context for R workflows. |
| Giotto | Broad spatial analysis ecosystem context; not a single normalization method row. |
| Squidpy | Spatial omics analysis workflow context around AnnData; not a dedicated normalization method row. |

Code/access links are trace metadata only and do not imply BioHarness execution support, callable interfaces, adapters, or environment profiles.
