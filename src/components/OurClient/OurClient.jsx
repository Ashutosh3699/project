import React from 'react'

const OurClient = () => {


  return (
    <div className='w-full  py-10 bg-stone-400'>

        <div id="client-logo" className=' rounded-lg shadow-lg flex flex-col gap-4 items-center px-8  py-10 bg-[#EEEEEE] w-3/4 mx-auto '>
            <h6 className='text-3xl text-[#6C6B6B] font-bold'>Our Clients</h6>
            <div className='w-[50px] h-[7px]  bg-gradient-to-r from-cyan-500 to-blue-500  mx-auto' ></div>
            <p className='text-sm text-slate-700  font-bold opacity-75'>Sunt eossit porest, aut pa quid magnias  imagnient, nihillam necusae ea nonestrum  quidebis est, ut.</p>

            <div className='flex flex-wrap gap-x-16 w-2/3  justify-center gap-y-6 mt-8 mb-4'>
            {/*client 1 */}
                <div className='w-[100px]  h-[100px] overflow-hidden bg-slate-200'>
                    <img  src='' alt='client logo' />
                </div>
                 {/*client 2 */}
                <div className='w-[100px]  h-[100px] overflow-hidden bg-slate-200'>
                    <img  src='' alt='client logo' />
                </div>
                 {/*client 3 */}
                <div className='w-[100px]  h-[100px] overflow-hidden bg-slate-200'>
                    <img  src='' alt='client logo' />
                </div>
                 {/*client 4 */}
                <div className='w-[100px]  h-[100px] overflow-hidden bg-slate-200'>
                    <img  src='' alt='client logo' />
                </div>
                 {/*client 5 */}
                <div className='w-[100px]  h-[100px] overflow-hidden bg-slate-200'>
                    <img  src='' alt='client logo' />
                </div>
                 {/*client 6 */}
                <div className='w-[100px]  h-[100px] overflow-hidden bg-slate-200'>
                    <img  src='' alt='client logo' />
                </div>
                 {/*client 7 */}
                <div className='w-[100px]  h-[100px] overflow-hidden bg-slate-200'>
                    <img  src='' alt='client logo' />
                </div>
                 {/*client 8 */}
                <div className='w-[100px]  h-[100px] overflow-hidden bg-slate-200'>
                    <img  src='' alt='client logo' />
                </div>

            </div>

            <div className='flex flex-wrap gap-x-6 w-2/3 justify-center  mt-2 mb-4 gap-y-4'>
                <h2 className='text-xl text-slate-400  font-bold'>Reviews</h2>

                <div>
                    {/* reviews */}
                </div>
            </div>

        </div>

    </div>
  )
}

export default OurClient