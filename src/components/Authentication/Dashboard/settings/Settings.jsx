import React from 'react'
import { useSelector } from 'react-redux'
import ProfileUpdateForm from './ProfileUpdateForm';
import ChangePassword from './ChangePassword';

const Settings = () => {

  const {loading:profileLoading} = useSelector((state)=>state.profile);
  const {loading:authLoading} = useSelector((state)=>state.auth);

  if(profileLoading || authLoading){

    return <div>...loading</div>
  }


  return (
    <div className='w-full bg-white  text-gray-600 h-full' >

      <h2 className='text-2xl font-bold text-gray-700 mb-6'>Edit Profile</h2>

      <div className='flex flex-col gap-8 items-start w-full md:w-11/12 mx-auto'>
          <div className=' flex flex-col w-full  md:w-[80%] justify-between  pr-4  pl-8 items-start  py-8  bg-zinc-300 rounded-lg border border-gray-700'>
              <h3 className='text-xl font-semibold text-gray-800'>Profile Information</h3>
              <ProfileUpdateForm   /> 
          </div>
          <div className='flex flex-col l w-full  md:w-[80%] justify-between gap-6  pr-4  pl-8 items-start  py-8  bg-zinc-300 rounded-lg border border-gray-700'>
            <h3 className='text-xl font-semibold text-gray-800'>Password</h3>
            <ChangePassword/>
          </div>
            {/* delete section */}
      </div>
    
    
    </div>
  )
}

export default Settings