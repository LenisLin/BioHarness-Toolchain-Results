# Integration Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded PubMed review pass, evidence spot-checks, branch-local decision tree, and coverage ledger for the frozen `Integration` candidate set. It does not define execution surfaces, wrappers, adapter boundaries, callable signatures, environments, or runtime support.

## Reading Rules

- Keep the 18-method freeze unchanged: `CAST`, `DeST-OT`, `GPSA`, `GraphST`, `PASTE`, `PASTE2`, `PRECAST`, `SANTO`, `SLAT`, `SPACEL`, `STalign`, `STAligner`, `STAIR`, `MaskGraphene`, `spCLUE`, `VR-Omics`, `MISO`, `Crescendo`.
- Use `Subtask` values as branch cues only; they are not separate Layer 2 completion units.
- Treat compute as a branch-local resource gate. It cannot override task fit.
- Use benchmark evidence for coverage, caveats, and branch-local tie-breaks only. Do not turn it into a universal all-method ranking.
- Treat `Closest Alternatives`, `Key Difference`, memory burden, scale sensitivity, and risk cues as Layer 2 synthesized judgment unless the row states direct support.
- Treat code access as a trace field only. It is not a runtime-support or adapter-availability claim.

## Review Pass

### PubMed candidate verification

PubMed E-utilities verified method-paper identity for all 18 frozen candidates. Missing identifiers in the frozen input were recovered for:

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `CAST` | 39294367 | 10.1038/s41592-024-02410-7 | Method-paper identity confirmed. |
| `SANTO` | 39025895 | 10.1038/s41467-024-50308-x | Method-paper identity confirmed. |
| `SLAT` | 37945600 | 10.1038/s41467-023-43105-5 | Method-paper identity confirmed. |

The remaining PMIDs/DOIs from the frozen input were also verified by ESummary. The full per-row identifiers are recorded in `topic_scope.md` and `method_table.json`.

### Benchmark/review screening

Broad query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
(integration[Title/Abstract] OR alignment[Title/Abstract] OR
 "multi-slice"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR comparison[Title/Abstract] OR
 review[Publication Type])
```

Narrow benchmark-title query:

```text
"Benchmarking"[Title]
AND ("spatial transcriptomics"[Title/Abstract] OR
     "spatially resolved transcriptomics"[Title/Abstract])
