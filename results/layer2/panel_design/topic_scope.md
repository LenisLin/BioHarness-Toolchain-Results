# Panel Design Topic Scope

## Boundary

`Panel Design` covers methods whose primary reusable contribution is selecting a targeted gene or probe panel before spatial transcriptomics measurement.

The expected output is a selected panel or probe set. This topic does not include normalization, SVG detection, expression prediction, denoising, imputation, or cell-cell communication unless the primary deliverable is explicitly a targeted spatial assay panel.

## Candidate Freeze

Positive rows: `scGIST`, `gpsFISH`, `Spapros`, `PERSIST`, and caveated preprint/watchlist row `ReconST`.

Related but not positive: `SUICA`, `DeepLinc`, and `stMCDI` are excluded from Panel Design because their primary outputs are expression enhancement/super-resolution, interaction landscape inference, and imputation respectively.

## Caveats

Panel Design choices depend on reference data, labels, tissue context, prioritized gene sets, transfer to the target assay, and panel-size constraints. Selected panels are assay-design outputs, not evidence that selected genes are spatially variable or biologically causal.

For `ReconST`, reconstruction or spatial-pattern language is treated as a panel-evaluation objective, not spatial location reconstruction, expression-map reconstruction, super-resolution, or gene-expression prediction output.

## Retrieval Decision

Targeted PubMed/code checks only. No full retrieval redo is required.
