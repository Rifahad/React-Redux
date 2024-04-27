// provider
// store
//reducer
//action


//store
//action = button click
//reducer = state update 
// provider = react il inject cheyth kodukkum

const INITIAL_STATE = {
    cartList:[],
    cartCount:0,
};

import {createSlice} from "@reduxjs/toolkit"

const cartSlice =createSlice({
    name:'cart',
    initialState:INITIAL_STATE,
    reducers:{
        addToCart:(state)=>{
            state.cartCount = 1
        },
        increment:(state)=>{
            state.cartCount += 1
        },
        decrement:(state)=>{
            state.cartCount -= 1
        },
    }
})

export const {increment, decrement ,addToCart}=cartSlice.actions

export default cartSlice.reducer;