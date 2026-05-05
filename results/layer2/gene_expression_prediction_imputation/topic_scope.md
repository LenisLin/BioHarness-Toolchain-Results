# Gene Expression Prediction / Imputation Topic Scope

## Boundary

Gene Expression Prediction / Imputation covers methods whose main reusable contribution is predicting, imputing, generating, refining, or calibrating spatial expression values that are missing, unmeasured, reference-derived, histology-derived, or otherwise not directly observed in the target output form.

The package is a Layer 2 knowledge artifact. It does not imply execution readiness, machine-call contracts, backend bindings, execution-environment bundles, or universal-method policy.

## Inclusion Rules

- The active Layer 1 registry lists the row under `Analysis Problem = Gene Expression Prediction / Imputation`.
- The row's `Main Input`, `Main Output`, and `Analysis Problem Basis` match the topic boundary.
- The method contributes reusable method-selection knowledge for this analysis problem.

## Exclusion Rules

- Exclude when the primary task is same-resolution denoising or smoothing of already measured expression as the primary endpoint.
- Exclude when the primary task is finer-geometry reconstruction of target-sample measured spatial signal as the primary endpoint.
- Exclude when the primary task is cell type deconvolution, segmentation, or communication inference as the primary endpoint.

## Candidate Freeze

Candidate count: 17

Methods, in discussion-locked order: GHIST, Hist2ST, THItoGene, FmH2ST, OmiCLIP, SpaGE, stPlus, SpatialScope, STASCAN, stAI, TISSUE, ENGEP, iSpatial, stDiff, SPRITE, DIST, STGAT.

## Branch Organization

- histology-to-expression prediction
- reference-assisted missing-gene or genome-wide imputation
- cellular-resolution expression reconstruction
- post-prediction refinement and uncertainty calibration
- unmeasured-location expression prediction

The branch organization is local to this topic and should not be read as a cross-branch universal ordering or universal-method sequence.
