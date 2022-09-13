import React from "react";
import { useRecoilValue } from "recoil";
import { filteredJobsAtom } from "./state/jobsAtom";
import { JobPanel } from "./components/JobPanel";
import { StatusFilter } from "./components/StatusFilter";

export const App = () => {
  const jobs = useRecoilValue(filteredJobsAtom);

  return (
    <div className="h-screen flex flex-col justify-start">
      <header className="h-12 bg-blue-100 shadow flex justify-center items-center">
        <h1 className="text-xl font-bold">Tradie jobs</h1>
      </header>
      <main className="flex-1 container px-4 py-8 overflow-auto mx-auto md:px-0">
        <div className="flex flex-col md:flex-row md:justify-end gap-4 mb-6">
          <StatusFilter />
        </div>
        <div className="flex flex-col gap-4">
          {jobs.length > 0 ? (
            jobs.map((job) => <JobPanel key={job.id} job={job} />)
          ) : (
            <div>No jobs found.</div>
          )}
        </div>
      </main>
      <footer className="h-12 bg-gray-700 text-white text-sm flex justify-center items-center">
        Michael Kudenko
      </footer>
    </div>
  );
};

export default App;
