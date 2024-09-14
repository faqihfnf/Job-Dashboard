"use client";

import FieldInput from "@/components/organisms/FieldInput";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { socialMediaFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface SocialMediaFormProps {}

const SocialMediaForm: FC<SocialMediaFormProps> = ({}) => {
  const form = useForm<z.infer<typeof socialMediaFormSchema>>({
    resolver: zodResolver(socialMediaFormSchema),
  });

  const onSubmit = (val: z.infer<typeof socialMediaFormSchema>) => {
    console.log(val);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FieldInput title="Basic Information" subtitle="Add elsewhere links to your company profile. you can add only username without full">
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook</FormLabel>
                  <FormControl>
                    <Input className="w-[450px]" placeholder="http://facebook.com/name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram</FormLabel>
                  <FormControl>
                    <Input className="w-[450px]" placeholder="http://instagram.com/name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>linkedin</FormLabel>
                  <FormControl>
                    <Input className="w-[450px]" placeholder="http://linkedin.com/name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="youtube"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>youtube</FormLabel>
                  <FormControl>
                    <Input className="w-[450px]" placeholder="http://youtube.com/name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FieldInput>
        <div className="flex justify-end">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500">
            {" "}
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default SocialMediaForm;
