import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { MdOutlineSubtitles } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  //  console.log(id, jobs)
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);

  return (
    <div>
      <h2>Job Details</h2>
      <div className="grid gap-4 md:grid-cols-5">
        <div className="border md:col-span-3 p-4 space-y-2">
          <p>
            <span className="font-bold">Job Description: </span>{" "}
            {job.job_description}
          </p>
          <p>
            <span className="font-bold">Job Responsibility: </span>{" "}
            {job.job_responsibility}
          </p>
          <p className="font-bold"> Educational Requirements:</p>
          <p>{job.educational_requirements} </p>
          <p className="font-bold"> Experiences:</p>
          <p>{job.experiences} </p>
        </div>
        <div className=" md:col-span-2">
          <div className="bg-gradient-to-r from-[#7E90FE1A] to-[#7E90FE1A] p-6 rounded-[12px]s">
            <h4 className="pb-2 border-b">Job Details</h4>
            <div className="flex gap-1 items-center pt-4 ">
              <p>
                <CiDollar />
              </p>

              <p>
                {" "}
                <span className="font-medium">Salary : </span>
                {job.salary} <span> per month </span>
              </p>
            </div>
            <div className="flex gap-1 items-center pt-2">
              <p>
                <MdOutlineSubtitles />
              </p>

              <p>
                {" "}
                <span className="font-medium">Job Title : </span>
                {job.job_title}
              </p>
            </div>
            <h4 className="pb-2 border-b pt-6">Contact Information</h4>
            <div className="flex gap-1 items-center pt-4 ">
              <p>
                <FaPhoneAlt />
              </p>

              <p>
                {" "}
                <span className="font-medium">Phone : </span>
                {job.contact_information.phone}{" "}
              </p>
            </div>
            <div className="flex gap-1 items-center pt-2">
              <p>
                <AiOutlineMail />
              </p>

              <p>
                {" "}
                <span className="font-medium">Email : </span>
                {job.contact_information.email}
              </p>
            </div>
            <div className="flex gap-1 items-center pt-2">
              <p>
                <FaRegAddressBook />
              </p>

              <p>
                {" "}
                <span className="font-medium"> Address :</span>
                {job.contact_information.address}
              </p>
            </div>
                  </div>
                  <div className="py-4 items-center text-center">
               <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[20px] text-white font-extrabold w-full"> Apply Now</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default JobDetails;
