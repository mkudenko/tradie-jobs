import React, { useState } from "react";
import { Job } from "../types/types";
import { JobSummary } from "./JobSummary";
import { JobFullView } from "./JobFullView";

export const JobPanel: React.FC<{ job: Job }> = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md p-2 bg-gray-50">
      <JobSummary job={job} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <JobFullView job={job} />}
    </div>
  );
};
