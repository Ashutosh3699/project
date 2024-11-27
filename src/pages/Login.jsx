import React from 'react';
import Template from '../components/Authentication/Template'

const Login = () => {
  return (
    <div className=' bg-regal-blue  w-full h-full  pt-16  pb-8'>
    <Template
       title="Welcome Back"
        // image={signupImg}
        formType="login"
    />
  </div>
  )
}

export default Login