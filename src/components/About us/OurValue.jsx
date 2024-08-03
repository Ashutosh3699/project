import React from 'react'

const OurValue = () => {
  return (
    <div className='w-[90%]  my-5  mx-auto flex flex-col  gap-6  '>
         <h2 className='mx-auto font-extrabold text-4xl text-cyan-500'>Our Values</h2>

         <div className='w-full border  flex flex-wrap gap-7  rounded-xl  px-8  py-10 bg-[#F6F6F6]  shadow-inner  justify-center items-center'>

                <div className='md:w-[200px]  rounded-xl  bg-[#606060] flex flex-col px-4  items-center py-7  text-white  shadow-inner shadow-gray-300'>
                    <h3  className=' font-semibold text-lg mb-4'>
                    Absolute Reliability
                    </h3>
                    <p className='text-sm mb-4'>
                    We consistently exceed industry standards in delivering our products and 
                    services through innovative techniques and a dedicated team of experts.
                    </p>
                </div>

                <div className='md:w-[200px]   rounded-xl  bg-[#606060] flex flex-col px-4  items-center py-12  text-white  shadow-inner shadow-gray-300'>
                    <h3  className=' font-semibold text-lg mb-4'>
                    Innovative Flexibility
                    </h3>
                    <p className='text-sm mb-4'>
                    We tailor our Products & Services to meet your particular needs, as we realize each task is one of a kind
                    </p>
                </div>

                <div className='md:w-[200px]   rounded-xl  bg-[#606060] flex flex-col px-4  items-center py-12  shadow-inner shadow-gray-300  text-white'>
                    <h3  className=' font-semibold text-lg mb-4'>
                    Versatility
                    </h3>
                    <p className='text-sm mb-4'>
                    Our Incredible range of Products, as well as Multi skilled and accredited UAV personnel, with the ability to 
perform
                    </p>
                </div>

                <div className='md:w-[200px]  rounded-xl  bg-[#606060] flex flex-col px-4  items-center py-12  text-white  shadow-inner shadow-gray-300'>
                    <h3  className=' font-semibold text-lg mb-4'>
                    Complete SAFETY
                    </h3>
                    <p className='text-sm mb-4'>
                    Our work is performed to the strictest adherence of all required safety protocols with regards to personnel 
accreditation
                    </p>
                </div>

                <div className='md:w-[200px]   rounded-xl  bg-[#606060] flex flex-col px-3  items-center py-16  text-white  shadow-inner shadow-gray-300'>
                    <h3  className=' font-semibold text-md mb-4'>
                    Complete Commitment
                    </h3>
                    <p className='text-sm mb-4'>
                    From project inception through to subsequent data acquisition and delivery – 100% ON TIME, EVERY TIME
                    </p>
                </div>

         </div>

    </div>
  )
}

export default OurValue