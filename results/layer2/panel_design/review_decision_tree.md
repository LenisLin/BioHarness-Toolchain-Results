# Panel Design Review Decision Tree

Purpose: `when to choose`, not `how to run`.

## Step 0. Is this pre-assay panel design?

Use this package only when the requested deliverable is a targeted spatial transcriptomics gene/probe panel. If the task is normalization, expression prediction, imputation, denoising, SVG detection, or communication inference, use the corresponding analysis problem.

## Step 1. Is prioritized gene-set design central?

Consider `scGIST` when prioritized gene sets, cell-type structure, and fixed panel size are central to the task.

## Step 2. Is direct targeted ST gene-panel selection requested?

Consider `gpsFISH` when the task is targeted spatial transcriptomics gene-panel selection from reference data and assay constraints.

## Step 3. Is probe-set selection with target constraints requested?

Consider `Spapros` when probe-set selection, target cell types, marker constraints, or panel-size constraints are explicit.

## Step 4. Is predictive robustness the selection objective?

Consider `PERSIST` when the task prioritizes a compact predictive panel. Treat prediction as the internal selection objective, not the output object.

## Step 5. Is preprint-level optimal panel design acceptable?

Consider `ReconST` only when preprint-level evidence and unclear code trace are acceptable and explicitly recorded.

Treat `ReconST` reconstruction or spatial-pattern language as a panel-evaluation objective, not spatial location reconstruction, expression-map reconstruction, super-resolution, or gene-expression prediction output.

## Boundary Exclusions

Do not route `SUICA`, `DeepLinc`, or `stMCDI` into Panel Design. Their primary outputs fit super-resolution/expression enhancement, cell-cell communication, and denoising/imputation respectively.
