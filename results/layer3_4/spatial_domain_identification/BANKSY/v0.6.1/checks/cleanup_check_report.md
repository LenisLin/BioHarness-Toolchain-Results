# BANKSY v0.6.1 Cleanup Check Report

```yaml
cleanup_check:
  method_id: BANKSY
  task_family: spatial_domain_identification
  date: "2026-04-28"
  nas_target: /mnt/NAS_21T/ProjectData/BioHarness/BioHarness-Toolchain-ST/layer3_4/spatial_domain_identification/BANKSY/v0.6.1
  authority_status: blueprint
  production_adapter_implemented: false
```

## Existing Target Handling

No pre-existing files were present in the v0.6.1 target.

## Files Moved Or Copied To NAS

- `review_pack/banksy_layer3_4_review_pack.md`
- `method_audits/banksy.audit.md`
- `method_audits/banksy.rewrite_decision.md`
- `method_audits/banksy.validation_runtime.md`
- `method_audits/banksy.risk_decision_log.md`
- `surface_registry/canonical.v1.yaml`
- `surface_registry/banksy.v1.yaml`
- `backend_adapter_registry/banksy.adapter.v1.yaml`
- `environment_profiles/banksy.environment.md`
- `environment_profiles/banksy.environment_subagent_report.md`
- `evidence/evidence_index.md`
- `evidence/2026-04-28_banksy_method_execution_planning_record_v0.6.md` (copied)
- `evidence/audit_source_bundle.zip` (copied)

## Files Removed From Repo

The implementation removes method-specific BANKSY intermediate artifacts from the project repository after copying them to NAS:

- `docs/reviews/banksy_layer3_4_review_pack.md`
- `docs/method_execution_planning_records/spatial_domain_identification/2026-04-28_banksy_method_execution_planning_record_v0.6.md`
- `method_audits/spatial_domain_identification/banksy.audit.md`
- `method_audits/spatial_domain_identification/banksy.rewrite_decision.md`
- `method_audits/spatial_domain_identification/banksy.validation_runtime.md`
- `method_audits/spatial_domain_identification/banksy.risk_decision_log.md`
- `surface_registry/spatial_domain_identification/canonical.v1.yaml`
- `surface_registry/spatial_domain_identification/banksy.v1.yaml`
- `backend_adapter_registry/spatial_domain_identification/banksy.adapter.v1.yaml`
- `environment_profiles/spatial_domain_identification/banksy.environment.md`
- `audit.zip`
- extracted generic registry README stubs from `backend_adapter_registry/`, `environment_profiles/`, and `method_audits/` because they pointed to removed BANKSY repo-local intermediates

## Files Left In Repo And Why

- Generic repo docs, schemas, templates, scripts, tests, and source code remain in place.
- `docs/30_env_strategy.md` and `docs/templates/method_execution_planning_record_template.md` may still mention generic environment-decision vocabulary; these are not BANKSY intermediate artifacts.
- Tracked docs are updated to reference the NAS review package rather than project `docs/reviews`.

## Files Missing

- BioHarness-owned BANKSY smoke fixture: missing.
- Runtime measurement artifact: missing.
- Production environment capsule or lockfile: missing.
- Output schema freeze artifact: missing.

## Duplicate Versions

- `audit.zip` contained the same active BANKSY review pack, adapter draft, and surface draft that were present in the repo extraction. The active v0.6.1 versions are the NAS files in the standard package paths; the original bundle is preserved as `evidence/audit_source_bundle.zip`.

## Links Checked

- Review pack links were rewritten to NAS-relative links.
- README links point to files inside this package.
- External retrieval evidence links point to the existing NAS results directory.

## Environment Decision Before And After

- Before: `dedicated_capsule_required`, `wrapper_boundary_required`, and `hold_due_to_environment`.
- After: `environment_probe_required`, `shared_capsule_unknown`, `dedicated_capsule_may_be_required`, `wrapper_boundary_required`, `optional_mclust_excluded_until_rpy2_R_verified`.
- `environment_hold_status`: `not_justified_yet`.
- Probe status: no probe run because `BIOHARNESS_ALLOW_ENV_PROBE` was unset.
- Subagent review note: Level 0 review cautioned that an operational hold is prudent, but this cleanup does not mark a final hold without probe-level evidence.

## Adapter File

- Found: yes
- NAS path: `backend_adapter_registry/banksy.adapter.v1.yaml`
- `implementation_status`: `not_implemented`
- `authority_status`: `blueprint`

## Project Docs BANKSY Intermediates Remaining

Pre-cleanup docs BANKSY files found by `find docs -iname '*banksy*'`:

```text
docs/method_execution_planning_records/spatial_domain_identification/2026-04-28_banksy_method_execution_planning_record_v0.6.md
docs/reviews/banksy_layer3_4_review_pack.md
```

Post-cleanup state: no method-specific BANKSY intermediate files remain under `docs/`.

## Lightweight Search Notes

The cleanup search may still find old v0.6 terms inside preserved historical evidence (`evidence/2026-04-28_banksy_method_execution_planning_record_v0.6.md`) and generic repo templates/protocol docs. Those hits are not active v0.6.1 surface, adapter, environment, or review-pack decisions.

## Remaining Human Decisions

- Approve/create the minimal AnnData smoke fixture.
- Run BANKSY environment install/import probe.
- Decide shared versus dedicated capsule after probe evidence.
- Freeze output table/provenance schema.
- Validate semantic-to-backend parameter mappings.
- Decide whether optional mclust/rpy2 support is in or out of MVP.
- Review GPL-3.0 package distribution implications.
