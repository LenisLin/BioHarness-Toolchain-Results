# Phenotype- / Cohort-linked Spatial Feature and Niche Analysis Review And Decision Tree

## Status

Layer served: `Layer 2`

Purpose: `when to choose`, not `how to run`.

## Logic Review

This package assumes Layer 1 has already assigned the Analysis Problem. The decision tree therefore selects among methods within the phenotype/cohort-linked topic; it is not an authority for global task routing.

The common center of gravity is linking spatial structures to clinical, cohort, condition, survival, therapy-response, or bulk phenotype signals. The expected outputs are association, prioritization, representation, niche, motif, or tissue cellular neighborhood/community features. They are not causal proof, direct gene-level contrast tests, or execution-ready workflows.

## Evidence Spot-checks

| Tool | Direct support | Layer 2 caution |
| --- | --- | --- |
| `TissueMosaic` | PubMed/DOI method identity and public code trace. | Learned tissue motifs can capture acquisition, composition, or preprocessing structure; representation-mediated results are not direct DE. |
| `SpaLinker` | PubMed/DOI method identity for bulk-spatial phenotype linking. | Bulk-to-spatial transfer can confound phenotype features through cohort, tumor purity, and cell composition. |
| `TiRank` | PMID 41689080, DOI 10.1186/s13073-026-01604-2, public GitHub and docs. | Supervised phenotype transfer; outputs are association/prioritization objects. |
| `stClinic` | PMID 40523901, DOI 10.1038/s41467-025-60575-x, public GitHub and Zenodo trace. | Hybrid integration-plus-phenotype method; learned niches can reflect cohort, batch, platform, or label leakage. |
| `CytoCommunity` | PMID 38191930, DOI 10.1038/s41592-023-02124-2; code trace recorded in Graph / Neighborhood package. | Controlled duplicate only for cohort/phenotype-linked TCN/community features; cell phenotyping, graph construction, and cohort labels can drive associations. |

## Decision Tree

### Step 0. Confirm Layer 1 assignment

If this package was opened for a task without phenotype, cohort, condition, clinical outcome, survival, therapy-response, or bulk-linked signal, return to Layer 1 Analysis Problem assignment. Do not use this Layer 2 tree to make a global AP decision.

If the requested output is a spatial pathology severity score, return to Layer 1 Analysis Problem review. `SPaSE` is not an active positive row in this package after the 2026-05-05 boundary decision.

### Step 1. Is the target bulk-linked phenotype association?

If spatial TME features should be linked to clinical phenotypes through a larger bulk cohort:

- Consider `SpaLinker`.
- Carry bulk-to-spatial transfer, tumor-purity, cell-composition, and phenotype-label confounding caveats.

If bulk clinical or phenotype data should prioritize spots/cells/niches in scRNA-seq or ST inference data:

- Consider `TiRank`.
- Carry phenotype-label leakage, cross-modality transfer, and association-not-causality caveats.

### Step 2. Is the target cohort-scale motif or representation association?

If many spatial samples are available and the deliverable is tissue motifs or cohort-associated microenvironment representations:

- Consider `TissueMosaic`.
- Carry representation-opacity, scale, acquisition-confounding, and not-direct-DE caveats.

### Step 3. Is the target multi-slice phenotype-linked niche discovery?

If multi-slice or multi-omics spatial data should be integrated to identify clinically or phenotypically relevant niches:

- Consider `stClinic`.
- Carry hybrid integration/niche boundary, supervised phenotype weighting, cohort confounding, and representation-opacity caveats.

### Step 4. Is the target cohort-linked tissue cellular neighborhood/community feature discovery?

If segmented or otherwise cell-phenotype-resolved spatial maps and cohort/condition labels are available, and the requested deliverable is tissue cellular neighborhoods or community features associated with those labels:

- Consider `CytoCommunity`.
- Carry controlled-duplicate, graph-construction, cell-phenotyping, sampling-density, label-leakage, and association-not-causality caveats.

## Coverage Ledger

| Tool | Covered branch | Main caveat |
| --- | --- | --- |
| `TissueMosaic` | cohort motif / representation association | representation opacity and cohort/acquisition confounding |
| `SpaLinker` | bulk-linked phenotype spatial feature association | bulk-to-spatial transfer and phenotype confounding |
| `TiRank` | clinical phenotype-linked niche prioritization | phenotype-label leakage and cross-modality transfer |
| `stClinic` | multi-slice phenotype-linked niche discovery | supervised phenotype weighting and integration confounding |
| `CytoCommunity` | cohort-linked TCN/community feature discovery | graph/cell-phenotype construction and cohort-label confounding |

## Review Decision

The revised package is suitable as a Layer 2 working/evidence package for phenotype/cohort-linked spatial feature and niche method selection. It should not be used as a substitute for direct spatial contrast testing, within-sample SVG detection, pure domain/neighborhood discovery, pathology-score estimation, or causal clinical inference.
