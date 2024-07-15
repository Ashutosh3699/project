import React from 'react'

const AboutUsHero = () => {
  return (
    <div className='w-full py-8  bg-[#AAAAAA]'>
        <h2 className='pl-60 mb-4 font-bold text-2xl   select-none text-white'>About us</h2>

        <div  className='w-2/3 mx-auto flex flex-wrap gap-5'>
            <div className='flex flex-col w-1/2  gap-4 font-semibold text-lg text-white'>
                <p>Aeromat Creative Labs Pvt Ltd is a pioneering company dedicated to 
                revolutionizing the drone technology landscape. </p>
                <p>Since our inception in 2017, we have been committed to delivering cutting-edge solutions in the design, 
                manufacturing, and assembly of ready-to-fly drones for diverse applications. </p>
                <p>Our expertise spans multiple sectors, including agriculture, surveillance, mapping, 
                consumer drones, and military use.</p>
            </div>

            <div className='w-1/3 bg-gray-300 object-fill  overflow-hidden flex justify-center items-center'>
                <img src='' alt='image' />
            </div>
        </div>
    </div>
  )
}

export default AboutUsHero