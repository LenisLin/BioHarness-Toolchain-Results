# Denoising / Signal Recovery Topic Scope

## Boundary

Denoising / Signal Recovery covers methods whose main reusable contribution is denoising, smoothing, filtering, reconstructing, or recovering measured spatial expression signal at the same intended spatial resolution or measured-coordinate grid.

The package is a Layer 2 knowledge artifact. It does not imply execution readiness, machine-call contracts, backend bindings, execution-environment bundles, or universal-method policy.

## Inclusion Rules

- The active Layer 1 registry lists the row under `Analysis Problem = Denoising / Signal Recovery`.
- The row's `Main Input`, `Main Output`, and `Analysis Problem Basis` match the topic boundary.
- The method contributes reusable method-selection knowledge for this analysis problem.

## Exclusion Rules

- Exclude when the primary task is missing or unmeasured gene expression prediction as the primary endpoint.
- Exclude when the primary task is histology-to-expression generation.
- Exclude when the primary task is finer-geometry super-resolution or pseudo-cell generation.
- Exclude when the primary task is artifact correction, QC, or normalization when those are the primary contribution.

## Candidate Freeze

Candidate count: 7

Methods, in discussion-locked order: MIST, SpotGF, Sprod, DiffusionST, stGRL, GNTD, SPCS.

## Branch Organization

- region-aware denoising
- gene filtering and smoothing
- image/position-informed signal recovery
- diffusion or graph denoising
- tensor or spatial-pattern reconstruction

The branch organization is local to this topic and should not be read as a cross-branch universal ordering or universal-method sequence.
