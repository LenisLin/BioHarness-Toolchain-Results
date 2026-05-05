# Graph / Neighborhood Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded PubMed/review pass, evidence spot-checks, logic review, Step 0 boundary router, conditional decision tree, and coverage ledger for the revised 20-method `Graph / Neighborhood` candidate freeze. It does not define execution surfaces, wrappers, adapter boundaries, callable signatures, environments, runtime support, or default methods.

## Reading Rules

- Keep the revised 20-method targeted freeze: `CellCharter`, `ENVI`, `mNSF`, `NNMF`, `NSF`, `SOTIP`, `MESA`, `NicheCompass`, `Nicheformer`, `SPARROW`, `CytoCommunity`, `SMORE`, `TrimNN`, `scNiche`, `CellNiche`, `DECIPHER`, `scHolography`, `SIGEL`, `SpaNiche`, `SpatialQuery`.
- Treat the 2026-05-03 addition of `TrimNN`, `scNiche`, `CellNiche`, and `DECIPHER` as a targeted freeze update, not a full Graph / Neighborhood redo.
- Use registry `Subtask` values as branch cues only; they are not separate Layer 2 completion units.
- Treat compute and code access as audit cues. They do not imply BioHarness runtime support.
- Use benchmark and method-paper comparisons only for branch-local ordering, tie-breaks, or caveats. Do not turn them into a global ranking.
- Treat `Closest Alternatives`, `Key Difference`, resource burden, scale sensitivity, and scientific-risk caveats as Layer 2 synthesized judgment unless the method row states direct support.

## Review Pass

### PubMed candidate verification

The revised candidate rows were checked through bounded PubMed/DOI searches and article metadata screening. The pass confirmed the method-paper identity for rows with PMIDs in the input, resolved the missing SOTIP metadata to DOI `10.1038/s41467-022-34867-5`, PMID `36443314`, and confirmed primary code traces for `SPARROW`, `SMORE`, `TrimNN`, `scNiche`, `SpaNiche`, `CellNiche`, `DECIPHER`, and `SpatialQuery`.

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `CellCharter` | 38066188 | 10.1038/s41588-023-01588-4 | Method-paper identity and code source confirmed. |
| `ENVI` | 38565973 | 10.1038/s41587-024-02193-4 | Method-paper identity and code source confirmed. |
| `mNSF` | 40457480 | 10.1186/s13059-025-03601-x | Published method-paper identity and code source confirmed. |
| `NNMF` | 41546049 | 10.1186/s13059-025-03846-6 | Method-paper identity and code source confirmed. |
| `NSF` | 36587187 | 10.1038/s41592-022-01687-w | Method-paper identity and code source confirmed. |
| `SOTIP` | 36443314 | 10.1038/s41467-022-34867-5 | Method-paper identity resolved; Graph use restricted to microenvironment modeling. |
| `MESA` | 40169791 | 10.1038/s41588-025-02119-z | Method-paper identity and code source confirmed. |
| `NicheCompass` | 40102688 | 10.1038/s41588-025-02120-6 | Method-paper identity and code source confirmed; CCC edge interpretation routes out. |
| `Nicheformer` | 41168487 | 10.1038/s41592-025-02814-z | Method-paper identity and code source confirmed. |
| `SPARROW` | 40112778 | 10.1016/j.cels.2025.101235 | Method-paper identity confirmed; upstream GitHub primary code source confirmed, with aifimmunology fork/mirror noted. |
| `CytoCommunity` | 38191930 | 10.1038/s41592-023-02124-2 | Method-paper identity and code source confirmed; neighbor-preference scoring routes out. |
| `SMORE` | 39754206 | 10.1186/s13059-024-03467-5 | Method-paper identity and primary GitHub/Zenodo code trace confirmed. |
| `SpatialQuery` | preprint-only | 10.64898/2026.04.22.720136v1 | bioRxiv identity and GitHub code trace confirmed; preprint-only caveat retained. |
| `TrimNN` | 40830137 | 10.1038/s41467-025-63141-7 | Method-paper identity and primary GitHub/Zenodo code trace confirmed. |
| `scNiche` | 39956823 | 10.1038/s41467-025-57029-9 | Method-paper identity and primary GitHub/Zenodo code trace confirmed. |
| `SpaNiche` | not recorded in this pass | 10.1186/s13059-026-04069-z | Method-paper DOI/publisher identity and GitHub code trace confirmed; niche/interaction wording kept descriptive. |
| `CellNiche` | 42020427 | 10.1038/s41467-026-71759-4 | Method-paper identity and primary GitHub/Zenodo code trace confirmed; very recent evidence. |
| `DECIPHER` | 40866331 | 10.1038/s41467-025-63140-8 | Method-paper identity and primary GitHub/docs/Zenodo code trace confirmed. |
| `scHolography` | 38915088 | 10.1186/s13059-024-03299-3 | Method-paper identity and code source confirmed. |
| `SIGEL` | 40983914 | 10.1186/s13059-025-03748-7 | Method-paper identity confirmed; public GitHub listed but article availability wording still warrants later audit. |

