import { JOBTYPES } from "@/constant";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z.string({ required_error: "Role is required" }).min(3, { message: "Job Title must be at least 3 characters" }),
  jobType: z.enum(JOBTYPES, { required_error: "Job Type is required" }),
  salaryFrom: z.string({ required_error: "Salary From is required" }),
  salaryTo: z.string({ required_error: "Salary From is required" }),
  categoryId: z.string({ required_error: "Category is required" }),
  requiredSkills: z.string().array().nonempty({ message: "Required Skills must be at least 1 skill" }),
  jobDescription: z.string({ required_error: "Job Description is required" }).min(20, { message: "Job Description must be at least 20 characters" }),
  responsibility: z.string({ required_error: "Job Description is required" }).min(10, { message: "Job Description must be at least 10 characters" }),
  whoYouAre: z.string({ required_error: "Job Description is required" }).min(10, { message: "Job Description must be at least 10 characters" }),
  niceToHaves: z.string({ required_error: "Job Description is required" }).min(10, { message: "Job Description must be at least 10 characters" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must be at least 1 benefit" }),
});
