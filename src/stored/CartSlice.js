import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
    name:"CartSlice",
    initialState:{
        items:[],
        count:0
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push({...action.payload,quantity:1})
            state.count++;
        },
        incrementItmes:(state,action)=>{

            const ele=state.items.find((item)=>item.id===action.payload.id)
            ele.quantity++;
            state.count++;
        },
        decrementItem:(state,action)=>{
            const ele=state.items.find((item)=>item.id===action.payload.id)
            if(ele.quantity>1){
            ele.quantity--;
            }
            else{
                state.items=state.items.filter((item)=>item.id!=action.payload.id)
            }
            state.count--;

        }
    }
})
export const {addItems,incrementItmes,decrementItem} = CartSlice.actions
export  default CartSlice.reducer