### Benchmark/review screening

Query concept:

```text
("spatial transcriptomics" OR "spatially resolved transcriptomics")
AND (neighborhood OR niche OR microenvironment OR "cellular neighborhood")
AND (benchmark OR review OR comparison)
```

Screening conclusion: no suitable independent benchmark was found that jointly evaluates all 18 frozen methods as Graph / Neighborhood methods. The strongest external benchmark is the Nature Methods 2024 spatial clustering benchmark, which is task-adjacent for `SOTIP` and domain-like branches but is not a full neighborhood/niche benchmark. Several method papers include their own benchmarks, but these are task-local and often author-run.

Logic-review consequence: the decision tree below is branch-local. It does not rank all methods globally and does not name a default method.

## Evidence Strength Caveats

- Benchmark scope mismatch: spatial-domain clustering benchmarks do not fully cover motif discovery, covariance neighborhoods, reconstructed neighborhoods, ecological metrics, foundation-model transfer, atlas-scale embeddings, or disentangled spatial-context representations.
- Author-run benchmarks: CellCharter, NicheCompass, NNMF, CytoCommunity, scHolography, SMORE, TrimNN, scNiche, SpaNiche, CellNiche, DECIPHER, Nicheformer, SIGEL, and preprint-only SpatialQuery include useful method-paper or preprint-local comparisons, but these are not independent all-candidate evaluations.
- Reference and prior bias: ENVI and scHolography depend on reference matching; NicheCompass depends partly on communication/regulatory priors; Nicheformer depends on a large pretrained corpus.
- Annotation compression: CytoCommunity, SMORE, TrimNN, SpaNiche, and SpatialQuery can be powerful for cell-phenotype or motif maps, but phenotype labels and graph construction can obscure continuous cell states.
- Factor and embedding interpretability: NSF, mNSF, NNMF, SIGEL, CellNiche, and DECIPHER require biological interpretation of factors, signatures, or embeddings; they are not automatically validated niches or mechanisms.
- Boundary risk: hard tissue-domain labels route to Domain / Clustering; ligand-receptor edges, sender-receiver pairs, communication scores, neighbor-preference effects, pathway CCC, and causal CCC interpretation route to Cell-Cell Communication.
- Code access is trace metadata only. It is not runtime support, adapter availability, callable signatures, or environment support.

## Decision Tree

### Step 0. Route out before choosing a Graph method

If the primary endpoint is hard tissue/domain/region labels, spatial domain identification, segmentation-like tissue regions, or spatial clustering:

- Route to `Domain / Clustering` / legacy `spatial_domain_identification`.
- Treat `SOTIP` as Graph / Neighborhood only for microenvironment modeling and differential microenvironment relationships.

If the primary endpoint is ligand-receptor edges, sender-receiver pairs, communication scores, neighbor-preference effects, pathway CCC, or causal CCC interpretation:

- Route to `Cell-Cell Communication`.
- Treat `NicheCompass` as Graph / Neighborhood only for niche/program embeddings.
- Treat `CytoCommunity` as Graph / Neighborhood only for tissue cellular neighborhoods; neighbor-preference scoring routes out.
- Treat `SMORE`, `TrimNN`, and `SpatialQuery` as motif/topology methods; CCC/pathway interpretation is downstream only.

Stay here only when the primary endpoint is neighborhood, niche, microenvironment state, cellular motif, spatial factor, soft multicellular signature, reconstructed neighborhood, or spatial-context representation.

If the task asks for runtime support, package commands, adapters, or callable signatures:

- Stop at Layer 2 selection logic.
- Use later Layer 3/4 audit artifacts when available.

### Step 1. What is the desired Graph / Neighborhood output object?

