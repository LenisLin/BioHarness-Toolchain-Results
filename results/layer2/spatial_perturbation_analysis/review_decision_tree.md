# Spatial Perturbation Analysis Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records bounded PubMed/publisher verification, benchmark/review screening, targeted boundary search, logic review, and a conditional decision tree for the frozen `Spatial Perturbation Analysis` candidate set. It does not define execution surfaces, wrappers, adapter boundaries, callable signatures, environments, or runtime support.

## Reading Rules

- Keep the five-method freeze unchanged: `CONCERT`, `Celcomen`, `Spatial-ZEDNet`, `River`, `Perturb-STNet`.
- Treat `CDS` / counterfactual directional cell-cell influence as a Cell-Cell Communication boundary item, not a Spatial Perturbation candidate.
- Use registry subtasks as branch cues only; they are not separate Layer 2 completion units.
- Treat compute as a branch-local resource gate. It cannot override scientific fit.
- Use method-paper evidence for direct identity and claimed task shape.
- Treat `Closest Alternatives`, `Key Difference`, memory burden, scale sensitivity, and scientific caveats as Layer 2 synthesized judgment unless a row states direct support.
- Do not turn method-paper comparisons into global rankings.
- Preserve method-native causal and counterfactual language only with explicit assumption and validation caveats.

## Candidate Verification

The original candidates were verified with PubMed E-utilities on `2026-05-01`; the boundary additions were checked on `2026-05-02`.

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `CONCERT` | 41292874 | 10.1101/2025.11.08.686890 | Method identity confirmed; PubMed lists a bioRxiv preprint, publication date 2025-11-20, and an abstract describing niche-aware perturbation-response prediction. |
| `Celcomen` | 41851134 | 10.1038/s41467-026-69856-5 | Method identity confirmed; PubMed lists a Nature Communications article, publication date 2026-03-18, and an abstract describing causal disentanglement and counterfactual spatial transcriptomics. |
| `Spatial-ZEDNet` | 42001470 | 10.1093/bib/bbag166 | PubMed/DOI identity confirmed in Briefings in Bioinformatics, published 2026-03-01 / indexed 2026-04-20. |
| `River` | 40603296 | 10.1038/s41467-025-61476-9 | PubMed/PMC/Nature Communications identity confirmed; article describes DSEP prioritization across conditions with interpretable deep learning. |
| `Perturb-STNet` | 40545244 | 10.1093/bib/bbaf277 | PubMed/DOI identity confirmed; article describes a network-based spatiotemporal framework for ranking perturbation-associated regulators. |

Code-link evidence:

| Tool | Code link checked or reported | Result |
| --- | --- | --- |
| `CONCERT` | https://github.com/mims-harvard/CONCERT | HTTP 200 observed in original pass. |
| `Celcomen` | https://github.com/Teichlab/celcomen | HTTP 200 observed in original pass. |
| `Spatial-ZEDNet` | https://github.com/NIEHS/Spatial-ZEDINet | Reported by the publisher page; Zenodo archive also reported. |
| `River` | https://github.com/C0nc/River | Reported in Nature Communications / PMC code-availability text. |
| `Perturb-STNet` | https://github.com/NIEHS/Perturb-STNet | Reported by the publisher page. |

Code access is an audit cue only and is not BioHarness runtime support.

## Benchmark / Review Screening

The original PubMed benchmark/review query and the 2026-05-02 targeted boundary search found method-paper simulations, method-paper benchmarks, case studies, and candidate-specific comparisons. No independent benchmark was found that jointly compares and ranks all five candidates.

Review conclusion: use branch-local benchmark evidence and explicit Layer 2 logic review. Direct method-paper evaluations can support task-fit descriptions and caveats, but they do not justify a global all-method ranking.

## Evidence Spot-checks

| Tool | Direct support | Layer 2 synthesis / caution |
| --- | --- | --- |
| `CONCERT` | PubMed/DOI identity confirmed; indexed abstract describes spatial perturbation transcriptomics, niche-aware generative modeling, patch/border/niche tasks, Perturb-map evaluation, and case studies. | Preprint-only status weakens evidence strength relative to peer-reviewed methods; counterfactual predictions need biological plausibility review. |
| `Celcomen` | PubMed/DOI identity confirmed; indexed abstract describes causal disentanglement, generative graph neural modeling, counterfactual spatial transcriptomics, simulations, and tissue validations. | Causal interpretation depends on model assumptions and validation design; recent method-paper-local evidence only. |
| `Spatial-ZEDNet` | PubMed/DOI identity confirmed; article describes spatial DEGs and DAGs across control and perturbed/treatment conditions with zero-inflated spatial modeling. | Observed perturbation-effect detection, not causal/counterfactual response generation. |
| `River` | PubMed/PMC/Nature identity confirmed; article describes River as an interpretable deep learning framework for condition-relevant DSEP gene prioritization. | Attribution and ranking support prioritization, not causal perturbation mechanism; broader condition labels should not be overread as direct perturbagens. |
| `Perturb-STNet` | PubMed/DOI identity confirmed; article describes spatiotemporal regulator prioritization and network modeling under perturbation. | Network/regulator outputs are assumption-bound and should not be treated as experimentally confirmed causal mechanisms. |

