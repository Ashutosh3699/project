import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import IconBtn from '../IconBtn';

const MyProfile = () => {

  const {user} = useSelector((state)=>state.profile);
  console.log(user);
  const navigate = useNavigate();

  return (
    <div className='bg-regal-blue text-gray-50'>

        <h1 className='text-2xl font-bold text-gray-50 mb-6'>My Profile</h1>

        <div className='flex flex-col gap-8 items-start w-11/12 mx-auto'>

          {/* section 1 */}
            <div className=' flex flex-row  w-[80%] justify-between  pr-4  pl-8 items-start  py-8  bg-gray-900 rounded-lg border border-gray-700'>

               <div className='flex gap-6 flex-row  items-center'>
                <div className='w-20 h-20 rounded-full overflow-hidden'>
                  <img src={user?.image}  alt={`profile-${user?.image}`} className='w-full' />
                  </div>

                  <div className='flex flex-col gap-2 items-start'>
                      <p className='text-2xl text-gray-50 font-bold '>{user?.firstName + "  "  + user?.lastName} </p>
                      <p> {user?.email}</p>

                  </div>
               </div>
                <IconBtn
                  text={"Edit"}
                  onclick={()=>{
                    navigate("/dashboard/settings")
                  }}
                  customCLass={" py-2  px-5 rounded-md font-semibold  hover:scale-95 transition-all duration-300 drop-shadow-[0_1px_10px_rgba(255,255,255,0.5)] bg-[#FFD60A]  text-black"}
                />

            </div>
                  {/* secction 2 */}
            <div className=' flex flex-row  w-[80%] justify-between  pr-4  pl-8 items-start   py-8   bg-gray-900 rounded-lg border border-gray-700'>
               
               <div className='flex gap-6 flex-col  items-start'>

                       <h2 className='text-2xl text-gray-50 font-bold '>Address</h2>

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
                  customCLass={" py-2  px-5 rounded-md font-semibold  hover:scale-95 transition-all duration-300 drop-shadow-[0_1px_10px_rgba(255,255,255,0.5)] bg-[#FFD60A]  text-black"}
                />

            </div>
                  {/* section3 */}
            <div className=' flex flex-row  w-[80%] justify-between  pr-4  pl-8 items-start   py-8   bg-gray-900 rounded-lg border border-gray-700'>

                 <div className='flex gap-6 flex-col  items-start w-[70%]'>

                   <h2 className='text-2xl text-gray-50 font-bold '>Personal Details</h2>

                    <div className='flex flex-row justify-between w-full'>

                      <div>
                          <p className='text-md text-gray-500' >First Name</p>
                          <p className='text-lg font-semibold text-gray-50'>{user?.firstName}</p>
                      </div>

                      <div>
                          <p className='text-md text-gray-500'>Last Name:</p>
                          <p className='text-lg font-semibold text-gray-50'>{user?.lastName}</p>
                      </div>
                      
                    </div>

                    <div className='flex flex-row justify-between w-full'>

                        <div>
                            <p className='text-md text-gray-500'>Email</p>
                            <p className='text-lg font-semibold text-gray-5'>{user?.email}</p>
                        </div>

                        <div>
                            <p className='text-md text-gray-500'>Phone Number</p>
                            <p className='text-lg font-semibold text-gray-5'>{user?.accountDetails?.phoneNumber ? (user.accountDetails.phoneNumber) : (<span>Enter Mobile Number</span>)}</p>
                        </div>

                    </div>

                    <div className='flex flex-row justify-between w-full'>

                        <div>
                            <p  className='text-md text-gray-500'>Gender:</p>
                            <p className='text-lg font-semibold text-gray-5'>{user?.accountDetails?.gender  ? (user.accountDetails.gender) : (<span>Add gender</span>)}</p>
                        </div>

                        <div>
                            <p className='text-md text-gray-500'>Date of Birth:</p>
                            <p className='text-lg font-semibold text-gray-5'>{user?.accountDetails?.DOB  ? (user.accountDetails.DOB) : (<span>Enter date of birth</span>)}</p>
                        </div>

                    </div>
                 </div>

                 <IconBtn
                  text={"Edit"}
                  onclick={()=>{
                    navigate("/dashboard/settings")
                  }}
                  customCLass={" py-2  px-5 rounded-md font-semibold  hover:scale-95 transition-all duration-300 drop-shadow-[0_1px_10px_rgba(255,255,255,0.5)] bg-[#FFD60A]  text-black"}
                />

            </div>

        </div>
    
    
    </div>
  )
}

export default MyProfile