import JobCard from "./JobCard";

export default function JobList({ jobs, onDelete, onUpdate }) {
  if (!jobs.length) return <p>No applications yet.</p>;

  return (
    <div>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
