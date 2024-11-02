 import Link from "next/link";
 import React from "react";
 import { FaArrowRightLong } from "react-icons/fa6";

 const Discover = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h3 className="font-cormorant text-[80px] font-medium w-[467px] ">
          Discover my featured <span className=" underline">works</span>
        </h3>

        <div className="w-[596px] mt-[48px] mb-[64px] ">
          <ul className="flex justify-between">
            <li className=" line-through ">
              <Link href={"#"}> All </Link>
            </li>
            <li className="">
              <Link href={"#"}> Maternity </Link>
            </li>
            <li className="">
              <Link href={"#"}> Portrait </Link>
            </li>
            <li className="">
              <Link href={"#"}> Travel </Link>
            </li>
            <li className="">
              <Link href={"#"}> Weeding </Link>
            </li>
            <li className="">
              <Link href={"#"}> Others </Link>
            </li>
          </ul>
        </div>

        <div className="w-full">

          <div className="w-full flex justify-center gap-[50px] items-end ">
            <img
              className="w-[316px] h-[350px] "
              src="photos/Headshot.png"
              alt="phots"
            />
            <img
              className="w-[370px] h-[400px] mb-[62px] "
              src="photos/Maternity.png"
              alt="phots"
            />
            <img
              className="w-[316.12px] h-[300px] mb-[33.98px] "
              src="photos/Weeding.png"
              alt="phots"
            />
            <img
              className="w-[316px] h-[400px] "
              src="photos/Portrait.png"
              alt="phots"
            />
          </div>

          <div className="w-full flex justify-center mb-[120px] ">
          <button className="w-[180px] border-b-2 flex gap-[12px] text-[#EF0101] items-center border-[#EF0101] mt-[40px] py-2 ">
                <p className=' text-[18px] font-semibold font-iter '>View All Works</p>
                <p className='text-[24px]'> <FaArrowRightLong /> </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
 };

 export default Discover;
