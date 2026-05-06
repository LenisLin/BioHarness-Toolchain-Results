# Cell-Cell Communication Topic Scope

## Status

Layer served: `Layer 2`

Purpose: method-selection evidence package for the Layer 1 `Analysis Problem` `Cell-Cell Communication`.

This document defines the topic boundary and candidate freeze. It does not define commands, callable signatures, execution surfaces, adapter boundaries, environment bindings, default methods, or runtime support.

## Analysis Problem Boundary

`Cell-Cell Communication` covers methods whose primary reusable role is to infer, compare, score, or interpret communication or interaction between cells, spots, cell types, or tissue neighborhoods. In this package, the branch language includes ligand-receptor inference, graph/relay inference, spatially variable LR inference, neighborhood or interaction-effect modeling, comparative single-cell CCC, and causal pathway-aware CCC interpretation.

Layer 1 `Subtask` values are used only as branch cues. They are not separate Layer 2 completion units.

## Source Registry

Primary source registry:

`/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

Frozen candidate input:

`historical topic-subagent staging input; current candidate-freeze authority is /mnt/NAS_21T/ProjectData/BioHarness/results/layer2/cell_cell_communication/topic_scope.md`

## Bounded Retrieval Record

Retrieval date: 2026-05-01

Retrieval role: PMID/DOI/code-link verification and benchmark/review screening for the frozen candidate set. The retrieval did not open the candidate set for expansion.

Retrieval sources:

- frozen candidate input JSON
- PubMed E-utilities ESearch for missing or stale DOI/PMID checks
- PubMed E-utilities ESummary for candidate PMID/DOI verification
- PubMed Central article pages where available for code-link and benchmark/code-availability checks
- bounded PubMed ESearch/ESummary for CCC benchmark/review screening

Candidate PMID/DOI verification IDs:

```text
33597522, 40481363, 36690742, 31819264, 32350282, 35908020,
37414760, 39155292, 38007580, 41986357, 35422018, 39227721,
31577949, 40841363, 37169965, 40366019
```

Exact DOI/title recovery queries used for missing or stale identifiers:

```text
10.1038/s41592-025-02721-3[doi]        -> CellNEST, PMID 40481363
10.1038/s41467-024-51329-2[doi]        -> DeepTalk verified paper, PMID 39155292
10.1038/s41467-026-71699-z[doi]        -> COZI benchmark/method paper, PMID 41986357
10.1038/s41467-025-62988-0[doi]        -> SPIDER, PMID 40841363
10.1038/s41592-024-02408-1[doi]        -> Spacia, PMID 39227721
10.1093/nar/gkaf404[doi]               -> CausalCCC, PMID 40366019
```

Benchmark/review screening queries:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
("cell-cell communication"[Title/Abstract] OR
 "cell cell communication"[Title/Abstract] OR
 "ligand-receptor"[Title/Abstract] OR
 "cellular neighbor preference"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR comparison[Title/Abstract] OR
 review[Publication Type] OR review[Title])
```

```text
("cell-cell communication"[Title/Abstract] OR "ligand-receptor"[Title/Abstract])
AND
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR benchmarks[Title/Abstract] OR
 benchmarking[Title/Abstract] OR comparison[Title/Abstract])
```

Review result: a relevant cellular-neighbor-preference benchmark/comparison was found for the COZI/MISTy/neighbor-preference branch, and some individual method papers report paper-local benchmarks. No independent benchmark was found that jointly compares and ranks all 16 frozen candidates across LR, relay, neighborhood, spatially variable, comparative single-cell, and causal-pathway branches. The decision tree therefore uses branch-local evidence plus explicit logic review.

## Inclusion Rules

Include methods when all of the following are true:

- the method appears in the frozen candidate input for `Cell-Cell Communication`
- the row is not listed under `excluded_registry_rows`
- the method has a named reusable computational identity
- the primary role is CCC, LR inference, communication comparison, interaction-effect modeling, neighbor-preference scoring, or pathway-aware communication interpretation
- PubMed/DOI metadata verifies the method-paper identity, or the verification gap is explicitly recorded

## Exclusion Rules

Exclude or keep outside the frozen set when the primary contribution is:

- broad spatial transcriptomics ecosystem/backbone support rather than a concrete CCC method
- generic preprocessing, normalization, integration, cell typing, domain clustering, trajectory, or visualization as the main contribution
- assay/workflow description without a named reusable CCC method
- methods not present in the frozen candidate input

Special controller policy: `Giotto` is excluded as a broad backbone/ecosystem package. It appears in `excluded_registry_rows` in the input JSON and is not counted in the method table, closure facts, or audit-batch counts. The COZI benchmark discusses Giotto as a comparator in its own context; that does not reopen Giotto as a Layer 2 CCC candidate here.

## Final Candidate Freeze

| Tool Name | Layer 1 subtask cue | Evidence identity |
| --- | --- | --- |
| `CellChat` | Ligand-receptor communication inference | PMID 33597522; DOI 10.1038/s41467-021-21246-9 |
| `CellNEST` | Ligand-receptor communication inference | PMID 40481363; DOI 10.1038/s41592-025-02721-3 |
| `COMMOT` | Ligand-receptor communication inference | PMID 36690742; DOI 10.1038/s41592-022-01728-4 |
| `NicheNet` | Ligand-receptor communication inference | PMID 31819264; DOI 10.1038/s41592-019-0667-5 |
| `SpaOTsc` | Ligand-receptor communication inference | PMID 32350282; DOI 10.1038/s41467-020-15968-5 |
| `SpaTalk` | Ligand-receptor communication inference | PMID 35908020; DOI 10.1038/s41467-022-32111-8 |
| `SpatialDM` | Ligand-receptor communication inference | PMID 37414760; DOI 10.1038/s41467-023-39608-w |
| `DeepTalk` | Ligand-receptor communication inference | PMID 39155292; DOI 10.1038/s41467-024-51329-2; verified publication/code identity uses DeepTalk |
| `stLearn` | Ligand-receptor communication inference | PMID 38007580; DOI 10.1038/s41467-023-43120-6 |
| `COZI` | Neighborhood / interaction-effect modeling | PMID 41986357; DOI 10.1038/s41467-026-71699-z |
| `MISTy` | Neighborhood / interaction-effect modeling | PMID 35422018; DOI 10.1186/s13059-022-02663-5 |
| `Spacia` | Neighborhood / interaction-effect modeling | PMID 39227721; DOI 10.1038/s41592-024-02408-1 |
| `SVCA` | Neighborhood / interaction-effect modeling | PMID 31577949; DOI 10.1016/j.celrep.2019.08.077 |
| `SPIDER` | Spatially variable ligand-receptor interaction inference | PMID 40841363; DOI 10.1038/s41467-025-62988-0 |
| `Scriabin` | Ligand-receptor communication inference | PMID 37169965; DOI 10.1038/s41587-023-01782-z |
| `CausalCCC` | Causal pathway-aware communication inference | PMID 40366019; DOI 10.1093/nar/gkaf404 |

## Boundary Notes

BioHarness records method-native CCC, causal, pathway, contact, and mechanistic language as cited method evidence only. This Layer 2 package does not independently validate physical contact, mechanism, pathway causality, or experimental causal truth claims.

`CellChat` and `NicheNet` are influential CCC baselines but are not spatial-first methods by original design. They remain useful when spatial context is supplied externally or when broad communication interpretation is the target.

`stLearn` is a boundary method because its paper and ecosystem are broader than CCC; only its LR/interaction role is used in this topic.

`DeepTalk` is the unified method identity. Bounded retrieval verified the matching publication and code as `DeepTalk`; no duplicate candidate is retained.

`COZI`, `MISTy`, `Spacia`, and `SVCA` are neighborhood or interaction-effect methods, not primary ligand-receptor discovery methods.

`CausalCCC` is a web-server/pathway-interpretation layer over CCC inputs. It should not be treated as a local code package or primary LR-discovery method in this Layer 2 package.

## Topic Branch Organization

The topic is organized by method-selection cues rather than separate subtask packages:

- broad ligand-receptor communication baseline
- spatially explicit LR inference and transport/co-expression
- graph or relay-network CCC
- single-cell-resolution CCC with reference or paired data
- neighborhood / interaction-effect modeling
- spatially variable LR inference with downstream support
- comparative single-cell CCC
- causal pathway-aware interpretation of existing CCC calls

These branches support conditional selection only. They are not default execution routes.