If the desired output is discrete niches or tissue cellular neighborhoods:

- Consider `CellCharter` for broad spatial omics niche discovery and cross-sample comparison.
- Consider `CytoCommunity` for tissue cellular neighborhoods from segmented cell-phenotype maps.
- Consider `scNiche` for single-cell-resolution niche identification and characterization.
- Consider `SpaNiche` when the endpoint is spatial niche, colocalization, and microenvironment interaction-pattern analysis without LR/causal communication claims.

If the desired output is microenvironment-zone-specific cell states:

- Consider `SPARROW` when the central question is how cell states vary across microenvironment zones or cellular organization contexts.

If the desired output is motifs or topology:

- Consider `SMORE` for ordered spatial motifs in cellular architecture.
- Consider `TrimNN` for cellular community motifs and multicellular topological organization.
- Consider `SpatialQuery` for scalable discovery or querying of multicellular motifs and molecular characterization, with preprint-only caveat.
- Carry graph construction, annotation, triangulation, and null-model caveats explicitly.

If the desired output is atlas-scale or disentangled context embeddings:

- Consider `CellNiche` for atlas-scale cellular microenvironment embeddings.
- Consider `DECIPHER` for disentangled cellular embeddings that separate cell-intrinsic and spatial-context signals.
- Consider `Nicheformer` for foundation-model transfer or prediction of spatial context, niche labels, or neighborhood composition.

If the desired output is ecological metrics, diversity maps, hotspots, or tissue-state shifts:

- Consider `MESA`.
- Consider task-adjacent `SOTIP` when microenvironment graph modeling and differential microenvironment relationships are central.

If the desired output is continuous factors or soft gene-program neighborhoods:

- Consider `NSF` for single-sample interpretable spatial factors.
- Consider `mNSF` for multi-sample alignment-free factorization.
- Consider `NNMF` for large-scale overlapping multicellular gene signatures.

If the desired output is communication-aware niche programs:

- Consider `NicheCompass` only when interpretable niche/program embeddings are the endpoint and curated priors are acceptable.
- Route LR edges, sender-receiver pairs, communication scores, pathway CCC, or causal CCC interpretation to Cell-Cell Communication.

If the desired output is reference-assisted reconstruction or transferred spatial context:

- Consider `ENVI` for covariance-defined niche inference and expression imputation when a matched scRNA reference is available.
- Consider `scHolography` for transcriptome-to-space neighborhood reconstruction when a spatial reference and scRNA query are available.

If the desired output is gene-level spatial context:

- Consider `SIGEL` for spatially informed gene representations and context-aware genomic embeddings.

### Step 2. Is external reference, annotation, prior, or pretrained transfer acceptable?

If no external reference or prior should drive the analysis:

- Read `CellCharter`, `scNiche`, `SpaNiche`, `NSF`, `mNSF`, `NNMF`, `MESA`, `SOTIP` for microenvironment modeling, `CellNiche`, `DECIPHER`, or the reference-free branch of `SIGEL` depending on the desired output.

If a matched scRNA-seq reference is available and intended:

- Consider `ENVI` for covariance-defined niche inference and expression imputation.
- Consider `scHolography` for transcriptome-to-space neighborhood reconstruction.

If cell-phenotype annotations are central:

- Consider `CytoCommunity`, `SMORE`, or `TrimNN` depending on whether the endpoint is TCNs, ordered motifs, or cellular community motifs.

If curated communication or regulatory priors are central to the niche-embedding question:

- Consider `NicheCompass`.
- Keep prior-database coverage and false-mechanism caveats visible.

If foundation-model transfer is explicitly desired and high compute is acceptable:

- Consider `Nicheformer`.
- Keep corpus-bias, auditability, and resource caveats visible.

### Step 3. Is the analysis multi-sample, cohort-level, or atlas-scale?

If the task is multi-sample factor interpretation without reliable spatial alignment:

- Consider `mNSF`.

If the task is large-scale overlapping signatures across many cells or slices:

- Consider `NNMF`.

If the task is cross-sample or cohort niche comparison:

- Consider `CellCharter` or `MESA`, depending on whether labels or ecological metrics are the output.

If the task is supervised condition-specific neighborhoods from labeled tissue images:

- Consider `CytoCommunity`.

If the task is atlas-scale graph deep learning or context embedding:

