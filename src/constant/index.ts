import { EnumValues } from "zod";

export const JOBTYPES: EnumValues = ["Full Time", "Part Time", "Remote", "Internship"];

export const JOB_LISTING_COLUMNS: string[] = ["Roles", "Status", "Date Posted", "Due Date", "Job Type", "Applicants", "Needs"];

export const JOB_LISTING_DATA = [
  {
    roles: "Frontend Developer",
    status: "Open",
    datePosted: "2022-01-01",
    dueDate: "2022-01-01",
    jobType: "Full Time",
    applicants: "10",
    needs: "10",
  },
];

export const JOB_APPLICANTS_COLUMNS: string[] = ["Name", "Applied Date"];

export const JOB_APPLICANTS_DATA = [
  {
    name: "John Doe",
    appliedDate: "2022-01-01",
  },
];
