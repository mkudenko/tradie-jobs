import React, { ChangeEvent } from "react";
import { JobStatus, JobStatusFilter } from "../types/types";
import { useRecoilState } from "recoil";
import { selectedStatusFilterAtom } from "../state/jobsAtom";

export const StatusFilter: React.FC<{
  className?: string;
}> = ({ className }) => {
  const [selectedStatus, setSelectedStatus] = useRecoilState(selectedStatusFilterAtom);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value as JobStatusFilter);
  };

  return (
    <select
      className={`px-3 py-1 border cursor-pointer ${className}`}
      value={selectedStatus}
      onChange={handleChange}>
      <option value="all">All statuses</option>
      {Object.keys(JobStatus).map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </select>
  );
};
