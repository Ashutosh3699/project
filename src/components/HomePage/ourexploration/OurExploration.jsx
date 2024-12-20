import React from 'react';
import bgImage1 from  './agriculture.png';
import bgImage3 from  './consumer.png';
import bgImage2 from  './surveillance.jpg';
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const OurExploration = () => {

  return (
    <div className='w-full relative h-full  opacity-90  py-5 ' >
            <h2 className='flex  justify-center text-3xl pt-4  font-bold  text-slate-500'>OUR EXPLORATION</h2>

            <div className='w-[50px] h-[7px]  bg-gradient-to-r from-cyan-500 to-blue-500  mx-auto mt-2' ></div>

            <div className= 'w-full md:w-2/3  mx-auto  mt-3 rounded-2xl  flex flex-wrap gap-y-4 shadow-slate-400 border py-10 px-8 justify-around shadow-inner'>

                <div className='h-[350px]  w-[275px] rounded-md overflow-hidden relative cursor-pointer hover:scale-105 hover:shadow-2xl duration-300'>
                    <img src={bgImage1}  alt='argiculture image' className='w-full  h-full object-fill hover:scale-105 duration-500' />

                    <div className='flex flex-col gap-4 absolute z-10 text-white top-4  justify-start items-center'>
                        <h3 className='text-xl font-bold'>Agriculture</h3>

                        <p className='text-sm  flex justify-center items-center w-full px-5 align-middle'>Revolutionizing agriculture with precision drone technology for optimal crop management.</p>

                        <NavLink to={"/our-services/services12348"} className='mt-36 flex gap-2 items-center'>
                            Learn More   <FaChevronRight />
                        </NavLink>
                    </div>
                </div>

                <div className='h-[350px]  w-[275px] rounded-md overflow-hidden relative cursor-pointer hover:scale-105 hover:shadow-2xl duration-300'>
                    <img src={bgImage2}  alt='argiculture image' className='w-full  h-full object-fill hover:scale-105 duration-500' />

                    <div className='flex flex-col gap-4 absolute z-10 text-white top-4  justify-start items-center'>
                        <h3 className='text-xl font-bold'>Surveillance</h3>

                        <p className='text-sm  flex justify-center items-center w-full px-5 align-middle'>Advanced drone surveillance solutions for enhanced security and monitoring.</p>

                        <NavLink to={"/our-services/services12344"} className='mt-36 flex gap-2 items-center'>
                            Learn More   <FaChevronRight />
                        </NavLink>
                    </div>
                </div>

                <div className='h-[350px]  w-[275px] rounded-md overflow-hidden relative cursor-pointer  hover:scale-105 hover:shadow-2xl duration-300'>
                    <img src={bgImage3}  alt='argiculture image' className='w-full  h-full object-fill hover:scale-105 duration-500' />

                    <div className='flex flex-col gap-4 absolute z-10 text-white top-4  justify-start items-center'>
                        <h3 className='text-xl font-bold'>Consumer</h3>

                        <p className='text-sm  flex justify-center items-center w-full px-5 align-middle'>Innovative drone products designed to elevate your everyday experiences.</p>

                        <NavLink to={"/our-services/services12343"} className='mt-36 flex gap-2 items-center'>
                            Learn More   <FaChevronRight />
                        </NavLink>
                    </div>
                </div>

            </div>


    </div>
  )
}

export default OurExploration