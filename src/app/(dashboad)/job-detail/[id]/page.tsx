import Link from "next/link";
import React, { FC } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetail";
import prisma from "../../../../../lib/prisma";

type paramsType = {
  id: string;
};

interface JobDetailPageProps {
  params: paramsType;
}

async function getDetailjob(id: string) {
  const job = await prisma.job.findFirst({
    where: {
      id: id,
    },
    include: {
      applicant: {
        include: {
          user: true,
        },
      },
      CategoryJob: true,
    },
  });

  return job;
}

const JobDetailPage: FC<JobDetailPageProps> = async ({ params }) => {
  const job = await getDetailjob(params.id);

  return (
    <div>
      <div className="inline-flex items-center gap-3 mb-5">
        <div>
          <Link href="/job-listings">
            <IoMdArrowRoundBack className="text-3xl mb-2 hover:text-indigo-500" />
          </Link>
        </div>
        <div>
          <div className="text-xl font-semibold mb-1">{job?.roles}</div>
          <div>
            {job?.CategoryJob?.name} - {job?.jobType} - {job?.applicants} of {job?.needs} Hired
          </div>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-8">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetails">Job Detail</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants applicants={job?.applicant} />
        </TabsContent>
        <TabsContent value="jobDetails">
          <JobDetail detail={job} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default JobDetailPage;
