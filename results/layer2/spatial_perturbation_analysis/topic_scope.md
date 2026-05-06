# Spatial Perturbation Analysis Topic Scope

## Status

Layer served: `Layer 2`

Purpose: define the method-selection boundary for `Spatial Perturbation Analysis`.

This file records topic scope and evidence bounds only. It does not define execution surfaces, adapters, callable signatures, environment capsules, runtime support, or default methods.

## Analysis Problem Boundary

Layer 1 `Analysis Problem`: `Spatial Perturbation Analysis`

The registry `Subtask` values are branch cues only:

- `Spatial perturbation-response modeling`
- `Spatial causal perturbation-response modeling`
- `Spatial perturbation-effect detection`
- `Perturbation-responsive spatial pattern detection`
- `Spatiotemporal perturbation regulator prioritization`

They do not create separate Layer 2 completion units.

## Included Task Shape

Include methods when the frozen input or human-approved targeted boundary check places them in this analysis problem and their direct evidence supports at least one of the following roles:

- Predicting spatially localized perturbation responses from spatial transcriptomics and perturbation context.
- Modeling counterfactual post-perturbation spatial transcriptomics.
- Detecting observed spatial perturbation, exposure, treatment, or condition effects while preserving spatial context.
- Prioritizing perturbation-responsive spatial gene patterns or spatiotemporal regulators.
- Representing spatial niche, tissue-neighborhood, or cell-cell graph context for perturbation response.
- Supporting causal or causal-like spatial tissue perturbation analysis with explicit caveats.

## Excluded Task Shape

The following are outside this package unless a frozen candidate explicitly bridges into perturbation-response or perturbation-effect modeling:

- Generic differential expression or condition comparison without spatial perturbation-response or spatial perturbation-effect modeling.
- Spatial domain identification, graph/neighborhood construction, or cell-cell communication analysis without a perturbation-response or perturbation-effect target.
- Histology-to-expression prediction, denoising, imputation, or super-resolution as standalone goals.
- Assay/workflow-first spatial perturbation technologies without a named reusable computational method.
- Layer 3/4 execution planning, adapter design, package installation, runtime validation, or environment construction.

Boundary decision: the April 2026 `CDS` / counterfactual directional cell-cell influence preprint is treated as a Cell-Cell Communication boundary candidate, not added to this Spatial Perturbation Analysis package.

## Bounded Retrieval Record

Initial retrieval date: `2026-05-01`

Targeted boundary check date: `2026-05-02`

Sources consulted:

- Frozen input JSON: `historical topic-subagent staging input; current candidate-freeze authority is /mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_perturbation_analysis/topic_scope.md`
- PubMed E-utilities `esummary` for PMID/DOI verification.
- PubMed E-utilities `efetch` for bounded method-paper abstract review.
- PubMed E-utilities `esearch` and `esummary` for benchmark/review screening.
- Publisher pages, PubMed/PMC pages, and targeted search-engine checks for 2025-2026 boundary additions.
- GitHub/code-link checks from publisher or article code-availability statements.
- Local standards and examples listed in the task prompt.

Identifier verification queries:

```text
esummary.fcgi?db=pubmed&id=41292874,41851134&retmode=json
efetch.fcgi?db=pubmed&id=41292874,41851134&rettype=abstract&retmode=text
River / PMID 40603296 / DOI 10.1038/s41467-025-61476-9
Perturb-STNet / PMID 40545244 / DOI 10.1093/bib/bbaf277
Spatial-ZEDNet / PMID 42001470 / DOI 10.1093/bib/bbag166
```

Targeted boundary searches emphasized:

```text
spatial transcriptomics perturbation response prediction 2025 2026
spatial transcriptomics perturbation effect detection 2025 2026
counterfactual spatial transcriptomics perturbation modeling
spatiotemporal perturbation regulator spatial transcriptomics
Spatial-ZEDNet River Perturb-STNet CONCERT Celcomen
```

Benchmark/review screening query:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
(perturbation[Title/Abstract] OR perturbations[Title/Abstract] OR
 counterfactual[Title/Abstract] OR causal[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

Review result: no independent benchmark/review was found that jointly ranks the five frozen candidates across response prediction, causal counterfactual modeling, observed perturbation-effect detection, pattern prioritization, and spatiotemporal regulator branches. Method-paper benchmarks and case studies remain branch-local evidence only.

## Inclusion Rules

- Candidate set is frozen from the input JSON plus 2026-05-02 human-approved targeted boundary additions.
- Include only `CONCERT`, `Celcomen`, `Spatial-ZEDNet`, `River`, and `Perturb-STNet`.
- Retain registry-provided PMID, DOI, method family, compute cue, and code-access evidence only when the bounded pass did not contradict them.
- Distinguish direct PubMed/publisher/method-paper facts from Layer 2 synthesized method-selection judgment.
- Use `unclear` for weak resource, scale, and data-requirement evidence.

## Exclusion Rules

- Do not add related tools, neighboring preprints, general perturbation models, or broad spatial transcriptomics review methods unless human review approves a named reusable computational method.
- Do not promote method-paper comparisons into independent benchmark rankings.
- Do not infer BioHarness runtime support from code access.
- Do not freeze default methods or Layer 3/4 interfaces.

## Final Candidate Freeze

| Tool | Registry subtask cue | PMID | DOI | Evidence status |
| --- | --- | --- | --- | --- |
| `CONCERT` | Spatial perturbation-response modeling | 41292874 | 10.1101/2025.11.08.686890 | PubMed identity confirmed; bioRxiv preprint; code link reachable. |
| `Celcomen` | Spatial causal perturbation-response modeling | 41851134 | 10.1038/s41467-026-69856-5 | PubMed identity confirmed; Nature Communications article; code link reachable. |
| `Spatial-ZEDNet` | Spatial perturbation-effect detection | 42001470 | 10.1093/bib/bbag166 | PubMed/DOI identity confirmed; Briefings in Bioinformatics article; code link reported by publisher. |
| `River` | Perturbation-responsive spatial pattern detection | 40603296 | 10.1038/s41467-025-61476-9 | PubMed/PMC/Nature Communications identity confirmed; code link reported in article. |
| `Perturb-STNet` | Spatiotemporal perturbation regulator prioritization | 40545244 | 10.1093/bib/bbaf277 | PubMed/DOI identity confirmed; Briefings in Bioinformatics article; code link reported by publisher. |

Candidate count: `5`

Excluded registry rows: none in the current working input. Boundary hold: `CDS` / counterfactual directional cell-cell influence is assigned to Cell-Cell Communication review, not this topic.
