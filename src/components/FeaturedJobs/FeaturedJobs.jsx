import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    //this is not the best way to load all data
const [dataLength, setDataLength]=useState(4)


    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
        
    },[])
    // console.log(jobs)
    

    return (
        <div className="space-y-4">
            <div className="text-center space-y-4">
            <h2 className="text-5xl" >Featured Jobs</h2>
            <p> Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    jobs.slice(0,dataLength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className= {`${dataLength===jobs.length && 'hidden'} text-center`}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[20px] text-white font-extrabold">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;