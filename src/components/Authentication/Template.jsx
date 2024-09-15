import React from 'react';
import { useSelector } from 'react-redux';
import SignupForm from './signup/SignupForm';
import LoginForm from './login/LoginForm';


const Template = ({title, desc1, desc2, formType}) => {

    const  {loading} = useSelector((state)=>state.auth)

  return (

    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">

    {
        loading? (<div className="spinner"></div>):(

        <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 mb-4  items-center'>

            <div className='w-11/12 max-w-[450px]' >
                <h1
                className=' text-gray-100 font-semibold text-[1.875rem] leading-[2.375rem]' 
                >
                    {title}
                </h1>

                <p className='text-[1.125rem] leading[1.625rem] mt-4' >
                    <span className='text-gray-300'>{desc1}</span>
                    <br/>
                    <span className=' text-blue-200 italic'>{desc2}</span>
                </p>

                {
                formType === "signup" ? 
                    (<SignupForm />):
                    (<LoginForm />)
                }

                {/* <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                    <p className='text-richblack-700 font-medium leading[1.375rem]'>
                        OR
                    </p>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                </div> */}

            </div>

            {/* <div className='relative w-11/12 max-w-[450px] '>
                <img src={frameImage}
                    alt="Pattern"
                    width={558}
                    height={504}
                    loading="lazy"/>

                <img src={image}
                    alt="Students"
                    width={558}
                    height={490}
                    loading="lazy"
                    className='absolute -top-4 right-4'
                    />    
            </div> */}

        </div>
        )
    }

    
    </div>
  
  )
}

export default Template