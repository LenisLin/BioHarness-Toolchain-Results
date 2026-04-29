# BANKSY Recovery Migration Report

Generated: 2026-04-28T16:29:33

BANKSY NAS root: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/BANKSY/v0.6.1`

## Recovery Scope

This was a recovery-first migration. No BANKSY runtime adapter was implemented, no BANKSY code was rewritten, no environment probe was run, and no production support is claimed.

The requested active-tree, rg, git-index, Git-history, NAS, export-list, manual-source, and narrowed temporary/workdir searches were run. Two very broad filesystem find sessions over `/mnt/data`/`/tmp` did not return within the interactive window; a narrower `/tmp -maxdepth 4` search completed and found only source-code/tmp helper material, not expected artifacts.

## Recovered/Copied Artifacts

- `evidence/2026-04-28_banksy_layer3_4_assignment_matrix.md` <- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_layer3_4_assignment_matrix.md` (copied, nas_existing)
- `evidence/2026-04-28_banksy_retrieval_coverage_check.md` <- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_retrieval_coverage_check.md` (copied, nas_existing)
- `evidence/2026-04-28_banksy_retrieval_plan.md` <- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_retrieval_plan.md` (copied, nas_existing)
- `evidence/2026-04-28_banksy_source_evidence_inventory.json` <- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_source_evidence_inventory.json` (copied, nas_existing)
- `evidence/2026-04-28_banksy_source_evidence_inventory.schema_note.md` <- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer3_4/spatial_domain_identification/banksy/2026-04-28_banksy_source_evidence_inventory.schema_note.md` (copied, nas_existing)
- `check_log:bioharness_all_files.txt` <- `/tmp/bioharness_all_files.txt` (copied, tmp_or_workdir)
- `check_log:bioharness_banksy_rg.txt` <- `/tmp/bioharness_banksy_rg.txt` (copied, tmp_or_workdir)
- `check_log:bioharness_banksy_git_history.txt` <- `/tmp/bioharness_banksy_git_history.txt` (copied, tmp_or_workdir)
- `review_pack/banksy_layer3_4_review_pack.md` <- `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/review_pack/banksy_layer3_4_review_pack.md` (normalized, nas_existing)
- `method_audits/banksy.audit.md` <- `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/method_audits/banksy.audit.md` (copied, nas_existing)
- `method_audits/banksy.rewrite_decision.md` <- `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/method_audits/banksy.rewrite_decision.md` (copied, nas_existing)
- `method_audits/banksy.validation_runtime.md` <- `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/method_audits/banksy.validation_runtime.md` (copied, nas_existing)
- `method_audits/banksy.risk_decision_log.md` <- `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/method_audits/banksy.risk_decision_log.md` (copied, nas_existing)
- `surface_registry/canonical.v1.yaml` <- `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/surface_registry/canonical.v1.yaml` (copied, nas_existing)
- `surface_registry/banksy.v1.yaml` <- `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/surface_registry/banksy.v1.yaml` (copied, nas_existing)
- `backend_adapter_registry/banksy.adapter.v1.yaml` <- `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/backend_adapter_registry/banksy.adapter.v1.yaml` (normalized, nas_existing)
- `environment_profiles/banksy.environment.md` <- `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/environment_profiles/banksy.environment.md` (normalized, nas_existing)
- `environment_profiles/banksy.environment_subagent_report.md` <- `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/environment_profiles/banksy.environment_subagent_report.md` (copied, nas_existing)
- `checks/cleanup_check_report.md` <- `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/checks/cleanup_check_report.md` (copied, nas_existing)
- `README.md` <- `generated_during_recovery` (copied, reconstructed_stub)

## Missing Artifacts

- `environment_profiles/banksy.environment_probe_plan.md`: not found; recorded as missing, no stub created.
- `checks/post_cleanup_acceptance_report.md`: not found; recorded as missing, no stub created.

## Duplicate Handling

### `review_pack/banksy_layer3_4_review_pack.md`

| Source | Source type | Size | SHA256 |
| --- | --- | ---: | --- |
| `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/review_pack/banksy_layer3_4_review_pack.md` | nas_existing | 7046 | `6d73e4571d97fe255b7af8cc7d5f3088edd4552cca2e4e153304f88f7978a7cf` |
| `/tmp/banksy_recovery_pack_work_20260428_162933/recovered_sources/from_export_audit_source_bundle/reviews/banksy_layer3_4_review_pack.md` | zip_extract | 13080 | `4577857c1bceb9c441b7af4681ea706bb10c9c38fe40918639019c73f98390e1` |

