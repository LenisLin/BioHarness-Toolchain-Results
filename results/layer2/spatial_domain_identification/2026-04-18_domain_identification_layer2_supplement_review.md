# Spatial Domain Identification Decision Tree v1.2

## Status

This document is a Layer 2 supplement for `Domain / Clustering -> Spatial domain identification`.

- Layer served: `Layer 2`
- Purpose: `when to choose`, not `how to run`
- Status: `pilot-provisional supplement`
- Tree anchor: [2026-04-16_domain_identification_layer2_pilot.md](/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_pilot.md)
- Row anchor: [2026-04-16_domain_identification_layer2_subtable.md](/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.md)

This document does not freeze Layer 3 execution surfaces, wrappers, adapter boundaries, callable signatures, or repo/module structure.

## Reading Rules

- Keep the current 27-tool topic freeze unchanged.
- Use branch criteria in this fixed order:
  `first-pass vs post-processing` -> `Cross-slice Support` -> `Batch Handling` -> `External Biological Guidance` -> `Image Signal Use` -> `Main Spatial Prior` / method family.
- Treat `Compute Requirement` as a branch-local resource gate only. It can change what to read or try first, but it does not override task-fit.
- Use benchmark and review evidence for branch-local ordering only. Do not use it as root branching logic or as a universal all-method ranking.
- `SpatialPrompt`, `conST`, and `PROST` are boundary rows everywhere they recur in this tree.
- Some methods recur across branches because the tree follows analyst need first. When a repeated placement extends beyond the strongest local row anchor, it is marked `pilot-provisional carry-over`.
- When local authority and external papers are in tension, keep the current local row as the default anchor and surface the tension explicitly rather than silently rewriting the tree.
- All tree uses of `Closest Alternatives`, `Key Difference`, `Cross-slice Support`, `Batch Handling`, and disputed guidance interpretation should be read as `pilot-provisional` unless a note says the support is direct and explicit.

## Step 0. Are you selecting a first-pass domain caller or refining existing domain results?

### If you already have multiple first-pass domain results and want consensus refinement

- Candidate:
  - `STCC`
- Interpretation:
  - post-processing / consensus method
- Note:
  - not a first-pass branch

### If you need a first-pass domain caller

- Continue to Step 1

## Step 1. Is joint multi-slice or multi-sample domain modeling a first-order requirement?

### Yes

- Go to `Multi-slice branch`

### No or not first-order

- Go to `Single-slice / no-joint-modeling-first branch`

# Multi-slice branch

## Step 1A. Is explicit batch-aware or integration-aware modeling a first-order requirement inside the multi-slice setting?

### Yes

- Primary candidate set:
  - `PRECAST`
  - `GraphST`
  - `DeepST`

#### Resource gate

- If CPU-only or CPU-first is the real constraint:
  - read or try first:
    - `PRECAST`
- If GPU is acceptable:
  - keep the branch open:
    - `PRECAST`
    - `GraphST`
    - `DeepST`
- Do not read `Optional GPU` labels here as proof of CPU-optimized performance.

#### Benchmark-informed finer ranking

- Apply only inside this branch.
- Prefer branch-local evidence on:
  - multi-slice integration
  - batch-aware alignment
  - domain consistency across slices

### No or not essential

- Go to `Multi-slice without explicit batch-aware modeling`

## Multi-slice without explicit batch-aware modeling

### If the main preference is Bayesian or probabilistic multi-sample structure

- Candidate:
  - `BASS`

### If the main preference is multiscale, tissue-structure, or efficient architecture discovery

- Candidate set:
  - `MENDER`
  - `SPACEL`
  - `SpaSEG`

### If the main preference is graph-based extension across consecutive sections

- Candidate:
  - `STAGATE`

### If the main preference is interpretable or topic-style structure

- Candidate:
  - `STAMP`

#### Resource gate

- CPU-first reading order:
  - `BASS`
  - `MENDER`
