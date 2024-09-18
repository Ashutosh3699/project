// createSlice
import { createSlice } from "@reduxjs/toolkit";
// courseSlice

const initialState = {
    step: 1,
    paymentLoading: false,
    product: null,
    editProduct: false,
};

export const productSlice = createSlice({

    name: "product",
    initialState:initialState,
    reducers:  {
       setStep:(state,action)=> {
          state.step = action.payload;
       },
       setProduct:(state,action)=>{
        state.product = action.payload;
       },
       setEditProduct: (state,action)=>{
          state.editProduct = action.payload;
       },
       setPaymentLoading: (state,action)=>{
          state.paymentLoading = action.payload;
       },
       resetProductState: (state)=>{
        state.product = null;
        state.step=1;
        state.editProduct = false;
       }

    }
})

export const {
    setStep,
    setProduct,
    setEditProduct,
    setPaymentLoading,
    resetProductState,
  } = productSlice.actions
export default productSlice.reducer