# Spatial Trajectory Analysis Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded PubMed verification pass, benchmark/review screening, evidence spot-checks, branch-local decision tree, and coverage ledger for the frozen `Spatial Trajectory Analysis` candidate set. It does not define execution surfaces, wrappers, adapter boundaries, callable signatures, environments, default methods, or runtime support.

## Reading Rules

- Keep the seven-method freeze unchanged: `SpaTrack`, `spVelo`, `STT`, `SIRV`, `PearlST`, `TopoVelo`, `CASCAT`.
- Treat registry `Subtask` values as branch cues only.
- Use compute and code access as branch-local audit cues, not as evidence of BioHarness support.
- Use benchmark or review evidence only for caveats and branch-local interpretation. Do not convert it into a global ranking.
- Treat `Closest Alternatives`, `Key Difference`, resource burden, scale sensitivity, and many scientific caveats as Layer 2 synthesized judgment unless a method-paper record directly supports the statement.

## PubMed Candidate Verification

All seven frozen candidate PMIDs and DOIs were verified with PubMed E-utilities on 2026-05-01.

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `SpaTrack` | 39904341 | 10.1016/j.cels.2025.101194 | Method-paper identity and optimal-transport spatial trajectory claim confirmed. |
| `spVelo` | 40790237 | 10.1186/s13059-025-03701-8 | Method-paper identity and multi-batch spatial RNA-velocity claim confirmed. |
| `STT` | 38755322 | 10.1038/s41592-024-02266-x | Method-paper identity and spatial transition tensor claim confirmed. |
| `SIRV` | 39108639 | 10.1093/nargab/lqae100 | Method-paper identity and reference-enriched single-cell-resolution spatial RNA-velocity claim confirmed. |
| `PearlST` | 38812530 | 10.34133/research.0390 | Method-paper identity and spatiotemporal-structure/pseudotime claim confirmed. |
| `TopoVelo` | 40670711 | 10.1038/s41587-025-02688-8 | Method-paper identity and topological velocity claim confirmed. |
| `CASCAT` | 40829806 | 10.1093/nar/gkaf791 | Method-paper identity and causal spatial trajectory claim confirmed. |

## Code-Link Verification

PMC code-availability checks were available for methods with PMCID-linked full text.

| Tool | PubMed/PMC code-link result |
| --- | --- |
| `SpaTrack` | Frozen registry input gives `https://github.com/yzf072/spaTrack`; no PubMed/PMC code-availability section was confirmed in this pass. |
| `spVelo` | PMC confirms GitHub `https://github.com/VivLon/spVelo` and a Zenodo record for related simulation code. |
| `STT` | PMC confirms GitHub `https://github.com/cliffzhou92/STT/tree/release`. |
| `SIRV` | PMC confirms GitHub `https://github.com/tabdelaal/SIRV` and a Zenodo source-code release. |
| `PearlST` | PMC confirms a Python package at `https://github.com/SunXQlab/PearlST` and analysis code at `https://github.com/SunXQlab/PearlST-Code`. |
| `TopoVelo` | PubMed record did not expose a PMCID or confirmed code link in this bounded pass. |
| `CASCAT` | PMC confirms source code and analysis scripts at `https://doi.org/10.6084/m9.figshare.28342865.v2`. |

## Benchmark / Review Screening

Screening query:

```text
("spatial transcriptomics"[Title/Abstract] OR "spatially resolved transcriptomics"[Title/Abstract])
AND
(trajectory[Title/Abstract] OR pseudotime[Title/Abstract] OR "RNA velocity"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR comparison[Title/Abstract] OR review[Publication Type])
```

Result: 39 PubMed records. The returned set included broad spatial-transcriptomics reviews, broad transcriptomics reviews, disease-specific or platform-specific papers, and method papers. It did not yield an independent benchmark that jointly evaluates and ranks the frozen seven-method candidate set.

Candidate-name benchmark/review query:

```text
(SpaTrack OR spVelo OR "spatial transition tensor" OR SIRV OR PearlST OR TopoVelo OR CASCAT)
AND
(benchmark OR comparison OR review)
```

Result: 4 PubMed records, dominated by acronym collisions or unrelated uses; no suitable all-candidate trajectory benchmark was identified.

Exact phrase query:

```text
"spatial trajectory inference"[Title/Abstract]
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR comparison[Title/Abstract])
```

Result: 1 PubMed record, not a dedicated benchmark of the frozen candidate set.

Review conclusion: no suitable independent benchmark was found that supports a global ranking across the frozen seven candidates. Method-paper-local comparisons exist for several methods, especially `STT`, `PearlST`, and `CASCAT`, but those comparisons are not interchangeable with a cross-method independent benchmark. This package therefore uses an explicit logic review based on the method table, field registry, and scientific caveats.

## Evidence Spot-Checks