- Consider `CellNiche`, `DECIPHER`, `NicheCompass`, or `Nicheformer`, depending on whether the endpoint is microenvironment embeddings, disentangled context, interpretable programs, or foundation-model transfer.

### Step 4. Resource and audit gate

If the analysis must remain CPU-first:

- Read first by resource cue: `CellCharter`, `NNMF`, `NSF`, `SOTIP`, `MESA`, `SMORE`.
- Keep `NSF` and `mNSF` under extra memory scrutiny despite CPU labels.

If GPU/deep-learning workflows are acceptable:

- Expand reading by branch fit to: `ENVI`, `mNSF`, `NicheCompass`, `Nicheformer`, `SPARROW`, `CytoCommunity`, `TrimNN`, `scNiche`, `CellNiche`, `DECIPHER`, `scHolography`, `SIGEL`, and `SpatialQuery`.
- Treat `Nicheformer`, `CellNiche`, and `DECIPHER` as higher-audit embedding branches, not routine defaults.

If code access must be resolved before deeper engineering work:

- All 20 rows now have traceable public code metadata in this Layer 2 package; `SpatialQuery` remains preprint-only.
- Treat code access as evidence trace only; it does not imply runtime support, local package availability, adapter readiness, environment capsules, or callable signatures.
- Treat `SIGEL` as code-available but flagged for wording inconsistency in the article's availability statements.

## Router Acceptance Checks

| Query shape | Route |
| --- | --- |
| Tumor/stroma/interface labels, hard tissue regions, or spatial domain clusters | `Domain / Clustering` / legacy `spatial_domain_identification` |
| Ligand-receptor edges, sender-receiver pairs, pathway CCC, communication scores, or neighbor-preference scores | `Cell-Cell Communication` |
| Ordered/topological motifs or cellular community motifs | `Graph / Neighborhood` |
| Cell niche representation, microenvironment states, soft multicellular signatures, or spatial-context embeddings | `Graph / Neighborhood` |
| SOTIP-like domain labels as final endpoint | `Domain / Clustering` |
| SOTIP-like microenvironment relationships as final endpoint | `Graph / Neighborhood` |

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `CellCharter` | discrete niche discovery and cross-sample comparison | cluster granularity and preprocessing sensitivity |
| `ENVI` | covariance niche representation and scRNA-assisted inference | reference mismatch and covariance-choice bias |
| `mNSF` | multi-sample alignment-free factors | high memory/scale pressure and factor interpretability |
| `NNMF` | large-scale soft spatial signatures | soft outputs may not match hard-domain expectations |
| `NSF` | single-sample spatial factors | high memory examples and factor labeling ambiguity |
| `SOTIP` | microenvironment graph modeling only | domain-label endpoints route to Domain / Clustering |
| `MESA` | ecological diversity and hotspots | descriptive metrics are not mechanistic causality |
| `NicheCompass` | communication-aware niche/program embeddings | LR edge or CCC interpretation routes to CCC |
| `Nicheformer` | foundation-model spatial context transfer | high compute and corpus-bias risk |
| `SPARROW` | microenvironment-zone-specific cell states | model assumptions and zone definitions need validation |
| `CytoCommunity` | cell-phenotype TCN discovery | annotation compression and neighbor-preference route-out risk |
| `SMORE` | ordered spatial motif discovery | null-model and graph-construction dependence |
| `SpatialQuery` | multicellular motif discovery and molecular characterization | preprint-only evidence and graph/null-model dependence |
| `TrimNN` | cellular community motif and topology discovery | triangulation and annotation dependence |
| `scNiche` | single-cell-resolution niche discovery | graph-view and feature-construction dependence |
| `SpaNiche` | spatial niche and colocalization-pattern analysis | colocalization is not causal or physical communication proof |
| `CellNiche` | atlas-scale microenvironment embeddings | contrastive embedding bias and very recent evidence |
| `DECIPHER` | disentangled spatial-context embeddings | disentanglement assumptions and route-out boundary risk |
| `scHolography` | spatial neighborhood reconstruction | reference-match dependence |
| `SIGEL` | spatial gene representation learning | indirect neighborhood evidence and code wording audit |

## Review Decision

The current evidence supports a conditional Layer 2 decision tree, not a universal method ranking. The revised package status is `Needs minor errata + targeted 20-row freeze update + boundary-hardening before formal rendering` until the updated artifacts are accepted. Runtime support, adapter scope, environment capsules, callable signatures, and default methods remain outside this package.
