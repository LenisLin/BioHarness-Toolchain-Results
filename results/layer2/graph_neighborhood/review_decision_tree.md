# Graph / Neighborhood Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded PubMed/review pass, evidence spot-checks, logic review, conditional decision tree, and coverage ledger for the frozen `Graph / Neighborhood` candidate set. It does not define execution surfaces, wrappers, adapter boundaries, callable signatures, environments, or runtime support.

## Reading Rules

- Keep the 14-method freeze unchanged: `CellCharter`, `ENVI`, `mNSF`, `NNMF`, `NSF`, `SOTIP`, `MESA`, `NicheCompass`, `Nicheformer`, `SPARROW`, `CytoCommunity`, `SMORE`, `scHolography`, `SIGEL`.
- Use registry `Subtask` values as branch cues only; they are not separate Layer 2 completion units.
- Treat compute and code access as audit cues. They do not imply BioHarness runtime support.
- Use benchmark and method-paper comparisons only for branch-local ordering, tie-breaks, or caveats. Do not turn them into a global ranking.
- Treat `Closest Alternatives`, `Key Difference`, resource burden, scale sensitivity, and scientific-risk caveats as Layer 2 synthesized judgment unless the method row states direct support.

## Review Pass

### PubMed candidate verification

The frozen candidate rows were checked through bounded PubMed/DOI searches and article metadata screening. The pass confirmed the method-paper identity for rows with PMIDs in the input and resolved the missing SOTIP metadata to DOI `10.1038/s41467-022-34867-5`, PMID `36443314`.

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `CellCharter` | 38066188 | 10.1038/s41588-023-01588-4 | Method-paper identity and code source confirmed. |
| `ENVI` | 38565973 | 10.1038/s41587-024-02193-4 | Method-paper identity and code source confirmed. |
| `mNSF` | 40457480 | 10.1186/s13059-025-03601-x | Published method-paper identity and code source confirmed. |
| `NNMF` | 41546049 | 10.1186/s13059-025-03846-6 | Method-paper identity and code source confirmed. |
| `NSF` | 36587187 | 10.1038/s41592-022-01687-w | Method-paper identity and code source confirmed. |
| `SOTIP` | 36443314 | 10.1038/s41467-022-34867-5 | Method-paper identity resolved; input row lacked PMID/DOI. |
| `MESA` | 40169791 | 10.1038/s41588-025-02119-z | Method-paper identity and code source confirmed. |
| `NicheCompass` | 40102688 | 10.1038/s41588-025-02120-6 | Method-paper identity and code source confirmed. |
| `Nicheformer` | 41168487 | 10.1038/s41592-025-02814-z | Method-paper identity and code source confirmed. |
| `SPARROW` | 40112778 | 10.1016/j.cels.2025.101235 | Method-paper identity confirmed; primary code link unresolved. |
| `CytoCommunity` | 38191930 | 10.1038/s41592-023-02124-2 | Method-paper identity and code source confirmed. |
| `SMORE` | 39754206 | 10.1186/s13059-024-03467-5 | Method-paper identity confirmed; primary code link unresolved. |
| `scHolography` | 38915088 | 10.1186/s13059-024-03299-3 | Method-paper identity and code source confirmed. |
| `SIGEL` | 40983914 | 10.1186/s13059-025-03748-7 | Method-paper identity confirmed; public GitHub listed but code-availability wording needs later audit. |

### Benchmark/review screening

Query concept:

```text
("spatial transcriptomics" OR "spatially resolved transcriptomics")
AND (neighborhood OR niche OR microenvironment OR "cellular neighborhood")
AND (benchmark OR review OR comparison)
```

Screening conclusion: no suitable independent benchmark was found that jointly evaluates all 14 frozen methods as Graph / Neighborhood methods. The strongest external benchmark is the Nature Methods 2024 spatial clustering benchmark, which is relevant for SOTIP and domain-like neighborhood methods but is not a full neighborhood/niche benchmark. Several method papers include their own benchmarks, but these are task-local and often author-run.

Logic-review consequence: the decision tree below is branch-local. It does not rank all methods globally and does not name a default method.

## Evidence Strength Caveats

- Benchmark scope mismatch: spatial-domain clustering benchmarks do not fully cover motif discovery, covariance neighborhoods, reconstructed neighborhoods, ecological metrics, or foundation-model spatial context prediction.
- Author-run benchmarks: CellCharter, NicheCompass, NNMF, CytoCommunity, scHolography, SMORE, Nicheformer, and SIGEL include useful method-paper comparisons, but these are not independent all-candidate evaluations.
- Reference and prior bias: ENVI and scHolography depend on reference matching; NicheCompass depends partly on communication/regulatory priors; Nicheformer depends on a large pretrained corpus.
- Annotation compression: CytoCommunity and SMORE can be powerful for cell-phenotype maps, but phenotype labels can obscure continuous cell states.
- Factor interpretability: NSF, mNSF, NNMF, and SIGEL require biological interpretation of factors, signatures, or embeddings; they are not automatically validated niches.
- Code gaps: SPARROW and SMORE need later code-link audit before any engineering-facing decision.

## Decision Tree

### Step 0. Are you actually in this topic?

If the main task is segmentation, deconvolution, cell-type inference, cell-cell communication inference, spatially variable gene testing, or domain clustering alone:

- Start with that analysis problem first.
- Return here only if the explicit selection target is neighborhood, niche, microenvironment, graph, motif, or spatial-context representation.

If the task asks for runtime support, package commands, adapters, or callable signatures:

- Stop at Layer 2 selection logic.
- Use later Layer 3/4 audit artifacts when available.

