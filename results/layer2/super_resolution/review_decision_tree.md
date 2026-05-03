# Super-resolution Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded PubMed verification pass, benchmark/review
screening, logic review, decision tree, and coverage ledger for the frozen
`Super-resolution` candidate set. It does not define execution surfaces,
wrappers, adapter boundaries, callable signatures, environments, default
methods, or runtime support.

## Reading Rules

- Keep the eight-method freeze unchanged: `FICTURE`, `iStar`, `scstGCN`,
  `Spotiphy`, `TESLA`, `XFuse`, `iSCALE`, `STAGE`.
- Use the Layer 1 `Subtask` value as a branch cue only; it is not a separate
  Layer 2 completion unit.
- Treat compute as a branch-local resource gate. It cannot override task fit.
- Use benchmark or review evidence only for caveats or branch-local
  interpretation. Do not turn it into a universal ranking.
- Treat `Closest Alternatives`, `Key Difference`, resource burden, scale
  sensitivity, and signal-risk caveats as Layer 2 synthesized judgment unless
  the row states direct support.
- Keep `unclear` where bounded evidence does not verify code access, memory
  burden, scale behavior, image dependence, or reference dependence.

## Review Pass

### PubMed candidate verification

The eight frozen candidate PMIDs were verified with PubMed E-utilities:

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `FICTURE` | 39266749 | 10.1038/s41592-024-02415-2 | Method-paper identity confirmed. |
| `iStar` | 38168986 | 10.1038/s41587-023-02019-9 | Method-paper identity confirmed. |
| `scstGCN` | 39656774 | 10.1093/bib/bbae630 | Method-paper identity confirmed; DOI filled from PubMed because frozen input left DOI blank. |
| `Spotiphy` | 40074951 | 10.1038/s41592-025-02622-5 | Method-paper identity confirmed. |
| `TESLA` | 37164011 | 10.1016/j.cels.2023.03.008 | Method-paper identity confirmed. |
| `XFuse` | 34845373 | 10.1038/s41587-021-01075-3 | Method-paper identity confirmed. |
| `iSCALE` | 40954300 | 10.1038/s41592-025-02770-8 | Method-paper identity confirmed; PubMed records it as an update of a preprint. |
| `STAGE` | 38647109 | 10.1093/nar/gkae294 | Method-paper identity confirmed. |

### Benchmark/review screening

Screening used the bounded PubMed queries recorded in `topic_scope.md`.

The broad query retrieved adjacent reviews and benchmarks, including reviews
about tissue morphology with spatial transcriptomics, multiplexed spatial
transcriptomics and expansion microscopy, spatial omics at nanoscale
resolution, and benchmarks for other spatial transcriptomics tasks such as
multi-slice integration or spatially variable gene detection. The narrower
query retrieved iSCALE, its preprint predecessor, and a related histology-based
super-resolution method. These results are useful context, but they do not
provide an independent benchmark that jointly compares and ranks the eight
frozen candidates.

Review conclusion: no suitable all-candidate independent benchmark was found
in the bounded PubMed screen. Use explicit logic review derived from the field
registry and method table. Method-paper evidence can support local branch
placement but cannot support a global all-method ranking.

## Evidence Spot-checks

| Tool | Direct support | Layer 2 synthesis / caution |
| --- | --- | --- |
| `FICTURE` | PubMed verifies submicron-resolution segmentation-free FICTURE paper and DOI; frozen input records GitHub. | Treat as a high-resolution factorization route, not a generic spot-upsampling default. |
| `iStar` | PubMed verifies histology-integrated super-resolution tissue-architecture paper and DOI. | Code access remains unclear in this bounded pass; morphology bias is a scientific caution. |
| `scstGCN` | PubMed verifies single-cell-resolution expression inference using ST, location, and histology; DOI filled from PubMed. | Code access remains unclear; graph/image fusion risks propagating neighborhood or image assumptions. |
| `Spotiphy` | PubMed verifies single-cell spatial whole-transcriptomics across an entire section; frozen input records GitHub. | Pseudo-single-cell outputs should not be treated as directly measured cells. |
| `TESLA` | PubMed verifies tumor ecosystem super-resolution paper and DOI; frozen input records GitHub. | Tumor-focused validation may not generalize to non-tumor tissue contexts. |
| `XFuse` | PubMed verifies foundational deep data-fusion super-resolution paper and DOI; frozen input records GitHub. | Deep fusion can produce image-correlated expression estimates that require independent biological checks. |
| `iSCALE` | PubMed verifies large-sized tissue cellular-level architecture paper and DOI. | Code access remains unclear; large-area success can mask local reconstruction failures. |
| `STAGE` | PubMed verifies high-density generation of ST paper and DOI. | Code access remains unclear; generated profiles need checks against smoothing and circular validation. |

