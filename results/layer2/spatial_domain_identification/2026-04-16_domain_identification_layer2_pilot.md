# Layer 2 Domain Pilot: Spatial Domain Identification

## Status

This document is the formal authority for the current `Spatial domain identification` domain pilot schema.

- Task slot: `Domain / Clustering -> Spatial domain identification`
- Layer served: `Layer 2`
- Current status: `pilot`
- Primary purpose: support `when to choose` comparisons for agent-facing tool selection

This document is not a `Layer 3` manual. It does not define execution surface details, adapter boundaries, per-tool rewrite granularity, callable signatures, or repo/module structure.

Decision tree growth for this topic is restricted to the Layer 2 subtable fields frozen here. Later decision logic may summarize or branch on these fields, but it should not introduce a separate decision basis outside this schema.

## Current Topic Freeze

The current local candidate set for this topic remains frozen at 27 tools:

`BANKSY`, `BASS`, `BayesSpace`, `CCST`, `ADEPT`, `DR-SC`, `DeepST`, `ConGI`, `GraphST`, `conST`, `MENDER`, `PRECAST`, `PROST`, `Pianno`, `SEDR`, `SPACEL`, `SpaceFlow`, `STAGATE`, `STAMP`, `STCC`, `SiGra`, `SpaGCN`, `SpaSEG`, `SpaTopic`, `SpatialPCA`, `SpatialPrompt`, `stLearn`.

This pilot freezes the Layer 2 schema for this topic only. It does not generalize to other topics yet, and it does not expand into Layer 3 guidance.

## Frozen Layer 2 Schema

### Shared Fields

| Field | Field role | Definition | Fill rule |
| --- | --- | --- | --- |
| `Tool Name` | identity | Canonical tool identity for the current topic subtable. | Use the canonical method/tool name only. |
| `Method Family` | method characterization | Short algorithm-family label. | Keep to a short family phrase only. |
| `Main Input` | input picture | High-level input picture for this topic. | Use a short object-level phrase, not a schema or parameter list. |
| `Main Use in This Topic` | topic use | Main role of the tool inside `Spatial domain identification`. | Use a short topic-specific phrase. |
| `Main Output` | output object | High-level output object for this topic. | Use a short object-level phrase only. |
| `Closest Alternatives` | local comparator set | Nearby alternatives from the same topic. | Use `2-4` local alternatives from the current topic only. |
| `Key Difference` | selection discriminator | Main decision difference versus nearby alternatives. | Use one short decision-level distinction sentence. |
| `Compute Requirement` | resource cue | Coarse compute requirement only. | Use a coarse CPU/GPU label only. |
| `Memory Burden` | resource cue | Coarse memory burden. | Use a short coarse label and allow `unclear` when direct support is weak. |
| `Scale Sensitivity` | resource cue | Coarse sensitivity to larger spatial scale. | Use a short coarse label and allow `unclear`; be more conservative than `Memory Burden`. |
| `Code Access` | access trace | Current code-access state. | Record access state only. |
| `Primary Code Link` | access trace | One primary code location. | Use one primary link only. |
| `Evidence Source` | evidence trace | Main evidence basis for the row. | Use one frozen source label only. |
| `Evidence Note` | evidence trace | Short caveat on what is explicit and what still rests on pilot judgment. | Keep to `1-2` short sentences. |

### Topic-Specific Fields

| Field | Field role | Definition | Fill rule |
| --- | --- | --- | --- |
| `Image Signal Use` | topic-specific decision cue | How image information enters the method for this topic. | Use one frozen value: `none`, `optional`, or `required`. |
| `External Biological Guidance` | topic-specific decision cue | Whether the method depends on external biological priors. | Use one frozen value only. |
| `Cross-slice Support` | topic-specific decision cue | Whether the method is designed for only single slices, separate repeated use, or joint multi-slice modeling. | Use one frozen value only. |
| `Batch Handling` | topic-specific decision cue | Whether batch effects are ignored, only partly handled, or explicitly modeled. | Use one frozen value only. |
| `Main Spatial Prior` | topic-specific decision cue | Main spatial inductive bias used for domain calling. | Use `primary label + optional short modifier`; the primary label must come from the frozen label set. |
| `Best First Choice When` | positive decision cue | Best-fit starting condition. | Use one short condition sentence. |
| `Do Not Start With This When` | exclusion decision cue | Main exclusion condition. | Use one short exclusion sentence. |


