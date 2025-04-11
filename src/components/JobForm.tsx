import { useState } from "react";
import api from "../api";
import { JobType } from "../types/job";
import "../App.css";

interface Props {
    refresh: () => void;
}

export default function JobForm({ refresh }: Props) {
    const [job, setJob] = useState<JobType>({
        company: "",
        role: "",
        status: "Applied",
        date: "",
        link: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await api.post("/jobs", job);
        refresh();
    };

    return (
        <form className="job-form" onSubmit={handleSubmit}>
            <input className="job-input" name="company" placeholder="Company" onChange={handleChange} required />
            <input className="job-input" name="role" placeholder="Role" onChange={handleChange} required />
            <select className="job-select" name="status" onChange={handleChange} value={job.status}>
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
            </select>
            <input className="job-input" type="date" name="date" onChange={handleChange} required />
            <input className="job-input" name="link" placeholder="Link" onChange={handleChange} />
            <button className="job-submit-btn" type="submit">Add Job</button>
        </form>
    );
}
