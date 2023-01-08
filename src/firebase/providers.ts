import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async()=>{
    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider);

        const {displayName, email, photoURL, uid} = result.user;
        

        return{
            ok: true,
            displayName, email, photoURL, uid
        }
        

    } catch (error:any) {
        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message,
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName}:any) => {
    try {
        
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        await updateProfile( FirebaseAuth.currentUser!, {displayName} );

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error:any) {
        return {ok: false, errorMessage: error.message}
    }
}

export const loginWithEmailPassword = async ({ email, password }:any) => {
    try {
      const resp = await signInWithEmailAndPassword(
        FirebaseAuth,
        email,
        password
      );
      const { uid, photoURL, displayName } = resp.user;
  
      return {
        ok: true,
        uid,
        photoURL,
        email,
        displayName,
      };
    } catch (error:any) {
      return { ok: false, errorMessage: error.message };
    }
  };