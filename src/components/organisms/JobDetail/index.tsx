import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { PartyPopperIcon } from "lucide-react";
import React, { FC } from "react";
interface JobDetailProps {}
const JobDetail: FC<JobDetailProps> = ({}) => {
  return (
    <div>
      <div className="grid grid-cols-3 w-full gap-5">
        <div className="col-span-2 space-y-10">
          <div>
            <div className="text-3xl font-semibold">Descriptions</div>
            <div className="text-gray-500 mt-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore possimus ea magnam laudantium quia provident saepe? Voluptate eaque repellat, tempore est molestias aut excepturi modi!</p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Responsibilities</div>
            <div className="text-gray-500 mt-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore possimus ea magnam laudantium quia provident saepe? Voluptate eaque repellat, tempore est molestias aut excepturi modi!</p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Who Your Are</div>
            <div className="text-gray-500 mt-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore possimus ea magnam laudantium quia provident saepe? Voluptate eaque repellat, tempore est molestias aut excepturi modi!</p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Nice To Haves</div>
            <div className="text-gray-500 mt-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore possimus ea magnam laudantium quia provident saepe? Voluptate eaque repellat, tempore est molestias aut excepturi modi!</p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-3xl font-semibold">About This Job</div>
          <div className="shadow p-3 text-center my-6">
            1 <span className="text-slate-500">of 10 capacity</span>
            <Progress className="mt-3" value={10} />
          </div>
          <div className="mb-10 space-y-5">
            <div className="flex justify-between">
              <div className="text-slate-600"> Apply Before</div>
              <div className="font-semibold"> 12 Sep 2024</div>
            </div>
            <div className="flex justify-between">
              <div className="text-slate-600"> Job Posted on</div>
              <div className="font-semibold"> 12 Aug 2024</div>
            </div>
            <div className="flex justify-between">
              <div className="text-slate-600"> Job Type</div>
              <div className="font-semibold"> Full Time</div>
            </div>
            <div className="flex justify-between">
              <div className="text-slate-600"> Salary</div>
              <div className="font-semibold"> Rp. 10.000.000 - Rp. 20.000.000</div>
            </div>

            <Separator />
            <div className="my-10">
              <div className="text-3xl font-semibold mb-4">Category</div>
              <div className="space-x-5">
                <Badge>Fullstack Developer</Badge>
              </div>
            </div>

            <Separator />
            <div className="my-10">
              <div className="text-3xl font-semibold mb-4">Required Skills</div>
              <div className="space-x-5">
                {["HTML", "CSS", "JavaScript"].map((item: string, i: number) => (
                  <Badge variant={"outline"} key={i}>
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />
      <div>
        <div className="text-3xl font-semibold ">Perks & Benefits</div>
        <div className="text-slate-500"> This job comes with several perks and benefits</div>
        <div className="grid grid-cols-4 gap-5 mt-9">
          {[0, 1, 2].map((item: number) => (
            <div key={item}>
              <PartyPopperIcon className="w-7 h-7 mb-5 text-primary" />
              <div className="text-lg font-semibold mb-3">BPJS</div>
              <div className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus vel iusto, aliquam ipsam velit!</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default JobDetail;
