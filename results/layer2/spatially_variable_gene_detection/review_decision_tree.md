# Spatially Variable Gene Detection Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records the bounded review pass, evidence spot-checks, branch-local decision tree, and coverage ledger for the frozen `Spatially Variable Gene Detection` candidate set. It does not define execution surfaces, wrappers, adapter boundaries, callable signatures, environments, or runtime support.

## Reading Rules

- Keep the 14-method freeze unchanged: `Celina`, `ctSVG`, `STANCE`, `STMiner`, `BSP`, `HEARTSVG`, `nnSVG`, `SOMDE`, `SPARK`, `SPARK-X`, `SpatialDE`, `spVC`, `InSituCor`, `SPACE-SVG`.
- Use `Subtask` values as branch cues only; they are not separate Layer 2 completion units.
- Use benchmark/review evidence only for branch-local ordering, tie-breaks, or caveats. Do not turn it into a universal ranking.
- Treat compute and code access as audit cues. They cannot override scientific task fit and do not imply runtime support.
- Treat `STMiner`, `InSituCor`, `SPACE-SVG`, and `spVC` as boundary-sensitive rows where branch wording matters.
- Treat `Closest Alternatives`, `Key Difference`, resource burden, scale sensitivity, and signal-risk caveats as Layer 2 synthesized judgment unless a row states direct support.

## Review Pass

### PubMed candidate verification

The 14 frozen candidate PMIDs were verified with PubMed E-utilities ESummary:

| Tool | PMID | DOI | Verification result |
| --- | --- | --- | --- |
| `Celina` | 39865128 | 10.1038/s41467-025-56280-4 | Method-paper identity confirmed. |
| `ctSVG` | 41361894 | 10.1186/s13059-025-03870-6 | Method-paper identity confirmed. |
| `STANCE` | 39979358 | 10.1038/s41467-025-57117-w | Method-paper identity confirmed. |
| `STMiner` | 39947134 | 10.1016/j.xgen.2025.100771 | Method-paper identity confirmed. |
| `BSP` | 37963892 | 10.1038/s41467-023-43256-5 | Method-paper identity confirmed. |
| `HEARTSVG` | 38972896 | 10.1038/s41467-024-49846-1 | Method-paper identity confirmed. |
| `nnSVG` | 37429865 | 10.1038/s41467-023-39748-z | Method-paper identity confirmed. |
| `SOMDE` | 34165490 | 10.1093/bioinformatics/btab471 | Method-paper identity confirmed. |
| `SPARK` | 31988518 | 10.1038/s41592-019-0701-7 | Method-paper identity confirmed. |
| `SPARK-X` | 34154649 | 10.1186/s13059-021-02404-0 | Method-paper identity confirmed. |
| `SpatialDE` | 29553579 | 10.1038/nmeth.4636 | Method-paper identity confirmed. |
| `spVC` | 38641849 | 10.1186/s13059-024-03245-3 | Method-paper identity confirmed. |
| `InSituCor` | 40275395 | 10.1186/s13059-025-03554-1 | Method-paper identity confirmed. |
| `SPACE-SVG` | 40985765 | 10.1093/nar/gkaf936 | Method-paper identity confirmed; PubMed title uses `SPACE`, while the registry label disambiguates the method as `SPACE-SVG`. |

### Benchmark/review screening

Queries are recorded in `topic_scope.md`. The screen retrieved suitable branch-level evidence, but not a single benchmark that covers all 14 frozen methods across all branches.

| PMID | Finding used here | Layer 2 use |
| --- | --- | --- |
| 38225676 | 2024 Genome Biology evaluation of SVG-detection methods across datasets, statistical reliability, robustness, downstream domain clustering, computational time, and memory. | Broad overall-SVG caveats; no universal ranking. |
| 40968359 | 2025 Genome Biology systematic benchmark of 14 SVG methods with 96 datasets and six metrics; abstract reports SPARK-X strong overall and highlights calibration issues. | Branch-local support for scalable overall SVG reading, especially SPARK-X; calibration caveat for all benchmarked methods. |
| 39880807 | 2025 Nature Communications review categorizing SVG methods into overall, cell-type-specific, and spatial-domain-marker categories. | Supports this package's branch separation and warns against comparing incompatible SVG definitions. |
| 38370977 | 2024 review of recent SVG-detection advances. | Supports method-family/caveat framing. |
| 42041225 | 2026 Briefings in Bioinformatics benchmark of six ctSVG methods; abstract reports complementary performance/efficiency, stronger predictive performance for STANCE and Celina, stronger false-positive control for ctSVG/spVC/others, and possible Celina spurious signals from non-target cell types. | Branch-local ctSVG guidance for Celina, ctSVG, STANCE, and spVC; no extrapolation to overall SVG detection. |

