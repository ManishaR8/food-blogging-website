import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const MorePart = () => {
  return (
    <div>
        <div className='flex w-[438px] xl:h-[186px] lg:h-fit md:h-fit sm:h-fit h-fit justify-between lg:flex-row xl:flex-row md:flex-col sm:flex-col flex-col gap-y-1'>

        <div className='w-[157px] xl:h-[145px] lg:h-[145px] md:h-[129px] sm:h-[129px] h-[129px] grid xl:gap-y-4 lg:gap-y-4 md:gap-y-1 sm:gap-y-1 gap-y-1 pl-[4.5rem] sm:pl-[4.5rem] lg:pl-0  xl:pl-0 md:pl-[4.5rem]'>

            <h1 className='text-lg text-[#0E2368] font-semibold'>More</h1>
            <p className='text-[#646874]'>About Us</p>
            <p className='text-[#646874]'>Products</p>
            <p className='text-[#646874]'>Career</p>
            <p className='text-[#646874]'>Contact Us</p>
        </div>
        <div className='flex flex-col-reverse xl:flex-col md:flex-col-reverse lg:flex-col sm:flex-col-reverse gap-y-5 items-center sm:items-center md:items-center xl:items-start lg:items-start'>

            <div className='flex gap-x-4 gap-y-4 flex-col'>
                <h1 className='hidden sm:hidden md:hidden lg:flex xl:flex text-[#0E2368] font-semibold'>Social Links</h1>
                <div className='flex gap-x-5'>
                <FaInstagram size={22} />
                <FaTwitter size={22} />
                <FaFacebookF size={22} />
                </div>
                
            </div>
            <div className=' pt-20 text-[#646874]'>
              <p>&copy; 2012 Food Truck Example</p>  
            </div>
        </div>

        </div>
        
    </div>
  )
}

export default MorePart