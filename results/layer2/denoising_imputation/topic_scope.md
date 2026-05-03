# Denoising / Imputation Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem`
`Denoising / Imputation`.

This document defines the topic boundary and candidate freeze. It does not
define commands, callable signatures, execution surfaces, adapter boundaries,
environment bindings, or runtime support.

## Analysis Problem Boundary

`Denoising / Imputation` covers methods whose primary reusable contribution is
spatial transcriptomics expression denoising, smoothing, signal recovery,
enhancement, or imputation.

The Layer 1 `Subtask` values are used only as branch cues inside this topic.
They are not separate Layer 2 completion units.

## Source Registry

Primary source registry:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

Supporting Layer 1 notes:

- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_preprocessing_layer1_split_manual_validation.md`
- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_backbone_package_ledger.md`
- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_high_priority_journal_sweep_and_backbone_correction.md`

The current split note defines the topic as expression denoising, smoothing,
enhancement, and imputation when the primary contribution is signal recovery.

## Bounded Retrieval Record

Retrieval date: 2026-05-01

Retrieval role: candidate-freeze verification and evidence/source completion.
This retrieval did not open the candidate set for expansion.

Retrieval sources:

- current Layer 1 working registry
- Layer 1 preprocessing split and backbone-correction notes
- PubMed E-utilities ESummary for frozen candidate PMIDs
- PubMed E-utilities ESearch/ESummary for benchmark/review screening
- DOI landing pages and publisher pages where needed
- official method repositories or official code-availability links

Candidate PMID verification query:

```text
36376296,39378875,35927477,40794943,38628114,40597202,41633767
```

Benchmark/review screening query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
(denoising[Title/Abstract] OR imputation[Title/Abstract] OR
 enhancement[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

The benchmark/review query returned broad reviews and related method papers but
did not identify a dedicated independent benchmark that jointly ranks the seven
frozen denoising/imputation candidates. Therefore, the decision tree uses
method-paper evidence and explicit Layer 2 logic review rather than a global
benchmark ranking.

## Inclusion Rules

Include methods when all of the following are true:

- the current Layer 1 working registry marks the row as `Include`
- the row belongs to `Analysis Problem = Denoising / Imputation`
- the method has a named reusable computational identity
- the primary reusable contribution is expression denoising, imputation,
  smoothing, signal recovery, enhancement, or gene-filtering-denoising
- PubMed/DOI metadata can verify the method-paper identity

## Exclusion Rules

Exclude or keep outside the frozen set when the primary contribution is:

- general ecosystem preprocessing or backbone workflow support
- spatial artifact, contamination, vignetting, or molecular admixture correction
- normalization, size-factor estimation, variance stabilization, or HVG/feature
  selection as the main claim
- histology-to-expression prediction as the main claim
- super-resolution map generation as the main claim
- cell type inference, deconvolution, or annotation as the main claim
- assay/workflow description without a named reusable downstream method
- preprint-only evidence that was not promoted into the current Layer 1 frozen
  set

Backbone packages such as `Scanpy`, `scater`, `scran`, `Squidpy`,
`sctransform`, `SpatialData`, and `Giotto Suite` are excluded as concrete
method rows in this Layer 2 topic.

## Final Candidate Freeze

| Tool Name | Layer 1 subtask cue | Evidence identity |
| --- | --- | --- |
| `MIST` | Region-aware denoising / imputation | PMID 36376296; DOI 10.1038/s41467-022-34567-0 |
| `SpotGF` | Denoising / gene filtering | PMID 39378875; DOI 10.1016/j.cels.2024.09.005 |
| `Sprod` | Image- and position-informed denoising | PMID 35927477; DOI 10.1038/s41592-022-01560-w |
| `DiffusionST` | Diffusion-based denoising / imputation | PMID 40794943; DOI 10.1093/bib/bbaf390 |
| `stDiff` | Reference-assisted imputation | PMID 38628114; DOI 10.1093/bib/bbae171 |
| `stGRL` | Graph contrastive denoising / imputation | PMID 40597202; DOI 10.1186/s12915-025-02290-z |
| `spRefine` | Reference-free denoising / imputation | PMID 41633767; DOI 10.1101/gr.281001.125 |

## Boundary Notes

`SpotGF` is retained because the current Layer 1 placement treats
optimal-transport gene filtering as a denoising contribution. It remains a
topic boundary row because its output is closer to feature filtering than
matrix imputation.

`DiffusionST`, `stGRL`, and `spRefine` also have downstream representation or
domain-analysis claims. In this Layer 2 topic, only their denoising,
imputation, and enhancement roles are used for method selection.

`stDiff` is reference-assisted; the decision tree must keep reference-match and
reference-bias caveats visible.

## Topic Branch Organization

The topic is organized by method-selection cues rather than by Layer 1 subtask
as separate packages:

- conservative denoising or gene filtering
- reference-assisted imputation
- image/position-informed denoising
- region-aware imputation
- deep graph or generative enhancement
- reference-free model-prior imputation

These branches support conditional selection only. They are not default
execution routes.