## Logic Review

The topic now has five branch-local method-selection routes:

- A niche-aware predictive response branch for spatial perturbation transcriptomics where local niche, border, or microenvironment response context is central.
- A causal counterfactual branch where the user asks for disentangled intra- and inter-cellular programs and counterfactual tissue perturbation modeling.
- An observed spatial perturbation-effect branch for DEGs/DAGs under control versus perturbed or treatment conditions.
- A perturbation-responsive spatial pattern prioritization branch for condition-relevant DSEP ranking and attribution.
- A spatiotemporal perturbation regulator branch for time- and network-aware regulator prioritization.

Because no independent candidate-set benchmark was found, the decision tree uses task fit, evidence status, and scientific caveats rather than ranking.

## Decision Tree

### Step 0. Are you actually in this topic?

If the main task is generic differential expression, condition comparison, or marker discovery without spatial perturbation-effect modeling:

- Do not start here.
- Use the relevant comparative or differential analysis topic when available.

If the main task is spatial domain detection, cell-cell communication, graph/neighborhood analysis, denoising, imputation, or super-resolution:

- Use the corresponding analysis problem first.
- Return here only if the stated goal is perturbation-response, perturbation-effect, or counterfactual perturbation modeling.

If the method under consideration is `CDS` / counterfactual directional cell-cell influence:

- Treat it as a Cell-Cell Communication boundary item, not a Spatial Perturbation Analysis candidate.

### Step 1. Is the question primarily predictive spatial perturbation-response modeling?

If yes, and the task needs local niche, border, patch, or microenvironment response context:

- Prefer / consider `CONCERT`.
- Carry forward the caveat that the direct evidence is a bioRxiv preprint and method-paper-local evaluation, not an independent benchmark.

If no:

- Continue to Step 2.

### Step 2. Is the question primarily causal or counterfactual tissue perturbation modeling?

If yes, and the analysis needs disentanglement of intra- and inter-cellular programs:

- Prefer / consider `Celcomen`.
- Carry forward the caveat that causal language depends on assumptions and validation design.

If no:

- Continue to Step 3.

### Step 3. Is the question observed perturbation-effect detection across spatial conditions?

If the goal is spatial DEGs plus differential gene activation under treatment, exposure, infection, or disease perturbation:

- Prefer / consider `Spatial-ZEDNet`.
- Keep clear that this is observed perturbation-effect detection, not response generation or causal proof.

If the goal is ranking differential spatial expression patterns or condition-relevant spatial features:

- Prefer / consider `River`.
- Treat attribution scores as prioritization evidence, not causal mechanism.

If the goal is time-aware or network-aware regulator prioritization under perturbation:

- Prefer / consider `Perturb-STNet`.
- Keep spatiotemporal network assumptions visible.

### Step 4. Evidence-strength gate

If peer-reviewed evidence is required for first reading:

- Read branch-matched peer-reviewed candidates first: `Celcomen`, `Spatial-ZEDNet`, `River`, or `Perturb-STNet`.
- Do not interpret this as a default method claim; it is a publication-status branch only.

If frontier preprint evidence is acceptable and the scientific question is niche-aware response prediction:

- Read `CONCERT` within that branch.

### Step 5. Resource and audit gate

If GPU dependence is a blocker:

- Do not start with `CONCERT`.
- Treat `River` as needing compute audit because deep-learning implementation details can vary.

If later Layer 3/4 audit is being scoped:

- Include all five methods only as a representative branch-coverage batch.
- The audit batch is not a runtime-support statement.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `CONCERT` | niche-aware perturbation-response prediction | preprint-only evidence, GPU dependence, no independent benchmark |
| `Celcomen` | causal counterfactual tissue perturbation modeling | causal assumptions, recent publication, no independent benchmark |
| `Spatial-ZEDNet` | observed spatial DEGs/DAGs under perturbation or exposure | not causal/counterfactual |
| `River` | perturbation-responsive spatial pattern prioritization | attribution/ranking is not causal mechanism |
| `Perturb-STNet` | spatiotemporal perturbation regulator prioritization | network/regulator assumptions; not experimental causality proof |

## Review Decision

The current evidence supports a conditional, branch-local Layer 2 decision tree after human approval to add `Spatial-ZEDNet`, `River`, and `Perturb-STNet`. It does not support a universal method ranking, default-method claim, execution-ready claim, or adapter-readiness claim.