- If GPU is acceptable, expand reading or trial order to:
  - `SPACEL`
  - `SpaSEG`
  - `STAGATE`
  - `STAMP`
- Again, treat `Optional GPU` as a coarse resource cue, not as proof of CPU parity.

#### Benchmark-informed finer ranking

- Apply only inside the selected branch.
- Use benchmark evidence for local ordering, not for branch selection.

# Single-slice / no-joint-modeling-first branch

Branch note:

- This branch is organized around cases where joint multi-slice modeling is not the first-order requirement.
- A method may still recur here as a `pilot-provisional carry-over` if its local row also supports joint multi-slice modeling.

## Step 2. Is external biological guidance part of the intended analysis?

### Yes

- Go to `Guided single-slice branch`

### No

- Go to `Unguided or weakly guided single-slice branch`

# Guided single-slice branch

## Step 2A. What type of guidance is available?

### Marker-guided

- Candidate:
  - `Pianno`

### Matched scRNA-assisted or deconvolution-assisted

- Candidate:
  - `SpaTopic`

### Boundary carry-over: fast reference-informed or co-calling framing

- Candidate:
  - `SpatialPrompt` (`pilot-provisional boundary`)
- Interpretation:
  - current local row anchor still keeps `External Biological Guidance = none`
  - retain this only as a boundary reading note, not as frozen guidance policy

#### Resource gate

- Compute is not the main separator here.
- Keep current resource labels advisory only.

#### Recommendation note

- The guided route can be primary when the needed prior is genuinely available.
- Keep one unguided baseline for sanity comparison when practical.

# Unguided or weakly guided single-slice branch

## Step 3. Should image signal enter domain calling?

### Yes

- Go to `Image-aware branch`

### No

- Go to `Morphology-free branch`

# Image-aware branch

## Step 3A. What is the intended role of image signal?

### Image signal is required

- Candidate set:
  - `ConGI`
  - `SiGra`

### Image signal is available and may help, but is not mandatory

- Candidate set:
  - `SpaGCN`
  - `stLearn`
  - `DeepST` (`pilot-provisional carry-over`)
  - `conST` (`pilot-provisional boundary`)

#### Resource gate

- CPU-first reading order:
  - `SpaGCN`
  - `stLearn`
- If GPU is acceptable:
  - for the required-image branch, keep open:
    - `ConGI`
    - `SiGra`
  - for the optional-image branch, expand to:
    - `SpaGCN`
    - `stLearn`
    - `DeepST` (`pilot-provisional carry-over`)
    - `conST` (`pilot-provisional boundary`)
- Do not let the resource cue override the distinction between `required` and `optional` image use.

#### Benchmark-informed finer ranking

- Apply only inside this image-aware branch.
- Prefer branch-local ranking by:
  - anatomical concordance or clustering accuracy
  - spatial continuity
  - robustness
  - scalability only when slice size makes it decision-relevant

# Morphology-free branch

## Step 4. Which route best matches the analysis preference?

### 4A. Stable Bayesian or embedding baseline

- Candidate set:
  - `BayesSpace`
  - `DR-SC`
  - `SpatialPCA`

#### Resource gate

- CPU-constrained:
  - all remain reasonable
- GPU-acceptable:
  - no major change at current Layer 2 granularity

#### Benchmark-informed finer ranking

- Apply only inside this branch.
- Prefer benchmark metrics related to:
  - clustering accuracy or concordance
  - robustness
  - practical scalability

### 4B. Graph, contrastive, or continuity-focused domain caller

- Candidate set:
  - `STAGATE` (`pilot-provisional carry-over`)
  - `GraphST` (`pilot-provisional carry-over`)
  - `SEDR`
  - `CCST`
  - `ADEPT`
  - `SpaceFlow`
  - `conST` (`pilot-provisional boundary`)

#### Resource gate

