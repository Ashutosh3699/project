import React from 'react'
import bgImage from "./home_page1.png";
import "./herosection.css";

const Herosection1 = () => {
  return (
    <div className='h-full'>
      <img  src={bgImage} className='w-full h-full object-cover  hero-animation' />
    </div>
  )
}

export default Herosection1