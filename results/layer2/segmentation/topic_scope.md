# Segmentation Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem`
`Segmentation`.

This document defines the topic boundary and candidate freeze. It does not
define commands, callable interfaces, execution surfaces, adapter boundaries,
environment bindings, or execution support.

## Analysis Problem Boundary

`Segmentation` covers methods whose primary reusable contribution is cell
segmentation, transcript-to-cell assignment, transcript spot detection,
histology/IF image-processing support for segmentation workflows, or joint image
segmentation/classification in spatial transcriptomics or closely adjacent
spatial-omics imaging settings.

The Layer 1 `Subtask` values are used only as branch cues inside this topic.
They are not separate Layer 2 completion units.

## Source Registry

Primary frozen source registry:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/layer1_spatial_method_registry.csv`

Structured Layer 2 package source table:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/segmentation/method_table.json`

The candidate set is frozen from the current Layer 1 registry and was not
expanded beyond the eleven `Segmentation` rows in that registry during this
Layer 2 reprocess.

## Bounded Retrieval Record

Original retrieval date: 2026-05-01

Targeted reprocess date: 2026-05-05

Retrieval role: PMID, DOI, code-link, and boundary verification for the current
Layer 1 Segmentation candidate set only. Retrieval did not open the candidate
set for new methods or perform a full literature redo.

Candidate PMID verification set:

```text
34650268,40681510,37429992,40161614,39763408,38218939,38510173,38434932,40481364,41265398,39578628
```

Verified candidate identities and code traces:

| Tool Name | PMID | DOI | Primary code/access trace |
| --- | --- | --- | --- |
| `Baysor` | 34650268 | 10.1038/s41587-021-01044-w | https://github.com/kharchenkolab/Baysor |
| `Bering` | 40681510 | 10.1038/s41467-025-60898-9 | https://github.com/jian-shu-lab/Bering |
| `SCS` | 37429992 | 10.1038/s41592-023-01939-3 | https://github.com/chenhcs/SCS |
| `segger` | 40161614 | 10.1101/2025.03.14.643160 | https://github.com/PMBio/segger |
| `UCS` | 39763408 | 10.1002/smtd.202400975 | https://github.com/YangLabHKUST/UCS |
| `BIDCell` | 38218939 | 10.1038/s41467-023-44560-w | https://github.com/SydneyBioX/BIDCell |
| `VistoSeg` | 38510173 | 10.1017/S2633903X23000235 | https://github.com/LieberInstitute/VistoSeg |
| `STCellbin` | 38434932 | 10.46471/gigabyte.110 | https://github.com/STOmics/STCellbin |
| `Spotiflow` | 40481364 | 10.1038/s41592-025-02662-x | https://github.com/weigertlab/spotiflow |
| `Piscis` | 41265398 | 10.1016/j.cels.2025.101448 | https://github.com/zjniu/Piscis |
| `CelloType` | 39578628 | 10.1038/s41592-024-02513-1 | https://github.com/tanlabcode/CelloType |

Code/access links are trace metadata only. They do not imply Layer 3 runtime,
callable, adapter, or environment support.

## Inclusion Rules

Include methods when all of the following are true:

- the current Layer 1 registry places the method under `Analysis Problem = Segmentation`
- the method has a named reusable computational identity
- the method's primary reusable contribution is cell segmentation,
  transcript-to-cell assignment, transcript spot detection, histology/IF
  image-processing support for segmentation workflows, or joint
  segmentation/classification relevant to spatial transcriptomics or adjacent
  spatial-omics imaging
- PubMed/DOI metadata can verify the method-paper or preprint identity

## Exclusion Rules

Exclude or keep outside the frozen set when the primary contribution is:

- general image preprocessing without segmentation, spot detection, object
  assignment, or segmentation-workflow support
- downstream cell type inference without a segmentation contribution
- generic tissue classification without segmentation
- spatial domain identification, graph construction, or neighborhood analysis
  after segmentation
- assay/workflow description without a named reusable segmentation,
  spot-detection, or segmentation-support method
- candidate methods not present in the current Layer 1 Segmentation rows

## Final Candidate Freeze

| Tool Name | Layer 2 branch | Evidence identity |
| --- | --- | --- |
| `Baysor` | cell segmentation / transcript assignment | PMID 34650268; DOI 10.1038/s41587-021-01044-w |
| `Bering` | cell segmentation / transcript assignment | PMID 40681510; DOI 10.1038/s41467-025-60898-9 |
| `SCS` | cell segmentation / transcript assignment | PMID 37429992; DOI 10.1038/s41592-023-01939-3 |
| `segger` | cell segmentation / transcript assignment | PMID 40161614; DOI 10.1101/2025.03.14.643160 |
| `UCS` | cell segmentation / transcript assignment | PMID 39763408; DOI 10.1002/smtd.202400975 |
| `BIDCell` | cell segmentation / transcript assignment | PMID 38218939; DOI 10.1038/s41467-023-44560-w |
| `VistoSeg` | histology image processing / segmentation support | PMID 38510173; DOI 10.1017/S2633903X23000235 |
| `STCellbin` | cell segmentation / transcript assignment | PMID 38434932; DOI 10.46471/gigabyte.110 |
| `Spotiflow` | transcript spot detection | PMID 40481364; DOI 10.1038/s41592-025-02662-x |
| `Piscis` | transcript spot detection | PMID 41265398; DOI 10.1016/j.cels.2025.101448 |
| `CelloType` | joint segmentation / classification | PMID 39578628; DOI 10.1038/s41592-024-02513-1 |

## Boundary Notes

`VistoSeg` is a histology/IF image-processing support row. It can support a
spatial transcriptomics segmentation workflow, but it should not be treated as a
direct transcript-to-cell assignment method.

`Spotiflow` and `Piscis` are upstream spot-detection methods. Their direct
output is spot coordinates rather than cell masks or transcript-to-cell
assignments.

`CelloType` is image segmentation plus classification. It belongs in the frozen
candidate set because the current Layer 1 registry places it under
Segmentation, but its decision branch is not interchangeable with
transcript-coordinate-first methods.

`segger` is retained with explicit preprint caveats. Its benchmark and scale
claims should be treated as method-paper/preprint evidence until independent
validation exists.

## Topic Branch Organization

The topic is organized by method-selection cues rather than by Layer 1 subtask
as separate packages:

- transcript-coordinate-first or graph-based cell segmentation / transcript assignment
- image-plus-transcript and nuclei-plus-transcript segmentation
- cell-boundary-image based high-resolution ST binning
- histology/IF image-processing support for segmentation workflows
- upstream fluorescence or RNA FISH spot detection
- joint image segmentation and classification

These branches support conditional selection only. They are not universal
execution routes.
