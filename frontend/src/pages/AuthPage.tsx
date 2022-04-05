import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function AuthPage() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setAuthing(false);
            })
    }

    return (
        <button onClick={() => signInWithGoogle()} disabled={authing}>Sign in with Google</button>
    );
}

export default AuthPage;