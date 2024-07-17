import React from 'react'

const Mission = () => {
  return (
    <div className='w-2/3  mx-auto my-10  space-y-5'>

        <h1 className='text-3xl  font-extrabold  text-cyan-500'>Mission And Vision</h1>

        <div className='flex flex-wrap w-full gap-5 '>

            <div className='px-5 py-4  bg-[#D9D9D9]  w-3/4'>
                <h1 className='text-2xl text-white font-bold'>Our Mission</h1>
                <p className='text-lg font-semibold text-white'>
                    Our mission is to leverage advanced drone technology to enhance efficiency, sustainability, and 
                    profitability across various industries. By integrating innovative UAV solutions, we aim to contribute to the 
                    betterment of humanity, reducing time, cost, and labor while improving economic and health outcomes.
                </p>
            </div>

            <div className='flex justify-center items-center object-cover overflow-hidden w-1/5 bg-[#D9D9D9]'>
                <img src='' alt='mission'  />
            </div>
        </div>

        <div className='flex flex-wrap w-full gap-5 '>

            <div className='flex justify-center items-center object-cover overflow-hidden w-1/5 bg-[#D9D9D9]'>
                <img src='' alt='mission'  />
            </div>

            <div className='px-5 py-4  bg-[#D9D9D9]  w-3/4'>
                <h1 className='text-2xl text-white font-bold'>Our Vision</h1>
                <p className='text-lg font-semibold text-white'>
                    Our mission is to leverage advanced drone technology to enhance efficiency, sustainability, and 
                    profitability across various industries. By integrating innovative UAV solutions, we aim to contribute to the 
                    betterment of humanity, reducing time, cost, and labor while improving economic and health outcomes.
                </p>
            </div>

        </div>
    
    
    </div>
  )
}

export default Mission