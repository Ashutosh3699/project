import React, { useState } from 'react';
import { IoIosChatboxes } from "react-icons/io";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
import { apiConnector } from '../../services/apiConnector';
import {contact_us} from "../../services/apis"
import toast from 'react-hot-toast';

const ContactUsForm = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        message:""
      });
    
      const changeHandler= (e)=>{
    
        setFormData((prev)=>({
          ...prev,
          [e.target.name] : e.target.value
        }))
      }

      const {CONTACT_US_API} = contact_us
    
      const submitHandler= async(e)=>{
    
        e.preventDefault();
    
        console.log("formData is : ", formData);
        // console.log("url is:", url);
        try {
          const toastId = toast.loading("loading");
          await apiConnector("POST", CONTACT_US_API, formData);
          toast.dismiss(toastId);
          toast.success("form sent successfully");

        } catch (error) {
          console.log("error at sending the email", error);
        }
    
        // reset the form
        setFormData({
          firstName:"",
          lastName:"",
          email:"",
          phoneNumber:"",
          message:""
        })
      }


  return (
    <div className='w-full bg-white  flex flex-col-reverse lg:flex-row justify-center gap-4 pb-20 pt-5  lg:pt-44 relative'>

        <section className=' px-4  py-8 bg-gray-500 w-[300px] mx-auto lg:mx-0  rounded-xl flex flex-col gap-10 h-full  lg:sticky lg:top-10'>

            <div className='flex flex-col gap-3 items-start'>
                <div className=' text-base  md:text-lg text-blue-100 font-bold  flex flex-row gap-5'>
                    <IoIosChatboxes />
                    <h3> Chat on us</h3>
                </div>

            <div className='flex flex-col gap-1  text-blue-100 font-medium' >
                <p>Our friendly team is here to help.</p>
                <p>@mail address</p>
            </div>
            </div>

            <div className='flex flex-col gap-3 items-start'>
                <div className='text-base  md:text-lg text-blue-100 font-bold  flex flex-row gap-5'>
                <BsGlobeCentralSouthAsia />
                    <h3> Visit us</h3>
                </div>

            <div className='flex flex-col gap-1  text-blue-100 font-medium' >
                <p>Come and say hello at our office HQ.</p>
                <p>Here is the location/ address</p>
            </div>
            </div>

            <div className='flex flex-col gap-3 items-start'>
                <div className='text-base  md:text-lg text-blue-100 font-bold  flex flex-row gap-5'>
                <IoCallSharp />
                    <h3> Call us</h3>
                </div>

            <div className='flex flex-col gap-1  text-blue-100 font-medium' >
                <p>Mon - Fri From 8am to 5pm.</p>
                <p>+123 456 7890</p>
            </div>
            </div>

        </section>


      <form className='px-4 pt-6 pb-6 border lg:w-[50%] border-gray-500 text-white  rounded-lg  flex flex-col gap-5 items-start'
      onSubmit={submitHandler}
      >

        <h2 className='mx-auto  text-center text-gray-500 font-semibold text-2xl'>Contact Us Here...</h2>

        <div className='flex  flex-col lg:flex-row   justify-around items-center lg:w-[90%] mx-auto'>
          <label className='flex flex-col gap-2 items-start'>
            <h3>FirstName: </h3>
            <input
              required
              placeholder='Enter FirstName'
              name='firstName'
              type='text'
              id='firstName'
              value={formData.firstName}
              onChange={changeHandler}
              className='text-gray-700 bg-white px-4 py-2 rounded-md placeholder:text-gray-500 border-2 border-gray-500'
            />
          </label>

          <label className='flex flex-col gap-2 items-start'>
            <h3>LastName: </h3>
            <input
              required
              placeholder='Enter LastName'
              name='lastName'
              type='text'
              id='lastName'
              value={formData.lastName}
              onChange={changeHandler}
             className='text-gray-700 bg-white px-4 py-2 rounded-md placeholder:text-gray-500 border-2 border-gray-500'
            />
          </label>

        </div>
        
        <div className='flex flex-col lg:flex-row justify-around items-center lg:w-[90%] mx-auto'>

          <label className='flex flex-col gap-2 items-start'>
            <h3>Email: </h3>
            <input
              required
              placeholder='Enter Email Id'
              name='email'
              type='email'
              id='email'
              value={formData.email}
              onChange={changeHandler}
             className='text-gray-700 bg-white px-4 py-2 rounded-md placeholder:text-gray-500 border-2 border-gray-500'
            />
          </label>

          <label className='flex flex-col gap-2 items-start'>
            <h3>phoneNumber: </h3>
            <input
              required
              name='phoneNumber'
              placeholder='Enter phone no.'
              type='number'
              id='phoneNumber'
              value={formData.phoneNumber}
              onChange={changeHandler}
              className='text-gray-700 bg-white px-4 py-2 rounded-md placeholder:text-gray-500 border-2 border-gray-500'
            />
          </label>
        </div>
        

        <label className='flex flex-col gap-2 items-start justify-around mx-auto lg:w-[75%]  w-[90%]' >
          <h3>Message: </h3>
          <textarea
          type='textform' 
          id='message'
          name='message'
          placeholder='Message...'
          className='text-gray-700 bg-white px-4 shadow-md py-2 w-[100%] rounded-md placeholder:text-gray-500 border-2 border-gray-500'
          value={formData.message}
          onChange={changeHandler}
          required
          ></textarea>  
        </label>

        <button  type='submit'
        className=' mx-auto py-2  px-5 rounded-md font-semibold  hover:scale-95 transition-all duration-300 drop-shadow-[0_1px_10px_rgba(255,255,255,0.5)] bg-[#FFD60A]  text-black'>
          Submit
        </button>

      </form>
        

    </div>
  )
}

export default ContactUsForm