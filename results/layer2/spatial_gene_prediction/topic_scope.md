# Spatial Gene Prediction Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem`
`Spatial Gene Prediction`.

This document defines the topic boundary and candidate freeze. It does not
define commands, callable signatures, execution surfaces, adapter boundaries,
environment bindings, or runtime support.

## Analysis Problem Boundary

`Spatial Gene Prediction` covers methods whose primary reusable contribution is
predicting unmeasured or unobserved spatial gene expression, enhancing measured
spatial transcriptomics with reference data, reconstructing expression at
higher cellular or molecular resolution, imputing missing spatial genes, or
calibrating uncertainty for predicted spatial expression.

The Layer 1 `Subtask` values are used only as branch cues inside this topic.
They are not separate Layer 2 completion units.

## Source Registry

Primary frozen input:

`/tmp/bioharness_layer2_subagents/input/spatial_gene_prediction.json`

Source registry named by the frozen input:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

The candidate set is frozen from the input JSON. This Layer 2 package does not
add methods even when PubMed retrieval surfaces related methods or comparison
papers.

## Bounded Retrieval Record

Retrieval date: 2026-05-01

Retrieval role: PMID/DOI identity verification, code-link support checks where
visible in PubMed records or the frozen input, and benchmark/review screening.
This retrieval did not open the candidate set for expansion.

Retrieval sources:

- frozen candidate input JSON
- local repo scope and Layer 1 transition documents
- Layer 2 topic completion and formal method-selection standards
- PubMed E-utilities ESearch, ESummary, and EFetch for frozen candidate PMIDs
- PubMed E-utilities ESearch/ESummary for missing or mismatched candidate
  identifiers
- PubMed E-utilities ESearch/ESummary for benchmark/review screening

Candidate PMID verification query:

```text
40954301,35849101,32955565,39439006,34252941,38145948,39609107,40923764,40057378,40442373
```

Additional bounded identity queries:

```text
TISSUE uncertainty-calibrated prediction single-cell spatial transcriptomics[Title/Abstract]
SpatialScope[All Fields]
"Spatial transcriptomic reconstruction at cellular level"[Title]
```

Benchmark/review screening query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
("gene prediction"[Title/Abstract] OR "gene enhancement"[Title/Abstract] OR
 "histology-to-expression"[Title/Abstract] OR
 "missing gene imputation"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

The benchmark/review query returned a small set of related records, including a
2025 bioRxiv preprint on data-quality effects in deep-learning prediction from
histology images and related gene-prediction/comparison papers. It did not
identify a dedicated independent benchmark that jointly compares and ranks the
11 frozen candidates. Therefore, the decision tree uses method-paper evidence,
bounded review findings, and explicit Layer 2 logic review rather than a global
benchmark ranking.

## Identifier Corrections And Gaps

The frozen candidate set is unchanged, but two identifier issues are recorded:

- `TISSUE`: frozen input PMID `39609107` resolves to an unrelated
  Phytotherapy Research article. Bounded PubMed title retrieval identifies the
  correct method-paper record as PMID `38347138`, DOI
  `10.1038/s41592-024-02184-y`.
- `SpatialScope`: frozen input did not provide PMID or DOI. Bounded PubMed
  retrieval identifies PMID `38030617`, DOI `10.1038/s41467-023-43629-w`.

Code-link verification is incomplete for methods whose frozen input and PubMed
abstract did not expose a primary source link. Those rows use `unclear` rather
than inferred links.

## Inclusion Rules

Include methods when all of the following are true:

- the method appears in the frozen candidate input for
  `Analysis Problem = Spatial Gene Prediction`
- the method has a named reusable computational identity
- the primary reusable contribution is spatial expression prediction,
  enhancement, reconstruction, missing-gene imputation, fine-resolution
  prediction, or uncertainty calibration of spatial gene predictions
- PubMed/DOI metadata can verify the method-paper identity, or the verification
  gap is explicitly recorded without removing the frozen candidate

## Exclusion Rules

Exclude or keep outside this package when the primary contribution is:

- general preprocessing, normalization, feature selection, or denoising without
  a spatial gene prediction role
- spatial domain identification, clustering, or trajectory analysis as the main
  claim
- segmentation, transcript assignment, or cell type inference without a gene
  prediction or missing-gene imputation claim
- cell-cell communication or perturbation analysis using predicted expression
  as downstream input only
- broad foundation models without a specific spatial gene prediction function
  in the frozen candidate input
- related benchmark, review, or comparison papers that do not correspond to a
  frozen candidate method row

## Final Candidate Freeze

| Tool Name | Layer 1 subtask cue | Evidence identity |
| --- | --- | --- |
| `GHIST` | Gene expression completion / prediction | PMID 40954301; DOI 10.1038/s41592-025-02795-z |
| `Hist2ST` | Gene expression completion / prediction | PMID 35849101; DOI 10.1093/bib/bbac297 |
| `SpaGE` | Gene expression completion / prediction | PMID 32955565; DOI 10.1093/nar/gkaa740 |
| `SpatialScope` | Gene expression completion / prediction | PMID 38030617; DOI 10.1038/s41467-023-43629-w |
| `STASCAN` | Gene expression completion / prediction | PMID 39439006; DOI 10.1186/s13059-024-03421-5 |
| `stPlus` | Gene expression completion / prediction | PMID 34252941; DOI 10.1093/bioinformatics/btab298 |
| `THItoGene` | Gene expression completion / prediction | PMID 38145948; DOI 10.1093/bib/bbad464 |
| `TISSUE` | Gene expression completion / prediction | PMID 38347138; DOI 10.1038/s41592-024-02184-y |
| `FmH2ST` | Histology-to-expression prediction | PMID 40923764; DOI 10.1093/nar/gkaf865 |
| `stAI` | Missing gene imputation / annotation | PMID 40057378; DOI 10.1093/nar/gkaf158 |
| `OmiCLIP` | Histology-to-expression prediction | PMID 40442373; DOI 10.1038/s41592-025-02707-1 |

## Boundary Notes

`STASCAN` remains a boundary row because its direct output is a fine-resolution
cell-distribution map. It is retained because the frozen input places it in the
prediction branch and the method integrates expression and histology to predict
fine-resolution spatial cellular structure.

`TISSUE` is not primarily another expression predictor. It is retained because
uncertainty calibration is a distinct Layer 2 selection route when predicted
spatial expression will feed downstream analysis.

`OmiCLIP` is broader than a single spatial gene prediction algorithm. In this
package, only the visual-omics and Loki spatial gene-expression prediction role
is used.

## Topic Branch Organization

The topic is organized by method-selection cues rather than by Layer 1 subtask
as separate packages:

- histology-to-expression prediction
- scRNA-reference-assisted transcriptome enhancement
- cellular-resolution reconstruction
- fine-resolution cell-map prediction
- uncertainty calibration for predicted expression
- single-cell missing-gene imputation with annotation coupling
- visual-omics or image foundation-model prediction

These branches support conditional selection only. They are not default
execution routes.
