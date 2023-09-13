import React,{useEffect} from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {getCoursesData} from "../Redux/TableDataRedecer/action"
const Courses = () => {
  const data = useSelector((state) => state.CourseReducer.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesData());
  }, [dispatch]);
  console.log(data)
  return (
    <div className="bg-[#F4F4F4] w-full ">
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
          {data.map((el)=>{
            return (
              <TableRow>
              <TableCell className="whitespace-nowrap truncate max-w-[100px] font-[400] text-[14px] leading-[19px] text-[#212529]">
               {el.Name}
              </TableCell>
              <TableCell className="whitespace-nowrap truncate max-w-[200px] font-[400] text-[14px] leading-[19px] text-[#212529]">
                {el.Description}
              </TableCell>
              <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
                {el.Instructor}
              </TableCell>
              <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
                {el.Instrument}
              </TableCell>
              <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
               {el.Day_of_week}
              </TableCell>
              <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
                {el.Students}
              </TableCell>
              <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              ${el.Price}
              </TableCell>
              <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529] w-[20px]  ">
               <p className=" bg-[#CFF9DF] text-[12px] p-2 rounded-md">Active</p>
              </TableCell>
              <TableCell className="font-[400] text-[25px] leading-[19px] text-[#212529]">
               <p className="ml-4"><BiDotsVertical/></p> 
              </TableCell>
            </TableRow>
            )
          })}
            
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Courses;
