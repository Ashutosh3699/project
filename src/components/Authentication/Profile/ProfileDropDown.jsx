import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { Link, useNavigate } from 'react-router-dom';
import useOutsideClick from '../../../customHook/useOutsideClick';
import {logout} from "../../../services/operations/authApi"

const ProfileDropDown = () => {

  // fetch the profile from profileSlice
  const  {user} = useSelector((state) => state.profile);
  // console.log("user is: ", user);

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

  // logout wala scene baki hai 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log("attributeclass", attributeclass);

  return (

    <div className='w-10 h-10 rounded-full  bg-gray-700 relative border border-gray-600 cursor-pointer '
    onClick={clickHandler}
    ref={divref}
    >
    {/* changes here */}
    <div className='w-full h-full overflow-hidden'>
      <img  src={user?.image} 
        alt={`profile-img-${user?.image}`} 
        className='w-full h-full object-contain  overflow-hidden rounded-full' 
        />
    </div>

      <div  
      className={`${attributeclass} absolute -left-20 top-[160%] flex flex-col justify-center items-center rounded-md
                                   bg-gray-500  pt-4  text-gray-800   duration-400  transition-all  lg:w-[150px]  z-10  gap-2`}>

            <div className='absolute w-6 h-6 bg-gray-500  rounded-md rotate-45 
            -top-2  right-10 z-0'></div>

            <Link  to={"/dashboard/my-profile"} className="flex w-full justify-center items-center gap-x-1 py-[10px]  text-sm text-gray-300 hover:bg-gray-700 hover:text-gray-50">
              <VscDashboard className="text-lg" />
              Dashboard
            </Link>

            <div
            onClick={() => {
              dispatch(logout(navigate))
            }}
            className="flex w-full justify-center items-center gap-x-1 py-[10px]  text-sm text-gray-300 hover:bg-gray-700 hover:text-gray-50"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>

                                    

          </div>

    </div>
  )
}

export default ProfileDropDown