Chosen active version: `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/review_pack/banksy_layer3_4_review_pack.md`
Rationale: source type `nas_existing` outranks the other recovered sources for this artifact.

### `method_audits/banksy.audit.md`

| Source | Source type | Size | SHA256 |
| --- | --- | ---: | --- |
| `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/method_audits/banksy.audit.md` | nas_existing | 12228 | `a7bc349d662b6e484a2357646133845a8cdcf22dbddaa7613224f4ce033ace3b` |
| `/tmp/banksy_recovery_pack_work_20260428_162933/recovered_sources/from_export_audit_source_bundle/method_audits/spatial_domain_identification/banksy.audit.md` | zip_extract | 27689 | `6f2c0ffce2b14982fa58d4750e24ef3408053b7f01aeb1f29a56e207cd692b80` |

Chosen active version: `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/method_audits/banksy.audit.md`
Rationale: source type `nas_existing` outranks the other recovered sources for this artifact.

### `method_audits/banksy.rewrite_decision.md`

| Source | Source type | Size | SHA256 |
| --- | --- | ---: | --- |
| `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/method_audits/banksy.rewrite_decision.md` | nas_existing | 1759 | `75eab6644780c65261c6a5cde54d07aa5694b1dcbb4c35c9581ea8039717eee4` |
| `/tmp/banksy_recovery_pack_work_20260428_162933/recovered_sources/from_export_audit_source_bundle/method_audits/spatial_domain_identification/banksy.rewrite_decision.md` | zip_extract | 1760 | `21464bbad00941488bff9f3a77b7f68c3587c5bf4b65b99ce1c28477aa30a4a6` |

Chosen active version: `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/method_audits/banksy.rewrite_decision.md`
Rationale: source type `nas_existing` outranks the other recovered sources for this artifact.

### `method_audits/banksy.validation_runtime.md`

| Source | Source type | Size | SHA256 |
| --- | --- | ---: | --- |
| `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/method_audits/banksy.validation_runtime.md` | nas_existing | 4155 | `fbadec619b2148f3e76c2ee6fd6e6a459823ccbb69dc432ce6af7c39307fc9a9` |
| `/tmp/banksy_recovery_pack_work_20260428_162933/recovered_sources/from_export_audit_source_bundle/method_audits/spatial_domain_identification/banksy.validation_runtime.md` | zip_extract | 3539 | `ed8440952deadf6ceeb5ecabde9577305b65434900a059504bdfd4335d73ef5e` |

Chosen active version: `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/method_audits/banksy.validation_runtime.md`
Rationale: source type `nas_existing` outranks the other recovered sources for this artifact.

### `method_audits/banksy.risk_decision_log.md`

| Source | Source type | Size | SHA256 |
| --- | --- | ---: | --- |
| `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/method_audits/banksy.risk_decision_log.md` | nas_existing | 5595 | `a536068a105bde8b430c3d0fc399055ce87a277b92d5b1f8b18db00367e87e14` |
| `/tmp/banksy_recovery_pack_work_20260428_162933/recovered_sources/from_export_audit_source_bundle/method_audits/spatial_domain_identification/banksy.risk_decision_log.md` | zip_extract | 5586 | `6e78b424dcccd4a561b33ca3021a16b7d9b4f277d7cd53e7a45f73d89ba0a969` |

Chosen active version: `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/method_audits/banksy.risk_decision_log.md`
Rationale: source type `nas_existing` outranks the other recovered sources for this artifact.

### `surface_registry/canonical.v1.yaml`

| Source | Source type | Size | SHA256 |
| --- | --- | ---: | --- |
| `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/surface_registry/canonical.v1.yaml` | nas_existing | 2313 | `8700bb7a89c9afc40760cee9024bc7c07690c71a84e544390f349dfa9d1ab2e7` |
| `/tmp/banksy_recovery_pack_work_20260428_162933/recovered_sources/from_export_audit_source_bundle/surface_registry/spatial_domain_identification/canonical.v1.yaml` | zip_extract | 2314 | `500a07932f29948cbb29d904be4026490a2bf9b23a2bab0cfe5c75ecfc3d1bf9` |

