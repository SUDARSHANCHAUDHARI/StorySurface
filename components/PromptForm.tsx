type PromptFormProps = {
  prompt: string;
  onChange: (value: string) => void;
  onRegenerate: () => void;
};

export function PromptForm({ prompt, onChange, onRegenerate }: PromptFormProps) {
  return (
    <form className="form" onSubmit={(event) => event.preventDefault()}>
      <div className="formTop">
        <label className="label" htmlFor="prompt">
          Story Prompt
        </label>
        <button type="button" onClick={onRegenerate}>
          Regenerate Story
        </button>
      </div>
      <textarea id="prompt" value={prompt} onChange={(event) => onChange(event.target.value)} />
    </form>
  );
}
