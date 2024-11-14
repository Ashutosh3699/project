import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {updateProfile} from "../../../../services/operations/profileApi"


const ProfileUpdateForm = () => {

    const {token} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
     } = useForm();

     const submitForm=(data)=>{

         data.phoneNumber = `${data.contactNumber}`
         console.log("data is : ", data);
        dispatch(updateProfile(data,token));
     }
    

  return (
    <form  onSubmit={handleSubmit(submitForm)}
        className='flex flex-col gap-4 w-full lg:w-10/12 mx-auto mt-6'>

        <div className='flex flex-col  md:flex-row justify-between items-start'>
            {/* firstName */}
            <div  className='flex flex-col gap-1 items-start  my-4'>
                <label  htmlFor='firstName'  className='text-md text-gray-50 font-semibold pl-4 flex gap-1  items-start'>
                firstName 
                </label>
                <input
                    type='text'
                    placeholder='Enter firstName'
                    name='firstName'
                    id='firstName'
                    {...register('firstName')}
                    className='w-full  px-5 py-3 font-semibold text-md text-gray-200 bg-gray-800  rounded-md border 
                      border-gray-400 shadow-inner  shadow-gray-300'
                />
            </div>
            {/* lastName */}
            <div  className='flex flex-col gap-1 items-start  my-4'>
              <label  htmlFor='lastName'  className='text-md text-gray-50 font-semibold pl-4 flex gap-1  items-start'>
              lastName 
              </label>
              <input
                  type='text'
                  placeholder='Enter lastName'
                  name='lastName'
                  id='lastName'
                  {...register('lastName')}
                  className='w-full  px-5 py-3 font-semibold text-md text-gray-25 bg-gray-800  rounded-md border 
                    border-gray-400 shadow-inner  shadow-gray-300'
              />
          </div>

        </div>

        {/* section2 */}
        <div className='flex flex-col  md:flex-row justify-between items-start'>
            {/* date of birth */}
            <div  className='flex flex-col gap-1 items-start  my-4'>
                <label  htmlFor='DOB'  className='text-md text-gray-50 font-semibold pl-4 flex gap-1  items-start'>
                dateOfBirth 
                </label>
                <input
                    type='date'
                    placeholder='Enter dateOfBirth'
                    name='DOB'
                    id='DOB'
                    {...register('DOB')}
                    className='w-full  px-5 py-3 font-semibold text-md text-gray-200 bg-gray-800  rounded-md border 
                    border-gray-400 shadow-inner  shadow-gray-300'
                />
            </div>
            {/* phone Number */}
            <div className='flex flex-col gap-2'>

                            <label htmlFor='contactNumber' className=' text-white font-semibold'>Phone Number</label>   
                                <input
                                    type='number'
                                    name='contactNumber'
                                    id='contactNumber'
                                    placeholder='12345 67890'
                                    className='px-5 py-3  text-gray-50 bg-gray-800  text-md font-edu-sa
                            rounded-md border border-gray-400  shadow-gray-400 shadow-inner  '
                                    {...register("contactNumber",  
                                    {   maxLength: {value:10, message:"Invalid Phone Number"},
                                        minLength:{value:8, message:"Invalid Phone Number"} })}
                                />
             </div>

        </div>

        {/* section 3 */}
       
        {/* gender */}
        <div className='flex flex-col justify-between  items-start'>
            <legend className='text-md text-gray-50 font-semibold pl-4 flex gap-1  items-start'>Gender</legend>
            <div className='flex flex-row gap-4 text-white px-4 py-1'>
                <label className=' flex ceonter items-center gap-1'>Male
                    <input 
                        type="radio"
                        id="male" 
                        name="gender" 
                        value="Male" 
                        checked
                        {...register("gender")}
                        />
                </label>

                <label className=' flex ceonter items-center gap-1'>Female
                    <input 
                        type="radio"
                        id="female" 
                        name="gender" 
                        value="Female" 
                        {...register("gender")}
                        />
                </label>

                <label className=' flex ceonter items-center gap-1'>Others
                    <input 
                        type="radio"
                        id="others" 
                        name="gender" 
                        value="Others" 
                        {...register("gender")}
                        />
                </label>
            </div>
        </div>

        {/* section 4 */}
        {/* address */}
        <div  className='flex flex-col gap-1 items-start  my-4'>
                <label  htmlFor='address'  className='text-md text-gray-50 font-semibold pl-4 flex gap-1  items-start'>
                 Address 
                </label>
                <textarea

                    placeholder='Enter address'
                    name='address'
                    id='address'
                    {...register('address')}
                    className='w-full  px-5 py-3 lg:w-[450px]  font-semibold text-md text-gray-200 bg-gray-800  rounded-md border 
                      border-gray-400 shadow-inner  shadow-gray-300'
                />
        </div>
       
            
        <button type='submit'
        className={`px-5  py-2  rounded-md font-semibold  hover:scale-95 transition-all duration-300  mt-4
            drop-shadow-[0_1px_10px_rgba(255,255,255,0.5)] bg-[#FFD60A]  text-black`}>
            Submit
        </button>

    
    </form>
  )
}

export default ProfileUpdateForm