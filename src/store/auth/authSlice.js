
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      status: 'checking', // 'checking', 'not-autenticated', 'autenticated'
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: null,
   },
   reducers: {
        login: ( state, { payload }) => {
         state.status= 'autenticated', // 'checking', 'not-autenticated', 'autenticated'
         state.uid= payload.uid;
         state.email= payload.email;
         state.displayName= payload.displayName;
         state.photoURL= payload.photoURL;
         state.errorMessage= null;

        },
        logout: ( state, { payload }) => {
         state.status= 'not-autenticated', // 'checking', 'not-autenticated', 'autenticated'
         state.uid= null;
         state.email= null;
         state.displayName= null;
         state.photoURL= null;
         state.errorMessage= payload?.errorMessage;

        },
        chekingCredentials: ( state ) => {
            state.status = 'checking';
        },
   }
});


// Action creators are generated for each case reducer function
export const { login, logout, chekingCredentials } = authSlice.actions