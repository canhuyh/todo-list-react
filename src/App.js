import { useState } from "react";
function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs ?? [];
  });

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];

      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });

    setJob("");
  };

  const handleRemoveJob = (index) => {
    setJobs((prev) => {
      const newJobs = prev.filter((job) => job !== prev[index]);

      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {console.log(jobs)}

        {jobs.map((job, index) => (
          <div key={index}>
            <li>{job}</li>
            <button onClick={() => handleRemoveJob(index)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
