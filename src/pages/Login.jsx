import React from 'react';
import Template from '../components/Authentication/Template'

const Login = () => {
  return (
    <div className=' bg-regal-blue  w-full h-full  pt-16  pb-8'>
    <Template
       title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        // image={signupImg}
        formType="login"
    />
  </div>
  )
}

export default Login