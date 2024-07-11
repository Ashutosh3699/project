import React from 'react'
import Herosection1 from '../components/Herosection1';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Home = () => {
  return (
    <div  className='w-full h-[450px] overflow-hidden  relative '>

        <div  className='z-0'>
            <Herosection1/>
        </div>
        <div className='absolute z-10  text-4xl  top-1/2  left-0  cursor-pointer'>
            <FaChevronLeft/>
        </div>
        <div className='absolute z-10  text-4xl  top-1/2  right-0  cursor-pointer'>
            <FaChevronRight/> 
        </div>
    
    </div>
  )
}

export default Home