## Controlled Semantics

### Frozen Controlled Values

| Field | Allowed values |
| --- | --- |
| `Compute Requirement` | `CPU`, `Optional GPU`, `Required GPU` |
| `Memory Burden` | `low`, `medium`, `high`, `unclear` |
| `Scale Sensitivity` | `low`, `medium`, `high`, `unclear` |
| `Code Access` | `available`, `archived`, `unclear`, `unavailable` |
| `Evidence Source` | `method paper`, `benchmark/review`, `official docs`, `community practice`, `mixed` |
| `Image Signal Use` | `none`, `optional`, `required` |
| `External Biological Guidance` | `none`, `marker-guided`, `annotation-guided`, `reference-like guidance`, `deconvolution-assisted` |
| `Cross-slice Support` | `single-slice only`, `separate multi-sample use`, `joint multi-slice modeling` |
| `Batch Handling` | `not addressed`, `implicit / limited`, `explicit batch-aware` |

## Round 2 Pass 2 Minimal Repair Note

- The current pilot authority copy for archival use is stored in `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_pilot.md`.
- Round 2 pass 2 adds explicit controlled values in the registry for `Compute Requirement`, `Memory Burden`, `Scale Sensitivity`, and `Code Access`.
- `Batch Handling` remains the current three-value pilot enum: `not addressed`, `implicit / limited`, `explicit batch-aware`.
- The 21 frozen decision fields remain unchanged.
- `Closest Alternatives`, `Key Difference`, `Cross-slice Support`, and `Batch Handling` remain pilot provisional Layer 2 judgment fields and may be tightened later before Layer 3 use.
- The prompt wording could be read as splitting `implicit` and `limited`, but this pass keeps the existing local three-value pilot authority and records the ambiguity as a pilot issue rather than creating a larger schema change.

## Round 2 Pass 2 Outputs

- Field registry: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_layer2_field_registry.json`
- Full human-readable subtable: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.md`
- Machine-readable subtable: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/spatial_domain_identification/2026-04-16_domain_identification_layer2_subtable.json`

### Main Spatial Prior Frozen Primary Labels

Fill `Main Spatial Prior` as `primary label + optional short modifier`, with the primary label restricted to:

- `graph neighborhood`
- `Bayesian spatial smoothing`
- `multiscale neighborhood`
- `latent embedding`
- `topic structure`
- `image-informed weighting`
- `deep multimodal fusion`
- `ensemble consensus`

## SpaGCN Exemplar Row

### Final Row

| Field | Value |
| --- | --- |
| `Tool Name` | `SpaGCN` |
| `Method Family` | `Graph convolutional network` |
| `Main Input` | `ST matrix + spatial coordinates + histology image` |
| `Main Use in This Topic` | `spatial domain identification with histology-aware graph construction` |
| `Main Output` | `domain labels` |
| `Closest Alternatives` | `STAGATE; GraphST; SiGra` |
| `Key Difference` | `Uses histology-informed graph construction for domain calling unlike graph-only alternatives or heavier multimodal fusion approaches.` |
| `Compute Requirement` | `Optional GPU` |
| `Memory Burden` | `unclear` |
| `Scale Sensitivity` | `unclear` |
| `Code Access` | `available` |
| `Primary Code Link` | `https://github.com/jianhuupenn/SpaGCN` |
| `Evidence Source` | `method paper` |
| `Evidence Note` | `Method paper explicitly supports histology-aware domain calling from expression and coordinates. Comparator fields, cross-slice/batch cues, and burden cues remain Layer 2 pilot provisional judgment.` |
| `Image Signal Use` | `optional` |
| `External Biological Guidance` | `none` |
| `Cross-slice Support` | `single-slice only` |
| `Batch Handling` | `not addressed` |
| `Main Spatial Prior` | `graph neighborhood + image-informed weighting` |
| `Best First Choice When` | `When histology is available or likely informative and you want an established within-slice histology-aware graph baseline.` |
| `Do Not Start With This When` | `When explicit batch-aware correction or native joint multi-slice modeling is the first-order requirement.` |

