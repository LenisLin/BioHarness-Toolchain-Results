# Layer 2 Scientific Errata Queue

Date: 2026-05-02

Purpose: exact fix queue from manual science confirmation. These are review or metadata actions only. They do not authorize Layer 1 registry mutation, formal Layer 2 rendering, or Layer 3/4 runtime planning.

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

## Comparative Analysis

- Exact issue: STcompare preprint-only evidence
  Affected file/field/method: `comparative_analysis/method_table.json`; method `STcompare`; field `Evidence Note`
  Severity: important
  Recommended fix: Before formal rendering, decide whether to display STcompare, hold it, or label the evidence level in a non-formal source note.
  Verification: PubMed/DOI verification needed: PubMed not found; DOI/preprint check yes

- Exact issue: SPaSE and SpaLinker code access unclear
  Affected file/field/method: `comparative_analysis/method_table.json`; methods `SPaSE`, `SpaLinker`; field `Code Access`
  Severity: minor
  Recommended fix: Leave as unclear unless primary code sources are verified in a later audit.
  Verification: Code verification needed: yes

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

No remaining Integration errata after the output-first decision-tree adjustment and targeted code-link check.

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

- Exact issue: SPACE name ambiguity
  Affected file/field/method: `program_discovery/method_table.json`; method `SPACE`; field `Evidence Source` and `Evidence Note`
  Severity: important
  Recommended fix: Tie SPACE explicitly to the Cell Systems 2024 tissue-module method before formal display, or hold if identity remains ambiguous.
  Verification: PubMed/DOI/code verification needed: PubMed identity already recorded; code/name audit needed

- Exact issue: Pending/manual-review code links
  Affected file/field/method: `program_discovery/method_table.json`; field `Code Access`; nine rows
  Severity: minor
  Recommended fix: Either keep `pending/manual review` as conservative Layer 2 metadata or normalize to `unclear` if a future formal renderer expects the shared code-access vocabulary.
  Verification: Code verification needed: yes

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

- Exact issue: SPARROW and SMORE code-link status
  Affected file/field/method: `graph_neighborhood/method_table.json`; methods `SPARROW`, `SMORE`; fields `Code Access`, `Primary Code Link`
  Severity: minor
  Recommended fix: Leave code access unclear unless primary repositories are verified. PubMed/DOI identities are acceptable.
  Verification: Code verification needed: yes

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
