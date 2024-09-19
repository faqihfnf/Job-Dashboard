"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { HiDotsVertical } from "react-icons/hi";

interface ButtonActionTableProps {
  url: string;
}
const ButtonActionTable: FC<ButtonActionTableProps> = ({ url }) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(url)} size="icon" variant={"ghost"}>
      <HiDotsVertical className="h-4 w-4" />
    </Button>
  );
};
export default ButtonActionTable;
