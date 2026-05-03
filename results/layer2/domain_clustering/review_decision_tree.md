# Domain / Clustering Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records bounded benchmark/review screening, evidence spot-checks, logic review, branch-local decision logic, and coverage notes for the frozen `Domain / Clustering` candidate set.

## Reading Rules

- Keep the 37-method freeze unchanged: `ADEPT`, `BANKSY`, `BASS`, `BayesSpace`, `CCST`, `ConGI`, `conST`, `DeepST`, `DR-SC`, `GraphST`, `MENDER`, `Pianno`, `PRECAST`, `PROST`, `SEDR`, `SiGra`, `SpaceFlow`, `SPACEL`, `SpaGCN`, `SpaSEG`, `SpatialPCA`, `SpatialPrompt`, `SpaTopic`, `STAGATE`, `STAMP`, `STCC`, `stLearn`, `Novae`, `IRIS`, `SpatialGlue`, `BINARY`, `stDyer`, `SpatialLeiden`, `GraphPCA`, `iIMPACT`, `MNMST`, `SpaDo`.
- Use benchmark/review evidence only for branch-local support or caveats.
- Do not convert benchmark coverage into a universal ranking.
- Treat compute, memory, scale, alternatives, and branch-fit fields as Layer 2 synthesis unless the row explicitly says otherwise.
- Code access is an audit cue only; it is not runtime support.

## PubMed / DOI Evidence Framing

The frozen input supplies PMID and DOI fields for many method papers. Under the convergence scope, those identifiers were used as bounded direct-evidence anchors for method identity, venue/year, and paper-level claims. Rows lacking a PMID/DOI in the frozen input retain registry-local evidence only and require manual review before stronger claims.

## Benchmark / Review Screening

Brief screening found relevant spatial clustering/domain benchmark evidence, especially:

- `Benchmarking spatial clustering methods with spatially resolved transcriptomics data`, Nature Methods 2024.
- `Benchmarking clustering, alignment, and integration methods for spatial transcriptomics`, Genome Biology 2024.
- Frozen registry notes also cite NAR 2025/domain benchmark or review coverage for selected branches.

No suitable independent benchmark was found that jointly covers and ranks all 37 frozen candidates, especially because several 2024-2025 venue-sweep additions are newer than or outside the main benchmark panels. Therefore this package uses logic review plus branch-local benchmark support, not a global all-candidate ranking.

## Evidence Spot-checks

| Evidence class | Candidate examples | Use in this package | Caveat |
| --- | --- | --- | --- |
| Benchmark-covered spatial clustering/domain methods | `BayesSpace`, `SpaGCN`, `STAGATE`, `GraphST`, `SEDR`, `SpaceFlow`, `conST`, `ADEPT` | Supports inclusion and local comparison branches. | Benchmark panels do not cover every frozen method or every dataset regime. |
| Multi-slice or integration-aware domain methods | `PRECAST`, `BASS`, `MENDER`, `SPACEL`, `SpaDo`, `SpatialGlue` | Supports multi-slice/alignment branch. | Integration quality and domain quality are related but not identical endpoints. |
| Image/morphology-guided methods | `SpaGCN`, `ConGI`, `DeepST`, `SiGra`, `iIMPACT`, `SpaSEG` | Supports image-informed branch. | Image signal may help only when matched morphology is available and biologically aligned. |
| Interpretable topic/semantic methods | `SpaTopic`, `STAMP`, `Pianno` | Supports interpretability branch. | Outputs are not always plain clusters and may need manual biological interpretation. |
| Newer high-priority sweep additions | `Novae`, `IRIS`, `BINARY`, `stDyer`, `SpatialLeiden`, `GraphPCA`, `MNMST`, `SpaDo` | Preserves frozen candidate coverage. | All-candidate benchmark support and public code access may be unclear. |

## Branch-local Decision Tree

### Step 0. Confirm the analysis problem

If the task is normalization, denoising/imputation, SVG detection, deconvolution, ligand-receptor inference, or image-only segmentation, do not start from this package unless spatial domain identification is the stated downstream selection problem.

### Step 1. What input evidence or task form is central?

If reference-informed tissue segmentation is intended:

- Read first within this branch: `IRIS`.
- Keep reference-bias, tissue-atlas transfer, and code-access review needs visible.
- Do not generalize this route to ordinary unsupervised clustering without checking whether the reference is scientifically appropriate.

