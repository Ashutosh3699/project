import React, { useState } from 'react'
import Herosection1 from '../components/Herosection/Herosection1';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Weprovide from '../components/Herosection/Weprovide';
import OurExploration from '../components/ourexploration/OurExploration';
import Herosection2 from '../components/Herosection/Herosection2';
import Herosection3 from '../components/Herosection/Herosection3';

const Home = () => {

    const [slide, setSlide] = useState(1);


  return (
    <div  className='w-full  '>

        <div className=' relative  overflow-hidden   w-full'>
            <div  className='z-0 duration-300'>

                {
                  slide === 1 ? (<Herosection1/>) : (slide === 2 ? (<Herosection2/>) : (slide === 3 ? (<Herosection3/>) : (<Herosection1/>)))
                }
            </div>
            <div className='absolute z-10  text-4xl  top-1/2  left-10  cursor-pointer bg-black opacity-40 rounded-full 
            flex justify-center items-center px-3 py-3  text-white  hover:animate-bounce'
            onClick={() => {setSlide(slide === 1 ? (3): (slide-1))}}
            >
                <FaChevronLeft />
            </div>
            <div className='absolute z-10  text-4xl  top-1/2  right-10  cursor-pointer bg-black opacity-40 rounded-full 
            flex justify-center items-center px-3 py-3  text-white hover:animate-bounce'
            onClick={() => {setSlide(slide === 3 ? (1): (slide+1))}}
            >
                <FaChevronRight/> 
            </div>
        </div>

        <div className=' w-full '>
            <Weprovide/>
        </div>

        <div>
          <OurExploration/>
        </div>
        
    
    </div>
  )
}

export default Home