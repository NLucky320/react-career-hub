import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from '../../Utility/localStorage'; // Import as named export
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    
const handleJobFilter = filter => {
    if (filter === 'all') {
        setDisplayJobs(appliedJobs)
    }
    else if (filter === 'remote') {
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
    setDisplayJobs(remoteJobs)
    }
        else if (filter === 'onsite') {
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
    setDisplayJobs(onsiteJobs)
    }
    }
        


    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job))

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
              setDisplayJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [jobs]); // Include jobs in dependency array

    // console.log(jobs)
    return (
        <div>
            <h2 className="text-2xl text-center"> applied jobs: {appliedJobs.length}</h2>

            <div className="dropdown flex justify-end">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={()=>handleJobFilter('all')} ><a>All</a></li>
    <li onClick={()=>handleJobFilter('remote')}><a>Remote</a></li>
    <li  onClick={()=>handleJobFilter('onsite')}><a>Onsite</a></li>
  </ul>
</div>

             <div className="p-4 space-y-4 w-full">
                {
                   displayJobs.map(job=><AppliedJob key={job.id} job={job}></AppliedJob>)
                }
        </div>
        </div>
       
    );
};

export default AppliedJobs;
