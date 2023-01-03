import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

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