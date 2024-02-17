import React from 'react'
import LeftFront from './LeftFront'
import RightFront from './RightFront'

const TopFront = () => {
  return (
    <div className='bg-[#FFFFFF] lg:w-full md:w-full sm:w-full 
    w-auto xl:w-full lg:h-[804px] md:h-fit sm:h-fit xl:h-[804px]'>
      
        <div className=' h-fit flex-col-reverse lg:flex-row sm:flex-col-reverse xl:flex-row md:flex-row flex justify-between gap-x-2'>
        <LeftFront />
        <RightFront />
        </div>
       
    </div>
  )
}

export default TopFront