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

Not yet deployed. Self-hosted on your own domain when ready.

## File-by-file checklist

### App shell
- [x] `app/layout.tsx` — root layout
- [x] `app/page.tsx` — story UI (premise + scene viewer)
- [x] `app/globals.css` — base styles

### Components
- [x] `components/PromptForm.tsx` — prompt input + regenerate button (button currently no-op)
- [x] `components/SceneViewer.tsx` — scene presentation

### Lib
- [x] `lib/story-generator.ts` — `createMockStory()` returns 5-scene bundle with choice graph

### Tests
- [x] `lib/story-generator.test.ts` — 8 tests (prompt embedding, default fallback, scene IDs, **choice-graph integrity guard**, tone enum)

### Quality + scaffolding
- [x] ESLint configured (0 errors, 1 honest warning about no-op regenerate)
- [x] `typecheck` + `test` scripts
- [x] Build + lint + typecheck green

### Not done (product gaps — need spec)
- [ ] Make regenerate button actually regenerate (thread `seed` state through `createMockStory`)
- [ ] Real AI story generation (currently hardcoded 5-scene template)
- [ ] UI traversal of the choice graph (choices exist in data, UI doesn't follow them)
- [ ] Persistence / story history
- [ ] Image / scene art generation
- [ ] Product spec answering: writer's tool? Reader's tool? Interactive-fiction engine? Demo?

## Categorized work remaining

| Item | Effort | Bucket | Blocker | Priority |
|------|--------|--------|---------|----------|
| Fix regenerate no-op (thread seed) | ~1h | 🟦 Pure code | none — bounded fix to `createMockStory(prompt, seed)` + `app/page.tsx` | P2 |
| Deploy as a prototype demo | ~30m | 🔑 Needs hosting | hosting access; no env vars | P2 |
| Real AI story generation | 1–2d | 🎯 Needs spec then 🔑 + 🟦 | which LLM? OpenAI / Anthropic? + API key | P1 |
| UI choice-graph traversal | half day | 🟦 Pure code | none — wire `nextSceneId` into `app/page.tsx` state | P2 |
| Persistence / story history | half day | 🟦 Pure code (+🔑 if hosted DB) | local first (`localStorage`), then DB if multi-device | P3 |
| Image/scene art generation | 1d | 🎯 Needs spec then 🔑 + 🟦 | which image model? DALL·E / SD / Flux? + API key | P3 |

## Product spec questions (answer one sentence each)

1. **Who's the user?** Writer drafting stories, reader playing them, or both?
2. **Is the story authored, generated, or both?** Hardcoded scenes? AI-generated on demand? Or branchable templates?
3. **Are choices persistent?** Does the story state save between sessions?
4. **Visuals?** Text-only, AI-generated images, hand-illustrated, or none?
5. **Single-player or shared?** One reader's choices vs collaborative storytelling.

## Release plan

**Current state = prototype demo with mock generator.** Release plan once spec'd:

1. Tag current state as `v0.1.0 — UI prototype, mock story`.
2. Fix the regenerate no-op + add choice-graph traversal → `v0.2.0`.
3. Replace mock generator with real AI calls → `v0.3.0`.
4. Add persistence + image generation → `v1.0.0`.

### Deploy prerequisites (for the prototype demo)
**None.** Zero env vars (until AI generation is added).
