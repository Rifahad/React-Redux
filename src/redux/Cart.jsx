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
        addToCart:(state,action)=>{
            state.cartList.push({
                ...action.payload,
                count:1
            })

        },
        increment:(state,action)=>{
          const productID= action.payload
          state.cartList.forEach((item)=>{
            if (item?.id === productID) {
                item.count++;
            }
          })
        },
        decrement:(state,action)=>{
            const productID= action.payload
            state.cartList.forEach((item)=>{
              if (item?.id === productID) {
                  item.count--;
              }
            })
        },
    }
})

export const {increment, decrement ,addToCart}=cartSlice.actions

export default cartSlice.reducer;