import React,{useRef, useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import logo from "../../assets/mainlogo.png";
import useOutsideClick from '../../customHook/useOutsideClick';
import { services } from '../HomePage/WhatWeProvide/services/first';
import { useDispatch, useSelector } from 'react-redux';
import ProfileDropDown from '../Authentication/Profile/ProfileDropDown';
import { getAllCategories} from '../../services/operations/categoryApi';
import { addFetchedCategory } from '../../features/CategorySlice';
import { setSelecetedCategory } from '../../features/CategorySlice';

const Navbar = () => {

    const {token} = useSelector((state)=>state.auth);
    const cart = useSelector((state)=>state.cart);
    const {categoryList,selectedCategory} = useSelector((state)=>state.category);
    
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
  
  
    useEffect(()=>{
  
      const fetchCategory =async()=>{
  
        setLoading(true);
        const response = await getAllCategories();
        // console.log("response is category: ", response);
  
        if(response){
          
          dispatch(addFetchedCategory(response));
        }
        setLoading(false);
      }
  
      fetchCategory();

    },[]);

    useEffect(()=>{

        if(categoryList.length>0){

            console.log("category list --> is: ", categoryList);
            dispatch(setSelecetedCategory(categoryList[0].subCategory[0]._id)) ;
        }
    }, [categoryList]);

    const [attributeclass,setattributeClass] = useState("invisible opacity-0");
    const divref = useRef(null);
    const handleClickOutside = () => {
      // function to be added
      setattributeClass("invisible opacity-0");
    };
    useOutsideClick(divref, handleClickOutside);
    const clickHandler=()=>{
      if(attributeclass === "invisible opacity-0"){
        setattributeClass("visible opacity-100");
      }
      else{
        setattributeClass("invisible opacity-0");
      }
    }

    if(loading=== true){
        return <div>...loading</div>
    }

  return (
    <div className={`w-full flex justify-between md:justify-around items-center bg-regal-blue    text-white  z-50 `}  >
    
    <div>
    <NavLink  to={'/'}>
        <img src={logo} alt='image' className='w-[50px]  md:w-[100px] mx-3  md:mx-0' />
    </NavLink>
    </div>

    <ul  className='md:flex gap-2 lg:gap-6 text-md lg:text-lg hidden  '>
        <NavLink  to={"/about-us"}>
            <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative'>
                    About us
                <div className=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
            </li>
        </NavLink>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative text-center group' >
                Our Fields
            <div className=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
{/* commented the service part */}
            <div  className= {`bg-transparent px-4 py-4  invisible  group-hover:visible transition-all  duration-300 top-5  absolute bg-black `}>

                <ul className="flex-col  gap-3 absolute top-16 -right-20 text-md w-[200px] cursor-pointer  text-black rounded-lg 
                bg-white items-center px-4 py-4 space-y-3 duration-200 transition-all ">
                    
                    {
                        services.map((item,index)=>(
                            <li className=' hover:bg-slate-800 rounded-lg hover:text-white ' key={index}>
                                <NavLink  to={`/our-services/${item.id}`}>
                                    <p className='w-full font-medium text-center text-sm '>{`${item.name.substring(0,15)}...`}</p>
                                </NavLink>
                            </li>
                        ))
                    }
                   
                </ul>

            </div>
        </li>
        <NavLink  to={`/product/${selectedCategory}`}>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative'>
           
                Products
            
            <div className=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
        </li>
        </NavLink>
        <NavLink  to={"/consultancy"}>
            <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative'>
                    Consultancy
                <div className=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
            </li>
        </NavLink>
        <NavLink  to={"/"}>
        <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative'>
                Career
            <div className=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
        </li>
        </NavLink>
        <NavLink  to={"/blogs"}>
            <li className='cursor-pointer  hover:text-blue-400 transition-all duration-300 group  px-2  py-5  relative text-center'>
                    Blogs
                <div className=" bg-blue-color  bottom-0 h-1 absolute w-full hidden group-hover:block transition-all duration-300"></div>
            </li>
        </NavLink>

    </ul>

    <div className='flex gap-3 items-center '>

        {/* for mobile */}
        <div  className=' flex md:hidden relative px-4'  onClick={clickHandler} ref={divref} >
            <GiHamburgerMenu />
            <ul  className={`${attributeclass} flex-col rounded-md  gap-4 absolute top-7 right-0  bg-white text-blue-color font-medium  
            text-md  cursor-pointer  w-[120px]  px-4 py-3 transition-all duration-200  translate-x-20`}>
                <li  className=' hover:bg-gray-400 rounded-md w-full text-center hover:text-white'>
                    <NavLink  to={"/about-us"}>
                        About us
                    </NavLink>
                </li>
                <li className=' hover:bg-gray-400 rounded-md w-full text-center hover:text-white'>
                    <NavLink  to={"/"}>
                        Our fields
                    </NavLink>
                </li>
                <li className=' hover:bg-gray-400 rounded-md w-full text-center hover:text-white'>
                    <NavLink  to={`/product/${selectedCategory}`}>
                        Products
                    </NavLink>
                </li>
                <li className=' hover:bg-gray-400 rounded-md w-full text-center hover:text-white'> 
                    <NavLink  to={"/"}>
                        Consultancy
                    </NavLink>
                </li>
                <li className=' hover:bg-gray-400 rounded-md w-full text-center hover:text-white'>
                    <NavLink  to={"/"}>
                        Career
                    </NavLink>
                </li>
                <li className=' hover:bg-gray-400 rounded-md w-full text-center hover:text-white'>
                    <NavLink  to={"/blogs"}>
                        Blogs
                    </NavLink>
                </li>

             </ul>
        </div>

        {/* login and sign-up */}
            <div className='flex justify-between items-center gap-2 md:gap-4 ' >

            <NavLink  to={"/add-cart"} className='relative  flex flex-row gap-1  items-center'>
                        <CiShoppingCart className='text-xl md:text-3xl' />
                        <div>{cart.totalItems}</div>
             </NavLink>
            {/* login and signup wala div */}
            {
                token === null && (
                    <div className='flex flex-col relative cursor-pointer  hover:bg-black rounded-full 
                        justify-center items-center px-3 py-3  text-white  duration-500 group' 
                        >
                            <FaRegUser className='md:text-xl' />

                                <div  className= {`bg-transparent px-4 py-4  invisible  group-hover:visible  duration-500 top-5  absolute bg-black `}>

                                    <ul className="flex-col  gap-3 absolute top-8 -right-1 text-md  cursor-pointer w-24 text-black rounded-lg 
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
                )
            }
            {/* profile dropdown */}
            {
                token !== null && (
                    <div>
                       <ProfileDropDown/>
                    </div>
                )
            }

            


            </div>
    </div>


    </div>
  )
}

export default Navbar