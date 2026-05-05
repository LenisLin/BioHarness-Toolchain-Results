# Layer 2 Scientific Errata Queue

Date: 2026-05-02

Purpose: exact fix queue from manual science confirmation. These are review or metadata actions only. They do not authorize Layer 1 registry mutation, formal Layer 2 rendering, or Layer 3/4 runtime planning.

Targeted inclusion correction added: 2026-05-03. This correction updates working/evidence packages only and keeps `CoPro` on hold.

## Cell Type Inference

No remaining Cell Type Inference errata after human review decisions on placement/reconstruction boundary handling and histology/image gate order.

## Cell-Cell Communication

No remaining blocking Cell-Cell Communication errata after human approval to use `DeepTalk` as the unified method identity, while keeping `Giotto` excluded as a broad backbone/ecosystem package.

- Exact issue: Spacia, Scriabin, and CausalCCC code-access caveats
  Affected file/field/method: `cell_cell_communication/method_table.json`; methods `Spacia`, `Scriabin`, `CausalCCC`; fields `Code Access`, `Primary Code Link`
  Severity: minor
  Recommended fix: Keep code access conservative and treat later code verification as an engineering-audit prerequisite if selected. Do not claim local package availability for CausalCCC.
  Verification: Code verification needed: yes if selected for later audit

- Exact issue: CCC method-native claim boundary resolved by policy
  Affected file/field/method: `cell_cell_communication/topic_scope.md`, `cell_cell_communication/review_decision_tree.md`, `cell_cell_communication/closure.md`; topic-level caveats
  Severity: minor
  Recommended fix: Record method-native CCC, causal, pathway, contact, and mechanistic claims as cited evidence only; BioHarness does not independently validate those truth claims.
  Verification: Verification needed: no PubMed; boundary wording retained

## Comparative Analysis Split

No remaining minor errata for the old unified package because the package is superseded.

- Exact issue: old `Comparative Analysis` mixed contrast testing with phenotype/cohort-linked feature and niche outputs
  Affected file/field/method: `comparative_analysis/*`; methods `C-SIDE`, `Niche-DE`, `SPADE`, `SpatialGEE`, `STcompare`, `TissueMosaic`, `SPaSE`, `SpaLinker`, `SpatialSPM`
  Severity: major scientific revision, resolved by split working packages
  Recommended fix: Use `spatial_contrast_testing` for explicit contrast-test/map outputs and `phenotype_cohort_linked_spatial_feature_niche_analysis` for phenotype/cohort-linked scores, motifs, features, and clinical niches. Do not render the old unified package.
  Verification: Candidate-count consistency and stale-wording checks needed after rebuild.

- Exact issue: targeted inclusion of `TiRank` and `stClinic`
  Affected file/field/method: `phenotype_cohort_linked_spatial_feature_niche_analysis/method_table.*`; methods `TiRank`, `stClinic`
  Severity: important, targeted metadata check completed
  Recommended fix: Include after verified DOI/PMID/code traces; keep phenotype-label leakage, cohort confounding, transfer, and association-not-causality caveats.
  Verification: DOI/PMID/code trace completed; no full retrieval redo.

- Exact issue: `STcompare` preprint provenance and structural-comparability fit
  Affected file/field/method: `spatial_contrast_testing/method_table.*`; method `STcompare`
  Severity: important, caveat retained
  Recommended fix: Keep only in the structurally matched spatial-pattern contrast branch; treat preprint status as evidence provenance/confidence caveat rather than a Layer 2 selection gate.
  Verification: targeted DOI/code/status check completed; no PubMed PMID found in this pass.

## Domain / Clustering

- Exact issue: conST branch wording could be misread as explicit spatial multi-omics integration
  Affected file/field/method: `domain_clustering/method_table.json`, `domain_clustering/method_table.csv`, `domain_clustering/method_table.md`; method `conST`; fields `Key Difference`, `Best First Choice When`, `Do Not Start With This When`, `Image Signal Use`, `Modality Integration Branch`
  Severity: minor
  Recommended fix: Use multimodal/image-aware contrastive boundary wording. Do not describe conST as integrating more than one molecular modality or as equivalent to `SpatialGlue`.
  Verification: Verification needed: no PubMed; branch wording review yes

