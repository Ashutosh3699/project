import React from 'react'
import { useSelector } from 'react-redux'
import { ACCOUNT_TYPE } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';

const InstructorRoute = ({children}) => {

    const {user} = useSelector((state)=>state.profile);
    const navigate= useNavigate();

    if(user.accountType === ACCOUNT_TYPE.ADMIN){
        return children
    }
    else{
        navigate("/dashboard/my-profile")
    }
}

export default InstructorRoute