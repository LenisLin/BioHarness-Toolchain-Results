# Artifact Correction Topic Scope

## Layer 2 Topic Unit

Analysis Problem: `Artifact Correction`

This package treats `Artifact Correction` as one Layer 2 completion unit. The
Layer 1 `Subtask` values are used only as internal branch cues:

- spot swapping / contamination correction
- imaging artifact / vignetting correction
- segmentation-error / molecular admixture correction

They do not create separate Layer 2 packages.

## Bounded Retrieval Record

Retrieval date: `2026-05-01`

Primary local inputs:

- `/tmp/bioharness_layer2_subagents/input/artifact_correction.json`
- `/home/lenislin/Experiment/projects/BioHarness-Toolchain-ST/README.md`
- `/home/lenislin/Experiment/projects/BioHarness-Toolchain-ST/docs/10_scope.md`
- `/home/lenislin/Experiment/projects/BioHarness-Toolchain-ST/docs/15_layer1_method_registry_and_substrate_transition.md`
- `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/TOPIC_COMPLETION_STANDARD.md`
- `/mnt/NAS_21T/ProjectData/BioHarness/results/formal/layer2/method_selection_standard.md`
- new-style example: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer2/denoising_imputation/`

Bounded PubMed / code-link retrieval:

- PubMed ESummary for PMIDs `35624112`, `35274110`, and `41559218`.
- PubMed EFetch abstracts for PMIDs `35624112`, `35274110`, and `41559218`.
- Code-link checks for:
  - `https://github.com/zijianni/SpotClean`
  - `https://github.com/BoveyRao/Non-parametric-vc-for-sparse-st`
  - `https://github.com/kharchenkolab/cellAdmix`

Benchmark/review screening queries:

```text
("spatial transcriptomics"[Title/Abstract] OR
 "spatially resolved transcriptomics"[Title/Abstract])
AND
(artifact[Title/Abstract] OR artefact[Title/Abstract] OR
 contamination[Title/Abstract] OR "spot swapping"[Title/Abstract] OR
 vignetting[Title/Abstract] OR "segmentation error"[Title/Abstract])
AND
(benchmark[Title/Abstract] OR review[Publication Type] OR
 comparison[Title/Abstract])
```

Result: PubMed returned six broad/contextual records, including platform or
signal-contamination work, but no independent benchmark comparing the three
frozen artifact-correction methods.

Candidate-specific benchmark/review query:

```text
(SpotClean[Title/Abstract] OR cellAdmix[Title/Abstract] OR
 vignetting[Title/Abstract])
AND "spatial transcriptomics"[Title/Abstract]
AND
(benchmark[Title/Abstract] OR comparison[Title/Abstract] OR
 review[Publication Type])
```

Result: PubMed returned no records. The PubMed translation did not recognize
`cellAdmix` as a searchable phrase in that exact query, so the screen is treated
as bounded but not exhaustive for unpublished or non-PubMed comparisons.

## Inclusion Rules

- Candidate must be present in the frozen input JSON.
- Candidate must address artifact correction rather than ordinary
  normalization, denoising/imputation, segmentation, or downstream clustering.
- Candidate must have traceable method-paper evidence through PMID/DOI or a
  documented verification gap.
- Candidate rows may use registry `Subtask` values as branch cues but remain
  part of one Analysis Problem.

## Exclusion Rules

- Do not add methods outside the frozen candidate input.
- Exclude general preprocessing, denoising, image registration, segmentation,
  domain identification, and cell-cell communication methods unless they are one
  of the frozen Artifact Correction candidates.
- Exclude execution details: commands, callable signatures, package entrypoints,
  adapter boundaries, environment capsules, and runtime-support claims.
- Do not create formal `formal/layer2` output from this worker package.

## Final Candidate Freeze

| Candidate | Registry subtask cue | Retained rationale |
| --- | --- | --- |
| `SpotClean` | Spot swapping / contamination correction | Direct method for spot-swapping contamination in spot-barcoded ST counts. |
| `Non-parametric Vignetting Correction` | Imaging artifact / vignetting correction | Direct method for optical vignetting and illumination-field correction in sparse ST images. |
| `cellAdmix` | Segmentation-error / molecular admixture correction | Direct method for molecular admixture arising from segmentation errors in imaging-based ST. |

The candidate set remains exactly the three-method freeze from the input JSON.
