# Segmentation Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded review pass, evidence spot-checks, logic
review, decision tree, and coverage ledger for the frozen `Segmentation`
candidate set. It does not define execution surfaces, wrappers, adapter
boundaries, callable signatures, environments, or runtime support.

## Reading Rules

- Keep the eight-method freeze unchanged:
  `Baysor`, `Bering`, `SCS`, `segger`, `UCS`, `Spotiflow`, `Piscis`,
  `CelloType`.
- Use `Subtask` values as branch cues only; they are not separate Layer 2
  completion units.
- Treat spot detection, cell segmentation, transcript assignment, and joint
  segmentation/classification as different branches inside one frozen topic.
- Use compute as a branch-local resource gate. It cannot override task fit.
- Use benchmark or review evidence only for caveats or branch-local
  interpretation. Do not turn it into a universal ranking.
- Treat `Closest Alternatives`, `Key Difference`, resource burden, scale
  sensitivity, and boundary-risk caveats as Layer 2 synthesized judgment unless
  the method row states direct support.

## Review Pass

### PubMed Candidate Verification

The eight frozen candidate PMIDs were verified with PubMed E-utilities:

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `Baysor` | 34650268 | 10.1038/s41587-021-01044-w | Method-paper identity confirmed; PubMed supplies the DOI missing from the frozen input. |
| `Bering` | 40681510 | 10.1038/s41467-025-60898-9 | Method-paper identity confirmed. |
| `SCS` | 37429992 | 10.1038/s41592-023-01939-3 | Method-paper identity confirmed. |
| `segger` | 40161614 | 10.1101/2025.03.14.643160 | Preprint identity confirmed. |
| `UCS` | 39763408 | 10.1002/smtd.202400975 | Method-paper identity confirmed. |
| `Spotiflow` | 40481364 | 10.1038/s41592-025-02662-x | Method-paper identity confirmed. |
| `Piscis` | 41265398 | 10.1016/j.cels.2025.101448 | Method-paper identity confirmed; updated preprint record also checked for code trace. |
| `CelloType` | 39578628 | 10.1038/s41592-024-02513-1 | Method-paper identity confirmed. |

### Benchmark/Review Screening

Query:

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

The query returned 23 PubMed records. Relevant records included broad spatial
transcriptomics or spatial-omics reviews, imaging-platform benchmarks, and
candidate method papers with internal benchmark claims. No suitable independent
benchmark was found that jointly compares all eight frozen candidates across
cell segmentation, transcript assignment, spot detection, and joint
classification branches.

Candidate-name screening was also run with bounded method terms. It returned
`Bering` and a broad computational-solutions review, not an independent
all-candidate benchmark.

Review conclusion: use explicit branch-local logic review derived from the
method table. Method-paper benchmark claims can support local caveats, but they
cannot support a global all-method ranking.

## Evidence Spot-checks

| Tool | Direct support | Layer 2 synthesis / caution |
| --- | --- | --- |
| `Baysor` | PubMed verifies the imaging-based ST segmentation method paper; the abstract directly supports transcript-based segmentation with optional co-stain/prior information. | Resource/scale cue and alternatives are synthesized; method-paper benchmarks are not universal. |
| `Bering` | PubMed verifies joint segmentation and molecular annotation; the abstract directly supports graph deep learning, 2D/3D use, transfer learning, and method-paper benchmarking. | Annotation coupling may import training or reference-pattern bias; no independent all-candidate benchmark found. |
| `SCS` | PubMed verifies high-resolution ST cell segmentation and spot assignment using imaging plus sequencing data. | Image dependence and scale labels are synthesized; performance evidence is method-paper-local. |
| `segger` | PubMed verifies the preprint; the abstract directly supports graph link prediction, optional scRNA-seq assistance, open documentation, and atlas-scale claims. | Evidence is preprint-level; reported scalability and accuracy need independent replication. |
| `UCS` | PubMed verifies unified cell segmentation for subcellular ST across several platforms, integrating nuclei staining and transcript data. | Nuclei anchoring can be a strength or a bias depending on sample quality; resource labels remain conservative. |
| `Spotiflow` | PubMed verifies fluorescence spot detection, 2D/3D support, and public Python/napari code link in the abstract. | Spot detection is upstream of cell segmentation; spot-level benchmarks do not validate cell assignment. |
| `Piscis` | PubMed verifies the peer-reviewed spot-detection method and updated preprint; PMC-linked preprint record exposes code traces. | F1-oriented spot detection is not a cell-boundary method; scale and memory remain unclear. |
| `CelloType` | PubMed verifies joint segmentation and classification in tissue/spatial-omics images; PMC-linked record exposes code. | Classification coupling may bias segmentation boundaries and is not transcript-coordinate-first assignment. |

## Logic Review

The frozen candidate set mixes three scientific objects:

- cell segmentation and transcript-to-cell assignment: `Baysor`, `Bering`,
  `SCS`, `segger`, `UCS`
- raw transcript or fluorescence spot detection: `Spotiflow`, `Piscis`
- image-object segmentation coupled to classification: `CelloType`

