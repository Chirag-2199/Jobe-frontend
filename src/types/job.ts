export interface JobType {
    _id?: string;
    company: string;
    role: string;
    status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
    date: string;
    link: string;
}
