# BANKSY Layer3/4 Co-design Artifact Pack v0.6.1

This directory contains intermediate method-engineering artifacts for BANKSY in the spatial domain identification task family.

These are NAS-stored audit/planning outputs, not project public docs and not production adapter implementations.

Layer3 and Layer4 remain separate:
- Layer3: functional execution surface.
- Layer4: backend adapter / wrapper / rewrite binding.

This pack was produced or recovered through a recovery-first migration process.

## Current Status

- Authority status: blueprint.
- Production adapter implemented: false.
- Environment probes run during recovery: none.
- Missing expected artifacts are recorded in `checks/artifact_manifest.tsv` and `checks/recovery_migration_report.md`.

## Artifact Index

| Artifact | Status | Path |
| --- | --- | --- |
| `review_pack/banksy_layer3_4_review_pack.md` | normalized | review_pack/banksy_layer3_4_review_pack.md |
| `method_audits/banksy.audit.md` | copied | method_audits/banksy.audit.md |
| `method_audits/banksy.rewrite_decision.md` | copied | method_audits/banksy.rewrite_decision.md |
| `method_audits/banksy.validation_runtime.md` | copied | method_audits/banksy.validation_runtime.md |
| `method_audits/banksy.risk_decision_log.md` | copied | method_audits/banksy.risk_decision_log.md |
| `surface_registry/canonical.v1.yaml` | copied | surface_registry/canonical.v1.yaml |
| `surface_registry/banksy.v1.yaml` | copied | surface_registry/banksy.v1.yaml |
| `backend_adapter_registry/banksy.adapter.v1.yaml` | normalized | backend_adapter_registry/banksy.adapter.v1.yaml |
| `environment_profiles/banksy.environment.md` | normalized | environment_profiles/banksy.environment.md |
| `environment_profiles/banksy.environment_subagent_report.md` | copied | environment_profiles/banksy.environment_subagent_report.md |
| `environment_profiles/banksy.environment_probe_plan.md` | missing |  |
| `checks/cleanup_check_report.md` | copied | checks/cleanup_check_report.md |
| `checks/post_cleanup_acceptance_report.md` | missing |  |
