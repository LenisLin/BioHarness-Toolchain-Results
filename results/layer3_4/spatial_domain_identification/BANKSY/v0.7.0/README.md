# BANKSY Layer3/4 Co-design v0.7.0

This NAS package is a fresh v0.7.0 Layer3/4 co-design rerun for BANKSY. It is an intermediate engineering artifact, not a runtime implementation, environment capsule, or biological correctness claim.

The package is generated from the generic `MethodExecutionPlanningRecord v0.7` template. BANKSY v0.6.1 is treated only as a failed recovery / stress-test example and is not used as a final source.

## Storage Boundary

- Generic templates, schemas, and design docs live in the project repository.
- BANKSY-specific audit, review, surface, adapter, environment, evidence, and check artifacts live only in this NAS package.
- No BANKSY runtime adapter is implemented here.
- BANKSY is not run by this package.

## Package Layout

```text
review_pack/
method_audits/
surface_registry/
backend_adapter_registry/
environment_profiles/
evidence/
checks/
```
