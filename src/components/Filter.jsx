export default function Filter({ value, onChange }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <button onClick={() => onChange("all")}>All</button>
      <button onClick={() => onChange("applied")}>Applied</button>
      <button onClick={() => onChange("interview")}>Interview</button>
      <button onClick={() => onChange("rejected")}>Rejected</button>
    </div>
  );
}
