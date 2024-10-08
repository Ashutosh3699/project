import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='w-full bg-regal-blue h-full'>
        <div className='relative flex flex-row-reverse w-full  h-full'>
            
            <div className='w-full mx-auto max-w-6xl py-10 '>
                {/* section / outlet */}
                <Outlet/>
            </div>
            <div className='min-h-[100vh]'>
              <SideBar/>
            </div>

        </div>
    
    </div>

  )
}

export default Dashboard