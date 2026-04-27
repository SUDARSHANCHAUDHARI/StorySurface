export type StoryScene = {
  title: string;
  text: string;
  tone: "wonder" | "tension" | "resolve";
};

export function createMockStory(prompt: string): StoryScene[] {
  const cleaned = prompt.trim() || "A small city wakes up inside a dream.";

  return [
    {
      title: "Opening Signal",
      text: `The world opens around this idea: ${cleaned}`,
      tone: "wonder"
    },
    {
      title: "Pressure Point",
      text: "Something shifts, and the calm surface starts revealing hidden stakes.",
      tone: "tension"
    },
    {
      title: "Soft Landing",
      text: "The interface settles into a new shape, carrying the story toward resolution.",
      tone: "resolve"
    }
  ];
}
