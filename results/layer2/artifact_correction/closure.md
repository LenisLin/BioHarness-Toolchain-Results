# Artifact Correction Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package with caveats; ready for later
formal rendering or representative Layer 3/4 engineering audit.

This closure does not freeze a default method, Layer 3 execution surface,
backend adapter boundary, callable signature, environment capsule, rewrite
decision, or runtime-support status.

## Authority Artifacts

- Topic scope: `/tmp/bioharness_layer2_subagents/output/artifact_correction/topic_scope.md`
- Field registry: `/tmp/bioharness_layer2_subagents/output/artifact_correction/field_registry.json`
- Structured method table: `/tmp/bioharness_layer2_subagents/output/artifact_correction/method_table.json`
- CSV method table: `/tmp/bioharness_layer2_subagents/output/artifact_correction/method_table.csv`
- Human-readable method table: `/tmp/bioharness_layer2_subagents/output/artifact_correction/method_table.md`
- Review and decision tree: `/tmp/bioharness_layer2_subagents/output/artifact_correction/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Artifact Correction`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, local sources, PubMed queries, code-link checks, inclusion/exclusion rules, and candidate freeze. |
| Frozen candidate set | Pass | Three rows: `SpotClean`, `Non-parametric Vignetting Correction`, `cellAdmix`. |
| Field schema | Pass | Shared fields plus six topic-specific decision/caution fields in `field_registry.json`. |
| Method table artifacts | Pass | CSV and Markdown are generated from `method_table.json`; parse/name checks were completed during handoff verification. |
| Review / logic pass | Pass with caveats | No dedicated independent benchmark comparing the three frozen methods was found; decision tree uses bounded logic review. |
| Decision tree | Pass with caveats | Conditional branch-local selection only; no global ranking. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, callable-signature, and default-method claims. |

## Current Layer 2 Facts

- Candidate rows: 3.
- Fields per method row: 22.
- Code access: 3 available.
- Compute labels: 3 CPU, 0 Optional GPU, 0 Required GPU.
- Artifact targets: 1 spot swapping / contamination, 1 optical vignetting / illumination field, 1 segmentation-error molecular admixture.
- Correction stages: 1 count-matrix correction, 1 image / spot-calling preprocessing, 1 post-segmentation molecular-assignment correction.
- Memory burden: 3 unclear.
- Scale sensitivity: 3 unclear.

## Caveats Carried Into Later Work

- The three candidates correct different artifact mechanisms; the package does
  not support a single all-purpose artifact-correction default.
- No independent PubMed-indexed benchmark was found that compares and ranks all
  three frozen methods.
- Method-paper evidence is direct for method identity and stated artifact target
  but not equivalent to BioHarness runtime validation.
- Resource and scale labels remain conservative because public evidence was not
  sufficient to assign stronger labels.
- `Non-parametric Vignetting Correction` is image-stage specific and should not
  be silently treated as count-matrix correction.
- `cellAdmix` addresses molecular admixture from segmentation errors; it should
  not be described as solving primary segmentation.

## Representative Layer 3/4 Audit Batch

The topic is small, so all three frozen candidates are appropriate for a first
representative audit batch. This audit batch is not runtime support and is not a
default-method list.

| Method | Why include in audit batch |
| --- | --- |
| `SpotClean` | Represents spot-barcoded contamination / spot-swapping count correction. |
| `Non-parametric Vignetting Correction` | Represents sparse image illumination-field correction before or during spot calling. |
| `cellAdmix` | Represents post-segmentation molecular-admixture correction for imaging-based ST. |

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Artifact Correction` Layer 2 is complete as a working/evidence package for
method-selection support, with the explicit caveat that no dedicated independent
benchmark was found for the frozen three-method set. It is ready for later
formal rendering or representative Layer 3/4 audit, but it does not imply
default methods, runtime surfaces, package entrypoints, environment capsules,
wrappers, rewrites, or adapter implementations.
