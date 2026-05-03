# Cell Type Inference Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

This document records bounded PubMed/PMC screening, evidence caveats, branch-local decision logic, and coverage for the frozen `Cell Type Inference` candidate set. It does not define execution surfaces, wrappers, adapter boundaries, callable signatures, environments, default methods, or runtime support.

## Reading Rules

- Keep the 35-method freeze unchanged.
- Treat Layer 1 `Subtask` values as branch cues only.
- Use benchmark/review evidence for branch-local interpretation and caveats only.
- Do not convert benchmark inclusion into a universal ranking.
- Treat `Closest Alternatives`, resource burden, scale sensitivity, and most selection-risk caveats as Layer 2 synthesized judgment unless the row notes direct support.
- Prefer `unclear` when source evidence does not directly support resource, code-link, scale, or dependency claims.

## Benchmark / Review Screening

### Candidate identity verification

PubMed E-utilities verified 24 known frozen PMIDs/DOIs and recovered 11 additional PMID/DOI identities by bounded frozen-title/name searches for the retained candidate set.

The direct benchmark seed identified in screening was:

| Evidence item | PMID | DOI | Use in this package |
| --- | --- | --- | --- |
| A comprehensive benchmarking with practical guidelines for cellular deconvolution of spatial transcriptomics | 36941264 | 10.1038/s41467-023-37168-7 | Supports branch-local caution for benchmark-covered classic deconvolution methods; not a universal ranking. |
| Cell-type deconvolution methods for spatial transcriptomics | 40369312 | 10.1038/s41576-025-00845-y | Supports ecosystem coverage and review-only caveats for newer or review-seeded rows. |

Additional recent review/benchmark records were screened, including broad 2024-2026 reviews and a 2026 preprint-indexed benchmarking record. They did not provide a stable, peer-reviewed, all-35-method ranking suitable for global ordering.

Review conclusion: use conditional logic review derived from the method table. Benchmark coverage can strengthen local confidence for methods that were included in independent benchmark comparisons, but it cannot override task fit, reference availability, platform resolution, or image/reference quality.

## Evidence Spot-checks

| Branch | Direct evidence | Layer 2 synthesis / caution |
| --- | --- | --- |
| Reference-assisted spot deconvolution | PubMed verifies method papers for `CARD`, `cell2location`, `RCTD`, `stereoscope`, `SpatialDWLS`, `SPOTlight`, `STRIDE`, and related rows. | Reference mismatch, label granularity, rare-cell sensitivity, and scale burden remain branch-local scientific caveats. |
| Marker-gene-assisted methods | PubMed verifies `Celloscope` and `SMART`; marker/topic roles are direct. | Marker selection can bias detection toward expected populations. |
| Reference-free methods | PubMed verifies `STdeconvolve`, `CellsFromSpace`, `gwSPADE`, and `Starfysh`. | Components require independent annotation and may not map one-to-one to canonical cell types. |
| Spatial/domain-aware models | PubMed verifies `CARD`, `SONAR`, `SPADE`, `SpatialPrompt`, `DSTG`, `STdGCN`, and others. | Spatial smoothing, domain coupling, or graph construction can introduce circularity. |
| Image/histology-assisted inference | PubMed verifies `Starfysh` and `STIE`; histology or nuclear morphology is direct in those rows. | Image quality, segmentation/morphology assumptions, and tissue context can bias inferred cell identities. |
| High-resolution placement/reconstruction | PubMed verifies `CytoSPACE`, `Tangram`, `Redeconve`, `SpatialScope`, and `STALocator`. | Outputs can appear more precise than platform resolution or reference match supports. |
| Boundary/specialized rows | PubMed verifies `DeepScence`, `PANDA`, `STged`, `STHD`, and `STAMapper`. | Use only when the specialized state, annotation, or gene-expression deconvolution target matches the task. |

## Decision Tree

### Step 0. Are you actually in Cell Type Inference?

If the task is segmentation, transcript assignment, denoising, normalization, spatial domains, communication, or perturbation response:

- Do not start with this topic.
- Use the corresponding analysis problem first.

If the task asks for cell-type composition, abundance, spatial localization, cell-type annotation, cell-state labels, or deconvolution of cell-type signal:

- Continue.

### Step 1. Is a matched scRNA-seq reference intended?

If yes and the desired output is spot-level proportions or abundances:

