# Layer 2 Manual Science Confirmation Report

Date: 2026-05-02

Scope: manual scientific review of all current BioHarness spatial transcriptomics Layer 2 topic directories under `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/`. This includes 18 new-style topic packages and the legacy `spatial_domain_identification` canonical reference. The Cell Type Inference candidate set was updated by explicit human scientific decision; no `formal/layer2/*.md` file was generated or modified.

## Overall Conclusion

The Layer 2 working/evidence packages are scientifically usable as conservative method-selection evidence packages. I found no topic requiring major scientific revision. Fifteen of the 18 new-style topics are confirmed with caveats. Three topics need minor errata or human policy decisions before formal rendering: Comparative Analysis, Domain / Clustering, and Program Discovery. Cell Type Inference is confirmed with caveats after human exclusion of one unresolved review-seeded row. The legacy spatial_domain_identification reference remains internally usable and was not overwritten.

The dominant cross-topic pattern is evidence heterogeneity rather than structural failure: most topics have method-paper-local evidence, sparse all-candidate benchmarks, and output branches that cannot be globally ranked. The packages generally use `unclear` or explicit caveats where resource, scale, code, reference, causal, or validation evidence is weak.

No package should be read as claiming runtime support, adapter availability, execution-ready status, callable signatures, environment capsules, or default methods.

## Status Counts

| Set | Confirm | Confirm with caveats | Needs minor errata before formal rendering | Needs major scientific revision |
| --- | ---: | ---: | ---: | ---: |
| 18 new-style topics | 0 | 15 | 3 | 0 |
| Legacy reference checked separately | 0 | 1 | 0 | 0 |

## High-Priority Unresolved Questions

