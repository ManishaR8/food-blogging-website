import React from 'react'

const CardLayer = ({imgSrc , head }) => {
  return (

        <div className='h-[554px] w-[381px] border-2 border-[#93A2D361] rounded-[20.94px] py-6 px-6  flex flex-col justify-around'>
            <img src={imgSrc} className='h-[257px] w-[326px] rounded-[21px]'/>
            
            <div className='grid w-[329.02px] h-[194.52px] gap-y-2 pl-2'>
            <h1 className='font-poppins text-[#0E2368] text-2xl font-semibold'>{head}</h1>
            <p className='text-[#444957] font-openSans'>
                Plorem Ipsum is simply dummy text of the printing and typesetting. lorem Ipsum has been the industry's standard....
            </p>
            <button className='text-[#424961] border-4 rounded-full w-36'>Read More</button>
            </div>
           
        </div>

  )
}

export default CardLayer