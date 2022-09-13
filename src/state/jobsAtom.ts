import { atom, selector } from "recoil";
import { AllJobStatuses, Job, JobStatus, JobStatusFilter } from "../types/types";
import dayjs from "dayjs";
import uuid from "../utils/uuid";

export const selectedStatusFilterAtom = atom<JobStatusFilter>({
  key: "selectedStatusFilter",
  default: AllJobStatuses.All,
});

export const jobsAtom = atom<Job[]>({
  key: "jobs",
  default: [
    {
      id: uuid(),
      status: JobStatus.Scheduled,
      createdAt: dayjs().subtract(7, "days").toDate(),
      client: {
        name: "Apple",
        phoneNumber: "09 111 111",
      },
      notes: [
        {
          id: uuid(),
          createdAt: dayjs().subtract(2, "days").toDate(),
          note: "Cat ipsum dolor sit amet, try to hold own back foot to clean it but foot reflexively kicks you in face",
        },
      ],
    },
    {
      id: uuid(),
      status: JobStatus.Completed,
      createdAt: dayjs().subtract(2, "weeks").toDate(),
      client: {
        name: "Microsoft",
        phoneNumber: "09 222 222",
      },
      notes: [
        {
          id: uuid(),
          createdAt: dayjs().subtract(8, "days").toDate(),
          note: "Cat ipsum dolor sit amet, meowzer sweet beast chase mice. Meow to be let out sleep all day whilst slave is at work, play all night whilst slave is sleeping.",
        },
      ],
    },
    {
      id: uuid(),
      status: JobStatus.Scheduled,
      createdAt: dayjs().subtract(1, "days").toDate(),
      client: {
        name: "Facebook",
        phoneNumber: "09 333 333",
      },
      notes: [
        {
          id: uuid(),
          createdAt: dayjs().subtract(2, "days").toDate(),
          note: "Cat ipsum dolor sit amet, try to hold own back foot to clean it but foot reflexively kicks you in face",
        },
      ],
    },
  ],
});

export const filteredJobsAtom = selector<Job[]>({
  key: "filteredJobsAtom",
  get: ({ get }) => {
    const selectedFilter = get(selectedStatusFilterAtom);

    return get(jobsAtom).filter((job) => {
      return selectedFilter === AllJobStatuses.All || job.status === selectedFilter;
    });
  },
});
