import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import IconBtn from '../IconBtn';
import { FiEdit } from "react-icons/fi";

const MyProfile = () => {

  const {user} = useSelector((state)=>state.profile);
  console.log(user);
  const navigate = useNavigate();

  return (
    <div className='bg-white text-gray-500 '>

        <h1 className='text-2xl pl-3 font-bold text-gray-500 mb-6'>My Profile</h1>

        <div className='flex flex-col gap-8 items-start w-full lg:w-11/12 mx-auto'>

          {/* section 1 */}
            <div className=' flex flex-row w-full  lg:w-[80%] justify-between  pr-4 pl-4 md:pl-8 items-start 
             py-8  bg-zinc-300 rounded-lg border border-gray-700'>

               <div className='flex gap-3 md:gap-6 flex-row  items-center'>
                <div className=' w-10 h-10   md:w-20 md:h-20 rounded-full overflow-hidden'>
                  <img src={user?.image}  alt={`profile-${user?.image}`} className='w-full' />
                  </div>

                  <div className='flex flex-col gap-2 items-start text-gray-700'>
                      <p className='text-2xl text-gray-700 font-bold '>{user?.firstName + "  "  + user?.lastName} </p>
                      <p> {user?.email}</p>
                  </div>
               </div>
                <IconBtn
                  text={"Edit"}
                  onclick={()=>{
                    navigate("/dashboard/settings")
                  }}
                  customCLass={" py-2  hidden md:block   px-5 rounded-md font-semibold  hover:scale-95 transition-all duration-300 drop-shadow-[0_1px_10px_rgba(255,255,255,0.5)] bg-blue-300 text-black"}
                />
                <FiEdit onclick={()=>{
                    navigate("/dashboard/settings")
                  }}  className='md:hidden text-blue-200'/>

            </div>
                  {/* secction 2 */}
            <div className=' flex flex-row w-full  lg:w-[80%]  justify-between  pr-4  pl-8 items-start   py-8   bg-zinc-300 rounded-lg border border-gray-700'>
               
               <div className='flex gap-6 flex-col  items-start'>

                       <h2 className='text-2xl text-gray-700 font-bold '>Address</h2>

                      <p>{
                        user?.accountDetails?.address ? (user?.accountDetails?.address) : (<span>Please add your address</span>)
                      }
                        </p>
               </div>

               <IconBtn
                  text={"Edit"}
                  onclick={()=>{
                    navigate("/dashboard/settings")
                  }}
                  customCLass={" py-2  hidden md:block   px-5 rounded-md font-semibold  hover:scale-95 transition-all duration-300 drop-shadow-[0_1px_10px_rgba(255,255,255,0.5)] bg-blue-300  text-black"}
                />
                <FiEdit onclick={()=>{
                    navigate("/dashboard/settings")
                  }}  className='md:hidden text-blue-200'/>

            </div>
                  {/* section3 */}
            <div className=' flex flex-row  w-full  lg:w-[80%]  justify-between  pr-4 pl-3 sm:pl-8 items-start   py-8   bg-zinc-300 rounded-lg border border-gray-700'>

                 <div className='flex gap-6 flex-col  items-start w-[95%]  sm:w-[70%]'>

                   <h2 className='text-2xl text-gray-700 font-bold '>Personal Details</h2>

                    <div className='flex flex-row justify-between w-full'>

                      <div>
                          <p className='text-md text-gray-700' >First Name</p>
                          <p className=' text-md sm:text-lg font-semibold text-gray-700'>{user?.firstName}</p>
                      </div>

                      <div>
                          <p className='text-md text-gray-500'>Last Name:</p>
                          <p className='text-md sm:text-lg font-semibold text-gray-700'>{user?.lastName}</p>
                      </div>
                      
                    </div>

                    <div className='flex flex-col gap-y-4  sm:flex-row justify-between w-full'>

                        <div>
                            <p className='text-md text-gray-700'>Email</p>
                            <p className='text-md sm:text-lg font-semibold text-gray-5'>{user?.email}</p>
                        </div>

                        <div>
                            <p className='text-md text-gray-700'>Phone Number</p>
                            <p className='text-md sm:text-lg font-semibold text-gray-700'>{user?.accountDetails?.phoneNumber ? (user.accountDetails.phoneNumber) : (<span>Enter Mobile Number</span>)}</p>
                        </div>

                    </div>

                    <div className='flex flex-row justify-between w-full'>

                        <div>
                            <p  className='text-md text-gray-700'>Gender:</p>
                            <p className='text-md sm:text-lg font-semibold text-gray-700'>{user?.accountDetails?.gender  ? (user.accountDetails.gender) : (<span>Add gender</span>)}</p>
                        </div>

                        <div>
                            <p className='text-md text-gray-700'>Date of Birth:</p>
                            <p className='text-md sm:text-lg font-semibold text-gray-700'>{user?.accountDetails?.DOB  ? (user.accountDetails.DOB) : (<span>Enter date of birth</span>)}</p>
                        </div>

                    </div>
                 </div>

                 <IconBtn
                  text={"Edit"}
                  onclick={()=>{
                    navigate("/dashboard/settings")
                  }}
                  customCLass={" py-2  hidden md:block   px-5 rounded-md font-semibold  hover:scale-95 transition-all duration-300 drop-shadow-[0_1px_10px_rgba(255,255,255,0.5)] bg-blue-300 text-black"}
                />
                <FiEdit onclick={()=>{
                    navigate("/dashboard/settings")
                  }}  className='md:hidden text-blue-300'/>

            </div>

        </div>
    
    
    </div>
  )
}

export default MyProfile