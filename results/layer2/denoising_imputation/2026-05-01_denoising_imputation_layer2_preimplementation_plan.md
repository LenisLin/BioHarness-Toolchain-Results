# Denoising / Imputation Layer 2 Pre-implementation Plan

Date: 2026-05-01

## Purpose

This note records the confirmed pre-implementation plan for the
`Denoising / Imputation` Layer 2 topic package.

Layer served: `Layer 2`

This document is a planning and handoff note only. It is not the completed
Layer 2 topic package, not a Layer 3 execution surface, not a Layer 4 adapter
or runtime implementation, and not a runtime-support claim.

## Confirmed Source And Destination

Source Layer 1 working registry:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

Planned Layer 2 topic directory:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/denoising_imputation/`

The planned topic directory uses the standard topic slug
`denoising_imputation`.

## Confirmed Candidate Freeze

The candidate set is frozen to the seven current Layer 1 `Include` rows for
`Analysis Problem = Denoising / Imputation`:

| Method | Layer 1 subtask cue | Initial compute cue |
| --- | --- | --- |
| `MIST` | Region-aware denoising / imputation | CPU |
| `SpotGF` | Denoising / gene filtering | CPU |
| `Sprod` | Image- and position-informed denoising | CPU |
| `DiffusionST` | Diffusion-based denoising / imputation | Optional GPU |
| `stDiff` | Reference-assisted imputation | Optional GPU |
| `stGRL` | Graph contrastive denoising / imputation | Optional GPU |
| `spRefine` | Reference-free denoising / imputation | Optional GPU |

Bounded retrieval for this topic should validate and annotate this frozen set.
It should not expand the candidate set unless a later explicit decision changes
the freeze.

## Confirmed Boundary Policy

The topic covers methods whose primary reusable contribution is spatial
transcriptomics expression denoising, smoothing, signal recovery, enhancement,
or imputation.

The topic excludes methods whose primary output is one of the following:

- general ecosystem preprocessing or backbone workflow support
- spatial artifact or contamination correction
- normalization, size-factor estimation, variance stabilization, or HVG
  selection as the main claim
- histology-to-expression prediction as the main claim
- super-resolution map generation as the main claim
- cell type inference, deconvolution, or annotation as the main claim

`SpotGF` stays in this topic as a boundary method because the current Layer 1
working registry places it under denoising through optimal-transport gene
filtering. Its overlap with `Normalization / Feature Selection` must be marked
in `topic_scope.md`, `field_registry.json`, the method table evidence note, and
the review caveats.

Backbone packages such as `Scanpy`, `scater`, `scran`, `Squidpy`,
`sctransform`, `SpatialData`, and `Giotto Suite` must not be counted as
concrete methods in this topic table.

## Planned Package Artifacts

The implementation pass should create the standard Layer 2 working/evidence
package:

```text
README.md
topic_scope.md
field_registry.json
method_table.csv
method_table.md
method_table.json
review_decision_tree.md
closure.md
```

This pre-implementation note does not count as one of the required completion
artifacts.

No `formal/layer2/denoising_imputation.md` file should be generated in the
implementation pass unless separately requested after the working/evidence
package is complete.

## Planned Field Model

All method-table artifacts should reuse the shared Layer 2 fields:

- `Tool Name`
- `Method Family`
- `Main Input`
- `Main Use in This Topic`
- `Main Output`
- `Closest Alternatives`
- `Key Difference`
- `Compute Requirement`
- `Memory Burden`
- `Scale Sensitivity`
- `Code Access`
- `Primary Code Link`
- `Evidence Source`
- `Evidence Note`
- `Best First Choice When`
- `Do Not Start With This When`

Topic-specific decision fields should be selection-oriented:

| Field | Intended role |
| --- | --- |
| `Correction Target` | Distinguish denoising, imputation, gene filtering, and enhancement targets. |
| `Reference Dependence` | Distinguish reference-free, scRNA-reference-assisted, pretrained-model-assisted, and unclear cases. |
| `Spatial Signal Use` | Record how spatial structure enters the method, such as region structure, coordinates, graph, or unclear. |
| `Image Signal Use` | Record whether image signal is absent, optional, required, or unclear. |
| `Output Alteration Level` | Distinguish filtered features, smoothed matrix, imputed matrix, enhanced matrix, or unclear output alteration. |
| `Signal-risk Caveat` | Record conservative risk language such as over-smoothing, reference bias, hallucinated expression, or unclear risk. |

Fields with weak direct public evidence should use `unclear` rather than
over-specific labels.

## Evidence And Review Policy

Retrieval depth: verification and source completion only.

Allowed retrieval and verification targets include PubMed records, DOI landing
pages, paper pages, official repositories, official documentation, and relevant
benchmark or review literature.

`Primary Code Link` should be filled only when an official or clearly primary
code/documentation source is confirmed. Do not infer code access from a method
paper alone.

`review_decision_tree.md` should first state whether usable benchmark or review
evidence exists for this specific method-selection problem. If suitable
benchmark/review evidence is absent or too incomplete, the file should use an
explicit logic review derived from the field registry and method table.

The decision tree must provide conditional method-selection guidance only. It
must not create a global all-method ranking, default method claim, runtime-ready
claim, or execution-support claim.

## Planned Decision-tree Cues

The decision tree should organize choices around branch-local selection cues:

- conservative denoising versus stronger imputation or enhancement
- reference-free versus reference-assisted signal recovery
- image/position-informed routes versus expression/spatial-graph-only routes
- gene-filtering boundary route for `SpotGF`
- CPU-first methods versus optional-GPU deep/generative methods
- signal-risk caveats such as over-smoothing, reference bias, and hallucinated
  expression

Compute should act only as a branch-local resource gate. It should not override
task fit.

## Planned Closure Policy

`closure.md` should include the required gate check, current Layer 2 facts,
remaining caveats, closure decision, and representative Layer 3/4 audit batch.

The representative Layer 3/4 audit batch should list all seven frozen
candidates:

`MIST`, `SpotGF`, `Sprod`, `DiffusionST`, `stDiff`, `stGRL`, `spRefine`

This audit batch is not a default-method list and does not imply Layer 3
surface support, Layer 4 adapter availability, environment capsule assignment,
or production execution readiness.

## Verification For Implementation Pass

After implementation, verify:

- all eight required artifacts exist in the topic directory
- `method_table.csv`, `method_table.md`, and `method_table.json` contain the
  same seven frozen candidates and same field model
- JSON parses cleanly
- the package does not create or update a formal Layer 2 file
- no root status file is updated unless separately requested
- no document claims runtime support, default methods, environment bindings,
  callable signatures, execution surfaces, or adapter implementations

## Confirmed Assumptions

- The current task is a pre-implementation documentation landing only.
- The full Layer 2 working/evidence package will be created in a later
  implementation pass.
- Existing authoritative spatial domain identification artifacts remain
  unchanged.
- No NAS topic-pilot files outside the planned `denoising_imputation` topic
  directory should be modified by this landing step.
