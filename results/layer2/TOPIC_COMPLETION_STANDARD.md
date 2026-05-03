# Layer 2 Topic Completion Standard

## Purpose

This file defines the completion standard for a Layer 2 topic as it moves from the Layer 1 registry and topic retrieval into a complete working/evidence package.

A complete Layer 2 package is the required working basis for later formal presentation. It records candidate boundaries, field definitions, method evidence, review logic, decision-tree support, and closure status before any compact agent-facing topic Markdown is rendered.

Formal presentation is governed separately by `/mnt/NAS_21T/ProjectData/BioHarness/results/formal/layer2/method_selection_standard.md`. That document defines the compact formal Markdown shape; this document defines the heavier topic completion contract.

## Completion Unit

The Layer 2 completion unit is the Layer 1 `Analysis Problem`.

The Layer 1 `Subtask` field may be used as a method branch cue or topic-internal organization cue. It is not, by itself, a separate Layer 2 completion unit.

`Spatial domain identification` is the canonical completed example for this standard.

## Root Status Record

The Layer 2 root status record, when maintained, should track completion at the `Analysis Problem` level only.

It should not list individual algorithms, method packages, software packages, or code repositories. Those belong inside each completed topic's `method_table` artifacts.

The root status record should use the minimal shape:

| Analysis Problem | Layer 2 Complete |
| --- | --- |

`Layer 2 Complete` means that the analysis problem has a complete working/evidence package according to this standard. It does not mean that every method row has Layer 3 runtime support, a backend adapter, an environment capsule, or production execution readiness.

## Canonical Package Layout

New Layer 2 topic packages should use this layout:

```text
results/layer2/<topic_slug>/
  README.md
  topic_scope.md
  field_registry.json
  method_table.csv
  method_table.md
  method_table.json
  review_decision_tree.md
  closure.md
```

The spatial domain identification package is a legacy-dated canonical example. It keeps its existing artifact names. In that package, the dated `subtable` artifacts fill the same role that `method_table` artifacts should fill in new topic packages.

## Required Artifact Contracts

### `README.md`

`README.md` is the topic entry point. It should state the Layer 2 role, current topic status, and artifact index. It should also make clear that the package is a method-selection evidence package, not a Layer 3 execution surface or Layer 4 implementation.

### `topic_scope.md`

`topic_scope.md` defines the topic boundary. It should record the bounded retrieval pass, inclusion and exclusion rules, final candidate freeze, and any branch or subtask organization used inside the topic.

The scope file should distinguish the Layer 1 `Analysis Problem` from registry `Subtask` cues. Subtasks may help organize branches, but they should not silently create separate completion units.

### `field_registry.json`

`field_registry.json` defines the reusable shared fields and any topic-specific fields. Each field entry should include a definition, fill rule, role, scope, controlled values when applicable, and topic relevance for topic-specific decision cues.

The registry is a Layer 2 schema artifact. It does not define commands, callable signatures, execution surfaces, environment bindings, adapter boundaries, or runtime support.

### `method_table.csv`, `method_table.md`, and `method_table.json`

These three files represent the complete topic method table in tabular, readable, and structured forms.

The CSV is the spreadsheet-friendly working table. The Markdown version is the human-readable review table. The JSON version is the structured representation for indexing, downstream checks, or future automation.

All three forms should describe the same frozen candidate set and the same field model. Differences should be limited to format-specific representation.

### `review_decision_tree.md`

`review_decision_tree.md` records the benchmark/review pass or explicit logic review, the decision tree, coverage ledger, and evidence spot-checks.

When suitable benchmark or review literature exists, this file should record how that evidence supports branch-local ordering, tie-breaks, or metric-specific comparisons. When suitable benchmark or review literature does not exist, this file should say so explicitly and provide a logic review based on the field registry and method table.

### `closure.md`

`closure.md` records the final topic gate check, current Layer 2 facts, remaining caveats, closure decision, and representative Layer 3/4 audit batch.

The closure file may state that a topic is ready for representative Layer 3/4 audit or co-design review. It must not freeze default methods, runtime surfaces, backend adapters, environment capsules, or implementation status unless those decisions are documented by later authoritative Layer 3/4 artifacts.

## Shared Field Model

All topic `method_table` artifacts reuse these shared fields:

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

All working topic `method_table` artifacts also include:

