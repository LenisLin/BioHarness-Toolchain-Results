# Artifact Correction Review Decision Tree

This decision tree is branch-local. It routes by artifact mechanism, data object, and platform scope; it does not provide a universal ranking across Artifact Correction methods.

## 1. Identify the Artifact Mechanism

- Consider SpotClean when the suspected artifact is spot swapping or local contamination in spot-level spatial transcriptomics data.
- Consider Non-parametric Vignetting Correction when the suspected artifact is vignetting or position-dependent intensity attenuation.
- Consider cellAdmix when the suspected artifact is molecular admixture across cells or compartments after cell/molecule assignment.
- Consider SPLIT when the platform is Xenium and the suspected artifact is signal contamination or transcript spillover.

## 2. Check Data-Object Compatibility

- Spot-level count matrix with spatial coordinates: SpotClean branch.
- Image or sparse spatial signal with an intensity-field artifact: Non-parametric Vignetting Correction branch.
- Cell-level or molecule-assigned expression data: cellAdmix branch.
- Xenium transcript calls or expression object with spatial molecule context: SPLIT branch.

Do not force methods across incompatible branches. For example, cellAdmix correction is not evidence that segmentation is solved, and SPLIT should not be treated as generic denoising or generic QC outside its Xenium-specific signal-contamination setting.

## 3. Preserve Biological Context Review

Technical artifact signals may co-occur with real spatial biology. Review correction targets against platform metadata, tissue morphology, known anatomical gradients, and sample handling information before interpreting corrected output as biological signal.

## 4. Layer Boundary Reminder

Code/access links are trace metadata only. This Layer 2 package does not assert BioHarness execution support, callable interfaces, adapters, or environment profiles.
