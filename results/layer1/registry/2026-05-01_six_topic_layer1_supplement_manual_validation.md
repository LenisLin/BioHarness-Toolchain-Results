# Six-Topic Layer 1 Supplement Manual Validation

Date: 2026-05-01

Updated working copy: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

## Scope

This pass supplements the current Layer 1 working copy for six analysis problems:

- `Artifact Correction`
- `Normalization / Feature Selection`
- `Program Discovery`
- `Spatial Clonal Analysis`
- `Spatial Perturbation Analysis`
- `Spatial Trajectory Analysis`

This is a Layer 1 registry supplement only. It does not mark any topic Layer 2 complete and does not imply Layer 3/4 runtime support.

## Retrieval Sources

Retrieval used PubMed ESearch/EFetch plus targeted candidate checks. The main query families were:

- spatial transcriptomics artifact correction, contamination, vignetting, ambient RNA, and spot swapping
- spatial transcriptomics normalization, spatial-aware normalization, HVG/feature selection
- spatial transcriptomics program discovery, topic modeling, factor discovery, gene modules, and co-expression
- spatial transcriptomics trajectory inference, pseudotime, spatial RNA velocity, and spatiotemporal structure
- spatial transcriptomics clonal analysis, subclone detection, copy-number alteration, and tumor clone deconvolution
- spatial transcriptomics perturbation analysis, spatial CRISPR, perturbation response, counterfactual modeling, and causal modeling

Candidate metadata was verified through PubMed XML records for PMID, DOI, venue, and publication date where date sensitivity mattered.

## Added Rows

| Analysis Problem | Method | PMID | DOI | Reason |
|---|---|---:|---|---|
| Artifact Correction | Non-parametric Vignetting Correction | 35274110 | 10.1007/978-3-030-87237-3_45 | Direct image-level artifact correction for sparse spatial transcriptomics images. |
| Normalization / Feature Selection | SpaNorm | 40301877 | 10.1186/s13059-025-03565-y | Direct spatial-aware normalization method separating library-size effects from spatial biology. |
| Program Discovery | STAMP | 39407016 | 10.1038/s41592-024-02463-8 | Direct spatial topic/gene-module output; cross-topic row distinct from its Domain / Clustering placement. |
| Program Discovery | SpaTM | 41359801 | 10.1093/bib/bbaf657 | Direct spatial topic model for spatially informed transcriptional programs. |
| Program Discovery | FISHFactor | 37039825 | 10.1093/bioinformatics/btad183 | Probabilistic spatial factor model for subcellular-resolution spatial transcriptomics. |
| Program Discovery | SpatialCorr | 36590683 | 10.1016/j.crmeth.2022.100369 | Detects gene sets with spatially varying correlation structure. |
| Program Discovery | SpaceX | 36179087 | 10.1093/bioinformatics/btac645 | Estimates spatial co-expression networks, fitting coordinated program/module discovery. |
| Spatial Trajectory Analysis | SIRV | 39108639 | 10.1093/nargab/lqae100 | Direct spatial RNA velocity method for spatial differentiation trajectories. |
| Spatial Trajectory Analysis | PearlST | 38812530 | 10.34133/research.0390 | Direct spatiotemporal-structure method with trajectory/pseudotime output. |
| Spatial Clonal Analysis | STARCH | 33022659 | 10.1088/1478-3975/abbe99 | Direct older ST clone/CNA inference method, retained as broad Layer 1 evidence. |
| Spatial Clonal Analysis | Tumoroscope | 39472583 | 10.1038/s41467-024-53374-3 | Probabilistic model for spatial clone localization and clone-specific expression. |
| Spatial Clonal Analysis | SlideCNA | 40317049 | 10.1186/s13059-025-03573-y | Direct spatial CNA method with stated potential for spatial subclone detection. |
| Spatial Perturbation Analysis | Celcomen | 41851134 | 10.1038/s41467-026-69856-5 | Peer-reviewed computational counterfactual spatial transcriptomics perturbation model. |

## Held Or Excluded During This Pass

