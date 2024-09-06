import React, { useState } from 'react'

const Consultancy = () => {

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

  const submitHandler= (e)=>{

    e.preventDefault();

    console.log("formData is : ", formData);

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
    <div className='w-full h-screen bg-regal-blue'>

      <form className='px-4 py-6 border border-blue-300 text-white  rounded-lg  flex flex-col gap-5 items-start'
      onSubmit={submitHandler}
      >

        <label>
          <h3>FirstName: </h3>
          <input
            required
            placeholder='Enter FirstName'
            name='firstName'
            type='text'
            id='firstName'
            value={formData.firstName}
            onChange={changeHandler}
            className='text-black'
          />
        </label>

        <label>
          <h3>LastName: </h3>
          <input
            required
            placeholder='Enter LastName'
            name='lastName'
            type='text'
            id='lastName'
            value={formData.lastName}
            onChange={changeHandler}
            className='text-black'
          />
        </label>

        <label>
          <h3>Email: </h3>
          <input
            required
            placeholder='Enter Email Id'
            name='email'
            type='email'
            id='email'
            value={formData.email}
            onChange={changeHandler}
            className='text-black'
          />
        </label>

        <label>
          <h3>phoneNumber: </h3>
          <input
            required
            name='phoneNumber'
            placeholder='Enter phone no.'
            type='number'
            id='phoneNumber'
            value={formData.phoneNumber}
            onChange={changeHandler}
            className='text-black'
          />
        </label>

        <label>
          <h3>Message: </h3>
          <textarea
          type='textform' 
           rows="10" 
           cols="100"
          id='message'
          name='message'
          className='text-black'
          placeholder='message...'
          value={formData.message}
          onChange={changeHandler}
          required
          ></textarea>  
        </label>

        <button  type='submit'>
          Submit
        </button>

      </form>
        

    </div>
  )
}

export default Consultancy