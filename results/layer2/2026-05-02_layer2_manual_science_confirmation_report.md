# Layer 2 Manual Science Confirmation Report

Date: 2026-05-02

Targeted inclusion correction added: 2026-05-03
Comparative split revision added: 2026-05-04

Scope: manual scientific review of all current BioHarness spatial transcriptomics Layer 2 topic directories under `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/`. This includes 18 new-style topic packages and the legacy `spatial_domain_identification` canonical reference. The Cell Type Inference candidate set was updated by explicit human scientific decision; no `formal/layer2/*.md` file was generated or modified.

## 2026-05-04 Comparative Split Addendum

Human review concluded that the old `Comparative Analysis` package was too heterogeneous for direct formal rendering. The active replacement packages are:

| Replacement topic | Slug | Candidate count | Status |
| --- | --- | ---: | --- |
| `Spatial Contrast Testing` | `spatial_contrast_testing` | 6 | Confirm with caveats after split rebuild |
| `Phenotype- / Cohort-linked Spatial Feature and Niche Analysis` | `phenotype_cohort_linked_spatial_feature_niche_analysis` | 5 | Confirm with caveats after targeted checks |

The split uses the confirmed Input / Output / Estimand standard. `MENDER` remains in Domain / Clustering as cross-topic context only. `CytoCommunity` remains in Graph / Neighborhood and is also recorded as a controlled duplicate for cohort-linked TCN/community features. No formal file was generated.

## Overall Conclusion

The Layer 2 working/evidence packages are scientifically usable as conservative method-selection evidence packages, with one later exception: the former unified `Comparative Analysis` topic was judged to require major scientific revision during the 2026-05-04 human review and has been superseded by two split working packages. The prior 2026-05-02 status counts are retained as historical context; current active review should use `Spatial Contrast Testing` and `Phenotype- / Cohort-linked Spatial Feature and Niche Analysis` instead of the old unified topic. Cell Type Inference is confirmed with caveats after human exclusion of one unresolved review-seeded row. The 2026-05-03 targeted correction added selected 2025-2026 methods to Integration, Spatial Trajectory Analysis, Graph / Neighborhood, Artifact Correction, and Super-resolution working packages only. The legacy spatial_domain_identification reference remains internally usable and was not overwritten.

The dominant cross-topic pattern is evidence heterogeneity rather than structural failure: most topics have method-paper-local evidence, sparse all-candidate benchmarks, and output branches that cannot be globally ranked. The packages generally use `unclear` or explicit caveats where resource, scale, code, reference, causal, or validation evidence is weak.

No package should be read as claiming runtime support, adapter availability, execution-ready status, callable signatures, environment capsules, or default methods.

## Status Counts

| Set | Confirm | Confirm with caveats | Needs minor errata before formal rendering | Needs major scientific revision |
| --- | ---: | ---: | ---: | ---: |
| 18 new-style topics | 0 | 15 | 3 | 0 |
| Legacy reference checked separately | 0 | 1 | 0 | 0 |

## High-Priority Unresolved Questions

- STcompare wording has been corrected: preprint status is evidence provenance/confidence caveat only, while structural comparability is the branch-fit condition. Remaining preprint-only rows such as segger still require human formal-display wording decisions. CONCERT was approved for conditional inclusion in Spatial Perturbation Analysis.
- Confirm the revised Graph / Neighborhood 20-row freeze and boundary router before formal rendering; SPARROW/SMORE code links are now resolved as trace metadata, and SpatialQuery remains preprint-only. Decide whether TopoVelo/SpaTrack, Domain / Clustering code-unclear newer rows, and super-resolution code-link gaps are acceptable as 'unclear' formal compute/code cues.
- Ensure TISSUE corrected metadata is used in any future registry promotion rather than the mismatched PMID 39609107.
- Keep causal, counterfactual, trajectory, CCC, super-resolution, imputation, and perturbation claims explicitly assumption-bounded.
- Keep `CoPro` as errata-only / hold until targeted code and metadata checks resolve whether it belongs in Spatial Trajectory Analysis or Program Discovery.

## PubMed / DOI Spot-Check Summary

