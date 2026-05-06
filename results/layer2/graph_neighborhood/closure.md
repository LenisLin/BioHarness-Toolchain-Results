# Graph / Neighborhood Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: confirm with caveats after the 2026-05-06 Layer1/Layer2 reconciliation. The targeted 20-row freeze update and boundary-hardening pass are accepted as ready for formal rendering.

This closure does not freeze a default method, Layer 3 execution surface, backend adapter boundary, callable signature, environment capsule, rewrite decision, or runtime-support status.

## Authority Artifacts

- Topic scope: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/graph_neighborhood/topic_scope.md`
- Field registry: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/graph_neighborhood/field_registry.json`
- Structured method table: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/graph_neighborhood/method_table.json`
- CSV method table: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/graph_neighborhood/method_table.csv`
- Human-readable method table: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/graph_neighborhood/method_table.md`
- Review and decision tree: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/graph_neighborhood/review_decision_tree.md`
- Layer1/Layer2 reconciliation note: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-06_layer1_layer2_reconciliation_note.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Graph / Neighborhood`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records original date, targeted reopen date, sources, query strategy, inclusion/exclusion rules, boundary router, and candidate freeze. |
| Frozen candidate set | Pass with caveats | Twenty rows reflect the original 14 plus targeted additions `TrimNN`, `scNiche`, `CellNiche`, `DECIPHER`, `SpaNiche`, and `SpatialQuery`; the 2026-05-06 reconciliation backfills `SpaNiche` and `SpatialQuery` to Layer1. |
| Boundary contract | Pass | Step 0 routes hard domain endpoints to Domain / Clustering and CCC endpoints to Cell-Cell Communication. |
| Field schema | Pass | Shared fields plus topic-specific decision fields are defined in `field_registry.json`; atlas-scale, motif, niche, preprint, and disentangled-context values were represented. |
| Method table artifacts | Pass | JSON was built first; CSV and Markdown were rendered from the JSON. |
| Review / benchmark pass | Pass with caveats | PubMed/DOI/code-link checks and benchmark screening were recorded; no all-candidate independent Graph benchmark was found. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no global ranking, default-method language, or runtime language. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, callable-signature, and default-method claims. |

## Current Layer 2 Facts

- Candidate rows: 20.
- Fields per method row: 22.
- Code access: 20 available, 0 unclear, 0 unavailable.
- Compute labels: 7 CPU, 11 Optional GPU, 1 Required GPU, 1 unclear.
- Output granularity branches: discrete niches/TCNs, continuous factors/embeddings, soft signatures, microenvironment domains, ecological metrics/hotspots, motif signatures, cellular community motifs, spatial niche/colocalization patterns, atlas-scale microenvironment embeddings, disentangled spatial-context embeddings, reconstructed neighborhoods, and gene representations.
- Strongest independent benchmark relevance: spatial clustering/domain benchmarks, especially the Nature Methods 2024 benchmark, but only task-adjacent for Graph / Neighborhood and especially for `SOTIP`.
- Weakest evidence areas: independent cross-method neighborhood benchmarks; very recent 2025-2026 method-paper-local evidence; SpatialQuery preprint-only evidence; scale/resource labels for atlas-scale and disentangled-embedding methods.

## Backbone / Workflow Context Closure

`Squidpy` is recorded as non-counted backbone/workflow context for standard spatial graph construction, neighborhood enrichment, spatial graph utilities, and AnnData/scverse spatial workflow handling. This does not alter the 20-row candidate freeze and does not make `Squidpy` a Graph / Neighborhood method-table row, ranked method, runtime support, adapter availability, execution readiness, or default-method evidence.

## Backbone / Workflow Context Closure

`Squidpy` is recorded as non-counted backbone/workflow context for standard spatial graph construction, neighborhood enrichment, spatial graph utilities, and AnnData/scverse spatial workflow handling. This does not alter the 20-row candidate freeze and does not make `Squidpy` a Graph / Neighborhood method-table row, default method, runtime-support claim, adapter claim, or execution-ready path.

## Caveats Carried Into Later Work

- Graph / Neighborhood is heterogeneous. Niche clustering, microenvironment analysis, motif discovery, factorization, reference-assisted reconstruction, atlas-scale embeddings, disentangled context learning, and foundation-model transfer are not interchangeable output types.
- Domain / Clustering boundary: hard tissue/domain/region labels, segmentation-like tissue regions, spatial domain identification, and spatial clustering route out.
- CCC boundary: ligand-receptor edges, sender-receiver pairs, communication scores, neighbor-preference effects, pathway CCC, and causal CCC interpretation route out.
- Most benchmark evidence is method-paper-local or task-adjacent; it supports branch-local guidance but not a global ranking.
- Reference-assisted methods can propagate reference mismatch or batch bias.
- Prior-assisted and foundation-model methods can hide database or corpus bias behind strong embeddings.
- Cell-phenotype-label and motif/topology methods can be practical for imaging maps but may compress continuous biological states.
- Factor and embedding outputs need biological validation before mechanism claims.
- Code access is not runtime support and does not imply a BioHarness adapter, environment capsule, callable signature, or execution-ready path.

## Representative Layer 3/4 Audit Batch

This batch is representative only. It is not a runtime-support claim and not a default-method list.

| Method | Why include in representative audit batch |
| --- | --- |
| `CellCharter` | Broad niche clustering and cross-sample comparison route with verified code. |
| `NNMF` | Large-scale soft neighborhood signature route. |
| `MESA` | Ecological metric and hotspot route. |
| `NicheCompass` | Communication-aware graph niche/program embedding route, with CCC route-out caveat. |
| `CytoCommunity` | Cell-phenotype TCN route with supervised cohort-label option. |
| `SMORE` | Ordered spatial motif-discovery boundary route with graph-null audit needs. |
| `SpatialQuery` | Preprint-only multicellular motif discovery branch with graph-null and molecular-characterization audit needs. |
| `TrimNN` | Cellular community motif and topology branch added by targeted freeze update. |
| `scNiche` | Single-cell-resolution niche representation branch added by targeted freeze update. |
| `SpaNiche` | Spatial niche and colocalization branch added by targeted inclusion correction, with non-causal interaction caveat. |
| `CellNiche` | Atlas-scale cellular microenvironment embedding branch added by targeted freeze update. |
| `DECIPHER` | Disentangled spatial-context embedding branch added by targeted freeze update. |
| `scHolography` | Reference-assisted spatial neighborhood reconstruction route. |

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Graph / Neighborhood` Layer 2 is confirmed with caveats after the 2026-05-06 Layer1/Layer2 reconciliation. It is complete as a working/evidence package for method-selection support and ready for later formal rendering, while preserving branch-local caveats. It does not imply default methods, runtime surfaces, package entrypoints, environment capsules, wrappers, rewrites, or adapter implementations.

## 2026-05-05 Controlled Duplicate Note

`CytoCommunity` remains a positive `Graph / Neighborhood` method for tissue cellular neighborhood discovery. A controlled duplicate working row now also appears under `Phenotype- / Cohort-linked Spatial Feature and Niche Analysis` only when the requested deliverable is cohort- or phenotype-associated TCN/community features. This does not change the generic Graph / Neighborhood branch and does not imply runtime support.
