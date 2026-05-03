# Artifact Correction Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the PubMed verification pass, benchmark/review screening,
logic review, branch-local decision tree, and coverage ledger for the frozen
`Artifact Correction` candidate set. It does not define execution surfaces,
wrappers, adapter boundaries, callable signatures, environments, or runtime
support.

## Reading Rules

- Keep the three-method freeze unchanged:
  `SpotClean`, `Non-parametric Vignetting Correction`, `cellAdmix`.
- Use `Subtask` values as branch cues only; they are not separate Layer 2
  completion units.
- Choose by artifact mechanism first, then by data object and correction stage.
- Treat `Memory Burden`, `Scale Sensitivity`, closest alternatives, and
  scientific cautions as Layer 2 synthesized judgment unless the row states
  direct evidence.
- Do not convert method-paper comparisons or platform benchmarks into a global
  ranking.

## PubMed Candidate Verification

The three frozen candidate PMIDs were verified with PubMed E-utilities on
`2026-05-01`.

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `SpotClean` | 35624112 | 10.1038/s41467-022-30587-y | Method-paper identity confirmed: `SpotClean adjusts for spot swapping in spatial transcriptomics data`. |
| `Non-parametric Vignetting Correction` | 35274110 | 10.1007/978-3-030-87237-3_45 | Method-paper identity confirmed: `Non-parametric Vignetting Correction for Sparse Spatial Transcriptomics Images`. |
| `cellAdmix` | 41559218 | 10.1038/s41588-025-02497-4 | Method-paper identity confirmed: `Impact and correction of segmentation errors in spatial transcriptomics`. |

## Code-link Verification

| Tool | Primary code link | Verification note |
| --- | --- | --- |
| `SpotClean` | `https://github.com/zijianni/SpotClean` | Registry link was reachable by HTTP header check. |
| `Non-parametric Vignetting Correction` | `https://github.com/BoveyRao/Non-parametric-vc-for-sparse-st` | PubMed abstract reports this GitHub page for Python code and demo; the link was reachable by HTTP header check. |
| `cellAdmix` | `https://github.com/kharchenkolab/cellAdmix` | Registry link was reachable by HTTP header check. |

Code access does not imply BioHarness runtime support.

## Benchmark / Review Screening

Primary PubMed query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
(artifact[Title/Abstract] OR artefact[Title/Abstract] OR
 contamination[Title/Abstract] OR "spot swapping"[Title/Abstract] OR
 vignetting[Title/Abstract] OR "segmentation error"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

This query returned six broad/contextual records. Relevant examples included
work on Xenium signal contamination and systematic benchmarking of imaging
spatial transcriptomics platforms in FFPE tissues. These records are useful as
context that artifacts and contamination matter, but they do not provide an
independent benchmark comparing `SpotClean`, `Non-parametric Vignetting
Correction`, and `cellAdmix`.

Candidate-specific PubMed query:

```text
(SpotClean[Title/Abstract] OR cellAdmix[Title/Abstract] OR
 vignetting[Title/Abstract])
AND "spatial transcriptomics"[Title/Abstract]
AND
(benchmark[Title/Abstract] OR comparison[Title/Abstract] OR
 review[Publication Type])
```

This query returned no records. PubMed also warned that `cellAdmix` was not
found as a phrase in that exact query. The screen therefore supports a bounded
logic review, not a claim that no non-PubMed or unpublished comparisons exist.

Review conclusion: no suitable independent benchmark was found for ranking the
three frozen methods. The decision tree below uses method-paper identity,
artifact mechanism, data object, correction stage, and conservative scientific
caveats.

## Evidence Spot-checks

| Tool | Direct support | Layer 2 synthesis / caution |
| --- | --- | --- |
| `SpotClean` | PubMed verifies the method paper and DOI. The abstract directly describes spot swapping and adjusted gene-specific UMI counts. | Local alternatives, resource/scale uncertainty, and placement as the spot-contamination branch are Layer 2 synthesis. |
| `Non-parametric Vignetting Correction` | PubMed verifies the method paper and DOI. The abstract directly describes optical vignetting/shading correction and provides a GitHub code link. | Its applicability is image-stage specific; it should not be generalized to count-matrix contamination correction. |
| `cellAdmix` | PubMed verifies the Nature Genetics article and DOI. The abstract directly describes segmentation errors, molecular admixture, and matrix factorization of local molecular neighborhoods. | Treating downstream improvements as evidence that segmentation itself is solved would overstate the method role. |

## Decision Tree

### Step 0. Are you actually in Artifact Correction?

If the main task is ordinary normalization, feature selection, denoising,
imputation, domain clustering, segmentation, or cell-cell communication:

- Use the corresponding Analysis Problem first.
- Return here only if the stated problem is a concrete artifact mechanism:
  spot swapping/contamination, optical vignetting, or segmentation-error
  molecular admixture.

### Step 1. What artifact mechanism is primary?

If the artifact is spot swapping, barcode bleed, or contamination between
nearby spots in spot-barcoded ST:

- Prefer / consider `SpotClean`.
- Keep the branch local: this does not address raw-image vignetting or
  post-segmentation molecule assignment errors.

If the artifact is uneven illumination, shading, or vignetting in sparse
spatial transcriptomics images:

- Prefer / consider `Non-parametric Vignetting Correction`.
- Keep the branch local: this is an image / spot-calling preprocessing route,
  not a count-matrix contamination correction route.

If the artifact is molecule misassignment caused by segmentation errors in
imaging-based cell-level ST:

- Prefer / consider `cellAdmix`.
- Keep the branch local: this reduces molecular admixture effects but should
  not be described as a primary cell-segmentation algorithm.

### Step 2. What data object is available for correction?

If the available object is an aggregated spot-level count matrix:

- Read first: `SpotClean`.
- Do not force image-stage or segmentation-stage methods onto this object.

If the available object is sparse imaging data before or during transcript spot
calling:

- Read first: `Non-parametric Vignetting Correction`.
- Do not treat its output as a corrected expression matrix unless later
  processing creates one.

If the available object is molecule-to-cell assignment or cell-level expression
after segmentation:

- Read first: `cellAdmix`.
- Carry forward segmentation-error and downstream circularity caveats.

### Step 3. Resource and evidence gate

If the project requires direct independent benchmark support before method
selection:

- This package cannot provide a benchmark-ranked choice.
- Use the logic branches above and record the benchmark gap.

If CPU-first review is required:

- All three frozen rows are recorded as `CPU` at the registry/method-evidence
  cue level.
- Do not interpret CPU labels as execution-ready status inside BioHarness.

If memory or scaling risk is decision-critical:

- Treat all three rows as `unclear` for `Memory Burden` and `Scale Sensitivity`
  until later method-specific engineering audit provides direct measurements.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `SpotClean` | spot-swapping / contamination in spot-barcoded counts | no independent cross-method artifact-correction benchmark found |
| `Non-parametric Vignetting Correction` | optical vignetting / illumination artifacts in sparse ST images | image-stage scope should not be generalized to count matrices |
| `cellAdmix` | segmentation-error molecular admixture in imaging-based cell-level ST | correction of admixture effects is not the same as validating segmentation |

## Review Decision

The current evidence supports a Layer 2 conditional decision tree keyed by
artifact mechanism, data object, and correction stage. It does not support a
global ranking, default method, runtime surface, adapter boundary, or
execution-ready claim.
