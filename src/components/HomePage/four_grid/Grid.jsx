import React from 'react';
import image1 from "../four_grid/images/01.jpg";
import image2 from "../four_grid/images/02.jpg";
import image3 from "../four_grid/images/03.jpg";
import image4 from "../four_grid/images/04.jpg";


const Grid = () => {
  return (
    <div className='w-full flex flex-wrap gap-4  mx-auto  py-5 px-5  justify-center items-center '>

        <div className= 'w-[95%] md:w-[48%] overflow-hidden  relative'>
             <img src={image1}  alt='image1'/>
             <div className='absolute z-10 px-4 py-2 top-0 md:top-4 w-full flex flex-col gap-y-2 items-center  '>
              <h1 className='text-xl md:text-4xl  text-white'>KRISHIMITRA A-10H</h1>
              {/* <button className='py-1 px-10 text-md  text-white rounded-full  border-2 border-white  shadow-2xl
              hover:bg-white hover:bg-opacity-20  transition-all duration-300'>Buy Now  </button> */}
          </div>
        </div>

        <div className='w-[95%] md:w-[48%] overflow-hidden  relative' >
            <img src={image2}  alt='image1'/>
            <div className='absolute z-10 px-4 py-2 top-0 md:top-4 w-full flex flex-col gap-y-2 items-center  '>
              <h1 className='text-xl md:text-4xl  text-gray-400'>KRISHIMITRA A-10H</h1>
              {/* <button className='py-1 px-10 text-md  text-white rounded-full  border-2 border-white  shadow-2xl
              hover:bg-white hover:bg-opacity-20  transition-all duration-300'>Buy Now  </button> */}
          </div>
        </div>

        <div className='w-[95%] md:w-[48%] overflow-hidden relative '>
            <img src={image3}  alt='image1'/>
            <div className='absolute z-10 px-4 py-2 top-0 md:top-4 w-full flex flex-col gap-y-2 items-center  '>
              <h1 className='text-xl md:text-4xl  text-white'></h1>
              {/* <button className='py-1 px-10 text-md  text-white rounded-full  border-2 border-white  shadow-2xl
              hover:bg-white hover:bg-opacity-20  transition-all duration-300'>Buy Now  </button> */}
          </div>
            
        </div>

        <div className='w-[95%] md:w-[48%] overflow-hidden relative '>
            <img src={image4}  alt='image1'/>
            <div className='absolute z-10 px-4 py-2 top-0 md:top-4 w-full flex flex-col gap-y-2 items-center  '>
              <h1 className='text-xl md:text-4xl  text-white'></h1>
              {/* <button className='py-1 px-10 text-md  text-white rounded-full  border-2 border-white  shadow-2xl
              hover:bg-white hover:bg-opacity-20  transition-all duration-300'>Buy Now  </button> */}
          </div>
           
        </div>
    
    </div>
  )
}

export default Grid