### One-Row Layer 2 Subtable

```csv
Tool Name,Method Family,Main Input,Main Use in This Topic,Main Output,Closest Alternatives,Key Difference,Compute Requirement,Memory Burden,Scale Sensitivity,Code Access,Primary Code Link,Evidence Source,Evidence Note,Image Signal Use,External Biological Guidance,Cross-slice Support,Batch Handling,Main Spatial Prior,Best First Choice When,Do Not Start With This When
SpaGCN,Graph convolutional network,ST matrix + spatial coordinates + histology image,spatial domain identification with histology-aware graph construction,domain labels,STAGATE; GraphST; SiGra,Uses histology-informed graph construction for domain calling unlike graph-only alternatives or heavier multimodal fusion approaches.,Optional GPU,unclear,unclear,available,https://github.com/jianhuupenn/SpaGCN,method paper,Method paper explicitly supports histology-aware domain calling from expression and coordinates. Comparator fields; cross-slice and batch cues; and burden cues remain Layer 2 pilot provisional judgment.,optional,none,single-slice only,not addressed,graph neighborhood + image-informed weighting,When histology is available or likely informative and you want an established within-slice histology-aware graph baseline.,When explicit batch-aware correction or native joint multi-slice modeling is the first-order requirement.
```

## SpaGCN Double Check

### Confirmed Facts

- `Tool Name`
- `Method Family`
- `Main Input`
- `Main Use in This Topic`
- `Main Output`
- `Compute Requirement`
- `Code Access`
- `Primary Code Link`
- `Image Signal Use`
- `External Biological Guidance`

These are directly supported by the local registry together with the method paper, PubMed record, and official repository materials.

### Layer 2 Synthesized Judgment

- `Evidence Source`
- `Evidence Note`
- `Cross-slice Support`
- `Batch Handling`
- `Main Spatial Prior`

These fields combine direct evidence with Layer 2 synthesis. The strongest supported reading is that SpaGCN is a histology-aware, mainly within-slice domain-calling method without explicit batch-aware modeling.

### Pilot Provisional Judgment

- `Closest Alternatives`
- `Key Difference`
- `Cross-slice Support`
- `Batch Handling`
- `Memory Burden`
- `Scale Sensitivity`
- `Best First Choice When`
- `Do Not Start With This When`

These remain pilot provisional because they depend on comparison across the full local topic set or because current public evidence is not direct enough to justify a stronger burden/scale claim.

### Very Short Review Note

Current public evidence supports SpaGCN as a histology-aware single-slice domain-calling method. It does not justify upgrading the row to explicit batch-aware handling or joint multi-slice modeling, and `Memory Burden` plus `Scale Sensitivity` stay conservatively at `unclear`.

## Sources Used For This Pilot

- Local registry: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1_method_registry/registry/layer1_spatial_method_registry.csv`
- PubMed record: `https://pubmed.ncbi.nlm.nih.gov/34711970/`
- Method paper DOI landing page: `https://doi.org/10.1038/s41592-021-01255-8`
- Official repository: `https://github.com/jianhuupenn/SpaGCN`
- Official tutorial: `https://github.com/jianhuupenn/SpaGCN/blob/master/tutorial/tutorial.md`
