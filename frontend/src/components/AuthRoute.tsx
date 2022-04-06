import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface authProperties {};

export const AuthRoute: React.FC<authProperties> = props => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();

    const [loading, setLoading]= useState(false);

    useEffect(() => {
        const AuthCheck = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
            } else {
                console.log('Please log in');
                navigate('/register');
            }
        });

        return () => AuthCheck();
    }, [auth]);


    if (loading){
        return(
            <p>Loading...</p>
        )
    }

  return (
    <>{children}</>
  );
}

export default AuthRoute;
