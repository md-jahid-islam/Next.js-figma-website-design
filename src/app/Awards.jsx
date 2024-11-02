import Link from 'next/link'
import React from 'react'

const Awards = () => {
  return (
    <>

    <div className=" w-full flex justify-center gap-[60px] mb-[150px] items-center ">
        <div className="">
            <img src="photos/GroupWithText.png" alt="awards" />
        </div>

        <div className=" text-[18px] font-medium font-DM flex flex-col text-start w-[250px] gap-[10px] ">
            <Link href={'#'} className=' hover:text-[#EF0101] transition-all '> 2021 - The Artist Award </Link>
            <Link href={'#'} className=' hover:text-[#EF0101] transition-all '> 2020 - MKEL/Best Prir </Link>
            <Link href={'#'} className=' hover:text-[#EF0101] transition-all '> 2019 - Portrait Award </Link>
            <Link href={'#'} className=' hover:text-[#EF0101] transition-all '> 2018 - Berlin Talent </Link>
        </div>
    </div>
      
    </>
  )
}

export default Awards
