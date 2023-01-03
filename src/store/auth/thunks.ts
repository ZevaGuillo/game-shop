import { registerUserWithEmailPassword } from "@/firebase/providers";
import { async } from "@firebase/util";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { checkingCredentials, login, logout } from "./authSlice";
// import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
// import { checkingCredentials, login, logout } from "./authSlice"

// export const checkingAuthentication = (email, password) => {
//     return async(dispatch) => {

//         dispatch(checkingCredentials());

//     }
// }

// export const startGoogleSignIn = ()=>{
//     return async(dispatch) => {

//         dispatch(checkingCredentials());
//         const result = await singInWithGoogle()

//         if(!result.ok) return dispatch( logout(result.errorMessage) )

//         dispatch( login(result) )

//     }
// }

export const startCreatingUserWithEmailPassword = ({email, password, displayName}:any): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {

        dispatch(checkingCredentials());

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword( {email, password, displayName} )

        if( !ok ) return dispatch( logout({errorMessage}) )

        dispatch( login({uid, displayName, email, photoURL}))
    }
}


// export const startCreatingUserWithEmailPassword = ({email, password, displayName}:any)=>{
//     return async(dispatch) =>{


//     }
// }

// export const startLoginWithEmailPassword = ({email, password})=>{
//     return async(dispatch) => {

//         dispatch(checkingCredentials());

//         const {ok, uid, photoURL,displayName ,errorMessage} = await loginWithEmailPassword({email, password})

//         if( !ok ) return dispatch( logout({errorMessage}) )

//         dispatch( login({uid, displayName, email, photoURL}))
//     }
// }

// export const startLogout = ()=>{
//     return async(dispatch)=>{

//         await logoutFirebase();
//         dispatch(clearNotesLogout())
//         dispatch( logout({}) );

//     }
// }