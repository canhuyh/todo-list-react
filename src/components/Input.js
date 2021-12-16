function Input({ job, setJob }) {
  return <input value={job} onChange={(e) => setJob(e.target.value)} />;
}

export default Input;
