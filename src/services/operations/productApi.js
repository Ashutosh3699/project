import {toast } from "react-hot-toast";
import {apiConnector} from "../apiConnector";
import {products} from "../apis"

const {GET_ALL_PRODUCT_API,GET_PRODUCT_DETAIL_API,DELETE_PRODUCT_IMAGE_API,
    CREATE_PRODUCT_API,CREATE_PRODUCT_IMAGE_API} = products;

export const addProductDetails= async(data,token)=>{
    const toastId = toast.loading("Loading...");
    let result = null;
    try {
        const response  = await apiConnector("POST", CREATE_PRODUCT_API,data,{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
            });

        if(!response.data.success){
            throw new Error("Could Not Add product Details")
        }
        toast.success("product Details Added Successfully");
        result = response?.data?.data;
    } catch (error) {
        console.log("CREATE_PRODUCT_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result;
}

// get ALL products
export const getAllProducts= async()=>{

    const toastId = toast.loading("Loading...")
    let result = [];
    try {
        const response  = await apiConnector("GET", GET_ALL_PRODUCT_API);

        if(!response.data.success){
            throw new Error("Could Not Fetch product Categories")
        }
        result = response?.data?.data
    } catch (error) {
        console.log("GET_ALL_PRODUCT_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result;
}

// fetch product details
export const fetchProductDetail= async(productId)=>{
    const toastId = toast.loading("Loading...")
    let result = null;
    try {
        const response  = await apiConnector("GET", GET_PRODUCT_DETAIL_API,{productId});

        if(!response.data.success){
            throw new Error("Could Not Fetch product by productID")
        }
        result = response?.data?.data
    } catch (error) {
        console.log("GET_PRODUCT_DETAIL_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result;
}

// create a product image
export const createProductImage = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", CREATE_PRODUCT_IMAGE_API, data, {
        Authorization: `Bearer ${token}`,
      })
      console.log("CREATE PRODUCT IMAGE API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Add Lecture")
      }
      toast.success("Lecture Added")
      result = response?.data?.data
    } catch (error) {
      console.log("CREATE_PRODUCT_IMAGE_API API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }

  // delete a product image
export const deleteProductImage = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("DELETE", DELETE_PRODUCT_IMAGE_API, data, {
        Authorization: `Bearer ${token}`,
      })
      console.log("DELETE  PRODUCT_IMAGE_API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Delete Lecture")
      }
      toast.success("Image Deleted")
      result = response?.data?.data
    } catch (error) {
      console.log("DELETE PRODUCT IMAGE API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }
