import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {

    const [show, setShow] = useState("hidden");
    const [color, setColor] = useState("bg-regal-blue");

    function showFunction(){

        if(show === "hidden"){
            setShow("flex");
        }
        else{
            setShow("hidden");
        }
    }



    const [ishover,sethover]=useState("hidden");

    function MouseOver() {
        sethover("flex");
    }
    function MouseOut() {
        sethover("hidden");
    }

    // console.log(ishover)
    
  return (
    <div className={`w-full flex justify-between lg:justify-around items-center ${color} opacity-95  text-white   px-4  py-5  `}  >
    
    <div>
    <NavLink  to={'/'}>
        <img src='' alt='image'  />
    </NavLink>
    </div>

    {/* for mobile */}
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
                About us
            </NavLink>
        </li>
        <li>
            <NavLink  to={"/blogs"}>
                Blogs
            </NavLink>
        </li>
        <li>
            <NavLink  to={"/stores"}>
                Products
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

    {/* login and sign-up */}
        <div className='flex justify-between items-center gap-4'>
            <div className='flex flex-col relative cursor-pointer  hover:bg-black rounded-full 
                    justify-center items-center px-3 py-3  text-white  duration-500' 
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            >
                <FaRegUser className='text-xl' />

                    <div  className= {`bg-transparent px-4 py-4 ${ishover} absolute bg-black `}>

                        <ul className="flex-col  gap-3 absolute top-8 -right-1 text-md  cursor-pointer w-24 text-black 
                        bg-white items-center px-4 py-4 space-y-3  ">
                        <li className='hover:underline'>
                            <NavLink  to={"/login"}>
                                <p>Login</p>
                            </NavLink>
                        </li>
                        <li className='hover:underline'>
                            <NavLink  to={"/sign-up"}>
                            <p> Sign up </p> 
                            </NavLink>
                        </li>
                    </ul>

                    </div>
                
            </div>

            <div >
                    <CiShoppingCart className='text-3xl' />
            </div>
        </div>

    </div>
  )
}

export default Navbar