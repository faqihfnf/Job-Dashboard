"use client";
import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { RiHome4Line, RiMessage3Line, RiBuilding4Line, RiFileUserLine, RiCalendarScheduleLine, RiSettings5Line, RiLogoutBoxLine } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { useRouter } from "next/navigation";
interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const router = useRouter();
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-2xl font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button variant={"ghost"} className="w-full justify-start rounded hover:text-indigo-600 text-lg" onClick={() => router.push("/")}>
              <RiHome4Line className="mr-2 text-xl" />
              Home
            </Button>
            <Button variant={"ghost"} className="w-full justify-start rounded hover:text-indigo-600 text-lg">
              <RiMessage3Line className="mr-2 text-xl" />
              Messages
            </Button>
            <Button variant={"ghost"} className="w-full justify-start rounded hover:text-indigo-600 text-lg">
              <RiBuilding4Line className="mr-2 text-xl" />
              Company Profile
            </Button>
            <Button variant={"ghost"} className="w-full justify-start rounded hover:text-indigo-600 text-lg">
              <RiFileUserLine className="mr-2 text-xl" />
              All Aplicants
            </Button>
            <Button variant={"ghost"} className="w-full justify-start rounded hover:text-indigo-600 text-lg" onClick={() => router.push("/job-listings")}>
              <HiOutlineClipboardDocumentList className="mr-2 text-xl" />
              Job Listing
            </Button>
            <Button variant={"ghost"} className="w-full justify-start rounded hover:text-indigo-600 text-lg">
              <RiCalendarScheduleLine className="mr-2 text-xl" />
              My Schedule
            </Button>
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-2xl font-semibold">Settings</h2>
            <div className="space-y-3">
              <Button variant={"ghost"} className="w-full justify-start rounded hover:text-indigo-600  text-lg">
                <RiSettings5Line className="mr-2 text-xl" />
                Settings
              </Button>
              <Button variant={"ghost"} className="w-full text-red-600 justify-start rounded hover:text-white hover:bg-red-600 text-lg">
                <RiLogoutBoxLine className="mr-2 text-xl" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
