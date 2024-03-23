import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
  console.log(job);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={job.logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-[24px] font-extrabold ">{job.job_title}</h2>
        <p className="text-[20px] font-semibold">{job.company_name} </p>
        <div className="flex gap-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text ]">
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]">{job.remote_or_onsite} </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]">{job.job_type} </button>
        </div>
        <div className="flex gap-6 text-[20px] font-semibold">
          <div className="flex gap-2 items-center">
          <CiLocationOn />
            <p>{job.location}</p>
          </div>
                  <div className="flex gap-2 items-center">
                <CiDollar />      
            <p>{job.salary} </p>
          </div>
        </div>
        <div className="card-actions justify-start">
          <button className="btn btn-primary text-[20px] font-extrabold"> View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
