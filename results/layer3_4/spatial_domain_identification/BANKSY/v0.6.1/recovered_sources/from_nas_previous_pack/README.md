# BANKSY Layer3/4 Co-design Artifact Pack v0.6.1

This directory contains intermediate method-engineering artifacts for BANKSY in the spatial domain identification task family.

These files are not production adapter implementations.
These files are not part of the project public docs.
These files are stored on NAS because they are intermediate audit/planning outputs.

Layer 3 and Layer 4 remain separate:
- Layer 3: functional execution surface.
- Layer 4: backend adapter / wrapper / rewrite binding.

The artifacts are co-designed from one method engineering audit but presented separately for review.

## Artifact Index

| Artifact | Link |
| --- | --- |
| Review pack | [review_pack/banksy_layer3_4_review_pack.md](review_pack/banksy_layer3_4_review_pack.md) |
| Audit | [method_audits/banksy.audit.md](method_audits/banksy.audit.md) |
| Layer3 canonical surface | [surface_registry/canonical.v1.yaml](surface_registry/canonical.v1.yaml) |
| Layer3 BANKSY surface | [surface_registry/banksy.v1.yaml](surface_registry/banksy.v1.yaml) |
| Layer4 adapter draft | [backend_adapter_registry/banksy.adapter.v1.yaml](backend_adapter_registry/banksy.adapter.v1.yaml) |
| Environment plan | [environment_profiles/banksy.environment.md](environment_profiles/banksy.environment.md) |
| Environment subagent report | [environment_profiles/banksy.environment_subagent_report.md](environment_profiles/banksy.environment_subagent_report.md) |
| Rewrite decision | [method_audits/banksy.rewrite_decision.md](method_audits/banksy.rewrite_decision.md) |
| Validation/runtime plan | [method_audits/banksy.validation_runtime.md](method_audits/banksy.validation_runtime.md) |
| Risk/decision log | [method_audits/banksy.risk_decision_log.md](method_audits/banksy.risk_decision_log.md) |
| Evidence index | [evidence/evidence_index.md](evidence/evidence_index.md) |
| Cleanup check report | [checks/cleanup_check_report.md](checks/cleanup_check_report.md) |

## Status

```yaml
method_id: BANKSY
task_family: spatial_domain_identification
pack_version: v0.6.1
authority_status: blueprint
production_adapter_implemented: false
storage_location: NAS
last_updated: "2026-04-28"
```
