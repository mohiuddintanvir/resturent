import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";

const UpperHeader = () => {
  const socillist = [
    
    <FaFacebook  className="hover:text-[#FFCD4B]"/>,
    <FaInstagram  className="hover:text-[#FFCD4B]"/>,
    <IoLogoYoutube  className="hover:text-[#FFCD4B]"/>,
    <FaTiktok  className="hover:text-[#FFCD4B]"/>,
  ];
  return (
    <div className="bg-black p-1 text-white  text-sm">
      <div className="flex justify-center items-center gap-[20rem] ">
        <div className="flex gap-10">
          <p  className="flex items-center gap-1 hover:text-[#FFCD4B]">
            <CiLocationOn /> Find a Store
          </p>
          <p className="flex items-center gap-1 hover:text-[#FFCD4B]">
            <TbTruckDelivery /> Order Tracking
          </p>
        </div>

        <div>
          <p>100% Secure delivery without contacting the courier</p>
        </div>
        <div className="flex gap-5 ">{socillist}</div>
      </div>
    </div>
  );
};

export default UpperHeader;
