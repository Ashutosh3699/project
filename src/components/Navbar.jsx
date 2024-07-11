import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex justify-around items-center bg-regal-blue text-white opacity-80  px-4  py-5'>
    
    <div>
    <NavLink  to={'/'}>
        <img src='' alt='image'  />
    </NavLink>
    </div>
    <ul  className='flex gap-6 '>
        <li>
            <NavLink  to={"/about-us"}>
                About-us
            </NavLink>
        </li>
        <li>
            <NavLink  to={"/blogs"}>
                Blogs
            </NavLink>
        </li>
        <li>
            <NavLink  to={"/stores"}>
                Stores
            </NavLink>
        </li>
        <li>
            <NavLink  to={"/our-field"}>
                Our fields
            </NavLink>
        </li>
        <li>
            <NavLink  to={"/career"}>
                Career
            </NavLink>
        </li>
        <li>
            <NavLink  to={"/partnership"}>
                Partnership
            </NavLink>
        </li>
        <li>
            <NavLink  to={"/contact-us"}>
                Contact Us
            </NavLink>
        </li>

    </ul>

    <ul className='flex gap-5 '>
    <li>
            <NavLink  to={"/login"}>
                
                <button className='px-7 py-2 bg-blue-color rounded-xl'>
                Login
                </button>
            </NavLink>
        </li>
        <li>
            <NavLink  to={"/sign-up"}>
                <button className='px-6 py-2 bg-blue-color rounded-xl'>
                Sign up
                </button>
            </NavLink>
        </li>

    </ul>
    
    </div>
  )
}

export default Navbar