If spatial multi-omics integration is central:

- Read first within this branch: `SpatialGlue`.
- Keep this branch reserved for explicit spatial multi-omics domain decoding.
- Do not treat `conST` as equivalent to this branch; `conST` is retained as a multimodal/image-aware contrastive boundary row.

If matched histology, image, or morphology should guide domains:

- Read first within this branch: `SpaGCN`, `ConGI`, `conST`, `SiGra`, `iIMPACT`, `DeepST`, `SpaSEG`.
- Prefer this branch only when image signal is expected to be biologically meaningful and matched to the spatial assay.
- Treat `conST` as an optional multimodal/image-aware contrastive boundary, not as explicit molecular multi-omics integration.
- Keep morphology-driven tumor/pathology claims branch-local and dataset-specific.

If expression plus coordinates are the main inputs:

- Continue to Step 2.

### Step 2. Is multi-slice, batch-aware, or cross-sample domain comparison central?

If yes:

- Read first within this branch: `PRECAST`, `BASS`, `MENDER`, `SPACEL`, `SpaDo`.
- Consider `STAGATE`, `GraphST`, or `Novae` only when graph embeddings or broad representations are the main comparison object.
- Treat alignment quality, batch handling, and domain-label quality as related but non-identical endpoints.
- Do not treat this as a runtime-ready integration surface.

If no:

- Continue to Step 3.

### Step 3. Is interpretability, marker guidance, or semantic labeling more important than plain clusters?

If yes:

- Read first within this branch: `SpaTopic`, `STAMP`, `Pianno`.
- Use this branch when topics, markers, pathology programs, semantic annotations, or interpretable modules are desired outputs.
- Do not collapse topic/module outputs into ordinary cluster labels without manual biological interpretation.

If no:

- Continue to Step 4.

### Step 4. Which modeling style best matches the review question?

For statistical/probabilistic baselines:

- Read first within this branch: `BayesSpace`, `BASS`, `DR-SC`, `PRECAST`.
- Use benchmark evidence only as branch-local support for the relevant dataset regime.

For graph/neural spatial representation learning:

- Read first within this branch: `STAGATE`, `GraphST`, `SEDR`, `CCST`, `stDyer`, `ADEPT`, `SpaceFlow`, `BINARY`.
- Keep graph smoothness, contrastive representation, imputation-assisted embedding, and dynamic graph assumptions explicit.

For scalable neighborhood-aware CPU-first screening:

- Read first within this branch: `BANKSY`, `SpatialLeiden`, `MNMST`, `GraphPCA`, `PROST`.
- Treat scalability and CPU labels as audit cues rather than BioHarness runtime validation.

For foundation-model or newer broad-representation approaches:

- Read first within this branch: `Novae`.
- Treat broad representation claims as requiring manual audit before method-selection promotion.

### Step 5. Resource and access gates

If immediate code inspection is required:

- Prefer rows with `Code Access = available` in `method_table.json`.
- Keep the nine code-unclear rows visible for targeted metadata/code review before formal rendering if selected: `IRIS`, `SpatialGlue`, `BINARY`, `stDyer`, `SpatialLeiden`, `GraphPCA`, `iIMPACT`, `MNMST`, `SpaDo`.
- Do not remove pending-code rows from the Layer 2 candidate set.

If CPU-first constraints dominate:

- Read CPU-labeled branches first, especially `BANKSY`, `BayesSpace`, `BASS`, `MENDER`, `Pianno`, `PRECAST`, `PROST`, `SpaTopic`, `STCC`, `stLearn`, `SpatialLeiden`, `GraphPCA`, `MNMST`, and `SpaDo`.
- CPU labels are registry-level resource cues, not BioHarness runtime validation.

If GPU use is acceptable:

- Optional-GPU rows can be reviewed, but memory/scale sensitivity remains a manual audit point.

## Coverage Ledger

| Check | Status |
| --- | --- |
| Candidate set unchanged | Pass: 37 frozen methods retained. |
| Benchmark/review screening stated | Pass: broad benchmark support found; no all-candidate benchmark found. |
| Decision tree branch-local only | Pass: no global rankings/default methods. |
| Runtime/execution claims avoided | Pass: no callable, adapter, or environment claims. |
| Manual review needs retained | Pass: code-pending and evidence-thin rows carry caveats. |
