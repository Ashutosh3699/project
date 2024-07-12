import React from 'react';
import { FaLinkedin,FaInstagram,FaFacebook   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import  {NavLink} from "react-router-dom"

const Footer = () => {
  return (
    <div  className='flex flex-col py-5 px-40  bg-black opacity-70  text-white  gap-4  pt-9'>
        <div  className='flex  justify-between  items-baseline'>
                <div>Logo</div>

                <div className='flex  justify-between  items-baseline  gap-10 mr-20 '>

                    <div>
                        <div className='text-lg mb-2 cursor-pointer'>
                            <NavLink to={"/about-us"}>
                                About us
                            </NavLink>
                        </div>
                        <ul  className='text-md '>
                            <li className='cursor-pointer'>
                            <NavLink to={"/about-us"}>
                                Absolute Reliability
                            </NavLink>
                            </li>
                            <li className='cursor-pointer'>
                            <NavLink to={"/about-us"}>
                                Innovative Flexibility
                            </NavLink>
                            </li>
                            <li className='cursor-pointer'>Versatility
                                <NavLink to={"/about-us"}>
                                Versatility
                                </NavLink>
                            </li>
                            <li className='cursor-pointer'>
                            <NavLink to={"/about-us"}>
                                Complete Safety
                                </NavLink>
                            </li>
                            <li className='cursor-pointer'>
                            <NavLink to={"/about-us"}>
                            Complete Commitment
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className='text-lg cursor-pointer mb-4'>
                            <NavLink to={"/contact-us"}>
                             Contact us
                            </NavLink>
                        </div>
                        <ul className='text-md'>
                            <li>number</li>
                            <li>address</li>
                            <li>mail id</li>
                        </ul>
                    </div>

                    <div className=' cursor-pointer text-lg flex flex-col gap-3'>
                        <div>
                        <NavLink to={"/contact-us"}>
                            Support
                        </NavLink>
                            
                        </div>
                        <div>
                            <NavLink to={"/about-us"}>
                             Privacy policy
                             </NavLink>  
                        </div>
                        <div>
                        <NavLink to={"/about-us"}>
                            Terms and conditions
                             </NavLink>
                            
                        </div>
                        <div>
                        <NavLink to={"/about-us"}>
                                Help
                        </NavLink>
                           
                        </div>
                    </div>

                </div>
               

        </div>

        <div  className='flex  gap-3 text-white  text-xl'>
            {/* logo of social media */}
            <div>
                <FaLinkedin />
            </div>
            <div>
                <FaInstagram />
            </div>
            <div>
                <FaFacebook />
            </div>
            <div>
                <FaXTwitter />
            </div>
        </div>

        <div className='text-white font-semibold text-sm mx-auto'>
            {/* copyright */}
            © 2024, aeromat.com is a registered trademark of aeromat creative lab Pvt Ltd – All Rights Reserved
        </div>
    </div>
  )
}

export default Footer