- Decide whether remaining preprint-only rows such as STcompare and segger may appear in formal Layer 2 outputs and under what wording. CONCERT was approved for conditional inclusion in Spatial Perturbation Analysis.
- Decide whether SPARROW/SMORE, TopoVelo/SpaTrack, Domain / Clustering code-unclear newer rows, and super-resolution code-link gaps are acceptable as 'unclear' formal compute/code cues.
- Ensure TISSUE corrected metadata is used in any future registry promotion rather than the mismatched PMID 39609107.
- Keep causal, counterfactual, trajectory, CCC, super-resolution, imputation, and perturbation claims explicitly assumption-bounded.

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
| SPARROW | [40112778](https://pubmed.ncbi.nlm.nih.gov/40112778/) | `10.1016/j.cels.2025.101235` | SPARROW reveals microenvironment-zone-specific cell states in healthy and diseased tissues | Identity verified; primary code link unresolved. |
| SMORE | [39754206](https://pubmed.ncbi.nlm.nih.gov/39754206/) | `10.1186/s13059-024-03467-5` | SMORE: spatial motifs reveal patterns in cellular architecture of complex tissues | Identity verified; primary code link unresolved. |
| CONCERT | [41292874](https://pubmed.ncbi.nlm.nih.gov/41292874/) | `10.1101/2025.11.08.686890` | CONCERT predicts niche-aware perturbation responses in spatial transcriptomics | PubMed-indexed bioRxiv preprint. |
| Celcomen | [41851134](https://pubmed.ncbi.nlm.nih.gov/41851134/) | `10.1038/s41467-026-69856-5` | Celcomen: spatial causal disentanglement for single-cell and tissue perturbation modeling | Peer-reviewed but very recent method-paper-local evidence. |
| SPaSE | [40480226](https://pubmed.ncbi.nlm.nih.gov/40480226/) | `10.1016/j.cels.2025.101301` | SPaSE: Spatially resolved pathology scores using optimal transport on spatial transcriptomics data | Identity verified; code access still unclear. |
| SpaLinker | [40480216](https://pubmed.ncbi.nlm.nih.gov/40480216/) | `10.1016/j.xgen.2025.100893` | SpaLinker identifies phenotype-associated spatial tumor microenvironment features by integrating bulk and spatial sequencing data | Identity verified; code access still unclear. |
| segger | [40161614](https://pubmed.ncbi.nlm.nih.gov/40161614/) | `10.1101/2025.03.14.643160` | Segger: Fast and accurate cell segmentation of imaging-based spatial transcriptomics data | PubMed-indexed bioRxiv preprint. |
| Spotiflow | [40481364](https://pubmed.ncbi.nlm.nih.gov/40481364/) | `10.1038/s41592-025-02662-x` | Spotiflow: accurate and efficient spot detection for fluorescence microscopy with deep stereographic flow regression | Boundary row: spot detection, not complete segmentation. |
| Piscis | [41265398](https://pubmed.ncbi.nlm.nih.gov/41265398/) | `10.1016/j.cels.2025.101448` | Piscis: A loss estimator of the F1 score enables accurate spot detection in fluorescence microscopy images via deep learning | Boundary row: spot detection, not complete segmentation. |
| CelloType | [39578628](https://pubmed.ncbi.nlm.nih.gov/39578628/) | `10.1038/s41592-024-02513-1` | CelloType: a unified model for segmentation and classification of tissue images | Boundary row: segmentation/classification coupling. |

## Topic-By-Topic Status

### Artifact Correction (`artifact_correction`)

- Status: Confirm with caveats
- Candidate count: 3
- Scientific reason: Three artifact mechanisms are distinct: spot swapping, image vignetting, and segmentation-error molecular admixture. No cross-branch benchmark supports a global order.
- Blocking issue: None for working package.
- Metadata issue: No unresolved PMID/DOI issue found in this pass.
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

- Status: Needs minor errata before formal rendering
- Candidate count: 9
- Scientific reason: Differential expression, registration/template comparison, spatial-pattern comparison, and cohort feature transfer are related but not interchangeable.
- Blocking issue: No working-package blocker, but STcompare preprint status needs human approval before formal inclusion.
- Metadata issue: STcompare has bioRxiv DOI but no PubMed PMID in this pass. SPaSE and SpaLinker PMID/DOI identities are verified; code access remains unclear.
- Benchmark / review status: SpatialGEE supports one statistical-comparison branch. No 9-method joint benchmark.
- Formal rendering recommendation: Proceed only after deciding how preprint-only STcompare should be displayed or held.

### Data Quality Control (`data_quality_control`)

- Status: Confirm with caveats
- Candidate count: 2
- Scientific reason: SpotSweeper and stPipe operate at different QC stages; local artifact flags can overlap with true tissue biology.
- Blocking issue: None.
- Metadata issue: PMID/DOI identities and Bioconductor documentation links are acceptable for Layer 2 evidence.
- Benchmark / review status: No direct two-method benchmark; branch-local logic is appropriate.
- Formal rendering recommendation: May proceed to later formal rendering after human approval.

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

- Status: Confirm with caveats
- Candidate count: 14
- Scientific reason: Niche clustering, motifs, microenvironment metrics, factorization, reference-assisted reconstruction, and foundation-model embeddings are not interchangeable.
- Blocking issue: None for working package.
- Metadata issue: SPARROW and SMORE PMID/DOI identities are verified; primary code links remain unresolved.
- Benchmark / review status: Mostly method-paper-local or task-adjacent evidence; spatial clustering benchmark evidence is only indirect.
- Formal rendering recommendation: May proceed to later formal rendering after human approval with SPARROW/SMORE code cue left unclear.

### Integration (`integration`)

- Status: Confirm with caveats
- Candidate count: 18
- Scientific reason: Coordinate alignment, count-level batch correction, latent integration, multimodal modeling, spatiotemporal alignment, stitching, and 2D/3D reconstruction are different deliverables with different failure modes. The decision tree now starts from the primary output object before method-family or resource gates.
- Blocking issue: None.
- Metadata issue: Targeted code-link check resolved the 12 previously unclear code-access rows (`CAST`, `DeST-OT`, `GPSA`, `PRECAST`, `SANTO`, `SLAT`, `STAIR`, `MaskGraphene`, `spCLUE`, `VR-Omics`, `MISO`, `Crescendo`). Code links remain trace metadata only.
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

- Status: Needs minor errata before formal rendering
- Candidate count: 13
- Scientific reason: Factors, topics, modules, co-expression networks, regulons, and gradients are not direct biological mechanisms without validation.
- Blocking issue: SPACE identity and multiple pending/manual-review code links should be resolved or explicitly held before formal display.
- Metadata issue: Nine rows retain pending/manual-review code access. SPACE is name-ambiguous and should be tied explicitly to the Cell Systems 2024 tissue-module method.
- Benchmark / review status: No all-candidate independent benchmark; logic review only.
- Formal rendering recommendation: Resolve SPACE identity wording and code-access cue policy before formal rendering.

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
- Candidate count: 7
- Scientific reason: Velocity, optimal-transport trajectory, pseudotime, and causal-trajectory outputs are model interpretations, not direct proof of biological direction or causation.
- Blocking issue: None for working package.
- Metadata issue: TopoVelo and SpaTrack PMID/DOI identities verified; TopoVelo code link and SpaTrack publisher-level code evidence remain unresolved.
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
- Candidate count: 8
- Scientific reason: Histology-guided and generated outputs can be visually plausible but biased; pseudo-cell/single-cell-resolution outputs are inferred reconstructions, not direct molecule measurements.
- Blocking issue: None for working package.
- Metadata issue: scstGCN DOI verified as 10.1093/bib/bbae630. iStar, scstGCN, iSCALE, and STAGE code links remain unclear.
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

- Parsed all new-style field_registry.json files plus legacy spatial_domain_identification field registry: pass.
- Parsed all new-style method_table.json files plus legacy subtable JSON: pass.
- Parsed all new-style method_table.csv files plus legacy subtable CSV: pass.
- JSON/CSV/MD candidate names match for the 18 new-style packages. Legacy Markdown embeds the table as a fenced CSV block; JSON/CSV names match and the fenced table was manually interpreted.
- Working registry comparison: all new-style topic candidates match Include rows after the approved DeepTalk identity correction, except Cell-Cell Communication where Giotto is intentionally excluded as backbone and `DeepTalk` is used as the method identity per human decision.
- Closure count check: all closures either record the numeric candidate count or name the full frozen set matching method_table counts.
- formal/layer2 contains only README.md and method_selection_standard.md.
- Prohibited-claim grep found only negated, boundary, or non-goal mentions; no positive runtime-support, execution-ready, default-method, adapter-availability, callable-signature, or environment-capsule claim was accepted.

## Boundary Statement

This report is a manual science confirmation and errata queue. It does not expand Layer 1, does not generate formal Layer 2 files, does not plan Layer 3/4 runtime surfaces, and does not claim default methods, execution readiness, runtime support, adapter availability, callable signatures, or environment capsules.
