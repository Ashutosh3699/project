import React, { useState } from 'react';
import { sidebarLinks } from '../../../data/dashboard-links';
import { useDispatch, useSelector } from 'react-redux';
// import Loading from '../../common/loader/Loading';
import SidebarLinks from './SidebarLinks';
import {logout} from "../../../services/operations/authApi"
import { useNavigate } from 'react-router-dom';
// import ConfirmationModal from '../../common/ConfirmationModal';
import { VscSignOut } from "react-icons/vsc";

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

  return (
    <div className='py-10  bg-gray-800  flex flex-col   gap-4 border-r-[1px]  border-gray-600 h-[100%]'>

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

        <div className=' h-[1px] w-10/12 mx-auto bg-gray-300  mt-6  mb-6'></div>

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

        {/* {
            confirmModal && <ConfirmationModal modalData={confirmModal}/> 
        } */}

    </div>
  )
}

export default SideBar