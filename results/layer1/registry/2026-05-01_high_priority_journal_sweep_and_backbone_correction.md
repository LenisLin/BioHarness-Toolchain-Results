# High-Priority Journal Sweep And Backbone Correction

Date: 2026-05-01

Working copy updated: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_layer1_spatial_method_registry_preprocessing_split_working.csv`

## Scope

This pass responds to two corrections:

1. Generic ecosystem packages such as Scanpy, scater, scran, Squidpy, and sctransform should not be counted as concrete Data Quality Control or Normalization / Feature Selection methods.
2. The Layer 1 registry should better cover 2024-2025 spatial transcriptomics methods from high-priority journals: Nature Genetics, Nature Methods, Nature Biotechnology, Science Advances, Cell Genomics, Cell Systems, Genome Biology, and Nucleic Acids Research.

## Backbone Correction

Removed from concrete analysis-problem rows and moved to the backbone ledger:

| Package | Previous concrete placement |
|---|---|
| Scanpy | Data Quality Control; Normalization / Feature Selection |
| scater | Data Quality Control |
| scran | Normalization / Feature Selection |
| Squidpy | Data Quality Control |
| sctransform | Normalization / Feature Selection |

Backbone ledger: `/mnt/NAS_21T/ProjectData/BioHarness/results/layer1/registry/2026-05-01_backbone_package_ledger.md`

## Added Method Rows

The journal sweep added `57` method rows and updated metadata for `GHIST`, `DeST-OT`, and `SMART`.

The included rows were restricted to named, reusable computational methods that map to a BioHarness analysis problem. Pure biological atlas/application papers, reviews, databases, and broad workflow/backbone packages were not inserted as concrete analysis-problem rows.

## Added Row Table

| Analysis Problem | Method | Year | Venue | PMID | DOI |
|---|---|---:|---|---:|---|
| Cell Type Inference | DeepScence | 2025 | Cell Genomics | 41061702 | 10.1016/j.xgen.2025.101035 |
| Cell Type Inference | OmicsTweezer | 2025 | Cell Genomics | 40675159 | 10.1016/j.xgen.2025.100950 |
| Cell Type Inference | STALocator | 2025 | Cell Systems | 39904340 | 10.1016/j.cels.2025.101195 |
| Cell Type Inference | SMART | 2024 | Genome Biology | 39623485 | 10.1186/s13059-024-03441-1 |
| Cell Type Inference | STAMapper | 2025 | Genome Biology | 41057862 | 10.1186/s13059-025-03773-6 |
| Cell Type Inference | STHD | 2025 | Genome Biology | 40682076 | 10.1186/s13059-025-03608-4 |
| Cell Type Inference | PANDA | 2024 | Nucleic Acids Research | 39404057 | 10.1093/nar/gkae876 |
| Cell Type Inference | DECLUST | 2025 | Nucleic Acids Research | 40705925 | 10.1093/nar/gkaf714 |
| Cell Type Inference | STged | 2025 | Nucleic Acids Research | 39970279 | 10.1093/nar/gkaf087 |
| Cell Type Inference | gwSPADE | 2025 | Nucleic Acids Research | 41002029 | 10.1093/nar/gkaf966 |
| Cell-Cell Communication | Scriabin | 2024 | Nature Biotechnology | 37169965 | 10.1038/s41587-023-01782-z |
| Cell-Cell Communication | CausalCCC | 2025 | Nucleic Acids Research | 40366019 | 10.1093/nar/gkaf404 |
| Comparative Analysis | SpaLinker | 2025 | Cell Genomics | 40480216 | 10.1016/j.xgen.2025.100893 |
| Comparative Analysis | SPaSE | 2025 | Cell Systems | 40480226 | 10.1016/j.cels.2025.101301 |
| Comparative Analysis | TissueMosaic | 2025 | Cell Systems | 40925368 | 10.1016/j.cels.2025.101394 |
| Comparative Analysis | SpatialSPM | 2024 | Nucleic Acids Research | 38676948 | 10.1093/nar/gkae293 |
| Domain / Clustering | BINARY | 2024 | Cell Genomics | 38781966 | 10.1016/j.xgen.2024.100565 |
| Domain / Clustering | GraphPCA | 2024 | Genome Biology | 39511664 | 10.1186/s13059-024-03429-x |
| Domain / Clustering | MNMST | 2024 | Genome Biology | 38783355 | 10.1186/s13059-024-03272-0 |
| Domain / Clustering | SpaDo | 2024 | Genome Biology | 38504325 | 10.1186/s13059-024-03213-x |
| Domain / Clustering | iIMPACT | 2024 | Genome Biology | 38844966 | 10.1186/s13059-024-03289-5 |
| Domain / Clustering | SpatialLeiden | 2025 | Genome Biology | 39920839 | 10.1186/s13059-025-03489-7 |
| Domain / Clustering | stDyer | 2025 | Genome Biology | 39980033 | 10.1186/s13059-025-03503-y |
| Domain / Clustering | IRIS | 2024 | Nature Methods | 38844627 | 10.1038/s41592-024-02284-9 |
| Domain / Clustering | SpatialGlue | 2024 | Nature Methods | 38907114 | 10.1038/s41592-024-02316-4 |
| Domain / Clustering | Novae | 2025 | Nature Methods | 41372623 | 10.1038/s41592-025-02899-6 |
| Graph / Neighborhood | SPARROW | 2025 | Cell Systems | 40112778 | 10.1016/j.cels.2025.101235 |
| Graph / Neighborhood | scHolography | 2024 | Genome Biology | 38915088 | 10.1186/s13059-024-03299-3 |
| Graph / Neighborhood | SIGEL | 2025 | Genome Biology | 40983914 | 10.1186/s13059-025-03748-7 |
| Graph / Neighborhood | SMORE | 2025 | Genome Biology | 39754206 | 10.1186/s13059-024-03467-5 |
| Graph / Neighborhood | MESA | 2025 | Nature Genetics | 40169791 | 10.1038/s41588-025-02119-z |
| Graph / Neighborhood | NicheCompass | 2025 | Nature Genetics | 40102688 | 10.1038/s41588-025-02120-6 |
| Graph / Neighborhood | CytoCommunity | 2024 | Nature Methods | 38191930 | 10.1038/s41592-023-02124-2 |
| Graph / Neighborhood | Nicheformer | 2025 | Nature Methods | 41168487 | 10.1038/s41592-025-02814-z |
| Integration | DeST-OT | 2025 | Cell Systems | 39874960 | 10.1016/j.cels.2024.12.001 |
| Integration | Crescendo | 2025 | Genome Biology | 40001084 | 10.1186/s13059-025-03479-9 |
| Integration | MaskGraphene | 2025 | Genome Biology | 41194133 | 10.1186/s13059-025-03850-w |
| Integration | STAIR | 2025 | Genome Biology | 41398698 | 10.1186/s13059-025-03895-x |
| Integration | VR-Omics | 2025 | Genome Biology | 40598307 | 10.1186/s13059-025-03630-6 |
| Integration | spCLUE | 2025 | Genome Biology | 40551235 | 10.1186/s13059-025-03636-0 |
| Integration | MISO | 2025 | Nature Methods | 39815104 | 10.1038/s41592-024-02574-2 |
| Normalization / Feature Selection | scGIST | 2024 | Genome Biology | 38408997 | 10.1186/s13059-024-03185-y |
| Program Discovery | SPACE | 2024 | Cell Systems | 38823396 | 10.1016/j.cels.2024.05.001 |
| Program Discovery | SpaGRN | 2025 | Cell Systems | 40179878 | 10.1016/j.cels.2025.101243 |
| Program Discovery | LSGI | 2025 | Genome Biology | 40781324 | 10.1186/s13059-025-03716-1 |
| Program Discovery | spMOCA | 2025 | Nucleic Acids Research | 41370198 | 10.1093/nar/gkaf1264 |
| Segmentation | Piscis | 2025 | Cell Systems | 41265398 | 10.1016/j.cels.2025.101448 |
| Segmentation | CelloType | 2025 | Nature Methods | 39578628 | 10.1038/s41592-024-02513-1 |
| Segmentation | Spotiflow | 2025 | Nature Methods | 40481364 | 10.1038/s41592-025-02662-x |
| Spatial Gene Prediction | GHIST | 2025 | Nature Methods | 40954301 | 10.1038/s41592-025-02795-z |
| Spatial Gene Prediction | OmiCLIP | 2025 | Nature Methods | 40442373 | 10.1038/s41592-025-02707-1 |
| Spatial Gene Prediction | FmH2ST | 2025 | Nucleic Acids Research | 40923764 | 10.1093/nar/gkaf865 |
| Spatial Gene Prediction | stAI | 2025 | Nucleic Acids Research | 40057378 | 10.1093/nar/gkaf158 |
| Spatial Trajectory Analysis | TopoVelo | 2025 | Nature Biotechnology | 40670711 | 10.1038/s41587-025-02688-8 |
| Spatial Trajectory Analysis | CASCAT | 2025 | Nucleic Acids Research | 40829806 | 10.1093/nar/gkaf791 |
| Spatially Variable Gene Detection | spVC | 2024 | Genome Biology | 38641849 | 10.1186/s13059-024-03245-3 |
| Spatially Variable Gene Detection | InSituCor | 2025 | Genome Biology | 40275395 | 10.1186/s13059-025-03554-1 |
| Spatially Variable Gene Detection | SPACE-SVG | 2025 | Nucleic Acids Research | 40985765 | 10.1093/nar/gkaf936 |
| Super-resolution | iSCALE | 2025 | Nature Methods | 40954300 | 10.1038/s41592-025-02770-8 |
| Super-resolution | STAGE | 2024 | Nucleic Acids Research | 38647109 | 10.1093/nar/gkae294 |

## Held Or Excluded

| Candidate class | Decision | Reason |
|---|---|---|
| Scanpy / scater / scran / Squidpy / sctransform | Backbone only | Standard ecosystem packages; not concrete topic methods. |
| SpatialData / Giotto Suite / standR / SOAPy | Backbone or hold | Broad data frameworks/workflow ecosystems; not inserted as single task-method rows in this pass. |
| SOAR / STOmicsDB / CROST / SpatialRef / SPathDB / Pairpot and similar resources | Hold | Useful resources/databases, but not analysis-problem methods. |
| Biological atlas or disease application papers | Exclude | They provide datasets or biological findings rather than reusable downstream methods. |
| 2026 records surfaced by PubMed search | Exclude from this pass | User asked for 2024-2025 journal coverage. |
| Pure platform/wet-lab protocol papers | Hold | Important to the ecosystem, but not Layer 1 downstream computational method rows. |

## Critical Notes

- Layer 1 inclusion remains broad evidence inclusion. It does not imply stable core status, Layer 2 completion, or Layer 3/4 execution readiness.
- `Accessibility=Pending` is used whenever code/package availability was not manually verified in this pass.
- Some methods are multi-task. The row placement follows the primary task contribution inferred from the paper title and abstract, not a default execution decision.
