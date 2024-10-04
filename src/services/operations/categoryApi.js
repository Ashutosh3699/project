import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import {categoryEndpoint} from "../apis";

const {GET_ALL_CATEGORY_API,
    GET_CATEGORY_PRODUCT_API,
    GET_TAG_PRODUCT_API,
    CREATE_CATEGORY_API,
    UPDATE_CATEGORY_API
} = categoryEndpoint;


export async function createCategory(token,data){
    
    const toastId = toast.loading("...loading");
    let result = [];

    try {
        const response = await apiConnector("POST",CREATE_CATEGORY_API, data, {
            Authorization: `Bearer ${token}`,
          });

          console.log("response at category in create is: ", response?.data?.data);
        if(!response.data.success){
            throw new Error("Could not found any category")
        }
        result = response?.data?.data;
        toast.success("created category successfully");
    } catch (error) {
        console.log("CREATE_CATEGORY_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result;
}

export async function updateCategory(token,data){
    
    const toastId = toast.loading("...loading");
    let result = [];

    try {
        const response = await apiConnector("POST",UPDATE_CATEGORY_API, data, {
            Authorization: `Bearer ${token}`,
          });

          console.log("response at updated in create is: ", response?.data?.data);
        if(!response.data.success){
            throw new Error("Could not updated any category")
        }
        result = response?.data?.data;
        toast.success("updated category successfully");
    } catch (error) {
        console.log("UPDATE_CATEGORY_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result;
}
// fetch all the categories
export async function  getAllCategories(){
    const toastId = toast.loading("...loading");
    let result = [];

    try {
        const response = await apiConnector("GET",GET_ALL_CATEGORY_API);

          console.log("response at get in category is: ", response?.data?.data);
        if(!response.data.success){
            throw new Error("Could not getting any category")
        }
        result = response?.data?.data;
        toast.success("get category successfully");
    } catch (error) {
        console.log("GET_ALL_CATEGORY_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result;
}

export async function getTagProduct(tagId){
    const toastId = toast.loading("...loading");
    let result = [];

    try {
        console.log("tag is: ", tagId)
        const response = await apiConnector("POST",GET_TAG_PRODUCT_API,{tagId});

          console.log("response at get in category is: ", response?.data?.data);
        if(!response.data.success){
            throw new Error("Could not getting any category")
        }
        result = response?.data?.data;
        toast.success("get category successfully");
    } catch (error) {
        console.log("GET_ALL_CATEGORY_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result;
}



