import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productEntireData: null,
  }

const  viewProductSlice = createSlice({
    name: "viewProduct",
    initialState:initialState,
    reducers:{
        setproductEntireData: (state, action) => {
            state.productEntireData = action.payload
        },
    }
})

export const {
    setproductEntireData
  } = viewProductSlice.actions
  
  export default viewProductSlice.reducer