- Prefer / consider benchmark-covered classic routes first: `RCTD`, `CARD`, `cell2location`, `stereoscope`.
- Consider lighter regression/topic routes when transparency or CPU-first review matters: `SpatialDWLS`, `SPOTlight`, `NLSDeconv`, `STRIDE`, `AdRoit`.
- Keep reference mismatch, label granularity, and rare-cell sensitivity visible.

If yes and the desired output is cell placement or high-resolution reconstruction:

- Prefer / consider `CytoSPACE`, `Tangram`, `Redeconve`, `SpatialScope`, or `STALocator`.
- Use this branch only when placement/reconstruction is the actual question.
- Keep platform-resolution and overprecision caveats visible.

If no matched scRNA reference is intended:

- Continue to Step 2 and check whether image or nuclear morphology should drive branch selection before marker or reference-free routes.

### Step 2. Is histology, image, or nuclear morphology central?

After the scRNA-seq reference decision, treat image availability and image quality as the next major selection gate.

If histology-aware reference-free deconvolution is intended:

- Prefer / consider `Starfysh`.
- Use only when histology quality and tissue context are relevant to the inference question.
- Keep morphology-derived and tissue-context bias visible.

If nuclear morphology alignment and single-cell-level inference are intended:

- Prefer / consider `STIE`.
- Use only when nuclear morphology is available and the single-cell-level inference objective is explicit.
- Keep segmentation, morphology alignment, and platform-specific caveats visible.

If images are absent, low quality, or not part of the scientific question:

- Do not choose an image-dependent route first.
- Continue to Step 3.

### Step 3. Are trusted marker genes the intended cell-type cue?

If yes:

- Prefer / consider `Celloscope` or `SMART`.
- Consider `SPOTlight` only when seeded reference/signature regression is acceptable.
- Keep marker-selection bias visible.

If no:

- Continue to Step 4.

### Step 4. Is reference-free deconvolution or annotation the main route?

If reference-free components are acceptable:

- Prefer / consider `STdeconvolve`, `CellsFromSpace`, or `gwSPADE`.
- Use `STdeconvolve` when latent topics are acceptable; use `CellsFromSpace` or `gwSPADE` when the newer reference-free spatial framing is the desired cue.
- Keep component-to-cell-type annotation uncertainty visible.

If reference-free analysis is not the route:

- Continue to Step 5.

### Step 5. Should spatial neighborhoods, domains, or graphs drive the deconvolution?

If spatial smoothing/probabilistic spatial weighting is desired:

- Prefer / consider `CARD` or `SONAR`.

If domain-specific estimation is central:

- Prefer / consider `SPADE` or `SpatialPrompt`.
- Keep domain circularity caveats visible.

If graph neural deconvolution is scientifically justified:

- Prefer / consider `DSTG` or `STdGCN`.
- Keep graph-construction and deep-model caveats visible.

### Step 6. Is the row a specialized or boundary inference target?

If the target is senescent-cell state detection:

- Prefer / consider `DeepScence`.

If the target is single-cell spatial annotation rather than spot deconvolution:

- Prefer / consider `STAMapper` or `STHD`.

If the target is joint cell-type and gene-expression decoding:

- Prefer / consider `PANDA` or `STged`.

### Step 7. Resource and evidence gate

If the analysis must stay CPU-first:

- Read CPU-labeled rows first within the matching scientific branch, such as `RCTD`, `CARD`, `SpatialDWLS`, `SPOTlight`, `STdeconvolve`, `SONAR`, `SPADE`, `CellsFromSpace`, `gwSPADE`, `DECLUST`, `PANDA`, or `STged`.
- Do not interpret CPU labels as BioHarness runtime support.

If optional GPU/deep-model work is acceptable:

- Expand branch-local reading to `cell2location`, `DestVI`, `DSTG`, `Redeconve`, `SMART`, `SpatialPrompt`, `SpatialScope`, `Starfysh`, `STdGCN`, `stereoscope`, `stVAE`, `Tangram`, `DeepScence`, and `OmicsTweezer`.
- Treat optional GPU and memory labels as audit prompts, not execution claims.

If benchmark support is required before starting:

- Begin with methods covered by independent benchmark screening and matching the task branch.
- Do not use benchmark coverage to rank across incompatible output targets.

## Coverage Ledger

