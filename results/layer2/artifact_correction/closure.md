# Artifact Correction Closure

## Conclusion

Confirm with caveats.

The Artifact Correction Layer 2 package is reconciled to the active Layer 1 four-row freeze: SpotClean, Non-parametric Vignetting Correction, cellAdmix, and SPLIT. The topic can serve as input for later representative Layer 3/4 audit planning, provided the mechanism-specific caveats are retained.

## Documentation Compliance

The package contains synchronized `topic_scope.md`, `field_registry.json`, `method_table.csv`, `method_table.md`, `method_table.json`, `review_decision_tree.md`, and `closure.md` artifacts. The method tables share the same four-method order.

## Decision Tree Status

The decision tree is branch-local and routes by artifact mechanism, data object, and platform scope. It does not provide a universal ranking or a universal method recommendation.

## Scientific Caveats

Artifact Correction rows correct different artifact mechanisms. QC/artifact signals can overlap with true tissue biology and require contextual review. cellAdmix corrects molecular admixture effects; it does not prove segmentation is solved. SPLIT is Xenium-specific signal-contamination correction, not generic denoising and not generic QC.

## Retrieval Decision

Targeted metadata and code/access checks only. No full retrieval redo is required for the current reconciliation.

## Layer Boundary

Code/access links are trace metadata only and do not imply BioHarness execution support, callable interfaces, adapters, or environment profiles.
