import React from "react";
import { Job } from "../types/types";
import { FormattedDate } from "./FormattedDate";

export const JobSummary: React.FC<{
  job: Job;
  onClick: () => void;
}> = ({ job, onClick: handleClick }) => {
  return (
    <div className="grid grid-cols-3 cursor-pointer" onClick={handleClick}>
      <div>
        <FormattedDate date={job.createdAt} useShortFormat={true} />
      </div>
      <div>{job.client.name}</div>
      <div>{job.status}</div>
    </div>
  );
};
