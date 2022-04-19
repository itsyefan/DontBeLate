import React, { useState } from "react";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Hero } from "../components/Hero";
import '../App.css';

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
        <div className="authPage">
            <Hero />
            <h2>To access the app, please sign in below</h2>
            <button onClick={() => signInWithGoogle()} disabled={authing}>Sign in with Google</button>
        </div>
            
    );
}

export default AuthPage;