# BANKSY Environment Probe Plan v0.7

This plan describes future probes. It does not execute BANKSY and does not install dependencies.

## Level 0 Metadata Review

Status: complete from static evidence.

Inputs:

- `README.md` at official pinned commit.
- `pyproject.toml` at official pinned commit.
- `LICENSE.md` at official pinned commit.
- NAS evidence index.

Checks:

- package name/version recorded;
- Python range recorded;
- dependency constraints recorded;
- optional R/rpy2 path separated from core path;
- lock/container absence recorded;
- license risk recorded.

## Level 1 Core Python Import Probe

Status: not run.

Guard:

```bash
test "${BIOHARNESS_ALLOW_ENV_PROBE:-0}" = "1"
```

Only if enabled:

```bash
python - <<'PY'
import banksy
print("BANKSY import OK")
PY
```

Expected record:

- Python version;
- package versions;
- import success/failure;
- installation source;
- wall time;
- environment identifier.

## Level 2 Minimal Fixture Smoke Run

Status: not run.

Guards:

- explicit human approval;
- fixture exists;
- Level 1 import probe passed;
- output directory is adapter-owned.

Minimum success criteria:

- accepts a minimal AnnData-compatible object with a semantic coordinate source;
- emits one non-null label per observation;
- writes only under the approved output directory;
- records provenance;
- produces a validation report.

## Optional R/rpy2 Path

Status: excluded from MVP until separately authorized and verified.

Do not probe the optional R/rpy2 path during the core Python MVP probe unless separately authorized.
