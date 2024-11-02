import React from 'react'
import { IoMdHand } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";



const InjoyText = () => {
  return (
    <>

    <div className="w-full flex justify-center gap-[30px] mb-[150px] ">
        <div className=" w-[138px] flex gap-[16px] ">
            <p className=' text-[24px] font-bold font-cormorant '>Hi there!</p> <p className=' text-[#FFDD67] text-[36px]'> <IoMdHand /> </p>
        </div>
        <div className=" w-[432px] ">
            <p className=' text-[20px] font-normal font-DM '>You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal. You can express yourself however you want and whenever you  free.</p>
        </div>
        <div className=" w-[432px] ">
            <p className=' text-[20px] font-normal font-DM '>You can customize a template or make your own from scratch, with an immersive library at your disposal.</p>

            <button className="w-[180px] border-b-2 flex gap-[12px] text-[#EF0101] items-center border-[#EF0101] mt-[40px] py-2 ">
                <p className=' text-[18px] font-semibold font-iter '>Contact with Me</p>
                <p className='text-[24px]'> <FaArrowRightLong /> </p>
            </button>
        </div>
    </div>
      
    </>
  )
}

export default InjoyText
