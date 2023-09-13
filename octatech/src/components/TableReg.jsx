import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getregData} from "../Redux/TableDataRedecer/action"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableReg = () => {
  const data = useSelector((state) => state.CourseReducer.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getregData());
  }, [dispatch]);
  console.log(data)
  return (
    <div className="w-full bg-white rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-[700] text-[14px] leading-[19px] text-[#212529] ">
              Reg. No
            </TableHead>
            <TableHead className="font-[700] text-[14px] leading-[19px] text-[#212529]">
              F. Name
            </TableHead>
            <TableHead className="font-[700] text-[14px] leading-[19px] text-[#212529]">
              L. Name
            </TableHead>
            <TableHead className="font-[700] text-[14px] leading-[19px] text-[#212529]">
              Courses #
            </TableHead>
            <TableHead className="font-[700] text-[14px] leading-[19px] text-[#212529]">
              Total Fees
            </TableHead>
            <TableHead className="font-[700] text-[14px] leading-[19px] text-[#212529]">
              Reg. Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((ele)=>{
           return(
            <TableRow key={ele.reg_n}>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              {ele.reg_n}
            </TableCell>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              {ele.f_name}
            </TableCell>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
            {ele.l_name}
            </TableCell>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              {ele.course_qty}
            </TableCell>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              {ele.total_fees}
            </TableCell>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              {ele.enr_date}
            </TableCell>
          </TableRow>
           )
          })}
          
        </TableBody>
      </Table>
    </div>
  );
};

export default TableReg;
