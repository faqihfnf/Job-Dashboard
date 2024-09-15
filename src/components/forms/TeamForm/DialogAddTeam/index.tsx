"use client";

import React, { FC } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TiPlus } from "react-icons/ti";
import { useForm } from "react-hook-form";
import { teamFormSchema } from "@/lib/form-schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
interface DialogAddTeamProps {}

const DialogAddTeam: FC<DialogAddTeamProps> = ({}) => {
  const form = useForm<z.infer<typeof teamFormSchema>>({
    resolver: zodResolver(teamFormSchema),
  });

  const onSubmit = (val: z.infer<typeof teamFormSchema>) => {
    console.log(val);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <TiPlus className="text-2xl mb-1" /> Add Members
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Team</DialogTitle>
          <DialogDescription>Fill the field to add new team member</DialogDescription>
        </DialogHeader>
        <Separator />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input placeholder="Position" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram</FormLabel>
                    <FormControl>
                      <Input placeholder="instagram" {...field} />
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
                    <FormLabel>Linkedin</FormLabel>
                    <FormControl>
                      <Input placeholder="linkedin" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button className="bg-emerald-600 hover:bg-emerald-500">Save</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default DialogAddTeam;
