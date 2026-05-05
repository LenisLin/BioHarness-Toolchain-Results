# Program Discovery Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records bounded evidence framing, benchmark/review screening, logic review, a conditional decision tree, and a coverage ledger for the frozen Program Discovery candidate set. It does not define execution surfaces, wrappers, adapter boundaries, callable signatures, environments, or runtime support.

## Reading Rules

- Keep the thirteen-method freeze unchanged: `CellPie, DIALOGUE, scITD, SPICEMIX, STAMP, SpaTM, FISHFactor, SpatialCorr, SpaceX, SpaGRN, SPACE, spMOCA, LSGI`.
- Use `Subtask` values as branch cues only.
- Treat `Evidence Note` direct PMID/DOI/title facts as direct evidence; treat alternatives, branch fit, scale, memory, and interpretability notes as Layer 2 synthesis.
- Use compute and code access as audit/resource gates only.
- Do not infer default methods or execution readiness.

## PubMed / Registry Evidence Framing

The frozen input already records PMID, DOI, title, year, venue, discovery route, accessibility, and compute labels. This convergence task did not perform long retrieval. Direct evidence in the method table is therefore bounded to the frozen registry/PubMed identifier fields and the two local Layer 1 correction/validation notes.

| Tool | PMID | DOI | Direct evidence framing |
| --- | --- | --- | --- |
| `CellPie` | 40167331 | 10.1093/nar/gkaf251 | Frozen row places this method in `Multicellular / program discovery` with evidence basis: Included as a scalable spatial factor discovery method that fits the multicellular program branch. |
| `DIALOGUE` | 35513526 | 10.1038/s41587-022-01288-0 | Frozen row places this method in `Multicellular / program discovery` with evidence basis: Included as a direct multicellular program discovery method for tissue-resolved data. |
| `scITD` | 39313646 | 10.1038/s41587-024-02411-z | Frozen row places this method in `Multicellular / program discovery` with evidence basis: Included as a cohort-stratifying multicellular program discovery method grounded in interpretable tensor decomposition. |
| `SPICEMIX` | 36624346 | 10.1038/s41588-022-01256-z | Frozen row places this method in `Multicellular / program discovery` with evidence basis: Included as a cell-identity and factor-modeling method that cleanly fits multicellular program discovery. |
| `STAMP` | 39407016 | 10.1038/s41592-024-02463-8 | Frozen row places this method in `Spatial topic / gene-module discovery` with evidence basis: Added to Program Discovery because STAMP returns spatial topics and associated gene modules. The existing Domain / Clustering row remains a separate task-facing placement. |
| `SpaTM` | 41359801 | 10.1093/bib/bbaf657 | Frozen row places this method in `Spatial topic / transcriptional program discovery` with evidence basis: Added as a direct spatial topic-model method for transcriptional program inference. |
| `FISHFactor` | 37039825 | 10.1093/bioinformatics/btad183 | Frozen row places this method in `Subcellular spatial factor discovery` with evidence basis: Added as a spatial factor model for subcellular-resolution program/factor discovery. |
| `SpatialCorr` | 36590683 | 10.1016/j.crmeth.2022.100369 | Frozen row places this method in `Spatial gene-set co-program discovery` with evidence basis: Added as a gene-set co-program/correlation discovery method for spatial transcriptomics. |
| `SpaceX` | 36179087 | 10.1093/bioinformatics/btac645 | Frozen row places this method in `Spatial co-expression network discovery` with evidence basis: Added as a spatial co-expression network method for coordinated program/module discovery. |
| `SpaGRN` | 40179878 | 10.1016/j.cels.2025.101243 | Frozen row places this method in `Spatial regulatory program discovery` with evidence basis: Added as a method for spatially informed regulatory path and regulon inference. |
| `SPACE` | 38823396 | 10.1016/j.cels.2024.05.001 | Frozen row places this method in `Tissue module discovery` with evidence basis: Added as a tissue-module discovery method from single-cell-resolution spatial transcriptomics. |
| `spMOCA` | 41370198 | 10.1093/nar/gkaf1264 | Frozen row places this method in `Spatial co-expression program discovery` with evidence basis: Added as a spatially informed co-expression analysis method for gene program/network discovery. |
| `LSGI` | 40781324 | 10.1186/s13059-025-03716-1 | Frozen row places this method in `Spatial gradient / interpretable program discovery` with evidence basis: Added as an interpretable spatial gradient analysis method for spatial program/pattern discovery. |

## Benchmark / Review Screening

Brief screening query:

```text
spatial transcriptomics program discovery benchmark review topic modeling factor discovery multicellular programs
```

Screening result: no immediately suitable independent benchmark or review was identified that jointly evaluates all thirteen frozen candidates across multicellular programs, spatial topics/factors, gene-set correlation, co-expression networks, boundary-sensitive regulatory-program outputs, tissue modules, and spatial gradients.

Review conclusion: use explicit logic review from the field registry and method table. Method-paper evidence and broad reviews can inform caveats, but they cannot support a universal all-method ranking.

## Logic Review

Program Discovery is heterogeneous. The first split should be output semantics, not method popularity:

- If the output must be coordinated multicellular or cohort programs, inspect the multicellular/tensor/factor branch.
- If the output must be spatial topics, factors, or gradients, inspect the topic/factor/gradient branch.
- If the output must be gene-set correlation or co-expression networks, inspect the gene-set/co-expression branch.
- If the output must be regulatory-program-style annotation or scoring, inspect the boundary-sensitive regulatory-program branch.
- If the output must be interaction-aware tissue modules from single-cell-resolution ST, inspect the tissue-module branch.

