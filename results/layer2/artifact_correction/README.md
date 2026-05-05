# Artifact Correction Layer 2 Working Package

This package reconciles the Artifact Correction topic against the active Layer 1 working registry. The current freeze contains four methods: SpotClean, Non-parametric Vignetting Correction, cellAdmix, and SPLIT.

Layer 2 use is limited to artifact-mechanism and data-object-local method selection for later representative Layer 3/4 audit planning. Code/access links are trace metadata only and do not imply BioHarness execution support, callable interfaces, adapters, or environment profiles.

## Files

- `topic_scope.md`: topic boundary, inclusion/exclusion logic, and caveats.
- `field_registry.json`: field-level interpretation notes.
- `method_table.csv`, `method_table.md`, `method_table.json`: synchronized four-row method table.
- `review_decision_tree.md`: artifact-mechanism and data-object-local routing logic.
- `closure.md`: confirmation status and formal-rendering caveats.

## Current Freeze

1. SpotClean - spot swapping / local contamination correction.
2. Non-parametric Vignetting Correction - vignetting / position-dependent intensity-field correction.
3. cellAdmix - molecular admixture correction.
4. SPLIT - Xenium-specific signal-contamination / transcript-spillover correction.
