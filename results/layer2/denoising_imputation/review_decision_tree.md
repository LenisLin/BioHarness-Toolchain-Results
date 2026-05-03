# Denoising / Imputation Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded review pass, evidence spot-checks, logic
review, decision tree, and coverage ledger for the frozen
`Denoising / Imputation` candidate set. It does not define execution surfaces,
wrappers, adapter boundaries, callable signatures, environments, or runtime
support.

## Reading Rules

- Keep the seven-method freeze unchanged:
  `MIST`, `SpotGF`, `Sprod`, `DiffusionST`, `stDiff`, `stGRL`, `spRefine`.
- Use `Subtask` values as branch cues only; they are not separate Layer 2
  completion units.
- Treat compute as a branch-local resource gate. It cannot override task fit.
- Use benchmark or review evidence only for caveats or branch-local
  interpretation. Do not turn it into a universal ranking.
- Keep `SpotGF` tagged as a boundary row with `Normalization / Feature
  Selection`.
- Treat `Closest Alternatives`, `Key Difference`, resource burden, scale
  sensitivity, and signal-risk caveats as Layer 2 synthesized judgment unless
  the method row states direct support.

## Review Pass

### PubMed candidate verification

The seven frozen candidate PMIDs were verified with PubMed E-utilities:

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `MIST` | 36376296 | 10.1038/s41467-022-34567-0 | Method-paper identity confirmed. |
| `SpotGF` | 39378875 | 10.1016/j.cels.2024.09.005 | Method-paper identity confirmed. |
| `Sprod` | 35927477 | 10.1038/s41592-022-01560-w | Method-paper identity confirmed. |
| `DiffusionST` | 40794943 | 10.1093/bib/bbaf390 | Method-paper identity confirmed. |
| `stDiff` | 38628114 | 10.1093/bib/bbae171 | Method-paper identity confirmed. |
| `stGRL` | 40597202 | 10.1186/s12915-025-02290-z | Method-paper identity confirmed. |
| `spRefine` | 41633767 | 10.1101/gr.281001.125 | Method-paper identity confirmed; PubMed records it as an update of a preprint. |

### Benchmark/review screening

Query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
(denoising[Title/Abstract] OR imputation[Title/Abstract] OR
 enhancement[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

The query retrieved broad reviews and related method papers. Relevant examples
include broad data-enhancement or spatial-transcriptomics-analysis reviews, but
no dedicated independent benchmark was found that jointly compares and ranks
the seven frozen denoising/imputation candidates.

Review conclusion: use explicit logic review derived from the method table.
Method-paper comparisons can support local caveats but cannot support a global
all-method ranking.

## Evidence Spot-checks

| Tool | Direct support | Layer 2 synthesis / caution |
| --- | --- | --- |
| `MIST` | Paper identity and region-specific denoising/imputation claim are verified by PubMed/DOI and official code availability. | Comparator choices, scale cue, and over-smoothing caution are topic-level synthesis. |
| `SpotGF` | Paper identity, optimal-transport gene-filtering claim, and GitHub link are verified. | Its inclusion is boundary-sensitive because output is closer to gene filtering than expression imputation. |
| `Sprod` | Paper identity and image/position-informed denoising claim are verified. | `Image Signal Use = optional` reflects use of image or pseudo-image signal; practical dependence varies by dataset. |
| `DiffusionST` | Paper identity and deep generative quality-enhancement claim are verified. | Generative hallucination and scale/compute cautions are inferred from method type and paper-local validation limits. |
| `stDiff` | Paper identity and scRNA-reference-assisted imputation claim are verified. | Reference-bias caution depends on reference match and is not resolved by method-paper validation alone. |
| `stGRL` | Paper identity and multi-task domain/denoising/imputation claim are verified. | Denoising can be entangled with domain objectives; downstream sanity checks remain important. |
| `spRefine` | Paper identity, reference-free genomic-language-model framing, code link, and high resource report are verified. | Foundation-model prior/hallucination caution remains a Layer 2 scientific-risk judgment. |

## Decision Tree

### Step 0. Are you actually in this topic?

If the main task is artifact or contamination correction:

- Do not start here.
- Use the `Artifact Correction` topic once available.

If the main task is normalization, scaling, variance stabilization, or HVG
selection:

- Do not treat this topic as the primary package.
- `SpotGF` may be read as a boundary denoising/gene-filtering method only.

If the main task is histology-to-expression prediction, super-resolution, cell
type inference, or domain clustering:

- Use the corresponding analysis problem first.
- Only return here if expression denoising/imputation is the stated method
selection problem.

### Step 1. Is the intended intervention conservative gene filtering rather than matrix imputation?

If yes:

- Prefer / consider `SpotGF`.
- Keep the boundary caveat: this is a gene-filtering denoising route, not a
  matrix-filling method.

If no:

- Continue to Step 2.

### Step 2. Is a high-quality matched scRNA-seq reference available and intended for imputation?

If yes:

- Prefer / consider `stDiff`.
- Use this branch when missing-gene imputation is the main goal.
- Keep reference-bias and reference-mismatch caveats visible.

If no or reference-free analysis is preferred:

- Continue to Step 3.

### Step 3. Should image or image-derived signal guide denoising?

If yes:

- Prefer / consider `Sprod`.
- Use this branch when spatial position plus histology or pseudo-image
  structure is expected to help recover expression signal.
- Keep morphology and over-smoothing caveats visible.

If no:

- Continue to Step 4.

### Step 4. Is region-aware and interpretable imputation preferred over deep generative enhancement?

If yes:

- Prefer / consider `MIST`.
- Use this branch for region-aware missing-value imputation with explicit
  molecular-region context.

If no or stronger model-based enhancement is acceptable:

- Continue to Step 5.

### Step 5. Is deep graph/generative/model-prior enhancement acceptable?

If graph/deep generative enhancement is desired and GPU use is acceptable:

- Prefer / consider `DiffusionST`.
- Especially relevant when quality enhancement and domain-quality improvement
  are linked in the analysis goal.

If denoising/imputation should be coupled with graph representation and spatial
domain discovery:

- Prefer / consider `stGRL`.
- Keep the multi-task/domain-entanglement caveat visible.

If reference-free imputation is desired but a strong pretrained gene prior is
acceptable:

- Prefer / consider `spRefine`.
- Keep high resource and model-prior caveats visible.

### Step 6. Resource gate

If the analysis must stay CPU-first:

- Read first: `SpotGF`, `MIST`, `Sprod`.
- Do not interpret CPU labels as runtime support inside BioHarness.

If GPU or high-memory resources are acceptable:

- Expand reading to: `DiffusionST`, `stDiff`, `stGRL`, `spRefine`.
- `spRefine` should receive extra resource scrutiny during any later
  engineering audit.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `MIST` | region-aware interpretable imputation | possible boundary smoothing |
| `SpotGF` | conservative gene filtering | boundary with feature selection |
| `Sprod` | image/position-informed denoising | morphology or pseudo-image bias |
| `DiffusionST` | deep generative enhancement | hallucination/amplification risk |
| `stDiff` | scRNA-reference-assisted imputation | reference mismatch and bias |
| `stGRL` | graph multi-task denoising/imputation | domain-objective entanglement |
| `spRefine` | model-prior-assisted reference-free imputation | model-prior and resource burden |

## Review Decision

The current evidence supports a Layer 2 conditional decision tree, not a
universal method ranking. The package is suitable for method-selection
discussion and representative Layer 3/4 audit triage after closure, while all
runtime and adapter decisions remain outside this Layer 2 package.
