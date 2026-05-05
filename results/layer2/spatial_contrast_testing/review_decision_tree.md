# Spatial Contrast Testing Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

## Logic Review

This package assumes Layer 1 has already assigned the Analysis Problem. It selects among explicit spatial contrast-testing branches: cell-type-specific DE, niche-conditioned DE, spatial-correlation-aware DE, unregistered spatial pattern contrast, structurally matched pattern contrast, and registered pixel-wise maps.

The decision tree starts with the explicit contrast design and requested output object. Evidence strength, code trace, and resource cues are secondary checks after branch fit. Preprint status is provenance and confidence context, not a standalone method-selection gate.

## Evidence Spot-checks

| Tool | Direct support | Layer 2 caution |
| --- | --- | --- |
| `C-SIDE` | PubMed/DOI method identity and spacexr code trace. | Cell-type assignment and composition confounding can become false contrast signal. |
| `Niche-DE` | PubMed/DOI method identity and public code trace. | Niche construction and annotation choices can dominate inferred context effects. |
| `SPADE` | PubMed/DOI method identity and public code trace. | Platform density and spatial autocorrelation can change pattern statistics. |
| `SpatialGEE` | PubMed/DOI identity for comparative statistical-method evidence and code trace. | Benchmark support is branch-local and does not validate other estimands. |
| `STcompare` | bioRxiv DOI and public GitHub trace retained from targeted check. | Preprint provenance lowers confidence; structural comparability is the branch-fit requirement. |
| `SpatialSPM` | PubMed/DOI method identity and code-availability trace. | Registration, smoothing, and template choice can create or hide local differences. |

## Decision Tree

### Step 0. Confirm Layer 1 assignment

If this package was opened for a task without a condition, group, covariate, matched-tissue, or registered-template contrast, return to Layer 1 Analysis Problem assignment. Do not use this Layer 2 tree to make a global AP decision.

### Step 1. Is the contrast cell-type-specific?

If reliable cell type weights, deconvolution, or reference-informed assignments are available and the output should be cell-type-specific DE:

- Consider `C-SIDE`.
- Carry reference mismatch, cell-type assignment, and composition-confounding caveats.

### Step 2. Is the contrast niche-conditioned?

If the output should be niche-differential genes or context-conditioned expression changes:

- Consider `Niche-DE`.
- Carry niche-definition, annotation, and sample-confounding caveats.

### Step 3. Is the contrast a spatial DE or unregistered spatial-pattern test?

If the branch needs a spatial-correlation-aware condition/covariate statistical model:

- Consider `SpatialGEE`.
- Use comparative statistical-method evidence only for this branch.

If the branch needs between-group spatial pattern plus DE analysis without registration:

- Consider `SPADE`.
- Carry platform, density, and spatial-autocorrelation caveats.

### Step 4. Is structural matching or registration central?

If tissues are structurally matched and the target is differentially spatially patterned genes:

- Consider `STcompare`.
- Carry preprint-provenance and structural-comparability caveats. Do not treat preprint status as a selection gate; treat structural comparability as the method-fit condition.

If datasets can be defensibly registered to a common image-like template for pixel-wise mapping:

- Consider `SpatialSPM`.
- Carry registration, smoothing, and template-choice caveats.

## Coverage Ledger

| Tool | Covered branch | Main caveat |
| --- | --- | --- |
| `C-SIDE` | cell-type-specific condition contrast | reference and composition confounding |
| `Niche-DE` | niche-conditioned condition contrast | niche-definition and annotation bias |
| `SPADE` | unregistered spatial pattern / DE contrast | spatial autocorrelation and platform density |
| `SpatialGEE` | spatial-correlation-aware condition contrast | branch-local benchmark transferability |
| `STcompare` | structurally matched spatial pattern contrast | preprint provenance and structural matching |
| `SpatialSPM` | registered pixel-wise pattern contrast | registration/template/smoothing bias |

## Review Decision

The split package is suitable as a Layer 2 working/evidence package for branch-local method selection. It should not be collapsed back into phenotype-linked niche analysis or within-sample SVG detection.
