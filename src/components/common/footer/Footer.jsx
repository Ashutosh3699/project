import React from 'react';
import { FaLinkedin,FaInstagram,FaFacebook   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import  {NavLink} from "react-router-dom";
import logo from "../../../assets/mainlogo.png"

const Footer = () => {
  return (
    <div  className='flex flex-col py-5 px-6 md:px-40  bg-black opacity-70  text-white  gap-10  pt-9'>
        <div  className='flex  justify-between  '>
                <div className='select-none hidden md:flex  w-[100px]  h-[70px]'>
                 <img src={logo}  alt='image1'  className='w-full ' />
                </div>

                <div className='flex  flex-wrap justify-between  items-baseline  gap-10  '>

                    <div>
                        <div className='text-lg mb-2 cursor-pointer hover:underline select-none'>
                            <NavLink to={"/about-us"}>
                                About us
                            </NavLink>
                        </div>
                        <ul  className='text-sm px-2 text-gray-400 space-y-3 select-none'>
                            <li className='cursor-pointer hover:underline'>
                            <NavLink to={"/about-us"}>
                                Absolute Reliability
                            </NavLink>
                            </li>
                            <li className='cursor-pointer hover:underline'>
                            <NavLink to={"/about-us"}>
                                Innovative Flexibility
                            </NavLink>
                            </li>
                            <li className='cursor-pointer hover:underline'>
                                <NavLink to={"/about-us"}>
                                Versatility
                                </NavLink>
                            </li>
                            <li className='cursor-pointer hover:underline'>
                            <NavLink to={"/about-us"}>
                                Complete Safety
                                </NavLink>
                            </li>
                            <li className='cursor-pointer hover:underline'>
                            <NavLink to={"/about-us"}>
                            Complete Commitment
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className='text-lg cursor-pointer mb-4 select-none'>

                            <NavLink to={"/contact-us"}>
                                Support
                            </NavLink>
                        </div>
                        <ul className='text-sm px-2 text-gray-400 space-y-3 select-none'>
                            <li className='cursor-pointer hover:underline'>FAQs</li>
                            <li className='cursor-pointer hover:underline'>Documentation</li>
                           <li className='cursor-pointer hover:underline'>Technical Support</li>
                            <li className='cursor-pointer hover:underline'>Warranty Information</li>
                        </ul>
                        
                    </div>

                    <div>
                        <div className='text-lg cursor-pointer mb-4 select-none'>
                             Contact us
                        </div>
                        <ul className='text-md px-2 space-y-3 select-none'>
                            <li>
                                <a href='tel: +91 7378911110' className=' text-blue-color underline'> +91 7378911110</a>
                            </li>
                            <li>
                                <a href='mailto:sales@aeromat.in' className='underline text-gray-400 font-bold'>sales@aeromat.in</a>
                            </li>
                            <li className='w-[200px] italic text-gray-400'>B-208 Karan Suncoast,near Ryan International School, Bhavdhan, Pune-411021</li>
                        </ul>
                    </div>

                    <div>
                        <div className='text-lg cursor-pointer mb-4 select-none'>
                            Sources
                        </div>
                        <ul className='text-sm px-2 text-gray-400 space-y-4 select-none'>
                            <li className='cursor-pointer hover:underline'>
                                <a href='https://www.dgca.gov.in/digigov-portal/' target="_blank">
                                DGCA
                                </a>
                            </li>
                            
                        </ul>
                        
                    </div>

                    <div>
                        <div className='text-lg cursor-pointer mb-4 select-none'>
                            Legal
                        </div>
                        <ul className='text-sm px-2 text-gray-400 space-y-4 select-none'>
                            <li className='cursor-pointer hover:underline'>Privacy Policy</li>
                            <li className='cursor-pointer hover:underline'>Terms of Service</li>
                           <li className='cursor-pointer hover:underline'>Return Policy</li>
                            
                        </ul>
                        
                    </div>



                </div>
               

        </div>

    {/* follow us */}
        <div  className='flex  gap-3 text-white  text-xl items-center'>
            {/* logo of social media */}
            <p className=' text-gray-400 font-extrabold select-none '>Follow us on </p>
            <div>
            {/* anchor tag with the links */}
            <a href='https://www.linkedin.com/company/aeromat-creative-labs-pvt-ltd/mycompany/' target="_blank">
                <FaLinkedin size={25} />
            </a>
            </div>
            <div>
            <a href='https://www.instagram.com/aeromat_creative/'  target="_blank">
                <FaInstagram size={25} />
            </a>
            </div>
            <div>
            <a href='https://www.facebook.com/aeromatcl/' target="_blank">
                <FaFacebook size={25} />
            </a>
            </div>
            <div>
            <a href='https://www.instagram.com/aeromat_creative/' target="_blank">
                <FaXTwitter size={25} />
            </a>
            </div>
        </div>

        <div className='text-white font-semibold text-sm mx-auto  '>
            {/* copyright */}
            © 2024, 
            <span className='underline hover:text-blue-200 cursor-pointer'>
            <a href='/'>
                 www.aeromat.in</a>
            </span> is a registered trademark of aeromat creative lab Pvt Ltd – All Rights Reserved
        </div>
    </div>
  )
}

export default Footer