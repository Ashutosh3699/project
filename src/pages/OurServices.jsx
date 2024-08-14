import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { services } from '../components/WhatWeProvide/services/first';

const OurServices = () => {

  const data = useParams();

  const [info, setInfo] = useState({});

      useEffect(() => {
        
        for (const key of services) {
                
          if (key.id.toString() == data.serviceId) {
            setInfo(key);
          }
        }

      }, [])

      // console.log(info);
      

  return (
    <div>
      {
        info.name
      }
    </div>
  )
}

export default OurServices