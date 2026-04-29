# BANKSY Retrieval Coverage Check

Date: 2026-04-28

Status: blueprint/protocol coverage check only

Checked against:

- `MethodExecutionPlanningRecord v0.6`
- Layer3/Layer4 design and co-design docs
- `environment_plan`
- `rewrite_plan`
- `validation_runtime_plan`
- evidence/claim boundary requirements

## Coverage Summary

| Required area | Coverage | Evidence | Notes / gaps |
| --- | --- | --- | --- |
| Layer2 hard constraints | Covered | Existing read-only NAS Layer2 artifacts | Compact handoff only; full Layer2 selection reasoning is not copied into Layer3. |
| Canonical family surface inheritance | Covered for blueprint | Local repo docs and planning record | Method surface should use `spatial_domain_identification.banksy.v1` inheriting from `spatial_domain_identification.canonical.v1`. |
| Layer3/Layer4 visibility separation | Covered | Local repo docs, assignment matrix | Layer3 semantic only; Layer4 holds backend binding evidence. |
| Audit evidence registry | Covered | JSON inventory and retrieval plan | Evidence references are sufficient for blueprint planning. |
| Code mind map | Covered | Official repo README, pyproject, modules, examples | Backend file/function details belong in Layer4 only. |
| Function surface map | Covered for planning | Official modules and assignment matrix | Mapping is conceptual and not an implemented adapter. |
| Layer3 agent surface | Covered for blueprint | Layer2 handoff plus official usage evidence | Semantic parameters remain bounded; numeric mappings are not frozen. |
| Layer4 adapter draft | Covered for strong-wrapper planning | Official source modules | No production adapter or executable wrapper exists. |
| Environment plan | Mostly covered | `pyproject.toml`, README | Package/dependency evidence exists; no lockfile/container/capsule evidence. |
| Rewrite plan | Covered | Repo rewrite policy and official backend evidence | Strong wrapper, no algorithmic rewrite. |
| Validation runtime plan | Partially covered | README, modules, examples | Install/runnable/observable-I/O checks are planned but not executed. |
| Runtime cost record | Not covered | None | No wall-time, memory, device, or fixture-size measurement has been run. |
| Risk register | Covered | JSON inventory and assignment matrix | Includes scientific overclaim, dense memory, environment, reproducibility, licensing, and agent misuse risks. |
| Decision log | Covered for blueprint | Planning record | Decisions remain revisitable unless tied to repo-wide Layer3/4 separation. |
| Scientific evidence boundary | Covered | Retrieval plan and inventory | This is not a paper-level re-review and does not claim biological correctness. |

## MethodExecutionPlanningRecord v0.6 Checklist

- [x] `record_id`, `record_version`, `method_id`, `task_family`, `planning_status`, and `authority_status`.
- [x] `source_layer2_artifacts`.
- [x] `canonical_surface_reference`.
- [x] Compact `layer2_to_layer3_handoff`.
- [x] `hard_constraints_for_layer3`.
- [x] `audit_evidence_registry`.
- [x] `code_mind_map`.
- [x] `function_surface_map`.
- [x] `layer3_agent_surface`.
- [x] `layer4_adapter_draft`.
- [x] `environment_plan`.
- [x] `rewrite_plan`.
- [x] `validation_runtime_plan`.
- [x] `risk_register`.
- [x] `decision_log`.
- [x] `subagent_work_plan`.
- [x] `next_action_decision`.

## Environment Plan Check

- [x] Package manager evidence exists from official Python package metadata.
- [x] Python range is recorded.
- [x] Dependency list is recorded.
- [x] Optional extras are recorded.
- [x] GPU/CUDA policy is bounded as not required / not applicable for this blueprint.
- [x] CPU-first execution is planned.
- [x] Lock/container evidence gap is recorded.
- [x] Dedicated or compatibility-tested capsule is recommended before production.
- [ ] BioHarness environment probe has been run.
- [ ] BioHarness capsule exists.

## Rewrite Plan Check

- [x] Interface standardization need is recorded.
- [x] Scope includes input validation, semantic parameter mapping, output namespace/provenance, and typed failures.
- [x] Algorithmic rewrite is marked not needed.
- [x] Algorithm core is marked untouched.
- [x] Fidelity requirement is reserved for any future algorithmic rewrite.
- [x] Rewrite decision is `strong_wrapper` / no algorithmic rewrite.

## Validation Runtime Plan Check

- [x] Installability check is planned.
- [x] Runnable example/smoke fixture check is planned.
- [x] Observable-I/O checks are planned.
- [x] Input contract checks are planned.
- [x] Output contract checks are planned.
- [x] Visual checks are explicitly limited to sanity checks.
- [x] Visual checks are not biological correctness.
- [x] Visual checks are not algorithmic equivalence.
- [x] Reproducibility checks include seed policy and label permutation awareness.
- [x] Runtime-cost record is explicitly not executed.
- [ ] Minimal BioHarness fixture exists.
- [ ] Smoke run passed.
- [ ] Repeated-run reproducibility was measured.

## Layer3 Boundary Check

Layer3 should contain:

- semantic input requirements;
- semantic parameters;
- semantic outputs;
- standard artifact expectations;
- typed failure names and agent actions;
- validation hooks;
- explicit exclusions.

Layer3 must not contain:

- backend file paths;
- raw backend function names;
- implementation call graph;
- package-private parameters;
- unvalidated backend defaults.

Coverage status: covered in the assignment matrix and planning record. Any backend-specific details found during retrieval are assigned to Layer4.

## Layer4 Boundary Check

Layer4 may contain:

- repository URL and commit;
- package files;
- backend files/functions/call signatures;
- parameter mapping;
- input conversion;
- output mapping;
- artifact mapping;
- failure translation;
- filesystem behavior;
- smoke/fidelity test plans.

Coverage status: sufficient for a `strong_wrapper` draft. Not sufficient to claim an implemented production adapter.

## Evidence Gaps That Must Remain Visible

- No production adapter is implemented.
- No BioHarness environment capsule exists for BANKSY.
- No install/import probe was run in this retrieval pass.
- No minimal BioHarness AnnData smoke fixture exists.
- No runtime-cost measurement exists.
- No paper-level scientific re-review was performed.
- No biological correctness or benchmark superiority claim is supported by this retrieval.
- GPL-3.0 distribution implications require future packaging/legal review before bundling decisions.

## Coverage Decision

The retrieval results are sufficient to draft a BANKSY `MethodExecutionPlanningRecord v0.6` and to support separate Layer3 and Layer4 blueprint drafts. The results are not sufficient to move BANKSY to production implementation, freeze an environment capsule, or claim runtime validity.
