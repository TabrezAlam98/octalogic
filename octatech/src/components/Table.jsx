import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getoverviewData} from "../Redux/TableDataRedecer/action"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const table = () => {
  const overviewData = useSelector((state) => state.CourseReducer.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getoverviewData());
  }, [dispatch]);
  console.log(overviewData)
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
          {overviewData.map((el)=>{
           return(
            <TableRow key={el.enr_no}>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              {el.enr_no}
            </TableCell>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              {el.s_name}
            </TableCell>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
            {el.c_name}
            </TableCell>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              {el.fees}
            </TableCell>
            <TableCell className="font-[400] text-[14px] leading-[19px] text-[#212529]">
              {el.enr_date}
            </TableCell>
          </TableRow>
           )
          })}
          
        </TableBody>
      </Table>
    </div>
  );
};

export default table;
