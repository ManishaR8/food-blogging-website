import React from 'react'
import foodTruck from '../assets/foodTruck.png';

const LeftFront = () => {
  return (
    <div className=' w-full sm:w-full md:w-1/2 xl:w-1/2 lg:w-1/2 xl:h-[804px] lg:h-[804px] md:h-[804px] sm:h-[470px] h-[470px]'>

        <div className='flex flex-col h-full justify-evenly '>
            <div className='px-28 pb-2'>
                <img src={foodTruck} className='xl:flex lg:flex md:flex sm:hidden hidden w-[107px] h-[83px] ' />
            </div>

            <div className='flex flex-col lg:justify-start md:justify-start sm:justify-center xl:justify-start lg:items-start xl:items-start md:items-start sm:items-center items-center xl:px-28 lg:px-28 md:pl-20 sm:pl-0 pl-2  gap-y-8 pb-10 lg:text-start md:text-start sm:text-center text-center xl:text-start'>
            <h1 
                className='lg:text-[50px] md:text-[42px] xl:text-[50px] sm:text-[38px] text-[38px] xl:w-[345px] lg:w-[345px] lg:h-[207px] md:h-[207px] md:w-[345px] xl:h-[207px] font-bold leading-[69px] sm:w-[278px] sm:h-[180px] w-[278px] h-[180px] font-sourceSans' 
            >
                Discover the <span className='text-[#E23744]'>Best </span>Food and Drinks
            </h1>
            <h4 
                className=' font-normal leading-[27.41px] text-[16.44px] h-[55px] text-[#444957] w-[345px] font-openSans'
            >
                    Naturally made Healthcare Products for the better care & support of your body
            </h4>
            <button className='w-[190px] h-[63px] py-[14px] px-[34px] bg-[#E23744] text-[#fff] rounded-full'>Explore Now!</button>
            </div>
        </div>
    </div>
  )
}

export default LeftFront