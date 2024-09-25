import React from 'react'
import ContactUsForm from '../components/consultancy/ContactUsForm'
import ConsultancyData from '../components/consultancy/ConsultancyData'

const Consultancy = () => {



  return (
    <>
    <div className='w-full  mx-auto flex flex-col  '>
        <ConsultancyData/>
       <ContactUsForm/>
    </div>
    </>
  )
}

export default Consultancy