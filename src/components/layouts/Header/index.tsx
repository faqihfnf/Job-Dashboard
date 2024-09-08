"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { TiPlus } from "react-icons/ti";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const router = useRouter();

  const navCreateJobPage = () => {
    router.push("/posting-job");
  };
  return (
    <div className=" pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
      <div>
        <div className="font-semibold text-xl">Company Name :</div>
        {/* <div className="font-semibold text-m">Twitter</div> */}
      </div>
      <div>
        <Button onClick={navCreateJobPage} className=" rounded-lg py-3 px-3">
          <TiPlus className="mr-2 text-xl" />
          Post a Job
        </Button>
      </div>
    </div>
  );
};

export default Header;
