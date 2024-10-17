import React from 'react'
import { useSelector } from 'react-redux'
import { ACCOUNT_TYPE } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';

const ClientRoute = ({children}) => {

    const {user} = useSelector((state)=>state.profile);
    const navigate= useNavigate();

    if(user.accountType === ACCOUNT_TYPE.CLIENT){
        return children
    }
    else{
        navigate("/dashboard/my-profile")
    }
}

export default ClientRoute