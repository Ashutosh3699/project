// createSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    category:[],
    categoryList: [],
    selectedCategory: null,
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
        addFetchedCategory: (state,action)=>{

            state.categoryList = action.payload;
            console.log("action at fetched category", action.payload);
        },
        setSelecetedCategory: (state,action)=>{
            state.selectedCategory = action.payload;
        }
        
    }
})

export const {addCategory,addFetchedCategory,setSelecetedCategory} = categoryslice.actions;
export default categoryslice.reducer