# BANKSY Environment Subagent Report

```yaml
environment_subagent_report:
  method_id: BANKSY
  report_status: requires_probe
  authority_status: blueprint
  date: "2026-04-28"
  reviewed_inputs:
    - banksy.environment.md
    - pyproject evidence
    - README evidence
    - adapter draft evidence if available
  probe_permissions:
    BIOHARNESS_ALLOW_ENV_PROBE: unset
  levels_reviewed:
    level_0_metadata_review: complete
    level_1_install_import_probe: not_run_permission_not_set
    level_2_minimal_fixture_smoke_run: not_run_permission_not_set_and_no_fixture_path
  conclusion:
    environment_hold_status: not_justified_yet
    recommended_decision:
      - environment_probe_required
      - shared_capsule_unknown
      - dedicated_capsule_may_be_required
      - wrapper_boundary_required
      - optional_mclust_excluded_until_rpy2_R_verified
  rationale:
    - Metadata review found real dependency risks: Python >=3.8,<3.13, numpy >=1.21,<2.0, scverse dependencies, and optional rpy2/R for mclust.
    - No install/import probe was run because BIOHARNESS_ALLOW_ENV_PROBE was unset.
    - No minimal fixture run was performed because probes were not allowed and no fixture path was available.
    - A stricter read-only review cautioned that a hold is operationally prudent, but probe-level evidence is still missing.
    - Therefore an environment hold is not final; the correct state is required probe plus capsule uncertainty.
  required_probes:
    - import_probe
    - minimal_fixture_run
    - optional_mclust_probe
  do_not_claim:
    - production environment support
    - shared scverse-core compatibility
    - mclust/rpy2 support
```

## Level 0 Notes

The metadata review inspected the environment plan, adapter draft, audit evidence, validation/runtime plan, risk log, and retrieved README/pyproject evidence. BANKSY remains blueprint-only: no environment capsule, lockfile, install/import probe, smoke fixture, runtime validator, or runtime-cost result exists in this artifact pack.
