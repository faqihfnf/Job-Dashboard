import { JOBTYPES } from "@/constant";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z.string({ required_error: "Job title is required" }).min(10, { message: "Job Title must be at least 10 characters" }),
  jobType: z.enum(JOBTYPES, { required_error: "Job Type is required" }),
  salaryFrom: z.string({ required_error: "Salary From is required" }),
  salaryTo: z.string({ required_error: "Salary to is required" }),
  categoryId: z.string({ required_error: "Category is required" }),
  requiredSkills: z.string().array().nonempty({ message: "Required Skills must be at least 1 skill" }),
  jobDescription: z.string({ required_error: "Job Description is required" }).min(20, { message: "Job Description must be at least 20 characters" }),
  responsibility: z.string({ required_error: "responsibilities is required" }).min(10, { message: "responsibilities must be at least 10 characters" }),
  whoYouAre: z.string({ required_error: "Who You Are is required" }).min(10, { message: "Who You Are must be at least 10 characters" }),
  niceToHaves: z.string({ required_error: "Nice to Haves is required" }).min(10, { message: "Nice to Haves must be at least 10 characters" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must be at least 1 benefit" }),
});

export const everviewFormSchema = z.object({
  image: z.any().refine((item: any) => item?.name, {
    message: "Image is required",
  }),
  name: z.string({ required_error: "Name is required" }),
  website: z.string({ required_error: "Website is required" }),
  location: z.string({ required_error: "Location is required" }),
  employee: z.string({ required_error: "Employee is required" }),
  industry: z.string({ required_error: "Industry is required" }),
  dateFounded: z.string({ required_error: "Date Founded is required" }),
  techStack: z.string().array().nonempty({ message: "Tech Stack must be at least 1 data" }),
  description: z.string({ required_error: "Description is required" }),
});
