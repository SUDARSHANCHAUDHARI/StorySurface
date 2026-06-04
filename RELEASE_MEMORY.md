# Release Memory: StorySurface
_Last updated: 2026-06-04_

## Current Status

StorySurface is a static Next.js prototype for mood-driven narrative UI. README states the story generation and branching are mock/prototype behavior.

Known verification: `pnpm build` and `pnpm exec tsc --noEmit` passed on 2026-06-04. The latest `pnpm build` also confirmed static output with `out/index.html` and `out/_headers`.

## Release Target

Public demo release.

## Success Criteria

- Production build passes.
- Prompt form and scene viewer work end to end.
- Demo clearly labels mock generation.
- Mobile reading flow is polished.
- Live URL is added after deployment.

## Ordered Plan

1. Run `pnpm build`.
2. Remove generated `out/` from git consideration unless intentionally deploying static output.
3. Verify prompt-to-story demo flow.
4. Polish copy around mock branching/generation.
5. Deploy as a Cloudflare Pages demo.
6. Add live URL to README.

## Risks

- Users may expect real AI generation from the product framing.
- Full production requires model integration, persistence, richer branching, and export/creator tooling.

## First Task

Deploy demo after a quick browser smoke check.

## Latest Prep Notes

- Added README release-scope note clarifying mock generation.
- Added Cloudflare Pages setup: `.nvmrc`, README deployment values, and static `_headers`.
- Added `out` to `.gitignore`.
- Standalone `next lint` is not configured and prompts interactively; use build/typecheck as current release gate until ESLint is migrated.
- Polished README with public-demo status, technical decisions, deployment settings, verification, known limits, and author section.