Chosen active version: `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/surface_registry/canonical.v1.yaml`
Rationale: source type `nas_existing` outranks the other recovered sources for this artifact.

### `surface_registry/banksy.v1.yaml`

| Source | Source type | Size | SHA256 |
| --- | --- | ---: | --- |
| `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/surface_registry/banksy.v1.yaml` | nas_existing | 14618 | `fdd7918cf8677c1eeb58eb6508289ce30f81a4062073e27fe6ae1bbc4da20fb5` |
| `/tmp/banksy_recovery_pack_work_20260428_162933/recovered_sources/from_export_audit_source_bundle/surface_registry/spatial_domain_identification/banksy.v1.yaml` | zip_extract | 15075 | `44fb96025587b0c296e96bf8f1d50f345cf3e21d1d9e777e9272e5e9fd1a3801` |

Chosen active version: `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/surface_registry/banksy.v1.yaml`
Rationale: source type `nas_existing` outranks the other recovered sources for this artifact.

### `backend_adapter_registry/banksy.adapter.v1.yaml`

| Source | Source type | Size | SHA256 |
| --- | --- | ---: | --- |
| `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/backend_adapter_registry/banksy.adapter.v1.yaml` | nas_existing | 9498 | `756f1657c4d2724c251a400be132b645674b18ae609db2a186f43e2bbf57a7e3` |
| `/tmp/banksy_recovery_pack_work_20260428_162933/recovered_sources/from_export_audit_source_bundle/backend_adapter_registry/spatial_domain_identification/banksy.adapter.v1.yaml` | zip_extract | 15461 | `55f14f75c9a60409d808a468334e2a2d6e4fe7b59052c2cb8b77429695dc5b14` |

Chosen active version: `/mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1/backend_adapter_registry/banksy.adapter.v1.yaml`
Rationale: source type `nas_existing` outranks the other recovered sources for this artifact.

## Normalized Fields

- environment_decision
- coordinate contract
- multi_sample_policy
- target_domain_count_policy
- evidence authority
- YAML date scalars

Normalization was applied only to active final files in the NAS pack work area or active final NAS evidence copies. Raw recovered copies under `recovered_sources/` were not altered.

## Environment Status

```yaml
environment_hold_status: not_justified_yet
probes_run: []
probes_not_run:
  - core_python_import_probe
  - minimal_fixture_smoke_run
  - optional_mclust_rpy2_probe
```

## Repo Cleanup Check

No files were removed during this task.

### Method-specific BANKSY files still found under project docs

| File | Classification | Notes |
| --- | --- | --- |
| `docs/83_layer3_4_method_execution_planning_protocol.md` | keep_generic_template | Protocol/example file; contains BANKSY pilot examples and generic hold vocabulary. |
| `docs/45_task_adapters.md` | keep_generic_template | Repo-level adapter planning doc with NAS pointer; not a method artifact. |
| `docs/82_layer3_4_codesign.md` | keep_generic_template | Repo-level co-design doc with NAS pointer; not a method artifact. |
| `docs/90_roadmap.md` | keep_generic_template | Roadmap mention of BANKSY pilot order and NAS pointer. |
| `docs/templates/method_execution_planning_record_template.md` | keep_generic_template | Generic template includes hold_due_to_environment as enum/example. |
| `docs/30_env_strategy.md` | keep_generic_template | Generic environment strategy enum mentions hold_due_to_environment. |

### Method-specific BANKSY files still found in repo outside NAS

| Location | Classification | Notes |
| --- | --- | --- |
| repo active file search | keep_generic_template | No `*banksy*` intermediate artifact files were found in the active working tree. BANKSY references remain in generic docs, tests, and registry generator scripts. |
| `tests/test_round1_registry_generator.py` and `tests/test_round2_targeted_consolidation.py` | keep_schema | Registry tests legitimately assert BANKSY method registry behavior. |
| `scripts/build_round1_expanded_outputs.py` | keep_schema | Registry generation source contains BANKSY Layer 1 metadata. |

## Remaining Blockers Before MVP Implementation

- environment import probe
- minimal smoke fixture
- runtime measurement
- output schema freeze
- optional mclust/rpy2 decision
- license/package distribution review
- missing artifact: `environment_profiles/banksy.environment_probe_plan.md`
- missing artifact: `checks/post_cleanup_acceptance_report.md`
