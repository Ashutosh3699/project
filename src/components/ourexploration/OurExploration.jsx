import React from 'react';
import bgImage1 from  '../../assets/outexp6.png';
import bgImage2 from  '../../assets/outexp4.png';
import bgImage3 from  '../../assets/outexp5.png';
import { FaChevronRight } from "react-icons/fa";

const OurExploration = () => {

  return (
    <div className='w-full relative h-full  opacity-90  py-5 ' >
            <h3 className='flex  justify-center text-3xl pt-4  font-bold  text-slate-500'>Our Exploration</h3>

            <div className='w-[50px] h-[7px]  bg-gradient-to-r from-cyan-500 to-blue-500  mx-auto mt-2' ></div>

            <div className='w-2/3  mx-auto  mt-3 rounded-2xl  flex flex-wrap  shadow-slate-400 border py-10 px-8 justify-around shadow-inner'>

                <div className='h-[350px]  w-[275px] rounded-md overflow-hidden relative cursor-pointer hover:scale-105 hover:shadow-2xl duration-300'>
                    <img src={bgImage1}  alt='argiculture image' className='w-full  h-full object-fill ' />

                    <div className='flex flex-col gap-4 absolute z-10 text-white top-4  justify-start items-center'>
                        <h3 className='text-xl font-bold'>Agriculture</h3>

                        <p className='text-sm  px-5  align-middle'>Equipped with high-tech 
                        sensors, the agriculture drone buzzed silently overhead, capturing detailed images to assess crop health.</p>

                        <div className='mt-24 flex gap-2 items-center'>
                            Learn More   <FaChevronRight />
                        </div>
                    </div>
                </div>

                <div className='h-[350px]  w-[275px] rounded-md overflow-hidden relative cursor-pointer hover:scale-105 hover:shadow-2xl duration-300'>
                    <img src={bgImage2}  alt='argiculture image' className='w-full  h-full object-fill ' />

                    <div className='flex flex-col gap-4 absolute z-10 text-white top-4  justify-start items-center'>
                        <h3 className='text-xl font-bold'>Surveillance</h3>

                        <p className='text-sm  px-5  align-middle'>Equipped with high-tech 
                        sensors, the agriculture drone buzzed silently overhead, capturing detailed images to assess crop health.</p>

                        <div className='mt-24 flex gap-2 items-center'>
                            Learn More   <FaChevronRight />
                        </div>
                    </div>
                </div>

                <div className='h-[350px]  w-[275px] rounded-md overflow-hidden relative cursor-pointer  hover:scale-105 hover:shadow-2xl duration-300'>
                    <img src={bgImage3}  alt='argiculture image' className='w-full  h-full object-fill ' />

                    <div className='flex flex-col gap-4 absolute z-10 text-white top-4  justify-start items-center'>
                        <h3 className='text-xl font-bold'>Consumer</h3>

                        <p className='text-sm  px-5  align-middle'>Equipped with high-tech 
                        sensors, the agriculture drone buzzed silently overhead, capturing detailed images to assess crop health.</p>

                        <div className='mt-24 flex gap-2 items-center'>
                            Learn More   <FaChevronRight />
                        </div>
                    </div>
                </div>

            </div>


    </div>
  )
}

export default OurExploration