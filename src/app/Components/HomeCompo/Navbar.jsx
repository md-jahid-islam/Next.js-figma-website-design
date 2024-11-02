import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className=" absolute top-[37px] flex items-center justify-between w-full ">
        <div className="LOgoPageLink flex items-center ">
          <Link href={"/"} className="Logo ml-[150px] mr-[129px]">
            <img src="photos/Logo.png" alt="logo" />
          </Link>
          <ul className="flex gap-10 font-iter font-normal text-[16px] text-white ">
            <li className=" hover:underline hover:shadow-sm hover:scale-105 active:scale-100">
              <Link href={"#"}> About </Link>
            </li>
            <li className=" hover:underline hover:shadow-sm hover:scale-105 active:scale-100">
              <Link href={"#"}> Project </Link>
            </li>
            <li className=" hover:underline hover:shadow-sm hover:scale-105 active:scale-100">
              <Link href={"#"}> Blog </Link>
            </li>
            <li className=" hover:underline hover:shadow-sm hover:scale-105 active:scale-100">
              <Link href={"#"}> Pricing </Link>
            </li>
            <li className=" hover:underline hover:shadow-sm hover:scale-105 active:scale-100">
              <Link href={"#"}> Studio </Link>
            </li>
            <li className=" hover:underline hover:shadow-sm hover:scale-105 active:scale-100">
              <Link href={"#"}> Contact </Link>
            </li>
          </ul>
        </div>

        <button className="manuIcon mr-[194px] text-[32px] text-white hover:shadow-sm hover:scale-95 active:scale-110 ">
          <FaBars />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
