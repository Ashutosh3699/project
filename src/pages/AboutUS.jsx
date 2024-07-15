import React from 'react';
// import video1 from "../assets/flower.m4v";
import image1 from "../assets/image1.png";
import AboutUsHero from '../components/About us/AboutUsHero';
import OurValue from '../components/About us/OurValue';
import Mission from '../components/About us/Mission';

const AboutUS = () => {
  return (
    <div>
        <div className='flex flex-wrap gap-8 w-3/4 mx-auto  py-8'>

          {/* <video autoplay loop muted src="../assets/video-devices-in.m4v" controls></video> */}
          <img src={image1} alt='logo' className='w-1/3 rounded-xl h-[250px]'  />
          <div className='w-1/2 rounded-xl bg-gray-bg text-white px-10 py-4  shadow-xl'>
            <h1 className='font-bold text-2xl'>Driven by a Burning  desire to find  Innovative Solutions  & Help Business  Owners & Enthusiasts
              alike, We find  Incredible Response &  Appreciation from our  Clients.</h1>
              <section className='mt-3 text-sm italic text-gray-400'>
              “A business that makes nothing but money is a poor kind of business”   - Henry Ford
              </section>
          </div>
            
        </div>
        <AboutUsHero/>

        <OurValue/>

        <Mission/>
    
    </div>
  )
}

export default AboutUS