- CPU-constrained:
  - if graph inductive bias is not essential, read the Bayesian or embedding branch first
- GPU-acceptable:
  - branch remains open for all listed candidates

#### Benchmark-informed finer ranking

- Apply only inside this branch.
- Prefer metrics related to:
  - clustering accuracy
  - continuity
  - robustness
  - branch-specific scalability

### 4C. Multiscale, tissue-structure, or fast structural route

- Candidate set:
  - `BANKSY`
  - `PROST` (`pilot-provisional boundary`)

#### Resource gate

- CPU-constrained:
  - both remain eligible
- GPU-acceptable:
  - no major restriction at current granularity

#### Notes

- `PROST` remains topic-valid but overlaps with pattern discovery and interpretable structure.

#### Benchmark-informed finer ranking

- Apply only inside this branch.
- Prefer metrics related to:
  - region delineation
  - continuity
  - scalability

### 4D. Interpretable, topic, or semantic route without external biological guidance

- Candidate set:
  - `STAMP` (`pilot-provisional carry-over`)
  - `PROST` (`pilot-provisional boundary`)

#### Resource gate

- CPU-constrained:
  - `PROST` (`pilot-provisional boundary`)
- GPU-acceptable:
  - `STAMP` (`pilot-provisional carry-over`)
  - `PROST` (`pilot-provisional boundary`)

#### Notes

- `STAMP` remains topic-valid but its strongest local row anchor is still joint multi-slice modeling.
- `PROST` remains topic-valid but should not automatically replace direct domain baselines unless interpretability or pattern-linked structure is the primary goal.

#### Benchmark-informed finer ranking

- Apply only inside this branch.
- Prefer metrics or review evidence that better reflect:
  - interpretability
  - pathology relevance
  - downstream biological coherence
- Do not force this branch into the same ranking logic as direct domain-label baselines.

## Benchmark use rule

Whitelisted benchmark and review papers are used as:

- branch-local ordering evidence
- tie-break support
- metric-specific ranking support

They are not used as:

- root branching logic
- global all-method ranking
- universal replacement for task-fit conditions

## Resource use rule

`Compute Requirement` can change branch-internal reading or trial order, but should not override task-fit.

At the current stage:

- `Compute Requirement` is actionable as a coarse resource cue
- `Memory Burden` and `Scale Sensitivity` remain advisory and often `unclear`
- use resource constraints conservatively unless a method is clearly impractical in the current environment

## Repeated placement and provisionality rule

- `SpatialPrompt`, `conST`, and `PROST` stay boundary rows everywhere they recur.
- `GraphST`, `DeepST`, `STAGATE`, and `STAMP` can recur outside their strongest local cross-slice anchor only as `pilot-provisional carry-over`.
- Repeated placement is allowed for multi-capability methods, but the caveat tag must travel with the repeated placement.
- `Pianno` and `SpaTopic` stay out of unguided branches.

## Current provisional zones

These remain pilot-provisional and may require later confirmation:

- exact branch-internal ranking
- `Closest Alternatives`
- `Key Difference`
- repeated placement for multi-capability rows
- `Cross-slice Support`
- `Batch Handling`
- `SpatialPrompt` as a guidance-boundary carry-over
- some resource-driven ordering inside GPU-optional branches

## Evidence spot-check notes

### `ConGI`

- Local row anchor:
  - `Image Signal Use = required`
  - `Cross-slice Support = single-slice only`
- Tree implication:
  - keep `ConGI` inside the image-required branch
  - do not collapse it into the optional-image set
