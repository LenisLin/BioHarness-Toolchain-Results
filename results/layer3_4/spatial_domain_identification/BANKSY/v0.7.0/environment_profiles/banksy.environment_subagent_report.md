# BANKSY Environment Subagent Report v0.7

No environment probe was run. This report records static evidence and required probes only.

```yaml
environment_subagent_report:
  method_id: BANKSY
  report_status: requires_probe
  authority_status: blueprint
  reviewed_inputs:
    - ../evidence/evidence_index.md
    - ../method_audits/banksy.audit.md
    - ../backend_adapter_registry/banksy.adapter.v1.yaml
  conclusion:
    environment_hold_status: not_justified_yet
    recommended_decision:
      - environment_probe_required
      - shared_capsule_unknown
      - dedicated_capsule_may_be_required
      - wrapper_boundary_required
      - optional_mclust_excluded_until_rpy2_R_verified
  rationale:
    - Python and numpy constraints require compatibility testing against BioHarness capsules.
    - No lockfile, container, or BioHarness capsule evidence is present.
    - Optional R/rpy2 path is a separate environment concern and should not block the core Python path before probing.
    - No failed probe has been recorded.
  required_probes:
    - Level 0 metadata review from pyproject and README.
    - Level 1 import probe only when BIOHARNESS_ALLOW_ENV_PROBE=1.
    - Level 2 fixture smoke run only when explicitly enabled and fixture exists.
  do_not_claim:
    - shared capsule compatibility
    - import success
    - runnable fixture success
    - runtime cost
    - optional R/rpy2 path availability
```
