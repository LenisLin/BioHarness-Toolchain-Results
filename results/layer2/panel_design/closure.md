# Panel Design Closure

## Conclusion

Confirm with caveats after taxonomy revision.

`Panel Design` is split from the former `Normalization / Feature Selection` topic. The active candidate freeze contains five rows: `scGIST`, `gpsFISH`, `Spapros`, `PERSIST`, and caveated preprint/watchlist row `ReconST`.

## Layer Boundary

This package provides branch-local method-selection knowledge for pre-assay targeted spatial transcriptomics panel design. It does not define execution surfaces, adapters, callable interfaces, environment profiles, or universal methods.

## Caveats

Reference data, labels, tissue context, prioritized gene sets, assay-transfer assumptions, and panel-size constraints can drive panel quality. Selected panel genes are not automatically SVGs or causal biological markers.

For `ReconST`, reconstruction or spatial-pattern language is treated as a panel-evaluation objective, not spatial location reconstruction, expression-map reconstruction, super-resolution, or gene-expression prediction output.

## Exclusions

`SUICA`, `DeepLinc`, and `stMCDI` are not Panel Design positive rows because their primary outputs are not targeted spatial gene/probe panels.
