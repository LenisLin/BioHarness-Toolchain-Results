# SpatialToolDB Targeted Layer 1 Supplement

Date: 2026-05-03

Updated working copy: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

## Scope

This pass supplements sparse or relatively under-covered Layer 1 analysis problems using PMID 41611568 and the associated SpatialToolDB as a discovery source.

This is a Layer 1 registry supplement only. It does not mark Layer 2 complete and does not imply Layer 3 callable support or Layer 4 implementation readiness.

## Inclusion Rules Applied

- Include only named, reusable computational methods that map to an existing BioHarness analysis problem.
- Exclude or hold broad backbone/ecosystem packages, platforms, databases, atlases, and wet-lab technologies.
- Treat SpatialToolDB and PMID 41611568 as discovery sources, then verify candidate DOI/PMID metadata through PubMed where available.
- Use `Accessibility=Pending` when direct code/package accessibility was not manually validated during this pass.

## Added Rows

| Analysis Problem | Method | PMID | DOI | Reason |
|---|---:|---:|---|---|
| Denoising / Imputation | DIST | 36653906 | 10.1093/bib/bbad013 | Peer-reviewed spatial transcriptomics enhancement/denoising method. |
| Denoising / Imputation | GNTD | 38092776 | 10.1038/s41467-023-44017-0 | Peer-reviewed spatial transcriptome reconstruction/imputation method. |
| Denoising / Imputation | SPRITE | 38940132 | 10.1093/bioinformatics/btae253 | Peer-reviewed spatial gene-expression imputation method using gene and cell networks. |
| Denoising / Imputation | stImpute | 39369061 | 10.1038/s42003-024-06964-2 | Peer-reviewed spatial transcriptomics imputation method. |
| Denoising / Imputation | SPCS | 35380614 | 10.1093/bib/bbac116 | Peer-reviewed spatial smoothing/expression enhancement method. |
| Denoising / Imputation | ENGEP | 38129866 | 10.1186/s13059-023-03139-w | Peer-reviewed unmeasured gene-expression prediction method, retained under this supplement's imputation scope. |
| Denoising / Imputation | iSpatial | 36026447 | 10.1126/sciadv.abq0990 | Peer-reviewed genome-wide spatial expression inference method. |
| Data Quality Control | SpatialQC | 39051702 | 10.1093/bioinformatics/btae458 | Direct automated quality-control method for spatial transcriptome data. |
| Segmentation | BIDCell | 38218939 | 10.1038/s41467-023-44560-w | Peer-reviewed segmentation method for subcellular spatial transcriptomics. |
| Segmentation | VistoSeg | 38510173 | 10.1017/S2633903X23000235 | Named image-processing utility relevant to spatial transcriptomics segmentation workflows. |
| Segmentation | STCellbin | 38434932 | 10.46471/gigabyte.110 | Cell-boundary based method for high-resolution spatial transcriptomics binning/segmentation. |
| Super-resolution | STGAT | 38960406 | 10.1093/bib/bbae316 | Enhanced-resolution gene-expression prediction using graph attention networks. |
| Super-resolution | soScope | 39095360 | 10.1038/s41467-024-50837-5 | Deep generative enhanced-resolution tissue characterization across spatial omics platforms. |
| Super-resolution | ImSpiRE | 39327391 | 10.1007/s11427-023-2636-9 | Image feature-aided spatial resolution enhancement method. |

## Held Or Excluded

| Candidate | Decision | Reason |
|---|---|---|
| standR | Exclude from concrete rows | Already recorded in the backbone ledger as a GeoMx DSP end-to-end analysis package rather than a concrete analysis-problem method. |
| HemaScopeR | Hold | Hematopoietic single-cell/spatial toolkit; broader domain-specific workflow rather than a direct ST QC method row. |
| SegQC | Hold | SpatialToolDB entry lacked DOI/PMID evidence in this pass. |
| ComSeg / Proseg | Hold | Segmentation-relevant, but current evidence was preprint-style in this pass. |
| BayesTME | Hold | Strong peer-reviewed method, but boundary-heavy end-to-end TME/deconvolution/domain model rather than a narrow Denoising / Imputation row. |
| scenvi / ENVI | Hold for placement review | Peer-reviewed and relevant, but local placement needs a separate decision across Integration, Spatial Gene Prediction, and Denoising / Imputation. |
| BayesDeep / DeepFuseNMF | Hold | Super-resolution-relevant but current evidence was preprint or no-PMID in this pass. |

## Critical Notes

- PMID 41611568 and SpatialToolDB were used as discovery sources, not as standalone inclusion authority.
- Boundary-heavy methods were held unless the primary title/abstract-level claim matched a current analysis problem.
- `Accessibility=Pending` avoids converting method discovery into runtime or package support claims.
- Layer 2 should revisit boundary placements for ENGEP, iSpatial, STGAT, and soScope before method-selection closure.
