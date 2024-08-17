import React, { useState } from 'react';
import bgImage from "../../assets/whiteBg.png";
import image1 from "./images/logo2.jpg";
import image2 from "./images/logo4.jpg";
import image5 from "./images/logo3.jpg";
import image7 from  "./images/logo5.jpg";
import image3 from "./images/logo6.jpg";
import image8 from "./images/logo1.jpg";
import image4 from "./images/logo7.png";
import image6  from "./images/logo8.png";
import { useNavigate } from 'react-router-dom';
import { services } from './services/first';


const Weprovide = () => {

    const navigate = useNavigate();

    const clickHandler= async (event) =>{

        const info = event.currentTarget.querySelector("#title")
        // console.log(info.alt);

        for (const key of services) {
            
            if (key.id.toString() == info.alt) {

                const serviceId = key.id;
                // console.log(serviceId);
                navigate(`/our-services/${serviceId}`);
            }
        }

        
    }
    

  return (
    <div className='w-full relative h-full  opacity-90 text-white py-5 ' 
        style={{backgroundImage: `url(${bgImage})`}}
    >
            <h2 className='flex  justify-center text-3xl pt-4 select-none  text-slate-500  font-bold'>OUR SERVICES</h2>

            <div className='w-[50px] h-[7px]  bg-gradient-to-r from-cyan-500 to-blue-500  mx-auto mt-2' ></div>

            <div className='flex flex-wrap gap-7 justify-around mx-5  md:mx-20  mt-8  py-6'>
               
                <div onClick={clickHandler}  className='w-[250px]  h-[150px] bg-white  overflow-hidden rounded-lg  text-black flex
                    flex-col  justify-around  items-center border border-cyan-300  shadow-md shadow-cyan-500 cursor-pointer'>

                        <img id='title'  src={image1} alt='aqqwe1234' className='w-1/3  mx-auto rounded-full object-center'/>
                    
                        <div  className='w-full md:w-[75%] text-sm  font-semibold px-2 md:px-0 md:mx-auto  align-middle pb-6'>
                                Design, Manufacturing & Assembly of Ready to Fly Drones
                        </div>
                </div>

                <div onClick={clickHandler}  className='w-[250px]  h-[150px] bg-white   overflow-hidden rounded-lg  text-black flex flex-col 
                justify-around items-center  border border-cyan-300  shadow-md shadow-cyan-500 '>

                    <img  id='title'   src={image2} alt='asdf123' className='w-1/2 mx-auto rounded-full object-center ' />

                    <div className='w-full md:w-[75%] text-sm  font-semibold mx-auto px-2 md:px-0  align-middle pb-4'>
                     LiDAR (Light Detection and Ranging Services)
                    </div>

                </div>
                <div onClick={clickHandler}  className='w-[250px]  h-[150px] bg-white   overflow-hidden rounded-lg  text-black flex flex-col 
                justify-around items-center  border border-cyan-300  shadow-md shadow-cyan-500 '>
                    <img  id='title'   src={image3} alt='aqqwe1234' className='w-1/3 mx-auto rounded-full object-center '/>
                    <div className='w-full md:w-[75%] text-sm  font-semibold mx-auto px-2 md:px-0  align-middle pb-4'>
                    Cutting Edge UAV Imagery Processing
                    </div>

                </div>
                <div onClick={clickHandler}  className='w-[250px]  h-[150px] bg-white   overflow-hidden rounded-lg  text-black flex flex-col 
                justify-around items-center  border border-cyan-300 shadow-md shadow-cyan-500'>
                    <img  id='title'   src={image4} alt='asdf123'   className='w-1/3 mx-auto rounded-full object-center ' />
                    <div className='w-full md:w-[75%] text-sm  font-semibold mx-auto px-2 md:px-0  align-middle pb-4'>
                    Extremely Accurate Land Survey Services
                    </div>

                </div>
                <div onClick={clickHandler}  className='w-[250px]  h-[150px] bg-white   overflow-hidden rounded-lg  text-black flex flex-col 
                justify-around items-center  border border-cyan-300 shadow-md shadow-cyan-500'>
                    <img  id='title'   src={image5} alt='aqqwe1234'  className='w-1/3 mx-auto rounded-full object-center '/>
                    <div className='w-full md:w-[75%] text-sm  font-semibold mx-auto  px-2 md:px-0  align-middle pb-4'>
                    Industry Leading Photogrammetric Services
                    </div>

                </div>
                <div onClick={clickHandler}  className='w-[250px]  h-[150px] bg-white   overflow-hidden rounded-lg  text-black flex flex-col 
                justify-around items-center  border border-cyan-300 shadow-md shadow-cyan-500'>
                    <img  id='title'   src={image6} alt='aswew1235'   className='w-1/4 mx-auto rounded-full object-center mt-2 ' />
                    <div className='w-full md:w-[75%] text-sm  font-semibold mx-auto px-2 md:px-0  align-middle pb-4'>
                    Advanced Architectural Service
                    </div>

                </div>
                <div onClick={clickHandler}  className='w-[250px]  h-[150px] bg-white   overflow-hidden rounded-lg  text-black flex flex-col 
                justify-around items-center  border border-cyan-300 shadow-md shadow-cyan-500 '>
                    <img  id='title'   src={image7} alt='aswew1235'   className='w-1/3 mx-auto rounded-full object-center ' />
                    <div className='w-full md:w-[75%] text-sm  font-semibold mx-auto px-2 md:px-0  align-middle pb-4 flex justify-center'>
                    Geographic Information System
                    </div>

                </div>
                <div  onClick={clickHandler}  className='w-[250px]  h-[150px] bg-white   overflow-hidden rounded-lg  text-black flex flex-col 
                justify-around items-center  border border-cyan-300 shadow-md shadow-cyan-500 '>
                    <img  id='title'   src={image8} alt='aswew1235'  className='w-1/3 mx-auto rounded-full object-center ' />
                    <div className='w-full md:w-[75%] text-sm  font-semibold mx-auto px-2 md:px-0 align-middle pb-4 flex justify-center'>
                    Crop Health Analysis
                    </div>

                </div>


            </div>

    </div>
  )
}

export default Weprovide