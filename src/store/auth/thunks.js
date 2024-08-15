import { loginWithEmailPassword, logoutFirabase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../journal/journalSlice"
import { chekingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, pasword ) => {
    return async( dispatch ) => {

        dispatch( chekingCredentials() )
    } 
}

export const startGoogleSingIn =  () => {
    return async( dispatch ) => {
        dispatch( chekingCredentials() )

        const result = await singInWithGoogle();
        // console.log({result});

        if( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) );
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( chekingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if ( !ok ) return dispatch( logout({ errorMessage }));

        dispatch( login({ uid, displayName, email, photoURL }));
    }
}

export const startLoginWithEmailPassword = ({ email, password}) => {
    return async( dispatch ) => {
        dispatch( chekingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await loginWithEmailPassword({ email, password });

        if ( !ok ) return dispatch( logout({ errorMessage }));

        dispatch( login({ uid, email, photoURL }));

    }
}

export const startLogout  = () => {
    return async( dispatch ) => {

        await logoutFirabase();

        dispatch( clearNotesLogout() );
        dispatch( logout({}) );
    } 
}