import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='w-full bg-white h-full'>
        <div className='relative flex flex-col  md:flex-row w-full  h-full'>
            
            <div className='hidden md:block min-h-[100vh]  '>
              <SideBar/>
            </div>
            <div className='block md:hidden h-[100%]  '>
              <SideBar/>
            </div>
            <div className='w-[100%] lg:w-[80%]   mx-auto max-w-6xl py-10 '>
                {/* section / outlet */}
                <Outlet/>
            </div>

        </div>
    
    </div>

  )
}

export default Dashboard