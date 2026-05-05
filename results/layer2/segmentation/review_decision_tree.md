# Segmentation Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded review pass, evidence spot-checks, logic
review, decision tree, and coverage ledger for the 11-row `Segmentation`
candidate set. It does not define execution surfaces, wrappers, adapter
boundaries, callable interfaces, environments, or execution support.

## Reading Rules

- Keep the eleven-method freeze unchanged: `Baysor`, `Bering`, `SCS`, `segger`, `UCS`, `BIDCell`, `VistoSeg`, `STCellbin`, `Spotiflow`, `Piscis`, `CelloType`.
- Use `Subtask` values as branch cues only; they are not separate Layer 2 completion units.
- Treat spot detection, segmentation-support image processing, cell segmentation, transcript assignment, and joint segmentation/classification as different branches inside one frozen topic.
- Use compute as a branch-local resource gate. It cannot override task fit.
- Use benchmark or review evidence only for caveats or branch-local interpretation. Do not turn it into a universal ranking.
- Treat `Closest Alternatives`, `Key Difference`, resource burden, scale sensitivity, and boundary-risk caveats as Layer 2 synthesized judgment unless the method row states direct support.

## Review Pass

### Candidate Verification

The current Layer 1 Segmentation rows were verified by targeted PMID, DOI, and
code/access trace checks. No full retrieval redo was performed.

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `Baysor` | 34650268 | 10.1038/s41587-021-01044-w | Method-paper identity and public code trace retained. |
| `Bering` | 40681510 | 10.1038/s41467-025-60898-9 | Method-paper identity confirmed; public code trace added to Layer 1 metadata. |
| `SCS` | 37429992 | 10.1038/s41592-023-01939-3 | Method-paper identity confirmed; public code trace added to Layer 1 metadata. |
| `segger` | 40161614 | 10.1101/2025.03.14.643160 | Preprint identity retained; public code trace updated while retaining preprint caveats. |
| `UCS` | 39763408 | 10.1002/smtd.202400975 | Method-paper identity and public code trace retained. |
| `BIDCell` | 38218939 | 10.1038/s41467-023-44560-w | Method-paper identity confirmed; added as subcellular ST segmentation branch row. |
| `VistoSeg` | 38510173 | 10.1017/S2633903X23000235 | Method-paper identity confirmed; retained as histology/IF image-processing support boundary row. |
| `STCellbin` | 38434932 | 10.46471/gigabyte.110 | Method-paper identity confirmed; added as cell-boundary-image/high-resolution ST branch row. |
| `Spotiflow` | 40481364 | 10.1038/s41592-025-02662-x | Method-paper identity confirmed; retained as upstream spot-detection branch row. |
| `Piscis` | 41265398 | 10.1016/j.cels.2025.101448 | Peer-reviewed method-paper identity confirmed; retained as upstream spot-detection branch row. |
| `CelloType` | 39578628 | 10.1038/s41592-024-02513-1 | Method-paper identity confirmed; retained as joint segmentation/classification boundary row. |

Code/access traces are metadata only. Code/access trace is metadata only; no Layer 3 runtime, callable, adapter, or environment support implied.

## Logic Review

The frozen candidate set mixes four scientific output objects:

- cell segmentation and transcript-to-cell assignment: `Baysor`, `Bering`,
  `SCS`, `segger`, `UCS`, `BIDCell`, `STCellbin`
- histology/IF image-processing support for segmentation workflows: `VistoSeg`
- raw transcript or fluorescence spot detection: `Spotiflow`, `Piscis`
- image-object segmentation coupled to classification: `CelloType`

This mixture is scientifically valid only if the decision tree first asks what
object must be produced. A detected spot coordinate, a processed histology-image
support output, a transcript-to-cell link, a cell mask, and a classified image
object are not interchangeable outputs.

The evidence base is strongest for method identity and direct method claims. It
is weaker for cross-method generalization, memory burden, scale sensitivity, and
batch robustness. Therefore, this decision tree uses branch-local fit and
explicit caveats rather than a universal ranking.

## Decision Tree

### Step 0. Are you actually in this topic?

If the main task is downstream cell type inference, spatial domain discovery,
cell-cell communication, neighborhood graph construction, or trajectory
analysis:

- Do not start here.
- Use the corresponding analysis problem first.
- Return here only if segmentation, spot detection, segmentation-support image
  processing, or transcript assignment is the explicit missing method-selection step.

If the main task is image preprocessing without segmentation-workflow support,
spot detection, object segmentation, or transcript assignment:

- Do not treat this topic as the primary package.

### Step 1. What output object is required?

If the required output is raw transcript or fluorescence spot coordinates:

- Consider `Spotiflow` or `Piscis` when spot detection is the explicit output.
- Continue to Step 2A.

If the required output is histology or IF image processing that supports a
segmentation workflow:

- Consider `VistoSeg` when the desired output is image-processing or feature
  support rather than direct cell masks or molecule assignments.
- Keep the support-row caveat visible.

If the required output is transcript-to-cell assignment, cell masks, or
segmented cells from imaging-based or subcellular ST:

- Consider `Baysor`, `Bering`, `SCS`, `segger`, `UCS`, `BIDCell`, or
  `STCellbin` according to the branch-local input requirements.
- Continue to Step 2B.

