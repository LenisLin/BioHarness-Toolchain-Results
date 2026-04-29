# BANKSY Layer3/4 Review Pack

## Review Status

```yaml
method_id: BANKSY
task_family: spatial_domain_identification
review_pack_status: ready_for_review
authority_status: blueprint
production_adapter_implemented: false
storage_location: NAS
last_updated: "2026-04-28"
```

This review pack is intentionally stored outside project docs because it is an intermediate Layer3/4 method-engineering artifact.

This pack consolidates existing BANKSY Layer3/4 method engineering work for human review. It does not implement the BANKSY adapter, rewrite BANKSY code, create an environment capsule, run a smoke test, or claim production support.

## Artifact Index

| Artifact | Path |
| --- | --- |
| MethodEngineeringAudit | [../method_audits/banksy.audit.md](../method_audits/banksy.audit.md) |
| Canonical Layer3 surface | [../surface_registry/canonical.v1.yaml](../surface_registry/canonical.v1.yaml) |
| BANKSY Layer3 ExecutionSurfaceSpec draft | [../surface_registry/banksy.v1.yaml](../surface_registry/banksy.v1.yaml) |
| BANKSY Layer4 BackendAdapterSpec draft | [../backend_adapter_registry/banksy.adapter.v1.yaml](../backend_adapter_registry/banksy.adapter.v1.yaml) |
| Environment plan | [../environment_profiles/banksy.environment.md](../environment_profiles/banksy.environment.md) |
| Environment subagent report | [../environment_profiles/banksy.environment_subagent_report.md](../environment_profiles/banksy.environment_subagent_report.md) |
| Rewrite decision | [../method_audits/banksy.rewrite_decision.md](../method_audits/banksy.rewrite_decision.md) |
| Validation/runtime plan | [../method_audits/banksy.validation_runtime.md](../method_audits/banksy.validation_runtime.md) |
| Risk/decision log | [../method_audits/banksy.risk_decision_log.md](../method_audits/banksy.risk_decision_log.md) |
| Evidence index | [../evidence/evidence_index.md](../evidence/evidence_index.md) |
| Cleanup check report | [../checks/cleanup_check_report.md](../checks/cleanup_check_report.md) |

## Summary

BANKSY contributes a morphology-free, neighborhood-aware spatial domain identification option: spatial transcriptomics expression plus spatial coordinates to domain labels. It was selected as the first Layer3/4 co-design pilot because Layer2 already identifies it as a scalable local-neighborhood transcriptome clustering candidate and the official Python repository exposes enough source evidence for a blueprint surface and wrapper plan.

Layer 3 and Layer 4 remain separate:

- Layer 3: functional execution surface, agent/harness readable.
- Layer 4: backend adapter / wrapper / rewrite binding, hidden by default and used for implementation/debug/audit.

The artifacts are co-designed from one method engineering audit but presented separately for review.

## Layer3 Summary

Surface ID: `spatial_domain_identification.banksy.v1`

Agent-visible semantic parameters:

- `spatial_coordinate_source`
- `domain_resolution_policy`
- `neighborhood_scale_policy`
- `spatial_expression_weight_policy`
- `cluster_method_policy`
- `seed_policy`
- `artifact_export_policy`

Coordinate semantics:

- Layer3 exposes a semantic coordinate source with modes `obsm_spatial`, `obs_x_y_columns`, and `adapter_validated_custom_mapping`.
- Layer4 maps that semantic source to BANKSY backend coordinate-key representation.
- Raw backend coordinate tuple details are Layer4-only.

Multi-sample policy:

```yaml
multi_sample_policy:
  status: examples_observed_but_bioharness_contract_not_validated
  supported_claim: no_joint_multislice_contract_claim
  agent_visible_summary: multi-sample usage requires additional review before default surface exposure
```

Domain resolution policy:

```yaml
target_domain_count_policy:
  status: not_directly_guaranteed
  mapping: may require resolution search or post-hoc selection
  agent_action: ask user whether approximate granularity is acceptable
```

`domain_resolution_policy` is a granularity-control abstraction, not necessarily an exact `n_domains` guarantee.

## Layer4 Summary

Backend adapter ID: `backend.spatial_domain_identification.banksy.v1`

Implementation status: `not_implemented`.

Authority status: `blueprint`.

The adapter draft records official README, pyproject, initialization, embedding/model-fitting, clustering, plotting/output, and optional mclust/rpy2 evidence. It does not create a runtime adapter.

## Environment Summary

Environment profile candidate: `banksy_cpu_python_blueprint`.

Decision after cleanup:

```yaml
environment_decision:
  - environment_probe_required
  - shared_capsule_unknown
  - dedicated_capsule_may_be_required
  - wrapper_boundary_required
  - optional_mclust_excluded_until_rpy2_R_verified
environment_hold_status: not_justified_yet
```

`BIOHARNESS_ALLOW_ENV_PROBE` was unset, so no install/import probe or minimal fixture smoke run was executed. Optional mclust/R support remains excluded until rpy2/R is separately verified.

## Risks And Blockers

- no BioHarness smoke fixture has been run;
- no install/import/runtime probe has been run;
- no environment capsule or lockfile exists;
- exact semantic-to-backend numeric parameter mappings are not validated;
- runtime cost is not measured;
- output table/provenance schema is not frozen;
- optional mclust/R support is not proven;
- GPL-3.0 packaging implications require review.

## Self-check Table

| Item | Self-check | Reviewer status | Notes |
|---|---|---|---|
| Layer3 inherits canonical surface | pass | pending | BANKSY surface inherits `spatial_domain_identification.canonical.v1`. |
| Layer3 contains no raw backend function names | pass | pending | Backend functions are in Layer4/audit evidence, not Layer3 surface fields. |
| Layer3 contains only semantic agent-visible parameters | pass | pending | Coordinate source is semantic; backend tuple mapping is Layer4-only. |
| Layer3 preserves hard constraints from Layer2 | pass | pending | Requires ST expression and coordinates; no image/reference/GPU claim. |
| Layer4 adapter draft exists | pass | pending | `../backend_adapter_registry/banksy.adapter.v1.yaml` exists. |
| Layer4 contains evidence references | pass | pending | Adapter links to audit evidence registry and evidence refs. |
| Environment plan exists on NAS | pass | pending | `../environment_profiles/banksy.environment.md` exists. |
| Environment hold decision was subagent-reviewed | partial | pending | Level 0 review complete; no install/import probe was allowed. |
| Smoke fixture exists | fail | pending | No BioHarness-owned minimal BANKSY fixture found. |
| Runtime measurement exists | fail | pending | No runtime execution or cost record exists. |
| No production support is claimed | pass | pending | Pack repeats blueprint/not implemented boundaries. |

## Reviewer Questions

- What minimal AnnData fixture should be used for the first BANKSY smoke test?
- Should optional mclust/R support stay out of the MVP surface?
- Which semantic parameter mappings must be validated before implementation?
- Does GPL-3.0 affect the intended packaging or deployment model?
