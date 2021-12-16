import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import JobItem from "./components/JobItem";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs ?? [];
  });

  const handleAddJob = () => {
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

  const [show, setShow] = useState(true);
  const showToggle = () => {
    setShow(!show);
    return show;
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <Input job={job} setJob={setJob} />
      <Button buttonName="Add" onClick={handleAddJob} />

      <Button
        buttonName={show ? "Hidden all" : "Show all"}
        onClick={showToggle}
      />

      {show && (
        <ul>
          {jobs.map((job, index) => (
            <div key={index}>
              <JobItem job={job} />
              <Button
                buttonName="Remove"
                onClick={() => handleRemoveJob(index)}
              />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
