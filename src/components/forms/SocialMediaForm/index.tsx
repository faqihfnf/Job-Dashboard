"use client";

import FieldInput from "@/components/organisms/FieldInput";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { socialMediaFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CompanySocialMedia } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface SocialMediaFormProps {
  detail: CompanySocialMedia | undefined;
}

const SocialMediaForm: FC<SocialMediaFormProps> = ({ detail }) => {
  const form = useForm<z.infer<typeof socialMediaFormSchema>>({
    resolver: zodResolver(socialMediaFormSchema),
    defaultValues: {
      facebook: detail?.facebook,
      instagram: detail?.instagram,
      twitter: detail?.twitter,
      linkedin: detail?.linkedin,
      youtube: detail?.youtube,
    },
  });

  const { data: session } = useSession();
  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (val: z.infer<typeof socialMediaFormSchema>) => {
    try {
      const body = {
        ...val,
        companyId: session?.user.id,
      };
      await fetch("/api/company/social-media", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      await router.refresh();
      toast({
        title: "Success",
        description: "Successfully added social media",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add social media",
        variant: "destructive",
      });
      console.log(error);
    }
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
              name="twitter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>twitter</FormLabel>
                  <FormControl>
                    <Input className="w-[450px]" placeholder="http://twitter.com/name" {...field} />
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
