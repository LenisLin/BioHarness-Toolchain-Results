# Graph / Neighborhood Topic Scope

## Layer 2 Unit

Analysis Problem: `Graph / Neighborhood`

This package treats the Layer 1 `Analysis Problem` as the completion unit. Registry `Subtask` values are used only as branch cues, not as separate Layer 2 packages.

This package supports method selection for spatial neighborhood, niche, microenvironment, factor, motif, soft multicellular signature, reconstructed-neighborhood, and spatial-context representation tasks. It does not define runtime surfaces, wrappers, callable signatures, adapters, environment capsules, or default methods.

## Bounded Retrieval Record

Original retrieval date: `2026-05-01`

Targeted freeze reopen date: `2026-05-03`; targeted literature correction date: `2026-05-03`

Local sources read:

- `/home/lenislin/Experiment/projects/BioHarness-Toolchain-ST/README.md`
- `/home/lenislin/Experiment/projects/BioHarness-Toolchain-ST/docs/10_scope.md`
- `/home/lenislin/Experiment/projects/BioHarness-Toolchain-ST/docs/15_layer1_method_registry_and_substrate_transition.md`
- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/TOPIC_COMPLETION_STANDARD.md`
- `/mnt/NAS_21T/ProjectData/BioHarness/results/formal/layer2/method_selection_standard.md`
- `/tmp/bioharness_layer2_subagents/input/graph_neighborhood.json`
- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-03_graph_neighborhood_targeted_freeze_update.md`

Bounded PubMed and article-screening queries used for PMID/DOI/code-link and review/benchmark checks:

```text
<PMID>[pmid] or <DOI>[doi] for each frozen method row when PMID/DOI was present.
"CellCharter reveals spatial cell niches" AND PubMed
"The covariance environment defines cellular niches" AND PubMed
"multi-sample non-negative spatial factorization" AND PubMed
"Neighborhood nonnegative matrix factorization" AND PubMed
"Nonnegative spatial factorization applied to spatial genomics" AND PubMed
"SOTIP is a versatile method" AND PubMed
"Quantitative characterization of tissue states" AND PubMed
"NicheCompass" AND PubMed
"Nicheformer" AND PubMed
"SPARROW reveals microenvironment-zone-specific" AND PubMed
"CytoCommunity" AND PubMed
"SMORE spatial motifs" AND PubMed
"TrimNN" AND PubMed
"scNiche" AND PubMed
"CellNiche represents cellular microenvironments" AND PubMed
"DECIPHER" AND "spatial omics" AND PubMed
"scHolography" AND PubMed
"SIGEL context-aware genomic representation" AND PubMed
"SpaNiche spatial niche analysis" AND PubMed
"SpatialQuery multicellular motifs spatial omics" AND bioRxiv
("spatial transcriptomics" OR "spatially resolved transcriptomics") AND (neighborhood OR niche OR microenvironment OR "cellular neighborhood") AND (benchmark OR review OR comparison)
"Benchmarking spatial clustering methods with spatially resolved transcriptomics data"
```

Representative benchmark/review sources found:

- Yuan et al., Nature Methods 2024 spatial clustering benchmark, DOI `10.1038/s41592-024-02215-8`, PMID `38491270`.
- Method-paper-local benchmarks for CellCharter, ENVI, NNMF, NicheCompass, Nicheformer, CytoCommunity, SMORE, TrimNN, scNiche, CellNiche, DECIPHER, scHolography, and SIGEL.
- No independent benchmark was found that jointly compares all 20 targeted Graph / Neighborhood candidates on one neighborhood-specific task.

## Step 0 Boundary Router

Route out to `Domain / Clustering` / legacy `spatial_domain_identification` when the primary endpoint is hard tissue/domain/region labels, segmentation-like tissue regions, spatial domain identification, or spatial clustering.

Route out to `Cell-Cell Communication` when the primary endpoint is ligand-receptor edges, sender-receiver pairs, communication scores, neighbor-preference effects, pathway CCC, or causal CCC interpretation.

Stay in `Graph / Neighborhood` only when the primary endpoint is neighborhood, niche, microenvironment state, cellular motif, spatial factor, soft multicellular signature, reconstructed neighborhood, or spatial-context representation.

## Method-Specific Boundary Notes

