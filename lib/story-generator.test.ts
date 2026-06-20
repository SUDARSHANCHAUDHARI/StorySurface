import { describe, it, expect } from "vitest";
import { createMockStory } from "./story-generator";

describe("createMockStory", () => {
  it("uses the trimmed prompt as the premise", () => {
    const story = createMockStory("  A small city wakes up.  ");
    expect(story.premise).toBe("A small city wakes up.");
  });

  it("falls back to a default premise when the prompt is empty or whitespace", () => {
    expect(createMockStory("").premise).toBe("A small city wakes up inside a dream.");
    expect(createMockStory("   ").premise).toBe("A small city wakes up inside a dream.");
  });

  it("returns the expected 5-scene structure with stable IDs", () => {
    const story = createMockStory("anything");
    expect(story.scenes.map((s) => s.id)).toEqual([
      "opening",
      "memory",
      "threat",
      "crossroads",
      "landing",
    ]);
  });

  it("includes the prompt verbatim in the opening scene text", () => {
    const story = createMockStory("the lighthouse remembers");
    const opening = story.scenes.find((s) => s.id === "opening");
    expect(opening?.text).toContain("the lighthouse remembers");
  });

  it("every choice points to a real scene id (no dead ends)", () => {
    const story = createMockStory("test");
    const ids = new Set(story.scenes.map((s) => s.id));
    for (const scene of story.scenes) {
      for (const choice of scene.choices) {
        expect(ids.has(choice.nextSceneId)).toBe(true);
      }
    }
  });

  it("scene ids are unique", () => {
    const ids = createMockStory("x").scenes.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every scene has at least one choice (no terminal dead-ends)", () => {
    for (const scene of createMockStory("x").scenes) {
      expect(scene.choices.length).toBeGreaterThan(0);
    }
  });

  it("uses only the three documented tone values", () => {
    const tones = new Set(createMockStory("x").scenes.map((s) => s.tone));
    for (const tone of tones) {
      expect(["wonder", "tension", "resolve"]).toContain(tone);
    }
  });
});
