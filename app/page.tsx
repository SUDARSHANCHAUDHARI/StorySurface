"use client";

import { useMemo, useState } from "react";
import { PromptForm } from "../components/PromptForm";
import { SceneViewer } from "../components/SceneViewer";
import { createMockStory } from "../lib/story-generator";

export default function HomePage() {
  const [prompt, setPrompt] = useState("A lighthouse remembers every storm it has survived.");
  const [seed, setSeed] = useState(0);

  const scenes = useMemo(() => createMockStory(prompt), [prompt, seed]);

  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Living Interfaces</p>
        <h1>StorySurface</h1>
        <p className="lede">
          A lightweight story sandbox where interface mood changes with the scene.
          This starter is for validating emotional presentation before adding deeper AI.
        </p>
      </section>

      <PromptForm
        prompt={prompt}
        onChange={setPrompt}
        onRegenerate={() => setSeed((value) => value + 1)}
      />

      <SceneViewer scenes={scenes} />
    </main>
  );
}
