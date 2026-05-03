# Data Quality Control Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem`
`Data Quality Control`.

This document defines the topic boundary and candidate freeze. It does not
define commands, callable signatures, execution surfaces, adapter boundaries,
environment bindings, or runtime support.

## Analysis Problem Boundary

`Data Quality Control` covers methods whose primary reusable contribution is
spatial transcriptomics data-quality assessment, QC metric evaluation, removal
or flagging of low-quality spatial observations, or preprocessing workflows
where quality-control handling is a central part of producing analysis-ready
spatial expression data.

The Layer 1 `Subtask` values are branch cues inside this topic only. They are
not separate Layer 2 completion units.

## Source Registry

Primary frozen input:

`/tmp/bioharness_layer2_subagents/input/data_quality_control.json`

The input points to the source registry:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

This Layer 2 package does not mutate the source registry or any formal Layer 2
location.

## Bounded Retrieval Record

Retrieval date: 2026-05-01

Retrieval role: PMID/DOI identity verification, code-link verification, and
benchmark/review screening for the frozen candidate set. Retrieval did not
open the candidate set for expansion.

Retrieval sources:

- frozen candidate input JSON
- PubMed E-utilities ESummary for candidate PMIDs
- PubMed E-utilities ESearch/ESummary for benchmark/review screening
- PubMed/PMC pages for PMID/PMC cross-checks where available
- official Bioconductor package pages for primary code-link verification

Candidate PMID verification query:

```text
40481362,41278534
```

Candidate verification results:

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `SpotSweeper` | 40481362 | 10.1038/s41592-025-02713-3 | PubMed ESummary verified the Nature Methods method-paper identity, publication metadata, and PMC record. |
| `stPipe` | 41278534 | 10.1093/nargab/lqaf167 | PubMed ESummary verified the NAR Genomics and Bioinformatics method-paper identity, publication metadata, and PMC record. |

Code-link verification:

| Tool | Primary code link | Verification result |
| --- | --- | --- |
| `SpotSweeper` | https://bioconductor.org/packages/SpotSweeper | Official Bioconductor package page identified as primary code/documentation source. |
| `stPipe` | https://bioconductor.org/packages/stPipe | Official Bioconductor package page identified as primary code/documentation source. |

Benchmark/review screening query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
("quality control"[Title/Abstract] OR QC[Title/Abstract] OR
 preprocessing[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

The query returned broad reviews, platform/workflow papers, clustering
benchmarks, and related spatial transcriptomics analysis reviews. It did not
identify a dedicated independent benchmark that jointly evaluates and ranks
`SpotSweeper` and `stPipe` for the same QC decision problem.

## Inclusion Rules

Include methods when all of the following are true:

- the frozen input JSON lists the method under `Analysis Problem = Data Quality Control`
- the row has `Registry Status = Include`
- the method has a named reusable computational identity
- the primary reusable contribution is spatial QC or preprocessing/QC for spatial transcriptomics data
- PubMed/DOI metadata can verify the method-paper identity

## Exclusion Rules

Keep outside this topic when the primary contribution is:

- normalization, size-factor estimation, variance stabilization, or HVG selection without a primary QC claim
- denoising, imputation, enhancement, artifact correction, segmentation, deconvolution, domain clustering, or spatial gene prediction as the main claim
- general single-cell QC without spatial transcriptomics support
- workflow-engine infrastructure without a named spatial transcriptomics QC method
- a method not present in the frozen input JSON

## Final Candidate Freeze

| Tool Name | Layer 1 subtask cue | Evidence identity |
| --- | --- | --- |
| `SpotSweeper` | Spatially aware quality control | PMID 40481362; DOI 10.1038/s41592-025-02713-3 |
| `stPipe` | Spatial preprocessing / QC pipeline | PMID 41278534; DOI 10.1093/nargab/lqaf167 |

## Boundary Notes

`SpotSweeper` is the focused post-count spatial QC branch. It is most relevant
when a count object already exists and spatially structured QC artifacts are
the selection problem.

`stPipe` is the upstream preprocessing/QC workflow branch. It is most relevant
when the selection problem starts before an analysis-ready spatial expression
object is available.

The package intentionally does not add adjacent QC workflows discovered during
review screening, because the candidate set is frozen.

## Topic Branch Organization

The topic is organized by method-selection cues rather than by subtask as
separate packages:

- post-count spatially aware QC and artifact flagging
- upstream preprocessing plus QC workflow

These branches support conditional selection only. They are not default
execution routes.
