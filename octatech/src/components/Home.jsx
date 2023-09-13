import React from "react";
import { BsMenuButtonWide } from "react-icons/bs";
import { MdOutlineQueueMusic,MdOutlineLogout } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Style from "./Home.module.css";
import AllRoutes from "./AllRoutes";
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="w-full  flex flex-row ">
      <div className="w-[10%]  ">
        <img className="w-[48px] h-[48px] ml-10 mt-4 mb-10 " src="https://img.icons8.com/?size=1x&id=8142&format=png"/>
        
        <Link to='/'><Button className={Style.btn1}>
          <div className="flex flex-col background-red-200">
            <p className="text-xl text-[#901E75] h-[18px] mt-[3px] ml-[5px] mb-1">
              <BsMenuButtonWide />
            </p>
            <p className="text-[12px] text-[#901E75]  leading-3">Home</p>
          </div>
        </Button></Link>
        <Link to='/courses'>
        <Button className={Style.btn2}>
          <div className="flex flex-col background-red-200">
            <p className="text-3xl text-[#83858B] h-[18px] mt-[2px] ml-[8px] mb-2">
              <MdOutlineQueueMusic />
            </p>
            <p className="text-[12px] text-[#83858B]  leading-3 mb-2">Courses</p>
          </div>
        </Button>
        </Link>
        
        <Button className={Style.btn3}>
          <div className="flex flex-col background-red-200 ">
            <p className="text-2xl text-[#83858B] h-[18px] mt-[2px] ml-[8px] mb-2">
              <MdOutlineLogout />
            </p>
            <p className="text-[12px] text-[#83858B]  leading-3 mb-2">Logout</p>
          </div>
        </Button>
      </div>
      <div className="w-[90%] h-screen border-2 border-gray-200">
        <AllRoutes/>
      </div>
    </div>
  );
};

export default Home;
