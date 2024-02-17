import React from 'react'

const AboutUs = () => {
  return (
    <div className=' w-[447px] lg:h-[254px] md:h-[254px] h-[380px] sm:h-[380px] xl:h-[254px]'>

        <div className=' gap-y-12 p-3 xl:gap-y-8 lg:gap-y-8 md:gap-y-8 sm:gap-y-12  grid xl:text-start lg:text-start md:text-start sm:text-center xl:justify-items-start  lg:justify-items-start md:justify-items-start sm:justify-items-center  justify-items-center text-center '>

            <h1 className='xl:text-5xl font-semibold text-[#0E2368] lg:text-5xl md:text-5xl sm:text-4xl text-4xl  font-poppins pl-1'>About Us</h1>

            <h5 className=' font-openSans text-base px-3 text-[#444957]'>
                lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
            </h5>
            <button className='bg-[#E23744] text-[#ffff] rounded-full p-2 w-40'>Read More</button>
        </div>
    </div>
  )
}

export default AboutUs