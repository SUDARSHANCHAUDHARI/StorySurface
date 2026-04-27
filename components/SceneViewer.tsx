"use client";

import { useState } from "react";
import type { StoryScene } from "../lib/story-generator";

type SceneViewerProps = {
  scenes: StoryScene[];
};

export function SceneViewer({ scenes }: SceneViewerProps) {
  const [index, setIndex] = useState(0);
  const scene = scenes[index] ?? scenes[0];

  function nextScene() {
    setIndex((current) => (current + 1 >= scenes.length ? 0 : current + 1));
  }

  return (
    <section className="viewer">
      <article className={`scene ${scene.tone}`}>
        <span className="label">Scene {index + 1}</span>
        <h2>{scene.title}</h2>
        <p>{scene.text}</p>
      </article>
      <div className="footer">
        <p className="progress">
          {index + 1} / {scenes.length}
        </p>
        <button type="button" onClick={nextScene}>
          Next Scene
        </button>
      </div>
    </section>
  );
}
