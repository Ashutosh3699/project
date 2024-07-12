import React from 'react'
import bgImage from "../../assets/image1.png";
import "./herosection.css";

const Herosection1 = () => {
  return (
    <div>
      <img  src={bgImage} className='w-full h-full object-cover  hero-animation' />
    </div>
  )
}

export default Herosection1