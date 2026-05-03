# Spatial Perturbation Analysis Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package for the frozen five-method candidate set.

This closure does not freeze a default method, Layer 3 execution surface, backend adapter boundary, callable signature, environment capsule, rewrite decision, or runtime-support status.

## Authority Artifacts

- Topic scope: `topic_scope.md`
- Field registry: `field_registry.json`
- Structured method table: `method_table.json`
- CSV method table: `method_table.csv`
- Human-readable method table: `method_table.md`
- Review and decision tree: `review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Spatial Perturbation Analysis`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records original retrieval plus 2026-05-02 targeted boundary check and candidate freeze. |
| Frozen candidate set | Pass | Five rows: `CONCERT`, `Celcomen`, `Spatial-ZEDNet`, `River`, `Perturb-STNet`. |
| Boundary exclusion | Pass | `CDS` / counterfactual directional cell-cell influence is assigned to Cell-Cell Communication boundary review, not this topic. |
| Field schema | Pass | Shared fields plus topic-specific decision/caveat fields in `field_registry.json`. |
| Method table artifacts | Pass | JSON is the source table; CSV and Markdown are generated from the same JSON. |
| Review / logic pass | Pass with caveats | No suitable independent benchmark or review was found for all five candidates; decision tree uses explicit logic review plus method-paper evidence. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no global ranking. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, and default-method claims. |

## Current Layer 2 Facts

- Candidate rows: 5.
- Fields per method row: 21.
- Code access: 5 available by bounded evidence; code access is not runtime support.
- Compute labels: 2 Optional GPU, 1 Required GPU, 2 CPU.
- Evidence source: 5 method-paper rows.
- Publication status: `CONCERT` is indexed as a bioRxiv preprint; `Celcomen`, `River`, `Perturb-STNet`, and `Spatial-ZEDNet` are peer-reviewed articles by bounded evidence.
- Metadata gap: none blocking in this pass.
- Memory burden: 5 unclear.
- Scale sensitivity: 3 medium, 2 unclear.
- Perturbation question types: response prediction, causal counterfactual, observed perturbation-effect detection, perturbation-responsive pattern prioritization, and spatiotemporal perturbation regulator prioritization.

## Caveats Carried Into Later Work

- No independent benchmark was found that jointly ranks all five candidates across heterogeneous branches.
- `CONCERT` is frontier-facing and preprint-only in the bounded PubMed evidence, but human review approved conditional inclusion.
- `Celcomen` is recent; evidence is peer-reviewed but still method-paper-local for this Layer 2 pass.
- `Spatial-ZEDNet`, `River`, and `Perturb-STNet` expand the topic to observed perturbation-effect, spatial pattern, and spatiotemporal regulator detection; they are not counterfactual response generators.
- Causal and counterfactual language needs explicit assumptions, validation design review, and biological plausibility checks.
- Code-link reachability or publisher code availability does not imply BioHarness runtime support, adapter availability, or environment readiness.
- Resource and scale fields remain conservative because public method evidence does not establish BioHarness execution behavior.

## Representative Layer 3/4 Audit Batch

All five frozen candidates are appropriate for a later representative Layer 3/4 audit because they represent distinct selection branches. This audit batch is not runtime support.

| Method | Why include in audit batch |
| --- | --- |
| `CONCERT` | Niche-aware predictive perturbation-response branch with GPU-dependent frontier code. |
| `Celcomen` | Causal counterfactual tissue perturbation branch with recent peer-reviewed code. |
| `Spatial-ZEDNet` | Observed spatial DEG/DAG perturbation-effect branch. |
| `River` | Perturbation-responsive DSEP prioritization branch. |
| `Perturb-STNet` | Spatiotemporal regulator and network-effect perturbation branch. |

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Spatial Perturbation Analysis` Layer 2 is complete as a working/evidence package for method-selection support after human-approved candidate expansion. It is ready for later formal rendering or representative Layer 3/4 audit triage, while all runtime, adapter, callable, environment, rewrite, and default-method decisions remain outside this package.
