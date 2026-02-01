export default function JobCard({ job, onDelete, onUpdate }) {
  const handleChange = (e) => {
    onUpdate(job.id, e.target.value);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
        marginBottom: 10,
      }}
    >
      <h3>{job.company}</h3>
      <p>{job.role}</p>

      <select value={job.status} onChange={handleChange}>
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="rejected">Rejected</option>
      </select>

      <br />
      <button onClick={() => onDelete(job.id)}>Delete</button>
    </div>
  );
}
