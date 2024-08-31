import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { services } from '../components/WhatWeProvide/services/first';

const OurServices = () => {

  const data = useParams();
  const [loading,setLoading] = useState(true);

  // console.log("params is :  ", data);
  const [info, setInfo] = useState({});

      useEffect(() => {

        setLoading(true);
        
        for (const key of services) {
                
          if (key.id == data.serviceId) {
            setInfo(key);
          }
        }

        setLoading(false);
      }, [data])

      console.log(info);
      

  return (
   <div>
          {
                  loading ? (<div>Loading...</div>) : (
                    <div className='py-10  flex flex-col gap-5 items-center  w-10/12  mx-auto'>
                        <h1  className='text-2xl  text-gray-500  font-bold'>{info.name}</h1>
                        <div className='flex gap-2 justify-between mb-3 items-center'>
                          <img src={info.image}  className='lg:w-[350px]  ' />
                          <p className='text-md md:text-lg text-zinc-500 font-sans mb-4'>{info.intro}</p>

                        </div>
                        <div>
                          {
                            info.content.map((item,index) => {

                                  return <div key={index}>
                                          <div className=' text-xl md:text-3xl text-zinc-600 font-bold mb-3'>
                                              { item.question}
                                          </div>
                                          <div className='text-md md:text-lg text-zinc-500 font-sans mb-4'>
                                              {item.answer}
                                          </div>
                                  </div>
                                  })
                          }
                        </div>
                      
                    </div>)
                      
          }
   </div>
  )
}

export default OurServices