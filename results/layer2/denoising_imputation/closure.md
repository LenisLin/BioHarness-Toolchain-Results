# Denoising / Imputation Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package; ready for formal rendering
or representative Layer 3/4 engineering audit.

This closure does not freeze a default method, Layer 3 execution surface,
backend adapter boundary, callable signature, environment capsule, rewrite
decision, or runtime-support status.

## Authority Artifacts

- Topic scope:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/denoising_imputation/topic_scope.md`
- Field registry:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/denoising_imputation/field_registry.json`
- CSV method table:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/denoising_imputation/method_table.csv`
- Human-readable method table:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/denoising_imputation/method_table.md`
- Structured method table:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/denoising_imputation/method_table.json`
- Review and decision tree:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/denoising_imputation/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Denoising / Imputation`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, sources, queries, inclusion/exclusion rules, and candidate freeze. |
| Frozen candidate set | Pass | Seven rows: `MIST`, `SpotGF`, `Sprod`, `DiffusionST`, `stDiff`, `stGRL`, `spRefine`. |
| Field schema | Pass | Shared fields plus six topic-specific decision fields in `field_registry.json`. |
| Method table artifacts | Pass | CSV, Markdown, and JSON tables represent the same seven candidates and field model. |
| Review / logic pass | Pass with caveats | No dedicated seven-method independent benchmark was found; decision tree uses explicit logic review plus method-paper evidence. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no global ranking. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, and default-method claims. |

## Current Layer 2 Facts

- Candidate rows: 7.
- Fields per method row: 22.
- Code access: 7 available.
- Compute labels: 3 CPU, 4 Optional GPU, 0 Required GPU.
- Correction targets: 3 mixed, 2 imputation, 1 gene filtering, 1 enhancement.
- Reference dependence: 5 reference-free, 1 scRNA-reference-assisted, 1 pretrained-model-assisted.
- Image signal use: 6 none, 1 optional, 0 required, 0 unclear.
- Output alteration: 3 imputed matrix, 3 enhanced matrix, 1 filtered features.
- Memory burden: 1 high, 6 unclear.
- Scale sensitivity: 2 medium, 1 high, 4 unclear.

## Caveats Carried Into Later Work

- `SpotGF` remains a boundary method with `Normalization / Feature Selection`
  because it filters genes rather than imputing a full expression matrix.
- `DiffusionST`, `stGRL`, and `spRefine` have downstream representation or
  domain-analysis claims; this package uses only their denoising/imputation or
  enhancement roles.
- No independent benchmark was found that justifies ranking all seven frozen
  methods.
- Many resource and scale labels remain conservative because public evidence is
  method-paper-local and not equivalent to BioHarness runtime validation.
- Reference-assisted and model-prior-assisted methods require extra scientific
  caution around reference mismatch, hallucinated expression, and downstream
  circular validation.

## Representative Layer 3/4 Audit Batch

All seven frozen candidates are recommended as the first representative audit
batch because the topic is small and each method covers a distinct selection
branch:

| Method | Why include in audit batch |
| --- | --- |
| `MIST` | CPU region-aware imputation route. |
| `SpotGF` | CPU conservative gene-filtering boundary route. |
| `Sprod` | CPU image/position-informed denoising route. |
| `DiffusionST` | Deep generative enhancement route. |
| `stDiff` | scRNA-reference-assisted imputation route. |
| `stGRL` | Multi-task graph denoising/imputation and representation route. |
| `spRefine` | Genomic-language-model prior route with high resource caveats. |

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Denoising / Imputation` Layer 2 is complete as a working/evidence package for
method-selection support. It is ready for later formal rendering or
representative Layer 3/4 audit, but it does not imply default methods, runtime
surfaces, package entrypoints, environment capsules, wrappers, rewrites, or
adapter implementations.
