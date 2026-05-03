# Layer 1 Backbone Package Ledger

Date: 2026-05-01

This file records standard ecosystem/backbone packages that should be visible to readers but should not be counted as concrete Layer 1 analysis-problem method rows.

Backbone package inclusion does not imply Layer 2 method selection, Layer 3 callable support, or Layer 4 implementation readiness.

| Package | Ecosystem | Role | Current treatment |
|---|---|---|---|
| Scanpy | Python / scverse | General single-cell preprocessing, QC, normalization, HVG, AnnData ecosystem workflows | Removed from concrete Data Quality Control and Normalization rows. |
| scater | R / Bioconductor | General single-cell QC, preprocessing, normalization, and visualization | Removed from concrete Data Quality Control rows. |
| scran | R / Bioconductor | General single-cell size-factor normalization and preprocessing support | Removed from concrete Normalization rows. |
| Squidpy | Python / scverse | Spatial omics data handling, graph/neighborhood utilities, and analysis ecosystem support | Removed from concrete Data Quality Control rows. |
| sctransform | R / Seurat | General variance-stabilizing normalization used as preprocessing infrastructure | Removed from concrete Normalization rows. |
| SpatialData | Python / scverse | Open data framework for spatial omics | Treated as backbone/data framework, not an analysis problem method row. |
| Giotto Suite | R / Python ecosystem | Multiscale spatial multiomics analysis ecosystem | Treated as broad analysis ecosystem/backbone, not a single concrete analysis problem row. |
| standR | R / Bioconductor | GeoMx DSP end-to-end analysis package | Held as platform-specific backbone/workflow package rather than a concrete analysis problem method. |
| SOAPy | Python | Spatial architecture, dynamics, and communication analysis package | Held as broad workflow package pending topic-specific Layer 2 split. |