- `Best First Choice When`
- `Do Not Start With This When`

Topic-specific decision cues are defined by each topic. Their definitions, fill rules, controlled values, and topic relevance must be documented in `field_registry.json`.

## Bounded Retrieval Standard

Each topic must complete bounded retrieval before candidate freeze.

`topic_scope.md` must record:

- retrieval date
- retrieval sources
- search keywords or query strategy
- inclusion rules
- exclusion rules
- final candidate freeze

The retrieval record should be sufficient for a later reader to understand why the candidate set is bounded, what source classes were consulted, and which method families or tools were intentionally excluded.

## Evidence Strength Safeguards

Fields with insufficient evidence may use `unclear`. This is preferred over over-specific labels when direct public support is weak.

Field filling must distinguish direct evidence from Layer 2 synthesized judgment. `Evidence Note`, review notes, and closure caveats should make that distinction visible when a field depends on cross-method comparison or topic-level interpretation rather than a direct method source.

Formal decision trees express conditional selection guidance only. They must avoid global ranking, default-method claims, runtime-ready claims, and execution-ready claims.

## Review And Decision Tree Standard

When suitable benchmark or review literature exists, `review_decision_tree.md` must include a review pass.

When suitable benchmark or review literature does not exist, `review_decision_tree.md` must include an explicit logic review.

The decision tree should be derived from the field registry, method table, and review or logic review. It should not introduce a separate subjective decision basis.

Benchmark or review evidence should support branch-local ordering, tie-breaks, or metric-specific comparisons. It should not be converted into a universal all-method ranking.

## Closure Standard

`closure.md` must include:

- gate check
- current Layer 2 facts
- remaining caveats
- closure decision
- representative Layer 3/4 audit batch

The representative Layer 3/4 audit batch is a bridge to engineering review. It is not a default-method list and does not imply runtime support.

## Spatial Domain Canonical Example

The canonical completed Layer 2 working/evidence example is:

```text
/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/
```

This package is legacy-dated, so it keeps its dated artifact names instead of the new generic names. Its artifacts map to this standard as follows:

| Existing artifact | Standard role |
| --- | --- |
| `README.md` | Topic entry, Layer 2 role statement, status note, and artifact index. |
| `2026-04-16_domain_identification_layer2_pilot.md` | Legacy combined `topic_scope.md` and pilot schema authority. It records the task slot, candidate freeze, schema, controlled semantics, and evidence notes. |
| `2026-04-16_layer2_field_registry.json` | `field_registry.json` role. It defines shared and spatial-domain-specific fields, controlled values, fill rules, and evidence notes. |
| `2026-04-16_domain_identification_layer2_subtable.csv` | `method_table.csv` role. It is the complete tabular method table for the frozen spatial domain candidate set. |
| `2026-04-16_domain_identification_layer2_subtable.md` | `method_table.md` role. It is the human-readable method table. |
| `2026-04-16_domain_identification_layer2_subtable.json` | `method_table.json` role. It is the structured method table. |
| `2026-04-18_domain_identification_layer2_supplement_review.md` | `review_decision_tree.md` role. It provides the review pass, decision tree, coverage ledger, and evidence spot-checks. |
| `2026-04-26_domain_identification_layer2_closure.md` | `closure.md` role. It records the gate check, Layer 2 facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

The spatial domain `subtable` name corresponds to the `method_table` artifact role for future topics.

## Completing Other Topics

Use this workflow for every new Layer 2 topic:

1. Define the Layer 1 `Analysis Problem` boundary.
2. Run bounded retrieval.
3. Freeze the candidate set.
4. Define shared and topic-specific fields.
5. Build `method_table.csv`, `method_table.md`, and `method_table.json`.
6. Complete benchmark/review or logic review.
7. Derive `review_decision_tree.md`.
8. Write `closure.md` with representative Layer 3/4 audit batch.
9. Render the formal topic using `/mnt/NAS_21T/ProjectData/BioHarness/results/formal/layer2/method_selection_standard.md`.

## Formal Rendering Handoff

A completed Layer 2 topic package is the input for:

```text
formal/layer2/<analysis_problem_slug>.md
```

Formal rendering should stay compact and agent-facing. It should preserve the three-part presentation defined by the formal standard while leaving source links, caveats, table construction details, audit notes, and Layer 3/4 engineering details in the working/evidence package.
