import React from 'react'
import foodTruck from '../assets/foodTruck.png';
import Contact from './Contact';
import MorePart from './MorePart';
import SocialLinks from './SocialLinks';

const Bottom = () => {
  return (
    <div className=' bg-[#F8F8F8] w-full lg:h-[362px] xl:h-[362px] md:h-[608px] sm:h-[628px] h-[628px]'>

        <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row  sm:flex-col w-full justify-around h-full items-center pt-5 font-sourceSans'>
            <div className='py-6 pb-9'>
                <img 
                  src={foodTruck} 
                  className='xl:w-[161px] w-[75px] h-[58px] sm:w-[75px] sm:h[-58px] md:w-[75px] md:h-[58px] xl:h-[125px] lg:w-[161px] lg:h-[125px]' />
            </div>
            
            <Contact />
            <MorePart />
            <SocialLinks />
         </div>
    </div>
  )
}

export default Bottom