import FieldInput from "@/components/organisms/FieldInput";
import React, { FC } from "react";
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import DialogAddTeam from "./DialogAddTeam";
import { CompanyTeam } from "@prisma/client";

interface TeamFormProps {
  teams: CompanyTeam[] | undefined;
}

const TeamForm: FC<TeamFormProps> = ({ teams }) => {
  return (
    <FieldInput title="Basic Information" subtitle="Add team members of your company">
      <div className="w-[65%] mb-5">
        <div className="flex flex-row justify-between items-center">
          <div className="text-lg font-semibold"> {teams?.length} Members</div>
          <DialogAddTeam />
        </div>
        <div className="grid grid-cols-3 gap-5 mt-6">
          {teams?.map((item: CompanyTeam) => (
            <div key={item.id} className="p-3 shadow text-center">
              <div className="w-14 h-14 rounded-full bg-slate-300 mx-auto"></div>
              <div className="mt-4 font-semibold">{item.name}</div>
              <div className="text-slate-400 text-sm">{item.position}</div>
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