- Exact issue: decision-tree root order should follow input evidence/task form before multi-slice or model-family gates
  Affected file/field/method: `domain_clustering/review_decision_tree.md`; branch-local decision tree
  Severity: minor
  Recommended fix: Start with reference-informed, spatial multi-omics, histology/image/morphology, and ordinary expression-plus-coordinate routes; treat multi-slice/batch as a downstream task-design gate.
  Verification: Verification needed: no PubMed; scientific logic review yes

- Exact issue: code/metadata uncertainty in newer venue-sweep rows
  Affected file/field/method: `domain_clustering/method_table.json`; methods `IRIS`, `SpatialGlue`, `BINARY`, `stDyer`, `SpatialLeiden`, `GraphPCA`, `iIMPACT`, `MNMST`, `SpaDo`; plus benchmark-coverage caveats for `SpaSEG` and `Novae`
  Severity: minor
  Recommended fix: Keep candidate freeze unchanged, retain code access as `unclear` where frozen registry says pending, and perform targeted metadata/code checks before formal positive display or engineering audit.
  Verification: PubMed/DOI/code verification needed: targeted code/metadata check yes; no full retrieval redo

## Integration

No remaining Integration errata after the output-first decision-tree adjustment, targeted code-link check, and 2026-05-03 inclusion of `SpaMosaic`, `INSPIRE`, `SpatialCOC`, and `SSpMosaic`.

- Exact issue: SSpMosaic boundary caveat
  Affected file/field/method: `integration/method_table.json`, `integration/review_decision_tree.md`; method `SSpMosaic`; fields `Evidence Note`, `Do Not Start With This When`, `Primary Risk Cue`
  Severity: minor
  Recommended fix: Keep `SSpMosaic` in Integration only when integration remains the center of gravity; route standalone cell type annotation, program discovery, and domain/ecotype discovery to their own topics.
  Verification: Boundary wording retained; code link is evidence trace only.

- Exact issue: Decision-tree root order could make count-level batch correction appear earlier than other deliverables
  Affected file/field/method: `integration/review_decision_tree.md`; branch-local decision tree
  Severity: minor, resolved
  Recommended fix: Start with the primary output object: count-level batch correction, multimodal model, spatiotemporal alignment, coordinate/overlap/stitching, 2D/3D reconstruction, or latent representation integration.
  Verification: Verification needed: no PubMed; scientific logic review completed

- Exact issue: Code-link trace was previously unclear for 12 rows
  Affected file/field/method: `integration/method_table.json`, `integration/method_table.csv`, `integration/method_table.md`; methods `CAST`, `DeST-OT`, `GPSA`, `PRECAST`, `SANTO`, `SLAT`, `STAIR`, `MaskGraphene`, `spCLUE`, `VR-Omics`, `MISO`, `Crescendo`; fields `Code Access`, `Primary Code Link`, `Evidence Note`
  Severity: minor, resolved
  Recommended fix: Record verified public code links as trace metadata only. Do not treat code access as runtime support, adapter availability, callable signatures, environment capsules, or default-method status.
  Verification: Code verification needed: targeted check completed

## Program Discovery

No remaining blocking Program Discovery errata after minor boundary wording revision: the decision tree now assumes Layer 1 assignment to Program Discovery and no longer performs analysis-problem dispatch; `SpaGRN` is retained only as a boundary-sensitive regulatory-program row rather than a standalone GRN topic or mechanism claim.

- Exact issue: SPACE name ambiguity resolved as wording caveat
  Affected file/field/method: `program_discovery/method_table.json`; method `SPACE`; field `Evidence Source` and `Evidence Note`
  Severity: minor, resolved for Layer 2 confirmation
  Recommended fix: Tie `SPACE` explicitly to the Cell Systems 2024 tissue-module method in formal display; do not confuse it with other SPACE-like labels.
  Verification: PubMed/DOI identity already recorded; no full retrieval redo needed

