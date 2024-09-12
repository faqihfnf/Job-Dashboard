"use client";

import { everviewFormSchema } from "@/lib/form-schema";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TitleForm from "@/components/atoms/TitleForm";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import FieldInput from "@/components/organisms/FieldInput";
import CustomUpload from "@/components/organisms/CustomUpload";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LOCATION_OPTIONS, optionType } from "@/constant";

interface OverviewFormProps {}

const OverviewForm: FC<OverviewFormProps> = ({}) => {
  const form = useForm<z.infer<typeof everviewFormSchema>>({
    resolver: zodResolver(everviewFormSchema),
  });

  const onSubmit = (val: z.infer<typeof everviewFormSchema>) => {
    console.log(val);
  };

  return (
    <div>
      <div className="my-5">
        <TitleForm title="Basic Information" subtitle="This is company information that you can update anytime" />
      </div>
      <Separator className="my-5" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-8 pt-6">
          <FieldInput title="Company Logo" subtitle="This image will be displayed in the job listing">
            <CustomUpload form={form} name="image" />
          </FieldInput>

          <FieldInput title="Company Details" subtitle="Introduce your company core info quickly to users by fill up company details">
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input className="w-[450px]" placeholder="PT. ABC, Tbk" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input className="w-[450px]" placeholder="www.abc.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-[450px]">
                          <SelectValue placeholder="Select your location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {LOCATION_OPTIONS.map((item: optionType, i: number) => (
                          <SelectItem key={item.id + 1} value={item.id}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>
        </form>
      </Form>
    </div>
  );
};
export default OverviewForm;
