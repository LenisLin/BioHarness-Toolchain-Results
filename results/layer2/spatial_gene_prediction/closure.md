# Spatial Gene Prediction Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package; ready for formal rendering
or representative Layer 3/4 engineering audit.

This closure does not freeze a default method, Layer 3 execution surface,
backend adapter boundary, callable signature, environment capsule, rewrite
decision, or runtime-support status.

## Authority Artifacts

- Topic scope:
  `/tmp/bioharness_layer2_subagents/output/spatial_gene_prediction/topic_scope.md`
- Field registry:
  `/tmp/bioharness_layer2_subagents/output/spatial_gene_prediction/field_registry.json`
- Structured method table:
  `/tmp/bioharness_layer2_subagents/output/spatial_gene_prediction/method_table.json`
- CSV method table:
  `/tmp/bioharness_layer2_subagents/output/spatial_gene_prediction/method_table.csv`
- Human-readable method table:
  `/tmp/bioharness_layer2_subagents/output/spatial_gene_prediction/method_table.md`
- Review and decision tree:
  `/tmp/bioharness_layer2_subagents/output/spatial_gene_prediction/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Spatial Gene Prediction`, not individual algorithms or subtasks. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, sources, queries, inclusion/exclusion rules, and candidate freeze. |
| Frozen candidate set | Pass | Eleven rows: `GHIST`, `Hist2ST`, `SpaGE`, `SpatialScope`, `STASCAN`, `stPlus`, `THItoGene`, `TISSUE`, `FmH2ST`, `stAI`, `OmiCLIP`. |
| Field schema | Pass | Shared fields plus six topic-specific decision fields in `field_registry.json`. |
| Method table artifacts | Pass | JSON is the source table; CSV and Markdown are generated from it. |
| Review / logic pass | Pass with caveats | No dedicated 11-method independent benchmark was found; decision tree uses explicit logic review plus method-paper evidence. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no global ranking. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, and default-method claims. |

## Current Layer 2 Facts

- Candidate rows: 11.
- Fields per method row: 22.
- Code access: 6 available, 5 unclear.
- Compute labels: 3 CPU, 8 Optional GPU, 0 Required GPU, 0 unclear.
- Prediction routes: 4 histology-to-expression, 2 reference-assisted
  enhancement, 1 cellular-resolution reconstruction, 1 fine-resolution
  cell-map prediction, 1 uncertainty calibration, 1 missing-gene imputation,
  1 visual-omics foundation prediction.
- Input dependence: 4 histology-required, 3 scRNA-reference-required,
  1 histology-and-expression-required, 1 prediction-input-required,
  2 pretrained-image-model-assisted.
- Uncertainty handling: 1 explicit, 10 not primary.
- Memory burden: 11 unclear.
- Scale sensitivity: 11 unclear.

## Caveats Carried Into Later Work

- The frozen input had a TISSUE PMID/DOI mismatch. This package preserves the
  candidate but records the corrected PubMed identity as PMID `38347138` and
  DOI `10.1038/s41592-024-02184-y`.
- `SpatialScope` lacked PMID/DOI in the frozen input; bounded PubMed retrieval
  filled PMID `38030617` and DOI `10.1038/s41467-023-43629-w`.
- No independent benchmark was found that justifies ranking all 11 frozen
  methods.
- Many resource, memory, scale, and code-access fields remain conservative
  because public method evidence is not equivalent to BioHarness runtime
  validation.
- Histology-to-expression methods are vulnerable to tissue, staining, scanner,
  and cohort domain shift.
- Reference-assisted methods can transfer reference mismatch, batch effects,
  missing cell states, or annotation circularity into predicted expression.
- Foundation-model and visual-omics routes require extra scrutiny for
  pretraining-domain bias, dataset leakage, opaque failure modes, and
  high-resource practical burden.
- High-resolution outputs should not be interpreted as measured single-cell
  expression without independent validation.

## Representative Layer 3/4 Audit Batch

The following representative audit batch covers the major decision branches.
It is not a default-method list and does not imply runtime support.

| Method | Why include in audit batch |
| --- | --- |
| `Hist2ST` | Canonical spot-level histology-to-expression branch. |
| `GHIST` | Single-cell-resolution histology prediction branch. |
| `SpaGE` | CPU scRNA-reference-assisted enhancement branch. |
| `SpatialScope` | Deep generative cellular-resolution reconstruction branch. |
| `STASCAN` | Fine-resolution cell-map boundary branch. |
| `TISSUE` | Explicit uncertainty-calibration branch and corrected-identifier case. |
| `stAI` | Single-cell missing-gene imputation plus annotation branch. |
| `OmiCLIP` | Broad visual-omics foundation-model prediction branch. |

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Spatial Gene Prediction` Layer 2 is complete as a working/evidence package for
method-selection support. It is ready for later formal rendering or
representative Layer 3/4 audit, but it does not imply default methods, runtime
surfaces, package entrypoints, environment capsules, wrappers, rewrites, or
adapter implementations.
