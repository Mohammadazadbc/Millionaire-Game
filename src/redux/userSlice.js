import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    
    name:"user",
    initialState:{
        timmer:60,
    },
    reducers:{
        update:(state, action)=>{
            state.timmer = action.payload.timmer;
        },
    },
})

export const {update} = userSlice.actions;
export default userSlice.reducer;