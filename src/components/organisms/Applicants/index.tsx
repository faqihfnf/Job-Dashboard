import React, { FC } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { JOB_APPLICANTS_COLUMNS, JOB_APPLICANTS_DATA } from "@/constant";
import { Badge } from "@/components/ui/badge";
import ButtonActionTable from "../ButtonActionTable";

interface ApplicantsProps {}
const Applicants: FC<ApplicantsProps> = ({}) => {
  return (
    <Table>
      <TableCaption>A list of your recent applicants.</TableCaption>
      <TableHeader>
        <TableRow>
          {JOB_APPLICANTS_COLUMNS.map((item: string, i: number) => (
            <TableHead key={item + i}>{item}</TableHead>
          ))}
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {JOB_APPLICANTS_DATA.map((item: any, i: number) => (
          <TableRow key={item.name + i}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.appliedDate}</TableCell>
            <TableCell>
              <ButtonActionTable url="" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default Applicants;