## Decision Tree

### Step 0. Are you actually in this topic?

If the main task is denoising, imputation, normalization, artifact correction,
cell type inference, domain clustering, or cell-cell communication:

- Do not start with this topic.
- Use the corresponding Layer 2 analysis problem first.

If the main task is to infer, generate, or analyze a higher-resolution spatial
transcriptomics representation:

- Continue to Step 1.

### Step 1. Is the input already high-density or submicron spatial transcriptomics?

If yes and the desired output is segmentation-free factor or expression
structure:

- Prefer / consider `FICTURE`.
- Keep the caveat that factor maps are not automatically cell-resolved
  measurements.

If no, or if the task is to infer higher resolution from spot-based or sparse
input:

- Continue to Step 2.

### Step 2. Is the main goal large-area or whole-section cellular reconstruction?

If the main cue is large-sized tissue and cellular-level architecture beyond
conventional platform resolution:

- Prefer / consider `iSCALE`.
- Keep code-access and local-failure caveats visible.

If the main cue is pseudo-single-cell whole-transcriptome reconstruction across
an entire section:

- Prefer / consider `Spotiphy`.
- Keep inferred-cell certainty caveats visible.

If neither branch fits:

- Continue to Step 3.

### Step 3. Is matched histology the central signal for spot-level super-resolution?

If yes and the output target is tissue architecture:

- Prefer / consider `iStar`.

If yes and the output target is single-cell-resolution expression from
expression, location, and image fusion:

- Prefer / consider `scstGCN`.

If yes and the context is tumor ecosystem interpretation:

- Prefer / consider `TESLA`.

If yes and the desired comparison is a foundational deep fusion route:

- Prefer / consider `XFuse`.

If histology is not the central signal:

- Continue to Step 4.

### Step 4. Is the stated task high-density ST generation from sparse spatial input?

If yes:

- Prefer / consider `STAGE`.
- Keep code-access, smoothing, and generated-profile caveats visible.

If no:

- Re-check the problem boundary. The task may belong to denoising/imputation,
  integration, segmentation, or cell type inference rather than
  Super-resolution.

### Step 5. Resource and evidence gate

If the analysis must remain CPU-first:

- Read first: `FICTURE`.
- Do not interpret the CPU label as BioHarness runtime support.

If GPU-capable methods are acceptable:

- Expand reading to: `iStar`, `scstGCN`, `Spotiphy`, `TESLA`, `XFuse`,
  `iSCALE`, and `STAGE`, subject to branch fit.

If verified public code access is required before deeper engineering review:

- Start audit triage with `FICTURE`, `Spotiphy`, `TESLA`, and `XFuse`.
- Treat `iStar`, `scstGCN`, `iSCALE`, and `STAGE` as code-access-unclear until
  a later audit verifies primary repositories or package entrypoints.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `FICTURE` | already high-density/submicron segmentation-free factorization | factor maps are not direct cell measurements |
| `iStar` | histology-guided tissue-architecture inference | morphology bias and unclear code access |
| `scstGCN` | graph/image single-cell-resolution expression inference | neighborhood/image assumption propagation and unclear code access |
| `Spotiphy` | pseudo-single-cell whole-section reconstruction | inferred-cell certainty risk |
| `TESLA` | tumor ecosystem super-resolution | tumor-context transfer limits |
| `XFuse` | foundational deep image-expression fusion | image-correlated hallucination risk |
| `iSCALE` | large-area cellular-level reconstruction | local failure masking and unclear code access |
| `STAGE` | high-density ST generation | generated-profile smoothing and unclear code access |

## Review Decision

The current evidence supports a Layer 2 conditional decision tree, not a
universal method ranking. The package is suitable for method-selection
discussion and representative Layer 3/4 audit triage after closure, while all
runtime and adapter decisions remain outside this Layer 2 package.
