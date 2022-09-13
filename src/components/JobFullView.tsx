import React, { useEffect, useState } from "react";
import { Job, Note } from "../types/types";
import { JobNote } from "./JobNote";
import { NoteForm } from "./NoteForm";
import { JobDetails } from "./JobDetails";
import { useJobsRepository } from "../hooks/useJobsRepository";

export const JobFullView: React.FC<{ job: Job }> = ({ job }) => {
  const [newNoteFormIsVisible, setNewNoteFormIsVisible] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const { addNewNote } = useJobsRepository();

  const handleNewNoteSave = (note: string) => {
    addNewNote(job.id, note);
    setNewNoteFormIsVisible(false);
  };

  useEffect(() => {
    const allNotes = [...job.notes];
    allNotes.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    setNotes(allNotes);
  }, [job.notes]);

  return (
    <div>
      <JobDetails job={job} className="my-4" />
      {newNoteFormIsVisible ? (
        <NoteForm onSave={handleNewNoteSave} onCancel={() => setNewNoteFormIsVisible(false)} />
      ) : (
        <div
          className="text-blue-400 text-sm text-right cursor-pointer"
          onClick={() => setNewNoteFormIsVisible(true)}>
          + New note
        </div>
      )}
      <div className="flex flex-col gap-2 mt-2">
        {notes.map((note) => (
          <JobNote key={note.id} note={note} job={job} />
        ))}
      </div>
    </div>
  );
};
