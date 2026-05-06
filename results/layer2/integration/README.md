# Integration Layer 2 Package

## Status

Layer served: `Layer 2`

Topic status: complete working/evidence package for the Layer 1 `Analysis Problem` `Integration`.

This package supports method selection for spatial transcriptomics Integration. It is not a Layer 3 execution surface, Layer 4 implementation, adapter design, environment capsule, callable signature, or runtime-support claim.

## Candidate Freeze

Frozen candidates: 22

`CAST`, `DeST-OT`, `GPSA`, `GraphST`, `PASTE`, `PASTE2`, `PRECAST`, `SANTO`, `SLAT`, `SPACEL`, `STalign`, `STAligner`, `STAIR`, `MaskGraphene`, `spCLUE`, `VR-Omics`, `MISO`, `Crescendo`, `SpaMosaic`, `INSPIRE`, `SpatialCOC`, `SSpMosaic`

The candidate set started from `historical topic-subagent staging input; current candidate-freeze authority is /mnt/NAS_21T/ProjectData/BioHarness/results/layer2/integration/topic_scope.md` and was expanded by a targeted 2025-2026 literature correction to include `SpaMosaic`, `INSPIRE`, `SpatialCOC`, and `SSpMosaic`.

## Artifact Index

| Artifact | Role |
| --- | --- |
| `topic_scope.md` | Topic boundary, bounded retrieval record, inclusion/exclusion rules, and final candidate freeze. |
| `field_registry.json` | Shared and topic-specific field definitions for the method table. |
| `method_table.json` | Structured source of truth for the Integration method table. |
| `method_table.csv` | Spreadsheet-friendly table generated from `method_table.json` with a CSV writer. |
| `method_table.md` | Human-readable table rendered from `method_table.json`. |
| `review_decision_tree.md` | PubMed benchmark/review screen, evidence spot-checks, branch-local decision logic, and coverage ledger. |
| `closure.md` | Gate check, current facts, caveats, closure decision, and representative Layer 3/4 audit batch. |

## Layer Boundary

Use this package to decide which method family to read or audit for a specific Integration branch. Do not treat any row as a default method, supported runtime adapter, stable execution surface, or implementation commitment.
