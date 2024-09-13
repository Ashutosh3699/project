import React, { useState } from 'react';
import { IoIosChatboxes } from "react-icons/io";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";

const ContactUsForm = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        message:""
      });
      const url = import.meta.env.VITE_BASE_URL;
      console.log(" url is : ", url);
    
      const changeHandler= (e)=>{
    
        setFormData((prev)=>({
          ...prev,
          [e.target.name] : e.target.value
        }))
      }
    
      const submitHandler= async(e)=>{
    
        e.preventDefault();
    
        console.log("formData is : ", formData);
        console.log("url is:", url);
        try {
           await fetch(
            `${url}/contactUs`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...formData }),
            }
          );
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
    <div className='w-full h-screen bg-regal-blue px-10 flex justify-center  gap-4  mx-auto py-10'>

        <section className='px-20 py-8 bg-blue-500  rounded-xl flex flex-col gap-10'>

            <div className='flex flex-col gap-3 items-start'>
                <div className='text-xl text-blue-100 font-bold  flex flex-row gap-5'>
                    <IoIosChatboxes />
                    <h3> Chat on us</h3>
                </div>

            <div className='flex flex-col gap-1  text-blue-100 font-medium' >
                <p>Our friendly team is here to help.</p>
                <p>@mail address</p>
            </div>
            </div>

            <div className='flex flex-col gap-3 items-start'>
                <div className='text-xl text-blue-100 font-bold  flex flex-row gap-5'>
                <BsGlobeCentralSouthAsia />
                    <h3> Visit us</h3>
                </div>

            <div className='flex flex-col gap-1  text-blue-100 font-medium' >
                <p>Come and say hello at our office HQ.</p>
                <p>Here is the location/ address</p>
            </div>
            </div>

            <div className='flex flex-col gap-3 items-start'>
                <div className='text-xl text-blue-100 font-bold  flex flex-row gap-5'>
                <IoCallSharp />
                    <h3> Call us</h3>
                </div>

            <div className='flex flex-col gap-1  text-blue-100 font-medium' >
                <p>Mon - Fri From 8am to 5pm.</p>
                <p>+123 456 7890</p>
            </div>
            </div>

        </section>


      <form className='px-4 py-6 border lg:w-[50%] border-blue-400 text-white  rounded-lg  flex flex-col gap-5 items-start'
      onSubmit={submitHandler}
      >

        <h2 className='mx-auto  text-center text-gray-200 font-semibold text-2xl'>Contact Us Here...</h2>

        <div className='flex flex-row justify-around items-center lg:w-[80%] mx-auto'>
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
              className='text-black bg-blue-400 px-4 py-2 rounded-md placeholder:text-white'
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
             className='text-black bg-blue-400 px-4 py-2 rounded-md placeholder:text-white'
            />
          </label>

        </div>
        
        <div className='flex flex-row justify-around items-center lg:w-[80%] mx-auto'>

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
             className='text-black bg-blue-400 px-4 py-2 rounded-md placeholder:text-white'
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
              className='text-black bg-blue-400 px-4 py-2 rounded-md placeholder:text-white'
            />
          </label>
        </div>
        

        <label className='flex flex-col gap-2 items-start justify-around mx-auto' >
          <h3>Message: </h3>
          <textarea
          type='textform' 
           rows="10" 
           cols="70"
          id='message'
          name='message'
          placeholder='Message...'
          className='text-black bg-blue-400 px-4 py-2 rounded-md placeholder:text-white'
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