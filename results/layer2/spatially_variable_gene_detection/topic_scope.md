# Spatially Variable Gene Detection Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem` `Spatially Variable Gene Detection`.

This document defines the topic boundary and candidate freeze. It does not define commands, callable signatures, execution surfaces, adapter boundaries, environment bindings, or runtime support.

## Analysis Problem Boundary

`Spatially Variable Gene Detection` covers methods whose primary reusable contribution is identifying, ranking, characterizing, or branch-specifically interpreting genes with spatial expression variation in spatial transcriptomics data.

The Layer 1 `Subtask` values are used only as branch cues inside this topic. They are not separate Layer 2 completion units.

## Source Registry

Primary source registry:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

Frozen candidate input:

`/tmp/bioharness_layer2_subagents/input/spatially_variable_gene_detection.json`

## Bounded Retrieval Record

Retrieval date: 2026-05-01

Retrieval role: PMID/DOI/code-link verification and benchmark/review screening for the frozen candidate set. This retrieval did not open the candidate set for expansion.

Retrieval sources:

- current Layer 1 frozen candidate input JSON
- PubMed E-utilities ESummary for the 14 frozen candidate PMIDs
- PubMed E-utilities ESearch/ESummary/EFetch for benchmark and review screening
- code links already present in the frozen input, treated as primary links only when the input supplied them

Candidate PMID verification query:

```text
39865128,41361894,39979358,39947134,37963892,38972896,37429865,34165490,31988518,34154649,29553579,38641849,40275395,40985765
```

Benchmark/review screening queries:

```text
("spatially variable gene"[Title/Abstract] OR
 "spatially variable genes"[Title/Abstract] OR
 "spatial expression patterns"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR benchmarks[Title/Abstract] OR
 benchmarking[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

```text
(SpatialDE[Title/Abstract] OR SPARK-X[Title/Abstract] OR nnSVG[Title/Abstract])
AND
(benchmark[Title/Abstract] OR benchmarking[Title/Abstract] OR comparison[Title/Abstract])
```

```text
"spatially variable genes"[Title/Abstract] AND review[Publication Type]
```

Relevant benchmark/review records retrieved:

| PMID | DOI | Role in this package |
| --- | --- | --- |
| 38225676 | 10.1186/s13059-023-03145-y | 2024 broad SVG benchmark; supports broad overall-SVG caveats, calibration concerns, and practical runtime/memory awareness. |
| 40968359 | 10.1186/s13059-025-03731-2 | 2025 systematic benchmark of 14 SVG methods; supports branch-local guidance for overall SVG methods, especially SPARK-X as a scalable strong comparator. |
| 39880807 | 10.1038/s41467-025-56080-w | 2025 review/categorization of 34 SVG methods; supports the overall, cell-type-specific, and spatial-domain-marker category separation used in branch logic. |
| 38370977 | 10.1016/j.csbj.2024.01.016 | 2024 review of recent SVG-detection advances; supports method-family and caveat framing. |
| 42041225 | 10.1093/bib/bbag190 | 2026 benchmark of cell-type-specific SVG methods; supports branch-local ctSVG guidance for Celina, ctSVG, STANCE, and spVC, with caveats about false positives and cell type context. |

Code-link verification note: PubMed candidate metadata verified PMID/DOI identity but did not provide primary code links for every row. `Primary Code Link` is therefore filled only from the frozen input when present; rows without a frozen primary link use `Code Access = unclear` rather than invented links.

## Inclusion Rules

Include methods when all of the following are true:

- the frozen input JSON includes the method under `Analysis Problem = Spatially Variable Gene Detection`
- the row belongs to one of the accepted topic branches: overall SVG detection, cell-type-specific SVG detection, cell-type-conditional SVG detection, gene-centric tissue pattern mining, or SVG clustering / feature selection
- the method has a named reusable computational identity
- PubMed/DOI metadata can verify the method-paper identity

## Exclusion Rules

Exclude or keep outside the frozen set when the primary contribution is:

- general preprocessing, normalization, denoising, or imputation without SVG detection as the main reusable task
- spatial domain identification or clustering without gene-level SVG detection or SVG feature selection as the main contribution
- cell type inference, deconvolution, or annotation as the main claim
- cell-cell communication, trajectory, perturbation, or comparative analysis as the main claim
- assay/workflow description without a named reusable downstream method
- methods absent from the frozen input JSON, even if discovered in benchmark or review screening

## Final Candidate Freeze

| Tool Name | Layer 1 subtask cue | Evidence identity |
| --- | --- | --- |
| `Celina` | Cell-type-specific SVG detection | PMID 39865128; DOI 10.1038/s41467-025-56280-4 |
| `ctSVG` | Cell-type-specific SVG detection | PMID 41361894; DOI 10.1186/s13059-025-03870-6 |
| `STANCE` | Cell-type-specific SVG detection | PMID 39979358; DOI 10.1038/s41467-025-57117-w |
| `STMiner` | Gene-centric tissue pattern mining | PMID 39947134; DOI 10.1016/j.xgen.2025.100771 |
| `BSP` | Overall SVG detection | PMID 37963892; DOI 10.1038/s41467-023-43256-5 |
| `HEARTSVG` | Overall SVG detection | PMID 38972896; DOI 10.1038/s41467-024-49846-1 |
| `nnSVG` | Overall SVG detection | PMID 37429865; DOI 10.1038/s41467-023-39748-z |
| `SOMDE` | Overall SVG detection | PMID 34165490; DOI 10.1093/bioinformatics/btab471 |
| `SPARK` | Overall SVG detection | PMID 31988518; DOI 10.1038/s41592-019-0701-7 |
| `SPARK-X` | Overall SVG detection | PMID 34154649; DOI 10.1186/s13059-021-02404-0 |
| `SpatialDE` | Overall SVG detection | PMID 29553579; DOI 10.1038/nmeth.4636 |
| `spVC` | Overall SVG detection | PMID 38641849; DOI 10.1186/s13059-024-03245-3 |
| `InSituCor` | Cell-type-conditional SVG detection | PMID 40275395; DOI 10.1186/s13059-025-03554-1 |
| `SPACE-SVG` | SVG clustering / feature selection | PMID 40985765; DOI 10.1093/nar/gkaf936 |

## Boundary Notes

`STMiner` is a gene-centric tissue-pattern method rather than a standard calibrated SVG-ranking workflow; it remains in this package only because the frozen registry accepted this branch.

`InSituCor` is conditional on the cell type landscape and should not be silently substituted for overall SVG detection or direct ctSVG calling.

`SPACE-SVG` is a registry disambiguation label. PubMed records the paper as `SPACE`; the row is retained as a cell-type-adjusted SVG clustering / feature-selection boundary branch.

`spVC` sits near the overall-versus-cell-type-aware boundary. The frozen registry places it under overall SVG detection, while the 2026 cell-type-specific benchmark screens it in the ctSVG context. This package carries that as an explicit caveat rather than changing the candidate branch.

## Topic Branch Organization

The topic is organized by method-selection cues rather than by Layer 1 subtask as separate packages:

- overall SVG detection
- scalable overall SVG detection
- canonical or interpretable overall SVG baselines
- cell-type-specific SVG detection
- cell-type-conditional spatial correlation
- gene-centric tissue-pattern mining
- cell-type-adjusted SVG clustering / feature selection

These branches support conditional selection only. They are not default execution routes.
