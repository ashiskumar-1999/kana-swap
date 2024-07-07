import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex flex-row h-[6.5rem] items-center p-6 bg-slate-300 rounded-b-2xl gap-4">
      <div className=" flex flex-row relative w-[24.4rem]">
        <input
          className="w-full h-14 px-6 py-4 rounded-2xl bg-slate-100 text-gray-100 focus:outline-none"
          placeholder="Your Balance"
        />
      </div>
      <div className=" flex flex-row relative w-[24.4rem]">
        <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 size-4 text-gray-100" />
        <input
          className="w-full h-14 px-12 py-4 rounded-2xl bg-slate-100 text-gray-100 focus:outline-none"
          placeholder="Search"
        />
      </div>
      <button id="connect-wallet" className="">
        <div className="flex flex-row w-[24.4rem] h-14 px-6 py-4 rounded-2xl bg-slate-100 items-center gap-2 text-green">
          <FaRegUserCircle className="size-6" />
          <p className="font-manrope text-sm font-extrabold">Connect Wallet</p>
        </div>
      </button>
      <button id="settings" className="size-14 p-4 rounded-2xl bg-slate-100 ">
        <CiSettings className="size-6 text-gray-100" />
      </button>
    </div>
  );
};

export default Header;
