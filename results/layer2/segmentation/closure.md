# Segmentation Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete working/evidence package; ready for formal rendering
or representative Layer 3/4 engineering audit.

This closure does not freeze a default method, Layer 3 execution surface,
backend adapter boundary, callable signature, environment capsule, rewrite
decision, or runtime-support status.

## Authority Artifacts

- Topic scope:
  `/tmp/bioharness_layer2_subagents/output/segmentation/topic_scope.md`
- Field registry:
  `/tmp/bioharness_layer2_subagents/output/segmentation/field_registry.json`
- Structured method table:
  `/tmp/bioharness_layer2_subagents/output/segmentation/method_table.json`
- CSV method table:
  `/tmp/bioharness_layer2_subagents/output/segmentation/method_table.csv`
- Human-readable method table:
  `/tmp/bioharness_layer2_subagents/output/segmentation/method_table.md`
- Review and decision tree:
  `/tmp/bioharness_layer2_subagents/output/segmentation/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Segmentation`, not individual algorithms or subtask packages. |
| Bounded retrieval record | Pass | `topic_scope.md` records date, sources, PubMed queries, inclusion/exclusion rules, and candidate freeze. |
| Frozen candidate set | Pass | Eight rows: `Baysor`, `Bering`, `SCS`, `segger`, `UCS`, `Spotiflow`, `Piscis`, `CelloType`. |
| Field schema | Pass | Shared fields plus six topic-specific decision fields in `field_registry.json`. |
| Method table artifacts | Pass | JSON was built first; CSV and Markdown were generated from JSON and represent the same eight candidates and field model. |
| Review / logic pass | Pass with caveats | No dedicated independent benchmark was found that jointly ranks the eight frozen methods; decision tree uses explicit branch-local logic plus method-paper evidence. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no global ranking. |
| Layer boundary | Pass | Artifacts avoid runtime, adapter, environment, execution-ready, and default-method claims. |

## Current Layer 2 Facts

- Candidate rows: 8.
- Fields per method row: 22.
- Segmentation branches: 5 cell segmentation / transcript assignment, 2
  transcript spot detection, 1 joint segmentation / classification.
- Code access: 8 available access traces found from the frozen input,
  PubMed abstracts, or PMC-linked records.
- Compute labels: 1 CPU, 7 Optional GPU, 0 Required GPU.
- Memory burden: 8 unclear.
- Scale sensitivity: 5 medium, 3 unclear.
- Annotation coupling: 4 none, 1 joint molecular annotation, 1 optional
  scRNA/reference, 1 downstream only, 1 joint image classification.

## Caveats Carried Into Later Work

- The topic intentionally mixes output objects. Spot coordinates, cell masks,
  transcript-to-cell links, and classified image objects are not interchangeable.
- `Spotiflow` and `Piscis` are upstream spot-detection methods. They should not
  be selected when the desired output is a segmented cell table or
  transcript-to-cell assignment.
- `CelloType` is a joint image segmentation/classification boundary row. Its
  classification coupling is useful only when that coupling matches the task.
- `segger` remains preprint-level in this package, despite promising
  method-paper claims and public code.
- Public evidence is mostly method-paper-local. It verifies method identity and
  direct method claims better than it verifies cross-dataset generalization,
  resource burden, memory use, batch behavior, or BioHarness execution behavior.
- Annotation-coupled, reference-assisted, nuclei-anchored, and image-driven
  methods can import biological or technical priors into boundary decisions.

## Representative Layer 3/4 Audit Batch

The full eight-method freeze is recommended as a representative audit batch
because each method covers a distinct branch or boundary condition in a small
topic. This audit batch is for later engineering review only; it is not runtime
support and not a default-method list.

| Method | Why include in audit batch |
| --- | --- |
| `Baysor` | Mature CPU transcript-coordinate-first segmentation baseline. |
| `Bering` | Graph transfer-learning route with joint molecular annotation. |
| `SCS` | Image-plus-sequencing high-resolution spot assignment route. |
| `segger` | Frontier graph link-prediction transcript-assignment route with preprint caveats. |
| `UCS` | Nuclei-plus-transcript unified subcellular-ST segmentation route. |
| `Spotiflow` | Upstream fluorescence spot-detection branch with public Python/napari code trace. |
| `Piscis` | Upstream RNA FISH spot-detection branch with SmoothF1 objective. |
| `CelloType` | Joint tissue-image segmentation/classification boundary route. |

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

`Segmentation` Layer 2 is complete as a working/evidence package for
method-selection support. It is ready for later formal rendering or
representative Layer 3/4 audit, but it does not imply default methods, runtime
surfaces, package entrypoints, environment capsules, wrappers, rewrites, or
adapter implementations.
