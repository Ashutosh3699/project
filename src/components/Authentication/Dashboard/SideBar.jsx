import React, { useRef, useState } from 'react';
import { sidebarLinks } from '../../../data/dashboard-links';
import { useDispatch, useSelector } from 'react-redux';
// import Loading from '../../common/loader/Loading';
import SidebarLinks from './SidebarLinks';
import {logout} from "../../../services/operations/authApi"
import { useNavigate } from 'react-router-dom';
// import ConfirmationModal from '../../common/ConfirmationModal';
import { VscSignOut } from "react-icons/vsc";
import ConfirmationModal from '../../common/ConfirmationModal';
import { FaPlus } from 'react-icons/fa6';
import useOutsideClick from '../../../customHook/useOutsideClick';

const SideBar = () => {

    const {user,loading: profileLoading} = useSelector((state)=>state.profile);
    const { loading: authLoading} = useSelector((state)=>state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [confirmModal, setConfirmModal] = useState(null);

    if(profileLoading || authLoading){
        return (
            // <Loading/>
            <div>
                ....loading
            </div>

        )
    }

    const [attributeclass,setattributeClass] = useState("invisible opacity-0");

    const clickHandler=()=>{
      if(attributeclass === "invisible opacity-0"){
        setattributeClass("visible opacity-100");
      }
      else{
        setattributeClass("invisible opacity-0");
      }
    }

    const divref1 = useRef(null);
    const handleClickOutside1 = () => {
      // function to be added
      setattributeClass("invisible opacity-0");
    };
    useOutsideClick(divref1, handleClickOutside1);
  


  return (
    <div className=' flex py-3  md:py-10 bg-regal-blue  md:bg-gray-800   flex-col   gap-4 border-r-[1px]
       border-gray-600 h-[100%] md:min-h-[100%]'>
        <div className='w-full relative'>
           <div className='md:hidden text-xl text-blue-50 flex gap-2 items-center justify-center '  onClick={clickHandler} ref={divref1}>
                Menu  <FaPlus/>
           </div>
           <div className={`${attributeclass}   
           w-[60%] absolute bg-gray-800 -bottom-50 right-0 transition-all duration-300 py-3 ml-3  rounded-md `}>
                <div className='flex flex-col'>
                    {
                        sidebarLinks.map((item,index)=>{
                            
                            if(item.type && item.type !== user?.accountType){
                                return null;
                            }
                            return <SidebarLinks key={index} link={item} iconName={item.icon}/>
                        })
                    }

                </div>

                <div className='flex flex-col '>

                    <SidebarLinks link={{
                        name: "Setting",
                        path: "/dashboard/settings"
                    }} 
                    iconName={"VscSettingsGear"}
                    />

                    {/* generic button to be created for logout */}
                    <button 
                    onClick={()=>{
                        setConfirmModal({
                        text1: "Are you sure",
                        text2: "You will be LOGGED out",
                        btn1text: "logOut",
                        btn2text: "cancel",
                        btn1Handler: ()=> dispatch(logout(navigate)),
                        btn2Handler: ()=> setConfirmModal(null)
                    })
                    }}
                    className='flex flex-row gap-2  py-2 px-8 items-center text-gray-50 '
                    >
                        <VscSignOut />
                    <div>  logout  </div>
                    
                    </button>
                    
                </div>


           </div>
        </div>
       
        <div className='hidden md:flex flex-col'>
            {
                sidebarLinks.map((item,index)=>{
                    
                    if(item.type && item.type !== user?.accountType){
                        return null;
                    }
                    
                    return <SidebarLinks key={index} link={item} iconName={item.icon}/>
                })
            }

        </div>

        <div className='hidden md:block h-[1px] w-10/12 mx-auto bg-gray-300  mt-6  mb-6'></div>

        <div className='hidden md:flex flex-col '>

            <SidebarLinks link={{
                name: "Setting",
                path: "/dashboard/settings"
            }} 
            iconName={"VscSettingsGear"}
             />


             {/* generic button to be created for logout */}
             <button 
             onClick={()=>{
                setConfirmModal({
                text1: "Are you sure",
                text2: "You will be LOGGED out",
                btn1text: "logOut",
                btn2text: "cancel",
                btn1Handler: ()=> dispatch(logout(navigate)),
                btn2Handler: ()=> setConfirmModal(null)
             })
             }}
             className='flex flex-row gap-2  py-2 px-8 items-center text-gray-50 '
             >
                <VscSignOut />
             <div>  logout  </div>
             
             </button>
            
        </div>

        {
            confirmModal &&  <ConfirmationModal modalData={confirmModal}/>
        }

    </div>
  )
}

export default SideBar