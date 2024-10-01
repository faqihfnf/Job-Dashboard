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

export const overviewFormSchema = z.object({
  image: z.any(),
  name: z.string({ required_error: "Name is required" }),
  website: z.string({ required_error: "Website is required" }),
  location: z.string({ required_error: "Location is required" }),
  employee: z.string({ required_error: "Employee is required" }),
  industry: z.string({ required_error: "Industry is required" }),
  dateFounded: z.date({ required_error: "dateFounded is required" }),
  techStack: z.string({ required_error: "Tech Stack is required" }).array().nonempty({ message: "Tech Stack must be at least 1 data" }),
  description: z.string({ required_error: "Description is required" }),
});

export const socialMediaFormSchema = z.object({
  facebook: z.string({ required_error: "Facebook is required" }),
  instagram: z.string({ required_error: "Instagram is required" }),
  twitter: z.string({ required_error: "Twitter is required" }),
  linkedin: z.string({ required_error: "Linkedin is required" }),
  youtube: z.string({ required_error: "Youtube is required" }),
});

export const teamFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  position: z.string({ required_error: "Position is required" }),
  instagram: z.string({ required_error: "Instagram is required" }),
  linkedin: z.string({ required_error: "Linkedin is required" }),
});

export const signInFormSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email({ message: "Invalid email" }),
  password: z.string({ required_error: "Password is required" }),
});

export const signUpFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }).email({ message: "Invalid email" }),
  password: z.string({ required_error: "Password is required" }),
});
