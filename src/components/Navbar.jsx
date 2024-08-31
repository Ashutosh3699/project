import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import logo from "../assets/mainlogo.png";

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
        <img src={logo} alt='image' className='w-[50px]  md:w-[100px] mx-3  md:mx-0' />
    </NavLink>
    </div>

    

    <ul  className='md:flex gap-2 lg:gap-6 text-md lg:text-lg hidden  '>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative'>
            <NavLink  to={"/about-us"}>
                About us
            </NavLink>
            <div className=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
            
        </li>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative text-center'
            //  onMouseOver={MouseOver}
            //  onMouseOut={MouseOut}
        >
            <NavLink  to={"/"}>
                Our Fields
            </NavLink>
            <div className=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>

            {/* <div  className= {`bg-transparent px-4 py-4 ${ishover} absolute bg-black `}>

                <ul className="flex-col  gap-3 absolute top-8 -right-1 text-md  cursor-pointer w-24 text-black 
                bg-white items-center px-4 py-4 space-y-3  ">
                <li className='hover:underline'>
                    <NavLink  to={"/"}>
                        <p>Design</p>
                    </NavLink>
                </li>
                <li className='hover:underline'>
                    <NavLink  to={"/"}>
                    <p> LiDAR </p> 
                    </NavLink>
                </li>
                </ul>

            </div> */}
        </li>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative'>
            <NavLink  to={"/"}>
                Products
            </NavLink>
            <div className=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
        </li>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative'>
            <NavLink  to={"/"}>
                Consultancy
            </NavLink>
            <div className=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
        </li>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative'>
            <NavLink  to={"/"}>
                Career
            </NavLink>
            <div className=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
        </li>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative text-center'>
            <NavLink  to={"/blogs"}>
                Blogs
            </NavLink>
            <div className=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
        </li>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative'>
            <NavLink  to={"/"}>
                Contact Us
            </NavLink>
            <div className=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
        </li>

    </ul>

    {/* for mobile */}
    <div className='flex gap-3 items-center '>

        <div  className=' flex md:hidden relative px-4'  onClick={showFunction} >
            <GiHamburgerMenu />
            <ul  className={`${show} flex-col  gap-3 absolute top-4 right-0 ${color}  text-md  cursor-pointer  w-[110px]  px-3`}>
            <li>
                <NavLink  to={"/about-us"}>
                    About us
                </NavLink>
            </li>
            <li>
                <NavLink  to={"/"}>
                    Our fields
                </NavLink>
            </li>
            <li>
                <NavLink  to={"/"}>
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink  to={"/"}>
                    Consultancy
                </NavLink>
            </li>
            <li>
                <NavLink  to={"/"}>
                    Career
                </NavLink>
            </li>
            <li>
                <NavLink  to={"/blogs"}>
                    Blogs
                </NavLink>
            </li>
            <li>
                <NavLink  to={"/"}>
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
                                <NavLink  to={"/"}>
                                    <p>Login</p>
                                </NavLink>
                            </li>
                            <li className='hover:underline'>
                                <NavLink  to={"/"}>
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