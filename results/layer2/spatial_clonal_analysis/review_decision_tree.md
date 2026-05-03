# Spatial Clonal Analysis Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded PubMed review pass, evidence spot-checks,
logic review, decision tree, and coverage ledger for the frozen `Spatial
Clonal Analysis` candidate set. It does not define execution surfaces,
wrappers, adapter boundaries, callable signatures, environments, or runtime
support.

## Reading Rules

- Keep the five-method freeze unchanged: `CalicoST`, `Clonalscope`, `STARCH`,
  `Tumoroscope`, `SlideCNA`.
- Use `Subtask` values as branch cues only; they are not separate Layer 2
  completion units.
- Treat copy-number, allele-specific copy-number, somatic-mutation, and
  clone-proportion outputs as distinct biological signals.
- Use benchmark or review evidence only for caveats or branch-local
  interpretation. Do not turn method-paper comparisons into a universal
  ranking.
- Treat `Closest Alternatives`, `Key Difference`, resource burden, scale
  sensitivity, and some spot-mixture labels as Layer 2 synthesized judgment
  unless the method row states direct support.

## Review Pass

### PubMed candidate verification

The five frozen candidate PMIDs were verified with PubMed E-utilities:

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `CalicoST` | 39478176 | 10.1038/s41592-024-02438-9 | Method-paper identity confirmed. |
| `Clonalscope` | 40954304 | 10.1038/s41592-025-02773-5 | Method-paper identity confirmed. |
| `STARCH` | 33022659 | 10.1088/1478-3975/abbe99 | Method-paper identity confirmed. |
| `Tumoroscope` | 39472583 | 10.1038/s41467-024-53374-3 | Method-paper identity confirmed; PubMed records a 2025 erratum. |
| `SlideCNA` | 40317049 | 10.1186/s13059-025-03573-y | Method-paper identity confirmed. |

### Code-link verification

| Tool | Primary code/source check | Verification result |
| --- | --- | --- |
| `CalicoST` | PMC code availability and GitHub URL | Official GitHub and Zenodo code source confirmed. |
| `Clonalscope` | Nature Methods page, official GitHub, and README | Official GitHub with install and spatial tutorials confirmed. |
| `STARCH` | PMC code availability | Official GitHub implementation confirmed. |
| `Tumoroscope` | PMC code availability | Installable package and official GitHub confirmed. |
| `SlideCNA` | PMC data/code availability | CRAN, official GitHub, analysis vignettes, and Zenodo deposition confirmed. |

### Benchmark/review screening

