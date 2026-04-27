type PromptFormProps = {
  prompt: string;
  onChange: (value: string) => void;
  onRegenerate: () => void;
};

export function PromptForm({ prompt, onChange, onRegenerate }: PromptFormProps) {
  return (
    <form className="form" onSubmit={(event) => event.preventDefault()}>
      <label className="label" htmlFor="prompt">
        Story Prompt
      </label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={(event) => onChange(event.target.value)}
      />
      <div className="formActions">
        <button type="button" onClick={onRegenerate}>
          Regenerate Story
        </button>
      </div>
    </form>
  );
}
