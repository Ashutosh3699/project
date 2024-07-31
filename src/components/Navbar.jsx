import React,{useState} from 'react'
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
    <div className={`w-full flex justify-between md:justify-around items-center ${color}    text-white  z-50 `}  >
    
    <div>
    <NavLink  to={'/'}>
        <img src='' alt='image'  />
    </NavLink>
    </div>

    

    <ul  className='md:flex gap-2 lg:gap-6 text-md lg:text-lg hidden  '>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative'>
            <NavLink  to={"/about-us"}>
                About us
            </NavLink>
            <div class=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
            
        </li>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative text-center'>
            <NavLink  to={"/blogs"}>
                Blogs
            </NavLink>
            <div class=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
        </li>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative'>
            <NavLink  to={"/stores"}>
                Products
            </NavLink>
            <div class=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
        </li>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative'>
            <NavLink  to={"/our-field"}>
                Our fields
            </NavLink>
            <div class=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
        </li>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative'>
            <NavLink  to={"/career"}>
                Career
            </NavLink>
            <div class=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
        </li>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative text-center'>
            <NavLink  to={"/partnership"}>
                Partnership
            </NavLink>
            <div class=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
        </li>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative'>
            <NavLink  to={"/contact-us"}>
                Contact Us
            </NavLink>
            <div class=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
        </li>

    </ul>

    {/* for mobile */}
    <div className='flex gap-3 items-center '>

        <div  className=' flex md:hidden relative'  onClick={showFunction}>
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

        {/* login and sign-up */}
            <div className='flex justify-between items-center gap-2 md:gap-4'>
                <div className='flex flex-col relative cursor-pointer  hover:bg-black rounded-full 
                        justify-center items-center px-3 py-3  text-white  duration-500' 
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                >
                    <FaRegUser className='md:text-xl' />

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
                        <CiShoppingCart className='text-xl md:text-3xl' />
                </div>
            </div>
    </div>


    </div>
  )
}

export default Navbar