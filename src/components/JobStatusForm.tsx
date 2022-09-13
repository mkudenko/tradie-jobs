import React from "react";
import { Job, JobStatus } from "../types/types";
import { useJobsRepository } from "../hooks/useJobsRepository";

export const JobStatusForm: React.FC<{
  job: Job;
  className?: string;
}> = ({ job, className }) => {
  const { setJobStatus } = useJobsRepository();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setJobStatus(job.id, event.target.value as JobStatus);
  };

  return (
    <select
      className={`border px-2 py-1 ${className}`}
      name="jobStatus"
      onChange={handleChange}
      value={job.status}>
      {Object.keys(JobStatus).map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </select>
  );
};
