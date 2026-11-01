# Agent instructions for video editing
Use the official Remotion agent skill guidance from https://github.com/remotion-dev/skills when available; consult its current instructions before altering compositions.
- Respect Arabic RTL and preserve all supplied Arabic text exactly.
- Only animate important words when captions are requested; never fabricate a transcript.
- Avoid generic stock footage and AI-looking faces.
- Never put client footage in public GitHub repositories.
- Test with npm run check, and render a frame/video before claiming output.
- Use no paid rendering API without explicit permission.
- For silence removal, detect and review pauses before trimming, avoid clipped speech.
- Use media files only when supplied in the configured environment.
