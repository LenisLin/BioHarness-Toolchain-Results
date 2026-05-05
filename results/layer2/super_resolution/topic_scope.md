# Super-resolution Topic Scope

## Boundary

Super-resolution covers methods whose main reusable contribution is finer-geometry reconstruction, measured high-density/submicron representation, enhanced-resolution representation, high-density profile generation, or cell-level inferred reconstruction anchored by target-sample measured spatial expression or spatial omics. FICTURE is retained as a measured high-density representation row, not as spot-to-subspot reconstruction.

The package is a Layer 2 knowledge artifact. It does not imply execution readiness, machine-call contracts, backend bindings, execution-environment bundles, or universal-method policy.

## Inclusion Rules

- The active Layer 1 registry lists the row under `Analysis Problem = Super-resolution`.
- The row's `Main Input`, `Main Output`, and `Analysis Problem Basis` match the topic boundary.
- The method contributes reusable method-selection knowledge for this analysis problem.

## Exclusion Rules

- Exclude when the primary task is expression values predicted primarily from histology, reference, bulk, or model priors without a target-sample measured spatial anchor.
- Exclude when the primary task is same-resolution denoising, smoothing, filtering, or measured-grid signal recovery.
- Exclude when the primary task is cell segmentation, cell type inference, or transcript assignment as the primary endpoint.

## Candidate Freeze

Candidate count: 11

Methods, in discussion-locked order: FICTURE, iStar, scstGCN, Spotiphy, TESLA, XFuse, ImSpiRE, soScope, iSCALE, STAGE, Thor.

## Branch Organization

- spot/subspot or high-density reconstruction
- histology-aware super-resolution
- pseudo-cell or cell-level inferred reconstruction
- submicron/factor-map representation

The branch organization is local to this topic and should not be read as a cross-branch universal ordering or universal-method sequence.
