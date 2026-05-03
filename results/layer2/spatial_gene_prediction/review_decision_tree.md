# Spatial Gene Prediction Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded review pass, evidence spot-checks, logic
review, decision tree, and coverage ledger for the frozen `Spatial Gene
Prediction` candidate set. It does not define execution surfaces, wrappers,
adapter boundaries, callable signatures, environments, or runtime support.

## Reading Rules

- Keep the 11-method freeze unchanged:
  `GHIST`, `Hist2ST`, `SpaGE`, `SpatialScope`, `STASCAN`, `stPlus`,
  `THItoGene`, `TISSUE`, `FmH2ST`, `stAI`, `OmiCLIP`.
- Use `Subtask` values as branch cues only; they are not separate Layer 2
  completion units.
- Treat compute as a branch-local resource gate. It cannot override task fit.
- Use benchmark or review evidence only for caveats or branch-local
  interpretation. Do not turn it into a universal ranking.
- Treat `Closest Alternatives`, `Key Difference`, memory burden, scale
  sensitivity, and prediction-risk caveats as Layer 2 synthesized judgment
  unless the method row states direct support.

## Review Pass

### PubMed candidate verification

The frozen candidate PMIDs were checked with PubMed E-utilities. Two identifier
corrections are carried into the table while the candidate set remains frozen.

| Tool | Input PMID | Verified PMID | Verified DOI | Verification result |
| --- | --- | --- | --- | --- |
| `GHIST` | 40954301 | 40954301 | 10.1038/s41592-025-02795-z | Method-paper identity confirmed. |
| `Hist2ST` | 35849101 | 35849101 | 10.1093/bib/bbac297 | Method-paper identity confirmed; DOI filled from PubMed. |
| `SpaGE` | 32955565 | 32955565 | 10.1093/nar/gkaa740 | Method-paper identity confirmed. |
| `SpatialScope` | missing | 38030617 | 10.1038/s41467-023-43629-w | PubMed identity filled by bounded title/name query. |
| `STASCAN` | 39439006 | 39439006 | 10.1186/s13059-024-03421-5 | Method-paper identity confirmed. |
| `stPlus` | 34252941 | 34252941 | 10.1093/bioinformatics/btab298 | Method-paper identity confirmed; abstract reports source code link. |
| `THItoGene` | 38145948 | 38145948 | 10.1093/bib/bbad464 | Method-paper identity confirmed; abstract reports source code link. |
| `TISSUE` | 39609107 | 38347138 | 10.1038/s41592-024-02184-y | Input PMID resolves to an unrelated paper; correct method-paper identity found by bounded title query. |
| `FmH2ST` | 40923764 | 40923764 | 10.1093/nar/gkaf865 | Method-paper identity confirmed. |
| `stAI` | 40057378 | 40057378 | 10.1093/nar/gkaf158 | Method-paper identity confirmed. |
| `OmiCLIP` | 40442373 | 40442373 | 10.1038/s41592-025-02707-1 | Method-paper identity confirmed. |

### Benchmark/review screening

