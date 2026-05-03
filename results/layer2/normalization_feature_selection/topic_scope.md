# Normalization / Feature Selection Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem`
`Normalization / Feature Selection`.

This document defines the topic boundary and candidate freeze. It does not
define commands, callable signatures, execution surfaces, adapter boundaries,
environment bindings, or runtime support.

## Analysis Problem Boundary

`Normalization / Feature Selection` covers methods whose primary reusable
contribution is either:

- normalization, scaling, or correction of measured spatial transcriptomics
  expression values with spatial context;
- feature or gene-panel selection for targeted spatial transcriptomics assay
  design.

The Layer 1 `Subtask` values are used only as branch cues inside this topic.
They are not separate Layer 2 completion units.

## Source Registry

Primary source registry:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

Frozen candidate input:

`/tmp/bioharness_layer2_subagents/input/normalization_feature_selection.json`

The input file freezes the candidate set to `SpaNorm` and `scGIST` and records
no excluded registry rows for this analysis problem.

## Bounded Retrieval Record

Retrieval date: 2026-05-01

Retrieval role: candidate-freeze verification, PMID/DOI/code-link completion,
and benchmark/review screening. This retrieval did not open the candidate set
for expansion.

Retrieval sources:

- frozen candidate input JSON
- current Layer 1 working registry path recorded in the input JSON
- PubMed E-utilities ESummary for frozen candidate PMIDs
- PubMed E-utilities EFetch XML for method abstracts and publication metadata
- PubMed E-utilities ESearch/ESummary for benchmark/review screening
- official code-access pages checked only for the frozen candidates

Candidate PMID verification query:

```text
40301877,38408997
```

Candidate verification result:

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `SpaNorm` | 40301877 | 10.1186/s13059-025-03565-y | PubMed confirms Genome Biology method-paper identity. |
| `scGIST` | 38408997 | 10.1186/s13059-024-03185-y | PubMed confirms Genome Biology method-paper identity. |

Code-link verification:

| Tool | Primary code link | Verification note |
| --- | --- | --- |
| `SpaNorm` | https://bioconductor.org/packages/SpaNorm | Bioconductor package route resolved on 2026-05-01. |
| `scGIST` | https://github.com/yafi38/scGIST | GitHub repository responded on 2026-05-01; PubMed XML also records the paper reference to this repository and Zenodo DOI 10.5281/zenodo.10467039. |

Benchmark/review screening query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
(normalization[Title/Abstract] OR normalisation[Title/Abstract] OR
 "feature selection"[Title/Abstract] OR "gene panel"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

The PubMed query returned 16 records on 2026-05-01. It identified broad reviews
and adjacent method papers, including spatial transcriptomics computational
reviews, a renal spatial-transcriptomics normalization review, and adjacent
gene-selection or gene-panel papers. It did not identify a dedicated
independent benchmark that jointly compares `SpaNorm` and `scGIST` as
alternatives. This is expected because the frozen methods occupy different
branches: normalization versus targeted gene-panel design.

## Inclusion Rules

Include methods when all of the following are true:

- the frozen input JSON lists the method under `Analysis Problem =
  Normalization / Feature Selection`;
- the row belongs to the current candidate freeze;
- the method has a named reusable computational identity;
- the primary reusable contribution is spatial-aware normalization or
  spatial-transcriptomics-oriented feature/gene-panel selection;
- PubMed/DOI metadata can verify the method-paper identity.

## Exclusion Rules

Exclude or keep outside the frozen set when the primary contribution is:

- generic preprocessing or backbone workflow support;
- denoising, imputation, artifact correction, segmentation, integration,
  deconvolution, domain clustering, spatially variable gene detection, or
  communication inference as the main task;
- general single-cell normalization or highly variable gene selection without a
  direct spatial-transcriptomics method identity in the frozen candidate input;
- assay/workflow description without a named reusable downstream method;
- methods found during screening but absent from the frozen input JSON.

## Final Candidate Freeze

| Tool Name | Layer 1 subtask cue | Evidence identity |
| --- | --- | --- |
| `SpaNorm` | Spatial-aware normalization | PMID 40301877; DOI 10.1186/s13059-025-03565-y |
| `scGIST` | Gene panel / feature selection | PMID 38408997; DOI 10.1186/s13059-024-03185-y |

## Boundary Notes

`SpaNorm` belongs to the normalization branch. It should not be used as a
feature-selection or panel-design substitute.

`scGIST` belongs to the targeted gene-panel feature-selection branch. It should
not be used as a normalization method for an already measured spatial
expression matrix.

Adjacent spatial feature-selection methods surfaced during benchmark/review
screening are not added because the candidate set is frozen by the input JSON.

## Topic Branch Organization

The topic is organized by method-selection cues rather than by Layer 1 subtask
as separate packages:

- post-capture spatial-aware normalization;
- pre-assay targeted spatial transcriptomics gene-panel design.

These branches support conditional selection only. They are not default
execution routes.
