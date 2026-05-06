# Cell Type Inference Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem` `Cell Type Inference`.

This document defines topic boundary and candidate freeze. It does not define commands, callable signatures, execution surfaces, adapter boundaries, environment bindings, default methods, or runtime support.

## Analysis Problem Boundary

`Cell Type Inference` covers methods whose primary reusable contribution is inferring cell-type composition, cell-type abundance, cell placement, cell-type annotation, or specialized cell-state/cell-type labels from spatial transcriptomics data.

The Layer 1 `Subtask` values are used only as branch cues inside this topic. They are not separate Layer 2 completion units.

## Source Registry

Primary frozen candidate input:

`historical topic-subagent staging input; current candidate-freeze authority is /mnt/NAS_21T/ProjectData/BioHarness/results/layer2/cell_type_inference/topic_scope.md`

Source registry recorded in that input:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

## Bounded Retrieval Record

Retrieval date: 2026-05-01

Retrieval role: PMID/DOI identity verification, code-link screening where NCBI records expose links, and benchmark/review screening. Retrieval did not open the candidate set for expansion.

Retrieval sources:

- current frozen input JSON
- PubMed E-utilities ESummary for known frozen PMIDs
- PubMed E-utilities ESearch/ESummary for frozen rows with missing PMIDs
- PubMed E-utilities ESearch/ESummary for benchmark/review screening
- NCBI PMC EFetch full-text URL screening for PubMed-linked articles where PMCID was present

Known-PMID verification query:

```text
35501392, 35027729, 36879008, 35449415, 33480403, 33603203, 39623485, 33971932, 33544846, 38514799, 35487922, 39103939, 33037292, 35253896, 34711971, 41061702, 40675159, 41057862, 40682076, 39904340, 41002029, 40705925, 39404057, 39970279
```

Missing-PMID title/name screening pattern:

```text
"<frozen title>"[Title]
<Tool Name>[Title/Abstract] AND "spatial transcriptomics"[Title/Abstract]
```

Benchmark/review screening queries:

```text
("spatial transcriptomics"[Title/Abstract] OR "spatially resolved transcriptomics"[Title/Abstract]) AND (deconvolution[Title/Abstract] OR "cell type"[Title/Abstract]) AND (benchmark[Title/Abstract] OR benchmarking[Title/Abstract] OR comparison[Title/Abstract])

("spatial transcriptomics"[Title/Abstract] OR "spatially resolved transcriptomics"[Title/Abstract]) AND (deconvolution[Title/Abstract] OR "cell type inference"[Title/Abstract] OR "cell type mapping"[Title/Abstract]) AND (review[Publication Type] OR review[Title])

("spatial transcriptomics"[Title/Abstract] AND deconvolution[Title/Abstract] AND review[Title/Abstract]) AND 2024:2026[dp]
```

Key retrieval results:

- Known PMIDs/DOIs in the frozen input were verified for 24 candidate rows.
- Title/name searches recovered PubMed identities for all 11 retained frozen rows that lacked a PMID in the input.
- PMC full-text URL screening did not recover additional primary code links beyond the frozen registry links.
- Benchmark/review screening recovered the 2023 Nature Communications cellular deconvolution benchmark (PMID 36941264; DOI 10.1038/s41467-023-37168-7), a 2025 Nature Reviews Genetics deconvolution review (PMID 40369312; DOI 10.1038/s41576-025-00845-y), and additional broad review/benchmark records including a 2026 preprint-indexed benchmark record. These sources support branch-local caveats, not global ranking.

## Inclusion Rules

Include methods when all of the following are true:

- the method appears in the frozen candidate set in the input JSON
- the row belongs to `Analysis Problem = Cell Type Inference`
- the method has a named reusable computational identity
- the primary reusable contribution is cell-type deconvolution, cell-type composition inference, cell placement/localization, cell-type annotation, or specialized cell-state inference in a spatial transcriptomics setting

## Exclusion Rules

Do not add methods from benchmark/review retrieval. Keep outside this package methods whose primary contribution is:

