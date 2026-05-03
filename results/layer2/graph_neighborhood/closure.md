# Graph / Neighborhood Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package; ready for formal rendering or representative Layer 3/4 engineering audit.

This closure does not freeze a default method, Layer 3 execution surface, backend adapter boundary, callable signature, environment capsule, rewrite decision, or runtime-support status.

## Authority Artifacts

- Topic scope: `/tmp/bioharness_layer2_subagents/output/graph_neighborhood/topic_scope.md`
- Field registry: `/tmp/bioharness_layer2_subagents/output/graph_neighborhood/field_registry.json`
- Structured method table: `/tmp/bioharness_layer2_subagents/output/graph_neighborhood/method_table.json`
- CSV method table: `/tmp/bioharness_layer2_subagents/output/graph_neighborhood/method_table.csv`
- Human-readable method table: `/tmp/bioharness_layer2_subagents/output/graph_neighborhood/method_table.md`
- Review and decision tree: `/tmp/bioharness_layer2_subagents/output/graph_neighborhood/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Graph / Neighborhood`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, sources, query strategy, inclusion/exclusion rules, and candidate freeze. |
| Frozen candidate set | Pass | Fourteen rows exactly match the input freeze. |
| Field schema | Pass | Shared fields plus six topic-specific decision fields are defined in `field_registry.json`. |
| Method table artifacts | Pass | JSON was built first; CSV and Markdown were rendered from the JSON. |
| Review / benchmark pass | Pass with caveats | PubMed/DOI/code-link checks and benchmark screening were recorded; no all-candidate independent benchmark was found. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no global ranking. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, callable-signature, and default-method claims. |

## Current Layer 2 Facts

- Candidate rows: 14.
- Fields per method row: 22.
- Code access: 12 available, 2 unclear, 0 unavailable.
- Compute labels: 6 CPU, 7 Optional GPU, 1 Required GPU, 0 unclear.
- Output granularity branches: discrete niches/TCNs, continuous factors/embeddings, soft signatures, microenvironment domains, ecological metrics/hotspots, motif signatures, reconstructed neighborhoods, and gene representations.
- Strongest independent benchmark relevance: spatial clustering/domain benchmarks, especially the Nature Methods 2024 benchmark, but not a complete Graph / Neighborhood benchmark.
- Weakest evidence areas: code-link certainty for `SPARROW` and `SMORE`; scale/resource labels for several new 2025-2026 methods; independent cross-method neighborhood benchmarks.

## Caveats Carried Into Later Work

- Graph / Neighborhood is heterogeneous. Niche clustering, microenvironment analysis, motif discovery, factorization, reference-assisted reconstruction, and foundation-model transfer are not interchangeable output types.
- Most benchmark evidence is method-paper-local or task-adjacent; it supports branch-local guidance but not a global ranking.
- Reference-assisted methods can propagate reference mismatch or batch bias.
- Prior-assisted and foundation-model methods can hide database or corpus bias behind strong embeddings.
- Cell-phenotype-label methods can be practical for imaging maps but may compress continuous biological states.
- Factor and embedding outputs need biological validation before mechanism claims.
- Code access is not runtime support and does not imply a BioHarness adapter, environment capsule, or execution-ready path.

## Representative Layer 3/4 Audit Batch

This batch is representative only. It is not a runtime-support claim and not a default-method list.

| Method | Why include in representative audit batch |
| --- | --- |
| `CellCharter` | Broad niche clustering and cross-sample comparison route with verified code. |
| `NNMF` | Large-scale soft neighborhood signature route. |
| `MESA` | Ecological metric and hotspot route. |
| `NicheCompass` | Communication-aware graph deep-learning niche route. |
| `CytoCommunity` | Cell-phenotype TCN route with supervised cohort-label option. |
| `scHolography` | Reference-assisted spatial neighborhood reconstruction route. |
| `SMORE` | Motif-discovery boundary route, mainly for code-link and graph-null audit. |

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Graph / Neighborhood` Layer 2 is complete as a working/evidence package for method-selection support. It is ready for later formal rendering or representative Layer 3/4 audit, but it does not imply default methods, runtime surfaces, package entrypoints, environment capsules, wrappers, rewrites, or adapter implementations.
