import React, { useState } from "react";
import { Job, Note } from "../types/types";
import { FormattedDate } from "./FormattedDate";
import { NoteForm } from "./NoteForm";
import { useJobsRepository } from "../hooks/useJobsRepository";

export const JobNote: React.FC<{
  note: Note;
  job: Job;
  className?: string;
}> = ({ note, job, className }) => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const { updateNote } = useJobsRepository();

  const handleNoteUpdate = (noteText: string) => {
    updateNote(job.id, note.id, noteText);
    setIsInEditMode(false);
  };

  return (
    <div className={`${className}`}>
      {isInEditMode ? (
        <NoteForm
          note={note.note}
          onCancel={() => setIsInEditMode(false)}
          onSave={handleNoteUpdate}
        />
      ) : (
        <>
          <div className="flex justify-start items-center gap-3">
            <div className="text-xs text-gray-400">
              <FormattedDate date={note.createdAt} />
            </div>
            <div
              className="text-xs text-blue-400 cursor-pointer"
              onClick={() => setIsInEditMode(true)}>
              Edit
            </div>
          </div>
          <div className="text-sm">{note.note}</div>
        </>
      )}
    </div>
  );
};
