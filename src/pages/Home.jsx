import React from 'react'
import Herosection1 from '../components/Herosection/Herosection1';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Weprovide from '../components/Herosection/Weprovide';

const Home = () => {
  return (
    <div  className='w-full  '>

        <div className=' relative  overflow-hidden   w-full'>
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

        <div className=' w-full '>
            <Weprovide/>
        </div>
        
    
    </div>
  )
}

export default Home