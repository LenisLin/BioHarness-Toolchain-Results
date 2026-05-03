# Data Quality Control Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded review pass, evidence spot-checks, logic
review, decision tree, and coverage ledger for the frozen `Data Quality
Control` candidate set. It does not define execution surfaces, wrappers,
adapter boundaries, callable signatures, environments, or runtime support.

## Reading Rules

- Keep the two-method freeze unchanged: `SpotSweeper`, `stPipe`.
- Use `Subtask` values as branch cues only; they are not separate Layer 2
  completion units.
- Treat compute as a branch-local resource cue. It cannot override task fit.
- Use benchmark or review evidence only for caveats or branch-local
  interpretation. Do not turn it into a universal ranking.
- Treat `Closest Alternatives`, `Key Difference`, memory burden, scale
  sensitivity, and pipeline-fit cautions as Layer 2 synthesized judgment unless
  the method row states direct support.

## Review Pass

### PubMed Candidate Verification

The two frozen candidate PMIDs were verified with PubMed E-utilities ESummary:

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `SpotSweeper` | 40481362 | 10.1038/s41592-025-02713-3 | Method-paper identity confirmed; PubMed records the Nature Methods article and PMC record. |
| `stPipe` | 41278534 | 10.1093/nargab/lqaf167 | Method-paper identity confirmed; PubMed records the NAR Genomics and Bioinformatics article and PMC record. |

### Code-Link Verification

Official Bioconductor package pages were used as primary code/documentation
links for both methods:

- `SpotSweeper`: https://bioconductor.org/packages/SpotSweeper
- `stPipe`: https://bioconductor.org/packages/stPipe

Code availability is recorded only as a trace for later audit. It does not
imply BioHarness adapter availability or runtime support.

### Benchmark/Review Screening

Query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
("quality control"[Title/Abstract] OR QC[Title/Abstract] OR
 preprocessing[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

The PubMed query returned 27 records. The inspected summaries were broad
spatial transcriptomics reviews, platform-specific workflow papers, clustering
benchmarks, image/gene-prediction benchmarking, and adjacent QC or analysis
methods. No dedicated independent benchmark was found that jointly compares
`SpotSweeper` and `stPipe` as alternatives for the same data-quality-control
decision.

Review conclusion: the current evidence supports logic review and
branch-local selection, not a global all-method ranking.

## Evidence Spot-Checks

| Tool | Direct support | Layer 2 synthesis / caution |
| --- | --- | --- |
| `SpotSweeper` | PubMed/DOI evidence verifies the method-paper identity and spatially aware QC focus. Official Bioconductor documentation verifies code access. | Its role as the post-count, focused spatial-artifact QC branch is Layer 2 synthesis from method scope and input stage. Memory and scale labels remain `unclear` because the screening did not identify a direct independent resource benchmark. |
| `stPipe` | PubMed/DOI evidence verifies the method-paper identity and R/Bioconductor preprocessing/QC pipeline focus. Official Bioconductor documentation verifies code access. | Its role as the upstream preprocessing/QC branch is Layer 2 synthesis from method scope and input stage. Memory and scale labels remain `unclear` because pipeline resource behavior depends on platform, sequencing depth, and workflow configuration. |

## Logic Review

The two frozen candidates occupy different parts of the QC path rather than a
single interchangeable method class:

- `SpotSweeper` starts after a spatial expression object exists and asks
  whether QC failures are spatially structured.
- `stPipe` starts earlier, during preprocessing of sequencing-based spatial
  transcriptomics data, and organizes QC metrics as part of producing processed
  spatial expression outputs.

The strongest decision cue is therefore input processing stage, followed by
whether the user needs explicit spatial-artifact handling or a broader
preprocessing pipeline. Because no dedicated benchmark compares the two in a
shared endpoint, the decision tree should not claim one method is generally
better.

## Decision Tree

### Step 0. Are you actually in this topic?

If the main task is denoising, imputation, normalization, segmentation,
deconvolution, spatial domain discovery, histology-to-expression prediction, or
artifact correction beyond QC flagging:

- Do not start from this package.
- Use the corresponding analysis problem first.

If the main task is assessing, flagging, filtering, or organizing quality
control for spatial transcriptomics data:

- Continue to Step 1.

### Step 1. What data stage is available?

If a spatial count object already exists and includes coordinates plus QC
metrics:

- Prefer / consider `SpotSweeper`.
- Use this branch when the question is whether low-quality spots or tissue
  regions show spatially structured artifacts.

If the work starts from raw or near-raw sequencing-based spatial
transcriptomics preprocessing inputs:

- Prefer / consider `stPipe`.
- Use this branch when the immediate goal is an organized preprocessing plus QC
  workflow.

If the data stage is unclear:

- Clarify whether count generation/preprocessing has already happened before
  selecting between these methods.

### Step 2. Is explicit spatial artifact handling the central requirement?

If yes:

- Prefer / consider `SpotSweeper`.
- Keep a scientific caution that spatially structured biology and spatially
  structured technical artifacts can be confounded without downstream review.

If no, and broader preprocessing/QC metric organization is the central
requirement:

- Prefer / consider `stPipe`.
- Keep a scientific caution that pipeline-level QC summaries do not by
  themselves prove absence of local spatial artifacts.

### Step 3. Resource and scale caution

If the analysis is small to moderate and CPU-first:

- Both frozen candidates remain plausible from the coarse registry compute cue.
- Do not interpret CPU labels as BioHarness runtime support.

If the analysis is multi-sample, very high-resolution, or sequencing-depth
heavy:

- Keep `Memory Burden` and `Scale Sensitivity` as `unclear` until later
  engineering or benchmark audit.
- Do not infer a branch-local winner from current Layer 2 evidence alone.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `SpotSweeper` | post-count spatially aware QC | spatial artifact calls can be confounded with real spatial biology and need contextual review |
| `stPipe` | upstream preprocessing plus QC workflow | broad pipeline QC does not replace focused spatial local-artifact assessment |

## Review Decision

The current evidence supports a Layer 2 conditional decision tree, not a
universal method ranking. The package is suitable for method-selection
discussion and representative Layer 3/4 audit triage after closure, while all
runtime and adapter decisions remain outside this Layer 2 package.
