// createSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    category:[]
};

export const categoryslice = createSlice({

    name: "category",
    initialState:initialState,
    reducers:  {
        // category
        addCategory: (state, action) =>{
            console.log("action is payload: ", action.payload);
            state.category = action.payload;
            console.log("category at add item is: ", state.category);
        },
        
    }
})

export const {addCategory} = categoryslice.actions;
export default categoryslice.reducer