Broad query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
(clone[Title/Abstract] OR subclone[Title/Abstract] OR
 clonal[Title/Abstract] OR "copy number"[Title/Abstract] OR
 CNA[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

Method-name query:

```text
(CalicoST[Title/Abstract] OR Clonalscope[Title/Abstract] OR
 Tumoroscope[Title/Abstract] OR SlideCNA[Title/Abstract] OR
 ("STARCH"[Title/Abstract] AND "spatial transcriptomics"[Title/Abstract]))
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

The broad query retrieved reviews and adjacent cancer/spatial-omics articles.
The method-name query retrieved a 2026 bioRxiv preprint benchmarking scRNA-seq
copy-number inference, not a dedicated independent benchmark that compares the
five frozen spatial clonal-analysis methods.

Review conclusion: no suitable independent all-candidate benchmark was found.
Use explicit logic review derived from method inputs, clonal signal basis,
matched-data dependence, spot-mixture handling, and validation anchors.

## Evidence Spot-checks

| Tool | Direct support | Layer 2 synthesis / caution |
| --- | --- | --- |
| `CalicoST` | PubMed/DOI, PMC code availability, allele-specific CNA and phylogeography claims, and matched-WES validation are direct method-paper evidence. | Branch placement as the allele-specific phylogeography route and scale cue are Layer 2 synthesis. |
| `Clonalscope` | PubMed/DOI and official repository support copy-number-based subclone detection for single-cell and spatial omic data with ST tutorials. | Relative placement versus CalicoST, STARCH, and SlideCNA is synthesized; matched DNA is optional rather than universally required. |
| `STARCH` | PubMed/DOI, PMC code availability, ST expression + coordinate inputs, and comparisons with InferCNV/non-spatial STARCH are direct evidence. | Its role as an older total-CNA ST-only baseline is a Layer 2 interpretation. |
| `Tumoroscope` | PubMed/DOI, PMC code availability, matched WES/bulk DNA, H&E-derived cell counts, ST mutation reads, and clone-proportion deconvolution are direct evidence. | The high data-dependence caution and scale cue are synthesized from input complexity and validation setting. |
| `SlideCNA` | PubMed/DOI, PMC code/source availability, sparse Slide-seq-like CNA recovery, simulations, and genomic checks are direct evidence. | Treating subclone detection as potential rather than guaranteed is a Layer 2 caution based on the paper's wording and validation scope. |

## Decision Tree

### Step 0. Are you actually in this topic?

If the main task is spatial domain clustering, cell type inference,
cell-cell communication, trajectory analysis, or program discovery:

- Do not start here.
- Use the corresponding analysis problem first.

If the main task is general single-cell CNA inference without spatial data:

- Do not treat this topic as primary.
- Only return here when the task explicitly involves spatial clone, spatial
  CNA, spatial subclone, clone proportion, or tumor phylogeography analysis.

### Step 1. Is the clone definition based on matched somatic mutations and clone genotypes?

If yes, and matched bulk DNA/WES, ST mutation-read evidence, and
pathology-derived cell-count priors are available:

- Prefer / consider `Tumoroscope`.
- Keep the input-dependence caveat visible; this branch is not a pure ST-only
  route.

If no:

- Continue to Step 2.

### Step 2. Is allele-specific CNA or tumor phylogeography the central goal?

If yes, and SRT allele counts at informative germline SNPs are available:

- Prefer / consider `CalicoST`.
- Use this branch especially when CNLOH, mirrored subclonal CNAs, multi-slice
  reconstruction, or phylogeography is part of the question.

If only total-CNA or copy-number-profile subclones are needed:

- Continue to Step 3.

### Step 3. Are the data sparse high-resolution Slide-seq-like ST?

If yes:

- Prefer / consider `SlideCNA`.
- Keep the caveat that its strongest direct role is spatial CNA detection; use
  subclone language conservatively unless supported by downstream checks.

If no:

- Continue to Step 4.

### Step 4. Are copy-number profiles or compatible CNA estimates already available across spatial or single-cell tumor omics?

If yes:

- Prefer / consider `Clonalscope`.
- Use this branch for copy-number-profile subclone detection, malignant
  labeling, or tracing spatially segregated subclones.

If no and the available input is mainly ST expression plus coordinates:

- Continue to Step 5.

### Step 5. Is an ST-only expression-and-coordinate total-CNA clone baseline appropriate?

If yes:

- Prefer / consider `STARCH`.
- Keep the caveat that it is total-CNA and older-method evidence; it should not
  be used as a substitute for allele-specific, mutation-defined, or sparse
  Slide-seq-specific branches.

If no:

- The current frozen set may not fit the data question. Recheck whether the
  actual task belongs to another analysis problem or requires a later Layer 1
  registry update outside this package.

### Step 6. Resource and evidence gate

If the analysis must stay CPU-first:

- All five rows are currently recorded as CPU in the Layer 1 input, but this is
  only a coarse evidence label.
- Do not interpret CPU labels as runtime support inside BioHarness.

If the dataset is large, multi-slice, high-resolution, or has many clones,
variants, or genomic bins:

- Carry extra audit scrutiny for `CalicoST`, `Tumoroscope`, `SlideCNA`, and
  `STARCH`, because resource and scale fields are not independently benchmarked
  across the frozen set.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `CalicoST` | allele-specific CNA and phylogeography | requires suitable allele-count signal; not expression-only |
| `Clonalscope` | copy-number-profile subclone detection | broad single-cell/spatial scope; matched-DNA use is branch-dependent |
| `STARCH` | ST-only total-CNA clone inference | older, total-CNA, expression/coordinate baseline |
| `Tumoroscope` | matched DNA and point-mutation clone deconvolution | high input-dependence; not pure ST-only |
| `SlideCNA` | sparse high-resolution Slide-seq-like CNA recovery | subclone detection should remain plausibility-checked |

## Review Decision

The current evidence supports a Layer 2 conditional decision tree, not a
universal method ranking. The package is suitable for method-selection
discussion and representative Layer 3/4 audit triage after closure, while all
runtime and adapter decisions remain outside this Layer 2 package.
