# Integration Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem` `Integration`.

This document defines the topic boundary and candidate freeze. It does not define commands, callable signatures, execution surfaces, adapter boundaries, environment bindings, or runtime support.

## Analysis Problem Boundary

`Integration` covers methods whose primary reusable contribution is spatial transcriptomics alignment, cross-slice integration, cross-sample harmonization, 2D/3D multi-slice integration, multimodal spatial omics integration, or batch correction when the method is explicitly framed for spatial data.

The Layer 1 `Subtask` values are used only as branch cues inside this topic. They are not separate Layer 2 completion units.

## Source Registry

Primary frozen input:

`/tmp/bioharness_layer2_subagents/input/integration.json`

Input source registry:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

## Bounded Retrieval Record

Retrieval date: 2026-05-01; targeted code-link check added 2026-05-02; targeted 2025-2026 inclusion correction added 2026-05-03

Retrieval role: PMID, DOI, code-link trace, benchmark/review screening, and targeted 2025-2026 inclusion correction. The 2026-05-02 targeted check updated code-link trace fields for previously unclear rows. The 2026-05-03 correction reopened inclusion only for the four specified Integration methods.

Retrieval sources:

- frozen candidate input JSON
- current repo scope and Layer 1 transition docs
- PubMed E-utilities ESummary for frozen candidate PMIDs
- PubMed E-utilities ESearch/ESummary for missing candidate identifiers for `CAST`, `SANTO`, and `SLAT`
- PubMed E-utilities ESearch/ESummary for Integration benchmark/review screening
- publisher code-availability statements and public repository pages for targeted code-link trace updates
- targeted 2025-2026 literature check for `SpaMosaic`, `INSPIRE`, `SpatialCOC`, and `SSpMosaic`

Candidate PMID verification query:

```text
42032296,42045691,41991905,39874960,37592182,36859400,
35577957,37553263,36653349,37990022,38065970,38177758,
41398698,41194133,40551235,40598307,39815104,40001084
```

Missing-identifier recovery queries:

```text
"CAST"[Title/Abstract] AND "spatial omics"[Title/Abstract]
"SANTO"[Title/Abstract] AND "spatial omics"[Title/Abstract]
"Spatial-linked alignment tool" OR SLAT spatial transcriptomics alignment
```

Benchmark/review screening query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
(integration[Title/Abstract] OR alignment[Title/Abstract] OR
 "multi-slice"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR comparison[Title/Abstract] OR
 review[Publication Type])
```

Narrow benchmark-title query:

```text
"Benchmarking"[Title]
AND ("spatial transcriptomics"[Title/Abstract] OR
     "spatially resolved transcriptomics"[Title/Abstract])
