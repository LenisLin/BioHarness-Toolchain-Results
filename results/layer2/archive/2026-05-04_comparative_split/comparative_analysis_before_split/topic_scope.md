# Comparative Analysis Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem`
`Comparative Analysis`.

This document defines the topic boundary and candidate freeze. It does not
define commands, callable signatures, execution surfaces, adapter boundaries,
environment bindings, or runtime support.

## Analysis Problem Boundary

`Comparative Analysis` covers spatial transcriptomics methods whose primary
reusable contribution is comparing spatial expression, spatial patterns,
cell-type-specific expression, niche-conditioned expression, pathology scores,
spatial microenvironment features, or registered gene-expression pattern images
across conditions, samples, cohorts, or tissue states.

The Layer 1 `Subtask` values are used only as branch cues inside this topic.
They are not separate Layer 2 completion units.

## Source Registry

Primary frozen candidate input:

`/tmp/bioharness_layer2_subagents/input/comparative_analysis.json`

The input records the source registry as:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

The candidate set is frozen from the input JSON. This Layer 2 package does not
add methods.

## Bounded Retrieval Record

Retrieval date: 2026-05-01

Retrieval role: PMID/DOI/code-link verification and benchmark/review
screening. This retrieval did not open the candidate set for expansion.

Retrieval sources:

- frozen candidate input JSON
- PubMed E-utilities ESummary for frozen candidate PMIDs
- PubMed E-utilities ESearch/ESummary for benchmark/review screening
- DOI or preprint landing evidence where a PubMed PMID was absent
- official repositories or official code-availability links where visible

Candidate PMID verification query:

```text
36050488,38217002,39470725,41671295,40925368,40480226,40480216,38676948
```

Frozen candidate without PMID:

```text
STcompare: DOI 10.1101/2025.11.21.689847, bioRxiv preprint, public GitHub link in frozen input.
```

Benchmark/review screening queries:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
(comparative[Title/Abstract] OR differential[Title/Abstract] OR
 comparison[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 "comparative study"[Publication Type])
```

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
("differentially expressed genes"[Title/Abstract] OR
 "differential expression"[Title/Abstract])
AND
(methods[Title/Abstract] OR benchmark[Title/Abstract] OR
 "comparative study"[Publication Type])
```

The screening found broad spatial transcriptomics platform or application
comparison papers and a directly relevant 2026 comparative statistical-method
paper for spatial DE methods. It did not identify an independent benchmark that
jointly evaluates all nine frozen Comparative Analysis candidates. Therefore,
the decision tree uses the 2026 statistical-method comparison only as
branch-local support for the SpatialGEE-like spatial-DE branch and otherwise
uses explicit Layer 2 logic review.

## Inclusion Rules

Include methods when all of the following are true:

- the frozen input JSON lists the method in `candidate_freeze`
- the row belongs to `Analysis Problem = Comparative Analysis`
- the method has a named reusable computational identity
- the primary reusable contribution is comparative spatial transcriptomics
  method selection, not generic preprocessing or downstream reporting
- PubMed/DOI/preprint metadata can verify the method-paper identity or the
  input explicitly carries preprint evidence

## Exclusion Rules

Exclude or keep outside the frozen set when the primary contribution is:

- generic differential expression without spatial signal
- spatial domain discovery, clustering, trajectory analysis, cell-cell
  communication, perturbation analysis, or cell type inference as the main
  analysis problem
- platform benchmarking rather than a reusable comparative-analysis method
- assay/workflow description without a named reusable downstream method
- a method not present in the frozen candidate input

No additional methods were added during this Layer 2 pass.

## Final Candidate Freeze

| Tool Name | Layer 1 subtask cue | Evidence identity |
| --- | --- | --- |
| `C-SIDE` | Spatial differential expression / comparison | PMID 36050488; DOI 10.1038/s41592-022-01575-3 |
| `Niche-DE` | Spatial differential expression / comparison | PMID 38217002; DOI 10.1186/s13059-023-03159-6 |
| `SPADE` | Spatial differential expression / comparison | PMID 39470725; DOI 10.1093/nar/gkae962 |
| `SpatialGEE` | Spatial differential expression / comparison | PMID 41671295; DOI 10.1371/journal.pcbi.1013956 |
| `STcompare` | Spatial differential expression / comparison | DOI 10.1101/2025.11.21.689847; bioRxiv preprint |
| `TissueMosaic` | Cross-sample spatial comparison | PMID 40925368; DOI 10.1016/j.cels.2025.101394 |
| `SPaSE` | Disease-control spatial comparison | PMID 40480226; DOI 10.1016/j.cels.2025.101301 |
| `SpaLinker` | Phenotype-associated spatial feature linking | PMID 40480216; DOI 10.1016/j.xgen.2025.100893 |
| `SpatialSPM` | Spatial pattern comparison | PMID 38676948; DOI 10.1093/nar/gkae293 |

## Boundary Notes

`STcompare` remains preprint-supported in this package. It is retained because
the frozen candidate input explicitly includes it under the relaxed spatial
pattern comparison branch.

`SpatialGEE` is included under a benchmark-supported statistical-method branch.
This is branch-local evidence and does not create a global default method.

`TissueMosaic`, `SPaSE`, and `SpaLinker` broaden Comparative Analysis beyond
ordinary gene-level DE. Their decision cues must stay tied to motif-level
comparison, pathology scoring, and bulk-linked phenotype feature linking,
respectively.

`SpatialSPM` and `STcompare` depend heavily on structural comparability or
registration assumptions. Those assumptions are carried as caveats rather than
execution claims.

## Topic Branch Organization

The topic is organized by method-selection cues rather than by Layer 1 subtask
as separate packages:

- cell-type-specific differential expression
- niche-conditioned differential expression
- spatial differential expression or spatial pattern comparison
- structurally matched or registered pattern comparison
- cross-sample motif or tissue-representation comparison
- disease-control pathology scoring
- bulk-linked phenotype-associated spatial feature discovery

These branches support conditional selection only. They are not default
execution routes.
