"use client";

import { useEffect, useMemo, useState } from "react";
import type { StoryBundle } from "../lib/story-generator";

type SceneViewerProps = {
  story: StoryBundle;
};

export function SceneViewer({ story }: SceneViewerProps) {
  const [sceneId, setSceneId] = useState(story.scenes[0]?.id ?? "");

  useEffect(() => {
    setSceneId(story.scenes[0]?.id ?? "");
  }, [story]);

  const sceneMap = useMemo(
    () => new Map(story.scenes.map((scene) => [scene.id, scene])),
    [story]
  );

  const currentScene = sceneMap.get(sceneId) ?? story.scenes[0];
  const currentIndex = story.scenes.findIndex((scene) => scene.id === currentScene.id);

  return (
    <section className="viewer">
      <div className="viewerTop">
        <div>
          <span className="label">Story Stage</span>
          <h2>{story.title}</h2>
          <p>{story.premise}</p>
        </div>
        <p className="progress">
          Scene {currentIndex + 1} / {story.scenes.length}
        </p>
      </div>

      <article className={`scene ${currentScene.tone}`}>
        <div className="sceneMeta">
          <span className="label">{currentScene.beat}</span>
          <span className="toneBadge">{currentScene.tone}</span>
        </div>
        <h3>{currentScene.title}</h3>
        <p>{currentScene.text}</p>
      </article>

      <div className="choiceRow">
        {currentScene.choices.map((choice) => (
          <button key={choice.id} type="button" onClick={() => setSceneId(choice.nextSceneId)}>
            {choice.label}
          </button>
        ))}
      </div>

      <div className="storyRail">
        {story.scenes.map((scene) => (
          <button
            key={scene.id}
            type="button"
            className={scene.id === currentScene.id ? "railDot active" : "railDot"}
            onClick={() => setSceneId(scene.id)}
            aria-label={scene.title}
          />
        ))}
      </div>
    </section>
  );
}