- segmentation or transcript assignment
- general preprocessing, normalization, or denoising
- spatial domain identification without a cell-type inference objective
- cell-cell communication or ligand-receptor analysis
- super-resolution expression prediction without a primary cell-type inference role
- generic single-cell annotation outside spatial transcriptomics

## Final Candidate Freeze

| Tool Name | Method family | Benchmark/review coverage |
| --- | --- | --- |
| `AdRoit` | Robust compositional inference | review-only coverage |
| `CARD` | Spatial correlation model | independent benchmark includes |
| `cell2location` | Bayesian latent variable model | independent benchmark includes |
| `Celloscope` | Marker-gene probabilistic deconvolution | review-only coverage |
| `CellsFromSpace` | Reference-free deconvolution and annotation | review-only coverage |
| `CytoSPACE` | High-resolution alignment model | method-paper/local benchmark only |
| `DestVI` | Variational latent variable model | independent benchmark includes |
| `DSTG` | Graph convolutional deconvolution | method-paper/local benchmark only |
| `NLSDeconv` | Dampened weighted least squares deconvolution | review-only coverage |
| `RCTD` | Probabilistic mixture model | independent benchmark includes |
| `Redeconve` | Single-cell-resolution reconstruction | review-only coverage |
| `SMART` | Marker-gene-assisted topic-model deconvolution | method-paper/local benchmark only |
| `SONAR` | Spatially weighted Poisson-gamma deconvolution | review-only coverage |
| `SPADE` | Domain-specific cell-type estimation | review-only coverage |
| `SpatialDWLS` | Weighted least squares deconvolution | method-paper/local benchmark only |
| `SpatialPrompt` | Spatially aware deconvolution and domain identification | review-only coverage |
| `SpatialScope` | Deep transcriptomic reconstruction | method-paper/local benchmark only |
| `SPOTlight` | Seeded non-negative matrix factorization regression | method-paper/local benchmark only |
| `Starfysh` | Reference-free histology-aware generative deconvolution | method-paper/local benchmark only |
| `STdeconvolve` | Topic model | independent benchmark includes |
| `STdGCN` | Graph convolutional deconvolution | method-paper/local benchmark only |
| `stereoscope` | Probabilistic generative model | independent benchmark includes |
| `STIE` | Single-cell-level deconvolution and clustering | review-only coverage |
| `STRIDE` | Topic-model deconvolution | method-paper/local benchmark only |
| `stVAE` | Variational autoencoder deconvolution | review-only coverage |
| `Tangram` | Deep learning alignment model | method-paper/local benchmark only |
| `DeepScence` | Deep senescent-cell state detection | method-paper/local benchmark only |
| `OmicsTweezer` | Distribution-independent deconvolution | method-paper/local benchmark only |
| `STAMapper` | High-precision spatial cell-type mapping | method-paper/local benchmark only |
| `STHD` | Probabilistic high-definition cell typing | method-paper/local benchmark only |
| `STALocator` | Spatial transcriptomics-aided localization | method-paper/local benchmark only |
| `gwSPADE` | Reference-free spatial deconvolution | method-paper/local benchmark only |
| `DECLUST` | Cluster-based spatial deconvolution | method-paper/local benchmark only |
| `PANDA` | Spot-adaptive probabilistic deconvolution | method-paper/local benchmark only |
| `STged` | Graph-based gene-expression deconvolution | method-paper/local benchmark only |

Candidate count: 35.

## Boundary Notes

`CytoSPACE`, `Tangram`, `Redeconve`, `SpatialScope`, and `STALocator` are retained as cell-placement or reconstruction-adjacent inference methods, not as ordinary spot-proportion defaults.

`DeepScence`, `PANDA`, and `STged` are boundary rows. Their Layer 2 use is limited to the cell-type/state inference role recorded in the frozen candidate set.

## Topic Branch Organization

The topic is organized by selection cues rather than by separate subtask packages:

- reference-assisted spot-level deconvolution
- marker-gene-assisted deconvolution
- reference-free deconvolution or annotation
- spatially explicit/domain-aware deconvolution
- image/histology/nuclear-morphology-assisted inference
- high-resolution cell placement or single-cell reconstruction
- specialized cell-state or gene-expression deconvolution boundary rows

These branches support conditional selection only. They are not default execution routes.
