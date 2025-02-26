export default function JobDetails({ job, onClose }) {
  if (!job) return null;

  const userSkills = ["React", "JavaScript"]; // This is a Fake user skills
  console.log(job);

  const missingSkills = job.requiredSkills.filter(
    (skill) => !userSkills.includes(skill)
  );

  const handleApply = () => {
    if (missingSkills.length > 0) {
      alert(
        `You're missing: ${missingSkills.join(", ")}. Consider upskilling!`
      );
    } else {
      alert("Application submitted successfully!");
    }
  };

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{job.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>
              <strong>Company:</strong> {job.company}
            </p>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Salary:</strong> {job.salary}
            </p>
            <p>
              <strong>Required Skills:</strong> {job.requiredSkills.join(", ")}
            </p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              onClick={() => alert("Application submitted!")}
            >
              Apply Now
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
