# Super-resolution Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem`
`Super-resolution`.

This document defines the topic boundary and candidate freeze. It does not
define commands, callable signatures, execution surfaces, adapter boundaries,
environment bindings, default methods, or runtime support.

## Analysis Problem Boundary

`Super-resolution` covers methods whose main reusable contribution is to infer,
generate, or analyze spatial transcriptomics signal at a finer spatial
resolution than the original spot/grid representation, or to operate directly
on high-density/submicron spatial transcriptomics in a way that supports
high-resolution downstream interpretation.

The Layer 1 `Subtask` value is used only as a branch cue inside this topic. It
does not create a separate Layer 2 completion unit.

## Source Registry

Primary source registry:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

Frozen candidate input:

`/tmp/bioharness_layer2_subagents/input/super_resolution.json`

## Bounded Retrieval Record

Retrieval date: 2026-05-01

Retrieval role: PMID/DOI identity verification, code-link gap screening, and
benchmark/review screening. This retrieval did not open the candidate set for
expansion.

Retrieval sources:

- frozen candidate input JSON
- current repository scope and Layer 1-to-substrate framing documents
- PubMed E-utilities ESummary for frozen candidate PMIDs
- PubMed E-utilities ESearch/ESummary for benchmark/review screening

Candidate PMID verification query:

```text
39266749,38168986,39656774,40074951,37164011,34845373,40954300,38647109
```

Benchmark/review screening queries:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
("super-resolution"[Title/Abstract] OR "super resolved"[Title/Abstract] OR
 "single-cell resolution"[Title/Abstract] OR "high-density"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR comparison[Title/Abstract] OR
 review[Publication Type])
```

```text
"spatial transcriptomics"[Title/Abstract]
AND
("super-resolution"[Title/Abstract] OR "super-resolved"[Title/Abstract] OR
 "high-density"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR benchmarking[Title/Abstract] OR
 "systematic review"[Title/Abstract])
```

```text
"spatial transcriptomics"[Title/Abstract]
AND
("super-resolution"[Title/Abstract] OR "super-resolved"[Title/Abstract] OR
 "high-density"[Title/Abstract])
AND
review[Publication Type]
```

The broad screen retrieved adjacent reviews, method papers, and spatial
transcriptomics benchmarks for other tasks. A narrower screen retrieved iSCALE,
its preprint predecessor, and a related histology-to-super-resolution method,
but did not identify a dedicated independent benchmark that jointly compares
and ranks the eight frozen candidates. Therefore, the decision tree uses direct
method-paper evidence and explicit Layer 2 logic review rather than benchmark
ranking.

Code-link verification note: the bounded PubMed pass verified paper identity
and DOI metadata. It did not verify primary code links for methods where the
frozen input lacked a code URL. Those rows are recorded as `unclear`, and no
code link was invented.

## Inclusion Rules

Include methods when all of the following are true:

- the frozen input JSON lists the method under `Analysis Problem =
  Super-resolution`
- the method has a named reusable computational identity
- the method's topic role is resolution enhancement, high-density ST
  generation, subspot or single-cell-resolution expression inference,
  pseudo-single-cell reconstruction, tissue-architecture reconstruction, or
  segmentation-free high-resolution factorization
- PubMed/DOI metadata can verify the method-paper identity

## Exclusion Rules

Do not add methods outside the frozen candidate set, even when PubMed screening
finds newer or adjacent super-resolution methods.

Keep methods outside this topic when the primary contribution is:

- segmentation or transcript assignment without super-resolution inference
- denoising, imputation, normalization, artifact correction, or feature
  selection as the main claim
- spatial domain detection, integration, cell type inference, or cell-cell
  communication as the main claim
- assay/workflow description without a named reusable downstream method
- broad review or benchmark literature without a frozen candidate identity

## Final Candidate Freeze

| Tool Name | Layer 1 subtask cue | Evidence identity |
| --- | --- | --- |
| `FICTURE` | Resolution enhancement of spot-based spatial transcriptomics | PMID 39266749; DOI 10.1038/s41592-024-02415-2 |
| `iStar` | Resolution enhancement of spot-based spatial transcriptomics | PMID 38168986; DOI 10.1038/s41587-023-02019-9 |
| `scstGCN` | Resolution enhancement of spot-based spatial transcriptomics | PMID 39656774; DOI 10.1093/bib/bbae630 |
| `Spotiphy` | Resolution enhancement of spot-based spatial transcriptomics | PMID 40074951; DOI 10.1038/s41592-025-02622-5 |
| `TESLA` | Resolution enhancement of spot-based spatial transcriptomics | PMID 37164011; DOI 10.1016/j.cels.2023.03.008 |
| `XFuse` | Resolution enhancement of spot-based spatial transcriptomics | PMID 34845373; DOI 10.1038/s41587-021-01075-3 |
| `iSCALE` | Resolution enhancement of spot-based spatial transcriptomics | PMID 40954300; DOI 10.1038/s41592-025-02770-8 |
| `STAGE` | Resolution enhancement of spot-based spatial transcriptomics | PMID 38647109; DOI 10.1093/nar/gkae294 |

## Boundary Notes

`FICTURE` is retained because the frozen input places it in Super-resolution
after taxonomy closure, but its main role is segmentation-free analysis of
submicron-resolution spatial transcriptomics rather than classic spot
upsampling.

`TESLA` is tumor-ecosystem oriented; this package uses only its
super-resolution role and carries tissue-context transfer as a caveat.

`Spotiphy`, `scstGCN`, and iStar are image-associated reconstruction routes, but
their output semantics differ: pseudo-single-cell whole-transcriptome map,
single-cell-resolution expression inference, and tissue architecture inference.

`iSCALE` and `STAGE` are recent high-density or large-area reconstruction
routes with code-access uncertainty in this bounded pass.

## Topic Branch Organization

The topic is organized by method-selection cues rather than by separate
subtask packages:

- already high-density/submicron data and segmentation-free factorization
- histology-guided tissue-architecture inference
- graph/image single-cell-resolution expression inference
- pseudo-single-cell whole-section reconstruction
- tumor-ecosystem super-resolution
- foundational deep image-expression fusion
- large-area cellular-level reconstruction
- high-density ST generation

These branches support conditional selection only. They are not default
execution routes.
