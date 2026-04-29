# BANKSY Environment Plan

This environment plan is separate from the BANKSY rewrite decision. It records dependency and isolation evidence only; it does not create an environment capsule or prove runtime support.

```yaml
environment_plan:
  method_id: BANKSY
  environment_profile_candidate: banksy_cpu_python_blueprint
  expected_capsule: none_exists_blueprint_only
  native_package_manager: Python packaging via pyproject metadata
  install_files:
    - pyproject.toml
  lock_or_container_available: not_observed
  dependency_conflict_risk: medium_high
  known_dependency_risks:
    - dependency: python
      risk: official range >=3.8,<3.13 requires compatibility check against BioHarness capsules
    - dependency: numpy
      risk: official range >=1.21,<2.0 may conflict with newer scverse stacks
    - dependency: rpy2/R
      risk: optional mclust path requires separate runtime support
  gpu_policy: not_required
  cuda_policy: not_applicable
  cpu_fallback_policy: CPU is primary planned mode
  shared_environment_feasibility: possible_but_unproven
  capsule_uncertainty: shared_capsule_unknown
  isolation_strategy: prefer compatibility-tested capsule; dedicated capsule may be required
  optional_mclust_path: excluded_until_rpy2_R_verified
  environment_decision:
  - environment_probe_required
  - shared_capsule_unknown
  - dedicated_capsule_may_be_required
  - wrapper_boundary_required
  - optional_mclust_excluded_until_rpy2_R_verified
environment_hold_status: not_justified_yet
  environment_subagent_report: banksy.environment_subagent_report.md
  required_probes:
    - import_probe
    - minimal_fixture_run
    - optional_mclust_probe
  evidence_refs:
    - E_README
    - E_PYPROJECT
    - E_CLUSTER
  open_questions:
    - Can pybanksy 1.3.4 share a future scverse-core capsule without numpy or anndata conflicts?
    - Should optional mclust be excluded from the first MVP wrapper?
    - What minimum fixture size is suitable for an install/import/run probe?
```

No actual hold is asserted here. A hold would require concrete evidence from a failed probe or an impossible dependency constraint.
