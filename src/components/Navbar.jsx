import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    
    <div>
    <NavLink  to={'/'}>
        <img src='' alt='image'  />
    </NavLink>
    </div>
    <ul>
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
    
    </div>
  )
}

export default Navbar