If the required output is image-object segmentation coupled to classification:

- Consider `CelloType` when classification coupling is part of the task.
- Keep the classification-coupling caveat visible.

### Step 2A. Spot-detection branch

If the data are large noisy 2D or 3D fluorescence images and a general
spot-detection Python/napari route is relevant:

- Consider `Spotiflow`.
- Keep the caveat that spot coordinates are upstream of cell assignment.

If the primary concern is automatic RNA FISH spot detection with explicit
false-positive/false-negative balance:

- Consider `Piscis`.
- Keep the caveat that spot-level F1 does not validate downstream cell
  boundaries.

After spot detection:

- Return to a cell segmentation / transcript-assignment branch only if the next
  task is assigning detected transcripts to cells.

### Step 2B. Cell segmentation / transcript-assignment branch

If a mature transcript-coordinate-first baseline is needed and optional
co-stain/prior information may or may not be available:

- Consider `Baysor`.
- Use it as a branch-local comparator in later review.

If segmentation should be coupled to molecular annotation or transfer learning
across tissues or 2D/3D data:

- Consider `Bering`.
- Keep annotation and transfer-learning bias caveats visible.

If high-resolution ST includes useful imaging data and the task is spot-to-cell
assignment:

- Consider `SCS`.
- Keep image-dependence and image/transcript discordance caveats visible.

If the task is large imaging-based ST transcript assignment and graph
link-prediction evidence is acceptable despite preprint status:

- Consider `segger`.
- Keep preprint and independent-replication caveats visible.

If nuclei staining or nuclei segmentation is reliable and a unified
subcellular-ST segmentation route is needed:

- Consider `UCS`.
- Keep nuclei-anchoring caveats visible.

If subcellular ST segmentation should use biologically informed self-supervised
boundary inference:

- Consider `BIDCell`.
- Keep morphology and self-supervision caveats visible.

If high-resolution ST already has reliable cell boundary images and the task is
cell-boundary based binning or single-cell expression profile generation:

- Consider `STCellbin`.
- Keep platform and boundary-image dependence caveats visible.

### Step 3. Coupling and support gate

If segmentation must remain separated from annotation/classification:

- Consider `Baysor`, `SCS`, `UCS`, `BIDCell`, or `STCellbin` according to input
  requirements.
- Avoid `Bering` and `CelloType` unless coupling is scientifically intended.

If histology/IF image processing is only a support step:

- Consider `VistoSeg` for that support step only.
- Re-enter Step 1 if the final output must be cell masks or transcript-to-cell assignments.

If annotation or classification is part of the segmentation goal:

- `Bering` is the molecular annotation branch.
- `CelloType` is the image classification branch.
- `segger` may use optional scRNA-seq information, so reference influence must be reviewed.

### Step 4. Evidence and resource gate

If peer-reviewed method-paper evidence is required before selection:

- Do not start with `segger`; it remains preprint-level in this package.

If CPU-only review is required:

- Consider CPU-labeled rows only after confirming the output object match.
- Do not interpret a CPU label as BioHarness execution support.

If optional GPU or deep-learning review is acceptable:

- Expand reading according to the relevant branch, not by cross-branch popularity or convenience.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `Baysor` | cell segmentation / transcript assignment | Probabilistic transcript-based segmentation can struggle when marker density, cell overlap, or morphology priors are weak; benchmark gains are method-paper-local. |
| `Bering` | cell segmentation / transcript assignment | Transfer learning and annotation coupling can improve robustness but may import training-set or reference-pattern bias into segmentation decisions. |
| `SCS` | cell segmentation / transcript assignment | Image-dependent assignment can inherit image-segmentation errors and may be less suitable when morphology and transcript density disagree. |
| `segger` | cell segmentation / transcript assignment | Current evidence is preprint-level; reported speed and sensitivity advantages need independent replication before being treated as general. |
| `UCS` | cell segmentation / transcript assignment | Nuclei-anchored segmentation may miss non-nuclear cellular extent or propagate nuclei detection errors into transcript assignment. |
| `BIDCell` | cell segmentation / transcript assignment | Self-supervised boundary inference may encode morphology and cell-shape assumptions; public evidence remains method-paper-local for cross-platform generalization. |
| `VistoSeg` | histology image processing / segmentation support | This is a segmentation-support boundary row; image-processing outputs should not be interpreted as direct molecular cell segmentation or transcript assignment. |
| `STCellbin` | cell segmentation / transcript assignment | Platform and boundary-image dependence can propagate image-boundary errors into cell-level expression profiles; it should not be generalized as an image-free assignment route. |
| `Spotiflow` | transcript spot detection | Spot detection quality constrains all later transcript assignment, but high spot-level accuracy does not itself validate cell boundaries. |
| `Piscis` | transcript spot detection | Optimizing spot-level F1 can still leave ambiguity for densely packed or overlapping cells; downstream segmentation needs separate validation. |
| `CelloType` | joint segmentation / classification | Joint classification can improve object labeling but may entangle segmentation boundaries with class priors and image-domain bias. |

## Review Decision

The current evidence supports a Layer 2 conditional decision tree, not a
universal method ranking. The package is suitable for method-selection
discussion and representative Layer 3/4 audit triage after closure, while all
runtime and adapter decisions remain outside this Layer 2 package.
