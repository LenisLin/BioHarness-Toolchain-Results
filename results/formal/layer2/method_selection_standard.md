# Layer 2 Method Selection Standard

This document defines the formal Layer 2 method-selection presentation standard for BioHarness spatial transcriptomics work.

Layer 2 formal artifacts are agent-facing method-selection results. They help an agent choose methods within a selected analysis problem. They are not execution manuals, parameter schemas, environment bindings, adapter designs, or runtime-readiness claims.

Layer 2 topic completion is defined separately by `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/TOPIC_COMPLETION_STANDARD.md`. A formal topic Markdown file is rendered from a completed Layer 2 topic package.

## Formal Topic Unit

The formal Layer 2 topic unit is the Layer 1 `Analysis Problem`.

The registry `Subtask` field is not a formal Layer 2 hierarchy level. It may inform method branches during working analysis, but formal Layer 2 files should use analysis-topic and method-branch language instead of subtask directories or subtask package names.

If two method branches cannot share a candidate-set context, field model, or decision tree, they may be discussed later as separate analysis topics. That split is a manual decision, not an automatic consequence of the registry `Subtask` field.

## Working And Formal Artifacts

Layer 2 has two artifact classes.

Working/evidence artifacts support construction, review, and consistency checks. They remain outside the formal presentation layer, normally under the non-formal Layer 2 results workspace. A formal topic file should be generated only after the working/evidence artifacts are complete.

Formal artifacts are the final agent-facing method-selection files under `formal/layer2`.

## Formal Generation Gate

Before a formal Layer 2 topic Markdown file is generated, the corresponding Layer 2 topic package must be complete under `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/TOPIC_COMPLETION_STANDARD.md`.

The completed package is the input to formal rendering and should include:

- `README.md`
- `topic_scope.md`
- `field_registry.json`
- `method_table.csv`
- `method_table.md`
- `method_table.json`
- `review_decision_tree.md`
- `closure.md`

## Formal Topic Markdown Shape

Each completed Analysis Problem should have one formal Markdown file:

```text
formal/layer2/<analysis_problem_slug>.md
```

Each formal topic Markdown must contain these sections, in this order:

1. `Problem boundary`
2. `Method feature table`
3. `Decision tree`

Do not create a formal topic Markdown for unfinished topics.

## Method Feature Table

The method feature table should be compact but decision-useful. It should use these columns:

| Column | Purpose |
| --- | --- |
| `Method` | Canonical method name. |
| `Selection role` | Positive role of the method in the analysis problem. |
| `Main input/signal` | Main data signal or input condition relevant to method selection. |
| `Main output` | High-level output object. |
| `Feature summary` | Short method-characterization text for selection. |
| `Modality cue` | Coarse modality cue such as image, reference, spatial coordinate, or other input signal. |
| `Multi-sample/batch cue` | Coarse multi-sample, multi-slice, or batch-related selection cue. |
| `Compute/code cue` | Coarse compute and code-availability cue. |

The table should use positive selection language. It should not include exclusionary columns such as `Avoid when` or `Do Not Start With This When`.

## Decision Tree

The decision tree must be embedded in the same formal topic Markdown file.

Use a condition-branch style that an agent can follow directly, such as:

```text
If ...
- Prefer / consider ...

If ...
- Prefer / consider ...
```

The decision tree should use coarse method-selection conditions derived from the working/evidence materials. It should not introduce a separate subjective decision basis.

Benchmark or review evidence may support branch-local ordering or tie-breaking, but it must not become a universal all-method ranking.

## Formal Content Boundaries

Formal Layer 2 topic files should not include:

- source artifact links
- caveat or uncertainty notes
- exclusionary method descriptions
- commands
- parameter schemas
- package installation steps
- callable signatures
- execution surfaces
- environment bindings
- adapter boundaries
- adapter internals
- default-method claims
- execution-readiness claims
- runtime-support claims

These details belong in working/evidence artifacts or later Layer 3/4 planning artifacts, not in formal Layer 2 method-selection presentation.

## Recommended Formal Topic Slugs

| Analysis Problem | Formal topic file |
| --- | --- |
| Preprocessing | `preprocessing.md` |
| Segmentation | `segmentation.md` |
| Super-resolution | `super_resolution.md` |
| Spatial Gene Prediction | `spatial_gene_prediction.md` |
| Integration | `integration.md` |
| Graph / Neighborhood | `graph_neighborhood.md` |
| Domain / Clustering | `domain_clustering.md` |
| Spatially Variable Gene Detection | `spatially_variable_gene_detection.md` |
| Cell Type Inference | `cell_type_inference.md` |
| Cell-Cell Communication | `cell_cell_communication.md` |
| Comparative Analysis | `comparative_analysis.md` |
| Spatial Trajectory Analysis | `spatial_trajectory_analysis.md` |
| Spatial Clonal Analysis | `spatial_clonal_analysis.md` |
| Spatial Perturbation Analysis | `spatial_perturbation_analysis.md` |
| Program Discovery | `program_discovery.md` |

## Current Scope

This standard defines the method-selection presentation contract only.

The topic completion standard now defines the working/evidence package completion contract; formal rendering follows this document.

This standard does not create any topic-specific formal method-selection file. In particular, this pass does not create `domain_clustering.md`.
