# Graph / Neighborhood Targeted Freeze Update Record

Date: 2026-05-03

Scope: targeted Layer 1 supplement for the Graph / Neighborhood Layer 2 freeze update. This record adds four rows to the working Layer 1 registry used by the Graph / Neighborhood package. It is not a full Layer 1 redo, not a formal Layer 2 rendering, and not a Layer 3/4 execution-surface decision.

## Added Rows

| Method | Layer 1 placement | PMID | DOI | Primary code trace | Layer 2 boundary note |
| --- | --- | --- | --- | --- | --- |
| `TrimNN` | Graph / Neighborhood - spatial motif discovery | 40830137 | `10.1038/s41467-025-63141-7` | `https://github.com/yuyang-0825/TrimNN` | Include only for cellular community motifs and multicellular topology; CCC/pathway interpretation is downstream only. |
| `scNiche` | Graph / Neighborhood - neighborhood / niche representation learning | 39956823 | `10.1038/s41467-025-57029-9` | `https://github.com/ZJUFanLab/scNiche` | Include for single-cell-resolution cell niche identification and characterization, not hard tissue domain labeling. |
| `CellNiche` | Graph / Neighborhood - neighborhood / niche representation learning | 42020427 | `10.1038/s41467-026-71759-4` | `https://github.com/Super-LzzZ/CellNiche` | Include for atlas-scale cellular microenvironment representation, not as a default clustering method. |
| `DECIPHER` | Graph / Neighborhood - spatial representation learning | 40866331 | `10.1038/s41467-025-63140-8` | `https://github.com/gao-lab/DECIPHER` | Include for spatial-context and disentangled cellular embeddings; hard domain clustering or CCC claims route out. |

## Watchlist And Explicit Reopen Exclusions

| Method | Decision | Reason |
| --- | --- | --- |
| `stClinic` | Watchlist | Center of gravity is clinical multi-slice / multi-omics integration rather than Graph / Neighborhood selection. |
| `MNMST` | Excluded from this reopen | Primary endpoint is spatial domain identification, so route to Domain / Clustering / legacy `spatial_domain_identification`. |
| `STCase` | Excluded from this reopen | Primary endpoint is cell-cell communication, so route to Cell-Cell Communication. |

## Boundary Contract

This supplement supports an 18-method Graph / Neighborhood freeze only when the primary endpoint is a neighborhood, niche, microenvironment state, cellular motif, spatial factor, soft multicellular signature, reconstructed neighborhood, or spatial-context representation. Hard domain/region labels and spatial clustering route to Domain / Clustering. Ligand-receptor edges, sender-receiver pairs, communication scores, neighbor-preference effects, pathway CCC, or causal CCC interpretation route to Cell-Cell Communication.

Code links are trace metadata only. They do not imply BioHarness runtime support, adapters, callable signatures, environment capsules, or default methods.