AND (integration[Title/Abstract] OR alignment[Title/Abstract])
```

Screening result: PubMed or DOI/publisher checks verified method-paper identities for all 22 candidates after the targeted correction. It also found directly relevant benchmark records for clustering/alignment/integration (PMID 39123269), multi-slice integration (PMID 41024097), and alignment methods (PMID 41933187). These benchmarks support branch-local caution and coverage checks, but they do not justify a universal ranking across all 22 candidates because the frozen set spans heterogeneous targets: coordinate alignment, partial overlap, latent integration, 3D reconstruction, multimodal modeling, and count batch correction.

Code-link verification update: the 2026-05-02 targeted check resolved the 12 rows that were previously `unclear` in this package: `CAST`, `DeST-OT`, `GPSA`, `PRECAST`, `SANTO`, `SLAT`, `STAIR`, `MaskGraphene`, `spCLUE`, `VR-Omics`, `MISO`, and `Crescendo`. `Primary Code Link` remains a trace field only and does not imply runtime support, adapter availability, callable signatures, environment capsules, or default-method status.

## Inclusion Rules

Include methods when all of the following are true:

- the current frozen input or the 2026-05-03 targeted inclusion correction lists the method under `Analysis Problem = Integration`
- the row has a named reusable computational identity
- the method's primary reusable contribution is alignment, integration, harmonization, 2D/3D reconstruction, multimodal spatial omics modeling, or spatial-data batch correction
- PubMed metadata or DOI/publisher metadata can verify a method-paper identity

## Exclusion Rules

Do not add or promote methods outside the frozen input except for the 2026-05-03 targeted inclusion correction requested for `SpaMosaic`, `INSPIRE`, `SpatialCOC`, and `SSpMosaic`.

Keep methods outside this package when the primary contribution is:

- general preprocessing, normalization, or HVG selection without an Integration claim
- spatial domain clustering without cross-sample integration as the main reusable contribution
- cell type inference, deconvolution, or annotation as the main task
- histology-to-expression prediction or super-resolution as the main task
- workflow infrastructure or assay description without a named downstream Integration method
- Layer 3/4 adapter, wrapper, or runtime implementation planning

## Final Candidate Freeze

| Tool Name | Layer 1 subtask cue | Evidence identity |
| --- | --- | --- |
| `SpaMosaic` | Spatial multi-omics mosaic integration | PMID 42032296; DOI 10.1038/s41588-026-02573-3 |
| `INSPIRE` | Spatially aware multi-dataset integration | PMID 42045691; DOI 10.1038/s41588-026-02579-x |
| `SpatialCOC` | Spatial continuous mapping and cross-omics correction | PMID 41991905; DOI 10.1038/s41467-026-71882-2 |
| `SSpMosaic` | Single-cell/spatial omics integration and annotation | DOI 10.1016/j.xgen.2025.101105 |
| `CAST` | Multi-slice alignment / integration | PMID 39294367; DOI 10.1038/s41592-024-02410-7 |
| `DeST-OT` | Multi-slice alignment / integration | PMID 39874960; DOI 10.1016/j.cels.2024.12.001 |
| `GPSA` | Multi-slice alignment / integration | PMID 37592182; DOI 10.1038/s41592-023-01972-2 |
| `GraphST` | Multi-slice alignment / integration | PMID 36859400; DOI 10.1038/s41467-023-36796-3 |
| `PASTE` | Multi-slice alignment / integration | PMID 35577957; DOI 10.1038/s41592-022-01459-6 |
| `PASTE2` | Multi-slice alignment / integration | PMID 37553263; DOI 10.1101/gr.277670.123 |
| `PRECAST` | Multi-slice alignment / integration | PMID 36653349; DOI 10.1038/s41467-023-35947-w |
| `SANTO` | Multi-slice alignment / integration | PMID 39025895; DOI 10.1038/s41467-024-50308-x |
| `SLAT` | Multi-slice alignment / integration | PMID 37945600; DOI 10.1038/s41467-023-43105-5 |
| `SPACEL` | Multi-slice alignment / integration | PMID 37990022; DOI 10.1038/s41467-023-43220-3 |
| `STalign` | Multi-slice alignment / integration | PMID 38065970; DOI 10.1038/s41467-023-43915-7 |
| `STAligner` | Multi-slice alignment / integration | PMID 38177758; DOI 10.1038/s43588-023-00528-w |
| `STAIR` | Multi-slice alignment / integration | PMID 41398698; DOI 10.1186/s13059-025-03895-x |
| `MaskGraphene` | Multi-slice alignment / integration | PMID 41194133; DOI 10.1186/s13059-025-03850-w |
| `spCLUE` | Cross-slice / cross-sample spatial integration | PMID 40551235; DOI 10.1186/s13059-025-03636-0 |
| `VR-Omics` | 2D/3D multi-slice integration | PMID 40598307; DOI 10.1186/s13059-025-03630-6 |
| `MISO` | Multimodal spatial omics integration | PMID 39815104; DOI 10.1038/s41592-024-02574-2 |
| `Crescendo` | Batch correction / cross-sample harmonization | PMID 40001084; DOI 10.1186/s13059-025-03479-9 |

## Topic Branch Organization

The topic is organized by method-selection cues rather than by Layer 1 subtask as separate packages:

- high-resolution search-and-match alignment
- spatiotemporal alignment
- pairwise or partial-overlap slice alignment
- non-rigid coordinate alignment and tissue warping
- stitching and heterogeneous-slice alignment
- latent embedding integration for clustering/domain interpretation
- 2D/3D multi-slice reconstruction
- multimodal spatial omics modeling
- mosaic spatial multi-omics integration and cross-omics correction
- interpretable gene-program integration with cell type/program/domain boundary caveats
- single-cell spatial count batch correction

These branches support conditional selection only. They are not default execution routes.
