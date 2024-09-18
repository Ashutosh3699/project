import {toast } from "react-hot-toast";
import {setUser,setLoading} from "../../features/profileSlice";
import {apiConnector} from "../apiConnector";
import {settingEndpoints} from "../apis"

const {UPDATE_PROFILE_API,CHANGE_PASSWORD_API,DELETE_PROFILE_API} = settingEndpoints;

export function updateProfile(data,token){

    return async(dispatch)=>{
        const toastId = toast.loading("loading...");
        dispatch(setLoading(true));

        try {
            
            const response = await apiConnector("PUT", UPDATE_PROFILE_API,data,{
                "Authorization": `Bearer ${token}`
            });

            console.log(" response is: ", response);

            if(!response.data.success){
                throw new Error(response.data.success);
            }

            // working here
            dispatch(setUser(response.data.data));
            toast.success("Upload of profile is successfully done");

        } catch (error) {
            toast.error("update of profile is failed while process..");
            console.log(error);
        }

        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function changePassword(data,token){

    return async(dispatch)=>{
        const toastId = toast.loading("loading...");
        dispatch(setLoading(true));

        try {
            
            const response = await apiConnector("POST", CHANGE_PASSWORD_API,data,{
                "Authorization": `Bearer ${token}`
            });

            console.log(" response is: ", response);

            if(!response.data.success){
                throw new Error(response.data.success);
            }

            // working here
            dispatch(setUser(response.data.data));
            toast.success("Password is changed successfully done");

        } catch (error) {
            toast.error("password change is failed while process..");
            console.log(error);
        }

        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

// not needed yet****************************
export function DeleteAccount(token){
    return async(dispatch)=>{
        const toastId = toast.loading("loading...");
        dispatch(setLoading(true));

        try {
            
            const response = await apiConnector("DELETE", DELETE_PROFILE_API,null,{
                "Authorization": `Bearer ${token}`
            });

            console.log(" response is: ", response);

            if(!response.data.success){
                throw new Error(response.data.success);
            }

            // working here
            dispatch(setUser(null));
            toast.success("Delete account is successfully done");

        } catch (error) {
            toast.error("Delete account is failed while process..");
            console.log(error);
        }

        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