- Exact issue: Pending/manual-review code links retained as caveat
  Affected file/field/method: `program_discovery/method_table.json`; field `Code Access`; nine rows
  Severity: minor, non-blocking
  Recommended fix: Keep `pending/manual review` as conservative Layer 2 metadata unless a future formal renderer requires vocabulary normalization or a later Layer 3 audit needs current code-link display.
  Verification: Code verification needed only for later formal/code-display or engineering-audit use

## Spatial Perturbation Analysis

No remaining blocking Spatial Perturbation Analysis errata after human approval to conditionally include `CONCERT`, add `Spatial-ZEDNet`, `River`, and `Perturb-STNet`, and assign `CDS` / counterfactual directional cell-cell influence to Cell-Cell Communication boundary review.

- Exact issue: CONCERT preprint caveat retained
  Affected file/field/method: `spatial_perturbation_analysis/method_table.json`; method `CONCERT`; fields `Evidence Note`, `Scientific Caveat`
  Severity: minor
  Recommended fix: Keep CONCERT as a positive conditional branch with explicit preprint-only and method-paper-local evidence caveats.
  Verification: PubMed/DOI verification needed: no; already verified as PubMed-indexed bioRxiv preprint

- Exact issue: Causal/counterfactual and observed-effect language
  Affected file/field/method: `spatial_perturbation_analysis/review_decision_tree.md`; methods `CONCERT`, `Celcomen`, `Spatial-ZEDNet`, `River`, `Perturb-STNet`
  Severity: important
  Recommended fix: Preserve method-native causal/counterfactual wording only with assumption and validation caveats; state that Spatial-ZEDNet, River, and Perturb-STNet detect or prioritize observed perturbation-associated signals rather than proving causality.
  Verification: Verification needed: no additional PubMed; scientific assumption review needed

## Graph / Neighborhood

- Exact issue: targeted 20-row freeze update and boundary-hardening before formal rendering
  Affected file/field/method: `graph_neighborhood/topic_scope.md`, `graph_neighborhood/method_table.json`, `graph_neighborhood/method_table.csv`, `graph_neighborhood/method_table.md`, `graph_neighborhood/review_decision_tree.md`, `graph_neighborhood/closure.md`; methods `TrimNN`, `scNiche`, `CellNiche`, `DECIPHER`, `SpaNiche`, `SpatialQuery`; boundary methods `SOTIP`, `NicheCompass`, `CytoCommunity`, `SMORE`, `TrimNN`, `DECIPHER`
  Severity: important
  Recommended fix: Use the revised 20-row freeze, add Step 0 routing to Domain / Clustering and Cell-Cell Communication, and retain branch-local Graph language only. Keep `stClinic` watchlist; exclude `MNMST` as Domain / Clustering and `STCase` as Cell-Cell Communication for this reopen.
  Verification: Candidate-count consistency and router acceptance checks needed before formal rendering; no full retrieval redo. Keep `SpatialQuery` visibly preprint-only and keep `SpaNiche` interaction/niche wording descriptive rather than causal or physical communication truth.

- Exact issue: SPARROW and SMORE code-link status resolved as trace metadata
  Affected file/field/method: `graph_neighborhood/method_table.json`, `graph_neighborhood/method_table.csv`, `graph_neighborhood/method_table.md`; methods `SPARROW`, `SMORE`; fields `Code Access`, `Primary Code Link`, `Evidence Note`
  Severity: minor, resolved
  Recommended fix: Record `SPARROW` primary code as `https://github.com/peiyaozhao617/SPARROW` with `https://github.com/aifimmunology/SPARROW` as an accessible fork/mirror; record `SMORE` primary code as `https://github.com/zsamadi/SMORE` with archive `10.5281/zenodo.14510210`. Do not treat code access as runtime support.
  Verification: Code verification completed; retain no-runtime wording.

## Spatial Gene Prediction

- Exact issue: TISSUE mismatched input PMID
  Affected file/field/method: `spatial_gene_prediction/method_table.json`; method `TISSUE`; future registry promotion record
  Severity: important
  Recommended fix: Use corrected PMID 38347138 / DOI 10.1038/s41592-024-02184-y in any later registry promotion. Do not use mismatched PMID 39609107.
  Verification: PubMed/DOI verification needed: done; registry update would be separate authorized work

