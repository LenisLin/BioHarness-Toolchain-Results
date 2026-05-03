# Cell-Cell Communication Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded benchmark/review screen, evidence spot-checks, logic review, decision tree, and coverage ledger for the frozen `Cell-Cell Communication` candidate set. It does not define execution surfaces, wrappers, adapter boundaries, callable signatures, environments, or runtime support.

## Reading Rules

BioHarness records method-native CCC, causal, pathway, contact, and mechanistic language as cited method evidence only. This Layer 2 package does not independently validate physical contact, mechanism, pathway causality, or experimental causal truth claims.

- Keep the 16-method freeze unchanged: `CellChat`, `CellNEST`, `COMMOT`, `NicheNet`, `SpaOTsc`, `SpaTalk`, `SpatialDM`, `DeepTalk`, `stLearn`, `COZI`, `MISTy`, `Spacia`, `SVCA`, `SPIDER`, `Scriabin`, `CausalCCC`.
- Keep `Giotto` excluded from candidate counts and method-selection branches.
- Use Layer 1 `Subtask` values as branch cues only.
- Treat compute and code access as audit cues, not runtime support.
- Use benchmark or review evidence branch-locally. Do not convert it into a universal ranking.
- In evidence notes, separate PubMed/PMC-verified facts from Layer 2 synthesized judgment.

## Review Pass

### PubMed candidate verification

The 16 frozen candidate identities were verified by PubMed PMID/DOI checks, with corrected identifiers added where the frozen input was incomplete.

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `CellChat` | 33597522 | 10.1038/s41467-021-21246-9 | Method-paper identity confirmed. |
| `CellNEST` | 40481363 | 10.1038/s41592-025-02721-3 | Method-paper identity and public code link confirmed by PubMed/PMC. |
| `COMMOT` | 36690742 | 10.1038/s41592-022-01728-4 | Method-paper identity confirmed. |
| `NicheNet` | 31819264 | 10.1038/s41592-019-0667-5 | Method-paper identity confirmed. |
| `SpaOTsc` | 32350282 | 10.1038/s41467-020-15968-5 | Method-paper identity confirmed. |
| `SpaTalk` | 35908020 | 10.1038/s41467-022-32111-8 | Method-paper identity confirmed. |
| `SpatialDM` | 37414760 | 10.1038/s41467-023-39608-w | Method-paper identity confirmed. |
| `DeepTalk` | 39155292 | 10.1038/s41467-024-51329-2 | PubMed/PMC verified matching publication and code identity as `DeepTalk`. |
| `stLearn` | 38007580 | 10.1038/s41467-023-43120-6 | Method-paper identity confirmed. |
| `COZI` | 41986357 | 10.1038/s41467-026-71699-z | Benchmark/method-paper identity and COZI code links confirmed by PubMed/PMC. |
| `MISTy` | 35422018 | 10.1186/s13059-022-02663-5 | Method-paper identity confirmed. |
| `Spacia` | 39227721 | 10.1038/s41592-024-02408-1 | Method-paper identity confirmed; code link not confirmed in bounded pass. |
| `SVCA` | 31577949 | 10.1016/j.celrep.2019.08.077 | Method-paper identity confirmed. |
| `SPIDER` | 40841363 | 10.1038/s41467-025-62988-0 | Method-paper identity and public code link confirmed by PubMed/PMC. |
| `Scriabin` | 37169965 | 10.1038/s41587-023-01782-z | Method-paper identity confirmed; PMC code-link retrieval was blocked by browser challenge. |
| `CausalCCC` | 40366019 | 10.1093/nar/gkaf404 | Method-paper and web-server availability confirmed by PubMed/PMC; source-code availability not asserted. |

### Benchmark/review screening

Queries screened PubMed for spatial transcriptomics plus CCC/LR/neighborhood terms crossed with benchmark, comparison, review, or benchmarking terms.

Result:

- A relevant `COZI` / neighbor-preference comparison exists: `Comparison and optimization of cellular neighbor preference methods for quantitative tissue analysis` (PMID 41986357). It supports branch-local logic for cell-label neighborhood-preference methods and includes comparison context for MISTy-style use, but it does not benchmark all frozen CCC candidates.
- `CellNEST`, `SPIDER`, and several other method papers report method-local comparisons or benchmarks. These are useful evidence but are not independent all-candidate rankings.
- A broad software meta-review for spatial transcriptomics analysis software was retrieved (PMID 40710313), but it is too broad to rank this 16-method CCC set.
- No suitable independent benchmark was found that jointly compares LR baselines, spatial transport/co-expression methods, relay graph methods, neighborhood-preference models, single-cell comparative CCC, and causal pathway-aware CCC.

Review conclusion: use branch-local benchmark evidence where available and explicit Layer 2 logic review elsewhere. Do not produce a global ranking or default method.

## Evidence Spot-checks

| Branch | Direct support | Layer 2 synthesis / caution |
| --- | --- | --- |
| Broad LR baselines | `CellChat` and `NicheNet` PMIDs/DOIs and code links are verified from the frozen input. | Spatial relevance depends on how spatial context or annotations are supplied; neither is treated as a spatial-first default. |
| Spatial LR / transport / co-expression | `COMMOT`, `SpaOTsc`, `SpaTalk`, and `SpatialDM` identities are PubMed-verified. | Differences among transport, knowledge graph, and co-expression are branch-local selection cues, not universal quality rankings. |
| Graph / relay / single-cell CCC | `CellNEST` and `DeepTalk` include graph-attention formulations and public code links. | Graph attention and scRNA/ST integration increase modeling flexibility but also raise calibration, reference-match, and scale concerns. |
| Neighborhood / interaction-effect modeling | COZI benchmark and MISTy/SVCA/Spacia method identities are verified. | These methods answer neighborhood or contextual interaction questions, not necessarily molecular LR communication. |
| Spatially variable LR inference | SPIDER identity and code link are verified, including downstream functional support framing. | Functional support increases plausibility but does not prove causality. |
| Comparative and causal interpretation | Scriabin and CausalCCC method identities are verified. | Scriabin code access remains unclear in this bounded pass; CausalCCC is a web-server interpretation layer, not local runtime support. |

## Decision Tree

### Step 0. Are you actually in this topic?

If the main task is normalization, denoising, integration, cell type inference, spatial domain identification, trajectory analysis, or visualization:

- Use the corresponding analysis problem first.
- Return here only if the explicit question is communication, interaction, LR inference, neighbor preference, or CCC pathway interpretation.

If the method under consideration is `Giotto`:

- Do not include it as a candidate in this package.
- Treat it as an excluded broad ecosystem package per controller policy.

### Step 1. Is the desired output ligand-receptor or sender-receiver communication?

If yes, continue to Step 2.

If no, and the desired output is cell-label neighborhood preference or interaction-effect modeling:

- Prefer / consider `COZI` when conditional neighbor-preference scores over cell-type pairs are the target.
- Prefer / consider `MISTy` when multiview contextual influence or predictor-target spatial views are the target.
- Prefer / consider `SVCA` when variance decomposition of spatial interaction effects is the target.
- Prefer / consider `Spacia` when Bayesian/probabilistic spatial interaction modeling is the target, while keeping code-access uncertainty visible.

### Step 2. Is this a broad baseline CCC interpretation rather than spatial-first inference?

If a widely adopted LR network baseline is needed:

- Prefer / consider `CellChat`.

If the key question is ligand-to-target regulatory potential in receiver cells:

- Prefer / consider `NicheNet`.

If spatial proximity, tissue geometry, relay structure, or spatial variability is central:

- Continue to Step 3.

### Step 3. Is spatial geometry part of the primary CCC signal?

If sender-receiver geometry or transport-style communication is central:

- Prefer / consider `COMMOT`.
- Consider `SpaOTsc` when an early transport/spatial-signaling workflow is specifically relevant.

If the question is spatial LR co-expression or spatially patterned LR calls:

- Prefer / consider `SpatialDM` for spatial co-expression style LR analysis.
- Prefer / consider `SPIDER` when spatially variable LR interactions need downstream functional support.

If knowledge-graph-supported spatial LR interpretation is desired:

- Prefer / consider `SpaTalk`.

### Step 4. Is single-cell or relay-network resolution required?

If relay-network communication, repeated LR-LR chains, or graph attention over spatial cells/spots is the main question:

- Prefer / consider `CellNEST`.

If paired or matched scRNA-seq plus spatial data are intended for single-cell-resolution CCC:

- Prefer / consider `DeepTalk`, using the verified DeepTalk publication and code identity.

If single-cell CCC comparison rather than spatial-first modeling is the main question:

- Prefer / consider `Scriabin`, while carrying code-access uncertainty from this bounded pass.

### Step 5. Is CCC analysis embedded in a broader workflow?

If LR analysis is needed inside a broader stLearn trajectory/tissue-context workflow:

- Prefer / consider `stLearn`.
- Keep the method-family leakage caveat visible: its CCC role should not be promoted into a dedicated CCC default.

If LR calls already exist and the next task is intracellular pathway interpretation:

- Prefer / consider `CausalCCC`.
- Treat it as a pathway-aware web-server interpretation layer, not a primary LR-discovery method or local execution package.

### Step 6. Resource and evidence gate

If a CPU-first, conservative audit path is needed:

- Start reading CPU-labeled candidates within the branch: `CellChat`, `COMMOT`, `NicheNet`, `SpaOTsc`, `SpaTalk`, `SpatialDM`, `stLearn`, `COZI`, `MISTy`, `SVCA`, `SPIDER`.
- Do not interpret CPU labels as BioHarness runtime support.

If graph/deep single-cell models are acceptable:

- Add `CellNEST` and `DeepTalk` to the branch-local read list.
- Require extra scrutiny for scale, reference match, and calibration.

If code access must be confirmed before any later engineering audit:

- Deprioritize `Spacia`, `Scriabin`, and local-code assumptions for `CausalCCC` until code-access evidence is resolved.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `CellChat` | broad LR baseline | not spatial-first; false-positive LR edges |
| `CellNEST` | relay / graph CCC | graph calibration and scale sensitivity |
| `COMMOT` | spatial transport CCC | transport assumptions and non-causal directionality |
| `NicheNet` | ligand-target interpretation | prior-network and spatial-context bias |
| `SpaOTsc` | early spatial/signaling transport | boundary between mapping and CCC |
| `SpaTalk` | knowledge-graph spatial LR | knowledge-base and annotation dependence |
| `SpatialDM` | spatial LR co-expression | co-expression is not direct communication proof |
| `DeepTalk` | single-cell graph CCC | DeepTalk identity and reference dependence |
| `stLearn` | broader workflow CCC | method-family leakage into trajectory/tissue analysis |
| `COZI` | neighbor preference | cell-label and cohort-design dependence |
| `MISTy` | multiview interaction effects | predictive importance is not mechanism |
| `Spacia` | probabilistic spatial interaction | code access unclear in bounded pass |
| `SVCA` | variance components | model-assumption sensitivity |
| `SPIDER` | spatially variable LR with support | support is plausibility, not causality |
| `Scriabin` | comparative single-cell CCC | spatial contact and code-access uncertainty |
| `CausalCCC` | pathway-aware interpretation | causal model assumptions and web-server/local-code boundary |

## Review Decision

The current evidence supports a conditional, branch-local Layer 2 decision tree. It does not support a universal ranking, a default method, or claims of execution readiness. The package is suitable for method-selection discussion and representative Layer 3/4 audit triage after closure, while all runtime, adapter, environment, and callable-surface decisions remain outside this Layer 2 package.
