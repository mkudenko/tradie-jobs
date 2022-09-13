import { JobStatus } from "../types/types";
import { useRecoilState } from "recoil";
import { jobsAtom } from "../state/jobsAtom";
import uuid from "../utils/uuid";
import dayjs from "dayjs";

export const useJobsRepository = () => {
  const [allJobs, setAllJobs] = useRecoilState(jobsAtom);

  const setJobStatus = (jobId: string, newStatus: JobStatus) => {
    const jobs = allJobs.map((job) => {
      if (job.id !== jobId) {
        return job;
      }
      return { ...job, status: newStatus };
    });
    setAllJobs(jobs);
  };

  const addNewNote = (jobId: string, newNote: string) => {
    const jobs = allJobs.map((job) => {
      if (job.id !== jobId) {
        return job;
      }
      const jobNotes = [
        ...job.notes,
        {
          id: uuid(),
          createdAt: dayjs().toDate(),
          note: newNote,
        },
      ];
      return { ...job, notes: jobNotes };
    });
    setAllJobs(jobs);
  };

  const updateNote = (jobId: string, noteId: string, newNote: string) => {
    const jobs = allJobs.map((job) => {
      if (job.id !== jobId) {
        return job;
      }
      const jobNotes = [
        ...job.notes.filter((note) => note.id !== noteId),
        {
          id: noteId,
          createdAt: dayjs().toDate(),
          note: newNote,
        },
      ];
      return { ...job, notes: jobNotes };
    });
    setAllJobs(jobs);
  };

  return { setJobStatus, addNewNote, updateNote };
};