### Step 1. What is the desired output object?

If the desired output is discrete cellular niches or tissue cellular neighborhoods:

- For broad spatial omics niche discovery and cross-sample comparison, prefer / consider `CellCharter`.
- For segmented cell-phenotype maps and supervised condition-specific TCN discovery, prefer / consider `CytoCommunity`.
- If signaling-program interpretation is essential and deep learning is acceptable, continue to Step 4 for `NicheCompass`.

If the desired output is continuous factors or soft gene-program neighborhoods:

- For single-sample interpretable spatial factors, prefer / consider `NSF`.
- For multi-sample alignment-free factorization, prefer / consider `mNSF`.
- For large-scale overlapping multicellular gene signatures, prefer / consider `NNMF`.
- For gene-level spatial representation learning, prefer / consider `SIGEL`.

If the desired output is ecological metrics, diversity maps, hotspots, or tissue-state shifts:

- Prefer / consider `MESA`.
- Consider `SOTIP` when microenvironment graph modeling and differential microenvironment analysis are central.

If the desired output is ordered cell-type motifs:

- Prefer / consider `SMORE`.
- Carry the null-model and graph-construction caveat explicitly.

If the desired output is reconstructed spatial neighborhoods from single-cell data:

- Prefer / consider `scHolography` when a spatial reference and scRNA query are available.
- Consider `ENVI` when covariance-defined spatial context and imputation are also part of the task.

### Step 2. Is external reference, annotation, or pretrained prior acceptable?

If no reference or prior should drive the analysis:

- Prefer / consider `CellCharter`, `NSF`, `mNSF`, `NNMF`, `SOTIP`, or the reference-free branch of `SIGEL` depending on the desired output.
- Avoid first-pass use of `ENVI`, `scHolography`, `Nicheformer`, and heavily prior-centered uses of `NicheCompass`.

If a matched scRNA-seq reference is available and intended:

- Prefer / consider `ENVI` for covariance-defined niche inference and expression imputation.
- Prefer / consider `scHolography` for transcriptome-to-space neighborhood reconstruction.

If curated communication or regulatory priors are central to the question:

- Prefer / consider `NicheCompass`.
- Keep prior-database coverage and false-mechanism caveats visible.

If foundation-model transfer is explicitly desired and high compute is acceptable:

- Prefer / consider `Nicheformer`.
- Keep corpus-bias, auditability, and resource caveats visible.

### Step 3. Is the analysis multi-sample, cohort-level, or atlas-scale?

If the task is multi-sample factor interpretation without reliable spatial alignment:

- Prefer / consider `mNSF`.

If the task is large-scale overlapping signatures across many cells or slices:

- Prefer / consider `NNMF`.

If the task is cross-sample or cohort niche comparison:

- Prefer / consider `CellCharter` or `MESA`, depending on whether labels or ecological metrics are the output.

If the task is supervised condition-specific neighborhoods from labeled tissue images:

- Prefer / consider `CytoCommunity`.

If the task is atlas-scale graph deep learning or spatial reference mapping:

- Prefer / consider `NicheCompass` or `Nicheformer`, depending on whether interpretability through programs or foundation-model transfer is the main goal.

### Step 4. Resource and audit gate

If the analysis must remain CPU-first:

- Read first: `CellCharter`, `NNMF`, `NSF`, `SOTIP`, `MESA`, `SMORE`.
- Keep `NSF` and `mNSF` under extra memory scrutiny despite CPU labels.

If GPU/deep-learning workflows are acceptable:

- Expand reading to: `ENVI`, `mNSF`, `NicheCompass`, `Nicheformer`, `SPARROW`, `CytoCommunity`, `scHolography`, `SIGEL`.
- Treat `Nicheformer` as a high-resource foundation-model branch, not a routine first read.

If code availability must be resolved before deeper work:

- Defer first-pass engineering consideration of `SPARROW` and `SMORE` until code-link audit is complete.
- Treat `SIGEL` as code-available but flagged for wording inconsistency in the article's availability statements.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `CellCharter` | discrete niche discovery and cross-sample comparison | cluster granularity and preprocessing sensitivity |
| `ENVI` | covariance niche representation and scRNA-assisted inference | reference mismatch and covariance-choice bias |
| `mNSF` | multi-sample alignment-free factors | high memory/scale pressure and factor interpretability |
| `NNMF` | large-scale soft spatial signatures | soft outputs may not match hard-domain expectations |
| `NSF` | single-sample spatial factors | high memory examples and factor labeling ambiguity |
| `SOTIP` | microenvironment graph modeling | evidence overlaps spatial-domain benchmarks |
| `MESA` | ecological diversity and hotspots | descriptive metrics are not mechanistic causality |
| `NicheCompass` | communication-aware graph niche embeddings | prior-database and deep-learning audit bias |
| `Nicheformer` | foundation-model spatial context transfer | high compute and corpus-bias risk |
| `SPARROW` | microenvironment-zone-specific cell states | code and scale evidence unresolved |
| `CytoCommunity` | cell-phenotype TCN discovery | annotation compression and phenotype-label bias |
| `SMORE` | ordered spatial motif discovery | null-model and graph-construction dependence |
| `scHolography` | spatial neighborhood reconstruction | reference-match dependence |
| `SIGEL` | spatial gene representation learning | indirect neighborhood evidence and code wording audit |

## Review Decision

The current evidence supports a conditional Layer 2 decision tree, not a universal method ranking. The package is suitable for method-selection discussion and representative Layer 3/4 audit triage after closure. Runtime support, adapter scope, environment capsules, callable signatures, and default methods remain outside this package.
