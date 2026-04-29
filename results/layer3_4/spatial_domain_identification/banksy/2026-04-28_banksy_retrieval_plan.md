# BANKSY Layer3/4 Retrieval Plan

Date: 2026-04-28

Task family: `spatial_domain_identification`

Method: `BANKSY`

Planning status: blueprint/protocol evidence only

## Purpose

This retrieval pass supports a `MethodExecutionPlanningRecord v0.6` pilot for BANKSY. The goal is to collect enough official-source evidence to draft:

- a Layer3 method-specific, agent-visible execution surface;
- a Layer4 backend adapter draft;
- an environment plan;
- a rewrite plan;
- a validation runtime plan;
- a risk register and decision log.

This pass does not implement an adapter, run BANKSY, create an environment capsule, benchmark runtime, or validate biological correctness.

## Source Scope

Included sources:

- Existing read-only Layer2 artifacts under `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/`.
- Local repo design/protocol docs under `/home/lenislin/Experiment/projects/BioHarness-Toolchain-ST/docs/`.
- Official BANKSY Python repository `https://github.com/prabhakarlab/Banksy_py`.
- Official BANKSY Python repository HEAD commit checked on 2026-04-28: `43e2d692db6705c0195039764194473912e4cfc2`.

Excluded sources:

- New literature review beyond already accepted Layer2 sources.
- Benchmark reranking or comparative performance reinterpretation.
- Unofficial forks, issue triage, package mirrors, and third-party tutorials.
- Production BioHarness adapter code, runtime smoke results, or environment probes.
- Mutation of existing NAS Layer2 artifacts.

## Retrieval Commands And URLs

Commands used or planned for source pinning:

```bash
git ls-remote https://github.com/prabhakarlab/Banksy_py HEAD
curl -L https://raw.githubusercontent.com/prabhakarlab/Banksy_py/43e2d692db6705c0195039764194473912e4cfc2/README.md
curl -L https://raw.githubusercontent.com/prabhakarlab/Banksy_py/43e2d692db6705c0195039764194473912e4cfc2/pyproject.toml
```

Primary official source URLs inspected or assigned for this pass:

- `https://github.com/prabhakarlab/Banksy_py/tree/43e2d692db6705c0195039764194473912e4cfc2`
- `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/README.md`
- `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/pyproject.toml`
- `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/LICENSE.md`
- `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/initialize_banksy.py`
- `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/embed_banksy.py`
- `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/run_banksy.py`
- `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/cluster_methods.py`
- `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/plot_banksy.py`
- `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy_utils/umap_pca.py`
- `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/CODEX_B006_ascending.py`
- `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/DLPFC_concatenate_multisample.py`

## Additional Evidence To Record

The retrieval inventory records the following evidence classes:

- Package/version/install evidence: package name, package version, Python range, dependency list, optional extras, and absence of a lock/container artifact.
- License evidence: GPL-3.0 declared in package metadata and license file.
- Callable path evidence: README quick start, initialization, BANKSY matrix generation, PCA/UMAP, clustering, plotting, and examples.
- Data contract evidence: AnnData input, `adata.X`, spatial coordinates, coordinate key tuple, spatial graph construction, and sparse-to-dense risk.
- Output evidence: returned result table, label objects, assignment to observation metadata, and optional CSV/PNG/H5AD artifacts.
- Parameter evidence: coordinate keys, neighborhood size, decay type, harmonic/order depth, neighborhood contribution values, PCA dimensions, clustering settings, seed policy, plotting/export controls.
- Runtime/reproducibility evidence: seed fields, stochastic components, CPU-first expectation, RAM recommendation, and lack of executed BioHarness runtime-cost measurement.
- Failure evidence: optional R/rpy2 clustering path, invalid decay type, missing/invalid coordinates, non-finite matrix assertion, filesystem permission risk, and dense-memory risk.
- Example/fixture evidence: CODEX and DLPFC official examples are useful evidence but not yet BioHarness smoke fixtures because their external data dependencies have not been normalized into a small fixture.

## Layer Assignment Rule

Layer3 receives only semantic, agent-visible facts:

- required spatial expression object and coordinates;
- no image/reference requirement;
- CPU-first profile;
- multiscale neighborhood intent;
- bounded semantic parameters;
- domain-label outputs and standard artifacts;
- validation hooks;
- typed failure names and agent actions.

Layer4 receives backend-only facts:

- upstream repository and commit;
- package/module/file names;
- backend function names and call signatures;
- parameter mapping;
- input conversion;
- output extraction;
- artifact and filesystem behavior;
- backend error or failure translation evidence.

Shared planning metadata receives:

- evidence ledger;
- source limitations;
- environment, rewrite, validation, risk, and decision records.

Excluded from Layer3:

- backend file paths;
- raw backend function names;
- package-private parameters;
- implementation call graph;
- unbounded backend defaults.

## Claim Boundaries

Supported claims:

- BANKSY can be planned as a morphology-free spatial domain identification backend using spatial expression data and coordinates.
- Official Python package evidence is sufficient for a blueprint Layer3 surface and Layer4 strong-wrapper draft.
- Environment planning should treat BANKSY as CPU-first but dependency-constrained.
- Initial validation can be planned around installability, runnable fixture, observable outputs, label sanity checks, and provenance capture.

Unsupported claims:

- No production adapter is implemented.
- No BioHarness environment capsule is implemented.
- No runtime smoke test or runtime-cost measurement has been executed in this pass.
- No claim is made that BANKSY is biologically correct on a target dataset.
- No paper-level review, benchmark reranking, or cross-method performance conclusion is made here.
