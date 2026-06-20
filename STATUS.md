# Status — StorySurface

**Last updated:** 2026-06-21
**Maturity:** 🟠 `status-prototype` (single-page demo)

## What's done

- Single-page Next.js 15 interactive-story UI
- Mock story generator (`lib/story-generator.ts`) — returns a 5-scene bundle (opening → memory/threat → crossroads → landing) with choice graph
- Prompt form + scene viewer
- Three tones: wonder / tension / resolve
- ESLint configured, 0 errors
- 8 Vitest tests for `createMockStory`:
  - Trimmed prompt used as premise
  - Default fallback for empty/whitespace prompt
  - 5-scene structure with stable IDs
  - Prompt embedded verbatim in opening scene
  - **Choice graph integrity** — every `nextSceneId` resolves to a real scene (regression guard against broken graphs)
  - Scene IDs unique
  - No terminal dead-ends (every scene has ≥1 choice)
  - Only documented tone values used
- Build, lint, typecheck, tests all green

## What's left

This is a **prototype, not a product.** Real product would need:

- **Regenerate button is currently a no-op** — `createMockStory` is deterministic on prompt only, so clicking regenerate produces the same story. Threading the `seed` state through to vary the output is bounded work but was left as a flagged gap, since "vary the output" is itself a feature decision.
- **Real AI story generation** — currently returns a hardcoded 5-scene template with the prompt inserted into the opening
- **User choices that branch the path** — currently the choices exist in the data but the UI doesn't traverse the graph
- **Persistence** — no story history
- **Image / scene art generation**
- **Product spec** — is this a writer's tool? A reader's tool? An interactive-fiction engine? A demo?

## Quality gates

| Gate | Status |
|---|---|
| Build | ✅ |
| Lint | ✅ 0 errors (1 honest warning about the unused `seed` dep) |
| Typecheck | ✅ |
| Tests | ✅ 8 / 1 suite |

## Deployment

Not yet deployed. Zero-config Vercel possible.