- Exact issue: SpatialScope filled metadata
  Affected file/field/method: `spatial_gene_prediction/method_table.json`; method `SpatialScope`; fields `Evidence Note`, `Primary Code Link`
  Severity: minor
  Recommended fix: Metadata identity is verified; code access remains unclear and should stay conservative.
  Verification: Code verification needed: yes if selected for engineering

## Spatial Trajectory Analysis

- Exact issue: CoPro hold / boundary unresolved
  Affected file/field/method: errata queue only; method `CoPro`; possible boundary between `spatial_trajectory_analysis` and `program_discovery`
  Severity: important
  Recommended fix: Do not add CoPro to a positive working table or formal display until targeted preprint metadata, code availability, and topic center-of-gravity are verified.
  Verification: PubMed/DOI/code verification needed: DOI/preprint yes; code unclear.

- Exact issue: STORIES and stVCR targeted inclusion caveats
  Affected file/field/method: `spatial_trajectory_analysis/method_table.json`; methods `STORIES`, `stVCR`; fields `Evidence Note`, `Scientific Caveat`
  Severity: minor
  Recommended fix: Keep fate-landscape, spatiotemporal dynamics, migration, and directionality language model-based and assumption-bounded.
  Verification: PubMed/DOI identity and code traces recorded; no independent all-candidate benchmark.

- Exact issue: TopoVelo/SpaTrack code-link evidence
  Affected file/field/method: `spatial_trajectory_analysis/method_table.json`; methods `TopoVelo`, `SpaTrack`; fields `Code Access`, `Primary Code Link`
  Severity: minor
  Recommended fix: Keep TopoVelo code access unclear and SpaTrack code source registry-based until publisher or primary repository evidence is checked.
  Verification: Code verification needed: yes

- Exact issue: Trajectory and causal wording
  Affected file/field/method: `spatial_trajectory_analysis/review_decision_tree.md`; methods `CASCAT`, `TopoVelo`, `SpaTrack`, velocity rows
  Severity: important
  Recommended fix: Treat directionality, velocity, pseudotime, and causal trajectory as model interpretations unless supported by experimental design.
  Verification: Verification needed: scientific review, not PubMed

## Segmentation

- Exact issue: segger preprint-level evidence
  Affected file/field/method: `segmentation/method_table.json`; method `segger`; field `Evidence Note`
  Severity: important
  Recommended fix: Keep preprint status visible in working source and require human approval before formal inclusion.
  Verification: PubMed/DOI verification needed: verified as bioRxiv preprint

- Exact issue: Spotiflow/Piscis boundary placement
  Affected file/field/method: `segmentation/method_table.json`; methods `Spotiflow`, `Piscis`; fields `Main Use in This Topic`, `Best First Choice When`
  Severity: minor
  Recommended fix: Keep as spot-detection boundary rows; do not let formal wording imply complete cell segmentation or transcript assignment.
  Verification: Verification needed: no

- Exact issue: CelloType boundary placement
  Affected file/field/method: `segmentation/method_table.json`; method `CelloType`; fields `Main Use in This Topic`, `Annotation Coupling`
  Severity: minor
  Recommended fix: Keep classification coupling explicit; avoid presenting it as a plain segmentation substitute.
  Verification: Verification needed: no

## Super-resolution

- Exact issue: Thor platform/workflow boundary row
  Affected file/field/method: `super_resolution/method_table.json`, `super_resolution/review_decision_tree.md`; method `Thor`; fields `Main Use in This Topic`, `Do Not Start With This When`, `Signal-risk Caveat`
  Severity: minor
  Recommended fix: Keep Thor as a histology-aware cell-level reconstruction / investigation boundary row; do not present it as primary segmentation, transcript assignment, cell type inference, or direct molecule-level measurement.
  Verification: PubMed/DOI identity and code trace recorded; boundary wording retained.

