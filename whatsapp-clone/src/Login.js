import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebases'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{ }, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            }))
            .catch((err) => alert(err.message));
    }
    // const auth = getAuth();
    // const signIn = () => {
    //     signInWithPopup(auth, provider)
    //     .then((result) => {
    //         // // This gives you a Google Access Token. You can use it to access the Google API.
    //         // const credential = GoogleAuthProvider.credentialFromResult(result);
    //         // const token = credential.accessToken;
    //         // // // The signed-in user info.
    //         // const user = result.user;
    //         // ...


    //         dispatch({
    //             type:actionTypes.SET_USER,
    //             user:result.user
    //         })
    //     }).catch((error) => {
    //         // Handle Errors here.
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // The email of the user's account used.
    //         const email = error.email;
    //         // The AuthCredential type that was used.
    //         const credential = GoogleAuthProvider.credentialFromError(error);
    //         // ...
    //         console.log(errorCode,errorMessage)
    //     });
    // }
    return (
        // Ben naming convention
        <div className='login'>
            <div className='login__container'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1021px-WhatsApp.svg.png'
                    alt='' />

                <div className='log__text'>
                    <h1>Sign in to Whatsapp</h1>
                </div>

                <Button onClick={signIn}>
                    sign in with google
                </Button>
            </div>
        </div>
    );
}

export default Login;
