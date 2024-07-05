import { createSlice } from "@reduxjs/toolkit";

// initializing initialState
const initialState={
    status:false,
    userData:null,
}

// creating slice
const authSlice=createSlice({

    // name
    name:"auth",

    // initial state
    initialState,
    
    // reducers
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
});

// exporting actions
export const {login,logout} = authSlice.actions;

// exporting reducer
export default authSlice.reducer;