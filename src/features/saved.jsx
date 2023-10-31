import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value: []
}

export const savedSlice=createSlice({
    name: "saved",
    initialState,
    reducers: {
        add:(state,action)=>{
            state.value.push(action.payload)
        },
        remove: (state,action)=>{
            state.value=state.value.filter((obj)=>obj.id!==action.payload)
        }
    }
})

export default savedSlice.reducer
export const {add, remove}=savedSlice.actions