| Tool | Direct support | Layer 2 synthesis / caution |
| --- | --- | --- |
| `SpaTrack` | PubMed abstract supports optimal transport over expression and spatial position for trajectory reconstruction and multi-sample temporal intervals. | Code link comes from frozen registry input, not PubMed/PMC in this pass; causality and directionality remain interpretation risks. |
| `spVelo` | PubMed/PMC supports multi-batch spatial RNA velocity, downstream uncertainty and driver-marker applications, and GitHub availability. | GPU/resource and scale implications are not BioHarness validation; batch effects can influence velocity interpretation. |
| `STT` | PubMed/PMC supports mRNA splicing plus spatial transcriptomics, multiscale tensor dynamics, streamlines, attractors, and GitHub availability. | Tensor/attractor interpretability depends on data quality and biological validation; method-paper benchmarks are local evidence. |
| `SIRV` | PubMed/PMC supports reference scRNA-seq enrichment of spatial data with spliced/unspliced expression and GitHub availability. | Reference mismatch and reference composition bias are central scientific risks. |
| `PearlST` | PubMed/PMC supports PDE-enhanced adversarial graph autoencoding, histology feature use, trajectory/pseudotime claims, and code locations. | Trajectory interpretation may be entangled with spatial-domain and representation-learning objectives. |
| `TopoVelo` | PubMed supports topological velocity inference and spatially coupled differential-equation modeling. | No PubMed/PMC code link was confirmed; model assumptions and implementation traceability need later audit. |
| `CASCAT` | PubMed/PMC supports tree-shaped structural causal modeling, spatial trajectory benchmarks, and Figshare code availability. | Causal language is model-based, not experimental causality; root choice and unmeasured confounding remain concerns. |

## Decision Tree

### Step 0. Are you actually in Spatial Trajectory Analysis?

If the main task is spatial domain clustering, segmentation, cell type inference, cell-cell communication, clonal analysis, perturbation analysis, preprocessing, or denoising:

- Use the corresponding analysis problem first.
- Return here only if the stated decision is about spatial trajectory, pseudotime, RNA velocity, state-transition dynamics, or causal trajectory inference.

### Step 1. Is the primary question RNA velocity or cell fate dynamics from velocity-like signal?

If yes:

- Continue to Step 2.

If no:

- Continue to Step 5.

### Step 2. Is a high-quality matched or relevant scRNA-seq reference needed to supply spliced/unspliced information?

If yes:

- Prefer / consider `SIRV`.
- Carry forward the reference-bias and reference-mismatch caveat.

If no:

- Continue to Step 3.

### Step 3. Is the velocity problem explicitly multi-batch?

If yes:

- Prefer / consider `spVelo`.
- Keep batch and resource caveats visible.

If no:

- Continue to Step 4.

### Step 4. Which velocity interpretation is needed?

If multiscale state-specific dynamics, transition tensors, streamlines, or attractor paths are central:

- Prefer / consider `STT`.

If spatially coupled topological velocity and interpretable spatial cell-state dependencies are central:

- Prefer / consider `TopoVelo`.
- Keep code-link traceability as a later audit concern.

### Step 5. Is the task an expression-plus-location differentiation trajectory rather than velocity?

If yes, and optimal-transport transition costs are a good conceptual fit:

- Prefer / consider `SpaTrack`.
- Keep trajectory direction and biological-causality caveats visible.

If no:

- Continue to Step 6.

### Step 6. Is the task latent spatiotemporal structure or pseudotime from representation learning?

If yes:

- Prefer / consider `PearlST`.
- Use this branch when histology/spatial-feature integration and latent embeddings are acceptable.
- Keep representation/objective entanglement caveats visible.

If no:

- Continue to Step 7.

### Step 7. Is a causal or Markovian tree-shaped trajectory the explicit analysis goal?

If yes:

- Prefer / consider `CASCAT`.
- Keep the distinction between model-based causal structure and experimental causality visible.

If no:

- Re-check the problem statement. The current frozen set may not contain a clean first-read method for the requested trajectory framing.

### Step 8. Resource and traceability gate

If a CPU-first reading set is required:

- Read first: `SpaTrack`, `STT`, `SIRV`.
- Do not interpret CPU labels as runtime support inside BioHarness.

If optional GPU/deep-model routes are acceptable:

- Expand reading to: `spVelo`, `PearlST`, `TopoVelo`, `CASCAT`.

If code-link traceability must be confirmed before method reading:

- Deprioritize `TopoVelo` until a later audit confirms a primary implementation source.
- Treat `SpaTrack` as available by frozen registry input but still needing PubMed/PMC or publisher-level code-link confirmation in later audit.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `SpaTrack` | expression-plus-location optimal-transport trajectory | directionality and causality are model interpretations |
| `spVelo` | multi-batch spatial RNA velocity | batch effects and resource needs require scrutiny |
| `STT` | tensor dynamics and attractor paths | tensor interpretation needs biological validation |
| `SIRV` | reference-enriched spatial RNA velocity | reference mismatch and bias |
| `PearlST` | latent spatiotemporal structure / pseudotime | representation and spatial-domain objective entanglement |
| `TopoVelo` | topological velocity | code-link traceability gap in bounded PubMed/PMC pass |
| `CASCAT` | causal trajectory tree | model-based causality is not experimental causality |

## Review Decision

The current evidence supports a conditional Layer 2 decision tree, not a global ranking. No suitable independent all-candidate benchmark was found. The topic is suitable for method-selection discussion and representative Layer 3/4 audit triage after closure, while runtime and adapter decisions remain outside this Layer 2 package.

