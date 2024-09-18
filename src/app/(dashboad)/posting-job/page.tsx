"use client";
import { jobFormSchema } from "@/lib/form-schema";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import FieldInput from "@/components/organisms/FieldInput";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { JOBTYPES } from "@/constant";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import InputSkills from "@/components/organisms/InputSkills";
import CKEditor from "@/components/organisms/CKEditor";
import InputBenefits from "@/components/organisms/InputBenefits";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { CategoryJob } from "@prisma/client";
import { useSession } from "next-auth/react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

interface PostJobPageProps {}
const PostJobPage: FC<PostJobPageProps> = ({}) => {
  const { data } = useSWR<CategoryJob[]>("/api/job/categories", fetcher);

  const { data: session } = useSession();

  const { toast } = useToast();

  const [editorLoaded, setEditorLoaded] = useState(false);

  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
      // benefits: [],
    },
  });

  const router = useRouter();

  const onSubmit = async (val: z.infer<typeof jobFormSchema>) => {
    try {
      const body: any = {
        applicants: 0,
        benefits: val.benefits,
        categoryId: val.categoryId,
        companyId: session?.user.id!!,
        datePosted: moment().toDate(),
        description: val.jobDescription,
        dueDate: moment().add(1, "M").toDate(),
        jobType: val.jobType,
        needs: 20,
        niceToHaves: val.niceToHaves,
        requiredSkills: val.requiredSkills,
        responsibility: val.responsibility,
        roles: val.roles,
        salaryFrom: val.salaryFrom,
        salaryTo: val.salaryTo,
        whoYouAre: val.whoYouAre,
      };

      console.log(body);
      await fetch("/api/job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      router.push("/job-listings");
    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again!",
        variant: "destructive",
      });
      console.log(error);
    }
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      <div className="inline-flex items-center gap-2 cursor-pointer hover:text-indigo-500">
        <IoMdArrowRoundBack className="text-2xl mb-1" />
        <span className="text-xl font-semibold">Post a Job</span>
      </div>

      <div className="my-5">
        <div className="text-lg font-semibold">Basic Information</div>
        <div className="text-slate-400">List out your top perks and benefits</div>
      </div>
      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-8 pt-6">
          {/* //! Form Job Title Start */}
          <FieldInput title="Job Title" subtitle="Job titles must be described in one position">
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="w-[450px]" placeholder="e.g Software Engineer" {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>Minimal 10 characters</FormDescription>
                </FormItem>
              )}
            />
          </FieldInput>
          {/* //! Form Job Title End */}

          {/*//? Form Type of Employment Start */}
          <FieldInput title="Type of Employment" subtitle="Select your type of employment">
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {JOBTYPES.map((item: string, i: number) => (
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel className="font-normal">{item}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          {/*//? Form Type of Employment Start */}

          {/*//* Form Salary Start */}
          <FieldInput title="Salary" subtitle="Enter your salary range">
            <div className="w-[450px] flex flex-row justify-between items-center">
              <FormField
                control={form.control}
                name="salaryFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="w-full" placeholder="Rp.5000.000,-" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className="text-slate-400 text-center flex flex-auto justify-center ">to</span>
              <FormField
                control={form.control}
                name="salaryTo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="w-full" placeholder="Rp.10.000.000,-" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>
          {/*//* Form Salary End */}

          {/*//! Form Category Start */}
          <FieldInput title="Category" subtitle="Select your job category">
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Select Job Categories</FormLabel> */}
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-[450px]">
                        <SelectValue placeholder="Select your job category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {data?.map((item: any) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          {/*//! Form Category End */}

          {/*//? Form Required Sklills Start */}
          <FieldInput title="Required Skills" subtitle="Add required skills for the job">
            <InputSkills form={form} name="requiredSkills" label="Add Skill" />
          </FieldInput>
          {/*//? Form Required Sklills End */}

          {/*//* Form Job Description Start */}
          <FieldInput title="Job Description" subtitle="Enter your job description">
            <CKEditor form={form} name="jobDescription" editorLoaded={editorLoaded} />
          </FieldInput>
          <FieldInput title="Responsibilities" subtitle="Outline the core responsibilities of the position">
            <CKEditor form={form} name="responsibility" editorLoaded={editorLoaded} />
          </FieldInput>
          <FieldInput title="Who You Are" subtitle="Add your preferred candidate qualifications">
            <CKEditor form={form} name="whoYouAre" editorLoaded={editorLoaded} />
          </FieldInput>
          <FieldInput title="Nice To Haves" subtitle="Add nice to haves skill for the role to encourage a more diserve set of candidates to apply">
            <CKEditor form={form} name="niceToHaves" editorLoaded={editorLoaded} />
          </FieldInput>
          {/*//* Form Job Description Start */}

          {/*//! Form Benefits Start */}
          <FieldInput title="Perks and Benefits" subtitle="Encourage more people to apply by sharing the attractive rewards and benefits">
            <InputBenefits form={form} />
          </FieldInput>
          {/*//! Form Benefits End */}

          <div className="flex justify-end">
            <Button className="bg-emerald-600 hover:bg-emerald-500" size={"lg"}>
              Review Job
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default PostJobPage;
