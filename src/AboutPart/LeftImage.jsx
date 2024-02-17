import React from 'react'
import aboutImage from '../assets/aboutImage.jpeg';
import AboutUs from './AboutUs';

const LeftImage = () => {
  return (
    <div className='w-full h-full flex items-center justify-center '>
        <div className='h-[467px] bg-[#F0F1F7] justify-evenly flex items-center  w-full'>
            <img src={aboutImage} className='hidden md:flex sm:hidden lg:flex xl:flex  h-[468px] w-[384px]' />
            <AboutUs />
        </div>

    </div>
  )
}

export default LeftImage