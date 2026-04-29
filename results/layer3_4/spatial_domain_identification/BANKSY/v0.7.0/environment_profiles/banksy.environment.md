# BANKSY Environment Plan v0.7

This environment plan is independent from the rewrite decision. It records static dependency evidence and required probes only. No environment probe was run.

```yaml
environment_plan:
  method_id: BANKSY
  environment_profile_candidate: banksy_cpu_python_blueprint
  expected_capsule: unknown
  native_package_manager: python_packaging
  install_files:
    - pyproject.toml
  lock_or_container_available: not_observed
  dependency_conflict_risk: medium_high
  known_dependency_risks:
    - dependency: python
      risk: official package metadata requires Python >=3.8,<3.13
      evidence_refs:
        - PYPROJECT_PACKAGE_ENV
    - dependency: numpy
      risk: official package metadata constrains numpy below 2.0
      evidence_refs:
        - PYPROJECT_PACKAGE_ENV
    - dependency: rpy2_R_optional_path
      risk: optional clustering path requires separate R/rpy2 verification
      evidence_refs:
        - PYPROJECT_PACKAGE_ENV
        - CLUSTER_SEED_OPTIONAL_MCLUST
  gpu_policy: not_required_by_current_evidence
  cuda_policy: not_applicable_by_current_evidence
  cpu_fallback_policy: CPU is the primary planned mode.
  shared_environment_feasibility: unknown_until_probe
  capsule_uncertainty: no BioHarness capsule or lock/container evidence
  isolation_strategy: dedicated_capsule_may_be_required_after_probe
  optional_paths:
    - path_id: optional_mclust
      status: excluded_from_mvp_until_rpy2_R_verified
      evidence_refs:
        - PYPROJECT_PACKAGE_ENV
        - CLUSTER_SEED_OPTIONAL_MCLUST
  environment_decision:
    - environment_probe_required
    - shared_capsule_unknown
    - dedicated_capsule_may_be_required
    - wrapper_boundary_required
    - optional_mclust_excluded_until_rpy2_R_verified
  environment_hold_status: not_justified_yet
  environment_subagent_report: banksy.environment_subagent_report.md
  required_probes:
    - level0_metadata_review
    - level1_core_python_import_probe_if_allowed
    - level2_minimal_fixture_smoke_run_if_explicitly_enabled_and_fixture_exists
  evidence_refs:
    - README_QUICKSTART
    - PYPROJECT_PACKAGE_ENV
    - CLUSTER_SEED_OPTIONAL_MCLUST
  open_questions:
    - Can pybanksy coexist with the planned scverse-core capsule?
    - Should BANKSY receive a dedicated CPU Python capsule?
    - Is the optional R/rpy2 clustering path needed for MVP?
```

## Environment Boundary

Static dependency risk alone does not justify a final environment hold. The current status is `not_justified_yet` because no failed probe or impossible dependency constraint has been observed.