NCBI ESummary spot-check was run for high-risk PMID/DOI rows. One unresolved review-seeded Cell Type Inference row was removed by human scientific decision after unresolved exact/fuzzy title checks.

| Method / issue | PMID | DOI | PubMed title check | Review interpretation |
| --- | --- | --- | --- | --- |
| DeepTalk | [39155292](https://pubmed.ncbi.nlm.nih.gov/39155292/) | `10.1038/s41467-024-51329-2` | Deciphering cell-cell communication at single-cell resolution for spatial transcriptomics with subgraph-based graph attention network | Verified publication/code identity resolved by human decision: display `DeepTalk`; use `DeepTalk` as the unified method identity. |
| TISSUE corrected | [38347138](https://pubmed.ncbi.nlm.nih.gov/38347138/) | `10.1038/s41592-024-02184-y` | TISSUE: uncertainty-calibrated prediction of single-cell spatial transcriptomics improves downstream analyses | Corrected identity verified. |
| TISSUE wrong input PMID | [39609107](https://pubmed.ncbi.nlm.nih.gov/39609107/) | `10.1002/ptr.8393` | Artemether Ameliorates Non-Alcoholic Steatohepatitis... | Confirms prior PMID mismatch. |
| SpatialScope | [38030617](https://pubmed.ncbi.nlm.nih.gov/38030617/) | `10.1038/s41467-023-43629-w` | Integrating spatial and single-cell transcriptomics data using deep generative models with SpatialScope | Filled missing package metadata. |
| scstGCN | [39656774](https://pubmed.ncbi.nlm.nih.gov/39656774/) | `10.1093/bib/bbae630` | Inferring single-cell resolution spatial gene expression via fusing spot-based spatial transcriptomics, location, and histology using GCN | DOI verified. |
| TopoVelo | [40670711](https://pubmed.ncbi.nlm.nih.gov/40670711/) | `10.1038/s41587-025-02688-8` | Topological velocity inference from spatial transcriptomic data | Identity verified; code link not confirmed by PubMed/PMC. |
| SpaTrack | [39904341](https://pubmed.ncbi.nlm.nih.gov/39904341/) | `10.1016/j.cels.2025.101194` | Inferring cell trajectories of spatial transcriptomics via optimal transport analysis | Identity verified; code link remains registry-sourced. |
| SPARROW | [40112778](https://pubmed.ncbi.nlm.nih.gov/40112778/) | `10.1016/j.cels.2025.101235` | SPARROW reveals microenvironment-zone-specific cell states in healthy and diseased tissues | Identity verified; primary code link resolved to `https://github.com/peiyaozhao617/SPARROW`, with `https://github.com/aifimmunology/SPARROW` noted as accessible fork/mirror. |
| SMORE | [39754206](https://pubmed.ncbi.nlm.nih.gov/39754206/) | `10.1186/s13059-024-03467-5` | SMORE: spatial motifs reveal patterns in cellular architecture of complex tissues | Identity verified; primary code link resolved to `https://github.com/zsamadi/SMORE`; archive `10.5281/zenodo.14510210`. |
| TrimNN | [40830137](https://pubmed.ncbi.nlm.nih.gov/40830137/) | `10.1038/s41467-025-63141-7` | TrimNN: characterizing cellular community motifs for studying multicellular topological organization in complex tissues | Added to Graph / Neighborhood by targeted freeze update for motif/topology branch. |
| scNiche | [39956823](https://pubmed.ncbi.nlm.nih.gov/39956823/) | `10.1038/s41467-025-57029-9` | Identification and characterization of cell niches in tissue from spatial omics data at single-cell resolution | Added to Graph / Neighborhood by targeted freeze update for single-cell-resolution niche representation. |
| CellNiche | [42020427](https://pubmed.ncbi.nlm.nih.gov/42020427/) | `10.1038/s41467-026-71759-4` | CellNiche represents cellular microenvironments in atlas-scale spatial omics data with contrastive learning | Added to Graph / Neighborhood by targeted freeze update for atlas-scale microenvironment embeddings; very recent evidence. |
| DECIPHER | [40866331](https://pubmed.ncbi.nlm.nih.gov/40866331/) | `10.1038/s41467-025-63140-8` | DECIPHER for learning disentangled cellular embeddings in large-scale heterogeneous spatial omics data | Added to Graph / Neighborhood by targeted freeze update for spatial-context/disentangled embeddings. |
| CONCERT | [41292874](https://pubmed.ncbi.nlm.nih.gov/41292874/) | `10.1101/2025.11.08.686890` | CONCERT predicts niche-aware perturbation responses in spatial transcriptomics | PubMed-indexed bioRxiv preprint. |
| Celcomen | [41851134](https://pubmed.ncbi.nlm.nih.gov/41851134/) | `10.1038/s41467-026-69856-5` | Celcomen: spatial causal disentanglement for single-cell and tissue perturbation modeling | Peer-reviewed but very recent method-paper-local evidence. |
| SPaSE | [40480226](https://pubmed.ncbi.nlm.nih.gov/40480226/) | `10.1016/j.cels.2025.101301` | SPaSE: Spatially resolved pathology scores using optimal transport on spatial transcriptomics data | Identity verified; code access still unclear. |
| SpaLinker | [40480216](https://pubmed.ncbi.nlm.nih.gov/40480216/) | `10.1016/j.xgen.2025.100893` | SpaLinker identifies phenotype-associated spatial tumor microenvironment features by integrating bulk and spatial sequencing data | Identity verified; code access still unclear. |
| segger | [40161614](https://pubmed.ncbi.nlm.nih.gov/40161614/) | `10.1101/2025.03.14.643160` | Segger: Fast and accurate cell segmentation of imaging-based spatial transcriptomics data | PubMed-indexed bioRxiv preprint. |
| Spotiflow | [40481364](https://pubmed.ncbi.nlm.nih.gov/40481364/) | `10.1038/s41592-025-02662-x` | Spotiflow: accurate and efficient spot detection for fluorescence microscopy with deep stereographic flow regression | Boundary row: spot detection, not complete segmentation. |
| Piscis | [41265398](https://pubmed.ncbi.nlm.nih.gov/41265398/) | `10.1016/j.cels.2025.101448` | Piscis: A loss estimator of the F1 score enables accurate spot detection in fluorescence microscopy images via deep learning | Boundary row: spot detection, not complete segmentation. |
| CelloType | [39578628](https://pubmed.ncbi.nlm.nih.gov/39578628/) | `10.1038/s41592-024-02513-1` | CelloType: a unified model for segmentation and classification of tissue images | Boundary row: segmentation/classification coupling. |
| SpaMosaic | [42032296](https://pubmed.ncbi.nlm.nih.gov/42032296/) | `10.1038/s41588-026-02573-3` | Mosaic integration of spatial multi-omics with SpaMosaic | Added to Integration; code trace only. |
| INSPIRE | [42045691](https://pubmed.ncbi.nlm.nih.gov/42045691/) | `10.1038/s41588-026-02579-x` | Interpretable, flexible and spatially aware integration of multiple spatial transcriptomics datasets from diverse sources | Added to Integration. |
| SpatialCOC | [41991905](https://pubmed.ncbi.nlm.nih.gov/41991905/) | `10.1038/s41467-026-71882-2` | SpatialCOC: an integrative framework for spatial continuous mapping and cross-omics correction in spatial multi-omics data | Added to Integration. |
| SSpMosaic | not recorded in this pass | `10.1016/j.xgen.2025.101105` | Robust integration and annotation of single-cell and spatial omics data using interpretable gene programs | Added to Integration with Cell Type Inference / Program Discovery / Domain boundary caveats. |
| STORIES | [41184554](https://pubmed.ncbi.nlm.nih.gov/41184554/) | `10.1038/s41592-025-02855-4` | STORIES: learning cell fate landscapes from spatial transcriptomics using optimal transport | Added to Spatial Trajectory Analysis with fate-landscape caveat. |
| stVCR | [41820580](https://pubmed.ncbi.nlm.nih.gov/41820580/) | `10.1038/s41592-026-03010-3` | stVCR: spatiotemporal dynamics of single cells | Added to Spatial Trajectory Analysis with temporal/model caveat. |
| SpaNiche | not recorded in this pass | `10.1186/s13059-026-04069-z` | SpaNiche: spatial niche analysis to explore colocalization patterns and cellular interactions in spatial transcriptomics data | Added to Graph / Neighborhood; interaction wording is descriptive, not causal/physical communication proof. |
| SpatialQuery | preprint-only | `10.64898/2026.04.22.720136v1` | SpatialQuery: scalable discovery and molecular characterization of multicellular motifs from spatial omics data | Added to Graph / Neighborhood with preprint-only caveat. |
| SPLIT | [42062553](https://pubmed.ncbi.nlm.nih.gov/42062553/) | `10.1038/s41592-026-03089-8` | Resolving sensitivity, specificity and signal contamination in Xenium spatial transcriptomics | Added to Artifact Correction as Xenium contamination / transcript-spillover branch. |
| Thor | [40764306](https://pubmed.ncbi.nlm.nih.gov/40764306/) | `10.1038/s41467-025-62593-1` | Thor: a platform for cell-level investigation of spatial transcriptomics and histology | Added to Super-resolution as histology-aware cell-level reconstruction boundary row. |
| CoPro | preprint-only | `10.64898/2026.04.17.719309` | Dissecting the coordinated progression of cell states in spatial transcriptomics with CoPro | Errata-only / hold; code and topic boundary unresolved. |

## Topic-By-Topic Status

### Artifact Correction (`artifact_correction`)

- Status: Confirm with caveats
- Candidate count: 4
- Scientific reason: Four artifact mechanisms are distinct: spot swapping, image vignetting, segmentation-error molecular admixture, and Xenium signal contamination/transcript spillover. No cross-branch benchmark supports a global order.
- Blocking issue: None for working package.
- Metadata issue: SPLIT PMID/DOI identity verified; no unresolved PMID/DOI issue found in this pass.
- Benchmark / review status: Method-paper evidence only; logic review is branch-local.
- Formal rendering recommendation: May proceed to later formal rendering after human approval; preserve branch-specific caveats.

### Cell-Cell Communication (`cell_cell_communication`)

- Status: Confirm with caveats
- Candidate count: 16
- Scientific reason: The package records method-native CCC, causal, pathway, contact, and mechanistic claims as cited method evidence only; BioHarness does not independently validate physical contact, mechanism, pathway causality, or experimental causal truth claims.
- Blocking issue: None after human approval to use `DeepTalk` as the unified method identity.
- Metadata issue: Giotto is correctly excluded as backbone. `DeepTalk` maps to PMID 39155292 / DOI 10.1038/s41467-024-51329-2 and the DeepTalk code identity; Spacia, Scriabin, and CausalCCC code-access details remain non-blocking later-audit caveats.
- Benchmark / review status: No all-candidate CCC benchmark. COZI/neighbor-preference evidence and method-paper comparisons support branch-local logic only.
- Formal rendering recommendation: May proceed to later formal rendering after human approval; retain Giotto exclusion, DeepTalk identity, and non-blocking code-access caveats.

### Cell Type Inference (`cell_type_inference`)

- Status: Confirm with caveats
- Candidate count: 35
- Scientific reason: Placement/reconstruction methods are accepted as a Cell Type Inference boundary branch, and histology/image/nuclear-morphology suitability should be checked immediately after the scRNA-reference decision.
- Blocking issue: None.
- Metadata issue: Many code links remain unclear.
- Benchmark / review status: Independent benchmark evidence is strongest for classic deconvolution; broader method-paper and review evidence supports other branches.
- Formal rendering recommendation: May proceed to later formal rendering after human approval.

### Comparative Analysis (`comparative_analysis`)

- Status: Superseded by 2026-05-04 split; old unified package should not be formally rendered.
- Candidate count: 0 active rows in the old package; previous 9-row table archived for provenance.
- Scientific reason: The old package mixed direct contrast testing, structurally matched/registered pattern comparison, pathology scoring, cohort motif representation, and bulk/clinical phenotype feature linking.
- Replacement packages: `spatial_contrast_testing` and `phenotype_cohort_linked_spatial_feature_niche_analysis`.
- Formal rendering recommendation: Use the replacement packages after human approval; preserve Input / Output / Estimand gates.

### Spatial Contrast Testing (`spatial_contrast_testing`)

- Status: Confirm with caveats after split rebuild
- Candidate count: 6
- Scientific reason: The package is bounded to explicit condition/group/covariate/matched-tissue/registered-template contrasts whose outputs are DE genes, effect estimates, differentially patterned genes, or registered statistical maps.
- Blocking issue: None for working package after split; `STcompare` remains structurally matched only, with preprint status treated as evidence provenance/confidence caveat rather than a selection gate.
- Metadata issue: `STcompare` has preprint DOI and public GitHub trace but no PubMed PMID in targeted check.
- Benchmark / review status: `SpatialGEE` comparative statistical evidence is branch-local only; no cross-branch ranking.
- Formal rendering recommendation: May proceed only after human approval with contrast gates and structural-comparability caveats preserved.

### Phenotype- / Cohort-linked Spatial Feature and Niche Analysis (`phenotype_cohort_linked_spatial_feature_niche_analysis`)

- Status: Confirm with caveats after targeted checks
- Candidate count: 5
- Scientific reason: The package is bounded to phenotype/cohort/disease-control/clinical outcome/bulk-linked input signals whose outputs are phenotype-associated spatial features, pathology scores, cohort motifs, or clinical niches.
- Blocking issue: None for working package after `TiRank` and `stClinic` targeted metadata checks.
- Metadata issue: `TiRank` and `stClinic` DOI/PMID/code traces verified; `CytoCommunity` duplicate uses PMID 38191930 / DOI 10.1038/s41592-023-02124-2; `SpaLinker` code access remains unclear. `SPaSE` identity remains verified but is no longer an active positive row.
- Benchmark / review status: Method-paper-local evidence; no all-candidate benchmark.
- Formal rendering recommendation: May proceed only after human approval with phenotype-label leakage, cohort confounding, transfer, and association-not-causality caveats preserved.

### Data Quality Control (`data_quality_control`)

- Status: Confirm with caveats after 2026-05-05 targeted ovrlpy supplement
- Candidate count: 3
- Scientific reason: SpotSweeper, ovrlpy, and stPipe operate at different QC stages/platforms; local or vertical artifact flags can overlap with true tissue biology.
- Blocking issue: None.
- Metadata issue: PMID/DOI identities and code/documentation traces are acceptable for Layer 2 evidence; ovrlpy added from targeted PubMed/Nature/GitHub/PyPI verification.
- Benchmark / review status: No direct three-method benchmark; branch-local logic is appropriate.
- Formal rendering recommendation: May proceed to later formal rendering after human approval with post-count, post-transcript-localization, and upstream-preprocessing branch separation preserved.

### Denoising / Imputation (`denoising_imputation`)

- Status: Confirm with caveats
- Candidate count: 7
- Scientific reason: SpotGF is a denoising/gene-filtering boundary row. Diffusion, graph, reference, and model-prior methods require hallucination and circular-validation safeguards.
- Blocking issue: None.
- Metadata issue: No unresolved PMID/DOI issue found in this pass.
- Benchmark / review status: Method-paper-local evidence; no all-candidate independent benchmark.
- Formal rendering recommendation: May proceed to later formal rendering after human approval with SpotGF boundary language preserved.

### Domain / Clustering (`domain_clustering`)

- Status: Needs minor errata before formal rendering
- Candidate count: 37
- Scientific reason: The 37-method convergence package is candidate-complete against the working registry, but human review tightened the branch semantics: `conST` should be treated as a multimodal/image-aware contrastive boundary row, not as explicit spatial multi-omics integration, and the decision tree should ask input evidence/task form before multi-slice or model-family gates.
- Blocking issue: None for candidate freeze or Layer 2 package structure; minor formal-rendering errata remain for conST wording, tree-root ordering, and targeted code/metadata checks.
- Metadata issue: Nine rows have unclear code access (`IRIS`, `SpatialGlue`, `BINARY`, `stDyer`, `SpatialLeiden`, `GraphPCA`, `iIMPACT`, `MNMST`, `SpaDo`); this is acceptable as Layer 2 metadata but should be targeted before formal positive display or engineering audit.
- Benchmark / review status: Legacy spatial_domain_identification logic and spatial clustering benchmarks support branch-local cues only; newer venue-sweep rows and broad-representation claims remain method-paper-local or benchmark-coverage-unclear.
- Formal rendering recommendation: Hold formal rendering until the listed minor errata and targeted metadata/code checks are resolved; after human approval this topic can return to Confirm with caveats. Do not use legacy benchmark evidence as a global ranking.

### Graph / Neighborhood (`graph_neighborhood`)

- Status: Needs minor errata before formal rendering
- Candidate count: 20
- Scientific reason: Niche clustering, motifs/topology, microenvironment metrics, factorization, reference-assisted reconstruction, atlas-scale/disentangled embeddings, and foundation-model representations are not interchangeable.
- Blocking issue: Targeted 20-row freeze update and boundary-hardening must be accepted before formal rendering.
- Metadata issue: SPARROW and SMORE code links are resolved; `TrimNN`, `scNiche`, `CellNiche`, and `DECIPHER` were added through a targeted Layer 1 supplement; `SpaNiche` and `SpatialQuery` were added through the 2026-05-03 targeted inclusion correction, with SpatialQuery preprint-only caveat. `stClinic` remains watchlist; `MNMST` routes to Domain / Clustering; `STCase` routes to Cell-Cell Communication.
- Benchmark / review status: Mostly method-paper-local or task-adjacent evidence. Spatial clustering/domain benchmarks may support domain-like branches task-adjacently, especially `SOTIP`, but must not be used as a global Graph ranking or as evidence for motif, CCC, foundation-model, reconstruction, or gene-representation branches.
- Formal rendering recommendation: Hold formal rendering until the revised 20-row freeze, Step 0 Domain/CCC router, and watchlist/exclusion policy are accepted.

### Integration (`integration`)

- Status: Confirm with caveats
- Candidate count: 22
- Scientific reason: Coordinate alignment, count-level batch correction, latent integration, multimodal modeling, spatiotemporal alignment, stitching, and 2D/3D reconstruction are different deliverables with different failure modes. The decision tree now starts from the primary output object before method-family or resource gates.
- Blocking issue: None.
- Metadata issue: Targeted code-link check resolved the 12 previously unclear code-access rows; targeted inclusion correction added SpaMosaic, INSPIRE, SpatialCOC, and SSpMosaic with public code traces (`CAST`, `DeST-OT`, `GPSA`, `PRECAST`, `SANTO`, `SLAT`, `STAIR`, `MaskGraphene`, `spCLUE`, `VR-Omics`, `MISO`, `Crescendo`). Code links remain trace metadata only.
- Benchmark / review status: Relevant alignment and multi-slice benchmarks exist, but no universal 18-method ranking.
- Formal rendering recommendation: May proceed to later formal rendering after human approval; preserve output-first branch separation and row-level risk cues for over-alignment, signal removal, modality imbalance, model opacity, and representation-objective ambiguity.

### Normalization / Feature Selection (`normalization_feature_selection`)

- Status: Confirm with caveats
- Candidate count: 2
- Scientific reason: SpaNorm normalization can remove biology when library size tracks tissue signal. scGIST depends on reference/label/tissue-transfer assumptions and fixed-panel constraints.
- Blocking issue: None.
- Metadata issue: PMID/DOI identities verified; code access traceable for both rows.
- Benchmark / review status: No direct two-method benchmark because the rows solve different branches.
- Formal rendering recommendation: May proceed to later formal rendering after human approval.

### Program Discovery (`program_discovery`)

- Status: Confirm with caveats after minor boundary wording errata
- Candidate count: 13
- Scientific reason: Factors, topics, modules, co-expression networks, regulatory-program annotations, tissue modules, and gradients are not direct biological mechanisms without validation.
- Blocking issue: None after removing Layer 2 problem-dispatch wording and reducing `SpaGRN` to a boundary-sensitive regulatory-program row.
- Metadata issue: Nine rows retain pending/manual-review code access. `SPACE` is tied to the Cell Systems 2024 tissue-module method by existing PMID/DOI/title evidence.
- Benchmark / review status: No all-candidate independent benchmark; logic review only.
- Formal rendering recommendation: May proceed to later formal rendering after human approval; preserve conservative code-access caveats, `SPACE` identity wording, branch-local selection, and no-runtime/no-default boundaries.

### Segmentation (`segmentation`)

- Status: Confirm with caveats
- Candidate count: 8
- Scientific reason: Spotiflow and Piscis are spot-detection boundary rows, CelloType is segmentation/classification boundary, and segger is preprint-level.
- Blocking issue: None for working package.
- Metadata issue: segger is PubMed-indexed as bioRxiv preprint. Spotiflow, Piscis, and CelloType PMID/DOI identities are verified.
- Benchmark / review status: Mostly method-paper-local evidence; output objects differ across spot detection, segmentation, transcript assignment, and image classification.
- Formal rendering recommendation: May proceed to later formal rendering after human approval; keep boundary rows branch-local.

### Spatial Clonal Analysis (`spatial_clonal_analysis`)

- Status: Confirm with caveats
- Candidate count: 5
- Scientific reason: Allele-specific CNA, total CNA, point-mutation clone deconvolution, sparse spatial CNA, and copy-number-profile subclones are not interchangeable.
- Blocking issue: None.
- Metadata issue: No unresolved PMID/DOI issue found in this pass.
- Benchmark / review status: Method-paper evidence only; no all-candidate benchmark.
- Formal rendering recommendation: May proceed to later formal rendering after human approval.

### Spatial Gene Prediction (`spatial_gene_prediction`)

- Status: Confirm with caveats
- Candidate count: 11
- Scientific reason: Histology-to-expression, reference-assisted enhancement, high-resolution reconstruction, uncertainty calibration, and visual-omics prediction have different validation needs.
- Blocking issue: None for package; future registry promotion should correct TISSUE metadata.
- Metadata issue: TISSUE corrected to PMID 38347138 / DOI 10.1038/s41592-024-02184-y. SpatialScope filled as PMID 38030617 / DOI 10.1038/s41467-023-43629-w.
- Benchmark / review status: No all-candidate benchmark. TISSUE reports uncertainty-calibration benchmarks but is not a generator.
- Formal rendering recommendation: May proceed to later formal rendering after human approval using corrected package metadata.

### Spatial Perturbation Analysis (`spatial_perturbation_analysis`)

- Status: Confirm with caveats
- Candidate count: 5
- Scientific reason: Human review approved expansion from two counterfactual/response candidates to five branch-local methods, adding observed perturbation-effect detection (`Spatial-ZEDNet`), perturbation-responsive spatial pattern prioritization (`River`), and spatiotemporal perturbation regulator prioritization (`Perturb-STNet`). Causal and counterfactual claims remain assumption-bound.
- Blocking issue: None after human approval to conditionally include CONCERT and add Spatial-ZEDNet, River, and Perturb-STNet.
- Metadata issue: CONCERT is PubMed-indexed bioRxiv preprint; Celcomen and River are Nature Communications articles; Spatial-ZEDNet and Perturb-STNet are PubMed-indexed Briefings in Bioinformatics articles. CDS/counterfactual directional cell-cell influence is assigned to CCC boundary review, not this topic.
- Benchmark / review status: No independent five-candidate benchmark; method-paper-local benchmarks and case studies support branch-local logic only.
- Formal rendering recommendation: May proceed to later formal rendering after human approval; preserve CONCERT preprint caveat and causal/counterfactual hedge.

### Spatial Trajectory Analysis (`spatial_trajectory_analysis`)

- Status: Confirm with caveats
- Candidate count: 9
- Scientific reason: Velocity, optimal-transport trajectory, pseudotime, and causal-trajectory outputs are model interpretations, not direct proof of biological direction or causation.
- Blocking issue: None for working package.
- Metadata issue: TopoVelo and SpaTrack PMID/DOI identities verified; STORIES and stVCR identities/code traces added; TopoVelo code link and SpaTrack publisher-level code evidence remain unresolved. CoPro remains errata-only / hold.
- Benchmark / review status: Method-paper-local evidence; no all-candidate trajectory benchmark.
- Formal rendering recommendation: May proceed to later formal rendering after human approval with code cue left conservative.

### Spatially Variable Gene Detection (`spatially_variable_gene_detection`)

- Status: Confirm with caveats
- Candidate count: 14
- Scientific reason: Overall SVG, ctSVG, conditional SVG, gene-centric pattern mining, and SVG clustering are related but not interchangeable. ctSVG branches inherit cell-type label bias.
- Blocking issue: None.
- Metadata issue: Several code links remain unclear by frozen input; no severe identity issue found.
- Benchmark / review status: Broad SVG and ctSVG benchmarks support branch-local guidance only.
- Formal rendering recommendation: May proceed to later formal rendering after human approval.

### Super-resolution (`super_resolution`)

- Status: Confirm with caveats
- Candidate count: 9
- Scientific reason: Histology-guided and generated outputs can be visually plausible but biased; pseudo-cell/single-cell-resolution outputs and Thor-style cell-level reconstruction are inferred reconstructions, not direct molecule measurements.
- Blocking issue: None for working package.
- Metadata issue: scstGCN DOI verified as 10.1093/bib/bbae630. iStar, scstGCN, iSCALE, and STAGE code links remain unclear; Thor PMID/DOI identity and public code trace were added as a platform/workflow boundary row.
- Benchmark / review status: Method-paper evidence only; no all-candidate super-resolution benchmark.
- Formal rendering recommendation: May proceed to later formal rendering after human approval with generated-output caveats preserved in source package.

### Spatial domain identification (legacy canonical reference) (`spatial_domain_identification`)

- Status: Confirm with caveats
- Candidate count: 27
- Scientific reason: Legacy pilot fields remain provisional for closest alternatives, key differences, cross-slice support, batch handling, memory burden, and scale sensitivity.
- Blocking issue: None; reference only.
- Metadata issue: No overwrite performed. Candidate count and legacy closure are internally consistent.
- Benchmark / review status: Benchmark/review evidence supports branch-local domain-identification logic only.
- Formal rendering recommendation: Use as legacy canonical reference; do not overwrite in this pass.

## Verification Summary

- Post-correction parse of edited field_registry.json files: pass.
- Post-correction parse of edited method_table.json files: pass.
- Post-correction parse of edited method_table.csv files: pass.
- JSON/CSV/MD candidate names match for each edited topic package after the targeted correction.
- Working registry boundary check: the 2026-05-03 targeted additions were not written into the Layer 1 registry; they are Layer 2 working/evidence corrections only.
- Closure count check: edited topic closures record candidate counts matching their method tables.
- formal/layer2 contains only README.md and method_selection_standard.md.
- Prohibited-claim grep found only negated, boundary, or non-goal mentions; no positive runtime-support, execution-ready, default-method, adapter-availability, callable-signature, or environment-capsule claim was accepted.

## Boundary Statement

This report is a manual science confirmation and errata queue. It does not expand Layer 1, does not generate formal Layer 2 files, does not plan Layer 3/4 runtime surfaces, and does not claim default methods, execution readiness, runtime support, adapter availability, callable signatures, or environment capsules.

## 2026-05-05 Comparative Boundary Follow-up

Human review accepted the revised boundary that Layer 1 owns Analysis Problem assignment and Layer 2 performs only branch-local method selection.

- `SPaSE` was removed from the active working positive set because spatial pathology scoring is outside the currently active Analysis Problem set. This is not a rejection of its DOI/PMID identity.
- `CytoCommunity` was added as a controlled duplicate to `Phenotype- / Cohort-linked Spatial Feature and Niche Analysis` for cohort- or phenotype-associated tissue cellular neighborhood/community features. The original `Graph / Neighborhood` row remains active.
- `STcompare` remains in `Spatial Contrast Testing`; preprint status is evidence provenance and confidence caveat only. Structural comparability is the branch-fit condition.
- No formal Layer 2 rendering was generated or modified.
