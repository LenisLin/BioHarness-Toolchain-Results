# Cell-Cell Communication Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package; ready for formal rendering or representative Layer 3/4 engineering audit.

This closure does not freeze a default method, Layer 3 execution surface, backend adapter boundary, callable signature, environment capsule, rewrite decision, or runtime-support status.

## Authority Artifacts

- Topic scope: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/cell_cell_communication/topic_scope.md`
- Field registry: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/cell_cell_communication/field_registry.json`
- Structured method table: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/cell_cell_communication/method_table.json`
- CSV method table: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/cell_cell_communication/method_table.csv`
- Human-readable method table: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/cell_cell_communication/method_table.md`
- Review and decision tree: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/cell_cell_communication/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Cell-Cell Communication`, not individual algorithms or registry subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, sources, queries, candidate verification, benchmark/review screening, and candidate freeze. |
| Frozen candidate set | Pass | 16 included rows match the frozen input; no methods were added. |
| Special Giotto policy | Pass | `Giotto` is recorded as excluded and is not counted in method table or closure counts. |
| Field schema | Pass | Shared fields plus six topic-specific decision fields are defined in `field_registry.json`. |
| Method table artifacts | Pass | JSON, CSV, and Markdown tables represent the same 16 candidates and field model. |
| Review / logic pass | Pass with caveats | Branch-local benchmark/review evidence exists, but no independent all-candidate benchmark was found. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no global ranking or default method. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, callable-signature, and execution-ready claims. |

## Current Layer 2 Facts

- Candidate rows counted: 16.
- Excluded registry rows counted as candidates: 0.
- Special excluded broad ecosystem package: `Giotto`.
- Fields per method row: 22.
- Code access labels: 13 available, 0 archived, 3 unclear, 0 unavailable.
- Compute labels: 14 CPU, 2 Optional GPU, 0 Required GPU.
- Memory burden labels: 16 unclear.
- Scale sensitivity labels: 7 medium/high, 9 unclear.
- Branches represented: broad LR baseline, spatial LR/transport/co-expression, graph/relay CCC, single-cell comparative CCC, neighborhood/interaction-effect modeling, spatially variable LR inference, and causal pathway-aware interpretation.

## Caveats Carried Into Later Work

- No independent benchmark was found that jointly ranks all 16 frozen candidates across heterogeneous CCC branches.
- Method-paper benchmarks and the COZI neighbor-preference benchmark support branch-local interpretation only.
- Many resource, memory, and scale fields remain `unclear` because public method evidence is not equivalent to BioHarness runtime validation.
- `CellChat` and `NicheNet` are strong CCC baselines but are not spatial-first by original design.
- `stLearn` is retained only for its CCC role inside a broader spatial trajectory/tissue-context workflow.
- `DeepTalk` is used as the method identity across Layer 1 registry rows and Layer 2 topic artifacts after human confirmation of the verified DeepTalk publication/code identity.
- `Spacia`, `Scriabin`, and local-code claims for `CausalCCC` need later code-access audit before any engineering decision.
- BioHarness records method-native CCC, causal, pathway, contact, and mechanistic claims as cited evidence only; it does not independently validate physical contact, mechanism, pathway causality, or experimental causal truth claims.

## Representative Layer 3/4 Audit Batch

This audit batch is representative only. It is not a default-method list, implementation commitment, or runtime-support statement.

| Method | Why include in representative audit batch |
| --- | --- |
| `CellChat` | Widely used broad LR network baseline. |
| `COMMOT` | Spatial transport-based CCC route. |
| `SpatialDM` | Spatial LR co-expression/statistical route. |
| `CellNEST` | Relay / graph attention CCC route with confirmed code. |
| `COZI` | Neighbor-preference benchmark branch and conditional z-score method. |
| `MISTy` | Multiview interaction-effect branch. |
| `SPIDER` | Spatially variable LR interaction with downstream functional support. |
| `CausalCCC` | Pathway-aware interpretation layer with web-server boundary caveat. |

Later audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Cell-Cell Communication` Layer 2 is complete as a working/evidence package for method-selection support. It is ready for later formal rendering or representative Layer 3/4 audit, but it does not imply default methods, runtime surfaces, package entrypoints, environment capsules, wrappers, rewrites, or adapter implementations.
