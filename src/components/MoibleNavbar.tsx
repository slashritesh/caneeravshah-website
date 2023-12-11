"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDownSLine, RiCloseLine, RiMenu3Line } from "react-icons/ri";


const MoibleNavbar = () => {
  const [slide , setslide] = useState(true)
  return (
    <div className="sm:hidden block">
      <div>
        <RiMenu3Line onClick={()=>setslide(true)} className="text-xl font-semibold" />
      </div>
      <div className={`absolute sm:hidden justify-center h-screen w-full bg-white top-0 z-10 overflow-hidden ${slide == true ? 'right-0 duration-300 ease-in' : 'right-96 hidden duration-300 ease-out'}`}>
        <RiCloseLine onClick={()=>setslide(false)} className="text-2xl absolute top-5 right-5 font-semibold" />
        <div className="flex w-full px-10 flex-col mt-20">
          <Link
            onClick={()=>setslide(false)}
            className="p-3 text-center hover:bg-slate-100 rounded-md my-2"
            href={"/"}
          >
            Home
          </Link>
          <div>
            <Link
              onClick={()=>setslide(false)}
              className="p-3 text-center flex justify-center items-center hover:bg-slate-100 rounded-md my-2"
              href={"/services"}
            >
              Services
            </Link>
          </div>
          <Link
            onClick={()=>setslide(false)}
            className="p-3 text-center hover:bg-slate-100 rounded-md my-2"
            href={"/contact"}
          >
            Contact
          </Link>
          <Link
            onClick={()=>setslide(false)}
            className="p-3 text-center hover:bg-slate-100 rounded-md my-2"
            href={"/about"}
          >
            About us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoibleNavbar;
