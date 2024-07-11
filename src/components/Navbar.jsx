import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

    const [show, setShow] = useState("hidden");

    function showFunction(){

        if(show === "hidden"){
            setShow("flex");
        }
        else{
            setShow("hidden");
        }
    }

  return (
    <div className='w-full flex justify-between lg:justify-around items-center bg-regal-blue text-white opacity-80  px-4  py-5'>
    
    <div>
    <NavLink  to={'/'}>
        <img src='' alt='image'  />
    </NavLink>
    </div>
    <div  className=' flex lg:hidden relative'  onClick={showFunction}>
        <GiHamburgerMenu />
        <ul  className={`${show} flex-col  gap-3 absolute top-4 right-0 bg-blue-color  text-md  cursor-pointer`}>
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

    <ul  className='lg:flex gap-6 text-lg hidden  '>
        <li className='cursor-pointer'>
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

    <ul className='lg:flex gap-5  hidden '>
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