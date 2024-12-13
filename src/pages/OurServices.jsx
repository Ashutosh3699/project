import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { services } from '../components/HomePage/WhatWeProvide/services/first';
import "../components/HomePage/WhatWeProvide/service.css"

const OurServices = () => {

  const data = useParams();
  const [loading,setLoading] = useState(true);

  const [info, setInfo] = useState({});

      useEffect(() => {

        setLoading(true);
        const result = services.filter((element)=> element.id === data.serviceId);
        setInfo(result[0]);
        setLoading(false);

      }, [data])

  return (
   <div>
          {
                  loading ? (<div>Loading...</div>) : (
                    <div className='py-10  flex flex-col gap-5 items-center  lg:w-10/12  mx-auto  w-[95%]'>

                        <h1  className='text-2xl  text-gray-500  font-bold'>{info.name.toUpperCase()}</h1>

                        <div className='flex gap-2 justify-around my-3 items-center flex-wrap lg:flex-nowrap'>
                          <img src={info.image_1}  className='lg:max-w-[350px]  max-h-[300px] animation '/>
                          <p className=' max-w-[60%]  text-left
                           text-md md:text-lg text-zinc-500 font-sans mb-4'>
                            {info.intro}
                          </p>

                        </div>
                        <div>
                          {
                            info.content.map((item,index) => {

                                  return <div key={index} >
                                          <div className=' text-xl md:text-3xl text-zinc-600 font-bold mb-3'> 
                                          {
                                            item.question 
                                          }
                                          </div>
                                          <div className='text-md md:text-lg text-zinc-500 font-sans mb-4'>
                                          { item.answer}
                                          </div>
                                  </div>
                                  })
                          }
                        </div>

                        <div className='flex  md:flex-row-reverse gap-2 text-center justify-between mb-3 items-center flex-wrap  lg:flex-nowrap'>
                          <img src={info.image_2}  className='lg:max-w-[350px] ' />
                          <p className='max-w-[60%]  text-left text-md md:text-lg text-zinc-500 font-sans mb-4'>
                            {info.lastContent}
                          </p>

                        </div>
                      
                    </div>)
                      
          }
   </div>
  )
}

export default OurServices