Review conclusion: branch-local benchmark evidence exists for broad overall SVG detection and cell-type-specific SVG detection. Boundary branches such as `STMiner`, `InSituCor`, and `SPACE-SVG` rely mainly on method-paper evidence plus logic review.

## Evidence Spot-checks

| Tool | Direct support | Layer 2 synthesis / caution |
| --- | --- | --- |
| `Celina` | PubMed/DOI identity and frozen GitHub link verified; ctSVG benchmark retrieved. | Strong ctSVG benchmark support is not a default claim; non-target-cell signal leakage remains a caveat. |
| `ctSVG` | PubMed/DOI identity verified; ctSVG benchmark retrieved. | Code access remains unclear from frozen input/PubMed metadata; conservative false-positive framing is branch-local. |
| `STANCE` | PubMed/DOI identity and frozen GitHub link verified; ctSVG benchmark retrieved. | Unified-model framing is useful for ctSVG branch only; cell type estimates remain a key dependency. |
| `STMiner` | PubMed/DOI identity and frozen GitHub link verified. | Boundary row; gene-centric tissue-pattern mining is not interchangeable with calibrated SVG testing. |
| `BSP` | PubMed/DOI identity and frozen GitHub link verified. | Granularity/multi-scale placement is method-family synthesis; benchmark support is weaker than for the main broad-SVG comparators. |
| `HEARTSVG` | PubMed/DOI identity verified; method title directly supports fast/large-scale SVG aim. | Code link absent from frozen input/PubMed metadata; large-scale claim is method-paper support, not BioHarness runtime validation. |
| `nnSVG` | PubMed/DOI identity and frozen GitHub link verified. | Nearest-neighbor GP branch is benchmark-screened, but relative performance may depend on metric and dataset. |
| `SOMDE` | PubMed/DOI identity and frozen GitHub link verified. | Self-organizing-map compression can alter fine-pattern sensitivity; branch-local evidence is conservative. |
| `SPARK` | PubMed/DOI identity and frozen GitHub link verified. | Count-aware model remains important, but scale-sensitive relative to SPARK-X. |
| `SPARK-X` | PubMed/DOI identity and frozen GitHub link verified; 2025 broad benchmark reports strong overall performance. | Strong branch-local benchmark performance does not make a universal default. |
| `SpatialDE` | PubMed/DOI identity and frozen GitHub link verified. | Canonical baseline status can be useful, but scale/calibration caveats are substantial. |
| `spVC` | PubMed/DOI identity verified; ctSVG benchmark retrieved. | Frozen registry branch and benchmark context do not perfectly align; carry boundary caveat. |
| `InSituCor` | PubMed/DOI identity verified. | Conditional correlation branch should not be collapsed into overall SVG or direct ctSVG calling. |
| `SPACE-SVG` | PubMed/DOI identity verified. | Boundary with feature selection/domain support; registry label disambiguates PubMed's `SPACE` title. |

## Decision Tree

### Step 0. Are you actually in this topic?

If the main task is denoising, imputation, normalization, artifact correction, cell type inference, domain clustering, cell-cell communication, trajectory, perturbation, or comparative analysis:

- Do not start with this topic.
- Use the corresponding analysis problem first.
- Return here only if the active decision is gene-level spatial variability detection, ranking, or branch-specific SVG interpretation.

### Step 1. Is the question cell type-specific or cell type-conditional?

If the intended output is cell type-specific SVG calls:

- Consider `Celina`, `STANCE`, or `ctSVG` when the intended output is cell type-specific SVG calls.
- Use the 2026 ctSVG benchmark only as branch-local guidance: `Celina` and `STANCE` may serve as sensitivity-oriented branch comparators; `ctSVG` may serve as a conservative false-positive-control branch comparator.
- Keep cell type composition and non-target-cell leakage caveats visible.

If the intended output is spatial gene correlation conditional on the cell type landscape:

- Consider `InSituCor` when the intended output is spatial gene correlation conditional on the cell type landscape.
- Do not substitute it for direct ctSVG calling or overall SVG ranking.

If cell type effects should be adjusted while clustering or selecting SVGs:

- Consider `SPACE-SVG` when cell type effects should be adjusted while clustering or selecting SVGs.
- Keep the boundary with feature selection and spatial domain support visible.

If cell type context is absent or not intended:

- Continue to Step 2.

### Step 2. Is the task gene-centric tissue-pattern mining rather than conventional SVG testing?

If yes:

