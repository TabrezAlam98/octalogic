import React from "react";
import { AiOutlineSearch } from 'react-icons/Ai';
import { BiDotsVertical } from 'react-icons/Bi';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const Courses = () => {
  return (
    <div className="bg-[#F4F4F4] w-full h-screen">
      <p className="text-[#83858B;] text-[28px] font-[700] ml-8 pt-2 mb-5">
        Courses
      </p>
      <div className="flex flex-row justify-between mt-10 m-auto w-[95%] h-10 ">
        <p className="font-nurut font-sans text-[16px] font-[700] leading-[21px] tracking-[.4px] text-[#83858B]">
          COURSE LIST
        </p>
        <div className="flex flex-row mb-2 bg-white w-[220px] rounded-m">
         <p className="text-m mt-2 mr-1 ml-3 text-[#83858B]"><AiOutlineSearch/></p>
          <input placeholder="search" className="w-full" />
        </div>
      </div>
      <div className="w-[95%] m-auto bg-white rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="h-[70px]">
              <TableHead className="font-[400] text-[14px] leading-[19px] text-[#212529] ">
                Name
              </TableHead>
              <TableHead className="font-[400] text-[14px] leading-[19px] text-[#212529]">
                Description
              </TableHead>
              <TableHead className="font-[400] text-[14px] leading-[19px] text-[#212529]">
                Instructor
              </TableHead>
              <TableHead className="font-[400] text-[14px] leading-[19px] text-[#212529]">
                Instrument
              </TableHead>
              <TableHead className="font-[400] text-[14px] leading-[19px] text-[#212529]">
                Day of Week
              </TableHead>
              <TableHead className="font-[400] text-[14px] leading-[19px] text-[#212529]">
                # of Students
              </TableHead>
              <TableHead className="font-[400] text-[14px] leading-[19px] text-[#212529]">
                Price
              </TableHead>
              <TableHead className="font-[400] text-[14px] leading-[19px] text-[#212529]">
                Status
              </TableHead>
              <TableHead className="font-[400] text-[14px] leading-[19px] text-[#212529] ">
                Actions
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
              <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
                $250.00
              </TableCell>
              <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
                $250.00
              </TableCell>
              <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529] w-[20px]  bg-[#CFF9DF]">
                $250.00
              </TableCell>
              <TableCell className="font-[400] text-[25px] leading-[19px] text-[#212529]">
               <p className="ml-4"><BiDotsVertical/></p> 
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Courses;
