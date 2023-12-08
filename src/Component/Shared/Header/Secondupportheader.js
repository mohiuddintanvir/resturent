import React from "react";
import logo from "../../../img/logo.png";
import { FaUser } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { GiShoppingCart } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaGift } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Secondupportheader = () => {
  const addlist = [
    <FaUser className="text-[1.5rem] text-black   " />,
    <FcLike className="text-[1.5rem] text-black  " />,
    <GiShoppingCart className="text-[1.5rem] text-black  " />,
  ];
  return (
    <div className="bg-white w-full h-20 flex items-center justify-center gap-20">
      {/* Logo */}

      <div className="mt-7">
        <img src={logo} alt="" className=" h-[20rem] " />
      </div>
      <div className="flex justify-center items-center border-2 border-[#Ffdf00] rounded-full w-[24rem]">
        {/* search ber  */}
        <input
          type="text"
          placeholder="Search"
          className="input  w-[20rem] bg-white "
        />
        <FaSearch className="hover:text-[#Ffdf00]" />
      </div>

      <div className="flex gap-5">
        <p className="flex items-center gap-2">
          <TbTruckDelivery className="text-[3.4rem] text-green-600" />
          free delivery
        </p>
        <p className="flex items-center gap-2">
          <FaGift className="text-[2.5rem]  text-[#Ffdf00]" />
          Daily Offers
        </p>
      </div>
      {/*  */}
      <div className="flex gap-5">{addlist}</div>
    </div>
  );
};

export default Secondupportheader;
