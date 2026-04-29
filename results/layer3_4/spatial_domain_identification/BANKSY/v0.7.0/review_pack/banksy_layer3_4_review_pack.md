# BANKSY Layer3/4 Review Pack v0.7.0

```yaml
review_pack_status: partial_with_known_blockers
method_id: BANKSY
task_family: spatial_domain_identification
record_version: v0.7
authority_status: blueprint
implementation_status: not_implemented
banksy_runtime_executed: false
environment_probe_executed: false
acceptance_gate_status: partial
```

## Artifact Index

| Role | Relative link |
| --- | --- |
| Package README | [../README.md](../README.md) |
| Method engineering audit | [../method_audits/banksy.audit.md](../method_audits/banksy.audit.md) |
| Rewrite decision | [../method_audits/banksy.rewrite_decision.md](../method_audits/banksy.rewrite_decision.md) |
| Validation/runtime plan | [../method_audits/banksy.validation_runtime.md](../method_audits/banksy.validation_runtime.md) |
| Risk register and decision log | [../method_audits/banksy.risk_decision_log.md](../method_audits/banksy.risk_decision_log.md) |
| Canonical Layer3 surface | [../surface_registry/canonical.v1.yaml](../surface_registry/canonical.v1.yaml) |
| BANKSY Layer3 surface | [../surface_registry/banksy.v1.yaml](../surface_registry/banksy.v1.yaml) |
| BANKSY Layer4 adapter draft | [../backend_adapter_registry/banksy.adapter.v1.yaml](../backend_adapter_registry/banksy.adapter.v1.yaml) |
| Environment plan | [../environment_profiles/banksy.environment.md](../environment_profiles/banksy.environment.md) |
| Environment subagent report | [../environment_profiles/banksy.environment_subagent_report.md](../environment_profiles/banksy.environment_subagent_report.md) |
| Environment probe plan | [../environment_profiles/banksy.environment_probe_plan.md](../environment_profiles/banksy.environment_probe_plan.md) |
| Evidence index | [../evidence/evidence_index.md](../evidence/evidence_index.md) |
| Acceptance gate report | [../checks/acceptance_gate_report.md](../checks/acceptance_gate_report.md) |
| Artifact manifest | [../checks/artifact_manifest.tsv](../checks/artifact_manifest.tsv) |
| SHA256 manifest | [../checks/sha256_manifest.tsv](../checks/sha256_manifest.tsv) |

## Layer3 Summary

The BANKSY Layer3 surface inherits from `spatial_domain_identification.canonical.v1` and exposes semantic execution behavior only. It requires spatial expression data and a semantic coordinate source, does not require histology or external reference data by default, and keeps backend coordinate representation details out of the agent-readable surface.

Normalized v0.7 fields are present:

- `spatial_coordinate_source`
- `multi_sample_policy`
- `target_domain_count_policy`
- `parameter_policy`
- `layer4_reference_policy`
- `validation_contract`
- `failure_policy`
- `provenance_policy`

## Layer4 Summary

The Layer4 adapter draft binds the Layer3 surface to official BANKSY Python source evidence at commit `43e2d692db6705c0195039764194473912e4cfc2`. It records repository metadata, evidence authority, source-file entrypoints, draft call graph, function-surface bindings, parameter mapping, input conversion, output mapping, artifact mapping, filesystem policy, failure translation, environment binding, smoke/fidelity plans, rewrite level, and blockers.

`implementation_status` remains `not_implemented`, and `authority_status` remains `blueprint`.

## Environment Summary

Environment evidence supports a CPU-first Python package planning path with dependency constraints and no lock/container evidence. No environment probe was run. `environment_hold_status` is `not_justified_yet` because static dependency risk alone does not justify a final hold.

Required future probes:

- Level 0 metadata review: complete from static evidence.
- Level 1 core Python import probe: not run; requires `BIOHARNESS_ALLOW_ENV_PROBE=1`.
- Level 2 minimal fixture smoke run: not run; requires explicit enablement and fixture.
- Optional R/rpy2 path: excluded from MVP until separately authorized.

## Rewrite Summary

Rewrite decision is `strong_wrapper` with `algorithm_core_touched: false`. The plan standardizes I/O, semantic parameters, artifacts, provenance, logging, and typed failure translation without reimplementing the BANKSY algorithm.

## Validation / Runtime Summary

Validation is planned but not executed. The validation plan separates installability, runnable example, observable I/O, preflight checks, postrun checks, contract tests, visual sanity, reproducibility checks, runtime cost, and rewrite comparison. No runtime numbers are present.

## Risks / Blockers

- Environment import probe not run.
- Minimal smoke fixture missing.
- Runtime measurement missing.
- Output schema not frozen.
- Numeric semantic-to-backend parameter mapping not validated.
- Optional R/rpy2 path unresolved.
- GPL-3.0 packaging/distribution review needed.

## Acceptance Gate Summary

Acceptance gate is expected to be `partial`: required files and YAML can pass, but runtime probes, smoke fixture, output schema freeze, and runtime measurement remain blockers. The final acceptance result is recorded in [../checks/acceptance_gate_report.md](../checks/acceptance_gate_report.md).

## Reviewer Questions

- Is the canonical spatial domain surface shape acceptable for other methods in this task family?
- Should BANKSY use a shared scverse-like capsule after import probing, or a dedicated CPU capsule?
- What minimal fixture should be approved for smoke testing?
- What output schema should be frozen for domain labels and summary tables?
- Should optional R/rpy2 clustering remain excluded from MVP?

## Explicit Non-Claims

- This package does not implement a BANKSY runtime adapter.
- This package does not run BANKSY.
- This package does not validate biological correctness.
- This package does not provide runtime support.