- Consider `STMiner` when gene-level spatial pattern interpretation, especially in tumor tissue, is the real deliverable.
- Keep its use limited to gene-level spatial pattern interpretation, especially in tumor tissue.
- Do not use it as a simple replacement for calibrated p-value/ranking SVG workflows.

If no:

- Continue to Step 3.

### Step 3. Is this overall SVG detection with a large-data or scalability constraint?

If yes:

- Consider `SPARK-X`, `nnSVG`, or `HEARTSVG` when the active branch is overall SVG detection with a large-data or scalability constraint.
- Within the scalable overall-SVG branch, `SPARK-X` has the strongest branch-local benchmark signal in the retrieved 2025 broad SVG benchmark.
- Consider `nnSVG` when a Gaussian-process-style framing is desired with better scalability than canonical SpatialDE.
- `HEARTSVG` is a large-scale distribution-free method-paper route, but code access is unclear in this package.

If no or data are modest and interpretability/literature comparability matters:

- Continue to Step 4.

### Step 4. Which overall SVG modeling style best matches the task?

If a canonical Gaussian-process baseline is needed:

- Consider `SpatialDE` when a canonical Gaussian-process baseline is needed.
- Keep scale and calibration caveats visible.

If count-aware spatial modeling is desired and data size is moderate:

- Consider `SPARK` when count-aware spatial modeling is desired and data size is moderate.
- Compare with `SPARK-X` within the overall-SVG branch when scalability is a concern.

If a dimension-agnostic non-parametric or multi-scale/granularity route is desired:

- Consider `BSP` when a dimension-agnostic non-parametric or multi-scale/granularity route is desired.
- Treat granularity interpretation as a method-specific assumption to inspect.

If self-organizing-map compression is scientifically attractive:

- Consider `SOMDE` when self-organizing-map compression is scientifically attractive.
- Keep possible fine-pattern compression caveats visible.

If interpretable spatial variation coefficients are the main deliverable:

- Consider `spVC` when interpretable spatial variation coefficients are the main deliverable.
- Keep the overall-versus-cell-type-aware boundary caveat visible.

### Step 5. Resource and audit gate

If a primary code link is required before later engineering audit:

- Traceable-code audit candidates in this package are `Celina`, `STANCE`, `STMiner`, `BSP`, `nnSVG`, `SOMDE`, `SPARK`, `SPARK-X`, and `SpatialDE`.
- Do not interpret code access as runtime support.

If code access can remain unclear during Layer 2 discussion:

- `ctSVG`, `HEARTSVG`, `spVC`, `InSituCor`, and `SPACE-SVG` can remain in scientific method-selection discussion with explicit audit caveats.

If scale or memory evidence is weak:

- Use `unclear` rather than over-labeling.
- Let later Layer 3/4 audit test implementation-level feasibility separately.

## Coverage Ledger

| Tool | Covered in tree branch | Main caveat carried forward |
| --- | --- | --- |
| `Celina` | ctSVG sensitivity-oriented branch | possible non-target-cell leakage; depends on cell type context |
| `ctSVG` | ctSVG conservative false-positive branch | code access unclear; depends on cell type context |
| `STANCE` | ctSVG unified-model branch | cell type context quality and benchmark-local support |
| `STMiner` | gene-centric tissue-pattern branch | boundary with pattern mining rather than standard SVG testing |
| `BSP` | granularity/non-parametric overall branch | granularity interpretation and limited benchmark support here |
| `HEARTSVG` | scalable distribution-free overall branch | code access unclear; method-paper scale evidence only |
| `nnSVG` | scalable GP-style overall branch | approximation and calibration caveats |
| `SOMDE` | self-organizing-map overall branch | compression can affect fine spatial patterns |
| `SPARK` | count-aware overall branch | scale sensitivity relative to SPARK-X |
| `SPARK-X` | scalable benchmark-supported overall branch | not a universal default despite strong benchmark signal |
| `SpatialDE` | canonical GP baseline branch | scale and calibration caveats |
| `spVC` | variation-coefficient branch | branch boundary with ctSVG benchmark context |
| `InSituCor` | cell-type-conditional correlation branch | conditional correlation is not direct ctSVG or overall SVG ranking |
| `SPACE-SVG` | cell-type-adjusted SVG clustering branch | boundary with feature selection and domain support |

## Review Decision

The current evidence supports a Layer 2 conditional decision tree, not a universal method ranking. Broad and ctSVG-specific benchmarks are useful for branch-local guidance, while boundary branches still rely mainly on method-paper evidence and logic review. The package is suitable for method-selection discussion and representative Layer 3/4 audit triage after closure, while runtime and adapter decisions remain outside this Layer 2 package.
