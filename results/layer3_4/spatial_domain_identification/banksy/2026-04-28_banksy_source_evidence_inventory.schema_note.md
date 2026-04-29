# BANKSY Source Evidence Inventory Schema Note

This schema note describes the JSON evidence inventory produced for the BANKSY Layer3/4 planning pilot on 2026-04-28.

- `record_id`: stable identifier for this retrieval inventory.
- `retrieval_scope`: boundaries for the evidence search in this round.
- `source_pinning`: upstream repository, commit, and checked source set.
- `evidence_items`: granular inspected facts. Each item carries source references, supported claims, limitations, confidence, and Layer3/Layer4 assignment.
- `layer_assignment`: one of `layer3`, `layer4`, `shared_planning_metadata`, or `excluded_out_of_scope`.
- `assignment_detail`: explicit per-item allocation status for `layer3`, `layer4`, `shared_planning_metadata`, and `excluded_out_of_scope`. Values distinguish direct assignment from semantic/backend implications only.
- `claim_boundary`: states what the evidence can and cannot support.
- `coverage_summary`: compact checklist against MethodExecutionPlanningRecord v0.6 requirements.

This inventory is evidence for blueprint planning only. It is not a production adapter, environment capsule, validation result, benchmark, or biological correctness claim.
