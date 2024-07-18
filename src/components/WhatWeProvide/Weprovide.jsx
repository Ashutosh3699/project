import React from 'react';
import bgImage from "../../assets/blackBg.png";


const Weprovide = () => {
  return (
    <div className='w-full relative h-full  opacity-90 text-white py-5 ' 
        style={{backgroundImage: `url(${bgImage})`}}
    >
            <h3 className='flex  justify-center text-3xl pt-4'>What we Provide</h3>

            <div className='w-[50px] h-[7px]  bg-gradient-to-r from-cyan-500 to-blue-500  mx-auto mt-2' ></div>

            <div className='flex flex-wrap gap-7 justify-around mx-5  md:mx-20  mt-8  py-6'>
                <div className='w-[250px]  h-[150px]  bg-black opacity-60  overflow-hidden rounded-lg'>
                    <img  src="" alt='image1'/>
                    <div className='w-full md:w-[60%] text-sm  font-light mx-auto '>
                            Design, Manufacturing & Assembly of Ready to Fly Drones
                    </div>

                </div>
                <div className='w-[250px]  h-[150px] bg-black opacity-60  overflow-hidden rounded-lg'>
                    <img  src='' alt='image1'/>
                    <div className='w-[60%] text-sm  font-light mx-auto '>
                     LiDAR (Light Detection and Ranging Services)
                    </div>

                </div>
                <div className='w-[250px]  h-[150px] bg-black opacity-60  overflow-hidden rounded-lg'>
                    <img  src='' alt='image1'/>
                    <div className='w-[60%] text-sm  font-light mx-auto '>
                    Cutting Edge UAV Imagery Processing
                    </div>

                </div>
                <div className='w-[250px]  h-[150px] bg-black opacity-60  overflow-hidden rounded-lg'>
                    <img  src='' alt='image1'/>
                    <div className='w-[60%] text-sm  font-light mx-auto '>
                    Extremely Accurate Land Survey Services
                    </div>

                </div>
                <div className='w-[250px]  h-[150px] bg-black opacity-60  overflow-hidden rounded-lg'>
                    <img  src='' alt='image1'/>
                    <div className='w-[60%] text-sm  font-light mx-auto '>
                    Industry Leading Photogrammetric Services
                    </div>

                </div>
                <div className='w-[250px]  h-[150px] bg-black opacity-60  overflow-hidden rounded-lg'>
                    <img  src='' alt='image1'/>
                    <div className='w-[60%] text-sm  font-light mx-auto '>
                    Advanced Architectural Service
                    </div>

                </div>
                <div className='w-[250px]  h-[150px] bg-black opacity-60  overflow-hidden rounded-lg'>
                    <img  src='' alt='image1'/>
                    <div className='w-[60%] text-sm  font-light mx-auto '>
                    Geographic Information System
                    </div>

                </div>
                <div className='w-[250px]  h-[150px] bg-black opacity-60  overflow-hidden rounded-lg'>
                    <img  src='' alt='image1'/>
                    <div className='w-[60%] text-sm  font-light mx-auto '>
                    Crop Health Analysis
                    </div>

                </div>


            </div>

    </div>
  )
}

export default Weprovide