import {toast } from "react-hot-toast";
import {apiConnector} from "../apiConnector";
import {products} from "../apis"
import { resetCart } from "../../features/cartSlice";

const {GET_ALL_PRODUCT_API,GET_PRODUCT_DETAIL_API,DELETE_PRODUCT_IMAGE_API,
    CREATE_PRODUCT_API,CREATE_PRODUCT_IMAGE_API, UPDATE_PRODUCT_API,
  UPDATE_PRODUCTIMAGE_API, GET_PAYMENT_API, GET_PAYMENT_STATUS_API,
   GET_PAYMENT_DONE_STATUS_API, GET_PAYMENT_HISTORY_STATUS_API} = products;

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

// update product apis
export const updateProductDetails = async(data,token)=>{
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", UPDATE_PRODUCT_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("EDIT PRODUCT API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update PRODUCT Details")
    }
    toast.success("PRODUCT Details Updated Successfully")
    result = response?.data?.data
  } catch (error) {
    console.log("EDIT PRODUCT API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
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

        const response = await apiConnector("POST", GET_PRODUCT_DETAIL_API, {productId});

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

  // UPDATE a product image
  export const updateProductImage = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", UPDATE_PRODUCTIMAGE_API, data, {
        Authorization: `Bearer ${token}`,
      })
      console.log("UPDATE PRODUCT IMAGE API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not edit product")
      }
      toast.success("Lecture product image")
      result = response?.data?.data
    } catch (error) {
      console.log("UPDATE_PRODUCTIMAGE_API API ERROR............", error)
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

  export async function buyCourse(token,products,userDetails,navigate,dispatch) {
    
    const toastId = toast.loading("...loading");
    try {
        //initiate the order
        console.log("products is: ", products);
        const orderResponse = await  apiConnector("POST", GET_PAYMENT_API,{products},
            {
                Authorization: `Bearer ${token}`,
            }
        );
        dispatch(resetCart());
        toast.success("fine");
    } catch (error) {
        console.log("PAYMENT API ERROR.....", error);
        toast.error("Could not make Payment");
    }
    toast.dismiss(toastId)
}

export async function findPaymentStatus(token,user) {
    
  const toastId = toast.loading("...loading");
  let res;
  try {

      const paymentStatus = await  apiConnector("POST", GET_PAYMENT_STATUS_API,user,
          {
              Authorization: `Bearer ${token}`,
          }
      );
      console.log("data recieved:::::::: ",paymentStatus);
      if(paymentStatus.data.success){
        res = paymentStatus;
      }
      toast.success("findPaymentStatus successfull");
  } catch (error) {
      console.log("findPaymentStatus API ERROR.....", error);
      toast.error("Could not make Payment");
  }
  toast.dismiss(toastId);
  return res;
}

export async function PaymentStatusDone(token,data) {
    
  const toastId = toast.loading("...loading");
  let res;
  try {

      const paymentStatus = await  apiConnector("POST", GET_PAYMENT_DONE_STATUS_API,data,
          {
              Authorization: `Bearer ${token}`,
          }
      );
      console.log(paymentStatus);
      if(paymentStatus.data.success){
        res = paymentStatus;
      }
      toast.success("findPaymentStatus successfull");
  } catch (error) {
      console.log("findPaymentStatus API ERROR.....", error);
      toast.error("Could not make Payment");
  }
  toast.dismiss(toastId);
  return res;
}

export async function Paymenthistory(token) {
    
  const toastId = toast.loading("...loading");
  let res;
  try {

      const paymentHistory = await  apiConnector("POST", GET_PAYMENT_HISTORY_STATUS_API,{},
          {
              Authorization: `Bearer ${token}`,
          }
      );
      console.log(paymentHistory);
      if(paymentHistory.data.success){
        res = paymentHistory;
      }
      toast.success("paymentHistory successfull");
  } catch (error) {
      console.log("paymentHistory API ERROR.....", error);
      toast.error("Could not make Payment");
  }
  toast.dismiss(toastId);
  return res;
}
