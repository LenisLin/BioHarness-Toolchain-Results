# Data Quality Control Layer 2 Working Package

This package reconciles the Data Quality Control topic against the active Layer 1 working registry. The current freeze contains four methods: SpotSweeper, SpatialQC, ovrlpy, and stPipe.

Layer 2 use is limited to branch-local method selection for later representative Layer 3/4 audit planning. Code/access links are trace metadata only and do not imply BioHarness execution support, callable interfaces, adapters, or environment profiles.

## Files

- `topic_scope.md`: topic boundary, inclusion/exclusion logic, and caveats.
- `field_registry.json`: field-level interpretation notes.
- `method_table.csv`, `method_table.md`, `method_table.json`: synchronized four-row method table.
- `review_decision_tree.md`: stage- and platform-local routing logic.
- `closure.md`: confirmation status and formal-rendering caveats.

## Current Freeze

1. SpotSweeper - post-count spatial/local/regional QC.
2. SpatialQC - automated spatial transcriptome QC reporting/filtering/data cleaning.
3. ovrlpy - post-transcript-localization 3D vertical overlap QC.
4. stPipe - upstream preprocessing/QC pipeline.
