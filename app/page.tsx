"use client";

import { useMemo, useState } from "react";
import { PromptForm } from "../components/PromptForm";
import { SceneViewer } from "../components/SceneViewer";
import { createMockStory } from "../lib/story-generator";

export default function HomePage() {
  const [prompt, setPrompt] = useState("A lighthouse remembers every storm it has survived.");
  const [seed, setSeed] = useState(0);

  const story = useMemo(() => createMockStory(prompt), [prompt, seed]);

  return (
    <main className="shell">
      <section className="heroBlock">
        <section className="hero">
          <p className="eyebrow">Living Interfaces</p>
          <h1>StorySurface</h1>
          <p className="lede">
            An interactive story sandbox where mood, pacing, and interface shape
            move together. This pass focuses on scene structure and emotional
            presentation before deeper AI generation arrives.
          </p>
        </section>

        <aside className="heroCard">
          <span className="label">Current premise</span>
          <h2>{story.title}</h2>
          <p>{story.premise}</p>
        </aside>
      </section>

      <PromptForm
        prompt={prompt}
        onChange={setPrompt}
        onRegenerate={() => setSeed((value) => value + 1)}
      />

      <SceneViewer story={story} />
    </main>
  );
}
