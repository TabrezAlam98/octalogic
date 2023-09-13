import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const table = () => {
  return (
    <div className="w-full bg-white rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-[700] text-[14px] leading-[19px] text-[#212529] ">
              Enr. No
            </TableHead>
            <TableHead className="font-[700] text-[14px] leading-[19px] text-[#212529]">
              S. Name
            </TableHead>
            <TableHead className="font-[700] text-[14px] leading-[19px] text-[#212529]">
              C. Name
            </TableHead>
            <TableHead className="font-[700] text-[14px] leading-[19px] text-[#212529]">
              Fees
            </TableHead>
            <TableHead className="font-[700] text-[14px] leading-[19px] text-[#212529]">
              Enr. Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              INV001
            </TableCell>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              Paid
            </TableCell>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              Credit Card
            </TableCell>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              $250.00
            </TableCell>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              $250.00
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default table;
