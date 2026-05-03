# Super-resolution Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package with caveats; ready for
formal rendering or representative Layer 3/4 engineering audit.

This closure does not freeze a default method, Layer 3 execution surface,
backend adapter boundary, callable signature, environment capsule, rewrite
decision, or runtime-support status.

## Authority Artifacts

- Topic scope:
  `/tmp/bioharness_layer2_subagents/output/super_resolution/topic_scope.md`
- Field registry:
  `/tmp/bioharness_layer2_subagents/output/super_resolution/field_registry.json`
- Structured method table:
  `/tmp/bioharness_layer2_subagents/output/super_resolution/method_table.json`
- CSV method table:
  `/tmp/bioharness_layer2_subagents/output/super_resolution/method_table.csv`
- Human-readable method table:
  `/tmp/bioharness_layer2_subagents/output/super_resolution/method_table.md`
- Review and decision tree:
  `/tmp/bioharness_layer2_subagents/output/super_resolution/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Super-resolution`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, sources, queries, inclusion/exclusion rules, and candidate freeze. |
| Frozen candidate set | Pass | Eight rows: `FICTURE`, `iStar`, `scstGCN`, `Spotiphy`, `TESLA`, `XFuse`, `iSCALE`, `STAGE`. |
| Field schema | Pass | Shared fields plus six topic-specific decision/caveat fields in `field_registry.json`. |
| Method table artifacts | Pass | JSON is the source table; CSV and Markdown are generated from the same JSON. |
| Review / logic pass | Pass with caveats | No dedicated eight-method independent benchmark was found; decision tree uses explicit logic review plus method-paper evidence. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no global ranking. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, callable, and default-method claims. |

## Current Layer 2 Facts

- Candidate rows: 8.
- Fields per method row: 22.
- Code access: 4 available, 4 unclear.
- Compute labels: 1 CPU, 7 Optional GPU, 0 Required GPU.
- Image signal use: 5 required, 1 none, 2 unclear.
- External reference dependence: 5 reference-free, 3 unclear.
- Memory burden: 8 unclear.
- Scale sensitivity: 2 low, 1 medium, 5 unclear.
- PubMed identity check: all eight PMIDs verified; `scstGCN` DOI was filled
  from PubMed as `10.1093/bib/bbae630`.

## Caveats Carried Into Later Work

- No independent benchmark was found that justifies ranking all eight frozen
  methods.
- Many resource, memory, scale, code-access, and reference-dependence labels
  remain conservative because bounded PubMed evidence and frozen input do not
  verify those details.
- Histology-guided methods can learn morphology-correlated expression patterns
  that are visually plausible but biologically biased.
- Pseudo-single-cell and single-cell-resolution outputs should be treated as
  inferred reconstructions, not direct single-cell molecular measurements.
- Large-area or whole-section reconstruction can hide local failure modes if
  evaluated only by broad tissue-level agreement.
- Generated or super-resolved expression requires validation that avoids
  circular comparison to derived targets.

## Representative Layer 3/4 Audit Batch

The audit batch is representative engineering triage only. It is not a runtime
support claim, default-method list, adapter commitment, or implementation plan.

Because the topic is small and branch-diverse, all eight frozen candidates are
reasonable representative audit candidates:

| Method | Why include in audit batch |
| --- | --- |
| `FICTURE` | CPU segmentation-free submicron factorization branch with available frozen-input code link. |
| `iStar` | Histology-guided tissue-architecture inference branch with code-access uncertainty. |
| `scstGCN` | Graph/image single-cell-resolution expression branch with DOI corrected by PubMed and code-access uncertainty. |
| `Spotiphy` | Whole-section pseudo-single-cell transcriptome branch with available frozen-input code link. |
| `TESLA` | Tumor-ecosystem super-resolution branch with available frozen-input code link. |
| `XFuse` | Foundational deep fusion branch with available frozen-input code link. |
| `iSCALE` | Large-area cellular-level reconstruction branch with code-access uncertainty. |
| `STAGE` | High-density ST generation branch with code-access uncertainty. |

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Super-resolution` Layer 2 is complete as a working/evidence package for
method-selection support, with the caveats above carried forward. It is ready
for later formal rendering or representative Layer 3/4 audit, but it does not
imply default methods, runtime surfaces, package entrypoints, environment
capsules, wrappers, rewrites, or adapter implementations.
