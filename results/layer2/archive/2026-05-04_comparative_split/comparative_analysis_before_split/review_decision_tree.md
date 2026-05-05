# Comparative Analysis Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded review pass, evidence spot-checks, logic
review, decision tree, and coverage ledger for the frozen `Comparative
Analysis` candidate set. It does not define execution surfaces, wrappers,
adapter boundaries, callable signatures, environments, or runtime support.

## Reading Rules

- Keep the nine-method freeze unchanged: `C-SIDE`, `Niche-DE`, `SPADE`,
  `SpatialGEE`, `STcompare`, `TissueMosaic`, `SPaSE`, `SpaLinker`,
  `SpatialSPM`.
- Use `Subtask` values as branch cues only; they are not separate Layer 2
  completion units.
- Use benchmark or review evidence only for caveats or branch-local
  interpretation. Do not turn it into a universal ranking.
- Treat compute as a branch-local resource gate after method fit.
- Treat `Closest Alternatives`, `Key Difference`, memory burden, scale
  sensitivity, and bias caveats as Layer 2 synthesized judgment unless the
  method row states direct support.
- Treat code access as a source-trace cue only. It is not BioHarness runtime
  support.

## Review Pass

### PubMed candidate verification

Eight frozen candidate PMIDs were verified with PubMed E-utilities. `STcompare`
has no PMID in the frozen input and was checked as a bioRxiv DOI/preprint row.

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `C-SIDE` | 36050488 | 10.1038/s41592-022-01575-3 | Method-paper identity confirmed. |
| `Niche-DE` | 38217002 | 10.1186/s13059-023-03159-6 | Method-paper identity confirmed. |
| `SPADE` | 39470725 | 10.1093/nar/gkae962 | Method-paper identity confirmed. |
| `SpatialGEE` | 41671295 | 10.1371/journal.pcbi.1013956 | Comparative statistical-method paper identity confirmed. |
| `STcompare` | none | 10.1101/2025.11.21.689847 | Preprint identity carried from frozen input; no PubMed PMID available in this pass. |
| `TissueMosaic` | 40925368 | 10.1016/j.cels.2025.101394 | Method-paper identity confirmed. |
| `SPaSE` | 40480226 | 10.1016/j.cels.2025.101301 | Method-paper identity confirmed. |
| `SpaLinker` | 40480216 | 10.1016/j.xgen.2025.100893 | Method-paper identity confirmed. |
| `SpatialSPM` | 38676948 | 10.1093/nar/gkae293 | Method-paper identity confirmed. |

### Benchmark/review screening