- Exact issue: Unclear code links
  Affected file/field/method: `super_resolution/method_table.json`; methods `iStar`, `scstGCN`, `iSCALE`, `STAGE`; fields `Code Access`, `Primary Code Link`
  Severity: minor
  Recommended fix: Leave code access unclear until primary repositories are verified.
  Verification: Code verification needed: yes

- Exact issue: Generated/pseudo-cell output interpretation
  Affected file/field/method: `super_resolution/review_decision_tree.md`; all generated or single-cell-resolution branches
  Severity: important
  Recommended fix: Formal rendering must not imply direct molecule-level measurement or cell-resolved ground truth from inferred reconstructions.
  Verification: Verification needed: scientific validation design, not PubMed

## Denoising / Imputation

- Exact issue: SpotGF boundary with normalization/feature selection
  Affected file/field/method: `denoising_imputation/method_table.json`; method `SpotGF`; fields `Main Use in This Topic`, `Do Not Start With This When`
  Severity: minor
  Recommended fix: Keep boundary language; do not broaden SpotGF into generic normalization or full imputation.
  Verification: Verification needed: no

## Artifact Correction

- Exact issue: SPLIT Xenium contamination platform caveat
  Affected file/field/method: `artifact_correction/method_table.json`, `artifact_correction/field_registry.json`, `artifact_correction/review_decision_tree.md`; method `SPLIT`; fields `Artifact Target`, `Assay / Modality Cue`, `Scientific Caution`
  Severity: minor
  Recommended fix: Keep SPLIT as Xenium signal-contamination / transcript-spillover artifact correction; do not broaden to generic denoising, generic QC, or platform-independent ground-truth correction.
  Verification: PubMed/DOI identity and code trace recorded; field registry controlled values updated.

- Exact issue: Cross-artifact comparability
  Affected file/field/method: `artifact_correction/review_decision_tree.md`; all branches
  Severity: minor
  Recommended fix: Keep branch-local decision tree; do not introduce all-purpose artifact-correction ranking.
  Verification: Verification needed: no

## Topics With No Additional Fix Queue Beyond Existing Caveats

- Data Quality Control
- Normalization / Feature Selection
- Spatial Clonal Analysis
- Spatially Variable Gene Detection
- spatial_domain_identification legacy reference

## Comparative Boundary Follow-up 2026-05-05

- Exact issue: `SPaSE` pathology-score estimand is outside the currently active Analysis Problem set.
  Affected file/field/method: Layer 1 working registry and `phenotype_cohort_linked_spatial_feature_niche_analysis/*`; method `SPaSE`.
  Severity: important, resolved by active delete.
  Recommended fix: Remove `SPaSE` from active positive rows rather than marking it as metadata failure. Reconsider only if a future `Spatial Pathology Scoring` or disease-severity Analysis Problem is opened.
  Verification: Confirm `SPaSE` is absent from active method tables and positive decision branches; history/removal notes may mention it.

- Exact issue: `CytoCommunity` supervised/condition-associated TCN branch should be available for phenotype/cohort-linked community features without displacing its Graph / Neighborhood identity.
  Affected file/field/method: Layer 1 working registry; `phenotype_cohort_linked_spatial_feature_niche_analysis/method_table.*`; method `CytoCommunity`.
  Severity: important, resolved by controlled duplicate.
  Recommended fix: Keep original Graph / Neighborhood row and add a controlled duplicate under phenotype/cohort-linked spatial feature and niche analysis. Use only for cohort- or phenotype-associated TCN/community feature deliverables.
  Verification: Confirm exactly two active Layer 1 `CytoCommunity` rows: Graph / Neighborhood and Phenotype/Cohort controlled duplicate.

- Exact issue: `STcompare` preprint wording could be misread as a method-selection gate.
  Affected file/field/method: `spatial_contrast_testing/method_table.*`, `review_decision_tree.md`, `closure.md`; method `STcompare`.
  Severity: minor, resolved by wording correction.
  Recommended fix: Treat preprint status as evidence provenance/confidence caveat only. Treat structural comparability as the method-fit condition.
  Verification: Search for stale STcompare evidence-status wording before formal rendering; no selection-gate wording should remain in active package files.