AND (integration[Title/Abstract] OR alignment[Title/Abstract])
```

Relevant benchmark records found:

| PMID | DOI | Scope cue |
| --- | --- | --- |
| 39123269 | 10.1186/s13059-024-03361-0 | Benchmarking clustering, alignment, and integration methods for spatial transcriptomics. |
| 41024097 | 10.1186/s13059-025-03796-z | Benchmarking multi-slice integration and downstream applications. |
| 41933187 | 10.1038/s43588-026-00977-z | Benchmarking alignment methods for spatial transcriptomics data. |

Review conclusion: suitable benchmark evidence exists for alignment and multi-slice integration branches, but not for a single universal ranking across this frozen Integration set. The set mixes coordinate alignment, partial-overlap alignment, representation integration, 3D reconstruction, multimodal modeling, and batch correction. Therefore the decision tree uses benchmark evidence only to support branch-local checks and uses explicit logic review for heterogeneous branches.

## Evidence Spot-checks

| Tool | Direct support | Layer 2 synthesis / caution |
| --- | --- | --- |
| `CAST` | PubMed verifies PMID 39294367 and DOI 10.1038/s41592-024-02410-7. | High-resolution branch and scale caveats are Layer 2 synthesis. |
| `DeST-OT` | PubMed verifies PMID 39874960 and DOI 10.1016/j.cels.2024.12.001. | Use as spatiotemporal branch; transport burden is synthesized. |
| `GPSA` | PubMed verifies PMID 37592182 and DOI 10.1038/s41592-023-01972-2. | Scale caution follows method family; not a BioHarness benchmark. |
| `GraphST` | PubMed verifies PMID 36859400 and DOI 10.1038/s41467-023-36796-3; registry supplies GitHub. | Integration use is cross-topic and representation-focused. |
| `PASTE` | PubMed verifies PMID 35577957 and DOI 10.1038/s41592-022-01459-6; registry supplies GitHub. | Canonical baseline role is supported by benchmarks but not universal ranking. |
| `PASTE2` | PubMed verifies PMID 37553263 and DOI 10.1101/gr.277670.123; registry supplies GitHub. | Partial-overlap branch is direct; resource labels are synthesized. |
| `PRECAST` | PubMed verifies PMID 36653349 and DOI 10.1038/s41467-023-35947-w. | Embedding/clustering coupling is useful but can confound integration-only interpretation. |
| `SANTO` | PubMed verifies PMID 39025895 and DOI 10.1038/s41467-024-50308-x. | Stitching branch and scale/audit caveats are Layer 2 synthesis. |
| `SLAT` | PubMed verifies PMID 37945600 and DOI 10.1038/s41467-023-43105-5. | Heterogeneous-slice branch is direct; relative-placement caution remains Layer 2 synthesis. |
| `SPACEL` | PubMed verifies PMID 37990022 and DOI 10.1038/s41467-023-43220-3; registry supplies GitHub. | 3D branch is scoped to alignment/stacking within a broader framework. |
| `STalign` | PubMed verifies PMID 38065970 and DOI 10.1038/s41467-023-43915-7; registry supplies GitHub. | Geometry distortion caution is synthesized from diffeomorphic registration. |
| `STAligner` | PubMed verifies PMID 38177758 and DOI 10.1038/s43588-023-00528-w; registry supplies GitHub. | Cross-condition/technology branch is direct; signal-removal risk remains a caveat. |
| `STAIR` | PubMed verifies PMID 41398698 and DOI 10.1186/s13059-025-03895-x. | End-to-end 3D audit priority and model-opacity caveats are synthesized. |
| `MaskGraphene` | PubMed verifies PMID 41194133 and DOI 10.1186/s13059-025-03850-w. | Interpretable representation branch is direct; relative placement versus other graph methods remains Layer 2 synthesis. |
| `spCLUE` | PubMed verifies PMID 40551235 and DOI 10.1186/s13059-025-03636-0. | Single/multi-slice contrastive branch is direct; audit cues are synthesized. |
| `VR-Omics` | PubMed verifies PMID 40598307 and DOI 10.1186/s13059-025-03630-6. | Automated 2D/3D branch is direct; automation opacity is synthesized. |
| `MISO` | PubMed verifies PMID 39815104 and DOI 10.1038/s41592-024-02574-2. | Multimodal branch is direct; modality-imbalance caution is synthesized. |
| `Crescendo` | PubMed verifies PMID 40001084 and DOI 10.1186/s13059-025-03479-9. | Batch-correction branch is direct; biological-signal removal caution is synthesized. |

## Decision Tree

### Step 0. Are you actually in this topic?

If the main task is spatial domain clustering, cell type inference, deconvolution, super-resolution, histology-to-expression prediction, denoising/imputation, normalization, or feature selection:

- Use the corresponding analysis problem first.
- Return here only if the stated need is cross-sample Integration, alignment, harmonization, 3D reconstruction, multimodal spatial omics integration, or spatial-data batch correction.

### Step 1. What is the primary output object?

Use the desired deliverable as the root gate. This avoids treating batch correction, coordinate alignment, 3D reconstruction, multimodal modeling, and latent representation learning as a single ranked sequence.

If the deliverable is count-level batch correction for single-cell spatial transcriptomics:

- Read first within this branch: `Crescendo`.
- Carry the row-level biological-signal-removal cue from the method table.

If the deliverable is a multimodal spatial omics model or integrated multimodal representation:

- Read first within this branch: `MISO`.
- Use this branch for tissue-complexity modeling across modalities, not for transcriptomics-only slice registration.
- Carry the row-level modality-imbalance cue from the method table.

If the deliverable is spatiotemporal or progression-ordered alignment:

- Read first within this branch: `DeST-OT`.
- Keep temporal-model mismatch visible if the ordering is weak, inferred, or biologically ambiguous.

If the deliverable is coordinate alignment, correspondence, overlap handling, or stitching:

- Comparable full-overlap slices: read first within branch `PASTE`.
- Partial overlap, missing regions, or incomplete correspondence: read first within branch `PASTE2`.
- Smooth coordinate warping or cross-technology geometric mapping: read first within branch `STalign` or `GPSA`, depending on whether diffeomorphic mapping or Gaussian-process non-rigid alignment is the modeling cue.
- High-resolution single-cell search-and-match correspondence: read first within branch `CAST`.
- Heterogeneous slices: read first within branch `SLAT`.
- Field or section stitching: read first within branch `SANTO`.
- Carry row-level risk cues for over-alignment, distortion, mismatch, scale sensitivity, or stitching distortion from the method table.

If the deliverable is 2D/3D multi-slice reconstruction or tissue stacking:

- Tissue-architecture reconstruction: read first within branch `SPACEL`.
- End-to-end alignment, integration, and 3D reconstruction: read first within branch `STAIR`.
- Automated 2D/3D integration: read first within branch `VR-Omics`.
- Carry row-level model-opacity, automation-opacity, and scale-burden cues from the method table.

If the deliverable is latent representation integration:

- Integration coupled with clustering or deconvolution interpretation: read first within branch `GraphST`.
- Probabilistic embedding, clustering, and alignment together: read first within branch `PRECAST`.
- Cross-condition, cross-technology, or developmental-stage harmonization: read first within branch `STAligner`.
- Multi-slice and multi-condition representation with interpretability emphasis: read first within branch `MaskGraphene`.
- Unified contrastive representation spanning single-slice and multi-slice analysis: read first within branch `spCLUE`.
- Carry row-level risk cues for biological signal removal, objective entanglement, cluster-alignment coupling, or representation-objective ambiguity from the method table.

### Step 2. Resource and audit gate

After the output branch is chosen, use compute, scale, and code-access fields only as branch-local audit triage.

If the first pass must remain CPU-first:

- Read first within the relevant branch: `DeST-OT`, `GPSA`, `PASTE`, `PASTE2`, `PRECAST`, `STalign`, or `Crescendo`.
- Do not interpret CPU labels as BioHarness runtime support.

If GPU or high-memory resources are acceptable:

- Expand branch-local review to `CAST`, `GraphST`, `SANTO`, `SLAT`, `SPACEL`, `STAligner`, `STAIR`, `MaskGraphene`, `spCLUE`, `VR-Omics`, and `MISO` when their task fit is stronger.

If public code access is needed before any later audit:

- Use `Code Access` and `Primary Code Link` as trace fields only.
- A public repository link is not runtime support, adapter availability, a callable signature, or an environment capsule.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `CAST` | search-and-match mapping | scale sensitivity |
| `DeST-OT` | spatiotemporal alignment | temporal-model mismatch |
| `GPSA` | coordinate alignment | scale sensitivity |
| `GraphST` | latent embedding integration | multi-task objective entanglement |
| `PASTE` | pairwise slice alignment | over-alignment of noncorresponding tissue |
| `PASTE2` | partial overlap alignment | partial-overlap mismatch |
| `PRECAST` | latent embedding integration | cluster-alignment coupling |
| `SANTO` | stitching and coordinate alignment | stitching distortion |
| `SLAT` | heterogeneous slice alignment | heterogeneity overfit |
| `SPACEL` | 3D reconstruction | model opacity and scale burden |
| `STalign` | coordinate alignment | geometry distortion |
| `STAligner` | latent embedding integration | biological signal removal |
| `STAIR` | 3D reconstruction | model opacity and scale burden |
| `MaskGraphene` | latent embedding integration | representation-objective ambiguity |
| `spCLUE` | latent embedding integration | representation-objective ambiguity |
| `VR-Omics` | 2D/3D multi-slice integration | automation opacity |
| `MISO` | multimodal modeling | modality imbalance |
| `Crescendo` | batch correction | biological signal removal |

## Review Decision

The current evidence supports a Layer 2 conditional decision tree, not a global method ranking. The package is suitable for Integration method-selection discussion and representative Layer 3/4 audit triage after closure, while all runtime and adapter decisions remain outside this Layer 2 package.
