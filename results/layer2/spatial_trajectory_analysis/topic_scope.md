# Spatial Trajectory Analysis Topic Scope

## Layer 2 Boundary

Layer 1 Analysis Problem: `Spatial Trajectory Analysis`

Layer 2 completion unit: the full Analysis Problem, not individual subtasks or method packages.

This package supports method selection for spatial transcriptomics trajectory tasks, including spatial differentiation trajectories, spatial RNA velocity, spatiotemporal pseudotime/embedding, and causal trajectory inference. It does not define executable commands, package entrypoints, adapter boundaries, callable signatures, environment profiles, runtime validation, or BioHarness runtime support.

## Frozen Candidate Input

Input file:

`/tmp/bioharness_layer2_subagents/input/spatial_trajectory_analysis.json`

Candidate count: 9

Frozen candidates:

| Tool | Registry subtask cue | Frozen PMID | Frozen DOI |
| --- | --- | --- | --- |
| `SpaTrack` | Spatial trajectory inference | 39904341 | 10.1016/j.cels.2025.101194 |
| `STORIES` | Spatial fate-landscape inference | 41184554 | 10.1038/s41592-025-02855-4 |
| `stVCR` | Spatiotemporal single-cell dynamics | 41820580 | 10.1038/s41592-026-03010-3 |
| `spVelo` | Spatial trajectory inference | 40790237 | 10.1186/s13059-025-03701-8 |
| `STT` | Spatial trajectory inference | 38755322 | 10.1038/s41592-024-02266-x |
| `SIRV` | Spatial RNA velocity inference | 39108639 | 10.1093/nargab/lqae100 |
| `PearlST` | Spatiotemporal structure / trajectory inference | 38812530 | 10.34133/research.0390 |
| `TopoVelo` | Spatial RNA velocity inference | 40670711 | 10.1038/s41587-025-02688-8 |
| `CASCAT` | Spatial causal trajectory inference | 40829806 | 10.1093/nar/gkaf791 |

Subtask values are used as branch cues only. They do not create separate Layer 2 packages.

## Bounded Retrieval Record

Retrieval date: 2026-05-01; targeted 2025-2026 inclusion correction added 2026-05-03

Retrieval sources:

- Frozen candidate input JSON.
- NCBI PubMed E-utilities `esummary` for candidate PMID/DOI identity verification.
- NCBI PubMed E-utilities `efetch` abstract retrieval for method-paper scope checks.
- NCBI PMC full-text pages, when available through the PubMed record, for code-link and code-availability checks.
- NCBI PubMed E-utilities `esearch`/`esummary` for benchmark and review screening.

Candidate verification query:

```text
esummary.fcgi?db=pubmed&id=39904341,41184554,41820580,40790237,38755322,39108639,38812530,40670711,40829806&retmode=json
```

Abstract retrieval query:

```text
efetch.fcgi?db=pubmed&id=39904341,40790237,38755322,39108639,38812530,40670711,40829806&rettype=abstract&retmode=text
```

Benchmark/review screening queries:

```text
("spatial transcriptomics"[Title/Abstract] OR "spatially resolved transcriptomics"[Title/Abstract])
AND
(trajectory[Title/Abstract] OR pseudotime[Title/Abstract] OR "RNA velocity"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR comparison[Title/Abstract] OR review[Publication Type])
```

```text
(SpaTrack OR spVelo OR "spatial transition tensor" OR SIRV OR PearlST OR TopoVelo OR CASCAT)
AND
(benchmark OR comparison OR review)
```

```text
"spatial trajectory inference"[Title/Abstract]
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR comparison[Title/Abstract])
```

Retrieval notes:

- All nine candidate PMIDs and DOIs were confirmed by PubMed/DOI checks after the targeted correction.
- PubMed/title-level checks confirmed the main method-paper topic claims for all nine candidates.
- PMC code-availability checks confirmed primary code/source links for `spVelo`, `STT`, `SIRV`, `PearlST`, and `CASCAT`.
- `SpaTrack` has a code link in the frozen input JSON, but this pass did not confirm a PubMed/PMC code-availability section for it.
- `TopoVelo` has PubMed identity and method-scope evidence, but this pass did not confirm a PubMed/PMC code link.

## Inclusion Rules

Include a method only if all of the following hold:

- It appears in the frozen candidate input JSON or the 2026-05-03 targeted inclusion correction.
- It belongs to `Spatial Trajectory Analysis` by the Layer 1 Analysis Problem field.
- It has a trajectory-relevant role: spatial trajectory topology, spatial RNA velocity, pseudotime/spatiotemporal structure, state-transition modeling, or causal trajectory inference.
- It can be described using the shared Layer 2 field model and the topic-specific decision cues in `field_registry.json`.

## Exclusion Rules

Exclude any method that:

- Is not present in the frozen input JSON.
- Is primarily a spatial domain, clustering, cell type inference, communication, perturbation, clonal, or preprocessing method without a trajectory role in the frozen input.
- Appears only as a comparator inside a method paper or benchmark.
- Would require adding a new candidate outside the targeted correction scope.

No excluded registry rows were provided in the frozen input.

## Final Candidate Freeze

The final candidate freeze after targeted correction is:

`SpaTrack`, `spVelo`, `STT`, `SIRV`, `PearlST`, `TopoVelo`, `CASCAT`, `STORIES`, `stVCR`.

The targeted correction added `STORIES` and `stVCR`; `CoPro` remains errata-only / hold pending targeted metadata and code verification.

