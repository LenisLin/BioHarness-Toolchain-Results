# Graph / Neighborhood Topic Scope

## Layer 2 Unit

Analysis Problem: `Graph / Neighborhood`

This package treats the Layer 1 `Analysis Problem` as the completion unit. Registry `Subtask` values are used only as branch cues, not as separate Layer 2 packages.

This package supports method selection for spatial neighborhood, niche, microenvironment, factor, motif, and spatial-context representation tasks. It does not define runtime surfaces, wrappers, callable signatures, adapters, or default methods.

## Bounded Retrieval Record

Retrieval date: `2026-05-01`

Local sources read:

- `/home/lenislin/Experiment/projects/BioHarness-Toolchain-ST/README.md`
- `/home/lenislin/Experiment/projects/BioHarness-Toolchain-ST/docs/10_scope.md`
- `/home/lenislin/Experiment/projects/BioHarness-Toolchain-ST/docs/15_layer1_method_registry_and_substrate_transition.md`
- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/TOPIC_COMPLETION_STANDARD.md`
- `/mnt/NAS_21T/ProjectData/BioHarness/results/formal/layer2/method_selection_standard.md`
- `/tmp/bioharness_layer2_subagents/input/graph_neighborhood.json`

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
"scHolography" AND PubMed
"SIGEL context-aware genomic representation" AND PubMed
("spatial transcriptomics" OR "spatially resolved transcriptomics") AND (neighborhood OR niche OR microenvironment OR "cellular neighborhood") AND (benchmark OR review OR comparison)
"Benchmarking spatial clustering methods with spatially resolved transcriptomics data"
```

Representative benchmark/review sources found:

- Yuan et al., Nature Methods 2024 spatial clustering benchmark, DOI `10.1038/s41592-024-02215-8`, PMID `38491270`.
- Method-paper-local benchmarks for CellCharter, ENVI, NNMF, NicheCompass, Nicheformer, CytoCommunity, SMORE, scHolography, and SIGEL.
- No independent benchmark was found that jointly compares all 14 frozen Graph / Neighborhood candidates on one neighborhood-specific task.

## Inclusion Rules

- Include only methods in the frozen candidate input JSON.
- Keep broad Graph / Neighborhood methods if their primary useful output is a niche, neighborhood, microenvironment, graph representation, motif, factor, reconstructed neighborhood, or spatial-context embedding.
- Retain boundary methods when the neighborhood role is explicit but overlaps another analysis problem, and label that overlap in evidence notes and caveats.
- Use `unclear` rather than over-specific labels for weak code, memory, scale, cohort, or prior-dependence evidence.

## Exclusion Rules

- Do not add methods outside the frozen candidate set, even if benchmark/review screening reveals related tools.
- Exclude pure downstream domain clustering, cell-cell communication, deconvolution, segmentation, or spatially variable gene tools unless they are already in the frozen candidate set and have a neighborhood/graph role.
- Do not promote any Layer 1 registry row to runtime support, adapter availability, rewrite priority, or default method status.

## Final Candidate Freeze

| Candidate | Registry branch cue |
| --- | --- |
| `CellCharter` | identify, characterize, and compare cellular niches across spatial omics samples |
| `ENVI` | represent cellular neighborhoods through covariance structure and infer spatial context or missing expression |
| `mNSF` | extract shared gene loadings and sample-specific spatial factors across multiple sections or samples |
| `NNMF` | identify overlapping spatial neighborhoods and multicellular gene signatures at large scale |
| `NSF` | derive interpretable spatial factors from a single spatial sample or limited sample set |
| `SOTIP` | model microenvironments and their relationships for heterogeneity, domain, and differential microenvironment analysis |
| `MESA` | quantify tissue-state spatial diversity, hotspots, cold spots, and ecological neighborhood shifts |
| `NicheCompass` | learn interpretable communication-aware niche embeddings and spatial gene program activities |
| `Nicheformer` | transfer or predict spatial context, niche labels, and neighborhood composition using foundation-model representations |
| `SPARROW` | jointly represent cell states and cellular organization to identify microenvironment-zone-specific states |
| `CytoCommunity` | discover unsupervised or supervised tissue cellular neighborhoods from cell phenotypes |
| `SMORE` | discover overrepresented ordered spatial motifs in cellular architecture |
| `scHolography` | reconstruct single-cell spatial neighborhoods and support 3D tissue visualization |
| `SIGEL` | learn spatially informed gene representations from genomic context for downstream neighborhood-adjacent analyses |


Candidate count: 14.

Excluded registry rows from input: none.
