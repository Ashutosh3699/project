import React, { useState } from 'react'
import Herosection1 from '../components/HomePage/Herosection/Herosection1';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Weprovide from '../components/HomePage/WhatWeProvide/Weprovide';
import OurExploration from '../components/HomePage/ourexploration/OurExploration';
import Herosection2 from '../components/HomePage/Herosection/Herosection2';
import Herosection3 from '../components/HomePage/Herosection/Herosection3';
import OurClient from '../components/HomePage/OurClient/OurClient';
import Grid from '../components/HomePage/four_grid/Grid';

const Home = () => {

    const [slide, setSlide] = useState(1);


  return (
    <div  className='w-full  '>

        {/* hero-section */}
        <div className=' relative  overflow-hidden   w-full'>
            <div  className='z-0 duration-300 aspect-square md:aspect-auto'>

                {
                  slide === 1 ? (<Herosection1/>) : (slide === 2 ? (<Herosection2/>) : (slide === 3 ? (<Herosection3/>) : (<Herosection1/>)))
                }
            </div>
            <div className='absolute z-10 text-xl  md:text-4xl  top-1/2 left-2 md:left-10  cursor-pointer bg-black opacity-40 rounded-full 
            flex justify-center items-center px-3 py-3  text-white  hover:animate-bounce'
            onClick={() => {setSlide(slide === 1 ? (3): (slide-1))}}
            >
                <FaChevronLeft />
            </div>
            <div className='absolute z-10 text-xl  md:text-4xl  top-1/2 right-2 md:right-10  cursor-pointer bg-black opacity-40 rounded-full 
            flex justify-center items-center px-3 py-3  text-white hover:animate-bounce'
            onClick={() => {setSlide(slide === 3 ? (1): (slide+1))}}
            >
                <FaChevronRight/> 
            </div>
        </div>

          {/* What we provide */}
        <div className=' w-full '>
            <Weprovide/>
        </div>

         {/* our expolartion */}
        <div>
          <OurExploration/>
        </div>

        {/* content here left */}

        <div className='w-full  space-y-3 my-2'>
                <h2 className='flex  justify-center text-3xl pt-4  font-bold  text-slate-500'>OUR PRODUCTS</h2>
                <div className='w-[50px] h-[7px]  bg-gradient-to-r from-cyan-500 to-blue-500  mx-auto mt-2' ></div>

                <Grid/>
        </div>
        

        {/* Client section */}
        <OurClient/>

        
        
    
    </div>
  )
}

export default Home