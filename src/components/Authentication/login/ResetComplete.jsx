import React from 'react'
import { Link } from 'react-router-dom'

const ResetComplete = () => {

  return (
    <div className='flex flex-col bg-regal-blue text-gray-50 gap-3  items-center justify-center w-full h-screen'>

        <h3 className='text-4xl font-semibold text-blue-100 '>
            Reset complete!
        </h3>
        <p className='text-lg font-medium text-gray-200 text-center font-edu-sa  my-2'>
            All done! We have sent an email to  ***********@gmail.com to confirm
        </p>
        <Link  to={"/login"}>
            Return to login
        </Link>
    </div>
  )
}

export default ResetComplete