Query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
("gene prediction"[Title/Abstract] OR "gene enhancement"[Title/Abstract] OR
 "histology-to-expression"[Title/Abstract] OR
 "missing gene imputation"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

The query retrieved related records, including:

- PMID 40964396, a 2025 bioRxiv preprint on data-quality effects in deep
  learning prediction of spatial transcriptomics from histology images.
- PMID 38626512, a gene-expression prediction paper tagged as review in PubMed
  metadata but not a benchmark of the frozen 11-method set.
- PMID 40262896, a spatial-transcriptomics communication-analysis paper
  retrieved by broad query terms and not relevant as a prediction benchmark.

Review conclusion: no suitable independent benchmark or review was found that
jointly compares and ranks the 11 frozen candidates. Several method papers
report their own benchmarks or comparisons, and TISSUE reports 11 benchmark
datasets for uncertainty calibration, but these do not justify a global
all-method ranking. The decision tree therefore uses explicit logic review
derived from the method table and bounded candidate evidence.

## Evidence Spot-checks

| Tool | Direct support | Layer 2 synthesis / caution |
| --- | --- | --- |
| `GHIST` | PubMed verifies the Nature Methods paper and its single-cell-resolution histology-to-expression claim. | Code link is from frozen Layer 1 input; domain-shift and resolution-inflation concerns are synthesis. |
| `Hist2ST` | PubMed verifies the Briefings in Bioinformatics paper and transformer/GNN histology prediction claim. | Comparator placement and cross-cohort generalization caveat are synthesis. |
| `SpaGE` | PubMed verifies the NAR paper and scRNA-seq-assisted whole-transcriptome spatial enhancement claim. | Reference-mismatch risk depends on reference quality and is synthesis. |
| `SpatialScope` | PubMed name query verifies the Nature Communications paper and deep generative ST/scRNA integration claim. | Code access remains unclear in this bounded pass; high-resolution reconstruction risk is synthesis. |
| `STASCAN` | PubMed verifies the Genome Biology paper and expression-plus-histology fine-resolution cell-map prediction claim. | Its placement as a prediction-topic boundary row is synthesis. |
| `stPlus` | PubMed verifies the Bioinformatics paper, reference-based enhancement claim, and abstract-level GitHub link. | Reference-transfer caveat and local alternatives are synthesis. |
| `THItoGene` | PubMed verifies the Briefings in Bioinformatics paper and abstract-level GitHub link. | Histology-domain-shift caveat is synthesis. |
| `TISSUE` | PubMed verifies the Nature Methods uncertainty-calibration paper after correcting the input PMID. | It calibrates predictions rather than generating them; calibration assumptions are synthesis. |
| `FmH2ST` | PubMed verifies the NAR paper and foundation-model histology-to-ST claim. | Code access remains unclear; pretrained-prior caveat is synthesis. |
| `stAI` | PubMed verifies the NAR paper and missing-gene imputation plus annotation claim. | Circularity between imputation and annotation is synthesis. |
| `OmiCLIP` | PubMed verifies the Nature Methods visual-omics foundation-model paper and Loki prediction function. | Runtime feasibility, code access, leakage, and domain-shift concerns remain unresolved. |

## Decision Tree

### Step 0. Are you actually in this topic?

If the main task is denoising, artifact correction, segmentation, domain
clustering, cell type inference, or cell-cell communication:

- Do not start here.
- Use the corresponding analysis problem first.

If the main task is spatial expression prediction, missing-gene prediction,
transcriptome-wide enhancement, higher-resolution reconstruction, or
uncertainty calibration around predicted spatial expression:

- Continue to Step 1.

### Step 1. Is the immediate need uncertainty calibration for existing or planned predictions?

If yes:

- Prefer / consider `TISSUE`.
- Keep the caveat that uncertainty calibration can reduce downstream misuse of
  predictions but cannot make a biased predictor biologically correct.

If no:

- Continue to Step 2.

### Step 2. Is the main input a suitable scRNA-seq reference?

If yes and the target is transcriptome-wide enhancement of measured spatial
locations:

- Prefer / consider `SpaGE` or `stPlus`.
- Use `SpaGE` when shared latent-space enhancement is the main branch cue.
- Use `stPlus` when reference-based autoencoder and weighted-neighbor
  enhancement is the main branch cue.
- Keep reference-mismatch and batch-transfer caveats visible.

If yes and the target is single-cell spatial missing-gene imputation with
annotation intentionally coupled:

- Prefer / consider `stAI`.
- Keep the annotation-imputation circularity caveat visible.

If yes and the target is cellular-resolution reconstruction through deep
generative ST/scRNA integration:

- Prefer / consider `SpatialScope`.
- Keep high-resolution reconstruction and reference-bias caveats visible.

If no:

- Continue to Step 3.

### Step 3. Is histology-to-expression prediction the main branch?

If yes and a conventional spot-level predictor is enough:

- Prefer / consider `Hist2ST` or `THItoGene`.
- Use `Hist2ST` when transformer plus spatial graph context is the main cue.
- Use `THItoGene` when dynamic-convolution and capsule-network histology
  features are the main cue.

If yes and single-cell-resolution histology prediction is central:

- Prefer / consider `GHIST`.
- Keep the resolution-inflation and validation caveats visible.

If yes and pretrained image foundation-model features are central:

- Prefer / consider `FmH2ST`.
- Keep pretrained-prior and dataset-shift caveats visible.

If yes and a broader visual-omics foundation model is the intended branch:

- Prefer / consider `OmiCLIP`.
- Keep model-scope, leakage, and interpretability caveats visible.

If no:

- Continue to Step 4.

### Step 4. Is the desired output a fine-resolution cell distribution map rather than a gene-expression matrix?

If yes:

- Prefer / consider `STASCAN`.
- Keep the boundary caveat that this is not a standard predicted expression
  matrix route.

If no:

- Re-check whether the problem belongs to reference-assisted enhancement,
  histology-to-expression prediction, or uncertainty calibration. If none of
  those branches fit, this frozen topic does not provide a confident first
  method.

### Step 5. Resource and evidence gate

If the analysis must stay CPU-first:

- Read first within fitting branches: `SpaGE`, `stPlus`, `TISSUE`.
- Do not interpret CPU labels as runtime support inside BioHarness.

If GPU or large-model resources are acceptable:

- Expand reading to fitting branches among `GHIST`, `Hist2ST`, `SpatialScope`,
  `STASCAN`, `THItoGene`, `FmH2ST`, `stAI`, and `OmiCLIP`.
- Keep memory and scale fields conservative because most rows lack independent
  BioHarness runtime evidence.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `GHIST` | single-cell histology-to-expression prediction | training-domain shift and resolution-inflation risk |
| `Hist2ST` | spot-level histology-to-expression prediction | image-domain and cohort generalization risk |
| `SpaGE` | scRNA-reference-assisted enhancement | reference mismatch and batch transfer |
| `SpatialScope` | deep generative cellular-resolution reconstruction | reference bias plus high-resolution reconstruction risk |
| `STASCAN` | fine-resolution cell-map prediction boundary | output is cell map, not conventional expression matrix |
| `stPlus` | scRNA-reference-assisted enhancement | reference-transfer bias |
| `THItoGene` | histology-to-expression prediction | histology-only domain shift |
| `TISSUE` | uncertainty calibration | calibration assumptions do not fix biased predictions |
| `FmH2ST` | foundation-model histology-to-ST generation | pretrained image-prior bias |
| `stAI` | missing-gene imputation plus annotation | imputation and annotation circularity |
| `OmiCLIP` | visual-omics foundation prediction | broad model scope, leakage, and domain-shift risk |

## Review Decision

The current evidence supports a Layer 2 conditional decision tree, not a
universal method ranking. The package is suitable for method-selection
discussion and representative Layer 3/4 audit triage after closure, while all
runtime and adapter decisions remain outside this Layer 2 package.