| Candidate | Decision | Reason |
|---|---|---|
| SpotClean | Existing | Already present under Artifact Correction. |
| SpotSweeper | Existing elsewhere | Already present under Data Quality Control; not duplicated into Artifact Correction in this pass. |
| SpaDiff | Hold | PubMed-indexed bioRxiv/preprint record; not promoted as an Include row. |
| SoupX / DecontX / CellBender | Exclude | Ambient/background methods, but primary evidence is droplet sc/snRNA-seq rather than spatial transcriptomics artifact correction. |
| SpatialDE / trendsceek / SPARK / SPARK-X / SOMDE / MERINGUE / scGCO / nnSVG / BSP / scBSP / HEARTSVG | Exclude from this topic | These are already covered by the separate Spatially Variable Gene Detection topic or are direct SVG methods, not normalization/HVG preprocessing rows. |
| Gene count normalization in imaging-based SRT | Hold | Strong normalization guidance, but not a named reusable method row in this registry schema. |
| NSF / mNSF | Existing elsewhere / hold | Already represented under Graph / Neighborhood; not duplicated into Program Discovery in this pass. |
| BayesTME | Hold | Strong method, but broader end-to-end TME/deconvolution model; previous local notes treated it as boundary-heavy for Program Discovery. |
| STModule / SPACE / TGR-NMF / SMART / SPOTlight | Hold or exclude | Either tissue-module/domain/deconvolution oriented or too boundary-heavy for the current Program Discovery supplement. |
| SpaceFlow / stLearn | Existing or hold | Already represented under Domain / Clustering or previously held as broader pseudo-spatiotemporal embedding/toolkit methods. |
| CASCAT | Hold | Previously surfaced as scientifically relevant but accessibility/executability remained uncertain in local consolidation notes. |
| LineageMap | Hold | Preprint and tri-modality lineage-tree framing; not transcriptomics-first trajectory inference alone. |
| BaSISS and related spatial genomics clone-mapping papers | Hold | Strong clonal evidence but platform/spatial-genomics oriented rather than a reusable ST downstream method row. |
| Erickson et al. spatial CNA evidence | Hold | Useful evidence but not a named reusable method row. |
| inferCNV / CopyKAT / CloneAlign / PyClone / Canopy | Exclude | Generic CNV/clonal tools without primary spatial transcriptomics method contribution for this topic. |
| Perturb-map / Perturb-FISH / Spatial Perturb-Seq / PERTURB-CAST / PerturbView | Hold | Peer-reviewed spatial perturbation technologies/workflows, but this pass follows the local constraint that assay/workflow papers alone are not primary computational method rows. |
| Perturb-DBiT | Hold | Research Square/preprint-style record in this pass. |

## Critical Notes

- Cross-topic duplication was avoided except where the method has a direct, named output matching the requested Analysis Problem. STAMP is the only intentional cross-topic row in this pass.
- `Accessibility=Pending` is used when a public executable/code path was not manually confirmed. This avoids turning PubMed evidence into a runtime-readiness claim.
- `Spatial Perturbation Analysis` remains young: Celcomen gives a peer-reviewed computational modeling row, while several strong perturbation papers remain workflow/assay-first and should not be mistaken for Layer 3 callable methods.
- The current working copy now differs from the original registry. The original registry should remain untouched until a separate promotion decision is made.

## Addendum: cellAdmix

Added after user-prioritized article review:

| Analysis Problem | Method | PMID | DOI | Reason |
|---|---|---:|---|---|
| Artifact Correction | cellAdmix | 41559218 | 10.1038/s41588-025-02497-4 | Directly identifies and reduces molecular admixture caused by segmentation errors in imaging-based spatial transcriptomics. |

Placement note: this row is assigned to `Artifact Correction` rather than `Segmentation` because the paper's reusable tool corrects downstream molecular admixture after segmentation rather than proposing a primary segmentation algorithm. It should still be cited later as caveat evidence for downstream analyses affected by segmentation errors, including differential expression, neighbor effects, ligand-receptor inference, and multicellular program analysis.
