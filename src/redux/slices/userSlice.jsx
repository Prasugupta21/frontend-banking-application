
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currUser: null,
  error: null,
  
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currUser = action.payload;
 
      state.error = null;
    },
    signInFailure: (state, action) => {
    
      state.error = action.payload;
    },
    updateStart: (state) => {
      
      state.error = null;
    },
    updateSuccess: (state, action) => {
      state.currUser = action.payload;
      state.error = null;
    },
    updateFailure: (state, action) => {
      state.error = action.payload;
    },
    // deleteUserStart: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // deleteUserSuccess: (state) => {
    //   state.currentUser = null;
    //   state.loading = false;
    //   state.error = null;
    // },
    // deleteUserFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    signoutSuccess: (state) => {
      state.currUser = null;
      state.error = null;
   
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateStart,
  updateSuccess,
  updateFailure,
//   deleteUserStart,
//   deleteUserSuccess,
//   deleteUserFailure,
  signoutSuccess,
} = userSlice.actions;

export default userSlice.reducer;