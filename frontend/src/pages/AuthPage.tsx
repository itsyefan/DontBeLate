import React from "react";
import { initializeApp } from "firebase/app";

function AuthPage() {

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_KEY,
        authDomain: process.env.REACT_APP_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID
    };

    const app = initializeApp(firebaseConfig);

    return (
        <div>hi</div>
    );
}

export default AuthPage;