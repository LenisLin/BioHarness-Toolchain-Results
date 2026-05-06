# Domain / Clustering Topic Scope

## Layer 2 Unit

Analysis Problem: `Domain / Clustering`

Layer served: `Layer 2`

Registry `Subtask` values are branch cues only. They do not create separate Layer 2 completion units in this package.

## Boundary

In scope: methods whose frozen registry role is spatial domain identification, spatial clustering, tissue segmentation, domain-aware embedding, semantic domain annotation, or multi-slice/multimodal domain comparison.

Out of scope: general normalization, denoising/imputation, cell-type deconvolution, ligand-receptor inference, SVG detection as a primary task, image segmentation without spatial expression, and runtime adapter design.

## Bounded Evidence Framing

Retrieval date: `2026-05-01`

Sources used under the convergence constraint:

- Frozen input: `historical topic-subagent staging input; current candidate-freeze authority is /mnt/NAS_21T/ProjectData/BioHarness/results/layer2/domain_clustering/topic_scope.md`
- Local completion standard: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/TOPIC_COMPLETION_STANDARD.md`
- Local style/schema example: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/denoising_imputation/`
- Local correction note: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_high_priority_journal_sweep_and_backbone_correction.md`
- Brief benchmark/review screening only: the frozen registry repeatedly cites Nature Methods 2024 and Genome Biology 2024 spatial clustering benchmarks; quick screening found broad domain/clustering benchmark support but no single all-candidate benchmark covering all 37 frozen methods.

No long retrieval was performed. Fields that could not be supported by the frozen input, correction note, immediately available PubMed/DOI identifiers, or brief benchmark/review screening are marked conservatively as `unclear` or framed as Layer 2 synthesis.

## Inclusion Rules

- Keep exactly the 37 frozen candidates from `candidate_freeze`.
- Include methods reassigned into Domain / Clustering by the frozen registry even when they also touch integration, annotation, SVG, deconvolution, or denoising.
- Treat benchmark-seeded and high-priority journal-sweep methods as candidate rows, not as execution-ready tools.

## Exclusion Rules

- Do not add newly discovered methods from benchmark papers or web/PubMed screening.
- Do not remove candidates because code access is pending or branch fit is narrow.
- Do not promote any candidate to default status.
- Do not infer Layer 3 callable surfaces or Layer 4 adapter boundaries.

## Candidate Freeze

Candidate count: `37`

`ADEPT`, `BANKSY`, `BASS`, `BayesSpace`, `CCST`, `ConGI`, `conST`, `DeepST`, `DR-SC`, `GraphST`, `MENDER`, `Pianno`, `PRECAST`, `PROST`, `SEDR`, `SiGra`, `SpaceFlow`, `SPACEL`, `SpaGCN`, `SpaSEG`, `SpatialPCA`, `SpatialPrompt`, `SpaTopic`, `STAGATE`, `STAMP`, `STCC`, `stLearn`, `Novae`, `IRIS`, `SpatialGlue`, `BINARY`, `stDyer`, `SpatialLeiden`, `GraphPCA`, `iIMPACT`, `MNMST`, `SpaDo`

## Branch Organization

The decision tree uses branch-local cues only:

- expression + spatial coordinates
- graph/neighborhood spatial prior
- Bayesian/probabilistic clustering
- image or morphology-informed domain discovery
- multi-slice, alignment, or batch-aware domain comparison
- multi-omics or multimodal integration
- interpretable topic, marker, or semantic domain output
- reference-informed tissue segmentation

These branches are not global rankings.
