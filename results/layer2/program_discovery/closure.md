# Program Discovery Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package; ready for formal rendering or representative Layer 3/4 engineering audit.

This closure does not freeze a default method, Layer 3 execution surface, backend adapter boundary, callable signature, environment capsule, rewrite decision, or runtime-support status.

## Authority Artifacts

- Topic scope: `/tmp/bioharness_layer2_subagents/output/program_discovery/topic_scope.md`
- Field registry: `/tmp/bioharness_layer2_subagents/output/program_discovery/field_registry.json`
- CSV method table: `/tmp/bioharness_layer2_subagents/output/program_discovery/method_table.csv`
- Human-readable method table: `/tmp/bioharness_layer2_subagents/output/program_discovery/method_table.md`
- Structured method table: `/tmp/bioharness_layer2_subagents/output/program_discovery/method_table.json`
- Review and decision tree: `/tmp/bioharness_layer2_subagents/output/program_discovery/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Program Discovery`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, local sources, brief screening query, inclusion/exclusion rules, and candidate freeze. |
| Frozen candidate set | Pass | Thirteen rows: `CellPie, DIALOGUE, scITD, SPICEMIX, STAMP, SpaTM, FISHFactor, SpatialCorr, SpaceX, SpaGRN, SPACE, spMOCA, LSGI`. |
| Field schema | Pass | Shared fields plus six topic-specific decision fields in `field_registry.json`. |
| Method table artifacts | Pass | JSON was built first; CSV was generated with Python `csv.DictWriter`; Markdown was generated from JSON. |
| Review / logic pass | Pass with caveats | No suitable all-candidate benchmark was found during brief screening; decision tree uses explicit logic review. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no global ranking. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, callable, and default-method claims. |

## Current Layer 2 Facts

- Candidate rows: 13.
- Fields per method row: 22.
- Code access from frozen input: 4 available, 9 pending/manual review.
- Compute labels from frozen input: 11 CPU, 2 Optional GPU, 0 Required GPU.
- Main branch families represented: multicellular latent/factor/tensor programs, spatial topic/factor/gradient programs, gene-set/co-expression/network programs, regulatory programs, and interaction-aware tissue modules.
- Direct evidence basis: frozen Layer 1 rows with PMID/DOI/title/year/venue and local correction notes.
- Layer 2 synthesis basis: closest alternatives, branch fit, scale and memory cautions, and interpretability caveats.

## Caveats Carried Into Later Work

- No all-candidate independent benchmark was found during bounded screening; branch logic is conservative synthesis, not benchmark ranking.
- Several rows have `pending/manual review` code access because the frozen input did not provide confirmed public code links.
- `STAMP` is intentionally represented for spatial topic/gene-module output; this does not convert its cross-topic domain/clustering use into a Program Discovery default.
- `SPACE` is name-ambiguous; later audit must confirm the Cell Systems 2024 tissue-module method identity.
- Factor, topic, network, regulon, and gradient outputs require dataset-specific validation and should not be interpreted as direct biological mechanisms without follow-up evidence.
- Resource and scale labels are Layer 2 screening cues, not BioHarness runtime validation.

## Representative Layer 3/4 Audit Batch

Representative audit batch, chosen to cover distinct branches rather than to define defaults:

| Method | Why include in audit batch |
| --- | --- |
| `DIALOGUE` | Multicellular coordinated-program branch with frozen public code link. |
| `scITD` | Cohort/tensor multicellular-program branch with frozen public code link. |
| `STAMP` | Spatial topic/gene-module branch with frozen public code link and optional GPU label. |
| `SpatialCorr` | Gene-set spatial correlation branch, useful for checking non-factor output handling. |
| `SpaceX` | Spatial co-expression network branch. |
| `SpaGRN` | Regulatory path/regulon branch. |
| `SPACE` | Interaction-aware tissue-module branch and name-disambiguation audit case. |
| `LSGI` | Interpretable spatial-gradient branch. |

This audit batch is not runtime support, not a default-method list, and not a statement that adapters, wrappers, environments, or callable contracts exist.

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Program Discovery` Layer 2 is complete as a working/evidence package for method-selection support. It is ready for later formal rendering or representative Layer 3/4 audit, but it does not imply default methods, runtime surfaces, package entrypoints, environment capsules, wrappers, rewrites, or adapter implementations.
