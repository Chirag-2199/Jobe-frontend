import { JobType } from "../types/job";
import api from "../api";
import "../App.css";

interface Props {
    job: JobType;
    refresh: () => void;
}

export default function JobCard({ job, refresh }: Props) {
    const handleDelete = async () => {
        await api.delete(`/jobs/${job._id}`);
        refresh();
    };

    const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        await api.put(`/jobs/${job._id}`, { ...job, status: e.target.value });
        refresh();
    };

    return (
        <div className="job-card">
            <h3 className="job-title">{job.company} - {job.role}</h3>
            <select className="job-select" value={job.status} onChange={handleStatusChange}>
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
            </select>
            <p className="job-date">{new Date(job.date).toLocaleDateString()}</p>
            <a className="job-link" href={job.link} target="_blank" rel="noopener noreferrer">
                Job Link
            </a>
            <button className="job-delete-btn" onClick={handleDelete}>Delete</button>
        </div>
    );
}
