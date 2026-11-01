# Coach Motion Studio — Remotion + Codex Cloud

Starter repository for Moroccan coach video ads. The initial demo is a **10-second, 1080×1920, 30fps** emerald-and-beige animated Arabic video with the exact title **كتعطي لكلشي… وكتنسي راسك؟**. Arabic is RTL and uses Noto Sans Arabic on GitHub Actions.

## Browser-only usage

1. Open the **Actions** tab of this repository.
2. Select **Render video**.
3. Click **Run workflow** and select `main`.
4. Open the completed run, then download the `coach-ad-mp4` artifact ZIP. Extract it for `coach-ad.mp4`.

The workflow automatically installs Node packages, Chromium requirements via Remotion, and a Noto Arabic font on GitHub's Ubuntu runner. It does not require downloading Codex or Node onto your Windows computer. GitHub Actions usage depends on account quotas. No paid third-party renderer is configured.

## Codex Cloud workflow

Open https://chatgpt.com/codex, select this repository, and instruct Codex to edit `src/video.tsx`. For agent best practices see the [official Remotion agent skills](https://github.com/remotion-dev/skills). Follow the upstream skill installation instructions in your Codex environment.

## Existing coach footage

This demo uses generated graphic elements and **does not ingest existing MP4s automatically**. Client footage should be shared only in a **private** repository or another private medium; this repository was found to be **public**.

For working with real media, place a source file in `public/media/` inside a private Codex runtime. To find silence timestamps and generate a version with normalized audio, run:

```bash
bash scripts/prepare-footage.sh input.mp4 public/media/coach-clean.mp4
```

Inspect the logged silence intervals before editing: the script does **not** automatically remove words or long pauses. For real video editing, have Codex edit the Remotion composition using `OffthreadVideo`, `Sequence`, and controlled animation/zoom. Do not publish private footage to this public repository.

## Commands (cloud runtime or an optional development computer)

```bash
npm install
npm run check
npm run studio
npm run render
```

## Status

Source files and GitHub Actions workflow committed. A successful Actions render must be verified before considering the demo production-ready. No paid API is used. This starter does not yet contain automatic transcription or silence cutting for imported videos.
