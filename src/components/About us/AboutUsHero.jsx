import React from 'react';
import image1 from "../../assets/image1.png";
import "./animate.css"

const AboutUsHero = () => {
  return (
    <div className='w-full py-8  bg-[#ffffff]'>
        <h2 className='pl-60 mb-4 font-bold text-4xl   select-none text-cyan-500'>About us</h2>

        <div  className='w-2/3 mx-auto flex flex-wrap gap-5'>
            <div className='flex flex-col w-1/2  gap-4 font-semibold text-lg text-gray-400'>
                <p>Aeromat Creative Labs Pvt Ltd is a pioneering company dedicated to 
                revolutionizing the drone technology landscape. </p>
                <p>Since our inception in 2017, we have been committed to delivering cutting-edge solutions in the design, 
                manufacturing, and assembly of ready-to-fly drones for diverse applications. </p>
                <p>Our expertise spans multiple sectors, including agriculture, surveillance, mapping, 
                consumer drones, and military use.</p>
            </div>

            <div className='w-1/3 bg-gray-300 object-fill  overflow-hidden flex justify-center items-center rounded-lg'>
                <img src={image1} alt='image' className='w-full h-full object-cover about-us-hero-animate' />
            </div>
        </div>
    </div>
  )
}

export default AboutUsHero