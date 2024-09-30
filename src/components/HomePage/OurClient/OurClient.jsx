import React from 'react'
import Review from './Review';
import image1 from './logo/logo1.jpg';
import image2 from './logo/logo2.jpg';
import image3 from './logo/logo3.jpg';
import image4 from './logo/logo4.png';
import image5 from './logo/logo5.png';
import image6 from './logo/logo6.png';
import image7 from './logo/logo7.png';
import image8 from './logo/logo8.png';

const OurClient = () => {


  return (
    <div className='w-full  py-10 '>

        <div id="client-logo" className=' rounded-lg shadow-lg flex flex-col gap-4 items-center px-8  py-10 bg-[#EEEEEE] w-full md:w-3/4 mx-auto '>
            <h2 className='text-3xl text-slate-500 font-bold'>OUR CLIENTS</h2>
            <div className='w-[50px] h-[7px]  bg-gradient-to-r from-cyan-500 to-blue-500  mx-auto' ></div>
            <p className='text-sm text-slate-700  font-bold opacity-75'>Making our clients happy with inovative drone solutions for surveillance, agriculture and consumer needs</p>

            <div className='flex flex-wrap gap-2 md:gap-x-16 w-full  md:w-2/3  justify-center md:gap-y-6 mt-8 mb-4'>
            {/*client 1 */}
                <div className='w-[100px]  h-[100px] overflow-hidden '>
                    <img  src={image1} alt='client logo' className='w-full object-cover'/>
                </div>
                 {/*client 2 */}
                <div className='w-[100px]  h-[100px] overflow-hidden '>
                    <img  src={image2} alt='client logo' />
                </div>
                 {/*client 3 */}
                <div className='w-[100px]  h-[100px] overflow-hidden '>
                    <img  src={image3} alt='client logo' />
                </div>
                 {/*client 4 */}
                <div className='w-[100px]  h-[100px] overflow-hidden'>
                    <img  src={image4} alt='client logo' />
                </div>
                 {/*client 5 */}
                <div className='w-[100px]  h-[100px] overflow-hidden '>
                    <img  src={image5} alt='client logo' />
                </div>
                 {/*client 6 */}
                <div className='w-[100px]  h-[100px] overflow-hidden '>
                    <img  src={image6} alt='client logo' />
                </div>
                 {/*client 7 */}
                <div className='w-[100px]  h-[100px] overflow-hidden '>
                    <img  src={image7} alt='client logo' />
                </div>
                 {/*client 8 */}
                <div className='w-[100px]  h-[100px] overflow-hidden '>
                    <img  src={image8} alt='client logo' />
                </div>

            </div>

            <div className='flex flex-wrap gap-x-6 w-3/4 md:w-2/3 justify-center  mt-2 mb-4 gap-y-4'>
                <h2 className='text-xl text-slate-400  font-bold'>Reviews</h2>
                <Review/>
            </div>

        </div>

    </div>
  )
}

export default OurClient