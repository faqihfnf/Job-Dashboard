import { EnumValues } from "zod";

export type optionType = {
  id: string;
  label: string;
};

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

export const JOB_APPLICANTS_COLUMNS: string[] = ["Name"];

export const JOB_APPLICANTS_DATA = [
  {
    name: "John Doe",
    appliedDate: "2022-01-01",
  },
];

export const LOCATION_OPTIONS: optionType[] = [
  {
    id: "Jakarta",
    label: "Jakarta",
  },
  {
    id: "Bandung",
    label: "Bandung",
  },
  {
    id: "Surabaya",
    label: "Surabaya",
  },
  {
    id: "Makassar",
    label: "Makassar",
  },
];

export const EMPLOYEE_OPTIONS: optionType[] = [
  {
    id: "1 - 50",
    label: "1 - 50",
  },
  {
    id: "51 - 150",
    label: "51 - 150",
  },
  {
    id: "151 - 250",
    label: "151 - 250",
  },
  {
    id: "251 - 500",
    label: "251 - 500",
  },
  {
    id: "501 - 1000",
    label: "501 - 1000",
  },
  {
    id: "> 1000",
    label: "> 1000",
  },
];
