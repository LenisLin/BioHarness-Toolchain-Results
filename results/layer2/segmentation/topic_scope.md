# Segmentation Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem`
`Segmentation`.

This document defines the topic boundary and candidate freeze. It does not
define commands, callable signatures, execution surfaces, adapter boundaries,
environment bindings, or runtime support.

## Analysis Problem Boundary

`Segmentation` covers methods whose primary reusable contribution is cell
segmentation, transcript-to-cell assignment, transcript spot detection, or
joint image segmentation/classification in spatial transcriptomics or closely
adjacent spatial-omics imaging settings.

The Layer 1 `Subtask` values are used only as branch cues inside this topic.
They are not separate Layer 2 completion units.

## Source Registry

Primary frozen input:

`/tmp/bioharness_layer2_subagents/input/segmentation.json`

The input cites this source registry:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

The candidate set is frozen from the input JSON and was not expanded during
this Layer 2 pass.

## Bounded Retrieval Record

Retrieval date: 2026-05-01

Retrieval role: PMID, DOI, code-link, and benchmark/review verification for
the frozen candidate set only. Retrieval did not open the candidate set for
new methods.

Retrieval sources:

- current frozen candidate JSON
- PubMed E-utilities ESummary for frozen candidate PMIDs
- PubMed E-utilities EFetch abstracts for frozen candidate PMIDs
- PubMed E-utilities ESearch/ESummary for benchmark/review screening
- PubMed Central pages linked from PubMed records for code-link checks when
  available
- Layer 1 frozen registry fields for candidate provenance

Candidate PMID verification query:

```text
34650268,40681510,37429992,40161614,39763408,40481364,41265398,39578628
```

Verified candidate identities:

| Tool Name | PMID | DOI | Verification note |
| --- | --- | --- | --- |
| `Baysor` | 34650268 | 10.1038/s41587-021-01044-w | PubMed verifies the Nature Biotechnology method paper. The frozen input omitted the DOI; PubMed supplied it. |
| `Bering` | 40681510 | 10.1038/s41467-025-60898-9 | PubMed verifies the Nature Communications method paper and PMC full text. |
| `SCS` | 37429992 | 10.1038/s41592-023-01939-3 | PubMed verifies the Nature Methods method paper. |
| `segger` | 40161614 | 10.1101/2025.03.14.643160 | PubMed verifies the bioRxiv preprint record and PMC full text. |
| `UCS` | 39763408 | 10.1002/smtd.202400975 | PubMed verifies the Small Methods method paper and PMC full text. |
| `Spotiflow` | 40481364 | 10.1038/s41592-025-02662-x | PubMed verifies the Nature Methods method paper. |
| `Piscis` | 41265398 | 10.1016/j.cels.2025.101448 | PubMed verifies the Cell Systems method paper; PubMed also links an updated preprint record, PMID 38352551, to the peer-reviewed paper. |
| `CelloType` | 39578628 | 10.1038/s41592-024-02513-1 | PubMed verifies the Nature Methods method paper and PMC full text. |

Code-link check:

```text
PubMed/PMC-linked candidate pages were checked for GitHub or official code
links. Links from PubMed abstracts, PMC code-availability sections, and the
frozen input registry were used only as access traces, not as runtime-support
claims.
```

Benchmark/review screening query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatial omics"[Title/Abstract] OR
 "imaging-based spatial transcriptomics"[Title/Abstract] OR
 "subcellular spatial transcriptomics"[Title/Abstract])
AND
("cell segmentation"[Title/Abstract] OR
 "transcript assignment"[Title/Abstract] OR
 "spot detection"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR benchmarking[Title/Abstract] OR
 comparison[Title/Abstract] OR review[Publication Type])
```

This query returned 23 PubMed records. The relevant returns included broad
reviews, platform benchmarks, and method papers with internal benchmarks, but
no suitable independent benchmark was found that jointly compares and ranks all
eight frozen methods.

Candidate-name benchmark/review screen:

```text
(Baysor[Title/Abstract] OR Bering[Title/Abstract] OR segger[Title/Abstract] OR
 Spotiflow[Title/Abstract] OR Piscis[Title/Abstract] OR
 CelloType[Title/Abstract])
AND
("spatial transcriptomics"[Title/Abstract] OR
 "spatial omics"[Title/Abstract] OR "RNA FISH"[Title/Abstract] OR
 fluorescence[Title/Abstract])
AND
(benchmark[Title/Abstract] OR benchmarking[Title/Abstract] OR
 comparison[Title/Abstract] OR review[Publication Type])
```

This bounded candidate-name query returned Bering and a broad computational
solutions review, not an independent all-candidate segmentation benchmark.

## Inclusion Rules

Include methods when all of the following are true:

- the frozen input places the method under `Analysis Problem = Segmentation`
- the method has a named reusable computational identity
- the method's primary reusable contribution is cell segmentation,
  transcript-to-cell assignment, transcript spot detection, or joint
  segmentation/classification relevant to spatial transcriptomics or adjacent
  spatial-omics imaging
- PubMed/DOI metadata can verify the method-paper identity or the input's
  preprint identity

## Exclusion Rules

Exclude or keep outside the frozen set when the primary contribution is:

- general image preprocessing without segmentation, spot detection, or object
  assignment
- downstream cell type inference without a segmentation contribution
- generic tissue classification without segmentation
- spatial domain identification, graph construction, or neighborhood analysis
  after segmentation
- assay/workflow description without a named reusable segmentation or
  spot-detection method
- candidate methods not present in the frozen input JSON

## Final Candidate Freeze

| Tool Name | Layer 1 subtask cue | Evidence identity |
| --- | --- | --- |
| `Baysor` | Cell segmentation / transcript assignment | PMID 34650268; DOI 10.1038/s41587-021-01044-w |
| `Bering` | Cell segmentation / transcript assignment | PMID 40681510; DOI 10.1038/s41467-025-60898-9 |
| `SCS` | Cell segmentation / transcript assignment | PMID 37429992; DOI 10.1038/s41592-023-01939-3 |
| `segger` | Cell segmentation / transcript assignment | PMID 40161614; DOI 10.1101/2025.03.14.643160 |
| `UCS` | Cell segmentation / transcript assignment | PMID 39763408; DOI 10.1002/smtd.202400975 |
| `Spotiflow` | Transcript spot detection | PMID 40481364; DOI 10.1038/s41592-025-02662-x |
| `Piscis` | Transcript spot detection | PMID 41265398; DOI 10.1016/j.cels.2025.101448 |
| `CelloType` | Cell segmentation / transcript assignment | PMID 39578628; DOI 10.1038/s41592-024-02513-1 |

## Boundary Notes

`Spotiflow` and `Piscis` are upstream spot-detection methods. They can be
critical for imaging-based transcript workflows, but their direct output is
spot coordinates rather than cell masks or transcript-to-cell assignments.

`CelloType` is image segmentation plus classification. It belongs in the frozen
candidate set because the current input places it under Segmentation, but its
decision branch is not interchangeable with transcript-coordinate-first methods.

`segger` is retained with explicit preprint caveats. Its benchmark and scale
claims should be treated as method-paper evidence until independent validation
exists.

## Topic Branch Organization

The topic is organized by method-selection cues rather than by Layer 1 subtask
as separate packages:

- transcript-coordinate-first cell segmentation / transcript assignment
- graph or transfer-learning segmentation and annotation
- image-plus-transcript high-resolution spot assignment
- nuclei-plus-transcript unified subcellular segmentation
- upstream fluorescence spot detection
- joint image segmentation and classification

These branches support conditional selection only. They are not default
execution routes.
