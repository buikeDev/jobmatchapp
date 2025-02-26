import { useEffect, useState } from "react";
import JobDetails from "./JobDetails";

//states for storing data from the api
export default function Joblist() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  //this simulates an API call but since i do not have a online api to call to i simulated the data

  //   useEffect(() => {
  //     axios.get("/jobs.json").then((res) => setJobs(res.data));
  //   }, []);

  //simulating returned .json data from an api call
  useEffect(() => {
    setJobs([
      {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Corp",
        location: "Remote",
        salary: "$70,000 - $90,000",
        requiredSkills: ["React", "JavaScript", "Tailwind CSS"],
        matchScore: 85,
      },
      {
        id: 2,
        title: "UI Engineer",
        company: "DesignPro",
        location: "New York, USA",
        salary: "$80,000 - $100,000",
        requiredSkills: ["Figma", "CSS"],
        matchScore: 70,
      },
    ]);
  }, []);

  //this code maps through the job state and creates a list
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Job Recommendations</h2>
      {jobs.map((job) => (
        <div
          //this code sets the clicked element data to the selectedjob state
          key={job.id}
          className="card mb-3 shadow-sm"
          onClick={() => setSelectedJob(job)}
          style={{ cursor: "pointer" }}
        >
          <div className="card-body">
            <h5 className="card-title">{job.title}</h5>
            <p className="card-text">
              {job.company} - {job.location}
            </p>
            <p className="card-text">
              <strong>Salary:</strong> {job.salary}
            </p>
            <div className="progress">
              <div
                //this adds different styles to the elements based on the value of their match score
                className={`progress-bar ${
                  job.matchScore >= 80
                    ? "bg-success"
                    : job.matchScore >= 50
                    ? "bg-warning"
                    : "bg-danger"
                }`}
                role="progressbar"
                style={{ width: `${job.matchScore}%` }}
              >
                {job.matchScore}%
              </div>
            </div>
          </div>
        </div>
      ))}
      {selectedJob && (
        <JobDetails job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}
