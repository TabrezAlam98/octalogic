import React from "react";
import { HiUsers } from "react-icons/Hi";
import Table from './Table'
import TableReg from "./TableReg";
const Overview = () => {
 
  return (
    <div className="bg-[#F4F4F4] w-full ">
      <p className="text-[#83858B;] text-[28px] font-[700] ml-8 pt-2 mb-5">
        Overview
      </p>
      <div className="grid grid-cols-5 gap-5 w-[95%] m-auto">
        <div className=" flex flex-row border-2  h-[98px] bg-white rounded-lg">
          <div className="w-[32px] h-[32px] rounded-full ml-2 mt-5 bg-[#B2EECF] pl-2 pt-2">
            <HiUsers />
          </div>
          <div className=" w-[70%] h-[46px] mt-3 ml-3 ">
            <p className="text-[22px] font-[400] text-[#212529] font-Nunito font-sans">
              164
            </p>
            <p className="text-[12px] mt-[-3px] text-[#83858B] leading-[16px] font-Nonito font-sans">
              total number of students
            </p>
            <p className="text-right text-[9px] font-[400]  leading-[16px] text-[#B33086]">
              View
            </p>
          </div>
        </div>

        <div className=" flex flex-row border-2  h-[98px] bg-white rounded-lg">
          <div className="w-[32px] h-[32px] rounded-full ml-2 mt-5 bg-[#B2EECF] pl-2 pt-2">
            <HiUsers />
          </div>
          <div className=" w-[70%] h-[46px] mt-3 ml-3 ">
            <p className="text-[22px] font-[400] text-[#212529] font-Nunito font-sans">
              12
            </p>
            <p className="text-[12px] mt-[-3px] text-[#83858B] leading-[16px] font-Nonito font-sans">
              total number of courses
            </p>
            <p className="text-right text-[9px] font-[400]  leading-[16px] text-[#B33086]">
              View
            </p>
          </div>
        </div>
        <div className=" flex flex-row border-2  h-[98px] bg-white rounded-lg">
          <div className="w-[32px] h-[32px] rounded-full ml-2 mt-5 bg-[#B2EECF] pl-2 pt-2">
            <HiUsers />
          </div>
          <div className=" w-[70%] h-[46px] mt-3 ml-3 ">
            <p className="text-[22px] font-[400] text-[#212529] font-Nunito font-sans">
              $2000
            </p>
            <p className="text-[12px] mt-[-3px] text-[#83858B] leading-[16px] font-Nonito font-sans">
              total amount earned
            </p>
            <p className="text-right text-[9px] font-[400]  leading-[16px] text-[#B33086]">
              View
            </p>
          </div>
        </div>
        <div className=" flex flex-row border-2  h-[98px] bg-white rounded-lg">
          <div className="w-[32px] h-[32px] rounded-full ml-2 mt-5 bg-[#B2EECF] pl-2 pt-2">
            <HiUsers />
          </div>
          <div className=" w-[70%] h-[46px] mt-3 ml-3 ">
            <p className="text-[22px] font-[400] text-[#212529] font-Nunito font-sans">
              Guitar
            </p>
            <p className="text-[12px] mt-[-3px] text-[#83858B] leading-[16px] font-Nonito font-sans">
              best performing course
            </p>
            <p className="text-right text-[9px] font-[400]  leading-[16px] text-[#B33086]">
              View
            </p>
          </div>
        </div>
        <div className=" flex flex-row border-2  h-[98px] bg-white rounded-lg">
          <div className="w-[32px] h-[32px] rounded-full ml-2 mt-5 bg-[#B2EECF] pl-2 pt-2">
            <HiUsers />
          </div>
          <div className=" w-[70%] h-[46px] mt-3 ml-3 ">
            <p className="text-[22px] font-[400] text-[#212529] font-Nunito font-sans">
              Flute
            </p>
            <p className="text-[12px] mt-[-3px] text-[#83858B] leading-[16px] font-Nonito font-sans">
              worst performing course
            </p>
            <p className="text-right text-[9px] font-[400]  leading-[16px] text-[#B33086]">
              View
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between mt-10 m-auto w-[95%] h-10 ">
        <p className="font-nurut font-sans text-[16px] font-[700] leading-[21px] tracking-[.4px] text-[#83858B]"> LATEST ENROLMENTS </p>
        <p className="font-nurut font-sans text-[14px] font-[400] leading-[19px]  text-[#901E75]">View All Courses</p>
      </div>

      <div className=" w-[95%] h-[400px] m-auto ">
        <Table/>
      </div>
      
      <div className="flex flex-row justify-between mt-[-60px] m-auto w-[95%] h-10 ">
        <p className="font-nurut font-sans text-[16px] font-[700] leading-[21px] tracking-[.4px] text-[#83858B]"> Best Students </p>
        <p className="font-nurut font-sans text-[14px] font-[400] leading-[19px]  text-[#901E75]">View All Students</p>
      </div>

      <div className=" w-[95%] h-[400px] m-auto ">
      <Table/>
      </div>
    </div>
  );
};

export default Overview;
