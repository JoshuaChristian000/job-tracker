import { useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import Filter from "./components/Filter";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [jobs, setJobs] = useLocalStorage("jobs", []);
  const [filter, setFilter] = useState("all");

  const filteredJobs =
    filter === "all"
      ? jobs
      : jobs.filter((job) => job.status === filter);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const updateStatus = (id, status) => {
  setJobs(
    jobs.map((job) =>
      job.id === id ? { ...job, status } : job
    )
  );
};

  return (
    <div style={{ padding: 20 }}>
      <h1>Job Application Tracker</h1>
      <JobForm onAdd={addJob} />
      <Filter value={filter} onChange={setFilter} />
      <JobList
        jobs={filteredJobs}
        onDelete={deleteJob}
        onUpdate={updateStatus}
      />
    </div>
  );

  
}

export default App;
