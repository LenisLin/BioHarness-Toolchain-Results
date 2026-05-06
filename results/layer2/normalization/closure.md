# Normalization Closure

## Conclusion

Confirm with caveats after taxonomy revision.

The former combined `Normalization / Feature Selection` topic has been split. `Normalization` now contains one dedicated spatial-aware normalization candidate, `SpaNorm`, and a separate Layer 2 backbone/baseline workflow context for Scanpy, Seurat/sctransform, scran/scater, Giotto, and Squidpy.

## Layer Boundary

This package does not define execution surfaces, adapters, callable interfaces, environment profiles, or universal methods. Backbone workflow packages are context only and are not counted as positive candidates.

## Caveats

`SpaNorm` can attenuate true spatial biology if library-size effects and real tissue structure are difficult to separate. Routine workflow normalization may be appropriate, but it should be represented as baseline context rather than as a dedicated spatial-aware method-paper candidate.
