# BANKSY Layer3/4 Assignment Matrix

Date: 2026-04-28

Status: blueprint/protocol evidence only

This matrix records where each retrieved fact belongs. It is intended to prevent backend details from leaking into the agent-visible Layer3 surface.

| Retrieved fact | Evidence refs | Layer3 assignment | Layer4 assignment | Shared planning / excluded |
| --- | --- | --- | --- | --- |
| BANKSY is a neighborhood-kernel clustering method for spatial domain identification. | `L2_BANKSY_COMPACT_HANDOFF` | Method-specific semantic realization under `spatial_domain_identification.banksy.v1`; compact method role only. | No direct binding. | Keep full Layer2 reasoning outside Layer3. |
| Main input is spatial transcriptomics expression plus spatial coordinates. | `L2_BANKSY_COMPACT_HANDOFF`, `README_QUICKSTART`, `INIT_COORDINATES_WEIGHTS` | Required semantic input: spatial expression object with coordinate key pair. | Validate AnnData and map coordinate fields to backend coordinate tuple. | Hard constraint for planning record. |
| Image signal is not required. | `L2_BANKSY_COMPACT_HANDOFF` | Agent-visible modality exclusion: no histology requirement. | Adapter should not silently require image inputs. | Does not claim image-aware alternatives are inferior. |
| External biological reference is not required. | `L2_BANKSY_COMPACT_HANDOFF` | Agent-visible reference exclusion. | Adapter should not require reference annotation files. | Does not validate annotation-free biological correctness. |
| CPU-first profile in Layer2 handoff. | `L2_BANKSY_COMPACT_HANDOFF`, `PYPROJECT_PACKAGE_ENV` | Semantic execution profile: CPU-first / no GPU requirement. | Environment profile should be CPU Python package/capsule candidate. | No runtime-cost measurement yet. |
| Official repository is `prabhakarlab/Banksy_py` pinned to commit `43e2d692db6705c0195039764194473912e4cfc2`. | `OFFICIAL_HEAD_PIN` | Excluded from Layer3 except method provenance summary after execution. | Backend adapter draft repository/commit evidence. | Shared evidence ledger. |
| Package name/version is `pybanksy` `1.3.4`; Python range is `>=3.8,<3.13`; numpy is `<2.0`. | `PYPROJECT_PACKAGE_ENV` | Do not expose package internals to the agent surface; summarize as dependency-constrained CPU method if needed. | Environment binding and dependency compatibility checks. | Environment plan; lock/container evidence absent. |
| License is GPL-3.0. | `LICENSE_GPL3`, `PYPROJECT_PACKAGE_ENV` | Not normally agent-visible. | Packaging and distribution caution for adapter/capsule work. | Licensing risk register. |
| README quick start loads AnnData and passes a coordinate key tuple. | `README_QUICKSTART` | Semantic `spatial_coordinate_source` input; Layer4 maps it to the backend coordinate-key representation. | Backend call preparation and coordinate tuple conversion. | Evidence supports blueprint only. |
| Initialization builds fixed-neighbor spatial weights from coordinates. | `INIT_COORDINATES_WEIGHTS` | Semantic stage: core spatial-neighborhood structure building. | Backend binding evidence for initialization/spatial weights. | Raw function/file details excluded from Layer3. |
| Neighborhood size and decay type exist as backend controls. | `INIT_COORDINATES_WEIGHTS`, `README_QUICKSTART` | Expose bounded semantic `neighborhood_scale_policy`, not backend raw parameter names. | Map semantic policy to concrete backend parameters after validation. | Numeric defaults not frozen. |
| BANKSY matrix generation uses neighbor-augmented representation and lambda/max_m-like controls. | `EMBED_MATRIX_DENSE_RISK`, `README_QUICKSTART` | Expose `spatial_expression_weight_policy` semantically. | Map semantic policy to backend numeric settings in wrapper. | Production mapping requires fixture validation. |
| Sparse-to-dense conversion and non-finite assertion risks exist. | `EMBED_MATRIX_DENSE_RISK`, `README_QUICKSTART` | Typed failures: `insufficient_memory_for_dense_step`, `nonfinite_or_invalid_matrix`. | Memory preflight and failure translation. | Risk register and validation plan. |
| Workflow produces/returns a result table candidate. | `RUN_MULTIPARAM_OUTPUT` | Standard output: `results_summary_table`. | Extract and normalize returned table. | Output schema not frozen. |
| Labels may be written into AnnData observations. | `PLOT_OUTPUT_ARTIFACTS` | Standard output: `domain_labels`; standard artifact: labeled AnnData / label table. | Copy to BioHarness-controlled obs namespace and artifact table. | Label permutation awareness required for comparisons. |
| Optional H5AD/figure outputs are possible. | `PLOT_OUTPUT_ARTIFACTS` | Optional standard artifacts and visualization sanity hooks. | Constrain output directory and normalize filenames. | Visual sanity is not biological correctness. |
| Leiden is default; mclust is optional and requires R/rpy2. | `README_QUICKSTART`, `PYPROJECT_PACKAGE_ENV`, `CLUSTER_SEED_OPTIONAL_MCLUST` | Agent-visible `cluster_method_policy` defaults to Leiden; mclust held until environment proof. | Gate optional mclust path behind environment capability check. | Environment risk. |
| Partition seed and UMAP seed behavior are visible in backend sources. | `CLUSTER_SEED_OPTIONAL_MCLUST`, `UMAP_PCA_SEED` | Agent-visible `seed_policy`; no determinism claim until repeated runs. | Record backend seed settings in provenance. | Reproducibility plan. |
| CODEX and DLPFC official examples demonstrate usage patterns. | `OFFICIAL_EXAMPLES_FIXTURE_LIMIT` | Examples justify semantic workflow but not fixture success. | Future fixture design can borrow workflow shape. | Excluded from validation evidence until converted into BioHarness smoke fixture. |
| DLPFC multi-sample example suggests separate multi-sample use, not explicit joint modeling guarantee. | `OFFICIAL_EXAMPLES_FIXTURE_LIMIT`, `L2_BANKSY_COMPACT_HANDOFF` | Conservative multi-slice policy; no joint batch modeling claim. | Adapter should treat slice/library metadata as provenance/grouping unless future evidence changes. | Claim boundary. |
| Backend file names, raw function names, call signatures, and package-private details exist. | `INIT_COORDINATES_WEIGHTS`, `EMBED_MATRIX_DENSE_RISK`, `RUN_MULTIPARAM_OUTPUT`, `CLUSTER_SEED_OPTIONAL_MCLUST`, `PLOT_OUTPUT_ARTIFACTS` | Explicitly excluded. | Include only in Layer4 implementation/debug/audit binding draft. | Layer separation invariant. |
| New literature review, benchmark reranking, and biological correctness evaluation were not performed. | Retrieval plan | Excluded from Layer3 claims. | Excluded from Layer4 claims. | Scientific claim boundary. |
| No BioHarness environment probe, smoke run, validator, or runtime-cost measurement has been run. | Retrieval plan, coverage check | Layer3 remains blueprint only. | Layer4 remains adapter draft only. | Blocks production claim. |

## Layer3 Exclusion Checklist

- Backend file paths: excluded from Layer3.
- Raw backend function names: excluded from Layer3.
- Package-private parameters: excluded from Layer3.
- Implementation call graph: excluded from Layer3.
- Unbounded backend defaults: excluded from Layer3 until validated and wrapped.

## Layer4 Inclusion Checklist

- Official repository URL and commit: included.
- Package/environment files: included.
- Backend source files and function/path evidence: included.
- Backend parameter mapping evidence: included as draft only.
- Output extraction and artifact side-effect evidence: included as draft only.
- Failure translation evidence: included as draft only.

## Shared Planning Metadata

- Evidence ledger: stored in `2026-04-28_banksy_source_evidence_inventory.json`.
- Environment plan: dependency-constrained CPU Python package; no capsule claim.
- Rewrite plan: `strong_wrapper`; no algorithmic rewrite.
- Validation runtime plan: install/runnable/observable-I/O checks planned; no run.
- Risk register: memory, environment, reproducibility, licensing, agent misuse, and scientific overclaiming risks.
