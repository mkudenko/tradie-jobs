import React, { ReactNode } from "react";
import { Job } from "../types/types";
import { FormattedDate } from "./FormattedDate";
import { JobStatusForm } from "./JobStatusForm";

const Detail: React.FC<{
  label: string;
  children: ReactNode;
}> = ({ label, children }) => {
  return (
    <div>
      <span className="font-bold">{label}:</span> {children}
    </div>
  );
};

export const JobDetails: React.FC<{
  job: Job;
  className?: string;
}> = ({ job, className }) => {
  return (
    <div className={`text-sm ${className}`}>
      <Detail label="Job ID">{job.id}</Detail>
      <Detail label="Client">{job.client.name}</Detail>
      <Detail label="Contact">{job.client.phoneNumber}</Detail>
      <Detail label="Created">
        <FormattedDate date={job.createdAt} />
      </Detail>
      <Detail label="Status">
        <JobStatusForm job={job} />
      </Detail>
    </div>
  );
};
