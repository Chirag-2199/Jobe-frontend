import { useEffect, useState } from "react";
import { JobType } from "../types/job";
import api from "../api";
import JobForm from "./JobForm";
import JobCard from "./JobCard";
import "../App.css";

export default function JobList() {
    const [jobs, setJobs] = useState<JobType[]>([]);

    const fetchJobs = async () => {
        const res = await api.get<JobType[]>("/jobs");
        setJobs(res.data);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <div className="joblist-container">
            <JobForm refresh={fetchJobs} />
            <div className="job-cards-wrapper">
                {jobs.map((job) => (
                    <JobCard key={job._id} job={job} refresh={fetchJobs} />
                ))}
            </div>
        </div>
    );
}
