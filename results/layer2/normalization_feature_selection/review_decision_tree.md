# Normalization / Feature Selection Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded review pass, evidence spot-checks, logic
review, decision tree, and coverage ledger for the frozen
`Normalization / Feature Selection` candidate set. It does not define execution
surfaces, wrappers, adapter boundaries, callable signatures, environments, or
runtime support.

## Reading Rules

- Keep the two-method freeze unchanged: `SpaNorm`, `scGIST`.
- Use `Subtask` values as branch cues only; they are not separate Layer 2
  completion units.
- Treat compute as a branch-local resource gate. It cannot override task fit.
- Use benchmark or review evidence only for caveats or branch-local
  interpretation. Do not turn it into a universal ranking.
- Treat `Closest Alternatives`, `Key Difference`, resource burden, scale
  sensitivity, and scientific-risk caveats as Layer 2 synthesized judgment
  unless the method row states direct support.

## Review Pass

### PubMed candidate verification

The two frozen candidate PMIDs were verified with PubMed E-utilities:

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `SpaNorm` | 40301877 | 10.1186/s13059-025-03565-y | Method-paper identity confirmed. |
| `scGIST` | 38408997 | 10.1186/s13059-024-03185-y | Method-paper identity confirmed. |

### Code-link spot check

| Tool | Primary code link | Verification result |
| --- | --- | --- |
| `SpaNorm` | https://bioconductor.org/packages/SpaNorm | Official Bioconductor package route resolved. |
| `scGIST` | https://github.com/yafi38/scGIST | Repository responded; PubMed XML records the paper's GitHub and Zenodo code/data references. |

Code availability is recorded only as an access trace. It is not runtime
support, adapter availability, or environment readiness inside BioHarness.

### Benchmark/review screening

Query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
(normalization[Title/Abstract] OR normalisation[Title/Abstract] OR
 "feature selection"[Title/Abstract] OR "gene panel"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

PubMed returned 16 records on 2026-05-01. Relevant records included broad
reviews and adjacent method papers, such as:

| PMID | Relevance to this topic |
| --- | --- |
| 36147664 | Broad computational-solutions review for spatial transcriptomics. |
| 35095570 | Review discussing normalization in renal spatial transcriptomics. |
| 39272958 | Scoping review of spatial transcriptomics methods and applications in tumor research. |
| 41656346 | Adjacent gene-selection method paper, not in the frozen candidate set. |
| 40924538 | Adjacent spatial-omics feature-selection method paper, not in the frozen candidate set. |
| 41279853 | Adjacent preprint on optimal gene-panel selection, not in the frozen candidate set. |

The screening did not identify a dedicated independent benchmark that jointly
compares `SpaNorm` and `scGIST` as alternatives. The decision tree therefore
uses method-paper evidence and explicit Layer 2 logic review rather than a
global benchmark ranking.

## Evidence Spot-checks

| Tool | Direct support | Layer 2 synthesis / caution |
| --- | --- | --- |
| `SpaNorm` | PubMed/DOI confirm the Genome Biology method paper. The abstract directly states spatial-aware normalization, separation of library-size effects from biology, evaluation across multiple datasets/platforms, and retention of spatial-domain/SVG signal. Bioconductor access is confirmed. | Comparator wording, resource burden, scale sensitivity, and signal-removal caution are Layer 2 synthesis. Method-paper evaluation is not an independent benchmark against `scGIST`. |
| `scGIST` | PubMed/DOI confirm the Genome Biology method paper. The title and PubMed record directly support gene-panel design for spatial transcriptomics with prioritized gene sets; PubMed XML records official GitHub and Zenodo references. | Reference/label dependence, transfer-risk, resource burden, and scale sensitivity are Layer 2 synthesis. It is not a normalization method. |

## Logic Review

The frozen set contains two branch-distinct tools rather than competing
implementations of one operation. This means method selection is primarily a
task-boundary decision:

- If the expression matrix already exists and the problem is spatially
  structured normalization, `SpaNorm` is the relevant branch.
- If the expression matrix has not yet been generated for a targeted assay and
  the problem is selecting a fixed gene panel, `scGIST` is the relevant branch.
- If a workflow includes both panel design and later normalization, these are
  separate decisions. `scGIST` can support panel design before measurement;
  `SpaNorm` can be considered later only after spatial expression data exist
  and normalization is the stated task.

Resource cues are intentionally weak for both rows. The current public evidence
does not justify precise memory or scale labels inside this Layer 2 package, so
those fields remain `unclear`.

## Decision Tree

### Step 0. Are you actually in this topic?

If the main task is denoising, imputation, artifact correction, segmentation,
integration, deconvolution, domain clustering, SVG detection, cell-cell
communication, or trajectory analysis:

- Do not start here.
- Use the corresponding analysis problem first.

If the main task is generic single-cell preprocessing without a spatial
transcriptomics-specific method question:

- Do not treat this package as the primary method-selection source.
- Use this package only when the method-selection question is spatial-aware
  normalization or spatial-transcriptomics gene-panel feature selection.

### Step 1. Is the expression matrix already measured and the main task normalization?

If yes:

- Prefer / consider `SpaNorm`.
- Use this branch when library-size effects may be spatially associated with
  biological domains and the goal is normalized expression for downstream ST
  analysis.
- Keep the signal-removal caveat visible: normalization assumptions should not
  erase real spatial biology.

If no:

- Continue to Step 2.

### Step 2. Is the task pre-assay targeted gene-panel design?

If yes:

- Prefer / consider `scGIST`.
- Use this branch when a targeted spatial transcriptomics panel must balance
  prioritized gene sets, cell-type discrimination, and fixed panel size.
- Keep reference, label, tissue-context, and assay-transfer caveats visible.

If no:

- Continue to Step 3.

### Step 3. Does the workflow need both branches?

If the workflow first designs a targeted panel and later normalizes measured
spatial expression:

- Treat this as two branch-local decisions.
- Consider `scGIST` for the panel-design stage.
- Consider `SpaNorm` only later, after spatial expression data exist and
  normalization is the active question.
- Do not interpret either method as a substitute for the other.

If neither branch matches:

- This frozen candidate set does not supply a method for the requested task.
- Do not add methods inside this package; return to the relevant Layer 1 or
  topic-specific Layer 2 source.

### Step 4. Resource and evidence gate

If resource constraints are strict:

- Keep both methods as CPU-labeled only at the Layer 1 evidence level.
- Memory burden and scale sensitivity remain `unclear` for both methods.
- Do not infer BioHarness runtime support from code availability.

If the decision depends on benchmark superiority:

- No suitable independent benchmark was found that jointly compares the two
  frozen candidates.
- Use branch fit and scientific caveats rather than a global ranking.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `SpaNorm` | post-capture spatial-aware normalization | possible attenuation of true spatial biology if technical and biological structure are hard to separate |
| `scGIST` | targeted gene-panel feature selection | reference/label/tissue-context transfer risk and fixed-panel constraints |

## Review Decision

The current evidence supports a Layer 2 conditional decision tree, not a
universal method ranking. The package is suitable for method-selection
discussion and representative Layer 3/4 audit triage after closure, while all
runtime and adapter decisions remain outside this Layer 2 package.