This mixture is scientifically valid only if the decision tree first asks what
object must be produced. A detected spot coordinate, a transcript-to-cell link,
a cell mask, and a classified tissue object are not interchangeable outputs.

The evidence base is strongest for method identity and direct method claims.
It is weaker for cross-method generalization, memory burden, scale sensitivity,
and batch robustness. Therefore, this decision tree uses branch-local fit and
explicit caveats rather than global ranking.

## Decision Tree

### Step 0. Are you actually in this topic?

If the main task is downstream cell type inference, spatial domain discovery,
cell-cell communication, neighborhood graph construction, or trajectory
analysis:

- Do not start here.
- Use the corresponding analysis problem first.
- Return here only if segmentation, spot detection, or transcript assignment is
  the explicit missing method-selection step.

If the main task is image preprocessing, deblurring, staining normalization, or
quality control without segmentation:

- Do not treat this topic as the primary package.

### Step 1. What output object is required?

If the required output is raw transcript or fluorescence spot coordinates:

- Prefer / consider `Spotiflow` or `Piscis`.
- Continue to Step 2A.

If the required output is transcript-to-cell assignment or segmented cells from
imaging-based or subcellular ST:

- Consider `Baysor`, `Bering`, `SCS`, `segger`, or `UCS`.
- Continue to Step 2B.

If the required output is image-object segmentation coupled to classification:

- Prefer / consider `CelloType`.
- Keep the classification-coupling caveat visible.

### Step 2A. Spot-detection branch

If the data are large noisy 2D or 3D fluorescence images and a general
spot-detection Python/napari route is desirable:

- Prefer / consider `Spotiflow`.
- Keep the caveat that spot coordinates are upstream of cell assignment.

If the primary concern is automatic RNA FISH spot detection with explicit
false-positive/false-negative balance:

- Prefer / consider `Piscis`.
- Keep the caveat that spot-level F1 does not validate downstream cell
  boundaries.

After spot detection:

- Return to a cell segmentation / transcript-assignment branch only if the next
  task is assigning detected transcripts to cells.

### Step 2B. Cell segmentation / transcript-assignment branch

If a mature transcript-coordinate-first baseline is desired and optional
co-stain/prior information may or may not be available:

- Prefer / consider `Baysor`.
- Use it as a baseline comparator in later review, not as a default method.

If segmentation should be coupled to molecular annotation or transfer learning
across tissues or 2D/3D data:

- Prefer / consider `Bering`.
- Keep annotation and transfer-learning bias caveats visible.

If high-resolution ST includes useful imaging data and the task is spot-to-cell
assignment:

- Prefer / consider `SCS`.
- Keep image-dependence and image/transcript discordance caveats visible.

If the task is large imaging-based ST transcript assignment and graph
link-prediction evidence is acceptable despite preprint status:

- Prefer / consider `segger`.
- Keep preprint and independent-replication caveats visible.

If nuclei staining or nuclei segmentation is reliable and a unified
subcellular-ST segmentation route is needed:

- Prefer / consider `UCS`.
- Keep nuclei-anchoring caveats visible.

### Step 3. Annotation or classification coupling gate

If segmentation must remain separated from annotation/classification:

- Read first: `Baysor`, `SCS`, or `UCS`.
- Avoid starting with `Bering` or `CelloType` unless coupling is acceptable.

If annotation or classification is part of the segmentation goal:

- `Bering` is the molecular annotation branch.
- `CelloType` is the image classification branch.
- `segger` may use optional scRNA-seq information, so reference influence must
  be reviewed.

### Step 4. Resource and evidence gate

If a CPU-first review path is required:

- Read first: `Baysor`.
- Do not interpret a CPU label as BioHarness runtime support.

If optional GPU or deep-learning review is acceptable:

- Expand reading to `Bering`, `SCS`, `segger`, `UCS`, `Spotiflow`, `Piscis`,
  and `CelloType` according to the relevant branch.

If peer-reviewed method-paper evidence is required before selection:

- Do not start with `segger`; it remains preprint-level in this package.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `Baysor` | transcript-coordinate-first cell segmentation | method-paper-local benchmark evidence; morphology/transcript-density dependence |
| `Bering` | graph transfer segmentation plus annotation | annotation and transfer-learning bias |
| `SCS` | image-plus-sequencing high-resolution spot assignment | image dependence and possible image/transcript discordance |
| `segger` | graph link-prediction transcript assignment | preprint status and independent replication gap |
| `UCS` | nuclei-plus-transcript unified SST segmentation | nuclei anchoring and nuclei-detection error propagation |
| `Spotiflow` | upstream fluorescence spot detection | spot coordinates are not cell assignments |
| `Piscis` | upstream RNA FISH spot detection | F1 spot optimization does not validate cell boundaries |
| `CelloType` | joint image segmentation/classification | class-prior and image-domain bias |

## Review Decision

The current evidence supports a Layer 2 conditional decision tree, not a
universal method ranking. The package is suitable for method-selection
discussion and representative Layer 3/4 audit triage after closure, while all
runtime and adapter decisions remain outside this Layer 2 package.
