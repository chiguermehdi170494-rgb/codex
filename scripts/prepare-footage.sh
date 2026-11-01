#!/usr/bin/env bash
set -euo pipefail
# Run in Codex's Linux cloud environment, not Windows.
# Usage: bash scripts/prepare-footage.sh input.mp4 public/media/coach-clean.mp4
SOURCE="${1:-}"
OUTPUT="${2:-public/media/coach-clean.mp4}"
if [[ -z "$SOURCE" || ! -f "$SOURCE" ]]; then
  echo "Usage: bash scripts/prepare-footage.sh input.mp4 [output.mp4]"
  exit 1
fi
mkdir -p "$(dirname "$OUTPUT")"
# Remove lengthy silences by detecting intervals first; do not blindly cut speech.
ffmpeg -hide_banner -i "$SOURCE" -af silencedetect=noise=-35dB:d=0.55 -f null - 2>&1 | grep silence_ || true
echo "Review timestamps above before cutting. Normalizing audio into $OUTPUT"
ffmpeg -y -i "$SOURCE" -af "loudnorm=I=-16:TP=-1.5:LRA=11" -c:v libx264 -preset fast -crf 20 -c:a aac -b:a 192k "$OUTPUT"
