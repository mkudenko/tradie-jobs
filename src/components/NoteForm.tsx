import React, { ChangeEvent, useState } from "react";

export const NoteForm: React.FC<{
  onSave: (note: string) => void;
  onCancel: () => void;
  note?: string;
  className?: string;
}> = ({ onSave, onCancel, note, className }) => {
  const [noteText, setNoteText] = useState(note || "");
  const [hasError, setHasError] = useState(false);

  const handleNoteChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setHasError(false);
    setNoteText(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (noteText.trim().length === 0) {
      setHasError(true);
    } else {
      onSave(noteText);
    }
  };

  return (
    <form className={`${className}`}>
      <div>
        <textarea
          className={`border rounded-sm w-full h-32 text-sm p-2 ${
            hasError ? "border-red-400" : ""
          }`}
          value={noteText}
          onChange={handleNoteChange}
          placeholder="Add your note here..."></textarea>
        {hasError && <div className="text-sm text-red-400">Please fill out this field.</div>}
      </div>
      <div className="flex justify-end items-center gap-3">
        <button className="text-gray-400 text-sm" onClick={() => onCancel()}>
          Cancel
        </button>
        <button
          type="submit"
          className="text-white bg-blue-500 text-sm px-2 py-1 rounded"
          onClick={handleSubmit}>
          Save
        </button>
      </div>
    </form>
  );
};
