import React, { useState } from 'react'

const Consultancy = () => {

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
    <div className='w-full h-screen bg-regal-blue px-10'>

      <form className='px-4 py-6 border border-blue-300 text-white  rounded-lg  flex flex-col gap-5 items-start'
      onSubmit={submitHandler}
      >

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
              className='text-black bg-blue-300 px-4 py-2 rounded-md'
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
             className='text-black bg-blue-300 px-4 py-2 rounded-md'
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
             className='text-black bg-blue-300 px-4 py-2 rounded-md'
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
              className='text-black bg-blue-300 px-4 py-2 rounded-md'
            />
          </label>
        </div>
        

        <label className='flex flex-col gap-2 items-start mx-auto' >
          <h3>Message: </h3>
          <textarea
          type='textform' 
           rows="10" 
           cols="100"
          id='message'
          name='message'
          className='text-black bg-blue-300 px-4 py-2 rounded-md'
          placeholder='message...'
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

export default Consultancy