export type StoryChoice = {
  id: string;
  label: string;
  nextSceneId: string;
};

export type StoryScene = {
  id: string;
  title: string;
  text: string;
  tone: "wonder" | "tension" | "resolve";
  beat: string;
  choices: StoryChoice[];
};

export type StoryBundle = {
  title: string;
  premise: string;
  scenes: StoryScene[];
};

export function createMockStory(prompt: string): StoryBundle {
  const cleaned = prompt.trim() || "A small city wakes up inside a dream.";

  return {
    title: "Surface tale",
    premise: cleaned,
    scenes: [
      {
        id: "opening",
        title: "Opening Signal",
        text: `The world opens around this idea: ${cleaned}`,
        tone: "wonder",
        beat: "Invitation",
        choices: [
          { id: "open-memory", label: "Follow the memory", nextSceneId: "memory" },
          { id: "open-storm", label: "Step into the threat", nextSceneId: "threat" }
        ]
      },
      {
        id: "memory",
        title: "Archive of Light",
        text: "Fragments of the past glow back to life, revealing what this place once protected.",
        tone: "wonder",
        beat: "Discovery",
        choices: [
          { id: "memory-forward", label: "Push forward", nextSceneId: "crossroads" }
        ]
      },
      {
        id: "threat",
        title: "Pressure Point",
        text: "Something shifts, and the calm surface starts revealing hidden stakes beneath the scene.",
        tone: "tension",
        beat: "Escalation",
        choices: [
          { id: "threat-forward", label: "Face it directly", nextSceneId: "crossroads" }
        ]
      },
      {
        id: "crossroads",
        title: "Crossroads of Tone",
        text: "The interface bends between fear and wonder, asking what kind of ending this story deserves.",
        tone: "tension",
        beat: "Decision",
        choices: [
          { id: "crossroads-calm", label: "Choose a gentle resolution", nextSceneId: "landing" },
          { id: "crossroads-bold", label: "Choose a defiant ending", nextSceneId: "landing" }
        ]
      },
      {
        id: "landing",
        title: "Soft Landing",
        text: "The interface settles into a new shape, carrying the story toward a calmer, earned resolution.",
        tone: "resolve",
        beat: "Resolution",
        choices: [
          { id: "landing-restart", label: "Restart story", nextSceneId: "opening" }
        ]
      }
    ]
  };
}
