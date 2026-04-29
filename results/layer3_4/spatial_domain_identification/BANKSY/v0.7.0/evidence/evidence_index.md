# BANKSY v0.7.0 Evidence Index

This index summarizes evidence IDs used by the v0.7.0 BANKSY Layer3/4 co-design rerun. The source spine is the lowercase NAS retrieval set from 2026-04-28, not the v0.6.1 active review/surface/adapter files.

## Source Snapshot

```yaml
repository_snapshot:
  url: https://github.com/prabhakarlab/Banksy_py
  commit_or_release: 43e2d692db6705c0195039764194473912e4cfc2
  local_path_if_present: unknown
  last_checked: "2026-04-28"
  package_name: pybanksy
  package_version: "1.3.4"
  source_inventory: /mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_source_evidence_inventory.json
```

## Evidence Items

| evidence_id | source_type | path_or_url | symbol_or_section | line_range | summary | confidence |
| --- | --- | --- | --- | --- | --- | --- |
| L2_BANKSY_COMPACT_HANDOFF | layer2_artifact | `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/` | BANKSY compact handoff | unknown | Supports method role, required spatial expression plus coordinates, domain-label output, no default image/reference requirement, CPU-oriented handoff, and conservative multi-sample claim boundary. | medium |
| OFFICIAL_HEAD_PIN | package_docs | `https://github.com/prabhakarlab/Banksy_py` | repository HEAD | unknown | Pins official source evidence to commit `43e2d692db6705c0195039764194473912e4cfc2`. | high |
| README_QUICKSTART | readme | `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/README.md` | quick start / usage | unknown | Supports package install claim, AnnData-style input, spatial coordinate requirement, default Python clustering path in public docs, and RAM caution. | high |
| PYPROJECT_PACKAGE_ENV | install_file | `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/pyproject.toml` | package metadata | unknown | Supports `pybanksy` `1.3.4`, Python `>=3.8,<3.13`, numpy `<2.0`, core dependencies, and optional R/rpy2 path. | high |
| LICENSE_GPL3 | package_docs | `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/LICENSE.md` | license | unknown | Supports GPL-3.0 licensing risk tracking before bundling/distribution decisions. | high |
| INIT_COORDINATES_WEIGHTS | source_code | `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/initialize_banksy.py` | coordinate and spatial-weight source | unknown | Supports Layer4 coordinate representation, neighborhood controls, and spatial weights / graph construction planning. | high |
| EMBED_MATRIX_DENSE_RISK | source_code | `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/embed_banksy.py` | representation source | unknown | Supports neighbor-augmented representation planning, numeric controls, dense-memory risk, and non-finite matrix failure translation. | high |
| RUN_MULTIPARAM_OUTPUT | source_code | `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/run_banksy.py` | workflow source | unknown | Supports Layer4 workflow draft, returned summary table candidate, plotting/export policy need, and output mapping follow-up. | high |
| CLUSTER_SEED_OPTIONAL_MCLUST | source_code | `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/cluster_methods.py` | clustering source | unknown | Supports clustering seed policy and optional R-backed path as non-default until environment evidence exists. | high |
| PLOT_OUTPUT_ARTIFACTS | source_code | `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy/plot_banksy.py` | plotting/output source | unknown | Supports domain-label output mapping, AnnData observation metadata planning, and controlled figure/H5AD artifact policy. | high |
| UMAP_PCA_SEED | source_code | `https://github.com/prabhakarlab/Banksy_py/blob/43e2d692db6705c0195039764194473912e4cfc2/src/banksy_utils/umap_pca.py` | embedding utility source | unknown | Supports reproducibility plan for UMAP/PCA seed behavior. | high |
| OFFICIAL_EXAMPLES_FIXTURE_LIMIT | example | `CODEX_B006_ascending.py` and `DLPFC_concatenate_multisample.py` at the pinned repository commit | official examples | unknown | Supports usage pattern evidence but not BioHarness smoke-fixture success; multi-sample example does not freeze a joint contract. | medium |
| REPO_LAYER3_LAYER4_PROTOCOL | layer2_artifact | `/home/lenislin/Experiment/projects/BioHarness-Toolchain-ST/docs/83_layer3_4_method_execution_planning_protocol.md` | generic v0.7 protocol | unknown | Supports Layer3/Layer4 separation, evidence-backed Layer4, environment-hold guardrail, and acceptance-gate rules. | high |

## Evidence Gaps

- No install/import probe was run.
- No BioHarness minimal smoke fixture exists.
- No BANKSY runtime was executed.
- No runtime-cost measurement exists.
- Exact result table schema is not frozen.
- Numeric semantic-to-backend parameter mapping is not validated.
- Optional R/rpy2 path is excluded from MVP planning until separately verified.
- GPL-3.0 packaging and distribution implications require review.