- `SOTIP` stays in Graph / Neighborhood only for microenvironment modeling and differential microenvironment relationships; hard domain labels route to Domain / Clustering.
- `NicheCompass` stays in Graph / Neighborhood for niche/program embeddings; ligand-receptor edge inference, sender-receiver claims, or causal CCC interpretation routes to Cell-Cell Communication.
- `CytoCommunity` stays in Graph / Neighborhood for tissue cellular neighborhoods; neighbor-preference scoring routes to Cell-Cell Communication.
- `SMORE`, `TrimNN`, and `SpatialQuery` stay in Graph / Neighborhood for motifs and topology; CCC/pathway interpretation is downstream only.
- `DECIPHER` stays in Graph / Neighborhood for spatial-context and disentangled cellular embeddings; hard domain clustering or CCC claims route out.

## Benchmark Boundary

Spatial clustering/domain benchmarks may support domain-like branches task-adjacently, especially `SOTIP`, but must not be used as a global Graph / Neighborhood ranking or as evidence for motif, CCC, foundation-model, reconstruction, or gene-representation branches.

## Inclusion Rules

- Include methods in the original frozen candidate input JSON plus the 2026-05-03 targeted Graph supplement for `TrimNN`, `scNiche`, `CellNiche`, and `DECIPHER`, and the 2026-05-03 targeted inclusion correction for `SpaNiche` and `SpatialQuery`.
- Keep broad Graph / Neighborhood methods if their primary useful output is a niche, neighborhood, microenvironment state, graph representation, motif, factor, soft multicellular signature, reconstructed neighborhood, or spatial-context embedding.
- Retain boundary methods only when the neighborhood role is explicit, and label Domain / Clustering or CCC overlap in evidence notes and caveats.
- Use `unclear` rather than over-specific labels for weak memory, scale, cohort, prior-dependence, or evidence-strength claims.

## Exclusion Rules

- Do not conduct a full Graph / Neighborhood redo in this pass.
- Keep `stClinic` on watchlist because its center of gravity is clinical multi-slice / multi-omics integration.
- Exclude `MNMST` from this reopen because its primary endpoint is domain identification.
- Exclude `STCase` from this reopen because its primary endpoint is Cell-Cell Communication.
- Exclude pure downstream domain clustering, cell-cell communication, deconvolution, segmentation, or spatially variable gene tools unless they are already in the revised freeze and have an explicit neighborhood/graph role.
- Do not promote any Layer 1 registry row to runtime support, adapter availability, rewrite priority, or default-method status.

## Final Candidate Freeze

| Candidate | Registry branch cue |
| --- | --- |
| `CellCharter` | discrete cellular niches and cross-sample niche comparison |
| `ENVI` | covariance-defined neighborhood representation and reference-assisted spatial context |
| `mNSF` | multi-sample alignment-free spatial factors |
| `NNMF` | large-scale overlapping multicellular gene signatures |
| `NSF` | single-sample interpretable spatial factors |
| `SOTIP` | microenvironment modeling and differential microenvironment relationships; hard domain labels route out |
| `MESA` | ecological tissue-state diversity, hotspots, cold spots, and neighborhood shifts |
| `NicheCompass` | communication-aware niche/program embeddings; LR edge inference routes out |
| `Nicheformer` | foundation-model spatial context, niche labels, and neighborhood composition |
| `SPARROW` | microenvironment-zone-specific cell states |
| `CytoCommunity` | tissue cellular neighborhoods from cell phenotypes; neighbor-preference scoring routes out |
| `SMORE` | ordered spatial motifs and cellular architecture topology |
| `SpatialQuery` | scalable multicellular motif discovery and molecular characterization; preprint-only |
| `TrimNN` | cellular community motifs and multicellular topological organization |
| `scNiche` | single-cell-resolution cell niche identification and characterization |
| `SpaNiche` | spatial niche, colocalization, and microenvironment interaction-pattern analysis |
| `CellNiche` | atlas-scale cellular microenvironment embeddings |
| `DECIPHER` | spatial-context and disentangled cellular embeddings |
| `scHolography` | single-cell spatial neighborhood reconstruction and 3D tissue visualization |
| `SIGEL` | spatially informed gene representations and context-aware downstream analysis |

Candidate count: 20.

Excluded / held records from this targeted reopen: `stClinic` watchlist; `MNMST` excluded as Domain / Clustering; `STCase` excluded as Cell-Cell Communication.
