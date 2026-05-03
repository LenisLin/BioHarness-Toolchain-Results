# Spatial Clonal Analysis Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem`
`Spatial Clonal Analysis`.

This document defines the topic boundary and candidate freeze. It does not
define commands, callable signatures, execution surfaces, adapter boundaries,
environment bindings, or runtime support.

## Analysis Problem Boundary

`Spatial Clonal Analysis` covers methods whose primary reusable contribution is
spatial tumor clone or subclone inference from spatial transcriptomics, spatial
copy-number signal, matched genomic data, or integrated spatial/genomic
evidence.

The Layer 1 `Subtask` values are used only as branch cues inside this topic.
They are not separate Layer 2 completion units.

## Source Registry

Primary source registry from the frozen input:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

Frozen candidate input:

`/tmp/bioharness_layer2_subagents/input/spatial_clonal_analysis.json`

## Bounded Retrieval Record

Retrieval date: 2026-05-01

Retrieval role: candidate PMID/DOI verification, code-link verification, and
benchmark/review screening. This retrieval did not open the candidate set for
expansion.

Retrieval sources:

- frozen Layer 1 candidate JSON
- PubMed E-utilities ESummary and EFetch for frozen candidate PMIDs
- PubMed E-utilities ESearch/ESummary for benchmark/review screening
- PubMed Central full-text pages where available
- publisher article page for Clonalscope
- official method repositories or package pages

Candidate PMID verification query:

```text
39478176,40954304,33022659,39472583,40317049
```

Benchmark/review screening query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
(clone[Title/Abstract] OR subclone[Title/Abstract] OR
 clonal[Title/Abstract] OR "copy number"[Title/Abstract] OR
 CNA[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

Method-name benchmark/review screen:

```text
(CalicoST[Title/Abstract] OR Clonalscope[Title/Abstract] OR
 Tumoroscope[Title/Abstract] OR SlideCNA[Title/Abstract] OR
 ("STARCH"[Title/Abstract] AND "spatial transcriptomics"[Title/Abstract]))
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

The broad query retrieved broad spatial-transcriptomics, cancer, and tumor
evolution reviews and related method papers. The method-name query retrieved a
2026 bioRxiv preprint on benchmarking scRNA-seq copy-number inference, not a
dedicated independent benchmark of the five frozen spatial clonal-analysis
methods. Therefore, the decision tree uses method-paper evidence and explicit
Layer 2 logic review rather than a global benchmark ranking.

## Inclusion Rules

Include methods when all of the following are true:

- the frozen candidate input includes the method
- the row belongs to `Analysis Problem = Spatial Clonal Analysis`
- the method has a named reusable computational identity
- the primary role is spatial clone/subclone detection, CNA-based spatial clone
  inference, clone deconvolution, clone-specific expression, or tumor
  phylogeography
- PubMed/DOI metadata can verify the method-paper identity

## Exclusion Rules

Exclude or keep outside the frozen set when the primary contribution is:

- general spatial domain identification without tumor clone or CNA inference
- cell-type deconvolution without clone or subclone modeling
- cell-cell communication, perturbation, trajectory, or program discovery
- general scRNA-seq CNA inference without spatial transcriptomics support in
  the frozen candidate row
- assay/workflow description without a named reusable downstream method
- candidate discovery after the frozen input JSON

## Final Candidate Freeze

| Tool Name | Layer 1 subtask cue | Evidence identity |
| --- | --- | --- |
| `CalicoST` | Spatial subclone detection | PMID 39478176; DOI 10.1038/s41592-024-02438-9 |
| `Clonalscope` | Spatial subclone detection | PMID 40954304; DOI 10.1038/s41592-025-02773-5 |
| `STARCH` | Spatial CNA / clone inference from ST | PMID 33022659; DOI 10.1088/1478-3975/abbe99 |
| `Tumoroscope` | Spatial clone deconvolution / clone-specific expression | PMID 39472583; DOI 10.1038/s41467-024-53374-3 |
| `SlideCNA` | Spatial CNA / subclone detection from sparse ST | PMID 40317049; DOI 10.1186/s13059-025-03573-y |

## Boundary Notes

`STARCH` is retained as an older direct spatial transcriptomics clone/CNA
inference method. It is useful as a total-CNA, expression-and-coordinate
baseline, but it should not be promoted to an allele-specific, mutation-based,
or current default route.

`Tumoroscope` is not a pure ST-only method. Its selection branch depends on
matched genomic and pathology-image-derived inputs.

`SlideCNA` is direct spatial CNA evidence for sparse Slide-seq-like data and
only potential subclone detection beyond its CNA scoring should remain
caveated.

`Clonalscope` spans single-cell and spatial omic sequencing data. Its Layer 2
role is spatial subclone detection from copy-number profiles, not a general
single-cell CNA topic.

## Topic Branch Organization

The topic is organized by method-selection cues rather than by Layer 1 subtask
as separate packages:

- allele-specific CNA and phylogeography
- copy-number-profile subclone detection
- ST-only total-CNA clone inference
- matched DNA and point-mutation clone deconvolution
- sparse high-resolution Slide-seq-like CNA recovery

These branches support conditional selection only. They are not default
execution routes.
