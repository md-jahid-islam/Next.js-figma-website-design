 import React from "react";
 import "./HomeComp.css";
 import Link from "next/link";

 const Homecompo = () => {
  return (
    <>
      <div className="w-full  mainSection ">
        <div className=" OneSection w-full flex items-center justify-end pt-[148px]">
          <div className=" mb-[40px] ">
            <div className="">
              <h1 className="text-[86px] font-cormorant w-[482px] text-white ">
                Love to <span className=" underline">capture</span> the best <span className=" underline">moments</span>
              </h1>
              <p className=" mt-20 text-[18px] font-normal font-DM text-white w-[426px]  ">
                Distinctively re-engineer process-centric growth strategies
                without granular process improvements.
              </p>
            </div>

            <div className=" h-[300px] w-fit mt-[76px]  ">
              <img
                className=" w-full h-[250px] "
                src="photos/groupImage.png"
                alt="lazy bunch"
              />
            </div>
          </div>

          <div className="w-[496px] h-[26px] text-white font-cormorant rotate-[-90deg] mr-[-40px] ">
            <ul className="flex justify-between underline">
              <li>
                <Link href={"#"}> Facebook </Link>
              </li>
              <li>
                <Link href={"#"}> Twitter </Link>
              </li>
              <li>
                <Link href={"#"}> Instagram </Link>
              </li>
              <li>
                <Link href={"#"}> Linkedin </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
 };

 export default Homecompo;
