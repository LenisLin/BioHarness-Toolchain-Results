# Data Quality Control Review Decision Tree

This decision tree is branch-local. It routes by data object, processing stage, and QC target; it does not provide a universal ranking across DQC methods.

## 1. Identify the Available Data Object

- Consider stPipe when the input is raw or near-raw sequencing-based spatial transcriptomics data and the task is preprocessing plus QC.
- Consider SpotSweeper when the input is a prepared post-count spatial transcriptomics object and the main concern is local or regional spatial QC artifacts.
- Consider SpatialQC when the input is a prepared spatial transcriptome object and the desired output is automated QC reporting, filtering, or data-cleaning summaries.
- Consider ovrlpy when the input is post-localization transcript coordinates with z information and the QC question concerns vertical overlap or 3D co-localization evidence.

## 2. Check Stage Compatibility

- Upstream preprocessing/QC branch: stPipe.
- Prepared-object automated QC/reporting branch: SpatialQC.
- Prepared post-count local artifact branch: SpotSweeper.
- Post-transcript-localization 3D overlap branch: ovrlpy.

Do not move a method across these branches without recording the object mismatch. For example, ovrlpy overlap calls do not validate segmentation boundaries, and SpatialQC does not replace a focused vertical-overlap or local-spatial-artifact detector.

## 3. Apply Biological Context Review

QC flags should be reviewed against tissue morphology, known anatomical structures, platform-specific artifacts, and sample handling metadata. Apparent artifacts may overlap with real spatial biology, especially near tissue edges, necrotic regions, high-density structures, or platform-specific signal gradients.

## 4. Layer Boundary Reminder

Code/access links are trace metadata only. This Layer 2 package does not assert BioHarness execution support, callable interfaces, adapters, or environment profiles.
