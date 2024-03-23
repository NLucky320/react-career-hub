const Job = ({ job }) => {
  console.log(job);
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={job.logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job.job_title}</h2>
        <p>{job.company_name} </p>
        <div className="flex gap-6">
          <button className="btn">{job.remote_or_onsite} </button>
          <button className="btn ">{job.job_type} </button>
        </div>
        <div className="flex gap-6">
          <div>
            {" "}
            <p>{job.location}</p>
          </div>
          <div>
            <p>{job.salary} </p>
          </div>
        </div>
        <div className="card-actions justify-start">
          <button className="btn btn-primary"> View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