| Tool | Benchmark/review coverage | Main caveat carried forward |
| --- | --- | --- |
| `AdRoit` | review-only coverage | General compositional robustness does not by itself validate spatial neighborhood behavior. |
| `CARD` | independent benchmark includes | Spatial smoothing can blur sharp boundaries or rare populations if the reference or neighborhood assumptions are poor. |
| `cell2location` | independent benchmark includes | Reference mismatch and fine-grained label inflation can dominate biological interpretation. |
| `Celloscope` | review-only coverage | Marker-gene bias can hide states or cell types not represented by the selected markers. |
| `CellsFromSpace` | review-only coverage | Reference-free components can be biologically plausible but still hard to map to precise cell-type labels. |
| `CytoSPACE` | method-paper/local benchmark only | Placement outputs can look more precise than the evidence supports when spots contain unresolved mixtures. |
| `DestVI` | independent benchmark includes | State-continuum outputs depend strongly on reference quality and can be overinterpreted as discrete cell types. |
| `DSTG` | method-paper/local benchmark only | Deep graph models may entangle cell-type inference with graph construction choices. |
| `NLSDeconv` | review-only coverage | Regression convenience can underrepresent spatial structure and reference uncertainty. |
| `RCTD` | independent benchmark includes | Doublet/multiplet assumptions and reference labels can be limiting in highly mixed tissue. |
| `Redeconve` | review-only coverage | Single-cell-resolution outputs need validation against platform resolution and cell-density assumptions. |
| `SMART` | method-paper/local benchmark only | Marker-guided topics can inherit marker-selection bias. |
| `SONAR` | review-only coverage | Spatial weighting may propagate local reference errors across neighboring spots. |
| `SPADE` | review-only coverage | Domain-aware estimates can circularly reinforce imperfect domain partitions. |
| `SpatialDWLS` | method-paper/local benchmark only | Least-squares estimates depend heavily on reference signatures and may not represent rare mixtures well. |
| `SpatialPrompt` | review-only coverage | Coupling deconvolution to domains can make downstream domain validation circular. |
| `SpatialScope` | method-paper/local benchmark only | Reconstructed transcriptomes can amplify reference priors beyond directly observed spatial evidence. |
| `SPOTlight` | method-paper/local benchmark only | NMF seed quality can dominate inferred proportions. |
| `Starfysh` | method-paper/local benchmark only | Histology-linked latent factors can capture morphology correlated with non-cell-type effects. |
| `STdeconvolve` | independent benchmark includes | Topics are not guaranteed to correspond one-to-one with canonical cell types. |
| `STdGCN` | method-paper/local benchmark only | Graph construction and smoothing choices can change inferred cell-type patterns. |
| `stereoscope` | independent benchmark includes | Older method assumptions and maintenance state require later engineering review before any support claim. |
| `STIE` | review-only coverage | Morphology alignment can introduce image-derived bias or platform-specific assumptions. |
| `STRIDE` | method-paper/local benchmark only | Integration quality depends on reference comparability and topic interpretability. |
| `stVAE` | review-only coverage | Latent VAE structure can obscure why a cell type was assigned. |
| `Tangram` | method-paper/local benchmark only | Alignment can overstate spatial precision if reference cells are not representative of the tissue section. |
| `DeepScence` | method-paper/local benchmark only | Specialized state detectors should not be treated as broad deconvolution tools. |
| `OmicsTweezer` | method-paper/local benchmark only | Cross-omics flexibility does not guarantee spatial benchmark performance. |
| `STAMapper` | method-paper/local benchmark only | Single-cell spatial annotation assumptions may not transfer to spot-based platforms. |
| `STHD` | method-paper/local benchmark only | High-definition labels need platform-resolution checks before biological interpretation. |
| `STALocator` | method-paper/local benchmark only | Localization accuracy depends on the spatial reference and may not equal direct cell detection. |
| `gwSPADE` | method-paper/local benchmark only | Reference-free components require independent annotation and can split continuous states arbitrarily. |
| `DECLUST` | method-paper/local benchmark only | Cluster-first assumptions can circularly shape inferred cell-type composition. |
| `PANDA` | method-paper/local benchmark only | Joint cell-type/expression outputs need safeguards against circular validation. |
| `STged` | method-paper/local benchmark only | Gene-expression deconvolution can be mistaken for direct cell-type quantification if outputs are not separated. |

## Review Decision

The current evidence supports a conditional Layer 2 decision tree, not a global ranking or default method. The package is suitable for method-selection discussion and representative Layer 3/4 audit triage after closure. Runtime and adapter decisions remain outside this Layer 2 package.