Scientific caveat: all factor/topic/network/regulatory outputs require post hoc biological interpretation. The Layer 2 table records the primary interpretation risk for each method, but validation remains dataset- and question-specific.

## Decision Tree

### Scope premise

This Layer 2 tree assumes Layer 1 has already assigned the task to `Program Discovery`. It only supports topic-internal, branch-local selection among the thirteen frozen Program Discovery candidates. It does not dispatch tasks across analysis problems and does not create a separate GRN analysis problem.

### Step 1. Is the desired output a coordinated multicellular or cohort-level program?

If the question is coordinated programs across annotated cell types or compartments:

- Consider `DIALOGUE`.
- Use caution when annotations or covariates are weak.

If the question is cohort/sample-stratifying components across genes, cell types, and samples:

- Consider `scITD`.
- Use caution for single-section data or weak sample-axis design.

If scalable unsupervised factor discovery is the main need:

- Consider `CellPie`.
- Use caution because code access is pending/manual review in the frozen input.

If program discovery is coupled to spatial cell-identity mixture modeling:

- Consider `SPICEMIX`.
- Keep deconvolution-like assumptions visible.

### Step 2. Is the desired output a spatial topic, factor, or continuous spatial program pattern?

If the target is interpretable spatial topics with gene modules:

- Consider `STAMP` or `SpaTM`.
- Prefer reading `STAMP` first when manually confirmed code access matters; read `SpaTM` when its specific transcriptional-program topic-model framing is desired and code review can wait.

If the dataset is subcellular-resolution and factor discovery is central:

- Consider `FISHFactor`.
- Keep platform and molecule-density caveats visible.

If the biology is expected to vary continuously across tissue gradients:

- Consider `LSGI`.
- Avoid over-discretizing continuous gradients into domain labels.

### Step 3. Is the desired output gene-set correlation or spatial co-expression rather than latent factors/topics?

If predefined gene sets are central:

- Consider `SpatialCorr`.
- Keep gene-set curation bias visible.

If the desired output is a spatial co-expression network:

- Consider `SpaceX`.
- Treat network edges as sensitive to sparsity, autocorrelation, and thresholding.

If the desired output is model-based spatial co-expression programs/modules:

- Consider `spMOCA`.
- Keep compositional and covariance-model caveats visible.

### Step 4. Is the desired output a boundary-sensitive regulatory-program annotation?

If yes:

- Consider `SpaGRN`.
- Treat `SpaGRN` as a boundary-sensitive Program Discovery row. Regulatory-program interpretation is prior-dependent and indirect unless separately validated.

If no:

- Continue to Step 5.

### Step 5. Is the desired output interaction-aware tissue modules from single-cell-resolution ST?

If yes:

- Consider `SPACE`.
- Confirm the method identity carefully because `SPACE` is name-ambiguous, and keep the Cell Systems 2024 tissue-module row distinct from other SPACE-like methods.

If no branch fits cleanly:

- Record `unclear` and request manual method review rather than forcing a default.

### Step 6. Audit/resource gate

If immediate code review matters, the frozen input only provides public GitHub links for `DIALOGUE`, `scITD`, `SPICEMIX`, and `STAMP`. This is an audit cue only and does not imply BioHarness runtime support.

If GPU resources are constrained, note that `STAMP` and `SPACE` are labeled `Optional GPU` in the frozen input; this is a resource-screening cue, not an execution claim.

## Coverage Ledger

| Tool | Covered branch | Main caveat carried forward |
| --- | --- | --- |
| `CellPie` | factor / NMF | NMF parts are readable but factor number and cross-sample alignment need sensitivity review. |
| `DIALOGUE` | multicellular latent program | Interpretation depends on quality of cell-type/context annotations and chosen covariates. |
| `scITD` | tensor decomposition | Tensor components are interpretable only after careful factor-number and axis-label review. |
| `SPICEMIX` | probabilistic latent variable | Latent identity factors may mix biological programs with deconvolution-like assumptions. |
| `STAMP` | spatial topic model | Topics can be over-read as discrete domains; topic number and gene-module stability require review. |
| `SpaTM` | spatial topic model | Topic labels are post hoc and may not map one-to-one to biological pathways. |
| `FISHFactor` | probabilistic spatial factor | Subcellular factors may reflect segmentation, molecule-density, or imaging platform effects. |
| `SpatialCorr` | gene-set correlation | Results inherit gene-set curation bias and do not by themselves discover unrestricted programs. |
| `SpaceX` | spatial co-expression network | Network edges can be sensitive to sparsity, spatial autocorrelation, and thresholding choices. |
| `SpaGRN` | boundary-sensitive regulatory-program output | Regulatory-program interpretation depends on prior databases, motif assumptions, and indirect expression evidence. |
| `SPACE` | interaction-aware tissue module | Module meaning may blend expression state, local density, and inferred interaction context. |
| `spMOCA` | spatial co-expression model | Co-expression modules can reflect spatial autocorrelation and compositional effects unless checked. |
| `LSGI` | spatial gradient analysis | Continuous gradients may obscure sharp boundaries or multiple overlapping programs. |

## Review Decision

The current evidence supports a conservative Layer 2 conditional decision tree, not a universal ranking. No all-candidate benchmark was found during bounded screening. This package is suitable for method-selection discussion and representative Layer 3/4 audit triage after closure, while all runtime and adapter decisions remain outside this Layer 2 package.
