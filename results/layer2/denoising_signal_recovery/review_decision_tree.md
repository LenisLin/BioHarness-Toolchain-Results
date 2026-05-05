# Denoising / Signal Recovery Review And Decision Tree

This review records branch-local logic for the 7-method candidate freeze. It does not define a cross-branch universal ordering, universal method choice, execution readiness, machine-call contract, backend binding, or execution-environment bundle.

## Logic Review

The 2026-05-04 taxonomy cleanup uses Layer 1 `Main Input`, `Main Output`, and `Analysis Problem Basis` fields to keep Super-resolution, Gene Expression Prediction / Imputation, and Denoising / Signal Recovery separated by input/output object rather than by promotional wording.

## Decision Tree

1. **Same-resolution gate.** Consider this topic when the input is measured spatial expression and the requested output remains on the same intended spot, cell, or coordinate grid.
2. **Signal-quality branch.** Consider MIST, SpotGF, Sprod, DiffusionST, stGRL, GNTD, or SPCS when the branch question is denoising, smoothing, filtering, or signal recovery.
3. **Prediction exclusion.** Route to Gene Expression Prediction / Imputation when the output is unmeasured-gene, histology-to-expression, or reference-derived expression prediction.
4. **Super-resolution exclusion.** Route to Super-resolution when the output is finer-geometry reconstruction of target-sample measured spatial signal.

## Coverage Ledger

- `MIST`: target-sample measured spatial transcriptomics matrix with region context -> same-resolution denoised or imputed expression matrix. Caveat: Recovered, smoothed, denoised, or reconstructed values remain model-processed signals; do not interpret them as new direct measurements or as unmeasured-gene prediction unless the method explicitly supports that branch.
- `SpotGF`: target-sample measured spatial transcriptomics expression matrix -> filtered/denoised gene set or expression signal. Caveat: Recovered, smoothed, denoised, or reconstructed values remain model-processed signals; do not interpret them as new direct measurements or as unmeasured-gene prediction unless the method explicitly supports that branch.
- `Sprod`: target-sample measured ST with positions and image information -> same-resolution denoised spatial expression values. Caveat: Recovered, smoothed, denoised, or reconstructed values remain model-processed signals; do not interpret them as new direct measurements or as unmeasured-gene prediction unless the method explicitly supports that branch.
- `DiffusionST`: target-sample measured ST matrix with spatial context -> denoised spatial transcriptomics expression at the existing spots. Caveat: Recovered, smoothed, denoised, or reconstructed values remain model-processed signals; do not interpret them as new direct measurements or as unmeasured-gene prediction unless the method explicitly supports that branch.
- `stGRL`: target-sample measured ST with spatial graph/context -> denoised or recovered expression representation at the same grid. Caveat: Recovered, smoothed, denoised, or reconstructed values remain model-processed signals; do not interpret them as new direct measurements or as unmeasured-gene prediction unless the method explicitly supports that branch.
- `GNTD`: spatial gene expression tensor plus spatial spot graph and optional gene functional graph -> imputed/reconstructed spatial expression tensor for measured coordinates. Caveat: Recovered, smoothed, denoised, or reconstructed values remain model-processed signals; do not interpret them as new direct measurements or as unmeasured-gene prediction unless the method explicitly supports that branch.
- `SPCS`: ST expression matrix plus spot positions and expression-pattern neighborhoods -> smoothed ST expression values and optional existing-grid blank-spot padding. Caveat: Recovered, smoothed, denoised, or reconstructed values remain model-processed signals; do not interpret them as new direct measurements or as unmeasured-gene prediction unless the method explicitly supports that branch.

## Evidence Strength

Most rows are method-paper-local evidence. Code links are access traces only. No all-candidate independent benchmark is claimed for this cleanup.
