import React from 'react'
import bgImage from "./heroimage3.png";
import "./herosection.css";

const Herosection3 = () => {
  return (
    <div className='h-full relative'>
      <img  src={bgImage} className='w-full h-full object-cover  hero-animation' />
      <div className='absolute z-10 px-4 py-2 top-4 w-full flex flex-col gap-y-2 items-center  drop-animation'>
          <h1 className='text-3xl md:text-6xl  text-white'>KRISHIMITRA A-10H</h1>
          <p className=' text-lg md:text-xl font-semibold text-white opacity-85'>Agricultural Drone</p>
          <button className='py-1 px-10 text-md  text-white rounded-full  border-2 border-white  shadow-2xl
           hover:bg-white hover:bg-opacity-20  transition-all duration-300'>Buy Now  </button>
      </div>

    </div>
  )
}

export default Herosection3