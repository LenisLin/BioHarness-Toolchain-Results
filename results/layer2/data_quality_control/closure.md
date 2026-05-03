# Data Quality Control Closure

## Status

Layer served: `Layer 2`

Closure date: 2026-05-01

This closure records completion of the working/evidence package for one
Analysis Problem. It does not create a formal Layer 2 rendering, default
method, execution surface, adapter, environment capsule, callable signature, or
runtime-support claim.

## Gate Check

| Gate | Result | Note |
| --- | --- | --- |
| Candidate set frozen from input JSON | pass | Frozen candidates are `SpotSweeper` and `stPipe`; no methods were added. |
| Required eight artifacts present | pass | README, scope, field registry, JSON/CSV/MD tables, review decision tree, and closure are present in the owned output directory. |
| Shared fields included | pass | All required shared fields are present in `method_table.json` and defined in `field_registry.json`. |
| Topic-specific decision cues defined | pass | Five topic-specific cues are defined and used. |
| JSON built before CSV/Markdown render | pass | `method_table.json` was created first; CSV and Markdown were rendered from it. |
| Bounded PubMed verification performed | pass | Candidate PMIDs/DOIs were verified with PubMed E-utilities. |
| Benchmark/review screening performed | pass | PubMed review/benchmark query was run and recorded. |
| Decision tree branch-local | pass | Branches are conditional on input stage, QC target, and artifact-handling need. |
| Runtime-support claims avoided | pass | Code links are audit traces only. |

## Current Facts

- `SpotSweeper` is the focused spatially aware QC candidate in the frozen set.
- `stPipe` is the upstream R/Bioconductor preprocessing/QC pipeline candidate
  in the frozen set.
- Both candidate paper identities were verified by PubMed PMID and DOI.
- Both candidates have official Bioconductor package pages recorded as primary
  code/documentation links.
- No dedicated independent benchmark was found that jointly ranks the two
  frozen candidates for the same QC endpoint.
- Resource and scale fields remain conservative; memory burden and scale
  sensitivity are recorded as `unclear`.

## Scientific Caveats

- Spatially structured QC anomalies can overlap with true tissue biology, so
  local artifact calls should not be treated as biological truth without
  contextual review.
- Pipeline-level QC summaries can miss local spatial artifact structure; they
  answer a different question from focused spatial artifact detection.
- The two candidates differ mainly by data-processing stage, so comparisons are
  not symmetric head-to-head performance comparisons.
- PubMed screening found broad reviews and adjacent benchmarks, but not a
  dedicated benchmark covering both methods as direct substitutes.
- Evidence from method papers and official documentation is stronger for method
  identity and intended scope than for resource burden, scale behavior, or
  cross-platform superiority.

## Closure Decision

Decision: complete for Layer 2 working/evidence use with caveats.

The package is ready to be used as a conditional method-selection evidence
package and as input to a later formal rendering step if requested by an
authorized task. It should not be read as freezing defaults, runtime execution,
adapters, callable signatures, or environment choices.

## Representative Layer 3/4 Audit Batch

This audit batch is a representative engineering-review seed only. It is not
runtime support and does not imply implementation priority.

| Candidate | Audit reason | Layer 3/4 question |
| --- | --- | --- |
| `SpotSweeper` | Focused post-count spatial QC branch with official Bioconductor package. | What minimal input object contract would preserve spatial coordinates, QC metrics, and filtered/flagged spot outputs without collapsing Layer 2 selection logic into adapter code? |
| `stPipe` | Upstream preprocessing/QC pipeline branch with official Bioconductor package. | Whether a broad preprocessing pipeline should be represented as one high-level audit target or decomposed later into narrower surfaces after interface and provenance requirements are clarified. |

## Files In Scope

All written files are under:

`/tmp/bioharness_layer2_subagents/output/data_quality_control/`