- Evidence anchors:
  - [ConGI paper DOI landing page](https://doi.org/10.1093/bib/bbad048)
  - [Genome Biology 2024 benchmark](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-024-03361-0)

### `STAGATE`

- Local row anchor:
  - `Cross-slice Support = joint multi-slice modeling`
  - `Batch Handling = implicit / limited`
- Tree implication:
  - primary fit is the multi-slice non-explicit-batch graph branch
  - recurrence in the morphology-free graph branch must stay `pilot-provisional carry-over`
- Evidence anchors:
  - [STAGATE method paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC8976049/)
  - [layer2_subtable.md](/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.md)

### `STAMP`

- Local row anchor:
  - `External Biological Guidance = none`
  - `Cross-slice Support = joint multi-slice modeling`
- Tree implication:
  - primary fit is the multi-slice interpretable or topic branch
  - recurrence in the unguided interpretable branch must stay `pilot-provisional carry-over`
- Evidence anchors:
  - [STAMP PubMed](https://pubmed.ncbi.nlm.nih.gov/39407016/)
  - [layer2_subtable.md](/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.md)

### `SpatialPrompt`

- External-read tension:
  - title and external framing can read as deconvolution-coupled or reference-informed
- Local row anchor:
  - `External Biological Guidance = none`
  - `Cross-slice Support = single-slice only`
- Tree implication:
  - keep it out of the main guided candidate set
  - retain it only as `pilot-provisional boundary`
- Evidence anchors:
  - [SpatialPrompt paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC11127982/)
  - [layer2_subtable.md](/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.md)

### `Pianno`

- Local row anchor:
  - `External Biological Guidance = marker-guided`
- Tree implication:
  - keep `Pianno` inside the guided marker branch
  - do not let it leak into unguided branches
- Evidence anchors:
  - [Pianno paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC11271244/)
  - [layer2_subtable.md](/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.md)

### `SpaTopic`

- Local row anchor:
  - `External Biological Guidance = deconvolution-assisted`
- Tree implication:
  - keep `SpaTopic` inside the guided matched scRNA or deconvolution-assisted branch
  - do not let it leak into unguided branches
- Evidence anchors:
  - [SpaTopic paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC11430467/)
  - [layer2_subtable.md](/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.md)

### `Genome Biology 2024 benchmark`

- Working use in this tree:
  - branch-local ordering support
  - tie-break support
  - metric-specific support
- Not allowed use:
  - root branching logic
  - universal top-tool ranking
- Evidence anchor:
  - [Genome Biology 2024 benchmark](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-024-03361-0)

## Coverage ledger against the current 27-tool freeze

### Post-processing

- `STCC`

### Multi-slice explicit batch-aware

- `PRECAST`
- `GraphST`
- `DeepST`

### Multi-slice without explicit batch-aware modeling

- `BASS`
- `MENDER`
- `SPACEL`
- `SpaSEG`
- `STAGATE`
- `STAMP`

### Guided single-slice

- `Pianno`
- `SpaTopic`
- `SpatialPrompt` (`pilot-provisional boundary`)

### Unguided single-slice image-aware

- `ConGI`
- `SiGra`
- `SpaGCN`
- `stLearn`
- `DeepST` (`pilot-provisional carry-over`)
- `conST` (`pilot-provisional boundary`)

### Unguided single-slice morphology-free

- `BayesSpace`
- `DR-SC`
- `SpatialPCA`
- `STAGATE` (`pilot-provisional carry-over`)
- `GraphST` (`pilot-provisional carry-over`)
- `SEDR`
- `CCST`
- `ADEPT`
- `SpaceFlow`
- `BANKSY`
- `PROST` (`pilot-provisional boundary`)
- `STAMP` (`pilot-provisional carry-over`)

## Out-of-freeze note

- Do not expand the candidate freeze inside this v1.2 supplement.
- Treat newer out-of-freeze methods, including `IRIS` from June 6, 2024 and later 2025-2026 additions, as a separate candidate-freeze re-audit rather than importing them here.

## Intended use

This tree is suitable for:

- topic-level method selection discussion
- agent-facing Layer 2 guidance
- supplementing the current Layer 2 pilot and subtable

This tree is not yet suitable for:

- execution planning
- parameter recommendation
- wrapper or adapter design
- Layer 3 callable definition
