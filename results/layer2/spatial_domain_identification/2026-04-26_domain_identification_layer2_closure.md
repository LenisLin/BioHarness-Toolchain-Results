# Spatial Domain Identification Layer 2 Closure

## Status

Layer served: `Layer 2`

Closure status: April 2026 Layer 2 pilot closure.

## Authority Artifacts

- Pilot and schema authority:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_pilot.md`
- Field registry:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_layer2_field_registry.json`
- Human-readable subtable:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.md`
- Machine-readable subtable:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.json`
- Standalone CSV subtable:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.csv`
- Decision-tree supplement:
  `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-18_domain_identification_layer2_supplement_review.md`

## Layer 2 Gate Check

| Gate item | Status | Evidence |
| --- | --- | --- |
| Frozen candidate set | Pass | 27-tool freeze in pilot and subtable. |
| Topic field schema | Pass | 21 fields in the field registry and subtable rows. |
| Subtable artifact | Pass | Markdown, JSON, and now standalone CSV versions exist. |
| Benchmark or review pass | Pass with caveats | Decision tree uses benchmark/review evidence only for branch-local ordering. |
| Standalone decision tree | Pass with caveats | 2026-04-18 supplement provides the current decision tree. |
| Review pass | Pass for Layer 2 closure | Supplement review records evidence spot checks, coverage ledger, and provisional zones. |

## Pilot Layer 2 Facts

- Candidate rows: 27.
- Fields per row: 21.
- Code access: 27 available.
- Compute labels: 13 CPU, 14 Optional GPU, 0 Required GPU.
- Image signal use: 21 none, 4 optional, 2 required.
- External biological guidance: 25 none, 1 marker-guided, 1 deconvolution-assisted.
- Cross-slice support: 15 single-slice only, 3 separate multi-sample use, 9 joint multi-slice modeling.
- Batch handling: 16 not addressed, 8 implicit / limited, 3 explicit batch-aware.

## Layer 2 Caveats

- `Closest Alternatives`, `Key Difference`, `Cross-slice Support`, and `Batch Handling`
  remain pilot-provisional Layer 2 judgment fields.
- `Memory Burden` remains `unclear` for all 27 methods because direct public
  support was not strong enough for more specific labels.
- `Scale Sensitivity` remains mostly `unclear`; only six methods are labeled
  `low`.
- Repeated placements in the decision tree must keep their caveat tags,
  especially `pilot-provisional carry-over` and `pilot-provisional boundary`.
- Benchmark/review evidence supports branch-local ranking and tie-breaks only;
  it must not be converted into a global all-method ranking.

## Closure Decision

This dated pilot package records an April 2026 Layer 2 domain-identification review package. Current Layer 1/2 formal topic enumeration is resolved from the active Layer 1 registry and confirmation-status mapping.