Queries:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
(comparative[Title/Abstract] OR differential[Title/Abstract] OR
 comparison[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 "comparative study"[Publication Type])
```

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
("differentially expressed genes"[Title/Abstract] OR
 "differential expression"[Title/Abstract])
AND
(methods[Title/Abstract] OR benchmark[Title/Abstract] OR
 "comparative study"[Publication Type])
```

Screening result:

- A directly relevant 2026 PLOS Computational Biology comparative study
  supports the spatial-DE statistical-method branch and the inclusion of
  `SpatialGEE`.
- Broad spatial transcriptomics platform comparisons and application reviews
  were retrieved, but they do not jointly evaluate the nine frozen methods as a
  Comparative Analysis method benchmark.
- No suitable independent benchmark was found that can rank all nine frozen
  candidates across cell-type DE, niche DE, spatial pattern comparison,
  pathology scoring, motif learning, and phenotype linking.

Review conclusion: use the 2026 comparative study only for branch-local
interpretation of statistical spatial-DE methods; otherwise use explicit logic
review derived from the field registry and method table.

## Evidence Spot-checks

| Tool | Direct support | Layer 2 synthesis / caution |
| --- | --- | --- |
| `C-SIDE` | PubMed/DOI verify the Nature Methods method paper; frozen input records spacexr code. | Comparator, scale, and cell-type-reference caveats are topic-level synthesis. |
| `Niche-DE` | PubMed/DOI verify the Genome Biology method paper; frozen input records public code. | Niche-definition risk is synthesized from the method role and comparative design. |
| `SPADE` | PubMed/DOI verify the NAR paper; frozen input records public code. | Its placement as a no-registration spatial-pattern comparison branch is Layer 2 synthesis. |
| `SpatialGEE` | PubMed/DOI verify the 2026 comparative statistical-method paper and registry code link. | Benchmark support is branch-local; it does not imply a default or runtime-ready method. |
| `STcompare` | Frozen input records bioRxiv DOI and public code link. | Evidence is preprint-based; structural matching risk remains a major caveat. |
| `TissueMosaic` | PubMed/DOI verify the Cell Systems method paper; official sources indicate public code. | Representation-learning and scale caveats are Layer 2 synthesized judgment. |
| `SPaSE` | PubMed/DOI verify the Cell Systems method paper and pathology-score framing. | Code access is left `unclear`; control-choice and transport-cost caveats are synthesis. |
| `SpaLinker` | PubMed/DOI verify the Cell Genomics method paper and bulk-spatial phenotype-linking role. | Code access is left `unclear`; bulk-to-spatial transfer bias is synthesis. |
| `SpatialSPM` | PubMed/DOI verify the NAR paper; article code availability supports a GitHub link. | Registration/template caveats are Layer 2 synthesis. |

## Logic Review

The frozen set is scientifically heterogeneous. A single ranking would mix
different estimands: cell-type-specific DE, niche-conditioned DE, spatial
correlation-aware DE, differentially patterned genes, learned tissue motifs,
pathology scores, bulk-linked phenotype features, and registered statistical
maps.

Therefore the decision logic starts with the intended comparative estimand and
data design, not with a method popularity or code-access ranking. Code access,
compute, memory, and scale cues are secondary gates. Evidence strength is
carried as a branch caveat: peer-reviewed method papers are stronger than
preprint-only evidence, and a benchmark for one branch cannot validate another
branch's estimand.

## Decision Tree

### Step 0. Are you actually in this topic?

If the main task is domain clustering, cell type inference, cell-cell
communication, perturbation analysis, trajectory analysis, clonal analysis, or
program discovery:

- Do not start here.
- Use the corresponding analysis problem first.

If the main task is ordinary non-spatial bulk/scRNA DE:

- Do not treat this topic as the primary package.
- Return here only when spatial structure is part of the comparison.

### Step 1. Is the intended estimand cell-type-specific expression change?

If yes, and reliable cell type weights, deconvolution, or reference-informed
assignments are available:

- Prefer / consider `C-SIDE`.
- Carry cell-type-reference and composition-confounding caveats.

If no, or if the cell-type assignments are not reliable enough:

- Continue to Step 2.

### Step 2. Is the intended estimand niche-conditioned expression change?

If yes, and niche or neighborhood definitions are scientifically meaningful:

- Prefer / consider `Niche-DE`.
- Carry niche-definition, annotation, and sample-confounding caveats.

If no:

- Continue to Step 3.

### Step 3. Is the goal a direct spatial DE or spatial-pattern gene test across conditions?

If the goal is a correlation-aware spatial DE statistical model:

- Prefer / consider `SpatialGEE`.
- Use the 2026 comparative study as branch-local support only.

If the goal is a broader between-group spatial pattern plus DE analysis without
requiring structural registration:

- Prefer / consider `SPADE`.
- Carry platform, density, and spatial-autocorrelation caveats.

If neither:

- Continue to Step 4.

### Step 4. Are tissues structurally matched or registerable for pattern comparison?

If structurally matched tissues need differential spatial-pattern genes:

- Prefer / consider `STcompare`.
- Carry the preprint-only evidence caveat.

If multiple datasets can be registered to a defensible common image-like
template for pixel-wise mapping:

- Prefer / consider `SpatialSPM`.
- Carry registration, smoothing, and template-choice caveats.

If structural matching or registration is not defensible:

- Continue to Step 5.

### Step 5. Is the comparison cross-sample, cohort-scale, or phenotype-linked rather than a gene-level DE test?

If many spatial samples are available and learned tissue motifs are desired:

- Prefer / consider `TissueMosaic`.
- Carry representation-learning and scale/resource caveats.

If the desired output is a spatially resolved disease-control pathology score:

- Prefer / consider `SPaSE`.
- Carry control-choice and transport-cost caveats; code access is unclear.

If the desired output is phenotype-associated spatial TME features linked
through a bulk cohort:

- Prefer / consider `SpaLinker`.
- Carry bulk-to-spatial transfer and phenotype-confounding caveats; code access
  is unclear.

### Step 6. Resource and evidence gates

If the analysis must stay CPU-first:

- Read first within the relevant branch: `C-SIDE`, `Niche-DE`, `SPADE`,
  `SpatialGEE`, `STcompare`, `SPaSE`, or `SpatialSPM`.
- Do not interpret CPU labels as BioHarness runtime support.

If GPU-backed or representation-learning workflows are acceptable:

- Expand branch-local reading to `TissueMosaic` and `SpaLinker`.
- Keep small-sample and representation-opacity caveats visible.

If peer-reviewed evidence is mandatory:

- Do not start with `STcompare` because the current row is preprint-supported.

If code access must be clear before later engineering audit:

- Do not start with `SPaSE` or `SpaLinker` until a primary code source is
  confirmed.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `C-SIDE` | cell-type-specific DE | deconvolution/reference and composition confounding |
| `Niche-DE` | niche-conditioned DE | niche and annotation definition bias |
| `SPADE` | between-group spatial pattern / DE | spatial autocorrelation and density/platform effects |
| `SpatialGEE` | correlation-aware spatial DE | benchmark transferability and model calibration |
| `STcompare` | structurally matched differential spatial pattern | preprint evidence and matching/registration bias |
| `TissueMosaic` | cross-sample learned tissue motifs | representation opacity and scale/resource burden |
| `SPaSE` | disease-control pathology scoring | control selection and unclear code access |
| `SpaLinker` | bulk-linked phenotype-associated spatial features | bulk-to-spatial transfer and unclear code access |
| `SpatialSPM` | registered pixel-wise statistical mapping | template, smoothing, and registration bias |

## Review Decision

The current evidence supports a Layer 2 conditional decision tree, not a global
ranking. `SpatialGEE` has direct branch-local benchmark support for statistical
spatial DE, but that benchmark does not settle cell-type-specific, niche,
registered-pattern, pathology-score, motif-learning, or phenotype-linking
branches. The package is suitable for method-selection discussion and
representative Layer 3/4 audit triage after closure, while all runtime and
adapter decisions remain outside this Layer 2 package.
