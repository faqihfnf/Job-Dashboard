import Link from "next/link";
import React, { FC } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Applicants from "@/components/organisms/Applicants";

interface JobDetailProps {}
const JobDetail: FC<JobDetailProps> = ({}) => {
  return (
    <div>
      <div className="inline-flex items-center gap-3 mb-5">
        <div>
          <Link href="/job-listings">
            <IoMdArrowRoundBack className="text-3xl mb-2 hover:text-indigo-500" />
          </Link>
        </div>
        <div>
          <div className="text-xl font-semibold mb-1">Fullstack Developer</div>
          <div>Design . Full-time . 1/10 Hired</div>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-8">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetails">Job Detail</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants />
        </TabsContent>
        <TabsContent value="jobDetails">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};
export default JobDetail;
