# Segmentation Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: complete 11-row working/evidence package after the 2026-05-05
minor errata reprocess; ready for formal rendering or representative Layer 3/4
engineering audit with caveats.

This closure does not freeze a Layer 3 execution surface, backend adapter
boundary, callable interface, environment profile, rewrite decision, or
execution-support status.

## Authority Artifacts

- Topic scope:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/segmentation/topic_scope.md`
- Field registry:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/segmentation/field_registry.json`
- Structured method table:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/segmentation/method_table.json`
- CSV method table:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/segmentation/method_table.csv`
- Human-readable method table:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/segmentation/method_table.md`
- Review and decision tree:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/segmentation/review_decision_tree.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Analysis Problem unit | Pass | Topic is `Segmentation`, not individual algorithms or subtask packages. |
| Bounded retrieval record | Pass | `topic_scope.md` records the original retrieval and 2026-05-05 targeted metadata/code reprocess. |
| Frozen candidate set | Pass | Eleven rows: `Baysor`, `Bering`, `SCS`, `segger`, `UCS`, `BIDCell`, `VistoSeg`, `STCellbin`, `Spotiflow`, `Piscis`, `CelloType`. |
| Field schema | Pass | Shared fields plus topic-specific decision fields in `field_registry.json`; support branch added for `VistoSeg`. |
| Method table artifacts | Pass | JSON is the source table; CSV and Markdown represent the same eleven candidates and field model. |
| Review / logic pass | Pass with caveats | No dedicated independent benchmark was found that jointly ranks all eleven heterogeneous boundary rows; decision tree uses branch-local logic plus method-paper evidence. |
| Decision tree | Pass with caveats | Conditional branch-local method selection only; no universal ranking. |
| Layer boundary | Pass | Artifacts avoid execution-surface and adapter claims; code access is trace metadata only. |

## Current Layer 2 Facts

- Candidate rows: 11.
- Fields per method row: 22.
- Segmentation branches: 7 cell segmentation / transcript assignment, 1 histology image-processing support, 2 transcript spot detection, 1 joint segmentation / classification.
- Code access: 11 available access traces found from the current registry, method papers, public repositories, or PMC/PubMed-linked records.
- Compute labels: 3 CPU, 8 Optional GPU, 0 Required GPU.
- Memory burden: 1 medium, 10 unclear.
- Scale sensitivity: 9 medium, 2 unclear.

## Caveats Carried Into Later Work

- The topic intentionally mixes output objects. Spot coordinates, image-processing support outputs, cell masks, transcript-to-cell links, and classified image objects are not interchangeable.
- `VistoSeg` is a histology/IF image-processing support row. It should not be selected when the desired output is direct cell masks or transcript-to-cell assignments.
- `Spotiflow` and `Piscis` are upstream spot-detection methods. They should not be selected when the desired output is a segmented cell table or transcript-to-cell assignment.
- `CelloType` is a joint image segmentation/classification boundary row. Its classification coupling is useful only when that coupling matches the task.
- `segger` remains preprint-level in this package despite public code traces and method-paper claims.
- Public evidence verifies method identity and direct method claims better than it verifies cross-dataset generalization, resource burden, memory use, batch behavior, or BioHarness execution behavior.
- Annotation-coupled, reference-assisted, nuclei-anchored, image-driven, and boundary-image based methods can import biological or technical priors into boundary decisions.

## Representative Layer 3/4 Audit Batch

The full eleven-method freeze is recommended as a representative audit batch
because each method covers a distinct branch or boundary condition in this small
topic. This audit batch is for later engineering review only; it is not
execution support and not a universal method list.

| Method | Why include in audit batch |
| --- | --- |
| `Baysor` | cell segmentation / transcript assignment; Probabilistic transcript-based segmentation can struggle when marker density, cell overlap, or morphology priors are weak; benchmark gains are method-paper-local. |
| `Bering` | cell segmentation / transcript assignment; Transfer learning and annotation coupling can improve robustness but may import training-set or reference-pattern bias into segmentation decisions. |
| `SCS` | cell segmentation / transcript assignment; Image-dependent assignment can inherit image-segmentation errors and may be less suitable when morphology and transcript density disagree. |
| `segger` | cell segmentation / transcript assignment; Current evidence is preprint-level; reported speed and sensitivity advantages need independent replication before being treated as general. |
| `UCS` | cell segmentation / transcript assignment; Nuclei-anchored segmentation may miss non-nuclear cellular extent or propagate nuclei detection errors into transcript assignment. |
| `BIDCell` | cell segmentation / transcript assignment; Self-supervised boundary inference may encode morphology and cell-shape assumptions; public evidence remains method-paper-local for cross-platform generalization. |
| `VistoSeg` | histology image processing / segmentation support; This is a segmentation-support boundary row; image-processing outputs should not be interpreted as direct molecular cell segmentation or transcript assignment. |
| `STCellbin` | cell segmentation / transcript assignment; Platform and boundary-image dependence can propagate image-boundary errors into cell-level expression profiles; it should not be generalized as an image-free assignment route. |
| `Spotiflow` | transcript spot detection; Spot detection quality constrains all later transcript assignment, but high spot-level accuracy does not itself validate cell boundaries. |
| `Piscis` | transcript spot detection; Optimizing spot-level F1 can still leave ambiguity for densely packed or overlapping cells; downstream segmentation needs separate validation. |
| `CelloType` | joint segmentation / classification; Joint classification can improve object labeling but may entangle segmentation boundaries with class priors and image-domain bias. |

Audit outputs must remain separate from this Layer 2 package:

- `MethodEngineeringAudit`
- Layer 3 `ExecutionSurfaceSpec`
- Layer 4 `BackendAdapterSpec`
- `RewriteDecision`
- `EnvironmentProfile`
- validation requirements

## Closure Decision

The 2026-05-05 Segmentation errata are resolved at the working Layer 2 package
level. The package now matches the current Layer 1 11-row freeze and is ready
for later formal rendering or representative Layer 3/4 audit, while all
execution-surface, wrapper, rewrite, and adapter decisions remain out of scope.
