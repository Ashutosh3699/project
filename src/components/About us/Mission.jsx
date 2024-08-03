import React from 'react';
import missionimage from './mission.jpg';
import vissionimage from './vission.jpg';

const Mission = () => {
  return (
    <div className='w-[87%] lg:w-2/3  mx-auto my-10  space-y-5'>

        <h2 className='text-3xl  font-extrabold  text-cyan-500'>Mission And Vision</h2>

        <div className='flex flex-wrap w-full gap-5 '>

            <div className='px-5 py-4  bg-[#D9D9D9] w-full  md:w-3/4'>
                <h2 className='text-xl md:text-2xl text-white font-bold'>Our Mission</h2>
                <p className=' text-md md:text-lg font-semibold text-white'>
                    Our mission is to leverage advanced drone technology to enhance efficiency, sustainability, and 
                    profitability across various industries. By integrating innovative UAV solutions, we aim to contribute to the 
                    betterment of humanity, reducing time, cost, and labor while improving economic and health outcomes.
                </p>
            </div>

            <div className='flex justify-center items-center object-cover overflow-hidden w-full md:w-1/5 bg-[#D9D9D9]'>
                <img src={missionimage} alt='mission' className="scale-125"  />
            </div>
        </div>

        <div className='flex flex-wrap w-full gap-5 '>

            <div className='flex justify-center items-center object-cover  overflow-hidden w-full md:w-1/5 bg-[#D9D9D9]'>
                <img src={vissionimage} alt='mission'  className=' scale-150' />
            </div>

            <div className='px-5 py-4  bg-[#D9D9D9]   w-full  md:w-3/4'>
                <h2 className='text-xl md:text-2xl text-white font-bold'>Our Vision</h2>
                <p className='text-md md:text-lg font-semibold text-white'>
                To revolutionize industries through the unparalleled power of drone technology, creating a world where 
                efficiency, sustainability, and human potential are maximized.
                </p>
            </div>

        </div>
    
    
    </div>
  )
}

export default Mission