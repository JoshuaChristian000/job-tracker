import { useState } from "react";

export default function JobForm({ onAdd }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("applied");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !role) return;

    onAdd({
      id: Date.now(),
      company,
      role,
      status,
      appliedDate: new Date().toISOString().slice(0, 10),
    });

    setCompany("");
    setRole("");
    setStatus("applied");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="rejected">Rejected</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
