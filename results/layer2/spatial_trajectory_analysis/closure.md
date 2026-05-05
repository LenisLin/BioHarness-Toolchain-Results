# Spatial Trajectory Analysis Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package with caveats; ready for formal rendering or representative Layer 3/4 engineering audit.

This closure does not freeze a default method, Layer 3 execution surface, backend adapter boundary, callable signature, environment capsule, rewrite decision, or runtime-support status.

## Authority Artifacts

- Topic scope: `/tmp/bioharness_layer2_subagents/output/spatial_trajectory_analysis/topic_scope.md`
- Field registry: `/tmp/bioharness_layer2_subagents/output/spatial_trajectory_analysis/field_registry.json`
- Structured method table: `/tmp/bioharness_layer2_subagents/output/spatial_trajectory_analysis/method_table.json`
- CSV method table: `/tmp/bioharness_layer2_subagents/output/spatial_trajectory_analysis/method_table.csv`
- Human-readable method table: `/tmp/bioharness_layer2_subagents/output/spatial_trajectory_analysis/method_table.md`
- Review and decision tree: `/tmp/bioharness_layer2_subagents/output/spatial_trajectory_analysis/review_decision_tree.md`
- Package README: `/tmp/bioharness_layer2_subagents/output/spatial_trajectory_analysis/README.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Spatial Trajectory Analysis`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, sources, queries, inclusion/exclusion rules, and candidate freeze. |
| Frozen candidate set | Pass | Nine rows: `SpaTrack`, `spVelo`, `STT`, `SIRV`, `PearlST`, `TopoVelo`, `CASCAT`, `STORIES`, `stVCR`. |
| Field schema | Pass | Shared fields plus six topic-specific decision fields in `field_registry.json`. |
| Method table artifacts | Pass | JSON, CSV, and Markdown tables represent the same nine candidates and field model. |
| Review / logic pass | Pass with caveats | No dedicated independent benchmark was found for the updated nine-method set; decision tree uses explicit logic review plus method-paper evidence. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no global ranking. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, callable-signature, and default-method claims. |

## Current Layer 2 Facts

- Candidate rows: 9.
- Fields per method row: 22.
- Code access: 8 available, 1 unclear.
- Compute labels: 4 CPU, 5 Optional GPU, 0 Required GPU.
- Trajectory branches: 2 differentiation trajectory, 4 spatial RNA velocity, 2 spatiotemporal embedding / pseudotime, 1 causal trajectory.
- Reference dependence: 8 reference-free, 1 scRNA-reference-assisted, 0 unclear.
- Splicing / velocity dependence: 3 uses splicing / velocity signal, 1 reference-imputed splicing / velocity, 5 not primary.
- Memory burden: 9 unclear.
- Scale sensitivity: 9 unclear.

## Caveats Carried Into Later Work

- No independent benchmark was found that compares and ranks all nine targeted candidates.
- Method-paper-local benchmarks and comparisons should not be treated as general cross-method superiority evidence.
- RNA-velocity branches can be sensitive to preprocessing, gene selection, splicing signal quality, batch structure, and velocity model assumptions.
- `SIRV` requires special caution around reference mismatch and reference-induced bias.
- `PearlST` is multi-task; trajectory and pseudotime interpretation may be entangled with spatial representation or domain objectives.
- `CASCAT` uses causal language, but Layer 2 treats this as model-based causal structure, not experimental causality.
- `SpaTrack` code access is available from the frozen registry input, but the PubMed/PMC pass did not independently confirm a code-availability section.
- `TopoVelo` has PubMed method-paper evidence but no confirmed PubMed/PMC code link in this bounded pass.
- Resource and scale fields remain conservative because public method-paper hardware or dataset examples are not equivalent to BioHarness runtime validation.

## Representative Layer 3/4 Audit Batch

The representative audit batch is a later engineering review input. It is not runtime support, a default-method list, an execution surface, or an adapter decision.

Because the candidate set is small and each method represents a distinct selection branch, all nine candidates should be considered for representative audit triage:

| Method | Why include in audit batch |
| --- | --- |
| `SpaTrack` | CPU optimal-transport trajectory route with registry code link and multi-sample/temporal cue. |
| `STORIES` | Optimal-transport fate-landscape branch with targeted code trace and fate-interpretation caveat. |
| `stVCR` | Spatiotemporal single-cell dynamics branch with targeted code trace and temporal-sampling caveat. |
| `spVelo` | Multi-batch spatial RNA-velocity route with PMC-confirmed GitHub link and reported GPU training context. |
| `STT` | Tensor-dynamics and attractor-path route with PMC-confirmed Python package link. |
| `SIRV` | Reference-assisted spatial RNA-velocity route with PMC-confirmed GitHub and Zenodo code sources. |
| `PearlST` | Latent spatiotemporal embedding/pseudotime route with histology/spatial feature use and PMC-confirmed code locations. |
| `TopoVelo` | Topological velocity route; include specifically to resolve implementation traceability and resource questions. |
| `CASCAT` | Causal trajectory tree route with PMC-confirmed Figshare source-code availability. |

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Spatial Trajectory Analysis` Layer 2 is complete as a working/evidence package for method-selection support. The package is ready for later formal rendering or representative Layer 3/4 audit triage. It does not imply default methods, runtime surfaces, package entrypoints, environment capsules, wrappers, rewrites, or adapter implementations.

