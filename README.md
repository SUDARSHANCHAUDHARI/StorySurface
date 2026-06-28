# StorySurface

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](package.json)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB.svg)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Interactive narrative UI prototype for mood-driven story presentation, scene staging, and lightweight branching.

> **Status:** Public demo-ready · static build verified · story generation is mock/prototype behavior

## Why This Exists

Story experiences can feel richer when the interface changes with tone, pacing, and scene state. StorySurface explores that reading surface before adding model-backed generation and persistence.

## Key Technical Decisions

**Mock generation keeps the first demo focused on experience.** The UI can demonstrate flow, tone, and branching before adding real AI generation.

**Static Next.js output is enough for launch.** The prototype does not need server state yet, so Cloudflare Pages can host it as a public demo.

**The README labels generation honestly.** Users should know the current branching/generation is a demo concept, not a production story engine.

## Features

- prompt-led mock story flow
- scene progression
- lightweight branching choices
- tone and beat presentation
- responsive reading stage

## Run Locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Deployment

| Setting | Value |
|---|---|
| Release scope | Public demo |
| Framework preset | `Next.js` |
| Build command | `pnpm build` |
| Build output directory | `out` |
| Node version | `20.19.6` |

## Verification

```bash
pnpm build
pnpm exec tsc --noEmit
```

## Known Limits

- Story generation is mock behavior.
- No persistence or saved stories yet.
- No audio, media, or creator export workflow yet.

## Author

Built by **Sudarshan Chaudhari** — SudarshanTechLabs.
