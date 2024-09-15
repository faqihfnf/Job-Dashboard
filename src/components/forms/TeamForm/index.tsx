import FieldInput from "@/components/organisms/FieldInput";
import React, { FC } from "react";
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";

interface TeamFormProps {}

const TeamForm: FC<TeamFormProps> = ({}) => {
  return (
    <FieldInput title="Basic Information" subtitle="Add team members of your company">
      <div className="w-[65%] mb-5">
        <div className="flex flex-row justify-between items-center">
          <div className="text-lg font-semibold"> 2 Members</div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-6">
          {[1, 2, 3].map((item: number) => (
            <div key={item} className="p-3 shadow text-center">
              <div className="w-14 h-14 rounded-full bg-slate-300 mx-auto"></div>
              <div className="mt-4 font-semibold">John Doe</div>
              <div className="text-slate-400 text-sm">CEO</div>
              <div className="mt-5 inline-flex mx-auto text-slate-500 gap-1 ">
                <RiInstagramFill className="w-6 h-6 hover:text-slate-800" />
                <RiLinkedinBoxFill className="w-6 h-6 hover:text-slate-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </FieldInput>
  );
};
export default TeamForm;
