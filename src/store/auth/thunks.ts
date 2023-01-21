import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "@/firebase/providers";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { checkingCredentials, login, logout } from "./authSlice";

// export const checkingAuthentication = (email, password) => {
//     return async(dispatch) => {

//         dispatch(checkingCredentials());

//     }
// }

export const startGoogleSignIn = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {

        dispatch(checkingCredentials());
        const result = await singInWithGoogle()

        console.log(result);
        

        if(!result.ok) return dispatch( logout(result.errorMessage) )

        dispatch( login(result) )

    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}:any): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {

        dispatch(checkingCredentials());

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword( {email, password, displayName} )

        if( !ok ) return dispatch( logout({errorMessage}) )

        dispatch( login({uid, displayName, email, photoURL}))
    }
}

export const startLoginWithEmailPassword = ({email, password}:any): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {


        dispatch(checkingCredentials());

        const {ok, uid, photoURL,displayName ,errorMessage} = await loginWithEmailPassword({email, password})

        if( !ok ) return dispatch( logout({errorMessage}) )

        dispatch( login({uid, displayName, email, photoURL}))
    }
}

export const startLogout = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {

        await logoutFirebase();
        // dispatch(clearNotesLogout())
        dispatch( logout({}) );

    }
}