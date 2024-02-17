import React from 'react'
import pizzaSlice from '../assets/pizzaSlice.jpeg';

const RightFront = () => {
  return (
    <div className='w-full sm:w-full md:w-1/2 xl:w-1/2 lg:w-1/2 '>
        <div className='w-full'>
          <div className='relative'>
          <button className='absolute top-[28px] md:right-[20px]  lg:right-[20px] sm:right-[10px] right-2 xl:right-[20px] border-[#fff] border rounded-full py-3  
            lg:px-7 md:px-7 sm:px-3 px-3 xl:px-7 text-[#FFFFFF]'>Get in Touch
            </button>
          </div>
           
            
            <img src={pizzaSlice} className='mt-[-5px] xl:h-[830px] lg:h-[830px] md:h-[840px] sm:h-[560px] h-[413px] w-full rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-[198.902px]' />
        </div>
    </div>
  )
}

export default RightFront