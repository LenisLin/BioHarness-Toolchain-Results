# Program Discovery Topic Scope

## Status

Layer served: `Layer 2`

Analysis Problem: `Program Discovery`

This scope file defines the Program Discovery completion unit. It uses the Layer 1 `Analysis Problem` as the topic boundary and treats registry `Subtask` values as branch cues only.

## Bounded Retrieval Record

Retrieval date: `2026-05-01`

Retrieval sources used for this convergence task:

- Frozen input: `/tmp/bioharness_layer2_subagents/input/program_discovery.json`
- Layer 1 registry source recorded by the frozen input: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`
- Local validation note: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_six_topic_layer1_supplement_manual_validation.md`
- Local correction note: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_high_priority_journal_sweep_and_backbone_correction.md`
- Completion standard: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/TOPIC_COMPLETION_STANDARD.md`
- Brief external screening query: `spatial transcriptomics program discovery benchmark review topic modeling factor discovery multicellular programs`

Search/review strategy: use the frozen PMID/DOI/title fields for direct evidence framing; do not add candidates; screen only for an immediately visible all-candidate benchmark or review. No suitable benchmark covering all thirteen frozen candidates was identified during the brief screening window.

## Inclusion Rules

- Include only methods in the frozen `candidate_freeze` list.
- Include methods whose frozen row supports program, factor, topic, co-expression, regulatory, tissue-module, or spatial-gradient discovery.
- Keep cross-topic methods only in their Program Discovery role. For example, `STAMP` is represented here for spatial topic/gene-module output, not as a domain-clustering default.
- Preserve pending code/accessibility status when code was not manually confirmed in the frozen input.

## Exclusion Rules

- Do not add methods absent from the frozen candidate set.
- Do not promote held/excluded Layer 1 candidates from local notes.
- Do not treat broad ecosystem packages, atlases, assay/workflow papers, or generic downstream packages as Program Discovery candidates here.
- Do not convert Layer 1 inclusion into core candidacy, runtime support, callable signatures, adapter boundaries, or default-method claims.

## Final Candidate Freeze

| # | Method | Frozen subtask cue |
| ---: | --- | --- |
| 1 | `CellPie` | Multicellular / program discovery |
| 2 | `DIALOGUE` | Multicellular / program discovery |
| 3 | `scITD` | Multicellular / program discovery |
| 4 | `SPICEMIX` | Multicellular / program discovery |
| 5 | `STAMP` | Spatial topic / gene-module discovery |
| 6 | `SpaTM` | Spatial topic / transcriptional program discovery |
| 7 | `FISHFactor` | Subcellular spatial factor discovery |
| 8 | `SpatialCorr` | Spatial gene-set co-program discovery |
| 9 | `SpaceX` | Spatial co-expression network discovery |
| 10 | `SpaGRN` | Spatial regulatory program discovery |
| 11 | `SPACE` | Tissue module discovery |
| 12 | `spMOCA` | Spatial co-expression program discovery |
| 13 | `LSGI` | Spatial gradient / interpretable program discovery |

## Branch Organization

The branch organization used in this package is topic-local:

- Multicellular/cohort programs: `CellPie`, `DIALOGUE`, `scITD`, `SPICEMIX`
- Spatial topic/factor programs: `STAMP`, `SpaTM`, `FISHFactor`, `LSGI`
- Gene-set/co-expression/network programs: `SpatialCorr`, `SpaceX`, `spMOCA`
- Regulatory programs: `SpaGRN`
- Interaction-aware tissue modules: `SPACE`

These branches are selection aids only. They do not rank all methods globally and do not define Layer 3 surfaces.
