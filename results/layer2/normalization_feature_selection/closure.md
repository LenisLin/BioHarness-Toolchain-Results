# Normalization / Feature Selection Closure

## Status

Layer served: `Layer 2`

Purpose: closure record for the `Normalization / Feature Selection`
working/evidence package.

This file records Layer 2 completion status only. It does not create Layer 3
execution surfaces, Layer 4 adapters, callable signatures, environment
capsules, default methods, or runtime-support claims.

## Gate Check

| Gate | Status | Note |
| --- | --- | --- |
| Candidate set frozen from input JSON | pass | Frozen to `SpaNorm` and `scGIST`; no methods added. |
| Required eight artifacts present | pass | `README.md`, `topic_scope.md`, `field_registry.json`, `method_table.json`, `method_table.csv`, `method_table.md`, `review_decision_tree.md`, and `closure.md`. |
| Shared fields included | pass | All required shared fields are present in the JSON/CSV/Markdown table. |
| Topic-specific fields defined | pass | Branch, spatial-signal, reference/label, targeted-assay, output-alteration, and scientific-risk fields are defined in `field_registry.json`. |
| PubMed PMID/DOI verification | pass | PMIDs 40301877 and 38408997 verified by PubMed ESummary/EFetch. |
| Benchmark/review screening | pass with caveat | PubMed screening found broad reviews and adjacent method papers, but no independent benchmark comparing both frozen candidates. |
| CSV/Markdown generated from JSON | pass | CSV and Markdown were rendered from `method_table.json`. |
| Runtime-support claims avoided | pass | Code access is recorded only as an audit trace. |

## Current Layer 2 Facts

- The completed topic unit is the Layer 1 `Analysis Problem`:
  `Normalization / Feature Selection`.
- The final candidate freeze contains two methods: `SpaNorm` and `scGIST`.
- `SpaNorm` is the spatial-aware normalization branch.
- `scGIST` is the targeted gene-panel feature-selection branch.
- The two methods should be compared by branch fit, not as global alternatives
  for one operation.
- PubMed verifies both method-paper identities and DOIs.
- Code access is currently traceable for both candidates, but this does not
  imply BioHarness execution readiness.

## Remaining Caveats

- No independent benchmark was found that jointly ranks `SpaNorm` and `scGIST`.
  The decision tree therefore relies on branch-local logic, method-paper
  evidence, and scientific caveats.
- Memory burden and scale sensitivity remain `unclear` for both methods.
- `SpaNorm` normalization can be scientifically risky when library-size effects
  and real spatial biology are difficult to separate.
- `scGIST` panel design can be scientifically risky when reference data, labels,
  tissue context, or panel-size constraints do not transfer to the intended
  spatial assay.
- Adjacent methods surfaced during review screening are intentionally not added
  because the candidate set is frozen.

## Closure Decision

Decision: complete Layer 2 working/evidence package.

This package is ready to serve as the working basis for later formal Layer 2
rendering or representative Layer 3/4 engineering audit. It is not a default
method list, runtime-support statement, adapter plan, or environment plan.

## Representative Layer 3/4 Audit Batch

The following audit batch is representative only. It exists to seed later
engineering review and does not imply runtime support or priority:

| Candidate | Audit reason | Audit questions |
| --- | --- | --- |
| `SpaNorm` | Covers the post-capture spatial-aware normalization branch. | What object types and normalization outputs are actually exposed by the Bioconductor package? What validation checks would detect over-normalization or loss of spatial biology? What dependency and memory behavior appears under multi-sample or subcellular data? |
| `scGIST` | Covers the targeted gene-panel feature-selection branch. | What inputs are required for labels, prioritized gene sets, and panel size? What output schema is stable enough for downstream assay-design provenance? What checks would detect reference mismatch or panel-transfer risk? |

Later Layer 3/4 work must decide execution surfaces, adapters, environments,
validation hooks, and provenance details in its own authoritative artifacts.
